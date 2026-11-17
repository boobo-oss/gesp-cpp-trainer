/* GESP C++ 1—8 级复习手册 · 知识点定义与示例补充
   每个小节的 def 会在正文前展示，ex 作为「示例」追加在正文后 */
window.GESP_KB_PATCH = window.GESP_KB_PATCH || {};

window.GESP_KB_PATCH[1] = {
  "0.1": {
    def: "本手册面向 GESP C++ 一级零基础考生，内容严格限定在考纲范围内，覆盖计算机基础、程序标准框架、基础数据类型、标准输入输出、运算符与三大程序控制结构。这些考点是 2—8 级全部内容的地基：选择题与判断题考查概念和语法规则，编程题则用顺序、分支、循环完成简单计算，所有代码都按可默写的满分模板组织。",
    ex: [
      { t: "p", v: "示例：一道典型的一级编程题——输入两个整数 a、b，输出它们的和。解题只需套用标准框架，用 cin 读入、cout 输出，不涉及数组、函数等后续等级内容。" }
    ]
  },
  "1.1": {
    def: "计算机由五大部件组成：运算器与控制器合称中央处理器（CPU），负责执行指令、完成运算与控制；存储器分为内存和外存，内存临时存放运行中的程序与数据、断电丢失，外存长期保存文件、断电保留；输入设备（键盘、鼠标）向计算机送入数据；输出设备（显示器、打印机）呈现处理结果。",
    ex: [
      { t: "p", v: "示例：用键盘输入 3 和 5，CPU 完成加法运算，显示器输出 8；计算中的变量存放在内存，关机后消失；源文件 hello.cpp 保存在硬盘，关机后仍然存在。" }
    ]
  },
  "1.2": {
    def: "一个 C++ 程序从编写到运行要经过编辑、编译、链接、运行四个步骤：在编辑器中写出 .cpp 源文件，编译器把源代码翻译成机器指令并检查语法，链接后生成可执行文件，运行时才产生输出。一级常见错误包括缺少头文件、括号不匹配、语句末尾漏分号、变量未定义等，都属于编译期语法错误。",
    ex: [
      { t: "p", v: "示例：源文件 hello.cpp 中某条语句漏写分号，编译时提示 expected ';' before 'return'，无法生成可执行文件；补上分号后重新编译并运行，屏幕才输出 Hello。" }
    ]
  },
  "1.3": {
    def: "标准 C++ 程序由头文件、命名空间和主函数三部分组成：#include <iostream> 引入输入输出库，using namespace std; 使用标准命名空间，int main() 是程序唯一的入口，函数体内写具体语句，最后 return 0; 表示程序正常结束。一级所有代码都必须完整具备这几项，缺失会编译失败或按规范扣分。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello GESP\" << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：Hello GESP" }
    ]
  },
  "1.4": {
    def: "注释是写给程序员看的说明文字，编译时会被整体删除，不占用运行时间，也不会改变程序结果。C++ 有两种写法：// 开头的单行注释，作用到本行末尾；/* 与 */ 包裹的多行注释，可以跨越多行。注释常用于解释思路、标注变量用途或临时屏蔽一段代码，多行注释不能嵌套使用。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 3;   // 单行注释：定义 a\n    /* 多行注释：\n       下面输出 a + 4 的结果 */\n    cout << a + 4 << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：7（注释内容不参与编译，不会出现在结果中）" }
    ]
  },
  "2.1": {
    def: "C++ 常用基础数据类型有整型 int、单精度浮点 float、双精度浮点 double、字符型 char 和布尔型 bool。int 保存整数；float 与 double 保存小数，double 精度更高，是一级小数计算的首选；char 保存单个字符，本质是它的 ASCII 码；bool 只有 true 和 false 两个值，常用来保存条件判断的结果。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 7;\n    double b = 3.5;\n    char c = 'A';\n    bool d = true;\n    cout << a << \" \" << b << \" \" << c << \" \" << d << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：7 3.5 A 1（bool 的 true 输出为 1；常见环境中 sizeof(int)=4、sizeof(double)=8、sizeof(char)=1）" }
    ]
  },
  "2.2": {
    def: "变量名是程序员给内存单元起的名字，必须遵守强制规则：只能由英文字母、数字和下划线组成，不能以数字开头，不能包含空格和运算符，不能使用 int、if、for、return 等关键字，并且严格区分大小写，a 与 A 是两个不同变量。建议取名见名知义，如 sum、maxN，避免无意义的单字母命名。",
    ex: [
      { t: "list", v: [
        "合法：score、maxN、_tmp、a1、sum2",
        "非法：1a（数字开头）、int（关键字）、my-name（含减号）、a b（含空格）",
        "区分大小写：Score 与 score 是两个不同的变量"
      ] }
    ]
  },
  "2.3": {
    def: "常量是在程序运行过程中值不能被修改的数据，分为字面常量和符号常量。字面常量直接写在代码里，如 10、3.14、'A'；符号常量用 const 定义，如 const int N = 100;，必须在定义时初始化，之后对它赋值会编译报错。用符号常量代替直接写死的数字，可提高可读性，也便于统一修改。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14159;\n    double r = 2;\n    cout << PI * r * r << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：12.5664（若再写 PI = 3.14; 会编译报错，因为 const 常量不可修改）" }
    ]
  },
  "2.4": {
    def: "赋值运算符 = 把右侧的值写入左侧变量，并支持连续赋值；复合赋值 +=、-=、*=、/= 表示先运算再把结果存回变量。自增 ++ 与自减 -- 让变量加一或减一：前置形式先改变量再取新值，后置形式先取原值再改变量。同一表达式中对同一变量多次自增属于未定义行为，应拆成多条语句。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5;\n    int b = a++;   // 先取 5，a 变为 6\n    int c = ++a;   // a 先变 7，再取 7\n    cout << a << \" \" << b << \" \" << c << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：7 5 7" }
    ]
  },
  "3.1": {
    def: "cin 与 cout 是 C++ 的标准流输入输出对象，使用前要包含 <iostream> 并声明 std 命名空间。cin >> 变量 从键盘读取数据，自动跳过空格和换行并按变量类型转换，可以连续读取多个；cout << 表达式 把结果输出到屏幕，endl 表示换行并刷新缓冲区。它们不需要格式控制符，比 scanf/printf 更安全易用。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    double c;\n    char d;\n    cin >> a >> b >> c >> d;\n    cout << a << \" \" << b << endl;\n    cout << c << \" \" << d << endl;\n    return 0;\n}" },
      { t: "p", v: "输入：3 5 3.14 A\n输出：\n3 5\n3.14 A" }
    ]
  },
  "3.2": {
    def: "scanf 与 printf 是 C 语言的格式化输入输出函数，需包含 <cstdio>。格式串中用 %d 读整数、%f 读 float、%lf 读 double、%c 读字符；scanf 必须给变量加取址符 &，printf 只写变量名。%f 默认保留六位小数，可用 %.2f 指定两位。格式符必须与变量类型一一对应，否则读取或输出结果会出错。",
    ex: [
      { t: "code", v: "#include <cstdio>\n\nint main() {\n    int a;\n    double b;\n    char c;\n    scanf(\"%d %lf %c\", &a, &b, &c);\n    printf(\"%d %.2f %c\\n\", a, b, c);\n    return 0;\n}" },
      { t: "p", v: "输入：12 3.5 A\n输出：12 3.50 A（%.2f 保留两位小数）" }
    ]
  },
  "4.1": {
    def: "算术运算符包括加 +、减 -、乘 *、除 / 和取模 %。两个整数相除结果仍是整数，小数部分向零截断，如 7/2 得 3；只要有一个操作数是浮点数才得到小数。取模 % 只能用于整数，结果是余数，符号与被除数相同。除数或模数为 0 会导致运行时错误。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << 7 / 2 << \" \" << 7 % 2 << \" \" << -7 % 2 << \" \" << 7.0 / 2 << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：3 1 -1 3.5（前三个是整数运算，最后一个因 7.0 是浮点数而得到 3.5）" }
    ]
  },
  "4.2": {
    def: "关系运算符用于比较两个值的大小或是否相等，包括 >、<、>=、<=、==、!=，运算结果是布尔值 true 或 false，输出时显示为 1 和 0。关系运算符的优先级低于算术运算符，所以 a + 1 > b 会先算加法。判断相等必须用双等号 ==，单个 = 是赋值，写在条件里是高频错误。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 3, b = 5;\n    cout << (a < b) << \" \" << (a == b) << \" \" << (a != b) << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：1 0 1（a<b 为真，a==b 为假，a!=b 为真）" }
    ]
  },
  "4.3": {
    def: "逻辑运算符用于组合或取反条件：&& 逻辑与，两侧都为真结果才为真；|| 逻辑或，只要一侧为真结果就为真；! 逻辑非，把真变假、假变真。&& 与 || 具有短路求值特性：左侧已经能确定结果时，右侧不再计算，因此可以把可能出错的运算放在右侧，由左侧条件保护。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 0;\n    if (x != 0 && 10 / x > 2)\n        cout << \"yes\" << endl;\n    else\n        cout << \"no\" << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：no（左侧 x != 0 为假，右侧 10 / x 被短路，不会发生除零错误）" }
    ]
  },
  "4.4": {
    def: "运算符优先级决定表达式的计算顺序，从高到低依次为：括号 ()、逻辑非 ! 与自增自减等一元运算、算术运算（* / % 高于 + -）、关系运算、逻辑与 &&、逻辑或 ||、赋值运算 =。同级运算符按从左到右的顺序结合。记不准时应主动加括号，既保证结果正确，也让代码更易读。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << (2 + 3 * 4 > 10 && 5 != 3) << endl;\n    cout << (2 + 3) * 4 << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：1 和 20（第一行先算 3*4，得 14>10 为真、5!=3 为真，结果为 1；第二行括号改变了顺序）" }
    ]
  },
  "5.1": {
    def: "顺序结构是最基本的程序控制结构，程序按照语句书写的先后次序自上而下逐条执行，不跳转、不重复、不分支。一级程序通常按“定义变量—输入数据—计算处理—输出结果”的顺序组织。任何程序都离不开顺序结构，分支结构和循环结构的内部也由顺序执行的语句组成。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    int sum = a + b;\n    cout << sum << endl;\n    return 0;\n}" },
      { t: "p", v: "输入：4 6 输出：10（语句按定义、输入、计算、输出的顺序依次执行）" }
    ]
  },
  "5.2": {
    def: "分支结构根据条件表达式的真假选择执行不同的语句块。if 是单分支，条件成立才执行；if-else 是双分支，两个分支必执行其一；if-else if-else 可实现多分支，自上而下依次判断，命中一个就跳出。条件通常由关系或逻辑表达式给出，else 总是与它前面最近的未配对 if 结合。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    if (n % 2 == 0)\n        cout << \"偶数\" << endl;\n    else\n        cout << \"奇数\" << endl;\n    return 0;\n}" },
      { t: "p", v: "输入：7 输出：奇数（7 % 2 得 1，条件为假，执行 else 分支）" }
    ]
  },
  "5.3": {
    def: "循环结构在条件成立时重复执行同一段代码，用来处理重复性任务，避免把相同语句写很多遍。C++ 有三种循环：for 适合次数已知的计数循环；while 先判断后执行，适合次数未知、由条件控制的循环；do-while 先执行一次再判断。使用循环必须让循环变量逐步变化，否则会形成死循环。",
    ex: [
      { t: "p", v: "示例：求 1+2+…+100，用 for 循环累加得到 5050；若写成 while(i <= 100) 却在循环体内忘记 i++，条件恒真就会陷入死循环。" }
    ]
  },
  "5.3.1": {
    def: "for 循环把循环变量的初始化、条件判断和迭代更新集中写在括号内，执行流程为：先初始化一次，再判断条件，成立则执行循环体，然后执行迭代语句，再回到条件处判断。它最适合次数已知的计数型循环，如遍历 1 到 n。循环变量通常在 for 中定义，作用域只限于循环内部。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    cout << sum << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：5050（i 从 1 递增到 100，共循环 100 次）" }
    ]
  },
  "5.3.2": {
    def: "while 循环属于当型循环，先判断条件，条件为真才执行循环体，执行完再回到条件处重新判断，直到条件为假。由于进入循环前就要判断，循环体可能一次都不执行。使用 while 时必须在循环体内修改循环变量或相关状态，否则条件恒真，会形成死循环。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 12345, cnt = 0;\n    while (n > 0) {\n        n /= 10;\n        cnt++;\n    }\n    cout << cnt << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：5（每轮去掉一位数字，直到 n 变成 0，循环次数不确定时适合用 while）" }
    ]
  },
  "5.3.3": {
    def: "do-while 循环属于直到型循环，先无条件执行一次循环体，再判断条件，条件为真则继续下一轮，为假则退出。它保证循环体至少执行一次，适合“先操作再校验”的场景，例如反复输入直到数据合法。语法上 while(条件) 之后必须写分号，漏写会编译报错。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 10;\n    do {\n        cout << i << endl;\n        i++;\n    } while (i < 5);\n    return 0;\n}" },
      { t: "p", v: "输出：10（虽然 10 < 5 不成立，循环体仍先执行了一次）" }
    ]
  },
  "5.4": {
    def: "break 与 continue 用于在循环内部改变执行流程。break 立即终止当前所在的最内层循环（或 switch），跳到循环之后继续执行；continue 只结束本次迭代，跳过循环体中剩余语句，直接进入下一次条件判断。在嵌套循环中，两者都只作用于当前这一层，不会一次跳出所有循环。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i == 3) continue;\n        if (i == 7) break;\n        cout << i << \" \";\n    }\n    return 0;\n}" },
      { t: "p", v: "输出：1 2 4 5 6（3 被 continue 跳过，到 7 时 break 结束整个循环）" }
    ]
  },
  "6.1": {
    def: "该模板是一级编程题的通用满分框架，按四步组织：先用 #include <iostream> 和 using namespace std; 搭好环境，再定义所需变量并初始化累加器，接着用 cin 读入数据，然后编写核心的计算、判断或循环逻辑，最后用 cout 输出结果并 return 0;。套用模板可避免漏写框架导致的编译错误。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    int ans = 0;\n\n    cin >> a >> b;\n\n    ans = a + b;\n\n    cout << ans << endl;\n\n    return 0;\n}" },
      { t: "p", v: "输入：3 5 输出：8（把 ans = a + b; 换成判断或循环逻辑，即可改写为其他一级题目）" }
    ]
  },
  "附": {
    def: "该小节不是语法知识点，而是手册的打印与备考说明，交代手册的覆盖范围（全部一级考纲、无超纲内容）、代码规范（考级标准写法，兼顾上机与手写），以及考前背诵重点：标准程序框架、变量命名规则、四种输入输出写法、三大循环结构，用来指导复习顺序与自检。",
    ex: [
      { t: "p", v: "示例：考前按“标准框架→变量命名→输入输出→三大循环”的顺序各默写一遍，约 5 分钟即可完成一次自检，发现漏写 return 0; 或分号等常见问题。" }
    ]
  }
};

