/* GESP C++ 三级：知识点树与随机题库 */
window.GESP_LEVEL = {
  level: 3,
  title: "三级",
  subtitle: "编码位运算 · 数组字符串",
  goal: "掌握进制转换、原反补码与位运算，能使用一维数组、字符串和枚举模拟解决简单问题。",
  source: "内容依据《GESP C++ 3级全套复习手册》与《GESP 考纲考点表》整理",
  chapters: [
    {
      title: "数据编码与位运算",
      points: [
        {
          id: "3-1",
          name: "原码、反码、补码",
          summary: [
            "正数的原码、反码、补码完全相同。",
            "负数的反码：符号位不变，数值位按位取反；补码：反码加 1。",
            "计算机中整数以补码形式存储和参与运算。",
            "8 位补码中，-1 表示为 11111111。"
          ],
          qs: [
            G.judge(1, "正数的原码、反码、补码三者相同。", true, "正数符号位为 0，数值位保持不变，因此三码一致。"),
            G.single(1, "负数的补码是在反码的基础上如何得到？", "加 1", ["减 1", "按位取反", "符号位取反"], "负数补码 = 反码 + 1；反码则是符号位不变、数值位取反。"),
            G.single(1, "计算机中整数通常以什么形式存储？", "补码", ["原码", "反码", "ASCII 码"], "使用补码可以把减法统一为加法，简化硬件运算。"),
            G.single(1, "8 位补码 11111111 表示的十进制数是？", "-1", ["255", "-127", "0"], "8 位全 1 是 -1 的补码；无符号数才表示 255。"),
            G.judge(1, "负数的反码符号位需要取反。", false, "求反码时符号位保持不变，只对数值位按位取反。"),
            G.gen(2, function () {
              var v = G.ri(1, 12);
              var comp = (256 - v).toString(2).padStart(8, "0");
              var orig = "1" + v.toString(2).padStart(7, "0");
              var inv = (255 - v).toString(2).padStart(8, "0");
              return { q: "8 位补码中，十进制数 -" + v + " 的补码是？", correct: comp, wrongs: [orig, inv, v.toString(2).padStart(8, "0")], explain: "-" + v + " 的原码 " + orig + "，反码 " + inv + "，补码 = 反码 + 1 = " + comp + "。" };
            }),
            G.gen(3, function () {
              var v = G.ri(1, 20), comp = (256 - v).toString(2).padStart(8, "0");
              return { q: "8 位补码 " + comp + " 表示的十进制数是？", correct: -v, wrongs: [-v + 1, -v - 1, 256 - v], explain: "最高位为 1 表示负数，其绝对值为 256 - " + (256 - v) + " = " + v + "，所以结果是 -" + v + "。" };
            })
          ]
        },
        {
          id: "3-2",
          name: "进制转换",
          summary: [
            "十进制转 R 进制：除 R 取余，逆序排列。",
            "R 进制转十进制：按权展开，逐位乘 R 的幂后累加。",
            "二进制转八进制：三位一组；二进制转十六进制：四位一组。",
            "常用权值：1、2、4、8、16、32、64、128。"
          ],
          qs: [
            G.single(1, "二进制数 1011 转换为十进制是？", "11", ["13", "9", "15"], "1×8 + 0×4 + 1×2 + 1×1 = 11。"),
            G.single(1, "二进制数 11111111 转换为十进制是？", "255", ["128", "256", "127"], "8 位全 1 的值为 1+2+4+8+16+32+64+128 = 255。"),
            G.single(1, "十进制数 255 转换为十六进制是？", "FF", ["EE", "F0", "15F"], "255 = 15×16 + 15，十六进制中 15 写作 F，所以是 FF。"),
            G.single(1, "八进制数 17 转换为十进制是？", "15", ["17", "23", "14"], "1×8 + 7 = 15。"),
            G.single(1, "十六进制数 2F 转换为十进制是？", "47", ["31", "45", "2F"], "2×16 + 15 = 47。"),
            G.gen(2, function () {
              var len = G.ri(4, 8), s = "1";
              for (var i = 1; i < len; i++) s += G.pick(["0", "1"]);
              var ans = parseInt(s, 2);
              return { q: "二进制数 " + s + " 转换为十进制是？", correct: ans, wrongs: G.nums(ans), explain: "按权展开求和，结果为 " + ans + "。" };
            }),
            G.gen(2, function () {
              var n = G.ri(16, 255);
              var hex = n.toString(16).toUpperCase();
              var w1 = (n + 1).toString(16).toUpperCase();
              var w2 = (n - 1).toString(16).toUpperCase();
              return { q: "十进制数 " + n + " 转换为十六进制是？", correct: hex, wrongs: [w1, w2, n.toString(2)], explain: "除 16 取余并逆序，得到 " + hex + "。" };
            }),
            G.single(3, "二进制数 110101 转换为八进制是？", "65", ["53", "35", "65O"], "从右往左三位一组：110 101，分别对应 6 和 5，合起来是 65。"),
            G.judge(3, "二进制转十六进制时，应从右往左每四位分成一组。", true, "每四位二进制对应一位十六进制，不足四位时在左侧补 0。")
          ]
        },
        {
          id: "3-3",
          name: "位运算",
          summary: [
            "按位与 &：同为 1 才为 1；按位或 |：有 1 则为 1。",
            "按位异或 ^：相同为 0，不同为 1。",
            "左移 << 相当于乘 2 的幂，右移 >> 相当于除以 2 的幂。",
            "x & 1 可判断奇偶：结果为 1 是奇数，为 0 是偶数。"
          ],
          qs: [
            G.single(1, "表达式 6 & 3 的值是？", "2", ["7", "5", "1"], "6 = 110，3 = 011，按位与得到 010，即 2。"),
            G.single(1, "表达式 6 | 3 的值是？", "7", ["2", "5", "1"], "110 | 011 = 111，即 7。"),
            G.single(1, "表达式 6 ^ 3 的值是？", "5", ["2", "7", "1"], "110 ^ 011 = 101，即 5。"),
            G.single(1, "表达式 5 << 1 的值是？", "10", ["6", "25", "2"], "左移一位相当于乘以 2，5 × 2 = 10。"),
            G.single(1, "表达式 5 >> 1 的值是？", "2", ["10", "3", "4"], "右移一位相当于除以 2 并向下取整，5 / 2 = 2。"),
            G.judge(1, "表达式 x & 1 的结果为 1 时，x 是奇数。", true, "奇数的二进制最低位一定是 1，因此 x & 1 为 1。"),
            G.gen(2, function () {
              var a = G.ri(1, 15), b = G.ri(1, 15);
              var op = G.pick(["&", "|", "^"]);
              var ans = op === "&" ? a & b : op === "|" ? a | b : a ^ b;
              return { q: "表达式 " + a + " " + op + " " + b + " 的值是？", correct: ans, wrongs: G.nums(ans), explain: "转为二进制按位运算：" + a + " = " + a.toString(2) + "，" + b + " = " + b.toString(2) + "，结果为 " + ans + "。" };
            }),
            G.gen(2, function () {
              var a = G.ri(1, 20), k = G.ri(1, 3), left = G.pick([true, false]);
              var ans = left ? a << k : a >> k;
              return { q: "表达式 " + a + " " + (left ? "<<" : ">>") + " " + k + " 的值是？", correct: ans, wrongs: G.nums(ans), explain: (left ? "左移 " : "右移 ") + k + " 位相当于" + (left ? "乘以" : "除以") + " 2^" + k + "，" + (left ? a + " × " : "floor(" + a + " ÷ ") + (left ? Math.pow(2, k) : Math.pow(2, k) + ")") + " = " + ans + "。" };
            }),
            G.single(3, "使用异或交换两个整数 a、b 的正确顺序是？", "a ^= b; b ^= a; a ^= b;", ["a ^= b; a ^= b; b ^= a;", "b ^= a; a ^= b; b ^= a;", "a = b; b = a;"], "连续三次异或可以原地交换两个数：a ^= b; b ^= a; a ^= b;。"),
            G.single(3, "在 32 位有符号整数中，表达式 ~5 的值是？", "-6", ["-5", "5", "10"], "按位取反后 5 变为其相反数减 1，即 -6。可用公式 ~x = -x - 1。")
          ]
        }
      ]
    },
    {
      title: "数组与字符串",
      points: [
        {
          id: "3-4",
          name: "一维数组",
          summary: [
            "数组下标从 0 开始，a[0] 是第一个元素。",
            "数组长度必须是常量，禁止使用变长数组 int a[n]。",
            "常见操作：输入、遍历、求和、求最值、逆序。",
            "逆序可用双指针交换 a[i] 与 a[n-1-i]。"
          ],
          qs: [
            G.single(1, "C++ 数组下标从几开始？", "0", ["1", "-1", "任意值"], "数组下标从 0 开始，a[0] 是第一个元素。"),
            G.single(1, "定义长度为 100 的整型数组，规范写法是？", "const int N = 100; int a[N];", ["int n; cin >> n; int a[n];", "int a[];", "array a[100];"], "GESP 要求数组长度使用常量，禁止变长数组。"),
            G.judge(1, "int n; cin >> n; int a[n]; 是 GESP 推荐的标准写法。", false, "这是变长数组，不属于标准 C++，GESP 会判错；应使用常量定义数组大小。"),
            G.gen(1, function () {
              var arr = [G.ri(1, 20), G.ri(1, 20), G.ri(1, 20), G.ri(1, 20), G.ri(1, 20)];
              var ans = arr.reduce(function (a, b) { return a + b; }, 0);
              return { q: "int a[5] = {" + arr.join(", ") + "};\n数组元素之和是？", correct: ans, wrongs: G.nums(ans), explain: "累加五个元素：" + arr.join(" + ") + " = " + ans + "。" };
            }),
            G.gen(2, function () {
              var arr = [G.ri(1, 30), G.ri(1, 30), G.ri(1, 30), G.ri(1, 30), G.ri(1, 30)];
              var ans = Math.max.apply(null, arr);
              return { q: "int a[5] = {" + arr.join(", ") + "};\n数组中的最大值是？", correct: ans, wrongs: G.nums(ans), explain: "比较所有元素，最大值为 " + ans + "。" };
            }),
            G.single(1, "将数组 a 的前 n 个元素逆序，双指针写法是？", "for (int i = 0; i < n / 2; i++) swap(a[i], a[n - 1 - i]);", ["for (int i = 0; i < n; i++) swap(a[i], a[n - i]);", "for (int i = 0; i <= n; i++) swap(a[i], a[n - i]);", "for (int i = 0; i < n; i++) a[i] = a[n - i];"], "交换前一半与后一半对应元素，循环到 n / 2 即可。"),
            G.judge(3, "数组越界访问在 C++ 中一定会立即导致编译错误。", false, "数组越界通常不会在编译时报错，运行时可能读到错误数据甚至崩溃，必须避免。")
          ]
        },
        {
          id: "3-5",
          name: "前缀和与数位拆分",
          summary: [
            "前缀和 sum[i] 表示 a[0] 到 a[i] 的和。",
            "sum[0] = a[0]；sum[i] = sum[i-1] + a[i]。",
            "区间 [l, r] 的和 = sum[r] - sum[l-1]（l > 0）。",
            "数字拆分：n % 10 取个位，n /= 10 去掉个位。"
          ],
          qs: [
            G.gen(1, function () {
              var arr = [G.ri(1, 9), G.ri(1, 9), G.ri(1, 9), G.ri(1, 9), G.ri(1, 9)];
              var ans = arr.reduce(function (a, b) { return a + b; }, 0);
              return { q: "int a[5] = {" + arr.join(", ") + "};\n前缀和 sum[4] 的值是？", correct: ans, wrongs: G.nums(ans), explain: "sum[4] 表示前 5 个元素的总和，即 " + ans + "。" };
            }),
            G.single(1, "在一维前缀和中，sum[0] 等于？", "a[0]", ["0", "a[1]", "a[0] + a[1]"], "sum[0] 只有第一个元素，因此 sum[0] = a[0]。"),
            G.gen(2, function () {
              var arr = [G.ri(1, 9), G.ri(1, 9), G.ri(1, 9), G.ri(1, 9), G.ri(1, 9)];
              var l = G.ri(0, 2), r = G.ri(l + 1, 4);
              var ans = 0;
              for (var i = l; i <= r; i++) ans += arr[i];
              return { q: "数组 a = {" + arr.join(", ") + "}，下标从 0 开始。\na[" + l + "] 到 a[" + r + "] 的区间和是？", correct: ans, wrongs: G.nums(ans), explain: "累加下标 " + l + " 到 " + r + "，结果为 " + ans + "。" };
            }),
            G.gen(2, function () {
              var n = G.ri(100, 9999), sum = 0, t = n;
              while (t > 0) { sum += t % 10; t = Math.floor(t / 10); }
              return { q: "整数 " + n + " 的各位数字之和是？", correct: sum, wrongs: G.nums(sum), explain: "不断取 n % 10 并 n /= 10，各位相加得到 " + sum + "。" };
            }),
            G.single(3, "使用前缀和求区间 [l, r] 的和，当 l > 0 时应为？", "sum[r] - sum[l - 1]", ["sum[r] - sum[l]", "sum[r] + sum[l - 1]", "sum[r]"], "减去 l 前面的前缀和，才能只保留 l 到 r 的部分。")
          ]
        },
        {
          id: "3-6",
          name: "字符数组与字符串",
          summary: [
            "C++ 字符串以 '\\0' 作为结束标志，不占有效长度。",
            "strlen 求长度，strcmp 比较，strcpy 复制，strcat 拼接。",
            "strcmp 相等返回 0，前者大返回正数，前者小返回负数。",
            "小写转大写减 32，大写转小写加 32。"
          ],
          qs: [
            G.single(1, "C++ 字符数组存储字符串时，字符串的结束标志是？", "'\\0'", ["'\\n'", "'0'", "空格"], "字符串以空字符 '\\0' 结尾，strlen 统计长度时不包含它。"),
            G.single(1, "strlen(\"hello\") 的返回值是？", "5", ["6", "4", "0"], "strlen 统计有效字符个数，不包含结束符，因此是 5。"),
            G.single(1, "strcmp(a, b) 返回 0 表示？", "两个字符串相等", ["a 大于 b", "a 小于 b", "两个字符串都为空"], "strcmp 相等返回 0，a 大返回正数，a 小返回负数。"),
            G.single(1, "将字符串 b 复制到 a，应使用？", "strcpy(a, b)", ["strcpy(b, a)", "strcat(a, b)", "strcmp(a, b)"], "strcpy(目标, 源) 把源字符串复制到目标数组。"),
            G.single(1, "将字符串 b 拼接到 a 的末尾，应使用？", "strcat(a, b)", ["strcpy(a, b)", "strlen(a, b)", "strcmp(a, b)"], "strcat(目标, 源) 把源接到目标末尾。"),
            G.gen(2, function () {
              var c = String.fromCharCode(G.ri(97, 122));
              var up = c.toUpperCase();
              return { q: "执行 s[i] -= 32; 后，字符 '" + c + "' 会变成？", correct: up, wrongs: ["'" + c + "'", "'" + String.fromCharCode(c.charCodeAt(0) - 31) + "'", "'" + String.fromCharCode(c.charCodeAt(0) + 32) + "'"], explain: "小写字母的 ASCII 码比对应大写字母大 32，减 32 转为大写 '" + up + "'。" };
            }),
            G.judge(2, "字符数组 char s[10] = \"abc\"; 实际占用 4 个字符位置（含结束符）。", true, "'a'、'b'、'c' 和 '\\0' 共 4 个位置，其余位置补 0。"),
            G.single(3, "下列代码输出什么？\nchar s[] = \"12345\";\ncout << strlen(s) + s[0] - '0';", "6", ["5", "53", "12345"], "strlen(s) = 5，s[0] - '0' = 49 - 48 = 1，因此 5 + 1 = 6。")
          ]
        }
      ]
    },
    {
      title: "枚举与模拟",
      points: [
        {
          id: "3-7",
          name: "枚举算法",
          summary: [
            "枚举：遍历所有可能情况，筛选满足条件的答案。",
            "水仙花数：三位数，各位数字的立方和等于自身，如 153。",
            "鸡兔同笼：枚举兔子数量，再计算鸡的数量并验证脚数。",
            "枚举框架：for 遍历所有可能 → if 判断条件 → 输出答案。"
          ],
          qs: [
            G.single(1, "枚举算法的核心思想是？", "遍历所有可能情况并筛选答案", ["随机猜测答案", "只计算一次", "把问题拆成两半"], "枚举通过遍历所有可能情况，逐一验证条件来找到答案。"),
            G.single(1, "下列哪个数是水仙花数？", "153", ["123", "145", "200"], "1³ + 5³ + 3³ = 1 + 125 + 27 = 153，所以 153 是水仙花数。"),
            G.judge(1, "水仙花数是三位数，其各位数字的立方和等于它本身。", true, "例如 153、370、371、407 都是水仙花数。"),
            G.gen(2, function () {
              var n = G.ri(2, 9), k = G.ri(2, 7);
              var ans = Math.floor(n / k);
              return { q: "在 1 到 " + n + " 中，有多少个整数是 " + k + " 的倍数？", correct: ans, wrongs: G.nums(ans), explain: "枚举 1 到 " + n + "，能被 " + k + " 整除的个数为 floor(" + n + " / " + k + ") = " + ans + "。" };
            }),
            G.single(2, "鸡兔同笼共有 10 个头、28 只脚，兔子有几只？", "4", ["3", "5", "6"], "设兔子 r 只，鸡 10 - r 只，4r + 2(10 - r) = 28，解得 r = 4。"),
            G.single(3, "用枚举法求 100 到 999 之间的水仙花数，循环范围应写为？", "for (int i = 100; i <= 999; i++)", ["for (int i = 0; i < 100; i++)", "for (int i = 100; i < 999; i++)", "for (int i = 1; i <= 999; i++)"], "三位数范围是 100 到 999，包含 999，因此条件为 i <= 999。"),
            G.judge(3, "枚举法一定能求得正确答案，但可能因为枚举范围过大而超时。", true, "枚举的正确性依赖穷尽所有情况，效率取决于枚举规模。")
          ]
        },
        {
          id: "3-8",
          name: "模拟算法",
          summary: [
            "模拟：严格按照题目描述的步骤逐行实现。",
            "适合日期计算、流程模拟、字符串处理等题型。",
            "模拟题通常不需要复杂推导，关键是读懂步骤和边界。",
            "循环中要准确更新状态，避免死循环或漏算。"
          ],
          qs: [
            G.single(1, "模拟算法的主要特点是？", "按题目描述的步骤逐步实现", ["必须使用递归", "一定要排序", "只适用于数学题"], "模拟题重在还原过程，按题意逐步改变状态并输出结果。"),
            G.judge(1, "模拟算法通常需要先推导出复杂的数学公式才能编写。", false, "模拟算法强调按步骤实现，不一定需要公式推导。"),
            G.gen(2, function () {
              var x = G.ri(1, 5), times = G.ri(2, 4), v = x, steps = [];
              for (var i = 1; i <= times; i++) { v = v * 2 + 1; steps.push("第 " + i + " 次后 x = " + v); }
              return { q: "int x = " + x + ";\nfor (int i = 1; i <= " + times + "; i++) x = x * 2 + 1;\ncout << x;\n输出？", correct: v, wrongs: G.nums(v), explain: "逐步模拟：" + steps.join("；") + "。" };
            }),
            G.single(2, "模拟日期变化时，最需要重点处理的是？", "月份天数和闰年 2 月", ["变量名的长度", "数组下标从 1 开始", "输出的小数位数"], "日期模拟要正确处理每月天数以及闰年 2 月为 29 天的情况。"),
            G.single(3, "模拟题中出现死循环，最可能的原因是？", "循环变量或状态没有按预期更新", ["使用了 cout", "变量名太长", "没有写注释"], "模拟过程中如果状态更新遗漏，循环条件可能永远成立。"),
            G.judge(3, "模拟算法不需要考虑边界情况，只要主流程正确即可。", false, "模拟题非常依赖边界处理，如第一天、最后一天、空数据等都需要考虑。")
          ]
        }
      ]
    }
  ]
};
