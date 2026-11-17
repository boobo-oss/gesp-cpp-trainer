/* GESP C++ 1—8 级复习手册 · 知识点检索 */
(function () {
  "use strict";

  var LEVELS = window.GESP_KB_LEVELS || {};
  var cache = {};
  var curLevel = 1;
  var curData = null;
  var flat = [];

  /* ---------- 索引与检索 ---------- */
  function blockText(b) {
    if (b.t === "list") return b.v.join(" ");
    if (b.t === "table") return b.head.join(" ") + " " + b.rows.map(function (r) { return r.join(" "); }).join(" ");
    if (b.t === "ex") return (b.blocks || []).map(blockText).join(" ");
    return String(b.v);
  }

  function buildFlat(lv) {
    var data = LEVELS[lv], list = [];
    var extra = (window.GESP_KB_PATCH || {})[lv] || {};
    if (!data) return list;
    data.chapters.forEach(function (ch) {
      ch.sections.forEach(function (sec) {
        var add = extra[sec.id] || null;
        var blocks = sec.blocks.slice();
        if (add && add.def) blocks.unshift({ t: "def", v: add.def });
        if (add && add.ex && add.ex.length) blocks.push({ t: "ex", blocks: add.ex });
        var parts = [sec.title, sec.kw || ""];
        blocks.forEach(function (b) { parts.push(blockText(b)); });
        list.push({
          id: sec.id,
          title: sec.title,
          chNo: ch.no,
          chTitle: ch.title,
          blocks: blocks,
          text: parts.join(" "),
          textL: parts.join(" ").toLowerCase(),
          titleL: sec.title.toLowerCase()
        });
      });
    });
    return list;
  }

  function pageLevel() {
    var n = parseInt(document.body.getAttribute("data-level"), 10);
    return n >= 1 && n <= 8 ? n : 1;
  }

  function setLevel(lv) {
    curLevel = LEVELS[lv] ? lv : 1;
    curData = LEVELS[curLevel] || null;
    flat = cache[curLevel] || (cache[curLevel] = buildFlat(curLevel));
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function termsOf(q) {
    return String(q).toLowerCase().split(/\s+/).filter(function (t) { return t.length > 0; });
  }

  function escTerm(t) { return esc(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  function highlight(s, terms) {
    var out = esc(s);
    if (!terms.length) return out;
    var pats = terms.map(function (t) { return escTerm(t); }).filter(Boolean);
    if (!pats.length) return out;
    try {
      return out.replace(new RegExp("(" + pats.join("|") + ")", "gi"), '<mark class="kb-mark">$1</mark>');
    } catch (e) {
      return out;
    }
  }

  function search(q) {
    var terms = termsOf(q);
    if (!terms.length) return [];
    var out = [];
    flat.forEach(function (it, i) {
      var score = 0, ok = true;
      terms.forEach(function (t) {
        var inTitle = it.titleL.indexOf(t) >= 0 || String(it.id).toLowerCase() === t;
        if (!inTitle && it.textL.indexOf(t) < 0) { ok = false; return; }
        if (inTitle) score += 10;
        if (String(it.id).toLowerCase() === t) score += 6;
        if (it.textL.indexOf(t) >= 0) score += 2;
      });
      if (ok) out.push({ it: it, idx: i, score: score });
    });
    out.sort(function (a, b) { return b.score - a.score || a.idx - b.idx; });
    return out;
  }

  function snippet(it, terms) {
    var text = it.text.replace(/\s+/g, " ");
    if (!terms.length) return text.slice(0, 90);
    var lower = text.toLowerCase(), pos = -1;
    terms.forEach(function (t) {
      var p = lower.indexOf(t);
      if (p >= 0 && (pos < 0 || p < pos)) pos = p;
    });
    if (pos < 0) pos = 0;
    var start = Math.max(0, pos - 30), end = Math.min(text.length, pos + 90);
    return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
  }

  /* ---------- 面板 DOM ---------- */
  var ICON = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>';

  var mask, panel, input, body, hint, lastFocus = null, inited = false;

  function blockHtml(b) {
    if (b.t === "def") return '<div class="kb-def"><span class="kb-tag">定义</span><p>' + esc(b.v) + "</p></div>";
    if (b.t === "ex") return '<div class="kb-ex"><span class="kb-tag">示例</span>' + (b.blocks || []).map(blockHtml).join("") + "</div>";
    if (b.t === "code") return '<pre class="kb-code"><code>' + esc(b.v) + "</code></pre>";
    if (b.t === "note") return '<div class="kb-note">' + esc(b.v) + "</div>";
    if (b.t === "table") {
      return '<div class="kb-table-wrap"><table class="kb-table"><thead><tr>' +
        b.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
        "</tr></thead><tbody>" +
        b.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
        "</tbody></table></div>";
    }
    if (b.t === "list") {
      var tag = b.ol ? "ol" : "ul";
      return "<" + tag + ' class="kb-list">' + b.v.map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</" + tag + ">";
    }
    return '<p class="kb-p">' + esc(b.v) + "</p>";
  }

  function showToc() {
    hint.textContent = curLevel + " 级共 " + flat.length + " 个小节，可直接输入关键词检索";
    var html = '<div class="kb-toc">';
    curData.chapters.forEach(function (ch, ci) {
      html += '<div class="kb-toc-ch"><div class="kb-toc-title"><b>' + (ch.no === "0" ? "序" : ch.no) + "</b><span>" + esc(ch.title) + "</span></div>";
      html += ch.sections.map(function (sec) {
        var idx = -1;
        flat.forEach(function (f, i) { if (f.id === sec.id && f.chNo === ch.no) idx = i; });
        return '<button class="kb-toc-item" data-i="' + idx + '"><i>' + esc(sec.id) + "</i><span>" + esc(sec.title) + "</span></button>";
      }).join("");
      html += "</div>";
    });
    body.innerHTML = html + "</div>";
    body.querySelectorAll(".kb-toc-item").forEach(function (btn) {
      btn.addEventListener("click", function () { showDetail(Number(btn.getAttribute("data-i"))); });
    });
    body.scrollTop = 0;
  }

  function showResults(q) {
    var terms = termsOf(q);
    var res = search(q);
    hint.textContent = res.length ? "找到 " + res.length + " 处相关小节" : "没有匹配内容，试试「取模」「for」「scanf」「命名」等关键词";
    if (!res.length) {
      body.innerHTML = '<div class="kb-empty">未检索到「' + esc(q) + "」。<br>本功能当前收录的是《" + esc(curData ? curData.title : "") + "》，可换关键词或切换等级再试。<br>" +
        '<button class="kb-back" id="kbEmptyToc">清空关键词，浏览全部目录</button></div>';
      var t = document.getElementById("kbEmptyToc");
      if (t) t.addEventListener("click", function () { input.value = ""; showToc(); });
      body.scrollTop = 0;
      return;
    }
    body.innerHTML = '<div class="kb-hits">' + res.map(function (r) {
      return '<button class="kb-hit" data-i="' + r.idx + '">' +
        '<span class="kb-hit-no">' + esc(r.it.id) + "</span>" +
        '<span class="kb-hit-main"><b>' + highlight(r.it.title, terms) + "</b>" +
        '<em>第 ' + esc(r.it.chNo) + " 章 · " + esc(r.it.chTitle) + "</em>" +
        '<span class="kb-hit-snip">' + highlight(snippet(r.it, terms), terms) + "</span></span></button>";
    }).join("") + "</div>";
    body.querySelectorAll(".kb-hit").forEach(function (btn) {
      btn.addEventListener("click", function () { showDetail(Number(btn.getAttribute("data-i"))); });
    });
    body.scrollTop = 0;
  }

  function showDetail(idx) {
    var it = flat[idx];
    if (!it) return;
    hint.textContent = "第 " + it.chNo + " 章 · " + it.chTitle;
    var html = '<button class="kb-back" id="kbBack">← 返回检索结果</button>' +
      '<article class="kb-detail"><div class="kb-detail-eyebrow">' + esc(it.chNo === "0" ? "手册说明" : "第 " + it.chNo + " 章 · " + it.chTitle) + "</div>" +
      "<h2>" + esc(it.id) + " " + esc(it.title) + "</h2>" +
      it.blocks.map(blockHtml).join("") + "</article>";
    var prev = flat[idx - 1], next = flat[idx + 1];
    html += '<div class="kb-nav">' +
      (prev ? '<button class="kb-nav-btn" data-i="' + (idx - 1) + '"><small>上一节</small><span>' + esc(prev.title) + "</span></button>" : "<span></span>") +
      (next ? '<button class="kb-nav-btn next" data-i="' + (idx + 1) + '"><small>下一节</small><span>' + esc(next.title) + "</span></button>" : "<span></span>") +
      "</div>";
    body.innerHTML = html;
    var back = document.getElementById("kbBack");
    if (back) back.addEventListener("click", function () {
      if (input.value.trim()) showResults(input.value); else showToc();
    });
    body.querySelectorAll(".kb-nav-btn").forEach(function (b) {
      b.addEventListener("click", function () { showDetail(Number(b.getAttribute("data-i"))); body.scrollTop = 0; });
    });
    body.scrollTop = 0;
  }

  function openPanel(query) {
    if (!inited) init();
    lastFocus = document.activeElement;
    panel.classList.add("show");
    mask.classList.add("show");
    document.body.classList.add("kb-locked");
    panel.setAttribute("aria-hidden", "false");
    if (query) {
      input.value = query;
      showResults(query);
    } else if (!input.value.trim()) {
      showToc();
    } else {
      showResults(input.value);
    }
    setTimeout(function () { try { input.focus(); input.select(); } catch (e) { /* 忽略 */ } }, 260);
  }

  function closePanel() {
    panel.classList.remove("show");
    mask.classList.remove("show");
    document.body.classList.remove("kb-locked");
    panel.setAttribute("aria-hidden", "true");
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) { /* 忽略 */ } }
  }

  function syncHead() {
    var eb = document.getElementById("kbEyebrow");
    if (eb) eb.textContent = curLevel + " 级复习手册";
    var ft = document.getElementById("kbFoot");
    if (ft && curData) ft.textContent = "内容来自《" + curData.title + "》，可边答题边查阅";
  }

  function renderLevels() {
    var el = document.getElementById("kbLevels");
    var html = "";
    for (var i = 1; i <= 8; i++) {
      var has = !!LEVELS[i];
      html += '<button type="button" class="kb-lv' + (i === curLevel ? " active" : "") + '" data-lv="' + i + '"' + (has ? "" : " disabled") + ">" +
        i + "<small>级</small></button>";
    }
    el.innerHTML = html;
    el.querySelectorAll(".kb-lv").forEach(function (b) {
      b.addEventListener("click", function () {
        var lv = Number(b.getAttribute("data-lv"));
        if (lv === curLevel || !LEVELS[lv]) return;
        setLevel(lv);
        renderLevels();
        syncHead();
        if (input.value.trim()) showResults(input.value); else showToc();
      });
    });
  }

  function init() {
    if (inited) return;
    inited = true;

    mask = document.createElement("div");
    mask.className = "kb-mask";
    panel = document.createElement("aside");
    panel.className = "kb-panel";
    panel.setAttribute("aria-hidden", "true");
    panel.innerHTML =
      '<header class="kb-head"><div><div class="kb-eyebrow" id="kbEyebrow">复习手册</div><b>知识点检索</b></div>' +
      '<button class="kb-close" id="kbClose" aria-label="关闭">✕</button></header>' +
      '<div class="kb-levels" id="kbLevels"></div>' +
      '<div class="kb-search"><span class="kb-search-ico">' + ICON + "</span>" +
      '<input id="kbInput" type="search" autocomplete="off" placeholder="输入关键词：循环、ASCII、链表、DP、%d…"></div>' +
      '<div class="kb-hint" id="kbHint"></div>' +
      '<div class="kb-body" id="kbBody"></div>' +
      '<div class="kb-foot" id="kbFoot">内容来自《GESP C++ 1级全套复习手册》，可边答题边查阅</div>';
    document.body.appendChild(mask);
    document.body.appendChild(panel);

    input = document.getElementById("kbInput");
    body = document.getElementById("kbBody");
    hint = document.getElementById("kbHint");

    document.getElementById("kbClose").addEventListener("click", closePanel);
    mask.addEventListener("click", closePanel);
    input.addEventListener("input", function () {
      if (input.value.trim()) showResults(input.value); else showToc();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("show")) closePanel();
    });

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "kb-open";
    btn.id = "kbOpenBtn";
    btn.innerHTML = ICON + "<span>查手册</span>";
    var topbar = document.querySelector(".topbar");
    if (topbar) {
      var home = topbar.querySelector(".home-link");
      topbar.insertBefore(btn, home || null);
    } else {
      var nav = document.querySelector(".home-nav");
      if (nav) {
        btn.classList.add("kb-open-home");
        var tag = nav.querySelector(".tag");
        nav.insertBefore(btn, tag || null);
      } else {
        btn.classList.add("kb-fab");
        document.body.appendChild(btn);
      }
    }
    btn.addEventListener("click", function () { openPanel(""); });

    setLevel(pageLevel());
    renderLevels();
    syncHead();
    showToc();
  }

  window.GespKB = {
    init: init,
    open: function (query) { openPanel(query || ""); },
    close: closePanel,
    entries: function (lv) { return cache[lv] || (cache[lv] = buildFlat(lv)); }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