window.GESP_KB_PATCH[2] = {
  "0.1": {
    def: "本手册面向 GESP C++ 二级考试，内容严格贴合二级考纲，涵盖循环嵌套与字符图形输出、ASCII 码与计算机基础常识、cmath 数学函数与随机数、类型转换、数位拆分与最值累加等考点。所有示例都是可直接默写、可上机运行的二级难度模板，不含超纲语法。",
    ex: [
      { t: "p", v: "示例：二级试卷中，循环嵌套图形题常作为编程压轴大题；ASCII 码、存储设备与网络分类集中在选择填空题；类型转换、数学函数多出现在程序阅读与填空。" },
      { t: "list", ol: true, v: ["必背常识：RAM/ROM、LAN/MAN/WAN、ASCII 数值", "必练语法：强制类型转换、多层分支、循环嵌套", "必会算法：数位拆分、奇偶与闰年判断、累加求最值"] }
    ]
  },
  "0.2": {
    def: "目录是全书的知识索引，按五个模块展开：计算机拓展常识（存储、网络、ASCII 码）、C++ 语法进阶（类型转换、多层分支、循环嵌套）、cmath 数学函数与随机数、基础算法（数位拆分、最值累加、闰年与奇偶判断）、考前必背模板与核心口诀，便于按考点快速定位与循环复习。",
    ex: [
      { t: "list", ol: true, v: ["第 1 章 计算机拓展常识（选择填空高频）", "第 2 章 C++ 语法进阶（类型转换、多层分支、循环嵌套）", "第 3 章 cmath 数学函数与随机数", "第 4 章 基础算法（数位拆分、最值、闰年）", "第 5 章 GESP2 级考前必背满分模板"] }
    ]
  },
  "1.1": {
    def: "计算机存储设备按作用与特性分为内存、外存和高速缓存：内存（RAM）是易失性存储器，断电后数据丢失，用于存放运行中的程序与数据；外存（硬盘、U 盘、闪存）断电后数据保留，用于长期保存；Cache 位于 CPU 内部，速度最快、容量最小，用于缓解 CPU 与内存之间的速度差。",
    ex: [
      { t: "p", v: "示例：编辑文档时未保存就断电，再次开机内容丢失，说明正在编辑的数据放在 RAM；点击保存后写入硬盘，断电后仍能打开，说明外存是非易失性的。" },
      { t: "list", v: ["断电丢失：RAM（内存）", "断电保留：ROM、硬盘、U 盘、闪存卡", "速度由快到慢：Cache > 内存 > 外存"] }
    ]
  },
  "1.2": {
    def: "按覆盖范围，计算机网络分为局域网（LAN）、城域网（MAN）和广域网（WAN）：LAN 覆盖机房、家庭或校园等小范围，传输速度快、延迟低；MAN 覆盖一座城市；WAN 跨城市、跨国家，互联网是最大的广域网。网络中每台设备依靠唯一的 IP 地址完成寻址与通信。",
    ex: [
      { t: "p", v: "示例：家庭 Wi-Fi 与学校机房属于 LAN；全市政务专网属于 MAN；连接全国乃至全球的互联网属于 WAN。IP 地址如 192.168.1.1，同一网络中不能重复。" }
    ]
  },
  "1.3": {
    def: "ASCII 码是美国信息交换标准代码，用一个字节的低 7 位为 128 个常用字符编号，字符在计算机中存储的就是它的 ASCII 值。必背数值：空格为 32，数字字符 '0' 为 48，大写字母 'A' 为 65，小写字母 'a' 为 97；同类字符编码连续，同一字母大小写相差 32。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    char c = 'A';\n    cout << (int)c << endl;          // 65\n    cout << (char)(c + 32) << endl;  // a\n    cout << (int)('a' - 'A') << endl; // 32\n    return 0;\n}" },
      { t: "p", v: "输出：\n65\na\n32" }
    ]
  },
  "2.1": {
    def: "数据类型转换指把一种类型的值转成另一种类型，分为隐式与强制两类。隐式转换由编译器按低精度到高精度的顺序自动完成，如 char→int→double，不丢失信息；强制转换由程序员用 (类型) 显式指定，可能截断或丢失精度，常用于让整数除法变成浮点除法。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int a = 5, b = 2;\n    double x = a / b;             // 隐式：先整除得 2，再转成 2.0\n    double y = (double)a / b;     // 强制：5.0 / 2 = 2.5\n    cout << x << \" \" << y;\n    return 0;\n}" },
      { t: "p", v: "输出：2 2.5" }
    ]
  },
  "2.1.1": {
    def: "隐式类型转换是编译器在表达式中自动完成的转换，程序员无需书写转换符号。规则是低精度向高精度提升：char→short→int→long long→float→double，以保证数据不丢失。当 int 与 double 混合运算时，int 会被自动提升为 double，整个表达式按浮点规则计算。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int a = 7;\n    double b = a;        // int -> double，b = 7.0\n    double c = a / 2.0;  // 2.0 是 double，a 自动提升，结果 3.5\n    int d = 3.9;         // 隐式窄化：截断为 3\n    double e = 'A';      // char -> int -> double，得 65.0\n    cout << b << \" \" << c << \" \" << d << \" \" << e;\n    return 0;\n}" },
      { t: "p", v: "输出：7 3.5 3 65" }
    ]
  },
  "2.1.2": {
    def: "强制类型转换由程序员显式书写 (目标类型)表达式，用于改变运算时的类型或截断小数。转 int 时直接丢弃小数部分，向零截断而不是四舍五入；在整数除法中，只要把其中一个操作数强转为 double，整个除法就按浮点运算，可以得到小数结果。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    double a = 3.99;\n    int x = (int)a;            // 截断，得 3\n    cout << x << endl;\n    cout << (double)5 / 2 << endl;  // 2.5\n    cout << (int)(-3.9) << endl;    // -3，向零截断\n    return 0;\n}" },
      { t: "p", v: "输出：\n3\n2.5\n-3" }
    ]
  },
  "2.2": {
    def: "多层分支用于在多个互斥情况中选择一条执行路径，常用两种写法：if-else if-else 从上到下判断条件，命中第一个为真的分支后其余不再判断，适合区间判断；switch-case 根据表达式的整型或字符取值直接跳到对应入口，适合等值匹配，各分支需用 break 结束。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int score = 85;\n    if(score >= 90)      cout << \"A\";\n    else if(score >= 80) cout << \"B\";\n    else                 cout << \"C\";\n    return 0;\n}" },
      { t: "p", v: "输出：B（区间判断用 if-else if；若改为按等级字符匹配，则用 switch-case）" }
    ]
  },
  "2.2.1": {
    def: "if-else if-else 是从上到下依次判断的多分支结构：先判断 if 的条件，为真则执行其语句块并跳过其余分支；否则判断第一个 else if，以此类推；全部条件都不成立时执行 else 分支。条件必须写在括号内，语句块用花括号界定，省略花括号时只对紧邻的一条语句生效。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int n;\n    cin >> n;\n    if(n > 0)       cout << \"正数\";\n    else if(n == 0) cout << \"零\";\n    else            cout << \"负数\";\n    return 0;\n}" },
      { t: "p", v: "输入：-5\n输出：负数" }
    ]
  },
  "2.2.2": {
    def: "switch-case 是等值匹配的多分支结构：先计算 switch 括号内表达式的值，该值只能是整型或字符型，再跳到取值相等的 case 标签处开始执行。case 后只能跟常量，各分支通常以 break 结束，否则会继续执行后面所有分支，形成 case 穿透；default 处理无匹配的情况。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    char g;\n    cin >> g;\n    switch(g){\n        case 'A': cout << \"优秀\"; break;\n        case 'B': cout << \"良好\"; break;\n        default:  cout << \"其他\"; break;\n    }\n    return 0;\n}" },
      { t: "p", v: "输入：B\n输出：良好（若 case 'A' 后漏写 break，输出会变成“优秀良好”）" }
    ]
  },
  "2.3": {
    def: "循环嵌套是把一个循环完整地写在另一个循环的循环体内，外层循环每执行一次，内层循环都要完整地运行一轮。总执行次数等于外层次数乘以内层次数，因此常用于处理二维结构：外层控制行、内层控制列，是二级考试输出各类字符图形的核心方法。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    for(int i = 1; i <= 3; i++){\n        for(int j = 1; j <= 4; j++){\n            cout << i * j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}" },
      { t: "p", v: "输出（共 3×4 = 12 次内层执行）：\n1 2 3 4\n2 4 6 8\n3 6 9 12" }
    ]
  },
  "2.3.1": {
    def: "循环嵌套画图的核心口诀是“外层控行、内层控列”。外层循环变量决定当前打印第几行，一般从 1 取到 n；内层循环变量决定这一行打印多少个字符，其上界通常写成关于外层变量的表达式，使每行字符数随行号变化；内层循环结束后必须输出换行，才能开始下一行。",
    ex: [
      { t: "p", v: "示例：n=4 的直角三角形，外层 i=1..4 控行，内层 j=1..i，于是第 1 行 1 个 *、第 2 行 2 个、第 3 行 3 个、第 4 行 4 个；共输出 1+2+3+4=10 个 *。" }
    ]
  },
  "2.3.2": {
    def: "直角三角形模板：外层 for 循环控制行数 i 从 1 到 n，内层 for 循环控制本行字符数 j 从 1 到 i，内层只负责输出字符而不换行；内层结束后输出 endl 结束当前行。该结构可得到第 1 行 1 个、第 2 行 2 个……第 n 行 n 个字符的图形。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++){        // 外层：行\n        for(int j = 1; j <= i; j++){    // 内层：列\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    return 0;\n}" },
      { t: "p", v: "输入：4\n输出：\n*\n**\n***\n****" }
    ]
  },
  "2.3.3": {
    def: "带空格的居中图形要把每一行拆成两段：先输出 n-i 个空格，再输出 2*i-1 个字符，最后换行。空格数随行号增大而递减，字符数按 1、3、5……等差递增，两者分别用两个并列的内层循环完成，这就是正三角形、菱形等居中图形的通用结构。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int n = 4;\n    for(int i = 1; i <= n; i++){\n        for(int s = 1; s <= n - i; s++) cout << \" \";\n        for(int k = 1; k <= 2 * i - 1; k++) cout << \"*\";\n        cout << endl;\n    }\n    return 0;\n}" },
      { t: "p", v: "输出：\n   *\n  ***\n *****\n*******" }
    ]
  },
  "3.1": {
    def: "C++ 使用库函数前必须先包含对应头文件：#include <cmath> 提供 sqrt、pow 等数学函数；#include <iomanip> 提供 fixed、setprecision，用于固定小数位数输出；#include <cstdlib> 与 <ctime> 提供 rand、srand 和 time，用于生成随机数。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cmath>\n#include <iomanip>\nusing namespace std;\n\nint main(){\n    cout << fixed << setprecision(3) << sqrt(2) << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：1.414（缺 <cmath> 会找不到 sqrt，缺 <iomanip> 会找不到 setprecision）" }
    ]
  },
  "3.2": {
    def: "cmath 中的核心数学函数：abs(x) 求整数绝对值，浮点数用 fabs(x)；sqrt(x) 求平方根，返回 double，参数不能为负；pow(x,y) 求 x 的 y 次方，返回 double。这些函数多数返回浮点值，赋给整型变量前需要转换；取两数较大、较小值用 max、min，它们在 algorithm 头文件中。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main(){\n    cout << abs(-7) << endl;        // 7\n    cout << sqrt(16) << endl;       // 4\n    cout << pow(2, 10) << endl;     // 1024\n    cout << (int)sqrt(50) << endl;  // 7，向下取整\n    return 0;\n}" },
      { t: "p", v: "输出：\n7\n4\n1024\n7" }
    ]
  },
  "3.3": {
    def: "C++ 用 rand() 生成 0 到 RAND_MAX 之间的伪随机整数。默认种子固定，每次运行的序列相同，因此先用 srand((unsigned)time(0)) 以当前时间为种子，使每次运行结果不同。要得到 0 到 n-1 的整数用 rand()%n，要得到 a 到 b 的整数用 a + rand()%(b-a+1)。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main(){\n    srand((unsigned)time(0));\n    cout << rand() % 100 << endl;    // 0~99\n    cout << 1 + rand() % 6 << endl;  // 1~6，模拟骰子\n    return 0;\n}" },
      { t: "p", v: "输出：每次运行不同，例如\n57\n4" }
    ]
  },
  "3.4": {
    def: "默认的 cout 按有效数字输出浮点数，小数位数不固定。包含 <iomanip> 后，写 cout << fixed << setprecision(2) 可让后续浮点数固定输出 2 位小数并自动四舍五入；setprecision(n) 单独使用时表示有效数字位数，只有配合 fixed 才表示小数点后的位数，且设置一次后持续生效。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main(){\n    double a = 3.14159;\n    cout << fixed << setprecision(2) << a << endl;  // 3.14\n    cout << setprecision(4) << a << endl;           // 3.1416\n    return 0;\n}" },
      { t: "p", v: "输出：\n3.14\n3.1416" }
    ]
  },
  "4.1": {
    def: "数位拆分利用整数的除法与取余取出每一位：n%10 得到个位；n/10 去掉个位；n/10%10 先去掉个位再取余得到十位；n/100%10 得到百位，最高位可直接用 n/100。反复执行“取余取位、整除缩位”，即可从低位到高位遍历一个整数的全部数位。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int n = 365;\n    cout << n % 10 << endl;       // 个位 5\n    cout << n / 10 % 10 << endl;  // 十位 6\n    cout << n / 100 << endl;      // 百位 3\n    int s = 0, t = n;\n    while(t > 0){ s += t % 10; t /= 10; }  // 数位和\n    cout << s << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：\n5\n6\n3\n14" }
    ]
  },
  "4.2": {
    def: "遍历数据时常用三类累加器：求和 sum 初值为 0，循环中执行 sum += x；计数 cnt 初值为 0，满足条件时 cnt++；最值 maxx、minx 需按数据范围设置初值，求最大用较小值（如 0 或 -1e9），求最小用较大值（如 1e9），循环中与当前元素比较更新，结束后即得全局最值。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main(){\n    int a[5] = {8, 3, 12, 7, 5};\n    int sum = 0, cnt = 0, maxx = 0, minx = 1e9;\n    for(int i = 0; i < 5; i++){\n        sum += a[i];\n        cnt++;\n        maxx = max(maxx, a[i]);\n        minx = min(minx, a[i]);\n    }\n    cout << sum << \" \" << cnt << \" \" << maxx << \" \" << minx;\n    return 0;\n}" },
      { t: "p", v: "输出：35 5 12 3" }
    ]
  },
  "4.3": {
    def: "整数 n 能否被 2 整除决定其奇偶性：n % 2 == 0 为偶数，否则为奇数。取余结果的符号跟随被除数，因此负数也能正确判断。也可用位运算 n & 1，结果为 0 是偶数、1 是奇数。若需统计个数，可在循环中对每个数判断后累加计数。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    for(int n = 1; n <= 5; n++){\n        if(n % 2 == 0) cout << n << \" 偶数\" << endl;\n        else           cout << n << \" 奇数\" << endl;\n    }\n    return 0;\n}" },
      { t: "p", v: "输出：\n1 奇数\n2 偶数\n3 奇数\n4 偶数\n5 奇数" }
    ]
  },
  "4.4": {
    def: "公历闰年判断规则：年份能被 4 整除且不能被 100 整除的是闰年，如 2024、2008；能被 400 整除的也是闰年，如 2000。因此 1900 年不是闰年，2000 年是闰年。闰年 2 月有 29 天，全年 366 天；平年 2 月 28 天，全年 365 天。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int year;\n    cin >> year;\n    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)\n        cout << \"闰年\";\n    else\n        cout << \"平年\";\n    return 0;\n}" },
      { t: "p", v: "输入：2024\n输出：闰年（输入 1900 输出平年，输入 2000 输出闰年）" }
    ]
  },
  "5.1": {
    def: "该模板把循环嵌套图形题的解题步骤浓缩成口诀：外层循环控制行数，内层循环控制列数；每行先打印前置空格，再打印图形字符，最后换行。做题时先确定总行数 n，再分别推导第 i 行的空格数与字符数与 i 的表达式，套入这个固定结构即可，不必死记硬背。",
    ex: [
      { t: "p", v: "示例：打印 n=3 的等腰三角形，第 1 行 2 个空格 1 个星，第 2 行 1 个空格 3 个星，第 3 行 0 个空格 5 个星，即第 i 行空格数为 n-i、星数为 2*i-1。" }
    ]
  },
  "5.2": {
    def: "图形输出的标准结构固定为四步：外层行循环决定总行数；行内先用空格循环输出前置空白，使图形居中或左移；再用字符循环输出本行图案；最后输出换行。这四个部分的顺序不能颠倒，换行必须写在内层循环结束之后、仍在行循环之内。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int n = 4;\n    for(int i = 1; i <= n; i++){                 // 行循环\n        for(int s = 1; s <= i - 1; s++) cout << \" \";   // 空格区\n        for(int k = 1; k <= n - i + 1; k++) cout << \"*\"; // 字符区\n        cout << endl;                             // 换行\n    }\n    return 0;\n}" },
      { t: "p", v: "输出（倒三角形）：\n****\n ***\n  **\n   *" }
    ]
  },
  "5.3": {
    def: "强制类型转换模板用于控制运算精度：(int)x 把浮点数截断为整数，只保留整数部分；(double)y 把整数临时提升为浮点参与运算，避免整数除法丢失小数。求平均值、比例、除法结果时，务必在分子或分母上加 (double)，否则结果会被整除规则截断。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int a = 7, b = 2;\n    cout << a / b << endl;            // 3，整数除法\n    cout << (double)a / b << endl;    // 3.5\n    cout << (int)3.99 << endl;        // 3，截断\n    return 0;\n}" },
      { t: "p", v: "输出：\n3\n3.5\n3" }
    ]
  },
  "5.4": {
    def: "浮点保留小数模板：先包含 <iomanip>，再用 cout << fixed << setprecision(k) << res 让结果固定输出 k 位小数并四舍五入。fixed 与 setprecision 都是持续生效的格式标志，设置一次后后续所有浮点输出都按该格式进行，需要换位数时再次调用 setprecision 即可。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main(){\n    double s = 0;\n    for(int i = 1; i <= 3; i++) s += 1.0 / i;   // 1.8333...\n    cout << fixed << setprecision(2) << s;\n    return 0;\n}" },
      { t: "p", v: "输出：1.83" }
    ]
  },
  "5.5": {
    def: "闰年判断核心条件写作 (year % 4 == 0 && year % 100 != 0) || year % 400 == 0：前半句处理普通闰年，即能被 4 整除但不是整百年；后半句处理整百闰年，即能被 400 整除。两部分必须用逻辑或连接，并注意 && 的优先级高于 ||，外层括号不可省略。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int y = 1900;\n    if((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) cout << \"闰年\";\n    else cout << \"平年\";\n    return 0;\n}" },
      { t: "p", v: "输出：平年（1900 被 100 整除却不能被 400 整除；2024 输出闰年，2000 输出闰年）" }
    ]
  },
  "5.6": {
    def: "数位拆分通用公式：个位为 n%10，十位为 n/10%10，百位为 n/100%10，更高位依此类推。规律是先整除 10 的幂去掉低位，再对 10 取余留下目标位。若要逐位处理，可用 while(n > 0){ 取 n%10; n /= 10; } 从个位向高位依次取出每一位。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int n = 4702;\n    cout << n % 10 << \" \" << n / 10 % 10 << \" \" << n / 100 % 10 << \" \" << n / 1000 << endl;\n    int t = n, rev = 0;\n    while(t > 0){ rev = rev * 10 + t % 10; t /= 10; }  // 反转\n    cout << rev;\n    return 0;\n}" },
      { t: "p", v: "输出：\n2 0 7 4\n2074" }
    ]
  },
  "5.7": {
    def: "备考说明给出二级复习的整体建议：本手册覆盖面较全，包含计算机基础、嵌套语法、数学函数与基础算法；所有代码都是考纲内可默写的模板，不含超纲内容；考前应重点背诵 ASCII 码数值、循环嵌套口诀、浮点输出格式和闰年判断条件，并动手把图形题与数位拆分题各敲一遍。",
    ex: [
      { t: "list", ol: true, v: ["必背数值：空格 32、'0' 48、'A' 65、'a' 97", "必背结构：外层控行、内层控列，先空格后字符再换行", "必背条件：(year%4==0 && year%100!=0) || year%400==0", "必背输出：cout << fixed << setprecision(2) << ans"] },
      { t: "p", v: "示例：把 5.2 的倒三角代码改成 n=5，输出依次为 5、4、3、2、1 个 *，即可验证模板是否正确。" }
    ]
  }
};

