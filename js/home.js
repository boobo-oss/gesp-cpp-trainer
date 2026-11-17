/* 首页：等级卡片与总进度 */
(function () {
  "use strict";
  var KEY = "gesp-cpp-progress-v1";

  var META = [
    { n: 1, title: "一级", sub: "零基础入门 · 语法地基", points: 9, goal: "顺序、分支、循环与基础输入输出" },
    { n: 2, title: "二级", sub: "嵌套逻辑 · 计算机常识", points: 9, goal: "循环嵌套、ASCII、类型转换、数学函数" },
    { n: 3, title: "三级", sub: "编码位运算 · 数组字符串", points: 8, goal: "进制补码、位运算、一维数组、枚举模拟" },
    { n: 4, title: "四级", sub: "函数指针 · 结构体排序", points: 8, goal: "参数传递、指针、结构体、二维数组、递推" },
    { n: 5, title: "五级", sub: "初等数论 · 二分递归", points: 9, goal: "素数筛法、GCD、二分、分治、链表、高精度" },
    { n: 6, title: "六级", sub: "树与搜索 · 动态规划", points: 9, goal: "二叉树、栈队列、DFS/BFS、01 背包、OOP" },
    { n: 7, title: "七级", sub: "复杂 DP · 图论泛洪", points: 9, goal: "二维/区间 DP、LIS/LCS、图遍历、哈希表" },
    { n: 8, title: "八级", sub: "组合数学 · 高级图论", points: 9, goal: "排列组合、快速幂、最短路、最小生成树" }
  ];

  var all = {};
  try { all = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { all = {}; }

  function starsOf(n) {
    var s = 0;
    Object.keys(all).forEach(function (k) {
      if (k.indexOf(n + "-") !== 0) return;
      var p = all[k];
      if (p && p.passed) p.passed.forEach(function (v) { if (v) s++; });
    });
    return s;
  }

  var totalPoints = 0, totalStars = 0, totalPossible = 0;
  var html = "";
  META.forEach(function (m) {
    var stars = starsOf(m.n);
    var possible = m.points * 3;
    var pct = Math.round(stars / possible * 100);
    totalPoints += m.points;
    totalStars += stars;
    totalPossible += possible;
    html += '<a class="level-card" href="level' + m.n + '.html">' +
      '<div class="lc-top">' +
      '<div class="lc-num">' + m.n + "</div>" +
      '<div class="lc-title"><b>' + m.title + " · " + m.sub + "</b><span>" + m.goal + "</span></div>" +
      '<span class="lc-go">' + (pct ? pct + "%" : "开始") + "</span></div>" +
      '<div class="lc-meta"><span>' + m.points + " 个知识点 · " + possible + " 星</span><span>" + stars + " / " + possible + "</span></div>" +
      '<div class="lc-bar"><i style="width:' + pct + '%"></i></div></a>';
  });

  document.getElementById("levelGrid").innerHTML = html;
  document.getElementById("statPoints").textContent = totalPoints;
  var overall = totalPossible ? Math.round(totalStars / totalPossible * 100) : 0;
  document.getElementById("totalProgress").textContent = "总进度 " + totalStars + " / " + totalPossible + " 星 · " + overall + "%";
})();
