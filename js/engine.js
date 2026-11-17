/* GESP C++ 知识闯关 · 通用答题引擎 */
(function () {
  "use strict";

  var G = {};

  /* ---------- 随机数与小工具 ---------- */
  G.ri = function (a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; };
  G.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
  G.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  G.esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  G.nums = function (ans, count, min) {
    count = count || 3;
    min = min === undefined ? 0 : min;
    var out = [], used = {}, guard = 0, base = Number(ans);
    used[base] = true;
    var deltas = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, -6];
    while (out.length < count && guard++ < 200) {
      var v = base + G.pick(deltas);
      if (v < min || used[v]) continue;
      used[v] = true; out.push(v);
    }
    var add = 1;
    while (out.length < count) {
      var nv = base + add++;
      if (nv >= min && !used[nv]) { used[nv] = true; out.push(nv); }
    }
    return out;
  };

  /* ---------- 题目构造 ---------- */
  G.single = function (d, q, correct, wrongs, explain) {
    return { d: d, kind: "single", q: q, correct: correct, wrongs: wrongs || [], explain: explain || "" };
  };
  G.judge = function (d, q, ans, explain) {
    return { d: d, kind: "judge", q: q, ans: !!ans, explain: explain || "" };
  };
  G.gen = function (d, fn) { return { d: d, kind: "single", gen: fn }; };
  G.genJ = function (d, fn) { return { d: d, kind: "judge", gen: fn }; };

  function build(spec) {
    var raw = spec.gen ? spec.gen() : spec;
    if (spec.kind === "judge") {
      return {
        d: spec.d, type: "judge", stem: raw.q,
        options: ["正确", "错误"],
        answer: raw.ans ? 0 : 1,
        explain: raw.explain || ""
      };
    }
    var correct = String(raw.correct);
    var opts = [correct], seen = {};
    seen[correct] = true;
    (raw.wrongs || []).forEach(function (w) {
      var s = String(w);
      if (opts.length < 4 && !seen[s]) { seen[s] = true; opts.push(s); }
    });
    ["以上都不对", "无法确定", "以上都对"].forEach(function (f) {
      if (opts.length < 4 && !seen[f]) { seen[f] = true; opts.push(f); }
    });
    var k = 1;
    while (opts.length < 4) { opts.push("选项" + (++k)); }
    var shuffled = G.shuffle(opts);
    return {
      d: spec.d, type: "single", stem: raw.q,
      options: shuffled,
      answer: shuffled.indexOf(correct),
      explain: raw.explain || ""
    };
  }

  /* ---------- 常用算法工具（供题库生成器调用） ---------- */
  G.gcd = function (a, b) { return b === 0 ? Math.abs(a) : G.gcd(b, a % b); };
  G.lcm = function (a, b) { return a / G.gcd(a, b) * b; };
  G.fact = function (n) { var r = 1; for (var i = 2; i <= n; i++) r *= i; return r; };
  G.C = function (n, k) {
    if (k < 0 || k > n) return 0;
    k = Math.min(k, n - k);
    var r = 1;
    for (var i = 1; i <= k; i++) r = r * (n - k + i) / i;
    return Math.round(r);
  };
  G.A = function (n, k) { return Math.round(G.fact(n) / G.fact(n - k)); };
  G.qpow = function (a, b, m) {
    var r = 1 % m; a %= m;
    while (b > 0) { if (b & 1) r = r * a % m; a = a * a % m; b >>= 1; }
    return r;
  };
  G.lis = function (arr) {
    var dp = [], best = 0;
    for (var i = 0; i < arr.length; i++) {
      dp[i] = 1;
      for (var j = 0; j < i; j++) if (arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
      best = Math.max(best, dp[i]);
    }
    return best;
  };
  G.lcs = function (a, b) {
    var dp = [];
    for (var i = 0; i <= a.length; i++) dp.push(new Array(b.length + 1).fill(0));
    for (i = 1; i <= a.length; i++)
      for (var j = 1; j <= b.length; j++)
        dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    return dp[a.length][b.length];
  };
  G.knapsack = function (items, cap) {
    var dp = new Array(cap + 1).fill(0);
    items.forEach(function (it) {
      for (var j = cap; j >= it.w; j--) dp[j] = Math.max(dp[j], dp[j - it.w] + it.v);
    });
    return dp[cap];
  };
  G.dijkstra = function (n, edges, s, undirected) {
    var dist = new Array(n + 1).fill(Infinity), used = new Array(n + 1).fill(false);
    dist[s] = 0;
    for (var t = 1; t <= n; t++) {
      var u = -1;
      for (var i = 1; i <= n; i++) if (!used[i] && (u === -1 || dist[i] < dist[u])) u = i;
      if (u === -1 || dist[u] === Infinity) break;
      used[u] = true;
      edges.forEach(function (e) {
        var a = e[0], b = e[1], w = e[2];
        if (a === u && dist[b] > dist[u] + w) dist[b] = dist[u] + w;
        if (undirected && b === u && dist[a] > dist[u] + w) dist[a] = dist[u] + w;
      });
    }
    return dist;
  };
  G.kruskal = function (n, edges) {
    var fa = [], sum = 0, cnt = 0;
    for (var i = 1; i <= n; i++) fa[i] = i;
    function find(x) { return fa[x] === x ? x : fa[x] = find(fa[x]); }
    edges.slice().sort(function (a, b) { return a[2] - b[2]; }).forEach(function (e) {
      var u = find(e[0]), v = find(e[1]);
      if (u !== v) { fa[v] = u; sum += e[2]; cnt++; }
    });
    return cnt === n - 1 ? sum : -1;
  };
  G.floyd = function (n, edges) {
    var d = [];
    for (var i = 1; i <= n; i++) {
      d[i] = [];
      for (var j = 1; j <= n; j++) d[i][j] = i === j ? 0 : Infinity;
    }
    edges.forEach(function (e) { d[e[0]][e[1]] = Math.min(d[e[0]][e[1]], e[2]); d[e[1]][e[0]] = Math.min(d[e[1]][e[0]], e[2]); });
    for (var k = 1; k <= n; k++)
      for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
          if (d[i][k] + d[k][j] < d[i][j]) d[i][j] = d[i][k] + d[k][j];
    return d;
  };
  G.islands = function (grid) {
    var n = grid.length, m = grid[0].length, seen = [], cnt = 0;
    for (var i = 0; i < n; i++) seen.push(new Array(m).fill(false));
    function dfs(x, y) {
      if (x < 0 || y < 0 || x >= n || y >= m || seen[x][y] || !grid[x][y]) return;
      seen[x][y] = true;
      dfs(x + 1, y); dfs(x - 1, y); dfs(x, y + 1); dfs(x, y - 1);
    }
    for (i = 0; i < n; i++) for (var j = 0; j < m; j++) if (!seen[i][j] && grid[i][j]) { cnt++; dfs(i, j); }
    return cnt;
  };
  G.minMerge = function (piles) {
    var n = piles.length, dp = [], sum = [0];
    for (var i = 0; i < n; i++) { dp.push(new Array(n).fill(0)); sum.push(sum[i] + piles[i]); }
    for (var len = 2; len <= n; len++)
      for (i = 0; i + len - 1 < n; i++) {
        var j = i + len - 1; dp[i][j] = Infinity;
        for (var k = i; k < j; k++) dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + sum[j + 1] - sum[i]);
      }
    return dp[0][n - 1];
  };

  /* ---------- 进度存储 ---------- */
  var KEY = "gesp-cpp-progress-v1";
  function readAll() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; }
  }
  function writeAll(v) {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* 隐私模式下不保存 */ }
  }
  function kpProgress(id) {
    var all = readAll(), p = all[id];
    return {
      scores: (p && p.scores) || [0, 0, 0],
      passed: (p && p.passed) || [false, false, false]
    };
  }
  function record(id, d, score) {
    var all = readAll();
    var p = all[id] || { scores: [0, 0, 0], passed: [false, false, false] };
    p.scores[d - 1] = Math.max(p.scores[d - 1] || 0, score);
    if (score >= 4) p.passed[d - 1] = true;
    all[id] = p;
    writeAll(all);
  }

  G.KEY = KEY;
  G.getProgress = kpProgress;

  /* ---------- 页面启动 ---------- */
  var DIFF_NAMES = ["基础", "进阶", "挑战"];

  G.boot = function (level) {
    var treeEl = document.getElementById("tree");
    var content = document.getElementById("content");
    var crumb = document.getElementById("crumb");
    var goalEl = document.getElementById("levelGoal");
    var switchEl = document.getElementById("levelSwitch");
    var menuBtn = document.getElementById("menuBtn");
    var overlay = document.getElementById("overlay");

    document.title = "GESP C++ " + level.title + " · 知识闯关";
    if (crumb) crumb.textContent = level.title + " · 知识闯关";
    if (goalEl) goalEl.textContent = level.goal;
    if (switchEl) {
      var links = "";
      for (var i = 1; i <= 8; i++) {
        links += '<a class="lv' + (i === level.level ? " active" : "") + '" href="level' + i + '.html">' + i + "<small>级</small></a>";
      }
      switchEl.innerHTML = links;
    }

    var allPoints = [];
    level.chapters.forEach(function (ch, ci) {
      ch.points.forEach(function (p) { allPoints.push({ p: p, ch: ch, ci: ci }); });
    });

    var openChapters = { 0: true };
    var current = null;
    var activeDiff = 1;
    var run = null;

    function closeNav() { document.body.classList.remove("nav-open"); }
    function scrollTop() { try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) { window.scrollTo(0, 0); } }
    function openKB(query) { if (window.GespKB) window.GespKB.open(query || ""); }

    function tabsHtml() {
      var pr = current ? kpProgress(current.p.id) : { scores: [0, 0, 0], passed: [false, false, false] };
      return [1, 2, 3].map(function (d) {
        var locked = d > 1 && !pr.passed[d - 2];
        var done = pr.passed[d - 1];
        var small = locked ? "未解锁" : (done ? "已通过" : (pr.scores[d - 1] ? pr.scores[d - 1] + "/5" : "待挑战"));
        return '<button class="diff' + (d === activeDiff ? " active" : "") + (locked ? " locked" : "") + '" data-d="' + d + '"' + (locked ? " disabled" : "") + '>' +
          "<span>" + DIFF_NAMES[d - 1] + "</span><small>" + small + "</small></button>";
      }).join("");
    }

    function refreshTree() {
      var html = "";
      level.chapters.forEach(function (ch, ci) {
        var open = !!openChapters[ci] || (current && current.ci === ci);
        html += '<div class="chapter' + (open ? " open" : "") + '">' +
          '<button class="chapter-btn" data-toggle="' + ci + '">' +
          '<span class="chev">▸</span><span class="chapter-name">' + G.esc(ch.title) + "</span>" +
          '<span class="chapter-count">' + ch.points.length + "</span></button>" +
          '<div class="chapter-body">';
        ch.points.forEach(function (p) {
          var pr = kpProgress(p.id);
          var stars = pr.passed.filter(Boolean).length;
          var dots = "";
          for (var d = 0; d < 3; d++) dots += '<i class="dot' + (d < stars ? " on" : "") + '"></i>';
          html += '<button class="point' + (current && current.p.id === p.id ? " active" : "") + '" data-id="' + p.id + '">' +
            '<span class="point-dot"></span><span class="point-name">' + G.esc(p.name) + "</span>" +
            '<span class="stars">' + dots + "</span></button>";
        });
        html += "</div></div>";
      });
      treeEl.innerHTML = html;

      treeEl.querySelectorAll("[data-toggle]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var ci = btn.getAttribute("data-toggle");
          if (openChapters[ci]) delete openChapters[ci]; else openChapters[ci] = true;
          refreshTree();
        });
      });
      treeEl.querySelectorAll(".point").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var id = btn.getAttribute("data-id");
          var found = null;
          allPoints.forEach(function (x) { if (x.p.id === id) found = x; });
          if (found) {
            openChapters[found.ci] = true;
            selectPoint(found);
            closeNav();
          }
        });
      });
    }

    function defaultDiff(p) {
      var pr = kpProgress(p.id);
      for (var d = 0; d < 3; d++) if (!pr.passed[d]) return d + 1;
      return 3;
    }

    function selectPoint(item) {
      current = item;
      activeDiff = defaultDiff(item.p);
      renderPractice();
      refreshTree();
      scrollTop();
    }

    function renderPractice() {
      var p = current.p;
      content.innerHTML =
        '<section class="paper kp-head">' +
        '<div class="kp-head-row"><div>' +
        '<div class="eyebrow">' + G.esc(current.ch.title) + "</div>" +
        '<h1 class="kp-title">' + G.esc(p.name) + "</h1></div>" +
        '<button class="kb-link" id="kbPoint" type="button">查手册</button></div>' +
        '<ul class="summary">' + p.summary.map(function (s) { return "<li>" + G.esc(s) + "</li>"; }).join("") + "</ul>" +
        '<div class="diff-tabs" id="diffTabs">' + tabsHtml() + "</div>" +
        "</section>" +
        '<section id="quizArea"></section>';

      var kbPoint = document.getElementById("kbPoint");
      kbPoint.addEventListener("click", function () { openKB(p.name); });

      var tabs = document.getElementById("diffTabs");
      tabs.addEventListener("click", function (e) {
        var btn = e.target.closest ? e.target.closest(".diff") : null;
        if (!btn || btn.disabled) return;
        activeDiff = Number(btn.getAttribute("data-d"));
        renderPractice();
      });
      renderIntro();
    }

    function renderIntro() {
      var p = current.p;
      var desc = activeDiff === 1 ? "巩固基础概念" : activeDiff === 2 ? "强化理解与计算" : "挑战综合应用";
      document.getElementById("quizArea").innerHTML =
        '<div class="paper start-panel">' +
        '<div class="start-head"><div><div class="mini-label">难度 ' + activeDiff + " · " + DIFF_NAMES[activeDiff - 1] + "</div>" +
        '<h2>随机闯关</h2></div><div class="req">5 题 · 答对 4 题通过</div></div>' +
        '<p class="muted">系统会从「' + G.esc(p.name) + "」中随机抽题，" + desc + "。每通过一个难度，解锁下一难度。</p>" +
        '<div class="start-actions"><button class="btn primary" id="startRun">开始答题</button>' +
        (activeDiff > 1 ? '<button class="btn ghost" id="prevDiff">回到上一难度</button>' : "") +
        "</div></div>";
      document.getElementById("startRun").addEventListener("click", startRun);
      var prev = document.getElementById("prevDiff");
      if (prev) prev.addEventListener("click", function () { activeDiff--; renderPractice(); });
    }

    function startRun() {
      var p = current.p;
      var exact = p.qs.filter(function (q) { return q.d === activeDiff; });
      var pool = exact.length ? exact : p.qs;
      var bag = [], list = [];
      while (list.length < 5) {
        if (!bag.length) bag = G.shuffle(pool);
        list.push(bag.pop());
      }
      run = { items: list.map(build), idx: 0, score: 0, locked: false };
      renderQuestion();
    }

    function renderQuestion() {
      var q = run.items[run.idx];
      var pct = Math.round(run.idx / run.items.length * 100);
      document.getElementById("quizArea").innerHTML =
        '<div class="paper quiz">' +
        '<div class="quiz-meta"><span class="pill">第 ' + (run.idx + 1) + " / " + run.items.length + " 题</span>" +
        '<span class="pill soft">' + (q.type === "judge" ? "判断题" : "单选题") + "</span>" +
        '<span class="pill soft">' + DIFF_NAMES[activeDiff - 1] + "</span>" +
        '<button class="kb-chip" id="kbQuiz" type="button">查手册</button>' +
        '<span class="live">已答对 ' + run.score + "</span></div>" +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="stem">' + G.esc(q.stem) + "</div>" +
        '<div class="options" id="options">' + q.options.map(function (o, i) {
          return '<button class="option" data-i="' + i + '"><span class="key">' + String.fromCharCode(65 + i) +
            '</span><span class="opt-text">' + G.esc(o) + "</span></button>";
        }).join("") + "</div>" +
        '<div id="feedback"></div></div>';

      document.querySelectorAll("#options .option").forEach(function (btn) {
        btn.addEventListener("click", function () { answer(Number(btn.getAttribute("data-i"))); });
      });
      var kbQuiz = document.getElementById("kbQuiz");
      if (kbQuiz) kbQuiz.addEventListener("click", function () { openKB(current.p.name); });
    }

    function answer(i) {
      if (run.locked) return;
      run.locked = true;
      var q = run.items[run.idx];
      var ok = i === q.answer;
      if (ok) run.score++;
      document.querySelectorAll("#options .option").forEach(function (b, j) {
        b.disabled = true;
        if (j === q.answer) b.classList.add("correct");
        if (j === i && !ok) b.classList.add("wrong");
      });
      var correctKey = String.fromCharCode(65 + q.answer);
      document.getElementById("feedback").innerHTML =
        '<div class="feedback ' + (ok ? "ok" : "bad") + '">' +
        '<div class="fb-title">' + (ok ? "回答正确 +1" : "回答错误") +
        "<span>" + (ok ? "" : "正确答案：" + correctKey) + "</span></div>" +
        "<p>" + G.esc(q.explain) + "</p>" +
        '<div class="fb-actions"><button class="btn ghost" id="fbKB" type="button">查手册</button>' +
        '<button class="btn primary" id="nextBtn">' +
        (run.idx === run.items.length - 1 ? "查看结果" : "下一题") + "</button></div></div>";
      document.getElementById("fbKB").addEventListener("click", function () { openKB(current.p.name); });
      document.getElementById("nextBtn").addEventListener("click", function () {
        if (run.idx === run.items.length - 1) showResult();
        else { run.idx++; run.locked = false; renderQuestion(); }
      });
    }

    function showResult() {
      var score = run.score, pass = score >= 4;
      record(current.p.id, activeDiff, score);
      refreshTree();
      var ring = Math.round(score / run.items.length * 360);
      var nextName = activeDiff < 3 ? DIFF_NAMES[activeDiff] : "";
      document.getElementById("quizArea").innerHTML =
        '<div class="paper result">' +
        '<div class="ring" style="--deg:' + ring + 'deg"><div class="ring-in"><b>' + score + "</b><span>/" + run.items.length + "</span></div></div>" +
        "<h2>" + (pass ? "闯关通过" : "再试一次") + "</h2>" +
        '<p class="muted">' + (pass
          ? (activeDiff < 3 ? "已解锁「" + nextName + "」难度，继续挑战吧。" : "该知识点三个难度已全部通关。")
          : "答对 4 题及以上才能通过，本轮答对 " + score + " 题。") + "</p>" +
        '<div class="result-actions">' +
        '<button class="btn ghost" id="retry">再练一轮</button>' +
        (pass && activeDiff < 3 ? '<button class="btn primary" id="nextDiff">进入' + nextName + "难度</button>" : "") +
        '<button class="btn ghost" id="backList">返回知识清单</button>' +
        "</div></div>";
      document.getElementById("diffTabs").innerHTML = tabsHtml();
      document.getElementById("retry").addEventListener("click", startRun);
      var nd = document.getElementById("nextDiff");
      if (nd) nd.addEventListener("click", function () { activeDiff++; renderPractice(); });
      document.getElementById("backList").addEventListener("click", renderWelcome);
      scrollTop();
    }

    function renderWelcome() {
      current = null;
      var total = allPoints.length * 3, stars = 0;
      allPoints.forEach(function (x) { stars += kpProgress(x.p.id).passed.filter(Boolean).length; });
      var pct = total ? Math.round(stars / total * 100) : 0;
      content.innerHTML =
        '<section class="hero">' +
        '<div class="eyebrow">CCF GESP C++ · ' + G.esc(level.title) + "</div>" +
        "<h1>" + G.esc(level.title) + "知识闯关</h1>" +
        '<p class="hero-goal">' + G.esc(level.goal) + "</p>" +
        '<div class="hero-stats">' +
        "<div><b>" + allPoints.length + "</b><span>知识点</span></div>" +
        "<div><b>" + stars + "</b><span>已获星</span></div>" +
        "<div><b>" + pct + "%</b><span>完成度</span></div></div>" +
        '<div class="hero-actions"><button class="btn primary" id="startFirst">开始第一个知识点</button>' +
        '<button class="btn ghost" id="randomPoint">随机抽一个知识点</button></div>' +
        (level.source ? '<p class="source">' + G.esc(level.source) + "</p>" : "") +
        "</section>" +
        '<section class="paper overview"><h2>本级知识清单</h2>' +
        level.chapters.map(function (ch, ci) {
          return '<div class="ov-chapter"><div class="ov-title"><span>' + (ci + 1) + "</span>" + G.esc(ch.title) + "</div>" +
            '<div class="ov-points">' + ch.points.map(function (p) {
              var s = kpProgress(p.id).passed.filter(Boolean).length;
              var mini = "";
              for (var d = 0; d < 3; d++) mini += '<i class="dot' + (d < s ? " on" : "") + '"></i>';
              return '<button class="ov-point" data-id="' + p.id + '"><span>' + G.esc(p.name) + '</span><i class="mini-stars">' + mini + "</i></button>";
            }).join("") + "</div></div>";
        }).join("") + "</section>";

      function openById(id) {
        var found = null;
        allPoints.forEach(function (x) { if (x.p.id === id) found = x; });
        if (found) { openChapters[found.ci] = true; selectPoint(found); }
      }
      document.getElementById("startFirst").addEventListener("click", function () {
        if (allPoints.length) openById(allPoints[0].p.id);
      });
      document.getElementById("randomPoint").addEventListener("click", function () {
        if (allPoints.length) openById(G.pick(allPoints).p.id);
      });
      content.querySelectorAll(".ov-point").forEach(function (btn) {
        btn.addEventListener("click", function () { openById(btn.getAttribute("data-id")); });
      });
      refreshTree();
      scrollTop();
    }

    if (menuBtn) menuBtn.addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    if (overlay) overlay.addEventListener("click", closeNav);
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    refreshTree();
    renderWelcome();
  };

  window.Gesp = G;
  window.G = G;
})();