window.GESP_KB_PATCH[3] = {
  "0.1": {
    def: "本小节说明三级考试的整体定位：以数据编码与位运算、一维数组、字符数组与字符串、枚举与模拟算法为主线。其中数组与字符串是编程大题核心，进制转换与位运算多出现在选择填空，枚举模拟是编程题的入门基础，复习需按考纲逐项落实。",
    ex: [
      { t: "list", v: [
        "考试形式：选择题约 15 道（含进制转换、补码、位运算计算），编程题 2 道左右（多为一维数组或字符串处理）。",
        "分值重心：编程题中数组与字符串通常占一半以上分值，属于必须拿满的部分。"
      ] }
    ]
  },
  "0.2": {
    def: "本小节是手册目录，把三级考点按五章组织：第 1 章数据编码与位运算，第 2 章一维数组核心，第 3 章字符数组与字符串，第 4 章基础算法（枚举与模拟），第 5 章考前必背满分模板，便于按考点快速定位复习。",
    ex: [
      { t: "list", ol: true, v: [
        "数据编码与位运算：原反补码、进制转换、六大位运算。",
        "一维数组核心：规范定义、遍历统计、逆序、前缀和、数字拆分。",
        "字符数组与字符串：结束符、四大库函数、大小写转换。",
        "基础算法：枚举穷举与模拟算法的经典题型。",
        "考前必背模板：五段可直接默写的标准代码。"
      ] }
    ]
  },
  "0.3": {
    def: "本小节说明手册的打印与备考用法：文档覆盖三级全部考点，所有代码均为考级可默写的标准写法，避免变长数组等扣分点；同时提示考前应重点背诵位运算判奇偶、字符串结束符、数组定义规范与四大字符串函数。",
    ex: [
      { t: "p", v: "示例：char s[105] 最多存放 104 个有效字符，最后一位留给结束符 '\\0'，strlen(s) 的返回值不含它。" }
    ]
  },
  "1.1": {
    def: "本小节是第一章的知识框架：机器数用原码、反码、补码表示，计算机内部统一以补码存储和运算；不同进制之间可用除基取余、按权展开互相转换；位运算直接操作整数的二进制位，常用于奇偶判断、快速乘除 2 和数值清零。",
    ex: [
      { t: "p", v: "示例：十进制 13 的二进制是 1101、八进制是 15、十六进制是 D；13 & 1 = 1，说明 13 是奇数。" }
    ]
  },
  "1.2": {
    def: "原码、反码、补码是带符号整数的三种二进制编码。正数的三码完全相同；负数的原码符号位为 1、其余为数值位，反码是符号位不变、数值位按位取反，补码为反码加 1。计算机用补码存储，可把减法变成加法并消除 -0。",
    ex: [
      { t: "list", v: [
        "以 8 位表示 -5：原码 10000101，反码 11111010，补码 11111011。",
        "正数 +5 的三码同为 00000101；补码 11111011 的最高位为 1，说明它是负数。"
      ] }
    ]
  },
  "1.3": {
    def: "进制转换是同一数值在不同数制间的等价表示。十进制转 R 进制用除基取余法，反复除以 R 并把余数逆序排列；R 进制转十进制用按权展开，各位数字乘 R 的位次幂后求和；二进制转八进制按三位一组、转十六进制按四位一组，从右往左分组。",
    ex: [
      { t: "code", v: "#include <cstdio>\nint main() {\n    int n = 45, bin[32], k = 0;\n    while (n > 0) {          // 除基取余，余数逆序输出\n        bin[k++] = n % 2;\n        n /= 2;\n    }\n    for (int i = k - 1; i >= 0; i--) printf(\"%d\", bin[i]);\n    printf(\" %X %o\\n\", 45, 45);   // 十六进制、八进制\n    return 0;\n}" },
      { t: "p", v: "输出：101101 2D 55（45 = 32+8+4+1；按权展开 1×2^5+0×2^4+1×2^3+1×2^2+0×2^1+1×2^0 = 45）。" }
    ]
  },
  "1.4": {
    def: "位运算直接对整数的二进制位逐位操作，共六种：& 按位与，同为 1 才为 1；| 按位或，有 1 则 1；^ 按位异或，相同为 0、不同为 1；~ 按位取反；<< 左移，右侧补 0，相当于乘 2 的幂；>> 右移，相当于整除 2 的幂。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 6, b = 3;   // 110, 011\n    cout << (a & b) << \" \" << (a | b) << \" \" << (a ^ b) << endl;\n    cout << (a << 1) << \" \" << (a >> 1) << endl;\n    cout << (~a) << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：2 7 5 / 12 3 / -7。~6 即 00000110 取反为 11111001，按补码解释等于 -7。" }
    ]
  },
  "1.5": {
    def: "位运算模板把常用技巧固化为可默写代码：x & 1 判断奇偶，结果为 1 是奇数、0 是偶数；x << 1 实现乘 2，x >> 1 实现整除 2；x ^ x 或 x & 0 可把数值清零。这些写法比取模和乘除运算更快，是三级必背的极简模板。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    if (x & 1) cout << \"奇数\" << endl;\n    else        cout << \"偶数\" << endl;\n    cout << (x << 1) << \" \" << (x >> 1) << endl;\n    int y = 7, z = 7;\n    y ^= z;                  // 相同数异或为 0\n    cout << y << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：偶数 / 20 5 / 0。" }
    ]
  },
  "2.1": {
    def: "一维数组是相同类型元素按下标连续存放的集合，下标从 0 开始。定义时长度必须是常量表达式，例如先 const int N = 105 再写 int a[N]；变长数组 int a[n] 不属于标准 C++，考试会被扣分。数组常用于遍历、最值、统计、逆序与前缀和。",
    ex: [
      { t: "p", v: "示例：int a[5] = {3, 1, 4, 1, 5}; 合法下标是 0~4，a[0] = 3、a[4] = 5；访问 a[5] 属于越界，结果不可预测。" }
    ]
  },
  "2.2": {
    def: "标准数组定义要求用 const 常量作为长度，写成 int a[N] 形式，并为题目数据上限留出余量，如数据最多 100 个就开 105。长度必须是编译期常量，而 int n; cin >> n; int a[n]; 的长度在运行时才确定，属于变长数组，不符合考级规范。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 105;   // 常量定义长度，考级满分写法\nint a[N];\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    cout << a[0] + a[n - 1] << endl;\n    return 0;\n}" },
      { t: "p", v: "输入：3 换行 1 2 3，输出：4（即 a[0] + a[2] = 1 + 3）。" }
    ]
  },
  "2.3": {
    def: "数组的基础操作包括输入赋值、遍历输出、最值查找和元素统计。输入与输出都用 for 循环按下标遍历；求最大值时先令 maxx = a[0]，再从下标 1 开始逐个比较并更新。所有循环边界都应写成 i < n，防止访问到未赋值的越界元素。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 105;\nint a[N];\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    for (int i = 0; i < n; i++) cout << a[i] << \" \";\n    cout << endl;\n    int maxx = a[0];\n    for (int i = 1; i < n; i++)\n        if (a[i] > maxx) maxx = a[i];\n    cout << maxx << endl;\n    return 0;\n}" },
      { t: "p", v: "输入：5 换行 7 3 9 1 5，输出：7 3 9 1 5 换行 9。" }
    ]
  },
  "2.4": {
    def: "数组逆序指把首尾元素对称交换，使整个序列的顺序反转。常用双指针写法：i 从 0 开始，每次与下标 n-1-i 的元素交换，循环 n/2 次即可完成，时间 O(n)、额外空间 O(1)。若循环写满 n 次，元素会被换回原处，数组等于没变。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nconst int N = 105;\nint a[N];\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    for (int i = 0; i < n / 2; i++)\n        swap(a[i], a[n - 1 - i]);\n    for (int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输入：5 换行 1 2 3 4 5，输出：5 4 3 2 1。" }
    ]
  },
  "2.5": {
    def: "前缀和是一种预处理技巧：令 sum[i] 表示 a[0] 到 a[i] 的元素之和，递推式为 sum[i] = sum[i-1] + a[i]，其中 sum[0] = a[0]。预处理耗时 O(n)，之后任意区间 [l, r] 的和可由 sum[r] - sum[l-1] 在 O(1) 内得到，l 为 0 时直接取 sum[r]。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 105;\nint a[N], sum[N];\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    sum[0] = a[0];\n    for (int i = 1; i < n; i++) sum[i] = sum[i - 1] + a[i];\n    int l = 1, r = 3;   // 查询 [1,3] 区间和\n    cout << sum[r] - (l ? sum[l - 1] : 0) << endl;\n    return 0;\n}" },
      { t: "p", v: "输入：5 换行 1 2 3 4 5，输出：9（即 a[1]+a[2]+a[3] = 2+3+4）。" }
    ]
  },
  "2.6": {
    def: "数字拆分是把整数的每一位分离出来，常用 while 循环配合 num % 10 取出末位、num /= 10 去掉末位，直到 num 变为 0，可依次得到个位、十位、百位。拆分结果存入数组后，可进一步统计位数、各位数字之和、奇偶个数或不同数字的种类。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 105;\nint res[N];\n\nint main() {\n    int num, cnt = 0, s = 0;\n    cin >> num;\n    while (num > 0) {\n        int d = num % 10;   // 取末位\n        res[cnt++] = d;\n        s += d;\n        num /= 10;          // 去掉末位\n    }\n    cout << cnt << \" \" << s << endl;\n    return 0;\n}" },
      { t: "p", v: "输入：1234，输出：4 10（共 4 位，各位数字之和 1+2+3+4 = 10，数组 res 中依次为 4、3、2、1）。" }
    ]
  },
  "3.1": {
    def: "C++ 中用字符数组存储的字符串以结束符 '\\0' 标记结尾，'\\0' 不计入有效长度。四大核心库函数是 strlen、strcmp、strcpy、strcat，使用前必须包含 <cstring>。考级常见题型有大小写转换、字符统计、子串查找与简单分割。",
    ex: [
      { t: "p", v: "示例：char s[] = \"hello\"; 内存中共占 6 字节，strlen(s) 返回 5，第 6 个字节是 '\\0'。" }
    ]
  },
  "3.2": {
    def: "字符数组 char s[105] 最多存放 104 个字符，再留一个位置给结束符 '\\0'。用 cin >> s 读入时系统会自动在末尾补上 '\\0'，字符串函数据此判断结尾；如果手工赋值时漏写结束符，strlen 会继续向后读内存，导致长度错误或输出乱码。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    char s[10] = \"abc\";\n    cout << strlen(s) << endl;          // 有效字符数\n    cout << (int)s[3] << endl;          // 结束符的编码\n    cout << sizeof(s) << endl;          // 数组总字节数\n    return 0;\n}" },
      { t: "p", v: "输出：3 / 0 / 10。s[3] 就是 '\\0'，其 ASCII 码为 0，sizeof 统计的是整个数组容量。" }
    ]
  },
  "3.3": {
    def: "四大字符串库函数都声明在 <cstring> 中：strlen(s) 返回有效字符个数，不含 '\\0'；strcmp(a,b) 逐字符按字典序比较，相等返回 0、a 大返回正数、a 小返回负数；strcpy(a,b) 把 b 连结束符一起复制到 a；strcat(a,b) 把 b 接到 a 末尾。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    char a[50] = \"hello\", b[50] = \"ok\";\n    cout << strlen(a) << endl;\n    cout << strcmp(\"abc\", \"abd\") << endl;\n    strcat(a, b);\n    cout << a << endl;\n    strcpy(a, \"hi\");\n    cout << a << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：5 / -1（负数表示 abc 小于 abd）/ hellook / hi。" }
    ]
  },
  "3.4": {
    def: "ASCII 编码中大写字母 A~Z 是 65~90，小写字母 a~z 是 97~122，同一字母的大小写编码正好相差 32。因此小写转大写只需判断是否为 'a'~'z' 后做 s[i] -= 32，大写转小写做 s[i] += 32；非字母字符必须跳过，否则会破坏数字和符号。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    char s[105] = \"Hello, GESP 3!\";\n    for (int i = 0; i < strlen(s); i++)\n        if (s[i] >= 'a' && s[i] <= 'z')\n            s[i] -= 32;\n    cout << s << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：HELLO, GESP 3!（逗号、空格和数字未被改动）。" }
    ]
  },
  "4.1": {
    def: "枚举（穷举）是按顺序把所有可能情况逐一列举，再判断哪些满足题目条件的一类算法思想。它实现简单、正确性容易保证，适合范围较小或情况有限的题目。使用时要注意枚举范围是否完整、判断条件是否准确，并能用提前退出减少无效计算。",
    ex: [
      { t: "p", v: "示例：统计 1~100 中能被 3 整除的数，枚举 i 从 1 到 100，判断 i % 3 == 0，共有 33 个（3, 6, 9, …, 99）。" }
    ]
  },
  "4.2": {
    def: "水仙花数是自幂数的一种，特指各位数字的立方和等于其本身的三位整数，例如 153 = 1³+5³+3³。求解时枚举 100~999 的每个整数，用 /100、/10%10、%10 分别取出百位、十位、个位，再判断三个数字的立方和是否等于原数。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 100; i <= 999; i++) {\n        int a = i / 100;\n        int b = i / 10 % 10;\n        int c = i % 10;\n        if (a*a*a + b*b*b + c*c*c == i)\n            cout << i << \" \";\n    }\n    return 0;\n}" },
      { t: "p", v: "输出：153 370 371 407（三级水仙花数共 4 个）。" }
    ]
  },
  "4.3": {
    def: "鸡兔同笼是经典枚举应用题：已知头的总数 head 和脚的总数 foot，每只鸡 2 只脚、每只兔 4 只脚。可设兔有 rabbit 只，则鸡有 head - rabbit 只，枚举 rabbit 从 0 到 head，检查 4*rabbit + 2*chicken 是否等于 foot，第一个满足条件的即为答案。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int head, foot;\n    cin >> head >> foot;\n    for (int rabbit = 0; rabbit <= head; rabbit++) {\n        int chicken = head - rabbit;\n        if (rabbit * 4 + chicken * 2 == foot) {\n            cout << chicken << \" \" << rabbit << endl;\n            break;\n        }\n    }\n    return 0;\n}" },
      { t: "p", v: "输入：35 94，输出：23 12（鸡 23 只、兔 12 只；23×2 + 12×4 = 94）。" }
    ]
  },
  "4.4": {
    def: "模拟算法是不做数学推导、不追求公式化简，而是完全按照题目描述的规则和步骤，用代码一步步还原过程并得到结果。它常见于日期推算、报数游戏、字符串处理和状态更新等题目，关键是把题意转成清晰的顺序、分支与循环，并处理好边界和结束条件。",
    ex: [
      { t: "p", v: "示例：判断 2024 年 2 月天数，规则为能被 4 整除且不能被 100 整除、或能被 400 整除的是闰年，2 月有 29 天；2024 % 4 == 0，故输出 29。" }
    ]
  },
  "5.1": {
    def: "本小节汇总三级考试的五个可默写模板：规范数组定义 const int N = 105; int a[N];、用 x & 1 判断奇偶、用 strlen 取字符串长度、数组遍历与最值查找、枚举通用框架。考前熟记这些写法，能避免变长数组、结束符遗漏和循环边界写错等常见失分点。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstring>\nusing namespace std;\nconst int N = 105;\nint a[N];\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int maxx = a[0];\n    for (int i = 1; i < n; i++)\n        if (a[i] > maxx) maxx = a[i];       // 最值查找\n    cout << maxx << endl;\n    char s[105] = \"gesp\";\n    cout << strlen(s) << endl;              // 不含 '\\0'\n    int x = 7;\n    if (x & 1) cout << \"奇数\" << endl;      // 位运算判奇偶\n    for (int i = 1; i <= 5; i++)            // 枚举框架\n        if (i % 2 == 0) cout << i << \" \";\n    return 0;\n}" },
      { t: "p", v: "输入：4 换行 3 8 2 6，输出：8 / 4 / 奇数 / 2 4。" }
    ]
  }
};

