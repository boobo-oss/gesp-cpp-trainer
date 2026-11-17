/* GESP C++ 五级：知识点树与随机题库 */
function gespMinMaxSeg(arr, m) {
  var best = Infinity;
  function dfs(i, parts, curMax) {
    if (i === arr.length) { if (parts === m) best = Math.min(best, curMax); return; }
    if (parts >= m) return;
    var sum = 0;
    for (var j = i; j < arr.length; j++) {
      sum += arr[j];
      dfs(j + 1, parts + 1, Math.max(curMax, sum));
    }
  }
  dfs(0, 0, 0);
  return best;
}

window.GESP_LEVEL = {
  level: 5,
  title: "五级",
  subtitle: "初等数论 · 二分递归",
  goal: "掌握初等数论、二分、递归分治、贪心、高精度、链表与算法复杂度分析。",
  source: "内容依据《GESP C++ 5级全套复习手册》与《GESP 考纲考点表》整理",
  chapters: [
    {
      title: "初等数论",
      points: [
        {
          id: "5-1",
          name: "素数判定与筛法",
          summary: [
            "大于 1 且只能被 1 和自身整除的整数是素数。",
            "1 既不是素数也不是合数；2 是最小的素数。",
            "试除法只需枚举到 √n，因数成对出现。",
            "埃氏筛标记素数的倍数为合数；线性筛每个合数只被最小质因子标记一次，复杂度 O(n)。"
          ],
          qs: [
            G.single(1, "下列整数中，是素数的是？", "17", ["1", "9", "21"], "17 只能被 1 和 17 整除；1 不是素数，9 和 21 都是合数。"),
            G.judge(1, "1 既不是素数也不是合数。", true, "素数和合数的定义都要求大于 1，因此 1 不属于两者。"),
            G.single(1, "判断素数时，试除法通常枚举到？", "√n", ["n", "n / 2", "n²"], "因数成对出现，只需检查到 √n，超过后不会出现新的因数。"),
            G.judge(1, "2 是最小的素数，也是唯一的偶素数。", true, "2 只能被 1 和自身整除，其他偶数都能被 2 整除。"),
            G.gen(2, function () {
              var n = G.ri(2, 60), prime = true;
              for (var i = 2; i * i <= n; i++) if (n % i === 0) { prime = false; break; }
              return { q: "整数 " + n + " 是素数吗？", correct: prime ? "是" : "不是", wrongs: [prime ? "不是" : "是", "无法判断", "只有奇数才是"], explain: n + (prime ? " 没有 2 到 √n 之间的因数，是素数。" : " 可以分解出 1 和自身以外的因数，不是素数。") };
            }),
            G.gen(2, function () {
              var n = G.ri(10, 40), cnt = 0;
              for (var x = 2; x <= n; x++) { var ok = true; for (var i = 2; i * i <= x; i++) if (x % i === 0) { ok = false; break; } if (ok) cnt++; }
              return { q: "2 到 " + n + " 之间（含两端）共有多少个素数？", correct: cnt, wrongs: G.nums(cnt), explain: "逐一判断后，共有 " + cnt + " 个素数。" };
            }),
            G.single(3, "线性筛（欧拉筛）的核心优势是？", "每个合数只被其最小质因子标记一次，复杂度 O(n)", ["代码比埃氏筛更短", "只能筛奇数", "不需要数组"], "线性筛通过 if (i % prime[j] == 0) break; 保证每个合数只被标记一次。")
          ]
        },
        {
          id: "5-2",
          name: "最大公约数与最小公倍数",
          summary: [
            "欧几里得算法：gcd(a, b) = gcd(b, a % b)，b 为 0 时返回 a。",
            "LCM(a, b) = a / gcd(a, b) × b，先除后乘可防溢出。",
            "gcd(a, b) × lcm(a, b) = a × b。",
            "两数互质表示它们的最大公约数为 1。"
          ],
          qs: [
            G.single(1, "gcd(12, 18) 的值是？", "6", ["3", "36", "2"], "12 和 18 的公约数中最大的是 6。"),
            G.single(1, "lcm(12, 18) 的值是？", "36", ["6", "216", "72"], "LCM = 12 / gcd(12,18) × 18 = 12 / 6 × 18 = 36。"),
            G.judge(1, "欧几里得算法计算 gcd 时，递归终止条件是 b == 0。", true, "当 b 为 0 时，a 就是最大公约数。"),
            G.judge(1, "计算 LCM 时可以直接写成 a * b / gcd(a, b)，不会产生溢出问题。", false, "a * b 可能超出整型范围，应先除后乘：a / gcd(a, b) * b。"),
            G.gen(2, function () {
              var a = G.ri(6, 60), b = G.ri(6, 60), g = G.gcd(a, b);
              return { q: "gcd(" + a + ", " + b + ") 的值是？", correct: g, wrongs: G.nums(g), explain: "用辗转相除法求得最大公约数为 " + g + "。" };
            }),
            G.gen(2, function () {
              var a = G.ri(4, 20), b = G.ri(4, 20), l = G.lcm(a, b);
              return { q: "lcm(" + a + ", " + b + ") 的值是？", correct: l, wrongs: G.nums(l), explain: "lcm = " + a + " / gcd(" + a + ", " + b + ") × " + b + " = " + l + "。" };
            }),
            G.single(3, "若 gcd(a, b) = 1，则称 a 与 b 的关系是？", "互质", ["相等", "都是素数", "互为倍数"], "最大公约数为 1 表示两数互质，例如 8 和 9。")
          ]
        },
        {
          id: "5-3",
          name: "模运算与质因数分解",
          summary: [
            "(a + b) % m = (a % m + b % m) % m。",
            "(a × b) % m = (a % m × b % m) % m，乘法时常用 long long 防溢出。",
            "质因数分解把正整数写成若干素数幂的乘积。",
            "分解时从 2 开始试除，剩余大于 1 的部分也是质因子。"
          ],
          qs: [
            G.single(1, "下列模运算性质正确的是？", "(a + b) % m = (a % m + b % m) % m", ["(a + b) % m = a % m + b", "(a × b) % m = a × b", "(a - b) % m 一定为正"], "加法和乘法都可以先分别取模，再对结果取模。"),
            G.judge(1, "计算 (a × b) % m 时，可以先分别对 a、b 取模再相乘，最后再取模。", true, "模运算对乘法满足分配性质，但相乘时仍要注意数值溢出。"),
            G.single(1, "360 分解质因数的结果是？", "2³ × 3² × 5", ["2² × 3² × 5", "2³ × 3 × 5²", "2⁴ × 3 × 5"], "360 = 8 × 9 × 5 = 2³ × 3² × 5。"),
            G.single(1, "质因数分解时，循环条件通常写成？", "i * i <= n", ["i <= n", "i < n / 2", "i <= 10"], "只需试除到 √n，分解过程中 n 会不断缩小。"),
            G.gen(2, function () {
              var a = G.ri(10, 99), b = G.ri(10, 99), m = G.pick([7, 9, 11, 13]);
              var ans = (a * b) % m;
              return { q: "(" + a + " × " + b + ") % " + m + " 的值是？", correct: ans, wrongs: G.nums(ans), explain: a + " × " + b + " = " + a * b + "，" + (a * b) + " % " + m + " = " + ans + "。" };
            }),
            G.single(2, "整数 72 的质因数分解结果是？", "2³ × 3²", ["2² × 3²", "2³ × 3", "2 × 3³"], "72 = 8 × 9 = 2³ × 3²。"),
            G.gen(3, function () {
              var n = G.pick([12, 18, 20, 24, 28, 36, 40, 45, 48, 50, 54, 60, 72, 84, 90, 96, 100]);
              var t = n, parts = [];
              for (var p = 2; p * p <= t; p++) {
                if (t % p === 0) { var c = 0; while (t % p === 0) { t /= p; c++; } parts.push(p + "^" + c); }
              }
              if (t > 1) parts.push(t + "^1");
              var ans = parts.join(" × ");
              return { q: "整数 " + n + " 的质因数分解结果是？", correct: ans, wrongs: [n + "^1", parts.slice().reverse().join(" × "), "2 × " + (n / 2) + "^1"], explain: "从 2 开始逐次除尽质因子，得到 " + ans + "。" };
            })
          ]
        }
      ]
    },
    {
      title: "算法与复杂度",
      points: [
        {
          id: "5-4",
          name: "二分查找",
          summary: [
            "二分查找要求序列有序。",
            "每次取 mid = (l + r) / 2，与目标比较后舍弃一半区间。",
            "时间复杂度为 O(log n)。",
            "未找到时通常返回 -1。"
          ],
          qs: [
            G.single(1, "二分查找的前提条件是？", "数据必须有序", ["数据必须是偶数个", "数据必须全为正数", "数据必须无重复"], "只有有序序列才能根据 mid 比较结果确定目标在左半还是右半。"),
            G.single(1, "二分查找的时间复杂度是？", "O(log n)", ["O(n)", "O(n²)", "O(1)"], "每次将查找区间缩小一半，因此是对数复杂度。"),
            G.single(1, "在升序数组中，a[mid] < x 时，下一步应？", "l = mid + 1", ["r = mid - 1", "l = mid", "直接返回 -1"], "a[mid] 小于目标，目标只可能在右半区间，因此 l = mid + 1。"),
            G.judge(1, "二分查找可以用于无序数组，只要数组元素不重复。", false, "二分查找依赖有序性，无序数组无法通过中间值判断目标所在区间。"),
            G.gen(2, function () {
              var n = G.ri(7, 15), arr = [];
              for (var i = 1; i <= n; i++) arr.push(i * 2);
              var target = G.pick(arr), l = 0, r = n - 1, steps = 0;
              while (l <= r) { var mid = Math.floor((l + r) / 2); steps++; if (arr[mid] === target) break; if (arr[mid] < target) l = mid + 1; else r = mid - 1; }
              return { q: "有序数组 a = {" + arr.join(", ") + "}，二分查找 " + target + " 需要比较几次？", correct: steps, wrongs: G.nums(steps, 3, 1), explain: "每次取中点比较，共 " + steps + " 次找到目标。" };
            }),
            G.single(3, "二分查找中，mid = (l + r) / 2 可能存在的问题是？", "l + r 可能超出整型范围导致溢出", ["mid 一定不是整数", "无法找到第一个元素", "只能查找偶数"], "当 l、r 很大时 l + r 可能溢出，可写成 l + (r - l) / 2。")
          ]
        },
        {
          id: "5-5",
          name: "二分答案",
          summary: [
            "二分答案用于求解“最大值最小”或“最小值最大”类问题。",
            "答案必须具有单调性：某个值可行，则更大（或更小）的值也可行。",
            "通过 check(mid) 判断当前答案是否可行，再缩小范围。",
            "常见模型：分割数组使最大段和最小。"
          ],
          qs: [
            G.single(1, "二分答案能够使用的前提是？", "答案具有单调性", ["数据已经排序", "答案一定是偶数", "数组长度固定为 10"], "只有可行性随答案单调变化，才能通过二分缩小范围。"),
            G.single(1, "求“最大段和的最小值”时，若 check(mid) 成立，通常应？", "r = mid", ["l = mid + 1", "直接输出 mid", "结束程序"], "mid 可行时尝试更小的答案，因此令 r = mid。"),
            G.judge(1, "二分答案的 check 函数通常用于判断某个候选答案是否可行。", true, "check(mid) 返回 true 表示 mid 满足题目要求。"),
            G.gen(2, function () {
              var arr = [G.ri(1, 9), G.ri(1, 9), G.ri(1, 9), G.ri(1, 9)];
              var m = G.ri(2, 3), ans = gespMinMaxSeg(arr, m);
              return {
                q: "数组 a = {" + arr.join(", ") + "}，将它分成 " + m + " 段（每段连续且非空），各段和的最大值最小是多少？",
                correct: ans, wrongs: G.nums(ans),
                explain: "枚举所有分割方式，最优的最大段和为 " + ans + "。"
              };
            }),
            G.single(2, "二分答案的二分边界通常如何确定？", "下界取单个元素最大值，上界取所有元素总和", ["下界取 0，上界取 1", "下界取数组长度，上界取元素最大值", "随意设置即可"], "最大段和至少不小于单个元素最大值，至多不超过总和。"),
            G.judge(3, "二分答案与二分查找完全相同，都是在一个已排序数组中找某个值。", false, "二分答案是二分枚举答案空间，依赖可行性单调性；二分查找是在有序数组中定位元素。")
          ]
        },
        {
          id: "5-6",
          name: "递归与分治",
          summary: [
            "递归必须有终止条件（边界）和递推关系，否则会死递归。",
            "分治：把大问题拆成若干相同的小问题，求解后合并。",
            "归并排序：先分后合，稳定排序，时间复杂度 O(n log n)。",
            "快速排序：选基准划分区间，平均 O(n log n)，最坏 O(n²)。"
          ],
          qs: [
            G.single(1, "递归函数必须包含什么，才能避免无限递归？", "终止条件", ["循环变量", "数组", "输出语句"], "递归到达边界后必须停止并返回，否则会不断调用自身。"),
            G.single(1, "归并排序的平均时间复杂度是？", "O(n log n)", ["O(n²)", "O(n)", "O(log n)"], "每层合并 O(n)，共 log n 层，因此为 O(n log n)。"),
            G.single(1, "下列排序算法中，属于分治思想的是？", "归并排序", ["冒泡排序", "选择排序", "插入排序"], "归并排序把数组分成两半分别排序，再合并结果。"),
            G.judge(1, "归并排序是稳定排序，快速排序通常不是稳定排序。", true, "归并合并时相等元素保持原顺序；快排的交换可能打乱相等元素顺序。"),
            G.gen(2, function () {
              var n = G.ri(3, 8), ans = 0;
              for (var i = 1; i <= n; i++) ans += i;
              return { q: "递归函数 f(n) { if (n == 1) return 1; return f(n - 1) + n; }\nf(" + n + ") 的值是？", correct: ans, wrongs: G.nums(ans), explain: "f(n) = 1 + 2 + ... + n，结果为 " + ans + "。" };
            }),
            G.single(2, "快速排序最坏情况下的时间复杂度是？", "O(n²)", ["O(n log n)", "O(n)", "O(log n)"], "当每次划分极不均衡时，递归深度达到 n，复杂度退化为 O(n²)。"),
            G.judge(3, "分治算法拆分出的子问题必须与原问题完全相同。", false, "子问题通常是原问题规模更小的同类问题，规模会不断缩小直到可以直接求解。")
          ]
        },
        {
          id: "5-7",
          name: "算法复杂度估算",
          summary: [
            "单层循环通常为 O(n)，两层嵌套为 O(n²)。",
            "二分、倍增类算法通常为 O(log n)。",
            "归并排序、快速排序平均为 O(n log n)。",
            "空间复杂度关注额外使用的存储空间。"
          ],
          qs: [
            G.single(1, "单层 for 循环遍历 n 个元素，时间复杂度通常是？", "O(n)", ["O(1)", "O(n²)", "O(log n)"], "循环执行 n 次，每次常数时间，因此为 O(n)。"),
            G.single(1, "两层嵌套循环、每层都执行 n 次，时间复杂度是？", "O(n²)", ["O(n)", "O(n log n)", "O(log n)"], "总执行次数约为 n × n，因此为 O(n²)。"),
            G.single(1, "二分查找的时间复杂度是？", "O(log n)", ["O(n)", "O(n²)", "O(1)"], "每次把区间缩小一半，最多 log₂n 次。"),
            G.judge(1, "归并排序需要额外的临时数组，因此空间复杂度不是 O(1)。", true, "归并排序需要 O(n) 的辅助空间。"),
            G.gen(2, function () {
              var depth = G.ri(1, 3);
              var code = "", indent = "";
              for (var i = 0; i < depth; i++) { code += indent + "for (int i" + i + " = 1; i" + i + " <= n; i" + i + "++)\n"; indent += "  "; }
              code += indent + "sum++;";
              var ans = ["O(n)", "O(n²)", "O(n³)"][depth - 1];
              return { q: code + "\n这段代码的时间复杂度是？", correct: ans, wrongs: ["O(n)", "O(n²)", "O(n³)", "O(log n)"].filter(function (x) { return x !== ans; }).slice(0, 3), explain: depth + " 层循环，每层执行 n 次，复杂度为 " + ans + "。" };
            }),
            G.single(3, "下列复杂度从低到高排列正确的是？", "O(1) < O(log n) < O(n) < O(n log n) < O(n²)", ["O(n) < O(1) < O(log n)", "O(n²) < O(n) < O(log n)", "O(log n) < O(1) < O(n)"], "常见复杂度增长速度：常数 < 对数 < 线性 < 线性对数 < 平方。")
          ]
        }
      ]
    },
    {
      title: "高精度与链表",
      points: [
        {
          id: "5-8",
          name: "高精度运算",
          summary: [
            "高精度用数组逐位存储超出整型范围的大整数。",
            "数组通常逆序存储：低位在前、高位在后，方便进位。",
            "加法逐位相加并处理进位；乘法逐位相乘后累加进位。",
            "输出前要处理前导零。"
          ],
          qs: [
            G.single(1, "高精度运算中，数组通常如何存储大整数？", "逆序存储，低位在前", ["顺序存储，高位在前", "只存最高位", "随机存储"], "逆序存储让低位对齐，便于从个位开始处理进位。"),
            G.single(1, "高精度加法中，c[i] 的进位应加到？", "c[i + 1]", ["c[i - 1]", "c[i]", "c[0]"], "当前位的进位属于更高一位，应加到 c[i + 1]。"),
            G.judge(1, "高精度乘法结果的位数最多为两个因子位数之和。", true, "例如两位数乘两位数，结果最多四位。"),
            G.judge(1, "高精度乘法输出前需要去除前导零。", true, "数组高位可能存在未使用的 0，输出前必须跳过。"),
            G.gen(2, function () {
              var a = G.ri(1000, 9999), b = G.ri(1000, 9999), ans = String(BigInt(a) + BigInt(b));
              return { q: "高精度加法：输入两个大整数\n" + a + "\n" + b + "\n输出它们的和。", correct: ans, wrongs: [String(Number(ans) + 9), String(Number(ans) - 9), String(a) + String(b)], explain: a + " + " + b + " = " + ans + "。" };
            }),
            G.gen(3, function () {
              var a = G.ri(20, 99), b = G.ri(20, 99), ans = String(a * b);
              return { q: "高精度乘法：输入两个整数\n" + a + "\n" + b + "\n输出它们的乘积。", correct: ans, wrongs: [String(a + b), String(Number(ans) + 10), String(Number(ans) - 10)], explain: a + " × " + b + " = " + ans + "。" };
            }),
            G.single(1, "高精度数组中，a[0] 通常存储整数的哪一位？", "个位", ["最高位", "十位", "小数点"], "逆序存储时 a[0] 是个位，方便从低位开始进位。")
          ]
        },
        {
          id: "5-9",
          name: "单链表",
          summary: [
            "链表节点包含数据域和指向下一个节点的指针。",
            "内存不连续，不能通过下标随机访问。",
            "头插法会把新节点插到最前面，顺序与插入顺序相反。",
            "删除节点需要修改前驱的 next，并释放被删节点内存。"
          ],
          qs: [
            G.single(1, "单链表节点通常包含哪两部分？", "数据域和 next 指针", ["下标和值", "两个数据域", "数组和长度"], "节点保存数据以及指向下一个节点的地址。"),
            G.single(1, "单链表与数组相比，主要特点是？", "内存不连续，不能随机访问", ["内存连续，可用下标访问", "不支持插入", "只能存储字符"], "链表通过指针连接节点，访问第 k 个元素需要从头遍历。"),
            G.judge(1, "链表在头部插入节点通常比数组在头部插入更高效。", true, "链表头插只需修改指针，数组头插需要移动大量元素。"),
            G.gen(2, function () {
              var a = G.ri(1, 9), b = G.ri(10, 19), c = G.ri(20, 29);
              return { q: "依次用头插法插入节点 " + a + "、" + b + "、" + c + "，从头遍历链表的顺序是？", correct: c + " " + b + " " + a, wrongs: [a + " " + b + " " + c, b + " " + a + " " + c, c + " " + a + " " + b], explain: "头插法每次插到最前面，最后插入的 " + c + " 在最前，遍历顺序为 " + c + " " + b + " " + a + "。" };
            }),
            G.single(2, "遍历单链表时，循环通常如何推进？", "p = p->next", ["p++", "p = p->val", "p = head"], "指针通过 next 指向下一个节点，直到 p == NULL。"),
            G.single(3, "删除单链表中值为 x 的节点，最关键的操作是？", "让前驱节点的 next 指向被删节点的 next", ["直接删除头节点", "把 x 改成 0", "重新创建整个链表"], "需要找到前驱 pre，再执行 pre->next = p->next，最后 delete p。"),
            G.judge(2, "单链表可以直接通过下标访问第 5 个节点。", false, "链表不支持随机访问，必须从头节点依次遍历。")
          ]
        }
      ]
    }
  ]
};
