/* GESP C++ 一级：知识点树与随机题库 */
window.GESP_LEVEL = {
  level: 1,
  title: "一级",
  subtitle: "零基础入门 · 语法地基",
  goal: "掌握顺序、分支、循环三种基础程序结构，能够使用开发环境完成单一功能的小程序。",
  source: "内容依据《GESP C++ 1级全套复习手册》与《GESP 考纲考点表》整理",
  chapters: [
    {
      title: "计算机基础与开发环境",
      points: [
        {
          id: "1-1",
          name: "计算机五大组成",
          summary: [
            "CPU：负责运算与控制，是计算机的核心部件。",
            "内存：临时存放运行中的程序和数据，断电后丢失。",
            "硬盘：长期保存文件和数据，断电后仍保留。",
            "输入设备：键盘、鼠标、扫描仪；输出设备：显示器、打印机。"
          ],
          qs: [
            G.judge(1, "内存（主存）断电后，其中的数据会丢失。", true, "内存属于易失性存储器，断电后数据丢失；硬盘等外存断电后仍能保存数据。"),
            G.single(1, "计算机中负责运算和控制的部件是？", "CPU", ["内存", "硬盘", "显示器"], "CPU（中央处理器）是计算机的运算与控制核心。"),
            G.single(1, "下列设备中，属于输入设备的是？", "键盘", ["显示器", "打印机", "音箱"], "键盘用于向计算机输入数据；显示器、打印机、音箱属于输出设备。"),
            G.single(1, "下列存储器中，断电后数据仍然保留的是？", "硬盘", ["内存", "CPU 缓存", "寄存器"], "硬盘属于外存，断电后数据仍然保留。"),
            G.judge(1, "硬盘的读写速度通常比内存快。", false, "内存的读写速度远快于硬盘；硬盘容量大但速度较慢。"),
            G.gen(2, function () {
              var items = [["扫描仪", "输入设备"], ["打印机", "输出设备"], ["鼠标", "输入设备"], ["显示器", "输出设备"], ["音箱", "输出设备"], ["键盘", "输入设备"]];
              var it = G.pick(items);
              var other = it[1] === "输入设备" ? "输出设备" : "输入设备";
              return { q: it[0] + "属于哪一类设备？", correct: it[1], wrongs: [other, "存储设备", "运算设备"], explain: it[0] + "是" + it[1] + "。" };
            }),
            G.judge(3, "CPU 访问数据的速度从快到慢大致为：寄存器 > Cache > 内存 > 硬盘。", true, "越靠近 CPU 的存储速度越快、容量越小，寄存器最快，硬盘最慢。")
          ]
        },
        {
          id: "1-2",
          name: "开发环境与编译运行",
          summary: [
            "C++ 源文件通常以 .cpp 为扩展名。",
            "编译：把源代码翻译成机器能执行的指令，生成可执行文件。",
            "常见编译错误：缺少分号、括号不匹配、缺少头文件。",
            "Dev-C++ 中可先编译，再运行程序查看结果。"
          ],
          qs: [
            G.single(1, "C++ 源程序文件的常见扩展名是？", ".cpp", [".txt", ".exe", ".obj"], "C++ 源代码文件通常保存为 .cpp；.exe 是编译后生成的可执行文件。"),
            G.judge(1, "编译的作用是把 C++ 源代码翻译成计算机能执行的机器语言。", true, "编译器负责把高级语言源代码翻译成机器指令，生成可执行文件。"),
            G.single(1, "程序中某条语句末尾缺少分号，通常会在哪个阶段被发现？", "编译阶段", ["运行阶段", "输入阶段", "输出阶段"], "缺少分号属于语法错误，编译器在编译阶段就会报错。"),
            G.single(1, "C++ 程序执行的入口是？", "main 函数", ["cout 语句", "#include 指令", "return 0"], "程序从 main 函数开始执行，return 0 表示正常结束。"),
            G.judge(1, "程序中的注释文字会在运行时被输出到屏幕。", false, "注释只用于说明代码，不参与编译和运行，也不会被输出。"),
            G.single(2, "在 Dev-C++ 中点击“编译并运行”，程序会？", "先编译生成可执行文件，再运行", ["只保存源文件", "只检查代码颜色", "直接打开网页"], "编译并运行会先检查语法、生成可执行文件，然后启动程序。"),
            G.single(3, "下列错误中，最可能只在程序运行时才暴露的是？", "数组下标越界访问", ["缺少分号", "括号不匹配", "头文件名拼错"], "语法错误会在编译阶段发现；越界访问属于运行时问题，编译通常不会报错。")
          ]
        },
        {
          id: "1-3",
          name: "程序结构与注释",
          summary: [
            "标准框架：#include <iostream>、using namespace std;、int main()、return 0;。",
            "cin / cout 需要包含 iostream 头文件。",
            "单行注释用 //，多行注释用 /* ... */。",
            "注释不参与编译运行，仅用于说明代码。"
          ],
          qs: [
            G.single(1, "使用 cin 和 cout 需要包含哪个头文件？", "<iostream>", ["<cmath>", "<cstring>", "<fstream>"], "cin、cout 定义在 iostream 中；cmath 提供数学函数，cstring 提供字符串函数。"),
            G.judge(1, "C++ 程序的 main 函数返回值类型通常是 int。", true, "标准写法是 int main()，并在末尾 return 0; 表示程序正常结束。"),
            G.single(1, "C++ 中单行注释的正确写法是？", "// 注释内容", ["/* 注释内容", "# 注释内容", "-- 注释内容"], "// 表示单行注释；/* ... */ 表示多行注释。"),
            G.single(1, "下列哪一项用于表示多行注释？", "/* ... */", ["// ...", "# ...", "< ... >"], "/* 与 */ 之间的内容都是注释，可以跨越多行。"),
            G.judge(1, "using namespace std; 的作用是使用标准命名空间。", true, "它让 cin、cout 等标准库名字可以直接使用，不必写成 std::cin。"),
            G.single(2, "一个标准 C++ 程序框架中，哪部分表示程序入口？", "int main()", ["#include <iostream>", "using namespace std;", "return 0;"], "main 函数是程序入口，操作系统从这里开始执行程序。"),
            G.judge(3, "注释可以嵌套使用：/* 外层 /* 内层 */ 仍然在外层注释中 */。", false, "C++ 的块注释不能嵌套，遇到第一个 */ 就结束，后面的内容会参与编译。")
          ]
        }
      ]
    },
    {
      title: "变量、常量与数据类型",
      points: [
        {
          id: "1-4",
          name: "变量、常量与命名规则",
          summary: [
            "标识符只能由字母、数字、下划线组成，且不能以数字开头。",
            "不能使用关键字（int、if、for、return 等）作为变量名。",
            "标识符区分大小写，a 和 A 是两个不同的变量。",
            "const 定义只读常量，定义后不能再修改。"
          ],
          qs: [
            G.single(1, "下列变量名中，符合 C++ 命名规则的是？", "_score", ["2num", "int", "a-b"], "标识符不能以数字开头，不能使用关键字，也不能包含减号。"),
            G.judge(1, "C++ 中的变量名区分大小写。", true, "score、Score、SCORE 是三个不同的标识符。"),
            G.single(1, "const int N = 100; 中 const 的作用是？", "定义只读常量，N 不能再被修改", ["让 N 变成随机数", "把 N 定义为字符串", "让程序跳过这一行"], "const 修饰的变量必须在定义时初始化，之后不能修改。"),
            G.single(1, "下列变量名中，不合法的是？", "1st", ["first", "_first", "first1"], "变量名不能以数字开头，所以 1st 不合法。"),
            G.judge(1, "C++ 关键字（如 for、while）可以作为变量名使用。", false, "关键字有特殊语法含义，不能作为标识符。"),
            G.gen(2, function () {
              var cands = [["score_1", true], ["1score", false], ["int", false], ["a-b", false], ["_tmp", true], ["Total2", true]];
              var c = G.pick(cands);
              return { q: "变量名 " + c[0] + " 是否合法？", correct: c[1] ? "合法" : "不合法", wrongs: [c[1] ? "不合法" : "合法", "无法判断", "取决于编译器"], explain: c[1] ? "只由字母、数字、下划线组成且不以数字开头，合法。" : "违反命名规则：不能以数字开头、不能使用关键字、不能含减号。" };
            }),
            G.single(3, "下列常量定义中，正确的是？", "const double PI = 3.14;", ["const int N;", "const N = 10;", "const double PI;"], "const 常量必须在定义时初始化，并且要写清数据类型。")
          ]
        },
        {
          id: "1-5",
          name: "基本数据类型",
          summary: [
            "int 存整数，double 存小数且精度较高，float 精度较低。",
            "char 存单个字符，bool 存 true / false。",
            "int 不能保存小数部分，赋值时会截断。",
            "char 变量可以保存一个字符，如 'A'、'0'。"
          ],
          qs: [
            G.single(1, "要保存单个字符，应使用哪种数据类型？", "char", ["int", "double", "bool"], "char 用于保存单个字符，例如 char c = 'A';。"),
            G.single(1, "要保存 true / false 两种状态，应使用哪种数据类型？", "bool", ["char", "float", "int"], "bool 只有 true 和 false 两个值。"),
            G.single(1, "下列数据类型中，表示小数精度最高的是？", "double", ["float", "int", "char"], "double 是双精度浮点型，精度高于 float。"),
            G.judge(1, "int 类型变量可以保存小数 3.14 的完整小数部分。", false, "int 只能保存整数，把 3.14 赋给 int 会截断小数部分，得到 3。"),
            G.judge(1, "char 变量可以保存字符 'A'。", true, "char 用于保存单个字符，'A' 是合法的字符常量。"),
            G.gen(2, function () {
              var list = [["保存整数", "int"], ["保存高精度小数", "double"], ["保存单个字符", "char"], ["保存真假状态", "bool"]];
              var it = G.pick(list);
              return { q: "在 C++ 中，" + it[0] + "最适合使用哪种类型？", correct: it[1], wrongs: ["void", "string", "long double"].filter(function (x) { return x !== it[1]; }).slice(0, 3), explain: it[0] + "对应 " + it[1] + " 类型。" };
            }),
            G.single(3, "要保存小数 3.5 并保证较高精度，正确的定义是？", "double x = 3.5;", ["int x = 3.5;", "char x = 3.5;", "bool x = 3.5;"], "double 用于保存浮点数且精度较高；int、char、bool 都不适合保存小数。")
          ]
        }
      ]
    },
    {
      title: "运算符与输入输出",
      points: [
        {
          id: "1-6",
          name: "算术、关系与逻辑运算",
          summary: [
            "整数除法结果仍为整数：7 / 2 = 3。",
            "% 取余只能用于整数：7 % 2 = 1。",
            "判断相等用 ==，单个 = 是赋值。",
            "优先级：括号 > 算术 > 关系 > 逻辑 > 赋值。"
          ],
          qs: [
            G.gen(1, function () {
              var a = G.ri(2, 15), b = G.ri(2, 9), op = G.pick(["+", "-", "*"]);
              var ans = op === "+" ? a + b : op === "-" ? a - b : a * b;
              return { q: "表达式 " + a + " " + op + " " + b + " 的值是？", correct: ans, wrongs: G.nums(ans), explain: "按算术运算规则：" + a + " " + op + " " + b + " = " + ans + "。" };
            }),
            G.gen(1, function () {
              var a = G.ri(5, 30), b = G.ri(2, 7), ans = Math.floor(a / b);
              return { q: "在 C++ 中，表达式 " + a + " / " + b + " 的值是？", correct: ans, wrongs: G.nums(ans), explain: "两个整数相除，结果仍为整数并向下取整，" + a + " / " + b + " = " + ans + "。" };
            }),
            G.gen(2, function () {
              var a = G.ri(5, 30), b = G.ri(2, 7), ans = a % b;
              return { q: "在 C++ 中，表达式 " + a + " % " + b + " 的值是？", correct: ans, wrongs: G.nums(ans), explain: "% 是取余运算，" + a + " ÷ " + b + " 的余数是 " + ans + "。" };
            }),
            G.single(1, "判断两个数相等，应该使用哪个运算符？", "==", ["=", "!=", "=>"], "== 表示判断相等；单个 = 是赋值运算。"),
            G.judge(1, "在 C++ 中，单个等号 = 表示判断两个值是否相等。", false, "单个 = 是赋值；判断相等必须使用 ==。"),
            G.gen(2, function () {
              var a = G.ri(1, 9);
              var post = G.pick([true, false]);
              var out = post ? a : a + 1;
              var code = post ? "a++" : "++a";
              return { q: "int a = " + a + ";\ncout << " + code + "; 输出的是？", correct: out, wrongs: G.nums(out), explain: post ? "后置自增先取原值输出，再让 a 加 1。" : "前置自增先把 a 加 1，再输出新值。" };
            }),
            G.single(2, "表达式 2 + 3 * 4 的值是？", "14", ["20", "24", "9"], "乘法优先级高于加法，先算 3 * 4 = 12，再加 2 得 14。"),
            G.single(3, "表达式 5 > 3 && 2 > 4 的值是？", "false", ["true", "1", "无法确定"], "&& 要求两边都为真；2 > 4 为假，所以整个表达式为 false。")
          ]
        },
        {
          id: "1-7",
          name: "输入输出 cin/cout 与格式化",
          summary: [
            "cin >> 变量：从键盘读取数据。",
            "cout << 内容：向屏幕输出，endl 表示换行。",
            "scanf 读取变量时必须加取地址符 &。",
            "格式符：%d 整数、%f 浮点、%c 字符。"
          ],
          qs: [
            G.single(1, "从键盘读入一个整数 a，正确写法是？", "cin >> a;", ["cout >> a;", "cin << a;", "scanf(a);"], "cin 使用 >> 读取，cout 使用 << 输出。"),
            G.single(1, "cout << endl; 中 endl 的作用是？", "换行并刷新输出缓冲", ["输出字母 endl", "结束程序", "清空屏幕"], "endl 表示换行，并刷新输出缓冲区。"),
            G.single(1, "用 scanf 读入 int 变量 a，正确写法是？", 'scanf("%d", &a);', ['scanf("%d", a);', 'scanf("%f", &a);', 'scanf("%c", &a);'], "读入整数用 %d；scanf 必须给变量加取地址符 &。"),
            G.judge(1, "用 printf 输出变量时，必须在变量前加取地址符 &。", false, "printf 只需要格式符和变量本身；取地址符 & 是 scanf 读取时使用的。"),
            G.single(1, "输出单个字符应使用哪个格式符？", "%c", ["%d", "%f", "%s"], "%c 用于字符，%d 用于整数，%f 用于浮点数。"),
            G.gen(2, function () {
              var list = [["整数", "%d"], ["浮点数", "%f"], ["单个字符", "%c"]];
              var it = G.pick(list);
              return { q: "printf 输出" + it[0] + "时，应使用的格式符是？", correct: it[1], wrongs: ["%d", "%f", "%c", "%s"].filter(function (x) { return x !== it[1]; }).slice(0, 3), explain: it[0] + "对应的格式符是 " + it[1] + "。" };
            }),
            G.single(3, "从键盘连续读入两个整数 a、b，正确的语句是？", "cin >> a >> b;", ["cin << a << b;", "cout >> a >> b;", "scanf(a, b);"], "cin 用 >> 读取，可连续读取多个变量；scanf 还需要格式符和取地址符。")
          ]
        }
      ]
    },
    {
      title: "三大程序结构",
      points: [
        {
          id: "1-8",
          name: "顺序与分支结构",
          summary: [
            "顺序结构：程序自上而下逐行执行。",
            "if / if-else / else if 用于条件判断。",
            "switch 适合固定值匹配，case 后通常要写 break。",
            "三目运算符 ?: 可以简化简单的二选一。"
          ],
          qs: [
            G.single(1, "if 语句中括号内的条件成立时，程序会？", "执行 if 后面的语句块", ["跳过整个程序", "执行 else 后面的语句块", "自动结束循环"], "条件为真执行 if 分支，为假时执行 else 分支（如果有）。"),
            G.single(1, "switch 语句中，case 后缺少 break 可能导致？", "case 穿透，继续执行后面的分支", ["编译无法通过", "程序立即退出", "自动补上 break"], "缺少 break 时，程序会继续执行后续 case 的语句，称为 case 穿透。"),
            G.judge(1, "在 if-else 结构中，else 可以单独存在，不需要对应的 if。", false, "else 必须与前面的 if 配对使用，不能单独出现。"),
            G.gen(1, function () {
              var n = G.ri(1, 30), even = n % 2 === 0;
              return {
                q: "int x = " + n + ";\nif (x % 2 == 0) cout << \"偶数\";\nelse cout << \"奇数\";\n程序输出？",
                correct: even ? "偶数" : "奇数",
                wrongs: [even ? "奇数" : "偶数", "无输出", "编译错误"],
                explain: n + (even ? " 能被 2 整除，输出“偶数”。" : " 不能被 2 整除，输出“奇数”。")
              };
            }),
            G.single(2, "表达式 (a > b) ? a : b 的含义是？", "取 a 和 b 中较大的值", ["取 a 和 b 中较小的值", "判断 a 是否等于 b", "交换 a 和 b"], "三目运算符先判断条件，条件为真取 a，否则取 b，因此得到较大值。"),
            G.judge(3, "switch 语句的 case 后面只能跟整数常量，不能跟字符常量。", false, "switch 支持整型和字符型，case 后可以写 'A' 这样的字符常量。")
          ]
        },
        {
          id: "1-9",
          name: "循环结构与循环控制",
          summary: [
            "for 适合已知循环次数；while 先判断后执行；do-while 至少执行一次。",
            "break 立即跳出当前循环；continue 跳过本次剩余语句。",
            "for 循环 for (int i = 1; i <= n; i++) 共执行 n 次。",
            "while 条件一开始为假时，循环体一次也不执行。"
          ],
          qs: [
            G.gen(1, function () {
              var n = G.ri(3, 20), ans = n * (n + 1) / 2;
              return { q: "int s = 0;\nfor (int i = 1; i <= " + n + "; i++) s += i;\ncout << s;\n输出结果是？", correct: ans, wrongs: G.nums(ans), explain: "循环求 1 到 " + n + " 的和，结果为 " + ans + "。" };
            }),
            G.single(1, "do-while 循环与 while 循环的主要区别是？", "do-while 至少执行一次循环体", ["do-while 不能使用 break", "do-while 只能循环 1 次", "do-while 没有循环条件"], "do-while 先执行一次循环体，再判断条件，因此至少执行一次。"),
            G.judge(1, "while 循环的条件一开始就为假时，循环体一次也不会执行。", true, "while 先判断条件，条件为假时直接跳过循环体。"),
            G.single(1, "continue 语句的作用是？", "跳过本次循环剩余语句，进入下一次循环", ["立即结束整个程序", "跳出当前循环", "重新开始程序"], "continue 只结束本次循环，不跳出整个循环；break 才是跳出循环。"),
            G.gen(2, function () {
              var n = G.ri(2, 12);
              return { q: "for (int i = 1; i <= " + n + "; i++) 的循环体共执行多少次？", correct: n, wrongs: G.nums(n, 3, 1), explain: "i 从 1 到 " + n + "，共 " + n + " 次。" };
            }),
            G.judge(2, "break 语句只能跳出当前所在的那一层循环。", true, "在嵌套循环中，break 只结束它所在的最内层循环，不会一次跳出所有循环。"),
            G.single(3, "下列循环中，可能一次都不执行的是？", "while 循环", ["do-while 循环", "至少执行一次的循环", "for 循环体"], "while 先判断条件，条件为假时一次也不执行；do-while 至少执行一次。")
          ]
        }
      ]
    }
  ]
};