window.GESP_KB_PATCH[4] = {
  "0.1": {
    def: "GESP 四级只考察 C++ 基础语法内的高频考点：函数（值传递、引用传递、指针传递、作用域）、一级指针、结构体与结构体数组、固定长度二维数组、冒泡与选择排序、递推以及文件读写；禁止使用 Lambda 表达式、仿函数、变长数组、多级指针和复杂 STL 容器，代码须能在标准 C++ 环境下编译运行。",
    ex: [
      { t: "p", v: "示例：写一个交换两数的函数 void swap2(int &a, int &b) 属于允许范围；而 auto f = [](int x){ return x * 2; }; 使用了 Lambda 表达式，超出四级要求。" },
      { t: "list", ol: true, v: [
        "允许：struct Node{ int x, y; };、int g[105][105];、void f(int &x)、ifstream fin(\"in.txt\");",
        "禁止：int a[n];（变长数组）、int **p（二级指针）、auto f=[](int x){return x;};（Lambda）、vector<int>（复杂 STL）"
      ] }
    ]
  },
  "0.2": {
    def: "本手册按考点分为函数、指针基础、结构体、二维数组、排序算法、递推、文件读写和默写模板八个部分，每部分先给出知识点定义，再配可运行的样例代码与输出说明，最后提供考前默写模板，用于按顺序系统地复习四级全部笔试与大题考点。",
    ex: [
      { t: "list", ol: true, v: [
        "第 1 章 函数：值传递、引用传递、指针传递、局部与全局变量",
        "第 2 章 指针基础：取地址、解引用、空指针、指针与一维数组",
        "第 3 章 结构体：定义、成员访问、结构体数组、结构体排序",
        "第 4 章 二维数组：固定尺寸定义、矩阵遍历、元素查找",
        "第 5 章 排序算法：冒泡排序、选择排序",
        "第 6 章 递推算法：递推思想、斐波那契数列、台阶问题",
        "第 7 章 文件读写：ifstream 读文件、ofstream 写文件",
        "第 8 章 考前默写模板与打印建议"
      ] }
    ]
  },
  "1.1": {
    def: "函数是把完成特定任务的一段代码封装起来、可以重复调用的程序单位，由返回值类型、函数名、形参列表和函数体组成。调用时实参把值或地址交给形参，C++ 分为值传递（拷贝副本）、引用传递（别名共用内存）和指针传递（传地址后解引用）三种方式；函数内定义的是局部变量，函数外定义的是全局变量，同名时局部优先。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint g = 1;                       // 全局变量\nvoid byValue(int x) { x = 100; } // 值传递\nvoid byRef(int &x) { x = 100; }  // 引用传递\nvoid byPtr(int *p) { *p = 100; } // 指针传递\nint main() {\n    int a = 10, b = 10, c = 10;\n    byValue(a);\n    byRef(b);\n    byPtr(&c);\n    cout << a << \" \" << b << \" \" << c << endl;\n    cout << g << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：10 100 100 换行 1。值传递的 a 未被修改，引用传递的 b 和指针传递的 c 都被改成 100。" }
    ]
  },
  "1.2": {
    def: "值传递是函数调用时把实参的值复制一份交给形参，形参与实参是两个独立变量，各自占用不同的内存空间；因此函数内部对形参的任何修改都只作用于副本，函数返回后实参仍保持原值。它是 C++ 默认的参数传递方式，适合只读取数据、不需要把结果回传给调用处的场景。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nvoid change(int x) { x = 100; }\nvoid addOne(int x) { x++; }\nint main() {\n    int a = 10;\n    change(a);\n    addOne(a);\n    cout << a << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：10。两次调用都只是修改形参副本，调用结束后 a 仍是 10。" },
      { t: "note", v: "要点：形参 x 与实参 a 地址不同，可用 &x 与 &a 打印验证两者不相等。" }
    ]
  },
  "1.3": {
    def: "引用传递在形参类型后加 &，使形参成为实参的别名，二者共用同一块内存，函数内部对形参的读写就是对外部实参的读写。它既避免了拷贝开销，又能把计算结果带回调用处，是四级考试中让函数修改外部变量的首选写法；调用时直接写变量名，不需要取地址。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nvoid change(int &x) { x = 100; }\nvoid addOne(int &x) { x++; }\nint main() {\n    int a = 10;\n    change(a);\n    cout << a << endl;  // 100\n    addOne(a);\n    cout << a << endl;  // 101\n    return 0;\n}" },
      { t: "p", v: "输出：100 换行 101。x 是 a 的别名，函数内的修改直接作用在 a 上。" }
    ]
  },
  "1.4": {
    def: "指针传递把变量的内存地址作为实参传给指针形参，函数通过 *p 解引用访问并修改该地址上的数据，从而改变外部变量。调用时必须用 & 取出实参地址，形参类型要与实参类型匹配。与引用相比它更灵活，可以接收数组名或空指针，但使用前必须判空，绝不允许对空指针解引用。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nvoid change(int *p) { *p = 100; }\nvoid swapAB(int *x, int *y) {\n    int t = *x;\n    *x = *y;\n    *y = t;\n}\nint main() {\n    int a = 10, m = 1, n = 2;\n    change(&a);\n    cout << a << endl;              // 100\n    swapAB(&m, &n);\n    cout << m << \" \" << n << endl;  // 2 1\n    return 0;\n}" },
      { t: "p", v: "输出：100 换行 2 1。&a 把地址传给 p，*p = 100 修改的就是 a 本身。" }
    ]
  },
  "1.5": {
    def: "作用域指变量能够起作用的代码范围。在函数或大括号块内定义的变量是局部变量，出了该块立即失效，未初始化时值不确定；在所有函数之外定义的变量是全局变量，默认初始化为 0，整个程序都能访问。局部变量与全局变量同名时，局部变量会屏蔽全局变量，即所谓“局部优先”。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint num = 100;   // 全局变量\nint main() {\n    cout << num << endl;   // 100\n    {\n        int num = 20;      // 局部变量，屏蔽全局\n        cout << num << endl;  // 20\n    }\n    cout << num << endl;   // 100\n    return 0;\n}" },
      { t: "p", v: "输出：100 换行 20 换行 100。块内同名局部变量只在该块内生效，离开块后重新访问全局变量。" }
    ]
  },
  "2.1": {
    def: "指针是存放变量内存地址的变量，类型写作 int *p。用 & 取地址赋给指针，用 *p 解引用读写该地址上的数据；NULL 是空指针，不指向任何有效内存，解引用会导致程序崩溃。数组名等价于首元素地址，指针加减 1 按元素类型大小移动，即跨过一整个元素而不是一个字节，四级只考一级指针。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int *p = &a;\n    cout << *p << endl;      // 5\n    *p = 8;\n    cout << a << endl;       // 8\n    int arr[3] = {10, 20, 30};\n    int *q = arr;            // 等价于 &arr[0]\n    q++;\n    cout << *q << endl;      // 20\n    int *n = NULL;\n    cout << (n == NULL) << endl;  // 1\n    return 0;\n}" },
      { t: "p", v: "输出：5、8、20、1。p 指向 a 可读写原变量；q++ 跨过一个 int 指向 arr[1]；空指针只能比较，不能解引用。" }
    ]
  },
  "2.2": {
    def: "取地址与解引用是指针最基本的两个操作：&a 得到变量 a 的内存地址，可以赋给同类型的指针变量；*p 表示指针 p 所指向地址中存放的数据，既能读取也能赋值修改原变量。空指针用 NULL 表示，它不指向任何有效内存，只能用于比较判断，一旦解引用就会引发运行错误。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 7;\n    int *p = &a;\n    cout << *p << endl;      // 7\n    *p = *p + 3;\n    cout << a << endl;       // 10\n    int *q = NULL;\n    if (q == NULL) cout << \"空指针不解引用\" << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：7 换行 10 换行“空指针不解引用”。通过 *p 修改后原变量 a 由 7 变成 10。" }
    ]
  },
  "2.3": {
    def: "一维数组的数组名就是首元素的地址，因此可以把数组名直接赋给同类型指针，int *p = arr 等价于 int *p = &arr[0]。通过 p[i] 或 *(p+i) 访问元素，p++ 使指针指向下一个元素，移动的字节数等于元素类型的大小（int 为 4 字节）；两个指针相减得到它们相隔的元素个数，而不是字节数。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    int *p = arr;\n    cout << *p << endl;         // 10\n    cout << p[2] << endl;       // 30\n    p += 3;\n    cout << *p << endl;         // 40\n    cout << (p - arr) << endl;  // 3\n    return 0;\n}" },
      { t: "p", v: "输出：10、30、40、3。p += 3 后指向 arr[3]，与 arr 相差 3 个元素。" }
    ]
  },
  "3.1": {
    def: "结构体用 struct 关键字把多个类型可以不同的数据成员打包成一个整体，语法为 struct 名称 { 成员列表 };，定义后它就是一种新的数据类型。用“变量.成员”访问成员，用“数组[下标].成员”访问数组元素；结构体数组长度必须写成常量，结构体支持整体赋值、整体交换和排序，是四级压轴题常用的数据组织方式。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nstruct Point {\n    int x;\n    int y;\n};\nint main() {\n    Point p;\n    p.x = 3;\n    p.y = 4;\n    Point q = p;      // 整体赋值\n    q.x = 10;\n    cout << p.x << \" \" << p.y << endl;  // 3 4\n    cout << q.x << \" \" << q.y << endl;  // 10 4\n    return 0;\n}" },
      { t: "p", v: "输出：3 4 换行 10 4。修改 q 不影响 p，说明整体赋值是把各成员的值各自复制一份。" }
    ]
  },
  "3.2": {
    def: "结构体数组是元素类型为结构体的数组，声明方式与普通数组相同，如 Node a[105];，长度必须是常量。每个元素都包含完整的成员集合，用 a[i].x 的形式读写字段。使用流程通常是先循环赋值或读入，再按下标遍历输出、查找或统计，是处理“多名学生”“多个坐标”这类批量数据的标准写法。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nstruct Node {\n    int x, y;\n};\nint main() {\n    Node a[105] = {{1, 2}, {3, 4}, {5, 6}};\n    int n = 3, sum = 0;\n    for (int i = 0; i < n; i++) {\n        sum += a[i].x + a[i].y;\n        cout << a[i].x << \" \" << a[i].y << endl;\n    }\n    cout << sum << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：1 2 / 3 4 / 5 6 各占一行，最后一行输出 21（1+2+3+4+5+6）。" }
    ]
  },
  "3.3": {
    def: "结构体排序是在普通排序模板的基础上，把比较对象换成结构体的某个成员字段，交换时用 swap 直接交换整个结构体，使所有字段一起移动。冒泡排序实现结构体排序时，只需把 if (a[j] > a[j+1]) 改写为 if (s[j].score > s[j+1].score)；改比较字段即可按成绩、编号等不同字段排序，框架完全复用。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nstruct Student {\n    int id;\n    int score;\n};\nint main() {\n    Student s[105] = {{1, 85}, {2, 72}, {3, 90}};\n    int n = 3;\n    for (int i = 1; i <= n - 1; i++)\n        for (int j = 0; j <= n - 1 - i; j++)\n            if (s[j].score > s[j + 1].score)\n                swap(s[j], s[j + 1]);\n    for (int i = 0; i < n; i++)\n        cout << s[i].id << \" \" << s[i].score << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：2 72 换行 1 85 换行 3 90。按 score 升序排序，交换结构体时 id 与 score 一起移动。" }
    ]
  },
  "4.1": {
    def: "二维数组可以看作由行和列组成的表格，定义格式为“类型 数组名[行数][列数]”，行数和列数必须是编译期常量，如 int g[105][105];。元素 g[i][j] 表示第 i 行第 j 列，下标均从 0 开始；遍历时外层循环枚举行、内层循环枚举列。C++ 标准不支持变长数组，用变量作为长度属于超纲写法。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int g[3][4];   // 3 行 4 列，固定大小\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 4; j++)\n            g[i][j] = i * 4 + j;\n    int s = 0;\n    for (int i = 0; i < 3; i++) s += g[i][i];  // 主对角线\n    cout << g[2][3] << endl;  // 11\n    cout << s << endl;        // 0+5+10\n    return 0;\n}" },
      { t: "p", v: "输出：11 换行 15。g[2][3]=2×4+3=11，主对角线元素为 0、5、10，和为 15。" },
      { t: "note", v: "错误写法：int n; cin >> n; int a[n][n]; 属于变长数组，GESP 判错，应改成 int a[105][105];" }
    ]
  },
  "4.2": {
    def: "二维数组的常见操作包括按行列双重循环赋值、逐行输出形成矩阵、以及遍历查找满足条件的元素并记录其行列下标。访问顺序固定为先行后列，可以在此基础上求每行和、每列和及主对角线元素和；查找时若只需一个结果，命中后可以跳出，若要求输出全部结果则不能提前结束循环。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int g[4][3];\n    for (int i = 0; i < 4; i++)\n        for (int j = 0; j < 3; j++)\n            g[i][j] = i + j;\n    for (int i = 0; i < 4; i++) {\n        for (int j = 0; j < 3; j++) cout << g[i][j] << \" \";\n        cout << endl;\n    }\n    for (int i = 0; i < 4; i++)\n        for (int j = 0; j < 3; j++)\n            if (g[i][j] == 3)\n                cout << \"找到 3: 行 \" << i << \" 列 \" << j << endl;\n    return 0;\n}" },
      { t: "p", v: "输出矩阵四行：0 1 2 / 1 2 3 / 2 3 4 / 3 4 5，随后依次输出“找到 3: 行 1 列 2”“找到 3: 行 2 列 1”“找到 3: 行 3 列 0”。" }
    ]
  },
  "5.1": {
    def: "冒泡排序反复比较相邻的两个元素，若顺序错误就交换，每一轮都把当前未排序区间的最大值“浮”到区间末尾。n 个元素最多进行 n-1 轮，第 i 轮只需比较前 n-i 对相邻元素。平均与最坏时间复杂度均为 O(n²)，空间复杂度 O(1)，相等元素不会交换相对次序，是稳定的原地排序算法。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a[105] = {5, 2, 8, 1, 4};\n    int n = 5;\n    for (int i = 1; i <= n - 1; i++)\n        for (int j = 0; j <= n - 1 - i; j++)\n            if (a[j] > a[j + 1])\n                swap(a[j], a[j + 1]);\n    for (int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输出：1 2 4 5 8。第一轮把 8 送到末尾，之后依次确定 5、4、2 的位置。" }
    ]
  },
  "5.2": {
    def: "选择排序每一轮在未排序区间中扫描出最小值（或最大值）的下标，再把它与区间第一个元素交换，一轮最多只交换一次。n 个元素共进行 n-1 轮，第 i 轮从下标 i 开始查找最小值。无论数据初始顺序如何，比较次数恒为 n(n-1)/2，时间复杂度 O(n²)，空间复杂度 O(1)，属于不稳定的原地排序。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a[105] = {5, 2, 8, 1, 4};\n    int n = 5;\n    for (int i = 0; i < n - 1; i++) {\n        int minpos = i;\n        for (int j = i + 1; j < n; j++)\n            if (a[j] < a[minpos]) minpos = j;\n        swap(a[i], a[minpos]);\n    }\n    for (int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输出：1 2 4 5 8。第一轮找到最小值 1 与 a[0] 交换，数组变为 1 2 8 5 4，之后逐轮确定剩余位置。" }
    ]
  },
  "6.1": {
    def: "递推是一种由已知推向未知的算法思想：先确定可以直接得到的初始条件（边界值），再找出后一项与前若干项之间的递推关系式，用循环从小到大依次算出每一项，最终得到答案。它避免重复计算，效率远高于朴素递归；实现时通常用数组保存中间结果，要注意初值、递推方向和数据类型溢出。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    long long f[15];\n    f[1] = 1;                        // 初始条件\n    for (int i = 2; i <= 10; i++)\n        f[i] = f[i - 1] * i;         // 递推式\n    cout << f[10] << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：3628800（10 的阶乘）。由 f[1]=1 出发，逐项乘上 i 推出 f[2] 到 f[10]。" }
    ]
  },
  "6.2": {
    def: "斐波那契数列由初始条件 f[1]=1、f[2]=1 和递推式 f[n]=f[n-1]+f[n-2]（n≥3）确定，每一项都等于前两项之和。用数组从下标 3 开始循环递推，即可在 O(n) 时间内求出前 n 项；由于数值呈指数增长，n 较大时必须使用 long long 类型防止溢出。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    long long f[105];\n    f[1] = 1;\n    f[2] = 1;\n    for (int i = 3; i <= 10; i++)\n        f[i] = f[i - 1] + f[i - 2];\n    for (int i = 1; i <= 10; i++) cout << f[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输出：1 1 2 3 5 8 13 21 34 55。f[10]=34+21=55。" }
    ]
  },
  "6.3": {
    def: "台阶问题是经典的计数型递推：每次只能走 1 级或 2 级，设 dp[i] 表示走到第 i 级台阶的走法总数，那么最后一步要么从第 i-1 级走 1 级上来，要么从第 i-2 级走 2 级上来，因此 dp[i]=dp[i-1]+dp[i-2]，初始条件 dp[1]=1、dp[2]=2，答案就是 dp[n]。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 10;\n    long long dp[105];\n    dp[1] = 1;\n    dp[2] = 2;\n    for (int i = 3; i <= n; i++)\n        dp[i] = dp[i - 1] + dp[i - 2];\n    cout << dp[n] << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：89。dp 前几项为 1、2、3、5、8、13、21、34、55、89，与斐波那契数列整体后移一位相同。" }
    ]
  },
  "7.1": {
    def: "C++ 通过 <fstream> 头文件提供文件流类：ofstream 用于向文件写入数据，用法与 cout 一致；ifstream 用于从文件读取数据，用法与 cin 一致。构造对象时传入文件名即完成打开，读写结束后应调用 close() 关闭文件。文件可能打开失败，因此可以判断流对象的状态，避免读到错误数据。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <fstream>\nusing namespace std;\nint main() {\n    ofstream fout(\"sum.txt\");\n    fout << 3 << \" \" << 4 << \" \" << 5 << endl;\n    fout.close();\n\n    ifstream fin(\"sum.txt\");\n    int x, s = 0;\n    while (fin >> x) s += x;   // 读到文件末尾自动结束\n    fin.close();\n    cout << s << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：12。while (fin >> x) 每次读取一个整数，读不到数据时表达式为假，循环自然结束。" }
    ]
  },
  "7.2": {
    def: "文件读写的基本流程是：先用 ofstream 对象以 fout << 数据 的形式把结果写入文件并关闭，再用 ifstream 对象以 fin >> 变量 的形式把数据读回程序。读入方式与 cin 完全相同，遇到空格和换行自动分隔数据项。写入后必须先关闭文件再读取，否则缓冲区中的数据可能尚未真正写入磁盘。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <fstream>\nusing namespace std;\nint main() {\n    ofstream fout(\"test.txt\");\n    fout << 10 << \" \" << 20 << endl;\n    fout.close();\n\n    ifstream fin(\"test.txt\");\n    int a, b;\n    fin >> a >> b;\n    fin.close();\n    cout << a << \" \" << b << endl;\n    cout << a + b << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：10 20 换行 30。写入的两个整数被原样读回，说明文件流与 cout/cin 的用法一致。" }
    ]
  },
  "8.1": {
    def: "这是“用函数修改外部变量”的默写模板：形参写成“类型 &x”，x 就是实参的别名，函数体里直接对 x 自增或赋值，调用处只写变量名即可，函数返回后实参已被改变。相比指针写法更简洁，不需要取地址和解引用，也不存在空指针风险，是四级考试最常考的传递方式。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nvoid add(int &x) {\n    x++;\n}\nint main() {\n    int a = 5;\n    add(a);\n    cout << a << endl;   // 6\n    return 0;\n}" },
      { t: "p", v: "输出：6。add 的形参是引用，函数内的 x++ 直接修改了 main 中的 a。" }
    ]
  },
  "8.2": {
    def: "这是冒泡排序升序的标准模板：外层 i 从 1 到 n-1 控制比较轮次，内层 j 从 0 到 n-1-i 遍历尚未排好的部分，若 a[j] > a[j+1] 就交换，每轮结束后末尾 i 个元素已经有序。默写时要记清两个循环的边界，内层上界必须是 n-1-i，否则会访问到 a[n] 造成越界。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a[105] = {9, 3, 7, 1};\n    int n = 4;\n    for (int i = 1; i <= n - 1; i++)\n        for (int j = 0; j <= n - 1 - i; j++)\n            if (a[j] > a[j + 1]) swap(a[j], a[j + 1]);\n    for (int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输出：1 3 7 9。共进行 3 轮，第一轮把 9 冒到末尾，第二轮把 7 冒到倒数第二，最后一轮确定 3。" }
    ]
  },
  "8.3": {
    def: "这是结构体数组的默写模板：先用 struct 定义成员类型，再声明长度是常量的结构体数组，然后用循环从下标 0 到 n-1 依次读入各字段，常配合遍历输出、查找与排序一起使用。默写时注意数组长度必须写成常量而不能用变量，循环上界取 n-1，避免数组越界。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nstruct Node {\n    int x, y;\n};\nNode arr[105];\nint main() {\n    int n = 3;\n    for (int i = 0; i < n; i++) {\n        arr[i].x = i + 1;\n        arr[i].y = (i + 1) * 10;\n    }\n    for (int i = 0; i < n; i++)\n        cout << arr[i].x << \" \" << arr[i].y << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：1 10 换行 2 20 换行 3 30。实际考试中把赋值语句换成 cin >> arr[i].x >> arr[i].y; 即可。" }
    ]
  },
  "8.4": {
    def: "这一节给出把网页内容转成可打印文档的操作建议：把正文全部复制粘贴到 Word 或 WPS，正文设置为宋体小四、1.5 倍行距，代码块改用 Consolas 等等宽字体以保持缩进对齐；如果不需要目录，可以直接删除目录页只打印正文，必要时再补充练习题。",
    ex: [
      { t: "list", ol: true, v: [
        "正文：宋体、小四、1.5 倍行距",
        "代码：Consolas 等宽字体，保留缩进",
        "打印：可删除目录页，直接打印正文",
        "打印前建议先导出 PDF 预览分页，避免代码块被截断"
      ] },
      { t: "p", v: "示例：一份 6 页的手册用 A4、页边距 2 厘米、小四 1.5 倍行距打印，代码块用 Consolas 9 号字，可保证一行 60 个字符不换行。" }
    ]
  },
  "8.5": {
    def: "这一节是对整份手册的总体使用说明：内容已覆盖 GESP 四级笔试与大题的全部考点，所有代码均为标准写法、不含超纲语法，可以直接默写并上机运行；考前应优先背诵排序模板、引用传递模板和结构体数组模板，并熟记递推的初始条件与边界处理。",
    ex: [
      { t: "list", ol: true, v: [
        "必背模板 1：void add(int &x) { x++; }（引用传递）",
        "必背模板 2：冒泡排序双重循环，内层上界 n-1-i",
        "必背模板 3：struct Node { int x, y; }; Node arr[105]; 加循环读入",
        "易错点：变长数组、空指针解引用、内层循环越界、int 溢出"
      ] },
      { t: "p", v: "示例：考前 3 天每天默写一遍这三套模板并运行验证输出，比单纯看代码更能发现边界错误。" }
    ]
  }
};

