/* GESP C++ 四级：知识点树与随机题库 */
window.GESP_LEVEL = {
  level: 4,
  title: "四级",
  subtitle: "函数指针 · 结构体排序",
  goal: "掌握模块化函数编程、指针与结构体、二维数组、递推、基础排序和文件读写。",
  source: "内容依据《GESP C++ 4级全套复习手册》与《GESP 考纲考点表》整理",
  chapters: [
    {
      title: "函数与指针",
      points: [
        {
          id: "4-1",
          name: "函数定义与作用域",
          summary: [
            "函数由返回类型、函数名、参数列表和函数体组成。",
            "void 表示无返回值；有返回值的函数用 return 返回结果。",
            "局部变量在 {} 内有效，全局变量在所有函数外定义。",
            "局部变量与全局变量同名时，局部变量优先。"
          ],
          qs: [
            G.single(1, "函数不需要返回结果时，返回类型应写为？", "void", ["int", "return", "null"], "void 表示函数不返回任何值，函数体内可以不写 return。"),
            G.single(1, "在函数内部定义的变量称为？", "局部变量", ["全局变量", "常量", "静态变量"], "局部变量定义在函数或代码块内部，出了作用域就失效。"),
            G.judge(1, "全局变量在所有函数外部定义，程序中的函数都可以访问它。", true, "全局变量作用域从定义处开始，直到程序结束。"),
            G.gen(2, function () {
              var g = G.ri(50, 120), l = G.ri(10, 40);
              return {
                q: "int num = " + g + ";\nvoid f() { int num = " + l + "; cout << num; }\nint main() { f(); }",
                correct: l, wrongs: [g, g + l, 0],
                explain: "函数内定义的同名局部变量会屏蔽全局变量，输出局部变量 " + l + "。"
              };
            }),
            G.single(2, "函数声明的作用是？", "告诉编译器函数的名称、参数和返回类型", ["立即执行函数", "给函数分配数组", "删除函数"], "函数声明让编译器在调用前知道函数的接口，定义可以放在后面。"),
            G.judge(3, "同一个函数中，局部变量可以和全局变量同名。", true, "允许同名，此时局部变量优先，全局变量被屏蔽。")
          ]
        },
        {
          id: "4-2",
          name: "值传递、引用传递与指针传递",
          summary: [
            "值传递：函数得到实参的副本，修改形参不影响外部变量。",
            "引用传递 int &x：形参是外部变量的别名，修改会影响原变量。",
            "指针传递 int *p：传入地址，通过 *p 修改原变量。",
            "要让函数修改外部变量，优先使用引用传递。"
          ],
          qs: [
            G.single(1, "值传递时，函数内部修改形参会影响外部实参吗？", "不会", ["会", "只影响全局变量", "取决于变量名"], "值传递复制一份副本，形参与实参是独立的内存。"),
            G.single(1, "函数参数写成 int &x，这种传递方式称为？", "引用传递", ["值传递", "指针传递", "数组传递"], "& 表示引用，x 是实参的别名，共用同一块内存。"),
            G.judge(1, "引用传递时，函数内修改形参会影响调用处的原变量。", true, "引用与原变量是同一块内存的不同名字，修改会同步。"),
            G.gen(2, function () {
              var a = G.ri(5, 30), mode = G.pick(["value", "ref"]);
              var out = mode === "ref" ? 100 : a;
              var code = mode === "ref" ? "void change(int &x) { x = 100; }" : "void change(int x) { x = 100; }";
              return {
                q: code + "\nint main() { int a = " + a + "; change(a); cout << a; }",
                correct: out, wrongs: [mode === "ref" ? a : 100, 0, 10],
                explain: mode === "ref" ? "引用传递会修改原变量，输出 100。" : "值传递只修改副本，原变量仍为 " + a + "。"
              };
            }),
            G.single(2, "下列哪种方式可以修改函数外部的变量？", "传入引用或指针", ["只能使用值传递", "把变量名写长", "使用 cout 输出"], "引用传递和指针传递都能让函数访问并修改外部变量。"),
            G.single(3, "void change(int *p) { *p = 8; } 调用时应写成？", "change(&a);", ["change(a);", "change(*a);", "change(p);"], "指针参数需要传入变量地址，因此写 change(&a);。")
          ]
        },
        {
          id: "4-3",
          name: "指针基础",
          summary: [
            "&变量 取地址，*指针 解引用。",
            "指针变量保存的是地址，定义如 int *p = &a;。",
            "NULL 是空指针，不能对空指针解引用。",
            "数组名等价于首元素地址；p++ 会跨过一个完整元素。"
          ],
          qs: [
            G.single(1, "要取得变量 a 的地址，应使用？", "&a", ["*a", "a[]", "%a"], "& 是取地址运算符，&a 得到变量 a 的地址。"),
            G.single(1, "指针变量 p 指向 a 时，*p 表示？", "p 所指向地址中的数据", ["p 的地址", "变量名 p", "空值"], "* 是解引用运算符，*p 访问指针指向位置的数据。"),
            G.single(1, "对 NULL 空指针进行解引用会发生什么？", "可能程序崩溃，属于错误操作", ["自动分配内存", "得到 0", "得到 1"], "空指针不指向有效内存，解引用是未定义行为，必须避免。"),
            G.judge(1, "数组名可以看作数组首元素的地址。", true, "例如 int a[5]; 则 a 等价于 &a[0]。"),
            G.gen(2, function () {
              var arr = [G.ri(1, 20), G.ri(1, 20), G.ri(1, 20), G.ri(1, 20), G.ri(1, 20)];
              var k = G.ri(1, 4), ans = arr[k];
              return {
                q: "int arr[5] = {" + arr.join(", ") + "};\nint *p = arr;\np += " + k + ";\ncout << *p;",
                correct: ans, wrongs: G.nums(ans),
                explain: "p 初始指向 arr[0]，加 " + k + " 后指向 arr[" + k + "]，输出 " + ans + "。"
              };
            }),
            G.judge(2, "指针 p 进行 p++ 后，地址数值一定只增加 1 个字节。", false, "p++ 会跨过一个元素，增加量等于该元素类型占用的字节数。"),
            G.single(3, "int a = 10; int *p = &a; *p = 20; 此时 a 的值是？", "20", ["10", "地址值", "0"], "*p 修改的是 a 所在内存，因此 a 变为 20。")
          ]
        }
      ]
    },
    {
      title: "复合数据类型",
      points: [
        {
          id: "4-4",
          name: "结构体与结构体数组",
          summary: [
            "结构体把多个不同类型的数据打包在一起。",
            "定义格式：struct 名称 { 成员列表; };，末尾分号不能漏。",
            "访问成员用“变量.成员”，数组用“数组名[下标].成员”。",
            "swap 可以直接交换整个结构体变量。"
          ],
          qs: [
            G.single(1, "结构体定义末尾的什么符号不能省略？", "分号 ;", ["右大括号 }", "逗号 ,", "冒号 :"], "struct 定义本质上是一条语句，右大括号后必须写分号。"),
            G.single(1, "访问结构体变量 s 的成员 score，正确写法是？", "s.score", ["s->score", "score.s", "s[score]"], "普通结构体变量用点号访问成员；指针才用 ->。"),
            G.single(1, "访问结构体数组 a 中第 i 个元素的成员 x，正确写法是？", "a[i].x", ["a.x[i]", "a->x[i]", "a[i]->x"], "结构体数组元素用下标访问，再用点号访问成员。"),
            G.judge(1, "结构体可以将 int、double、char 等不同类型的数据组合在一起。", true, "结构体的成员可以是不同类型，用来描述一个整体对象。"),
            G.gen(2, function () {
              var a = [G.ri(1, 5), G.ri(60, 100)], b = [G.ri(6, 10), G.ri(60, 100)];
              var ans = a[1] + b[1];
              return {
                q: "struct Student { int id; int score; };\nStudent s[2] = {{" + a[0] + ", " + a[1] + "}, {" + b[0] + ", " + b[1] + "}};\ncout << s[0].score + s[1].score;",
                correct: ans, wrongs: G.nums(ans),
                explain: "s[0].score = " + a[1] + "，s[1].score = " + b[1] + "，和为 " + ans + "。"
              };
            }),
            G.single(3, "对结构体数组按某个成员排序时，冒泡排序内层比较应写成？", "if (a[j].score > a[j+1].score) swap(a[j], a[j+1]);", ["if (a[j] > a[j+1]) swap(a[j].score, a[j+1].score);", "if (a.score > a.score) swap(a[j], a[j+1]);", "if (a[j].score > a[j+1]) swap(a[j], a[j+1].score);"], "比较成员用 a[j].score，交换时直接交换整个结构体。"),
            G.judge(2, "结构体数组的大小必须是常量，不能使用变长数组。", true, "GESP 要求数组大小固定，结构体数组同样应使用常量定义。")
          ]
        },
        {
          id: "4-5",
          name: "二维数组",
          summary: [
            "定义格式：int g[105][105];，第一个下标是行，第二个是列。",
            "遍历时外层循环枚举行 i，内层循环枚举列 j。",
            "g[i][j] 表示第 i 行第 j 列的元素。",
            "禁止使用变长二维数组 int a[n][n]。"
          ],
          qs: [
            G.single(1, "二维数组 g[i][j] 中，i 通常表示？", "行下标", ["列下标", "元素值", "数组长度"], "二维数组先写行下标 i，再写列下标 j。"),
            G.single(1, "遍历二维数组的标准嵌套顺序是？", "外层枚举行，内层枚举列", ["外层枚举列，内层枚举行", "两层都枚举行", "只能使用 while"], "先按行遍历，再遍历当前行的每一列。"),
            G.judge(1, "二维数组的每一行在内存中通常是连续存放的。", true, "C++ 二维数组按行优先连续存储。"),
            G.gen(2, function () {
              var g = [];
              var sum = 0;
              for (var i = 0; i < 3; i++) {
                var row = [];
                for (var j = 0; j < 3; j++) { var v = G.ri(1, 9); row.push(v); sum += v; }
                g.push(row);
              }
              return {
                q: "int g[3][3] = {" + g.map(function (r) { return "{" + r.join(", ") + "}"; }).join(", ") + "};\n所有元素之和是？",
                correct: sum, wrongs: G.nums(sum),
                explain: "逐行累加 9 个元素，总和为 " + sum + "。"
              };
            }),
            G.gen(2, function () {
              var g = [];
              for (var i = 0; i < 3; i++) { var row = []; for (var j = 0; j < 3; j++) row.push(G.ri(1, 9)); g.push(row); }
              var r = G.ri(0, 2), c = G.ri(0, 2);
              return {
                q: "int g[3][3] = {" + g.map(function (x) { return "{" + x.join(", ") + "}"; }).join(", ") + "};\ng[" + r + "][" + c + "] 的值是？",
                correct: g[r][c], wrongs: G.nums(g[r][c]),
                explain: "第 " + (r + 1) + " 行第 " + (c + 1) + " 列的值为 " + g[r][c] + "。"
              };
            }),
            G.single(3, "下列二维数组定义中，符合 GESP 规范的是？", "int a[105][105];", ["int n; cin >> n; int a[n][n];", "int a[][];", "int a[105][];"], "二维数组的每一维都必须使用固定常量，禁止变长数组。"),
            G.judge(2, "二维数组 int a[4][3] 共有 12 个元素。", true, "4 行 × 3 列 = 12 个元素。")
          ]
        }
      ]
    },
    {
      title: "排序、递推与文件",
      points: [
        {
          id: "4-6",
          name: "冒泡、选择、插入排序",
          summary: [
            "冒泡排序：相邻元素两两比较，逆序交换，每轮把最大值送到末尾。",
            "选择排序：每轮找到未排序区间最小值，与区间首位交换。",
            "插入排序：把当前元素插入前面已有序的部分。",
            "三种排序平均时间复杂度均为 O(n²)；冒泡和插入排序是稳定的。"
          ],
          qs: [
            G.single(1, "冒泡排序每一轮的主要作用是？", "把当前未排序部分的最大值移到末尾", ["把最小值移到开头", "把数组随机打乱", "把数组逆序"], "相邻比较并交换，每轮结束后最大值会“浮”到末尾。"),
            G.single(1, "选择排序每一轮最多交换多少次？", "1 次", ["n 次", "n - 1 次", "0 次"], "每轮只把找到的最小值与区间首位交换一次。"),
            G.judge(1, "冒泡排序和插入排序都是稳定排序。", true, "相等元素不会因为排序改变相对顺序，因此稳定。"),
            G.single(1, "冒泡排序的时间复杂度是？", "O(n²)", ["O(n)", "O(log n)", "O(n log n)"], "两层循环，平均和最坏时间复杂度均为 O(n²)。"),
            G.gen(2, function () {
              var arr = [G.ri(1, 20), G.ri(1, 20), G.ri(1, 20), G.ri(1, 20), G.ri(1, 20)];
              var a = arr.slice();
              for (var j = 0; j < a.length - 1; j++) if (a[j] > a[j + 1]) { var t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; }
              var correct = a.join(" ");
              var wrongs = [arr.join(" "), arr.slice().sort(function (x, y) { return x - y; }).join(" "), a.slice().reverse().join(" ")].filter(function (x) { return x !== correct; });
              return {
                q: "int a[5] = {" + arr.join(", ") + "};\n冒泡排序升序，第一轮比较结束后数组是？",
                correct: correct,
                wrongs: wrongs,
                explain: "第一轮从左到右相邻比较，较大的数不断右移，结果为 " + correct + "。"
              };
            }),
            G.single(3, "对数组 {5, 2, 8, 1, 4} 进行选择排序升序，第一轮交换后的结果是？", "{1, 2, 8, 5, 4}", ["{1, 2, 5, 8, 4}", "{2, 5, 8, 1, 4}", "{5, 2, 8, 1, 4}"], "第一轮找到最小值 1，与首位 5 交换，得到 {1, 2, 8, 5, 4}。"),
            G.judge(3, "选择排序在每一轮都可能进行多次交换。", false, "选择排序每轮只记录最小值下标，最后交换一次。")
          ]
        },
        {
          id: "4-7",
          name: "递推算法",
          summary: [
            "递推：由初始条件和递推关系式，逐步推出后续结果。",
            "斐波那契：f[1] = 1，f[2] = 1，f[n] = f[n-1] + f[n-2]。",
            "上台阶：dp[1] = 1，dp[2] = 2，dp[i] = dp[i-1] + dp[i-2]。",
            "递推通常用循环从小到大计算，避免重复递归。"
          ],
          qs: [
            G.single(1, "递推算法首先需要确定什么？", "初始条件和递推关系式", ["随机种子", "数组长度", "输出格式"], "先确定初值，再利用递推式逐步算出后续项。"),
            G.single(1, "斐波那契数列 f[1] = 1，f[2] = 1，f[3] 等于？", "2", ["1", "3", "4"], "f[3] = f[2] + f[1] = 1 + 1 = 2。"),
            G.judge(1, "上台阶问题中，一次可以走 1 级或 2 级，dp[2] = 2。", true, "到第 2 级有两种走法：1+1 或直接走 2 级。"),
            G.gen(2, function () {
              var n = G.ri(6, 12), f = [0, 1, 1];
              for (var i = 3; i <= n; i++) f[i] = f[i - 1] + f[i - 2];
              return { q: "斐波那契数列 f[1] = 1，f[2] = 1，f[" + n + "] 的值是？", correct: f[n], wrongs: G.nums(f[n]), explain: "按 f[i] = f[i-1] + f[i-2] 递推，f[" + n + "] = " + f[n] + "。" };
            }),
            G.gen(2, function () {
              var n = G.ri(4, 10), dp = [0, 1, 2];
              for (var i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
              return { q: "上台阶：每次走 1 级或 2 级，走到第 " + n + " 级共有多少种走法？", correct: dp[n], wrongs: G.nums(dp[n]), explain: "dp[1]=1，dp[2]=2，dp[i]=dp[i-1]+dp[i-2]，dp[" + n + "] = " + dp[n] + "。" };
            }),
            G.single(3, "斐波那契递推使用循环实现相比朴素递归的主要优势是？", "避免大量重复计算，效率更高", ["代码一定更短", "不需要初始条件", "可以处理负数"], "朴素递归会重复计算相同子问题，循环递推只计算一次。")
          ]
        },
        {
          id: "4-8",
          name: "文件读写与异常处理",
          summary: [
            "文件读写需要包含 <fstream>。",
            "ofstream 用于写文件，ifstream 用于读文件。",
            "文件使用完毕应调用 close() 关闭。",
            "异常处理使用 try / catch 捕获并处理错误。"
          ],
          qs: [
            G.single(1, "C++ 文件读写需要包含哪个头文件？", "<fstream>", ["<iostream>", "<cmath>", "<cstring>"], "fstream 提供 ifstream、ofstream 等文件流类。"),
            G.single(1, "向文件写入数据应使用？", "ofstream", ["ifstream", "cin", "cout"], "ofstream 是输出文件流，用于写文件；ifstream 用于读取。"),
            G.single(1, "从文件读取数据应使用？", "ifstream", ["ofstream", "fstream 只能写", "printf"], "ifstream 是输入文件流，用于从文件读取。"),
            G.judge(1, "文件读写完成后调用 close() 是一个良好的习惯。", true, "close() 会刷新缓冲区并释放文件资源。"),
            G.single(2, "异常处理中，用来捕获异常的语句是？", "catch", ["try", "throw 之外的 else", "finally"], "try 块中放可能出错的代码，catch 捕获并处理异常。"),
            G.judge(2, "ifstream fin(\"data.txt\"); 可以直接从 data.txt 读取数据。", true, "创建 ifstream 对象并绑定文件名后，可像 cin 一样用 fin >> 读取。"),
            G.single(3, "文件读入 → 存入结构体数组 → 排序 → 输出到文件，这一流程最符合哪类考题？", "文件综合处理题", ["图形输出题", "纯理论选择题", "字符串加密题"], "GESP 四级文件题常把文件读写与结构体、排序结合。")
          ]
        }
      ]
    }
  ]
};