window.GESP_KB_PATCH[5] = {
  "0.1": {
    def: "本手册面向 GESP C++ 五级认证，按考纲把内容组织为初等数论、二分算法、递归与分治、高精度运算、单链表五条主线，并附考前必背模板。数论占比最高，约 35%，二分、递归、高精度与链表是大题高频考点。用途是提供可直接打印、按知识点检索的复习纲要，帮助考生在有限时间内定位重点、对照模板自测。",
    ex: [
      { t: "p", v: "示例：五级满分 100 分，初等数论约占 35 分，是分值最高的一块；二分、递归与分治、高精度、单链表多以编程大题形式出现，通常各占 10~20 分。" },
      { t: "list", v: ["优先顺序：数论模板（GCD、判质数、筛法）→ 二分模板 → 归并/快排 → 高精度加减乘 → 单链表增删遍历"] }
    ]
  },
  "1.1": {
    def: "初等数论研究整数的整除性质，五级需要掌握六块内容：质数与合数的判定、根号 n 试除法、埃氏筛与线性筛两种批量筛法、欧几里得算法求最大公约数并由此求最小公倍数、把正整数拆成质数幂次乘积的质因数分解，以及加减乘取模与同余性质。它们是后续二分、递推与计数类题目的基础工具。",
    ex: [
      { t: "p", v: "示例：2、3、5、7 是质数；1 既不是质数也不是合数；12 是合数（12=2²×3）；gcd(12,18)=6，lcm(12,18)=36；360=2³×3²×5。" }
    ]
  },
  "1.2": {
    def: "试除法判定质数：若 n 能被 2 到 n-1 中某个整数整除，则 n 为合数。由于因数成对出现，若存在因数 d>√n，必存在对应因数 n/d<√n，因此只需枚举到 √n；再特判 n<2（0、1 既非质数也非合数），即可在 O(√n) 时间内完成判断。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n < 2) return false;            // 特判 0、1\n    for (int i = 2; i <= sqrt(n); i++)\n        if (n % i == 0) return false;   // 找到其他因数\n    return true;\n}\n\nint main() {\n    int a[4] = {1, 2, 91, 97};\n    for (int i = 0; i < 4; i++)\n        cout << a[i] << (isPrime(a[i]) ? \" 是质数\" : \" 不是质数\") << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：1 不是质数 / 2 是质数 / 91 不是质数 / 97 是质数（91=7×13，只需枚举到 9 即可发现）。" }
    ]
  },
  "1.3": {
    def: "埃氏筛用于在 1~n 范围内批量筛出质数：先把全部数标记为质数，再从 2 开始，若当前数仍为质数，就把它的所有倍数（从 i×2 开始）标记为合数，扫描结束后未标记的数即质数。时间复杂度 O(n log log n)，实现简单，适合五级常见数据范围。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 105;\nbool isP[N];\n\nint main() {\n    for (int i = 2; i < N; i++) isP[i] = true;\n    for (int i = 2; i < N; i++) {\n        if (!isP[i]) continue;\n        for (int j = i * 2; j < N; j += i) isP[j] = false;\n    }\n    for (int i = 2; i <= 50; i++)\n        if (isP[i]) cout << i << \" \";\n    return 0;\n}" },
      { t: "p", v: "输出：2 3 5 7 11 13 17 19 23 29 31 37 41 43 47。" }
    ]
  },
  "1.4": {
    def: "线性筛（欧拉筛）在埃氏筛基础上消除重复标记：对每个 i，用已筛出的质数 prime[j] 去标记 i×prime[j]，当 i 能被 prime[j] 整除时立即停止。这样每个合数只会被它的最小质因子标记一次，时间复杂度严格为 O(n)，同时可顺带求出每个数的最小质因子。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 35;\nbool vis[N];\nint prime[N], cnt = 0;\n\nint main() {\n    for (int i = 2; i < N; i++) {\n        if (!vis[i]) prime[++cnt] = i;\n        for (int j = 1; j <= cnt && i * prime[j] < N; j++) {\n            vis[i * prime[j]] = true;\n            if (i % prime[j] == 0) break;   // 关键：保证只被最小质因子筛一次\n        }\n    }\n    for (int i = 1; i <= cnt; i++) cout << prime[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输出：2 3 5 7 11 13 17 19 23 29 31。例如 12 只会在 i=6、prime[j]=2 时被标记一次。" }
    ]
  },
  "1.5": {
    def: "最大公约数指能同时整除 a、b 的最大正整数，常用欧几里得算法：gcd(a,b)=gcd(b,a mod b)，当 b=0 时结果为 a，可写成递归一行。最小公倍数满足 a×b=gcd(a,b)×lcm(a,b)，故 lcm(a,b)=a/gcd(a,b)×b；先除后乘可避免中间结果溢出。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) { return b ? gcd(b, a % b) : a; }\nint lcm(int a, int b) { return a / gcd(a, b) * b; }  // 先除后乘防溢出\n\nint main() {\n    int a = 12, b = 18;\n    cout << \"GCD: \" << gcd(a, b) << endl;\n    cout << \"LCM: \" << lcm(a, b) << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：GCD: 6 / LCM: 36（12×18=216，216÷6=36）。" }
    ]
  },
  "1.6": {
    def: "质因数分解把一个大于 1 的整数写成若干质数幂次的乘积形式，如 360=2³×3²×5。做法是从 2 开始枚举到 √n，若 i 能整除 n 就反复除以 i 并统计次数；枚举结束后若 n 仍大于 1，说明剩余部分是最后一个质因子，指数为 1。时间复杂度 O(√n)。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 360;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i) continue;\n        int c = 0;\n        while (n % i == 0) { n /= i; c++; }\n        cout << i << \"^\" << c << \" \";\n    }\n    if (n > 1) cout << n << \"^1\";\n    return 0;\n}" },
      { t: "p", v: "输出：2^3 3^2 5^1，即 360=2³×3²×5。" }
    ]
  },
  "1.7": {
    def: "模运算求整数除法后的余数，记为 a mod m。常用性质：加减乘都可以先取模再运算，(a+b)%m=(a%m+b%m)%m，(a×b)%m=(a%m×b%m)%m，常用于大数运算只保留余数。减法取模要防止负数，可写成 (a-b+m)%m；除法不满足该性质，需要逆元。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int MOD = 1000000007;\n\nint main() {\n    int a = 123456, b = 789012;\n    cout << (a % MOD + b % MOD) % MOD << endl;\n    cout << 1LL * (a % MOD) * (b % MOD) % MOD << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：912468 / 408264793。123456×789012=97408265472，对 1e9+7 取模得 408264793；乘法先转 1LL 防止 int 溢出。" }
    ]
  },
  "2.1": {
    def: "二分算法要求待搜索区间具有单调性：每次取区间中点，根据中点与目标的比较结果舍弃一半区间，使问题规模减半，时间复杂度 O(log n)。常见形式有两种：二分查找在有序数组中定位某个值；二分答案把求解最值转化为判定某个值是否可行，再在答案区间上二分。",
    ex: [
      { t: "p", v: "示例：在 1~100 中猜一个数，每次回答「大了/小了」，最多 7 次即可确定（2⁶=64<100≤128=2⁷），体现区间不断折半的效果。" }
    ]
  },
  "2.2": {
    def: "二分查找在升序数组中查找目标值：维护左右边界 l、r，循环取 mid=(l+r)/2，若 a[mid]==x 则返回下标，a[mid]<x 说明目标在右半区间令 l=mid+1，否则令 r=mid-1；当 l>r 时说明不存在，返回 -1。每轮区间减半，时间复杂度 O(log n)，前提是数组有序。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint binarySearch(int a[], int n, int x) {\n    int l = 0, r = n - 1;\n    while (l <= r) {\n        int mid = (l + r) / 2;\n        if (a[mid] == x) return mid;\n        else if (a[mid] < x) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int a[6] = {1, 3, 5, 7, 9, 11};\n    cout << binarySearch(a, 6, 7) << \" \" << binarySearch(a, 6, 8);\n    return 0;\n}" },
      { t: "p", v: "输出：3 -1。7 在下标 3；8 不存在，返回 -1。" }
    ]
  },
  "2.3": {
    def: "二分答案是求解最值问题的通用套路：当答案具有单调性（若 x 可行，则所有大于 x 的值也可行）时，在答案的取值范围内二分，用 check 函数判定某个候选值是否满足条件，据此收缩边界，最终得到最小可行值或最大可行值。适用题型包括最小化最大值、最大化最小值、切分段落等。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[105];\n\nbool check(int mid, int n, int m) {   // 每段和不超过 mid，能否分成不超过 m 段\n    int cnt = 1, sum = 0;\n    for (int i = 0; i < n; i++) {\n        if (sum + a[i] > mid) { cnt++; sum = a[i]; }\n        else sum += a[i];\n    }\n    return cnt <= m;\n}\n\nint main() {\n    int n = 5, m = 2;\n    int v[5] = {7, 2, 5, 10, 8};\n    int l = 0, r = 0;\n    for (int i = 0; i < n; i++) { a[i] = v[i]; l = max(l, a[i]); r += a[i]; }\n    while (l < r) {\n        int mid = (l + r) / 2;\n        if (check(mid, n, m)) r = mid;\n        else l = mid + 1;\n    }\n    cout << l;\n    return 0;\n}" },
      { t: "p", v: "输出：18。划分为 [7,2,5] 与 [10,8]，两段和分别为 14、18，最大值 18 已是最小可能值。" }
    ]
  },
  "3.1": {
    def: "递归是函数直接或间接调用自身，必须包含终止条件（边界）与向边界收敛的递推式，否则会无限递归导致栈溢出。分治是递归的应用：把大问题拆成若干个规模更小、结构相同的子问题，分别求解后合并结果。归并排序、快速排序都是分治的典型代表。",
    ex: [
      { t: "list", v: ["求阶乘：f(5)=5×f(4)=5×4×3×2×1=120，边界 f(1)=1", "归并排序：8 个数拆成 4+4，再拆成 2+2+2+2，排序后逐层合并", "快速排序：以基准划分后，左右子区间规模约为原来的一半"] }
    ]
  },
  "3.2": {
    def: "斐波那契数列定义为 f(1)=f(2)=1，f(n)=f(n-1)+f(n-2)（n≥3）。用递归实现时，前两项作为终止条件返回 1，其余项返回两个子问题的和。写法直观，但存在大量重复计算，时间复杂度 O(2ⁿ)，n 较大时应改用递推或记忆化。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint f(int n) {\n    if (n == 1 || n == 2) return 1;   // 递归边界\n    return f(n - 1) + f(n - 2);       // 递推式\n}\n\nint main() {\n    for (int i = 1; i <= 10; i++) cout << f(i) << \" \";\n    return 0;\n}" },
      { t: "p", v: "输出：1 1 2 3 5 8 13 21 34 55。" }
    ]
  },
  "3.3": {
    def: "归并排序是分治的典型应用：把区间从中间一分为二，分别递归排序左右两半，再用双指针把两个有序区间合并成一个有序区间，最后回填原数组。递归边界是区间长度小于 2。时间复杂度稳定为 O(n log n)，需要 O(n) 的辅助数组空间。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint a[105], tmp[105];\n\nvoid mergeSort(int l, int r) {\n    if (l >= r) return;\n    int mid = (l + r) / 2;\n    mergeSort(l, mid);\n    mergeSort(mid + 1, r);\n    int i = l, j = mid + 1, k = l;\n    while (i <= mid && j <= r) {\n        if (a[i] <= a[j]) tmp[k++] = a[i++];\n        else tmp[k++] = a[j++];\n    }\n    while (i <= mid) tmp[k++] = a[i++];\n    while (j <= r) tmp[k++] = a[j++];\n    for (int p = l; p <= r; p++) a[p] = tmp[p];\n}\n\nint main() {\n    int n = 5, v[5] = {5, 4, 2, 3, 1};\n    for (int i = 0; i < n; i++) a[i] = v[i];\n    mergeSort(0, n - 1);\n    for (int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输入 5 4 2 3 1，输出：1 2 3 4 5。" }
    ]
  },
  "3.4": {
    def: "快速排序同样基于分治：先选一个基准数（常取中间位置元素），用左右指针从两端向中间扫描，把小于基准的放左边、大于基准的放右边，一趟划分后基准归位；再递归排序左右两个子区间。平均时间复杂度 O(n log n)，最坏 O(n²)。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint a[105];\n\nvoid quickSort(int l, int r) {\n    if (l >= r) return;\n    int mid = a[(l + r) / 2];\n    int i = l, j = r;\n    while (i <= j) {\n        while (a[i] < mid) i++;\n        while (a[j] > mid) j--;\n        if (i <= j) swap(a[i++], a[j--]);\n    }\n    quickSort(l, j);\n    quickSort(i, r);\n}\n\nint main() {\n    int n = 6, v[6] = {8, 3, 6, 3, 1, 9};\n    for (int i = 0; i < n; i++) a[i] = v[i];\n    quickSort(0, n - 1);\n    for (int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输入 8 3 6 3 1 9，输出：1 3 3 6 8 9。" }
    ]
  },
  "3.5": {
    def: "时间复杂度用大 O 记号描述算法运行时间随数据规模 n 增长的趋势，忽略常数与低次项。单层循环与简单递归为 O(n)，每次规模减半的二分与分治为 O(log n)，对每层 O(n)、共 log n 层的归并/快速排序为 O(n log n)。它是判断程序能否在规定时间内运行完的依据。",
    ex: [
      { t: "p", v: "示例：n=1000 时，O(n) 约 1000 次操作，O(log n) 约 10 次，O(n log n) 约 10000 次；n=10⁶ 时 O(n²) 需 10¹² 次必然超时，而 O(n log n) 约 2×10⁷ 次可以通过。" }
    ]
  },
  "4.1": {
    def: "高精度运算用于处理超出 int、long long 表示范围的大整数：把数字按位存入数组，模拟竖式加减乘的进位与借位过程。实现要点是字符串输入后逆序存储，使下标 0 对应个位，便于从低位向高位处理；结果长度取两数长度之和或较大值加一，输出时逆序并去掉前导零。",
    ex: [
      { t: "p", v: "示例：2¹⁰⁰=1267650600228229401496703205376，共 31 位，远超 long long 上限 9223372036854775807，必须用数组存储；逆序存储时个位 6 放在 a[0]。" }
    ]
  },
  "4.2": {
    def: "高精度加法把两个大整数逐位对齐相加：逆序存入数组后，从个位开始 c[i]=a[i]+b[i]+进位，若 c[i]≥10 则向高位进 1 并保留 c[i]%10；循环结束后若最高位仍有进位，结果长度加一，再逆序输出。时间复杂度 O(n)，n 为位数。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <string>\nusing namespace std;\nint a[205], b[205], c[205];\n\nint main() {\n    string s1 = \"99999999999999999999\", s2 = \"1\";\n    int n1 = s1.size(), n2 = s2.size();\n    for (int i = 0; i < n1; i++) a[n1 - 1 - i] = s1[i] - '0';\n    for (int i = 0; i < n2; i++) b[n2 - 1 - i] = s2[i] - '0';\n    int len = n1 > n2 ? n1 : n2;\n    for (int i = 0; i < len; i++) {\n        c[i] += a[i] + b[i];\n        c[i + 1] += c[i] / 10;\n        c[i] %= 10;\n    }\n    if (c[len]) len++;\n    for (int i = len - 1; i >= 0; i--) cout << c[i];\n    return 0;\n}" },
      { t: "p", v: "输出：100000000000000000000（20 个 9 加 1，连续进位使位数从 20 位变为 21 位）。" }
    ]
  },
  "4.3": {
    def: "高精度乘法模拟竖式：逆序存储两个大整数后，双重循环让 a[i] 与 b[j] 相乘并累加到 c[i+j]，随即处理进位 c[i+j+1]+=c[i+j]/10、c[i+j]%=10。结果最多 len1+len2 位，输出前需去掉前导零。时间复杂度 O(n×m)。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <string>\nusing namespace std;\nint a[205], b[205], c[405];\n\nint main() {\n    string s1 = \"123456789\", s2 = \"987654321\";\n    int n1 = s1.size(), n2 = s2.size();\n    for (int i = 0; i < n1; i++) a[n1 - 1 - i] = s1[i] - '0';\n    for (int i = 0; i < n2; i++) b[n2 - 1 - i] = s2[i] - '0';\n    for (int i = 0; i < n1; i++) {\n        for (int j = 0; j < n2; j++) {\n            c[i + j] += a[i] * b[j];\n            c[i + j + 1] += c[i + j] / 10;\n            c[i + j] %= 10;\n        }\n    }\n    int len = n1 + n2;\n    while (len > 1 && c[len - 1] == 0) len--;\n    for (int i = len - 1; i >= 0; i--) cout << c[i];\n    return 0;\n}" },
      { t: "p", v: "输出：121932631112635269。" }
    ]
  },
  "5.1": {
    def: "链表由若干节点组成，每个节点包含数据域和指向下一个节点的指针域，节点在内存中不必连续。单链表只有一个 next 指针，已知头指针即可从头遍历；头部插入只需让新节点指向原头节点并更新头指针，复杂度 O(1)。五级只考单链表的创建、遍历、头部插入与指定节点删除。",
    ex: [
      { t: "p", v: "示例：节点 10→20→30→NULL 表示头节点值为 10 的单链表；头部插入 5 后变为 5→10→20→30→NULL；删除值为 20 的节点需让 10 的 next 指向 30，结果为 5→10→30→NULL。" }
    ]
  },
  "5.2": {
    def: "单链表基本操作包括：用 struct 定义含 val 与 next 指针的节点，用 new 逐个创建并串联，尾节点 next 置为 NULL；遍历时用工作指针 p 沿 next 前进；头部插入 O(1)；删除指定值节点需先找到其前驱 pre，执行 pre->next=p->next 后 delete p 释放内存。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nstruct Node { int val; Node *next; };\n\nvoid printList(Node *head) {\n    for (Node *p = head; p != NULL; p = p->next) cout << p->val << \" \";\n    cout << endl;\n}\n\nint main() {\n    Node *n1 = new Node{10, NULL};\n    Node *n2 = new Node{20, NULL};\n    Node *n3 = new Node{30, NULL};\n    n1->next = n2; n2->next = n3;\n    cout << \"原始链表: \"; printList(n1);\n\n    Node *s = new Node{5, n1};   // 头部插入\n    n1 = s;\n    cout << \"头部插入后: \"; printList(n1);\n\n    Node *p = n1, *pre = NULL;\n    while (p != NULL && p->val != 20) { pre = p; p = p->next; }\n    if (p != NULL) { pre->next = p->next; delete p; }\n    cout << \"删除节点后: \"; printList(n1);\n    return 0;\n}" },
      { t: "p", v: "输出：原始链表: 10 20 30 / 头部插入后: 5 10 20 30 / 删除节点后: 5 10 30。" }
    ]
  },
  "6.1": {
    def: "考前模板是五级高频代码的最小记忆单元，包括：一行递归写的欧几里得 GCD、带 n<2 特判与根号枚举的质数判断、l<=r 三支判断的标准二分查找，以及「先写终止条件、再写递推式」的递归通用结构。默写时应保证边界与终止条件正确，再套用具体题目。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) { return b ? gcd(b, a % b) : a; }\n\nbool isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i * i <= n; i++)\n        if (n % i == 0) return false;\n    return true;\n}\n\nint binarySearch(int a[], int n, int x) {\n    int l = 0, r = n - 1;\n    while (l <= r) {\n        int mid = (l + r) / 2;\n        if (a[mid] == x) return mid;\n        else if (a[mid] < x) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int a[5] = {1, 3, 5, 7, 9};\n    cout << gcd(84, 36) << \" \" << isPrime(97) << \" \"\n         << binarySearch(a, 5, 9) << \" \" << binarySearch(a, 5, 4);\n    return 0;\n}" },
      { t: "p", v: "输出：12 1 4 -1。gcd(84,36)=12；97 是质数输出 1；9 在下标 4；4 不存在返回 -1。" }
    ]
  }
};

window.GESP_KB_PATCH[6] = {
  "4.1b": {
    def: "爬楼梯是线性动态规划的入门模型：每次可以走 1 级或 2 级，求走到第 n 级的走法总数。设 dp[i] 为走到第 i 级的方案数，最后一步只能从 i−1 级走 1 级或从 i−2 级走 2 级上来，故 dp[i]=dp[i−1]+dp[i−2]，初始 dp[1]=1、dp[2]=2，递推结果即斐波那契数列的平移，时间复杂度 O(n)。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long dp[105] = {0, 1, 2};\n    for (int i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n    cout << dp[n] << endl;\n    return 0;\n}" },
      { t: "p", v: "示例：输入 5，输出 8（5 级台阶共有 8 种走法）。" }
    ]
  },
  "0.1": {
    def: "本手册是 GESP C++ 六级认证的复习纲要，按考纲把内容分为五条主线：树结构（二叉树遍历、BST、哈夫曼树）、线性结构（栈、队列、单调栈）、搜索算法（DFS 回溯、BFS 最短路）、动态规划（一维 DP、01 背包、LIS）与面向对象基础（类、对象、构造函数、访问权限），并附考前默写模板，便于按知识点检索与打印自测。",
    ex: [
      { t: "p", v: "示例：全书共 6 章，第 1 章树结构与第 4 章动态规划是六级核心大题考点，第 5 章面向对象为必考基础题，第 6 章为考前速记模板。" },
      { t: "list", v: ["建议复习顺序：二叉树遍历 → DFS/BFS → 爬楼梯与 LIS → 01 背包 → 类与对象 → 背诵模板"] }
    ]
  },
  "1.1": {
    def: "树是 n 个节点的有限集合，有且仅有一个根，其余节点分成若干互不相交的子树；二叉树限定每个节点最多有两个子节点，并区分左右孩子，左右子树互换即成为另一棵树。树常用链表存储，完全二叉树可用数组存储；按访问根的先后不同，分为前序、中序、后序三种遍历，二叉搜索树的中序序列必为升序。",
    ex: [
      { t: "p", v: "示例：根为 1，左孩子 2，右孩子 3。前序为 1 2 3，中序为 2 1 3，后序为 2 3 1；节点总数 3，高度 2，叶子节点是 2 和 3。" },
      { t: "list", v: ["满二叉树：每一层节点数都达到最大；完全二叉树：除最后一层外都排满，最后一层节点靠左连续排列", "BST 满足左小右大，因此中序遍历结果是升序序列"] }
    ]
  },
  "1.2": {
    def: "二叉树节点用结构体描述，含数据域 val 与左右指针 left、right，分别指向两棵子树；空子树与叶子节点的孩子指针置为 NULL 或 nullptr，递归时以此作为终止条件。构造函数 TreeNode(int x) 在 new 创建节点时自动赋值，使左右指针为空，可避免野指针；左右孩子必须分开保存。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left, *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nint main() {\n    TreeNode *root = new TreeNode(1);\n    root->left = new TreeNode(2);\n    root->right = new TreeNode(3);\n    cout << root->val << \" \" << root->left->val << \" \" << root->right->val << endl;\n    cout << (root->left->left == NULL ? \"左孩子的左孩子为空\" : \"非空\");\n    return 0;\n}" },
      { t: "p", v: "输出：1 2 3 / 左孩子的左孩子为空（未挂子树的指针由构造函数置为 NULL）。" }
    ]
  },
  "1.3": {
    def: "遍历是按某种次序访问树中每个节点且只访问一次。前序为根→左→右，中序为左→根→右，后序为左→右→根，三者都用递归实现：先判空返回，再按各自次序递归左右子树并输出根。遍历把树形结构线性化：前序适合复制树，中序在 BST 上得到升序序列，后序适合释放节点。时间复杂度 O(n)，递归深度等于树高。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left, *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nvoid preOrder(TreeNode *root) {\n    if (!root) return;\n    cout << root->val << \" \";\n    preOrder(root->left);\n    preOrder(root->right);\n}\n\nvoid inOrder(TreeNode *root) {\n    if (!root) return;\n    inOrder(root->left);\n    cout << root->val << \" \";\n    inOrder(root->right);\n}\n\nvoid postOrder(TreeNode *root) {\n    if (!root) return;\n    postOrder(root->left);\n    postOrder(root->right);\n    cout << root->val << \" \";\n}\n\nint main() {\n    TreeNode *root = new TreeNode(4);\n    root->left = new TreeNode(2);\n    root->right = new TreeNode(6);\n    root->left->left = new TreeNode(1);\n    root->left->right = new TreeNode(3);\n    root->right->left = new TreeNode(5);\n    root->right->right = new TreeNode(7);\n    preOrder(root);  cout << endl;\n    inOrder(root);   cout << endl;\n    postOrder(root); cout << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：前序 4 2 1 3 6 5 7 / 中序 1 2 3 4 5 6 7 / 后序 1 3 2 5 7 6 4。中序为升序，说明该树是 BST。" }
    ]
  },
  "1.4": {
    def: "完全二叉树可按层序连续存入数组：根下标为 1 时，下标 i 的节点左孩子为 2i、右孩子为 2i+1、父节点为 i/2（整除）。判断孩子是否存在只需比较下标与节点总数 n；高度为 ⌊log₂n⌋+1。该存储省去指针，堆就用它实现。若以 0 为根，则孩子为 2i+1 与 2i+2、父为 (i-1)/2，两种写法不可混用。",
    ex: [
      { t: "p", v: "示例：完全二叉树依次存 1~6 共 6 个节点，则下标 2 的左孩子是 4、右孩子是 5；下标 6 的父节点是 6/2=3；高度 ⌊log₂6⌋+1=3。" },
      { t: "list", v: ["孩子存在条件：2i ≤ n 时存在左孩子，2i+1 ≤ n 时存在右孩子", "下标 1 的父节点写作 0，表示根没有父节点"] }
    ]
  },
  "1.5": {
    def: "二叉搜索树满足：任一节点左子树所有键值都小于它，右子树所有键值都大于它，因此中序遍历为升序。插入时从根开始比较，小则进入左子树，大则进入右子树，走到空位置即新建节点并接上，递归写法用 root->left = insert(...) 接收返回值以维护指针。平均时间 O(log n)，插入序列有序时退化成链，时间 O(n)。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left, *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nTreeNode* insert(TreeNode *root, int x) {\n    if (!root) return new TreeNode(x);\n    if (x < root->val) root->left = insert(root->left, x);\n    else               root->right = insert(root->right, x);\n    return root;\n}\n\nvoid inOrder(TreeNode *root) {\n    if (!root) return;\n    inOrder(root->left);\n    cout << root->val << \" \";\n    inOrder(root->right);\n}\n\nint main() {\n    TreeNode *root = NULL;\n    int a[5] = {5, 3, 8, 1, 4};\n    for (int i = 0; i < 5; i++) root = insert(root, a[i]);\n    inOrder(root);\n    return 0;\n}" },
      { t: "p", v: "输出：1 3 4 5 8（依次插入 5、3、8、1、4 后，中序遍历得到升序序列）。" }
    ]
  },
  "1.6": {
    def: "哈夫曼树是带权路径长度 WPL 最小的二叉树，构造采用贪心：把所有节点按权值放入小根堆，每次取出权值最小的两个合并成新节点，新节点权值为两者之和并放回，重复到只剩一个根。结论：哈夫曼树没有度为 1 的节点，n 个叶子的哈夫曼树共有 2n−1 个节点；约定左分支为 0、右分支为 1，得到的前缀编码任一码都不是另一码的前缀，可用于无损压缩。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <queue>\n#include <vector>\n#include <functional>\nusing namespace std;\n\nint main() {\n    int w[4] = {1, 2, 3, 4};\n    priority_queue<int, vector<int>, greater<int> > pq;\n    for (int i = 0; i < 4; i++) pq.push(w[i]);\n    int wpl = 0;\n    while (pq.size() > 1) {\n        int a = pq.top(); pq.pop();\n        int b = pq.top(); pq.pop();\n        int s = a + b;\n        wpl += s;\n        pq.push(s);\n    }\n    cout << \"WPL = \" << wpl << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：WPL = 19。合并过程 1+2=3、3+3=6、4+6=10，WPL=3+6+10=19；对应编码为权 4 编 0、权 3 编 10、权 1 编 110、权 2 编 111。" }
    ]
  },
  "2.1": {
    def: "栈和队列都是操作受限的线性表。栈只允许在同一端（栈顶）插入和删除，遵循后进先出 LIFO，用于括号匹配、表达式求值、递归调用；队列一端入队、另一端出队，遵循先进先出 FIFO，是 BFS 逐层扩展的基础。顺序队列用数组配合队头队尾指针实现，取模形成循环队列以避免假溢出；单调栈保持栈内元素单调，用于求下一个更大元素。",
    ex: [
      { t: "p", v: "示例：依次压栈 1、2、3，出栈顺序为 3、2、1；依次入队 1、2、3，出队顺序为 1、2、3。字符串 \"(()\" 多出一个左括号，判为不合法。" },
      { t: "list", v: ["栈与队列的入、出、取栈顶（队首）操作均为 O(1)", "循环队列常用 (rear+1)%maxSize == front 判满，代价是牺牲一个空位"] }
    ]
  },
  "2.2": {
    def: "std::stack 是标准库的栈容器适配器，基于 deque 实现，需包含 <stack>。主要操作：push(x) 压栈、pop() 弹出栈顶但不返回其值、top() 读栈顶、empty() 判空、size() 求个数。访问前必须保证栈非空，否则行为未定义，遍历常用 while(!st.empty())。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    stack<int> st;\n    st.push(1);\n    st.push(2);\n    st.push(3);\n    cout << \"size=\" << st.size() << \" top=\" << st.top() << endl;\n    st.pop();\n    cout << \"pop后top=\" << st.top() << endl;\n    while (!st.empty()) {\n        cout << st.top() << \" \";\n        st.pop();\n    }\n    return 0;\n}" },
      { t: "p", v: "输出：size=3 top=3 / pop后top=2 / 2 1。" }
    ]
  },
  "2.3": {
    def: "std::queue 是标准库的队列容器适配器，遵循先进先出，需包含 <queue>。主要操作：push(x) 入队、pop() 弹出队首、front() 取队首、back() 取队尾、empty() 判空、size() 求个数。BFS 用它保存待扩展节点，保证按层访问；调用 front()、pop() 前先判空。需两端操作改用 deque。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    queue<int> q;\n    q.push(1);\n    q.push(2);\n    q.push(3);\n    cout << \"front=\" << q.front() << \" back=\" << q.back() << endl;\n    q.pop();\n    cout << \"pop后front=\" << q.front() << endl;\n    while (!q.empty()) {\n        cout << q.front() << \" \";\n        q.pop();\n    }\n    return 0;\n}" },
      { t: "p", v: "输出：front=1 back=3 / pop后front=2 / 2 3（队首 1 出队后，剩余元素按原顺序输出）。" }
    ]
  },
  "2.4": {
    def: "括号匹配是栈的经典应用：遇到左括号就压栈，遇到右括号则检查栈是否为空——为空说明右括号多余，判为不匹配；非空则弹出栈顶的左括号与之配对。扫描结束后栈必须为空，否则说明还有左括号未匹配。算法只扫描一遍，时间 O(n)、空间 O(n)，可推广到圆括号、方括号、花括号多种括号，此时还需判断弹出的左括号与当前右括号类型是否相同。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool check(string s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(') st.push(c);\n        else {\n            if (st.empty()) return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}\n\nint main() {\n    string a[4] = {\"(())\", \"(()\", \")(\", \"()()\"};\n    for (int i = 0; i < 4; i++)\n        cout << a[i] << \" -> \" << (check(a[i]) ? \"合法\" : \"不合法\") << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：(()) -> 合法 / (() -> 不合法 / )( -> 不合法 / ()() -> 合法。第三条因遇到右括号时栈为空而立即判为失败。" }
    ]
  },
  "3.1": {
    def: "搜索算法系统地枚举状态空间寻找答案。DFS 沿一条路径走到底，走不通再回溯到上一个分叉，用递归与访问标记实现，适合连通块、全排列、组合等问题；回溯是其核心思想，即选择—递归—撤销选择。BFS 借助队列逐层向外扩展，在边权相同的图中第一次到达某点的步数就是最短距离。DFS 空间与深度成正比，BFS 空间与搜索宽度成正比。",
    ex: [
      { t: "p", v: "示例：4×4 无障碍网格从 (1,1) 走到 (4,4)，横向 3 步加纵向 3 步，最短为 6 步；DFS 枚举 1、2、3 的全排列共 3!=6 种。" },
      { t: "list", v: ["BFS 能求最短路的前提：每一步代价相同（无权图或边权全为 1）", "回溯必须成对出现：进入前标记访问，递归返回后立即撤销"] }
    ]
  },
  "3.2": {
    def: "DFS 递归框架包含三部分：递归边界（达到目标或越界时记录答案并 return）、候选枚举（循环所有合法分支）、状态维护（进入前标记、递归、返回后撤销标记即回溯）。该框架把枚举拆成同构子问题，但需注意剪枝与去重。常见写法：全排列用 used 数组标记已选数字，组合问题引入起点参数避免重复选，网格问题用方向数组配合边界判断。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nint n = 3, path[10], cnt = 0;\nbool used[10];\n\nvoid dfs(int step) {\n    if (step == n) {              // 递归边界：填满 n 位\n        for (int i = 0; i < n; i++) cout << path[i] << \" \";\n        cout << endl;\n        cnt++;\n        return;\n    }\n    for (int i = 1; i <= n; i++) {\n        if (used[i]) continue;    // 已选过则跳过\n        used[i] = true;           // 标记选择\n        path[step] = i;\n        dfs(step + 1);            // 递归下一层\n        used[i] = false;          // 回溯撤销\n    }\n}\n\nint main() {\n    dfs(0);\n    cout << \"共\" << cnt << \"种\";\n    return 0;\n}" },
      { t: "p", v: "输出：1 2 3 / 1 3 2 / 2 1 3 / 2 3 1 / 3 1 2 / 3 2 1 / 共6种。" }
    ]
  },
  "3.3": {
    def: "BFS 用队列实现：起点入队并标记已访问，然后反复取出队首，把它所有未访问的相邻节点标记后入队，队列为空时结束。因为按距离由近及远的层次扩展，每个节点第一次被访问时的步数就是最短步数，所以 BFS 是边权相同图中求最短路径的标准方法。实现时必须“入队即标记”，否则同一点会重复入队，导致超时或重复计数。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <queue>\nusing namespace std;\n\nint n = 4, m = 4;\nint g[5][5] = {\n    {0,0,0,0,0},\n    {0,0,0,0,0},\n    {0,0,1,0,0},\n    {0,0,0,1,0},\n    {0,0,0,0,0}\n};  // 1 表示障碍\nbool vis[5][5];\nint dx[4] = {-1, 1, 0, 0};\nint dy[4] = {0, 0, -1, 1};\n\nstruct Node { int x, y, step; };\n\nint bfs(int sx, int sy, int ex, int ey) {\n    queue<Node> q;\n    q.push({sx, sy, 0});\n    vis[sx][sy] = true;\n    while (!q.empty()) {\n        Node now = q.front(); q.pop();\n        if (now.x == ex && now.y == ey) return now.step;\n        for (int i = 0; i < 4; i++) {\n            int nx = now.x + dx[i];\n            int ny = now.y + dy[i];\n            if (nx < 1 || nx > n || ny < 1 || ny > m) continue;\n            if (g[nx][ny] == 1 || vis[nx][ny]) continue;\n            vis[nx][ny] = true;\n            q.push({nx, ny, now.step + 1});\n        }\n    }\n    return -1;\n}\n\nint main() {\n    cout << bfs(1, 1, 4, 4);\n    return 0;\n}" },
      { t: "p", v: "输出：6。最短路径之一为 (1,1)→(2,1)→(3,1)→(4,1)→(4,2)→(4,3)→(4,4)，共 6 步。" }
    ]
  },
  "4.1": {
    def: "动态规划把原问题拆成重叠的子问题，保存子问题答案以避免重复计算。三要素为状态定义、状态转移方程、初始条件与边界，前提为最优子结构与无后效性。以爬楼梯为例，每次走 1 级或 2 级，dp[i] 表示到第 i 级的走法数，最后一步只能来自 i−1 或 i−2 级，故 dp[i]=dp[i−1]+dp[i−2]，dp[1]=1、dp[2]=2。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nlong long dp[105];\n\nint main() {\n    int n = 10;\n    dp[1] = 1; dp[2] = 2;\n    for (int i = 3; i <= n; i++)\n        dp[i] = dp[i-1] + dp[i-2];\n    cout << dp[n];\n    return 0;\n}" },
      { t: "p", v: "输出：89。数列为 1、2、3、5、8、13、21、34、55、89，例如 dp[3]=dp[2]+dp[1]=3，dp[4]=dp[3]+dp[2]=5。" }
    ]
  },
  "4.2": {
    def: "最长上升子序列 LIS 指从序列中按原顺序选出尽可能多的元素，使其严格递增，不要求连续。O(n²) 做法：dp[i] 表示以 a[i] 结尾的 LIS 长度，枚举 j<i，若 a[j]<a[i] 则 dp[i]=max(dp[i],dp[j]+1)，初值全为 1，答案为所有 dp[i] 的最大值。数据较大时可用二分加贪心优化到 O(n log n)。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[7] = {0, 1, 7, 3, 5, 9, 4};\nint dp[7];\n\nint main() {\n    int n = 6, ans = 0;\n    for (int i = 1; i <= n; i++) {\n        dp[i] = 1;\n        for (int j = 1; j < i; j++)\n            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);\n        ans = max(ans, dp[i]);\n    }\n    cout << ans;\n    return 0;\n}" },
      { t: "p", v: "输出：4。序列 1 7 3 5 9 4 中可取 1、3、5、9，长度为 4；注意 1、3、4 后再无更大元素，故答案不是 5。" }
    ]
  },
  "4.3": {
    def: "01 背包：n 件物品，第 i 件重 w[i]、价值 v[i]，容量 vol，每件最多选一次。dp[j] 为容量 j 的最大价值，转移为 dp[j]=max(dp[j], dp[j−w[i]]+v[i])。一维实现须让容量从 vol 递减到 w[i] 倒序遍历，保证 dp[j−w[i]] 是上一轮（不含第 i 件）的值；正序则同一物品被重复选取，即完全背包。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint w[5] = {0, 1, 2, 3, 4};\nint v[5] = {0, 2, 4, 4, 5};\nint dp[10];\n\nint main() {\n    int n = 4, vol = 5;\n    for (int i = 1; i <= n; i++)\n        for (int j = vol; j >= w[i]; j--)\n            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);\n    cout << dp[vol];\n    return 0;\n}" },
      { t: "p", v: "输出：8。选重量 2 与重量 3 的两件，总重 5、价值 4+4=8，优于只选重量 4 价值 5 的方案。" }
    ]
  },
  "5.1": {
    def: "面向对象把数据与对数据的操作封装在一起：类是同类型对象的模板，描述成员变量与成员函数，对象是类的实例。访问权限有三种：public 成员类内外均可访问，private 成员只能在类内访问，protected 供派生类使用。构造函数与类名同名、无返回类型，创建对象时自动调用，用于初始化成员；未定义时编译器提供默认构造函数。",
    ex: [
      { t: "p", v: "示例：class Student 中把 id、score 设为 private，在 main 里写 s1.id = 1 会编译报错，只能通过公有成员函数读写数据。" },
      { t: "list", v: ["class 的默认访问权限是 private，struct 的默认权限是 public", "构造函数可以重载：Student() 与 Student(int i, int s) 可以共存"] }
    ]
  },
  "5.2": {
    def: "完整的类定义写法为 class 类名 { private: 成员变量; public: 构造函数; 成员函数; };，末尾分号不可省。对象用“类名 对象名(实参);”创建，构造函数自动执行，之后用“对象名.函数名()”调用公有方法。把数据设为 private、只通过 public 函数读写称为封装，保证数据合法；成员函数内部可直接使用成员变量。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    int id;\n    int score;\npublic:\n    Student(int i, int s) {\n        id = i;\n        score = s;\n    }\n    void add(int x) {\n        score += x;\n    }\n    void show() {\n        cout << id << \" \" << score << endl;\n    }\n};\n\nint main() {\n    Student s1(1, 95), s2(2, 80);\n    s2.add(8);\n    s1.show();\n    s2.show();\n    return 0;\n}" },
      { t: "p", v: "输出：1 95 / 2 88（s2 加 8 分后为 88，说明成员函数可直接修改私有成员）。" }
    ]
  },
  "6.1": {
    def: "本章汇总六级最常默写的五类骨架：二叉树递归遍历（判空后按根左右、左根右、左右根输出）、DFS 回溯框架（边界—枚举—标记—递归—撤销）、BFS 最短路框架（起点入队并标记、取队首、按方向扩展）、一维 01 背包（外层物品、内层容量倒序）、类模板（private 数据配 public 构造函数）。背诵关键是递归顺序与循环方向。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint w[4] = {2, 3, 4};\nint v[4] = {3, 4, 5};\nint dp[10];\n\nint main() {\n    int n = 3, vol = 5;\n    for (int i = 0; i < n; i++)\n        for (int j = vol; j >= w[i]; j--)\n            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);\n    cout << dp[vol];\n    return 0;\n}" },
      { t: "p", v: "输出：7。选重量 2 与重量 3 各一件，总重 5、价值 3+4=7；容量倒序保证每件物品只被选一次。" }
    ]
  },
  "6.2": {
    def: "备考说明给出使用本手册的方法：先按章过一遍定义与模板，确认能独立默写二叉树三种遍历、DFS 回溯框架、BFS 最短路和 01 背包一维写法，再回到错题定位薄弱章节；打印时建议双面装订，并把第 6 章模板单独抽出作为考前速记页。全书代码均按六级考纲书写，不含超纲语法，可直接上机运行验证。",
    ex: [
      { t: "p", v: "示例：六级满分 100 分，单选题 15 题共 30 分、判断题 10 题共 20 分、编程题 2 题共 50 分，编程题占比最高。" },
      { t: "list", v: ["考前 3 天：只背第 6 章模板，并在纸上手写一遍", "考前 1 天：重做错题，重点检查 01 背包是否倒序、BFS 是否入队即标记"] }
    ]
  }
};

window.GESP_KB_PATCH[7] = {
  "0.1": {
    def: "七级在五、六级基础上转向复杂算法。数学部分要求会用 <cmath> 中的三角函数、对数与指数函数；动态规划从一维扩展到二维与区间 DP，并掌握 LIS、LCS 与滚动数组优化；图论要求理解有向图、无向图与顶点度，能用 DFS、BFS 遍历图并实现 Flood-Fill 泛洪；还要理解哈希函数、哈希冲突与哈希表查找。",
    ex: [
      { t: "list", v: [
        "复杂 DP 典型题：数字三角形、石子合并（区间 DP）、最长上升子序列、最长公共子序列、0/1 背包滚动数组",
        "图论典型题：连通块计数、迷宫最短路（BFS）、岛屿数量与区域染色（Flood-Fill）",
        "哈希典型题：统计每个数出现次数、判断某个数是否出现过、两数之和"
      ] }
    ]
  },
  "1.1": {
    def: "C++ 的 <cmath> 提供初等函数，参数与返回值均为 double。sin、cos 的参数是弧度而非角度，角度需乘 π/180 转换；log10、log2 分别求以 10、2 为底的对数，log 是自然对数；exp(x) 返回 e 的 x 次方，与 log 互为反函数，常用于几何计算与指数建模。",
    ex: [
      { t: "code", v: "#include <cstdio>\n#include <cmath>\n\nint main() {\n    const double PI = acos(-1.0);\n    printf(\"%.4f\\n\", sin(30 * PI / 180));      // 角度转弧度\n    printf(\"%.0f %.0f\\n\", log10(1000.0), log2(1024.0));\n    printf(\"%.1f\\n\", exp(0.0));                // e^0 = 1\n    return 0;\n}" },
      { t: "p", v: "输出：0.5000 / 3 10 / 1.0。sin(30°)=0.5；10³=1000 故 log10(1000)=3；2¹⁰=1024 故 log2(1024)=10；e⁰=1。" }
    ]
  },
  "2.1": {
    def: "二维 DP 的状态由两个维度共同描述，如 f[i][j] 表示前 i 个物品容量为 j、或走到网格第 i 行第 j 列的方案数，转移由相邻的较小规模状态推出。区间 DP 以区间 [l,r] 为状态，枚举分割点 k 把区间拆成 [l,k] 与 [k+1,r]，必须先按区间长度从小到大计算，再合并两段结果并加上合并代价。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nconst int N = 305;\nint a[N], s[N], f[N][N];\n\nint main() {\n    int n = 4;\n    int v[4] = {4, 5, 9, 4};\n    for (int i = 1; i <= n; i++) { a[i] = v[i - 1]; s[i] = s[i - 1] + a[i]; }\n    for (int len = 2; len <= n; len++)              // 区间长度从小到大\n        for (int l = 1; l + len - 1 <= n; l++) {\n            int r = l + len - 1;\n            f[l][r] = 1000000000;\n            for (int k = l; k < r; k++)             // 枚举分割点\n                f[l][r] = min(f[l][r], f[l][k] + f[k + 1][r] + s[r] - s[l - 1]);\n        }\n    cout << f[1][n];\n    return 0;\n}" },
      { t: "p", v: "输出：44。最优方案：先合并第 1、2 堆（4+5=9），再合并第 3、4 堆（9+4=13），最后合并这两堆（9+13=22），总代价 9+13+22=44，对应分割点 k=2。" },
      { t: "p", v: "对比：3×3 网格从左上角走到右下角、每次只能向右或向下，方案数用 f[i][j]=f[i-1][j]+f[i][j-1] 计算，结果为 6。" }
    ]
  },
  "2.2": {
    def: "LIS 是序列中按原顺序选出且数值严格递增的最长子序列（可不连续），O(n²) 做法令 f[i] 为以 a[i] 结尾的长度，f[i]=max(f[j])+1（j<i 且 a[j]<a[i]）。LCS 是两个序列的最长公共子序列，字符相等时 f[i][j]=f[i-1][j-1]+1，否则取上方与左方的较大值。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint f[105], dp[105][105];\n\nint main() {\n    int v[5] = {3, 1, 4, 2, 5}, ans = 0;\n    for (int i = 0; i < 5; i++) {\n        f[i] = 1;\n        for (int j = 0; j < i; j++)\n            if (v[j] < v[i]) f[i] = max(f[i], f[j] + 1);\n        ans = max(ans, f[i]);\n    }\n    cout << \"LIS=\" << ans << endl;\n\n    string s = \"ABCBDAB\", t = \"BDCABA\";\n    int n = s.size(), m = t.size();\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= m; j++)\n            if (s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\n            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n    cout << \"LCS=\" << dp[n][m];\n    return 0;\n}" },
      { t: "p", v: "输出：LIS=3（1,2,5 或 3,4,5）/ LCS=4（BCBA 或 BDAB）。" }
    ]
  },
  "2.3": {
    def: "滚动数组是一种空间优化技巧：当 DP 的转移只依赖上一行或前几行状态时，可用 i%2 或 i&1 复用两行数组，或者按合适方向就地覆盖成一维数组，把空间复杂度从 O(nm) 降到 O(m)。要点是覆盖前确认旧状态已经用完：0/1 背包的一维写法必须倒序枚举容量，完全背包才从小到大枚举。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint f[1005];\n\nint main() {\n    int n = 3, C = 5;\n    int w[3] = {2, 3, 4}, v[3] = {3, 4, 5};\n    for (int i = 0; i < n; i++)\n        for (int j = C; j >= w[i]; j--)          // 倒序：用的仍是上一层状态\n            f[j] = max(f[j], f[j - w[i]] + v[i]);\n    cout << f[C];\n    return 0;\n}" },
      { t: "p", v: "输出：7。选第 1、2 件物品，重量 2+3=5 不超过容量 5，价值 3+4=7。若内层改成从小到大枚举，同一件物品会被重复选取，语义就变成完全背包。" }
    ]
  },
  "3.1": {
    def: "图由顶点集合 V 与边集合 E 构成：有向图的边带方向，记作 u→v；无向图的边没有方向，记作 (u,v)。顶点的度是与它相连的边数，无向图中所有顶点的度数之和等于边数的 2 倍；有向图把度分为入度（指向该顶点的边数）与出度（从该顶点出发的边数），两者之和都等于边数。图常用邻接矩阵或邻接表存储。",
    ex: [
      { t: "p", v: "示例：无向图 4 个顶点、4 条边 (1,2)、(1,3)、(2,4)、(3,4)，每个顶点的度都是 2，度数之和 8=2×4。" },
      { t: "list", v: [
        "改成有向边 1→2、1→3、2→4、3→4 后：1 的出度为 2、入度为 0；2 的入度为 1、出度为 1；4 的入度为 2、出度为 0",
        "所有顶点入度之和 = 4 = 边数，出度之和 = 4 = 边数",
        "4 个顶点的无向完全图有 4×3/2=6 条边"
      ] }
    ]
  },
  "3.2": {
    def: "图的遍历从起点出发沿边访问所有可达顶点，每个顶点只访问一次，需要用 visited 数组标记以避免重复访问和死循环。DFS 用递归或栈实现，沿一条路径走到底再回溯，适合求连通块、判环；BFS 用队列按层扩展，第一次到达某点的层数就是最短边数，适合无权图最短路。邻接表存储时两者复杂度均为 O(V+E)。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\nvector<int> g[10];\nint dist[10];\n\nint main() {\n    int e[5][2] = {{1, 2}, {1, 3}, {2, 4}, {3, 4}, {4, 5}};\n    for (int i = 0; i < 5; i++) {\n        int u = e[i][0], v = e[i][1];\n        g[u].push_back(v);\n        g[v].push_back(u);                 // 无向图加双向边\n    }\n    for (int i = 1; i <= 5; i++) dist[i] = -1;\n    queue<int> q;\n    q.push(1); dist[1] = 0;                // 起点入队\n    while (!q.empty()) {\n        int u = q.front(); q.pop();\n        cout << u << \" \";\n        for (int v : g[u])\n            if (dist[v] == -1) { dist[v] = dist[u] + 1; q.push(v); }\n    }\n    cout << endl << \"dist[5]=\" << dist[5];\n    return 0;\n}" },
      { t: "p", v: "输出：1 2 3 4 5 / dist[5]=3。BFS 按层扩展，5 到 1 的最短路径为 5-4-2-1 或 5-4-3-1，含 3 条边。若用 DFS 从 1 出发，访问顺序可能为 1 2 4 3 5。" }
    ]
  },
  "3.3": {
    def: "Flood-Fill 泛洪算法从一个种子点出发，向上下左右（或八个方向）相邻且满足同一条件的位置扩散并标记已访问，直到无法继续，从而得到一整块连通区域。它的本质是带条件限制的 DFS 或 BFS，可用递归或队列实现，时间复杂度与格子数成正比。常用于统计连通块数量、区域染色填充、判断两点是否连通。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nint g[10][10];\nint n = 4, m = 5;\n\nvoid fill(int x, int y) {\n    if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] != 1) return;\n    g[x][y] = 2;                           // 标记为已访问\n    fill(x + 1, y); fill(x - 1, y);\n    fill(x, y + 1); fill(x, y - 1);\n}\n\nint main() {\n    int d[4][5] = {{1, 1, 0, 0, 1},\n                   {1, 0, 0, 1, 1},\n                   {0, 0, 1, 0, 0},\n                   {0, 1, 0, 0, 1}};\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < m; j++) g[i][j] = d[i][j];\n    int cnt = 0;\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < m; j++)\n            if (g[i][j] == 1) { cnt++; fill(i, j); }\n    cout << cnt;\n    return 0;\n}" },
      { t: "p", v: "输出：5。五块连通区域分别为 {(0,0),(0,1),(1,0)}、{(0,4),(1,3),(1,4)}、{(2,2)}、{(3,1)}、{(3,4)}；每次找到一个未访问的 1 就计数并把整块染色为 2。" }
    ]
  },
  "4.1": {
    def: "哈希表通过哈希函数 h(key) 把键映射为数组下标，使插入、查找、删除的平均时间复杂度为 O(1)，是以空间换时间的典型结构。不同键落到同一下标称为哈希冲突，常用拉链法（每个桶挂一条链表）或开放寻址（线性探测）解决。取模时模数常选质数以减少冲突，C++ 中也可直接用 unordered_map。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <vector>\nusing namespace std;\nconst int MOD = 13;\nvector<int> h[MOD];\n\nvoid insert(int x) { h[x % MOD].push_back(x); }\n\nbool find(int x) {\n    for (int y : h[x % MOD])\n        if (y == x) return true;\n    return false;\n}\n\nint main() {\n    int a[6] = {5, 18, 31, 7, 20, 5};\n    for (int i = 0; i < 6; i++) insert(a[i]);\n    cout << (find(18) ? \"找到 18\" : \"未找到 18\") << endl;\n    cout << (find(6) ? \"找到 6\" : \"未找到 6\") << endl;\n    cout << \"18 与 5 同桶: \" << (18 % MOD == 5 % MOD ? \"是\" : \"否\");\n    return 0;\n}" },
      { t: "p", v: "输出：找到 18 / 未找到 6 / 18 与 5 同桶: 是。18%13=5、5%13=5，两数落在同一个桶，只能逐个比较，这就是拉链法处理冲突的方式。" }
    ]
  }
};

window.GESP_KB_PATCH[8] = {
  "2.1b": {
    def: "快速幂（倍增算法）用于高效计算 a^b mod m：把指数 b 按二进制拆分，每一步把底数平方、指数右移一位，遇到当前二进制位为 1 就把结果乘上当前底数并随时取模，从而把 O(b) 次乘法降为 O(log b) 次，且中间结果始终小于 m，避免溢出。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\ntypedef long long ll;\n\nll qpow(ll a, ll b, ll m) {\n    ll res = 1 % m;\n    a %= m;\n    while (b > 0) {\n        if (b & 1) res = res * a % m;\n        a = a * a % m;\n        b >>= 1;\n    }\n    return res;\n}\n\nint main() {\n    cout << qpow(2, 10, 1000) << endl;   // 1024 % 1000\n    cout << qpow(3, 5, 7) << endl;       // 243 % 7\n    return 0;\n}" },
      { t: "p", v: "示例：输出 24 和 5，对应 2^10 mod 1000 = 24、3^5 mod 7 = 5。" }
    ]
  },
  "0.1": {
    def: "本手册面向 GESP C++ 八级考试，覆盖图论进阶（最小生成树、最短路、并查集、连通分量、拓扑排序）、数学与计数（计数原理、排列组合、杨辉三角、快速幂倍增）、算法效率分析与面向对象封装。内容按考级标准写法组织，代码可直接手写或上机验证，无超纲内容。",
    ex: [
      { t: "p", v: "示例：一道“n 个点 m 条边，求最小生成树权值和”的大题对应 Kruskal / Prim 模板；一道“求 a^b mod m”的题对应快速幂模板，都属于八级压轴大题。" },
      { t: "list", v: [
        "阅读程序题常在并查集 find 的路径压缩、Dijkstra 的松弛条件处设坑；",
        "完善程序题多为模板挖空：排序比较函数、取模位置、vis 判重；",
        "OOP 题以“私有数据 + 公有接口”的封装判断为主。"
      ] }
    ]
  },
  "0.2": {
    def: "手册按“图论进阶→数学与计数→算法优化→OOP 封装→必背模板”五章编排：前三章讲原理、适用场景与复杂度，第四章讲类与对象的封装与构造、析构规则，第五章把最常考的四段核心代码压缩成可默写模板，并附打印与背诵建议。",
    ex: [
      { t: "list", v: [
        "第 1 章：并查集、Kruskal、Prim、Dijkstra、Floyd，对应压轴大题；",
        "第 2 章：快速幂、杨辉三角组合数、排列组合公式，对应数学计数题；",
        "第 3 章：复杂度等级与优化手段（倍增、贪心、状压）；",
        "第 4—5 章：OOP 封装类与五大必背模板，考前默写用。"
      ] }
    ]
  },
  "1.1": {
    def: "图论进阶由四块组成：最小生成树在 n 点连通图中选 n-1 条边使权和最小（Kruskal 边贪心、Prim 点贪心）；最短路求两点间权值和最小的路径（Dijkstra 单源无负权、Floyd 多源）；并查集维护集合合并与连通性判断；另有强连通分量、拓扑排序与判环等有向图概念。",
    ex: [
      { t: "list", v: [
        "最小生成树：4 点 5 边图取 1-2(1)、2-3(2)、3-4(3) 三条边，权和 6，再加任何边都会成环；",
        "最短路：Dijkstra 求 1 号点到各点最短路时，被确定过的点距离不再改变；",
        "并查集：依次合并 (1,2)、(2,3) 后 find(1) 与 find(3) 相同，判定同属一个集合；",
        "拓扑排序：对有向图做拓扑排序，若输出点数小于 n，说明图中存在环。"
      ] }
    ]
  },
  "1.2": {
    def: "并查集（DSU）用一棵树表示一个集合，fa[x] 指向父节点，根节点满足 fa[x]=x。find 沿父指针找根并做路径压缩，unite 把两个根相连完成合并，可近似 O(1) 判断两点是否连通、统计连通分量个数，是 Kruskal 判环的底层结构。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 105;\nint fa[N];\n\nvoid init(int n) {\n    for(int i = 1; i <= n; i++) fa[i] = i;\n}\n\nint find(int x) {\n    if(fa[x] == x) return x;\n    return fa[x] = find(fa[x]); // 路径压缩\n}\n\nvoid unite(int x, int y) {\n    x = find(x); y = find(y);\n    if(x != y) fa[y] = x;\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    init(n);\n    for(int i = 1; i <= m; i++) {\n        int u, v;\n        cin >> u >> v;\n        unite(u, v);\n    }\n    if(find(1) == find(n)) cout << \"连通\";\n    else cout << \"不连通\";\n    return 0;\n}" },
      { t: "p", v: "输入：4 3 / 1 2 / 2 3 / 3 4。输出：连通（4 个点连成一条链，1 与 4 同根）。若把最后一条边改成 2 3，则 4 号点孤立，输出“不连通”。" }
    ]
  },
  "1.3": {
    def: "Kruskal 是最小生成树的边贪心算法：把 m 条边按权值升序排序，依次尝试加入，若两端点已在同一集合（并查集 find 结果相同）则跳过，否则合并并累加权值；选满 n-1 条边立即结束。复杂度 O(m log m)，适合稀疏图，必须用并查集判环。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nconst int N = 1005;\nstruct Edge {\n    int u, v, w;\n} e[N];\nint fa[N];\n\nint find(int x) {\n    return fa[x] == x ? x : fa[x] = find(fa[x]);\n}\n\nbool cmp(Edge a, Edge b) {\n    return a.w < b.w;\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    for(int i = 1; i <= n; i++) fa[i] = i;\n    for(int i = 1; i <= m; i++)\n        cin >> e[i].u >> e[i].v >> e[i].w;\n\n    sort(e + 1, e + 1 + m, cmp);\n    int sum = 0, cnt = 0;\n    for(int i = 1; i <= m; i++) {\n        int fu = find(e[i].u), fv = find(e[i].v);\n        if(fu != fv) {\n            fa[fv] = fu;\n            sum += e[i].w;\n            if(++cnt == n - 1) break;\n        }\n    }\n    cout << \"最小生成树权值和: \" << sum;\n    return 0;\n}" },
      { t: "p", v: "输入：4 5 / 1 2 1 / 2 3 2 / 3 4 3 / 1 4 4 / 1 3 5。输出：最小生成树权值和: 6（选 1、2、3 三条边；1-4(4) 与 1-3(5) 会成环被跳过）。" }
    ]
  },
  "1.4": {
    def: "Prim 是最小生成树的点贪心算法：从起点开始维护已加入生成树的点集，每次在所有“一端在树内、一端在树外”的边中取权值最小者加入，并用新点更新树外点到树的距离 dis。邻接矩阵加朴素实现为 O(n^2)，适合稠密图。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\nconst int N = 105;\nconst int INF = 0x3f3f3f3f;\nint g[N][N], dis[N];\nbool vis[N];\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    memset(g, 0x3f, sizeof(g));\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        g[u][v] = g[v][u] = w;\n    }\n    for(int i = 1; i <= n; i++) dis[i] = g[1][i];\n    vis[1] = true;\n    int sum = 0;\n    for(int i = 2; i <= n; i++) {\n        int minw = INF, pos = 0;\n        for(int j = 1; j <= n; j++)\n            if(!vis[j] && dis[j] < minw) { minw = dis[j]; pos = j; }\n        sum += minw;\n        vis[pos] = true;\n        for(int j = 1; j <= n; j++)\n            if(!vis[j]) dis[j] = min(dis[j], g[pos][j]);\n    }\n    cout << sum;\n    return 0;\n}" },
      { t: "p", v: "输入：4 5 / 1 2 1 / 2 3 2 / 3 4 3 / 1 4 4 / 1 3 5。输出：6。过程：先取 1-2(1)，dis 更新为 2 号点给的 2、4 号点给的 4，再取 2-3(2)、3-4(3)，合计 1+2+3=6。" }
    ]
  },
  "1.5": {
    def: "Dijkstra 求单源最短路：维护源点到各点的最短距离 dis，每次取出未确定点中 dis 最小者确定为最终值（无负权边时该贪心性质成立），再用它松弛所有出边。用小根堆（优先队列）取最小值后复杂度为 O(m log n)，但不能处理负权边。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <cstring>\nusing namespace std;\ntypedef pair<int, int> PII;\nconst int N = 105;\nvector<PII> edge[N];\nint dis[N];\nbool vis[N];\n\nvoid dijkstra(int st, int n) {\n    memset(dis, 0x3f, sizeof(dis));\n    memset(vis, 0, sizeof(vis));\n    priority_queue<PII, vector<PII>, greater<PII>> q;\n    dis[st] = 0;\n    q.push({0, st});\n    while(!q.empty()) {\n        auto now = q.top(); q.pop();\n        int d = now.first, u = now.second;\n        if(vis[u]) continue;\n        vis[u] = true;\n        for(auto p : edge[u]) {\n            int v = p.first, w = p.second;\n            if(dis[v] > d + w) {\n                dis[v] = d + w;\n                q.push({dis[v], v});\n            }\n        }\n    }\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        edge[u].push_back({v, w});\n    }\n    dijkstra(1, n);\n    for(int i = 1; i <= n; i++) cout << dis[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输入：5 6 / 1 2 2 / 1 3 5 / 2 3 1 / 2 4 4 / 3 5 1 / 4 5 3（有向边）。输出：0 2 3 6 4（1→3 经 2 号点为 3，1→5 经 3 号点为 4）。" }
    ]
  },
  "1.6": {
    def: "Floyd 求任意两点间最短路，本质是动态规划：d[i][j] 表示只允许用编号 ≤k 的点作中转时的最短路，按 k=1..n 依次枚举中转点，更新 d[i][j]=min(d[i][j], d[i][k]+d[k][j])。时间 O(n^3)、空间 O(n^2)，允许负权边但不允许负环。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\nconst int N = 105;\nint d[N][N];\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    memset(d, 0x3f, sizeof(d));\n    for(int i = 1; i <= n; i++) d[i][i] = 0;\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        d[u][v] = min(d[u][v], w);\n    }\n    for(int k = 1; k <= n; k++)\n        for(int i = 1; i <= n; i++)\n            for(int j = 1; j <= n; j++)\n                d[i][j] = min(d[i][j], d[i][k] + d[k][j]);\n    cout << d[1][n];\n    return 0;\n}" },
      { t: "p", v: "输入：3 3 / 1 2 4 / 2 3 1 / 1 3 9。输出：5。直连 1→3 是 9，经 2 号点中转 4+1=5 更短，故 d[1][3] 被更新为 5。" }
    ]
  },
  "2.1": {
    def: "数学与计数围绕“数方案、算幂次”：加法原理按分类相加，乘法原理按分步相乘，得排列 A(n,k)=n!/(n-k)! 与组合 C(n,k)=n!/[k!(n-k)!]；杨辉三角用 C(n,k)=C(n-1,k-1)+C(n-1,k) 递推；快速幂按二进制拆分指数、边平方边累乘，把 a^b mod m 降到 O(log b)。",
    ex: [
      { t: "p", v: "示例：从甲地到乙地有 3 条路、乙地到丙地有 2 条路，经乙地去丙地共 3×2=6 种走法（乘法原理）；从 5 人中选 3 人比赛共 C(5,3)=10 种（组合）。" },
      { t: "code", v: "#include <iostream>\nusing namespace std;\ntypedef long long ll;\n\nll qpow(ll a, ll b, ll mod) {\n    ll res = 1;\n    while(b) {\n        if(b & 1) res = res * a % mod;\n        a = a * a % mod;\n        b >>= 1;\n    }\n    return res;\n}\n\nint main() {\n    cout << qpow(2, 10, 1000);\n    return 0;\n}" },
      { t: "p", v: "输出：24。2^10=1024，1024 mod 1000=24；循环只执行 log2(10)≈4 轮，而不是 10 次乘法。" }
    ]
  },
  "2.2": {
    def: "杨辉三角第 n 行第 k 个数就是组合数 C(n,k)（行列均从 0 开始计），满足边界 C(n,0)=C(n,n)=1，内部由上一行相邻两数相加：C(n,k)=C(n-1,k-1)+C(n-1,k)。用二维数组按 n 递增递推，可 O(n^2) 预处理全部组合数，避免阶乘溢出。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\ntypedef long long ll;\nconst int N = 50;\nll c[N][N];\n\nint main() {\n    for(int n = 0; n < N; n++) {\n        c[n][0] = 1;\n        c[n][n] = 1;\n        for(int k = 1; k < n; k++)\n            c[n][k] = c[n - 1][k - 1] + c[n - 1][k];\n    }\n    cout << c[4][2] << \" \" << c[5][2] << \" \" << c[10][5];\n    return 0;\n}" },
      { t: "p", v: "输出：6 10 252。第 4 行是 1 4 6 4 1，中间数 6 即 C(4,2)；C(5,2)=6+4=10；C(10,5)=252。" }
    ]
  },
  "2.3": {
    def: "排列与组合的区别在于是否考虑顺序：从 n 个不同元素中取 k 个排成一列，有 A(n,k)=n×(n-1)×…×(n-k+1)=n!/(n-k)! 种；若只取不排（无序），每种排列被重复计算 k! 次，得 C(n,k)=n!/[k!(n-k)!]。计数时分类用加法原理、分步用乘法原理。",
    ex: [
      { t: "p", v: "示例：从 5 名同学中选 3 人排成一排拍照，A(5,3)=5×4×3=60 种；若只选 3 人参赛（不计顺序），C(5,3)=60/3!=60/6=10 种。" },
      { t: "list", v: [
        "分步（乘法原理）：3 件上衣配 2 条裤子，共 3×2=6 套；",
        "分类（加法原理）：去北京有 2 趟高铁、1 班飞机，共 2+1=3 种方式；",
        "性质：C(n,k)=C(n,n-k)，A(n,k)=C(n,k)×k!。"
      ] }
    ]
  },
  "3.1": {
    def: "算法优化是用更少的时间与空间完成同一任务：复杂度用大 O 描述规模 n 增大时运算次数与存储的增长趋势，常见等级 O(1)<O(log n)<O(n)<O(n log n)<O(n^2)<O(2^n)。常用手段有倍增（二进制拆分）、贪心（局部最优推全局）与状态压缩（二进制位表示集合）。",
    ex: [
      { t: "list", v: [
        "n=10^5 时，O(n^2) 约 10^10 次运算远超 1 秒上限（约 10^8 次），而 O(n log n) 约 1.7×10^6 次可轻松通过；",
        "倍增：算 2^13 暴力乘 13 次，快速幂只需 4 轮（指数 13 的二进制 1101）；",
        "状态压缩：5 个物品的选取方案用 00000~11111 表示，共 2^5=32 种；",
        "贪心：用 10、5、1 元硬币凑 17 元，每次取最大面额得 10+5+1+1，共 4 枚。"
      ] }
    ]
  },
  "3.2": {
    def: "复杂度判定的核心结论：循环嵌套层数决定量级，单层 O(n)、双层 O(n^2)；二分与倍增类算法固定 O(log n)；排序、堆优化最短路、Kruskal 多为 O(n log n)。按每秒约 10^8 次运算估算可判断是否超时；空间优化常用滚动数组、临时变量替代数组和及时释放内存。",
    ex: [
      { t: "p", v: "示例：n=1000 时单层循环执行 1000 次，双层执行 10^6 次；n=10^5 时二分查找最多 17 次（log2 10^5≈16.6），归并排序约 n log n≈1.7×10^6 次比较。" },
      { t: "list", v: [
        "空间降维：二维 DP 只依赖上一行时可改为两条一维数组，O(n^2)→O(n)；",
        "循环外提：把与循环变量无关的重复计算（如 strlen）提到循环外，常数级优化；",
        "读入优化：数据量 10^6 时用 scanf / 关闭同步的 cin，避免输入成为瓶颈。"
      ] }
    ]
  },
  "4.1": {
    def: "封装是把数据（成员变量）与操作数据的函数（成员函数）放进同一个类，用 private 隐藏内部细节、只通过 public 接口访问，保证数据合法且调用者无需了解实现。对象创建时自动调用构造函数完成初始化，销毁时自动调用析构函数做资源清理；成员函数可直接访问本类所有成员。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    int age;              // 私有：外部不可直接访问\npublic:\n    Student(int a) {      // 构造函数：与类同名、无返回值\n        age = a;\n        cout << \"构造: age=\" << age << endl;\n    }\n    ~Student() {          // 析构函数：对象销毁时自动调用\n        cout << \"析构: age=\" << age << endl;\n    }\n    void setAge(int a) { if(a > 0) age = a; }  // 公有接口\n    int getAge() { return age; }\n};\n\nint main() {\n    Student s(15);\n    s.setAge(18);\n    cout << \"年龄: \" << s.getAge() << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：构造: age=15 / 年龄: 18 / 析构: age=18。可见构造在定义对象时自动执行，析构在 main 结束、对象离开作用域时最后执行。" }
    ]
  },
  "4.2": {
    def: "8 级封装模板的标准写法：成员变量全部放在 private，构造函数负责初始化，对外只保留 public 成员函数作为读写接口，并在 set 接口里做合法性检查、拒绝非法数据。这样对象内部状态不会被外部随意修改，符合“数据隐藏 + 公有接口”的考级要求。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\npublic:\n    Person(string n, int a) {\n        name = n;\n        age = a;\n    }\n    void showInfo() {\n        cout << \"姓名: \" << name << \" 年龄: \" << age << endl;\n    }\n    void setAge(int a) {\n        if(a > 0) age = a;   // 非法数据被拒绝\n    }\n};\n\nint main() {\n    Person p(\"张三\", 15);\n    p.showInfo();\n    p.setAge(16);\n    p.showInfo();\n    p.setAge(-3);\n    p.showInfo();\n    return 0;\n}" },
      { t: "p", v: "输出：姓名: 张三 年龄: 15 / 姓名: 张三 年龄: 16 / 姓名: 张三 年龄: 16。第三次 setAge(-3) 被条件拦截，年龄保持 16，体现封装对数据的保护。" }
    ]
  },
  "4.3": {
    def: "析构函数在对象生命周期结束时自动调用，形式为 ~类名，无参数、无返回值、不可重载；用于释放构造函数或成员函数中 new 出来的动态内存（delete / delete[]）、关闭文件等收尾工作。局部对象在离开作用域时析构，对象数组按定义的逆序逐个析构。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nclass Buffer {\nprivate:\n    int *arr;\n    int n;\npublic:\n    Buffer(int k) {\n        n = k;\n        arr = new int[k];\n        cout << \"申请 \" << n << \" 个元素\" << endl;\n    }\n    ~Buffer() {\n        delete[] arr;      // 释放动态数组\n        cout << \"释放内存\" << endl;\n    }\n    void set(int i, int v) { if(i >= 0 && i < n) arr[i] = v; }\n    int get(int i) { return arr[i]; }\n};\n\nint main() {\n    Buffer b(3);\n    b.set(0, 7);\n    cout << b.get(0) << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：申请 3 个元素 / 7 / 释放内存。析构函数在 main 结束、对象 b 销毁时自动执行，无需手动调用。" }
    ]
  },
  "5.1": {
    def: "堆优化 Dijkstra 模板的固定骨架：dis 全部初始化为 0x3f3f3f3f，源点入小根堆；循环弹出距离最小的点，若已 vis 则跳过，否则标记并遍历邻接表每条出边做松弛，松弛成功的新距离压堆。适用于边权非负的单源最短路，复杂度 O(m log n)，忘写 vis 判重会退化为超时。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <cstring>\nusing namespace std;\ntypedef pair<int, int> PII;\nconst int N = 105;\nvector<PII> edge[N];\nint dis[N];\nbool vis[N];\n\nvoid dijkstra(int st) {\n    memset(dis, 0x3f, sizeof(dis));\n    memset(vis, 0, sizeof(vis));\n    priority_queue<PII, vector<PII>, greater<PII>> q;\n    dis[st] = 0; q.push({0, st});\n    while(!q.empty()) {\n        auto now = q.top(); q.pop();\n        int d = now.first, u = now.second;\n        if(vis[u]) continue;\n        vis[u] = true;\n        for(auto p : edge[u]) {\n            int v = p.first, w = p.second;\n            if(dis[v] > d + w) {\n                dis[v] = d + w;\n                q.push({dis[v], v});\n            }\n        }\n    }\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        edge[u].push_back({v, w});\n    }\n    dijkstra(1);\n    for(int i = 1; i <= n; i++) cout << dis[i] << \" \";\n    return 0;\n}" },
      { t: "p", v: "输入：4 4 / 1 2 1 / 2 4 2 / 1 3 5 / 3 4 1。输出：0 1 5 3（1→4 经 2 号为 3，经 3 号为 6，取 3）。" }
    ]
  },
  "5.2": {
    def: "Kruskal 模板的固定骨架：先把边按权值用 cmp 升序 sort，再用并查集 find 判断每条边两端是否已连通，不连通就合并、累计权值并 cnt++，凑满 n-1 条边立即 break。最易出错的两处是忘记初始化 fa[i]=i，以及漏写 cnt==n-1 的提前结束条件。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nconst int N = 1005;\nstruct Edge { int u, v, w; } e[N];\nint fa[N];\n\nint find(int x) { return fa[x] == x ? x : fa[x] = find(fa[x]); }\nbool cmp(Edge a, Edge b) { return a.w < b.w; }\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    for(int i = 1; i <= n; i++) fa[i] = i;\n    for(int i = 1; i <= m; i++) cin >> e[i].u >> e[i].v >> e[i].w;\n    sort(e + 1, e + 1 + m, cmp);\n    int sum = 0, cnt = 0;\n    for(int i = 1; i <= m; i++) {\n        int fu = find(e[i].u), fv = find(e[i].v);\n        if(fu != fv) {\n            fa[fv] = fu;\n            sum += e[i].w;\n            if(++cnt == n - 1) break;\n        }\n    }\n    cout << sum;\n    return 0;\n}" },
      { t: "p", v: "输入：3 3 / 1 2 2 / 2 3 3 / 1 3 9。输出：5（取权值 2 和 3 两条边，第三条会成环被跳过）。" }
    ]
  },
  "5.3": {
    def: "Prim 模板的固定骨架：memset 把 dis 置为 0x3f，用起点所在行初始化 dis，vis[1]=1；循环 n-1 次，每次在未访问点中找 dis 最小者累加进答案并标记，再用新点更新其余点 dis=min(dis, g[pos][j])。邻接矩阵朴素实现 O(n^2)，适合稠密图。",
    ex: [
      { t: "code", v: "#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\nconst int N = 105, INF = 0x3f3f3f3f;\nint g[N][N], dis[N];\nbool vis[N];\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    memset(g, 0x3f, sizeof(g));\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        g[u][v] = g[v][u] = w;\n    }\n    memset(dis, 0x3f, sizeof(dis));\n    for(int i = 1; i <= n; i++) dis[i] = g[1][i];\n    vis[1] = 1;\n    int sum = 0;\n    for(int i = 2; i <= n; i++) {\n        int minw = INF, pos = 0;\n        for(int j = 1; j <= n; j++)\n            if(!vis[j] && dis[j] < minw) { minw = dis[j]; pos = j; }\n        sum += minw;\n        vis[pos] = 1;\n        for(int j = 1; j <= n; j++)\n            if(!vis[j]) dis[j] = min(dis[j], g[pos][j]);\n    }\n    cout << sum;\n    return 0;\n}" },
      { t: "p", v: "输入：3 3 / 1 2 2 / 2 3 3 / 1 3 9。输出：5。与 5.2 的 Kruskal 结果一致，说明最小生成树的权值和唯一。" }
    ]
  },
  "5.4": {
    def: "快速幂模板骨架：res=1，当 b 不为 0 时，若 b 的最低位为 1 则 res=res*a%mod，接着 a=a*a%mod 完成底数平方，b>>=1 右移一位。每轮指数折半，共 log b 轮；全程用 long long 并在每一步取模，防止乘法溢出。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\ntypedef long long ll;\n\nll qpow(ll a, ll b, ll mod) {\n    ll res = 1;\n    while(b) {\n        if(b & 1) res = res * a % mod;\n        a = a * a % mod;\n        b >>= 1;\n    }\n    return res;\n}\n\nint main() {\n    cout << qpow(3, 13, 1000) << endl;\n    cout << qpow(2, 1000000000, 1000000007);\n    return 0;\n}" },
      { t: "p", v: "输出：323 与 140625001。3^13=1594323，mod 1000=323；第二个 2^10^9 mod 1e9+7 若用暴力循环需 10 亿次，快速幂 30 轮即得结果。" }
    ]
  },
  "5.5": {
    def: "OOP 封装类模板骨架：class 类名 { private: 成员变量; public: 构造函数; 公有成员函数接口; }; 私有成员只能在类内访问，外部通过公有函数间接读写；构造函数与类名同名、无返回值，定义对象时自动执行。默写时类定义结尾的分号不可遗漏。",
    ex: [
      { t: "code", v: "#include <iostream>\nusing namespace std;\n\nclass Rect {\nprivate:\n    int w, h;\npublic:\n    Rect(int a, int b) {\n        w = a; h = b;\n    }\n    int area() { return w * h; }\n    void setW(int a) { if(a > 0) w = a; }\n};\n\nint main() {\n    Rect r(3, 4);\n    cout << r.area() << endl;\n    r.setW(5);\n    cout << r.area() << endl;\n    return 0;\n}" },
      { t: "p", v: "输出：12 / 15。外部只能调用 area() 与 setW()，无法直接写 r.w=0 破坏数据，这就是封装的接口边界。" }
    ]
  },
  "5.6": {
    def: "备考说明给出八级的复习与背诵路线：五大压轴模板（Dijkstra、Kruskal + 并查集、Prim、快速幂、OOP 封装）必须能默写并手算样例，其余章节只需理解适用场景与复杂度；考场上先判断题型对应哪类模板，再套用骨架并注意初始化与边界。",
    ex: [
      { t: "list", v: [
        "第 1 天：背并查集 find / unite 与 Kruskal 主循环，手算 4 点 5 边样例得 6；",
        "第 2 天：背堆优化 Dijkstra 与 Floyd 三重循环，确认 vis 判重、k 在最外层；",
        "第 3 天：背快速幂四行循环，验算 3^13 mod 1000 = 323；",
        "第 4 天：默写 OOP 封装类，核对 private / public、构造与析构的调用时机。"
      ] },
      { t: "p", v: "考场判断口诀：n-1 条边、权和最小 → Kruskal；单源、无负权 → Dijkstra；任意两点、小图 → Floyd；a^b mod m → 快速幂；class + 私有数据 → OOP 模板。" }
    ]
  }
};

