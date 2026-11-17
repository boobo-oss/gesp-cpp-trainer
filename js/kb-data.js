/* GESP C++ 1—8 级复习手册 · 检索内容
   1—6、8 级内容来自对应的《GESP C++ N级全套复习手册》PDF；
   7 级无手册文件，依据《GESP 考纲考点表（C++）》整理 */
window.GESP_KB_LEVELS = window.GESP_KB_LEVELS || {};

window.GESP_KB_LEVELS = window.GESP_KB_LEVELS || {};

window.GESP_KB_LEVELS[1] = {
    title: "GESP C++ 1级全套复习手册（可直接打印）",
    chapters: [
      {
        no: "0",
        title: "手册说明",
        sections: [
          {
            id: "0.1",
            title: "核心定位与适用范围",
            kw: "目录 考纲 零基础 适用规则 考试占比",
            blocks: [
              { t: "p", v: "核心定位：C++ 零基础入门、程序标准框架、基础数据类型、输入输出、运算符、三大程序控制结构。" },
              { t: "p", v: "考试占比：所有题型均围绕一级基础语法展开，是 2—8 级全部考点的地基，选择判断全覆盖计算机基础与语法规则，编程题为基础顺序、分支、循环程序。" },
              { t: "p", v: "适用规则：严格贴合 GESP 1 级考纲，零超纲内容，纯入门零基础适配，全部为考级标准可默写满分模板。" },
              { t: "p", v: "目录：" },
              {
                t: "list", ol: true, v: [
                  "计算机基础（硬件组成、编程环境、程序结构、注释）",
                  "数据类型与变量常量（命名规则、赋值自增）",
                  "标准输入输出与格式化 IO（cin/cout/scanf/printf）",
                  "运算符全集（算术/关系/逻辑/优先级）",
                  "三大控制结构（顺序、分支、循环、循环控制）",
                  "1 级考前必背满分代码模板（通用框架）"
                ]
              }
            ]
          }
        ]
      },
      {
        no: "1",
        title: "计算机基础（选择判断送分考点）",
        sections: [
          {
            id: "1.1",
            title: "计算机五大组成",
            kw: "CPU 中央处理器 内存 主存 硬盘 外存 输入设备 输出设备 易失",
            blocks: [
              {
                t: "list", ol: true, v: [
                  "CPU（中央处理器）：核心运算与控制单元，负责执行程序指令、运算数据。",
                  "内存（主存）：临时存储程序与运行数据，断电数据丢失，速度快。",
                  "硬盘（外存）：长期存储文件、代码、数据，断电数据保留，速度慢于内存。",
                  "输入设备：向计算机传入数据，键盘、鼠标、扫描仪等。",
                  "输出设备：展示计算机处理结果，显示器、打印机等。"
                ]
              }
            ]
          },
          {
            id: "1.2",
            title: "编程基础环境",
            kw: "编译 运行 报错 头文件 分号 括号 语法错误 可执行文件",
            blocks: [
              {
                t: "list", ol: true, v: [
                  "编译：将 C++ 源代码翻译成计算机可识别的机器语言，生成可执行文件。",
                  "运行：执行编译后的程序，输出运行结果。",
                  "简单报错识别：语法错误、缺少头文件、括号不匹配、分号缺失为一级高频错误。"
                ]
              }
            ]
          },
          {
            id: "1.3",
            title: "标准 C++ 程序结构（必考默写）",
            kw: "框架 iostream main 命名空间 include return 入口",
            blocks: [
              { t: "p", v: "一级所有程序必须严格遵循该框架，缺项直接扣分。" },
              {
                t: "code", v:
                  "#include <iostream>  // 头文件\n" +
                  "using namespace std;   // 命名空间\n" +
                  "\n" +
                  "int main() {           // 主函数，程序入口\n" +
                  "\n" +
                  "    return 0;          // 程序正常结束\n" +
                  "}"
              }
            ]
          },
          {
            id: "1.4",
            title: "注释用法",
            kw: "单行注释 多行注释 注释不参与编译",
            blocks: [
              {
                t: "list", v: [
                  "单行注释：// 注释内容，仅当前行生效。",
                  "多行注释：/* 注释内容 */，可包裹多行文本。"
                ]
              },
              { t: "note", v: "核心考点：注释不参与程序编译运行，仅用于代码说明。" }
            ]
          }
        ]
      },
      {
        no: "2",
        title: "数据类型与变量常量（基础必背）",
        sections: [
          {
            id: "2.1",
            title: "四大基础数据类型",
            kw: "int float double char bool 整型 浮点 字符 布尔 精度",
            blocks: [
              {
                t: "table",
                head: ["类型", "含义", "取值特点", "考级用途"],
                rows: [
                  ["int", "整型", "整数，无小数", "计数、数学整数运算"],
                  ["float", "单精度浮点", "小数，精度较低", "简单小数计算"],
                  ["double", "双精度浮点", "小数，精度更高", "主流小数存储计算"],
                  ["char", "字符型", "单个字符", "字符输入、ASCII 运算"],
                  ["bool", "布尔型", "true 真、false 假", "条件判断存储"]
                ]
              }
            ]
          },
          {
            id: "2.2",
            title: "变量命名强制规则（扣分重灾区）",
            kw: "字母 数字 下划线 大小写敏感 关键字 不能以数字开头",
            blocks: [
              {
                t: "list", v: [
                  "合法规则：只能由字母、数字、下划线组成；大小写敏感（a 和 A 是两个变量）。",
                  "禁止规则：不能以数字开头；不能使用 C++ 关键字（int、if、for、return 等）。"
                ]
              }
            ]
          },
          {
            id: "2.3",
            title: "常量定义",
            kw: "字面常量 const 只读 不可修改",
            blocks: [
              {
                t: "code", v:
                  "// 字面常量：直接写出的数值\n" +
                  "int a = 10;\n" +
                  "\n" +
                  "// const 定义只读常量（不可修改）\n" +
                  "const int N = 100;"
              }
            ]
          },
          {
            id: "2.4",
            title: "赋值与自增自减",
            kw: "赋值 自增 自减 前置 后置 a++ ++a",
            blocks: [
              {
                t: "code", v:
                  "a = 10;   // 赋值运算\n" +
                  "a++;      // 后置自增，先取值后 +1\n" +
                  "++a;      // 前置自增，先 +1 后取值\n" +
                  "a--;      // 后置自减\n" +
                  "--a;      // 前置自减"
              }
            ]
          }
        ]
      },
      {
        no: "3",
        title: "输入输出（一级必考核心）",
        sections: [
          {
            id: "3.1",
            title: "C++ 标准流 IO（cin/cout）",
            kw: "cin cout endl 头文件 iostream 输入 输出 拼接",
            blocks: [
              {
                t: "code", v:
                  "#include <iostream>\n" +
                  "using namespace std;\n" +
                  "\n" +
                  "int main() {\n" +
                  "    int a, b;\n" +
                  "    double c;\n" +
                  "    char d;\n" +
                  "\n" +
                  "    // 自动适配类型输入\n" +
                  "    cin >> a >> b;\n" +
                  "    cin >> c >> d;\n" +
                  "\n" +
                  "    // 拼接输出\n" +
                  "    cout << a << \" \" << b << endl;\n" +
                  "    cout << c << \" \" << d << endl;\n" +
                  "\n" +
                  "    return 0;\n" +
                  "}"
              }
            ]
          },
          {
            id: "3.2",
            title: "C 语言格式化 IO（scanf/printf）",
            kw: "scanf printf cstdio 格式符 %d %f %c 取址符 & 坑点",
            blocks: [
              { t: "p", v: "格式符必背：%d 整型、%f 浮点、%c 字符。" },
              {
                t: "code", v:
                  "#include <cstdio>\n" +
                  "\n" +
                  "int main() {\n" +
                  "    int a;\n" +
                  "    double b;\n" +
                  "    char c;\n" +
                  "\n" +
                  "    scanf(\"%d%f%c\", &a, &b, &c);\n" +
                  "    printf(\"整数: %d 浮点: %f 字符: %c\", a, b, c);\n" +
                  "\n" +
                  "    return 0;\n" +
                  "}"
              },
              { t: "note", v: "必考坑点：scanf 读取变量必须加取址符 &，printf 不需要。" }
            ]
          }
        ]
      },
      {
        no: "4",
        title: "运算符全集（选择填空高频）",
        sections: [
          {
            id: "4.1",
            title: "算术运算符",
            kw: "加减乘除 取模 整除 向下取整 小数不能取模",
            blocks: [
              { t: "p", v: "+、-、*、/、%" },
              { t: "note", v: "核心规则：整数 / 整数 = 整数（向下取整）；取模 % 仅支持整数，小数不能取模。" }
            ]
          },
          {
            id: "4.2",
            title: "关系运算符（结果为真假）",
            kw: "大于 小于 等于 不等于 == != 赋值",
            blocks: [
              { t: "p", v: ">、<、>=、<=、==（等于）、!=（不等于）" },
              { t: "note", v: "易错点：判断相等必须用 ==，单个 = 是赋值运算。" }
            ]
          },
          {
            id: "4.3",
            title: "逻辑运算符",
            kw: "逻辑与 逻辑或 逻辑非 == || ! 短路",
            blocks: [
              {
                t: "list", v: [
                  "&& 逻辑与：两边全真才真，一假则假。",
                  "|| 逻辑或：两边一真则真，全假才假。",
                  "! 逻辑非：真变假，假变真。"
                ]
              }
            ]
          },
          {
            id: "4.4",
            title: "运算优先级（必背）",
            kw: "优先级 括号 算术 关系 逻辑 赋值",
            blocks: [
              { t: "note", v: "括号最高 > 算术运算 > 关系运算 > 逻辑运算 > 赋值运算" }
            ]
          }
        ]
      },
      {
        no: "5",
        title: "程序控制结构（编程大题核心）",
        sections: [
          {
            id: "5.1",
            title: "顺序结构",
            kw: "顺序 逐行 自上而下 输入 计算 输出",
            blocks: [
              { t: "p", v: "自上而下逐行执行，无跳转、无分支，是所有程序的基础结构，用于简单输入、计算、输出。" }
            ]
          },
          {
            id: "5.2",
            title: "分支结构",
            kw: "if else 单分支 双分支 条件",
            blocks: [
              {
                t: "code", v:
                  "// 单分支\n" +
                  "if( 条件 ){\n" +
                  "    // 条件成立执行\n" +
                  "}\n" +
                  "\n" +
                  "// 双分支\n" +
                  "if( 条件 ){\n" +
                  "    // 成立执行\n" +
                  "}else{\n" +
                  "    // 不成立执行\n" +
                  "}"
              }
            ]
          },
          {
            id: "5.3",
            title: "循环结构（一级三大循环）",
            kw: "循环 三大循环 for while do-while",
            blocks: [
              { t: "p", v: "一级需要掌握三大循环：for、while、do-while。" }
            ]
          },
          {
            id: "5.3.1",
            title: "for 循环（固定次数循环首选）",
            kw: "for 循环 初始化 条件 迭代 固定次数",
            blocks: [
              {
                t: "code", v:
                  "for( 初始化 ; 条件 ; 迭代 ){\n" +
                  "    // 循环体\n" +
                  "}"
              }
            ]
          },
          {
            id: "5.3.2",
            title: "while 循环（条件循环）",
            kw: "while 条件循环 手动迭代",
            blocks: [
              {
                t: "code", v:
                  "while( 条件 ){\n" +
                  "    // 循环体\n" +
                  "    // 手动迭代\n" +
                  "}"
              }
            ]
          },
          {
            id: "5.3.3",
            title: "do-while 循环（先执行后判断）",
            kw: "do while 至少执行一次 先执行后判断",
            blocks: [
              {
                t: "code", v:
                  "do{\n" +
                  "    // 循环体\n" +
                  "}while( 条件 );"
              },
              { t: "note", v: "核心区别：do-while 至少执行一次循环体。" }
            ]
          },
          {
            id: "5.4",
            title: "循环控制语句",
            kw: "break continue 跳出循环 跳过本次",
            blocks: [
              {
                t: "list", v: [
                  "break：直接跳出当前循环，结束循环执行。",
                  "continue：跳过本次循环剩余代码，直接进入下一次迭代。"
                ]
              }
            ]
          }
        ]
      },
      {
        no: "6",
        title: "GESP 1 级考前必背满分万能模板",
        sections: [
          {
            id: "6.1",
            title: "通用满分代码模板",
            kw: "模板 万能 满分 框架 编程题",
            blocks: [
              { t: "p", v: "一级所有编程题均可基于该模板改写，零报错、满分标准框架。" },
              {
                t: "code", v:
                  "#include <iostream>\n" +
                  "using namespace std;\n" +
                  "\n" +
                  "int main() {\n" +
                  "    // 1. 定义变量\n" +
                  "    int a, b;\n" +
                  "    int ans = 0;\n" +
                  "\n" +
                  "    // 2. 输入数据\n" +
                  "    cin >> a >> b;\n" +
                  "\n" +
                  "    // 3. 核心逻辑：计算 / 判断 / 循环\n" +
                  "    ans = a + b;\n" +
                  "\n" +
                  "    // 4. 输出结果\n" +
                  "    cout << ans << endl;\n" +
                  "\n" +
                  "    return 0;\n" +
                  "}"
              }
            ]
          },
          {
            id: "附",
            title: "打印备考说明",
            kw: "备考 背诵 重点 扣分",
            blocks: [
              {
                t: "list", ol: true, v: [
                  "本文档为 GESP 1 级零基础专属完整版手册，全覆盖一级全部基础考点，无任何超纲内容。",
                  "所有代码为考级标准满分写法，适配上机编程和手写考试，规避所有一级常见扣分错误。",
                  "考前重点背诵：标准程序框架、变量命名规则、四种输入输出写法、三大循环结构。"
                ]
              },
              { t: "p", v: "（注：部分内容由豆包 AI 生成）" }
            ]
          }
        ]
      }
    ]
  };

/* GESP C++ 2 级复习手册 · 检索内容
   内容来源：《GESP C++ 2级全套复习手册.pdf》 */

window.GESP_KB_LEVELS[2] = {
  title: "GESP C++2级全套复习手册（可直接打印）",
  chapters: [
    {
      no: "0",
      title: "手册说明",
      sections: [
        {
          id: "0.1",
          title: "核心定位与适用范围",
          kw: "核心定位 考试占比 适用规则 考纲 超纲 默写 二级",
          blocks: [
            { t: "p", v: "核心定位：分支循环嵌套逻辑、ASCII 码、计算机基础常识、数学函数、图形输出、基础数位算法。" },
            { t: "p", v: "考试占比：循环嵌套图形题为二级压轴大题，ASCII、计算机存储网络为选择填空必考，数学函数、类型转换为基础高频考点。" },
            { t: "p", v: "适用规则：严格贴合 GESP 2 级考纲，无超纲内容，全部为考级标准可默写模板，适配手写考试与上机编程。" }
          ]
        },
        {
          id: "0.2",
          title: "目录",
          kw: "目录 计算机拓展常识 语法进阶 数学函数 随机数 基础算法 满分模板",
          blocks: [
            {
              t: "list", ol: true, v: [
                "计算机拓展常识（存储、网络、ASCII 码）",
                "C++ 语法进阶（类型转换、多层分支、循环嵌套）",
                "cmath 数学函数与随机数（必考库函数）",
                "基础算法（数位拆分、最值累加、闰年奇偶判断）",
                "2 级考前必背满分模板与核心口诀"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "1",
      title: "计算机拓展常识（选择填空高频）",
      sections: [
        {
          id: "1.1",
          title: "存储设备分类",
          kw: "RAM ROM Cache 内存 只读存储器 高速缓存 易失 非易失 断电 固件",
          blocks: [
            {
              t: "list", ol: true, v: [
                "RAM 内存（随机存储器）：易失性存储，断电数据清空，读写速度快，用于程序运行临时存储。",
                "ROM 只读存储器：非易失性存储，断电数据保留，用于固化系统、固件程序。",
                "Cache 高速缓存：CPU 高速缓冲，速度最快，用于缓解 CPU 与内存速度差，提升读写效率。"
              ]
            },
            { t: "note", v: "核心考点：断电丢失数据 → RAM；断电保留 → ROM / 硬盘 / 闪存。" }
          ]
        },
        {
          id: "1.2",
          title: "网络分类基础",
          kw: "LAN MAN WAN 局域网 城域网 广域网 互联网 IP地址 寻址",
          blocks: [
            {
              t: "list", ol: true, v: [
                "LAN 局域网：小范围网络，校园网、家庭网络、机房网络，传输速度快、延迟低。",
                "MAN 城域网：城市范围网络，覆盖多个局域网。",
                "WAN 广域网：大范围跨区域网络，互联网为最大广域网，覆盖距离最远。"
              ]
            },
            { t: "p", v: "IP 地址：网络设备唯一标识，用于网络通信定位，是网络数据传输的核心寻址依据。" }
          ]
        },
        {
          id: "1.3",
          title: "ASCII 码必背对照表（二级必考）",
          kw: "ASCII 32 48 65 97 空格 大小写 字符运算 差值32",
          blocks: [
            { t: "p", v: "所有数值必须精准背诵，选择题、字符运算题高频考察。" },
            {
              t: "table",
              head: ["字符", "ASCII 数值", "说明"],
              rows: [
                ["空格", "32", ""],
                ["数字字符 '0'", "48", "(后续数字依次+1：'1'=49、'2'=50...)"],
                ["大写字母 'A'", "65", "(后续大写依次+1)"],
                ["小写字母 'a'", "97", "(后续小写依次+1)"]
              ]
            },
            { t: "note", v: "字符转换口诀：大小写相差 32；小写 - 32 = 大写，大写 + 32 = 小写。" }
          ]
        }
      ]
    },
    {
      no: "2",
      title: "C++ 语法进阶（二级核心难点）",
      sections: [
        {
          id: "2.1",
          title: "数据类型转换",
          kw: "类型转换 隐式 强制 int double 精度 截断 整数除法",
          blocks: [
            {
              t: "list", ol: false, v: [
                "隐式类型转换（自动转换）",
                "强制类型转换（手动必考）"
              ]
            }
          ]
        },
        {
          id: "2.1.1",
          title: "隐式类型转换（自动转换）",
          kw: "隐式 自动转换 低精度 高精度 int double 丢失数据",
          blocks: [
            { t: "p", v: "规则：低精度 → 高精度自动转换，不丢失数据。" },
            { t: "p", v: "转换优先级：int → double。" },
            { t: "p", v: "例：整数运算赋值给浮点数，自动提升为小数运算。" }
          ]
        },
        {
          id: "2.1.2",
          title: "强制类型转换（手动必考）",
          kw: "强制转换 (int) (double) 截断 小数 整数除法 2.5 易错",
          blocks: [
            {
              t: "code", v:
                "double a = 3.99;\n" +
                "int x = (int)a;    // 强制转整型：直接截断小数，结果为 3\n" +
                "double y = (double)5 / 2;  // 整数转浮点，结果 2.5"
            },
            { t: "note", v: "易错考点：5/2 默认整数除法 = 2；(double)5/2 = 2.5，必须强转后才会产生小数。" }
          ]
        },
        {
          id: "2.2",
          title: "多层分支结构",
          kw: "多分支 if elseif else switch case break 穿透 嵌套分支",
          blocks: [
            {
              t: "list", ol: false, v: [
                "if-else if-else 多分支",
                "switch-case 分支匹配"
              ]
            }
          ]
        },
        {
          id: "2.2.1",
          title: "if-else if-else 多分支",
          kw: "if else if else 条件 多分支 语法结构",
          blocks: [
            {
              t: "code", v:
                "if(条件 1){\n" +
                "    // 满足条件 1 执行\n" +
                "}else if(条件 2){\n" +
                "    // 满足条件 2 执行\n" +
                "}else{\n" +
                "    // 以上都不满足执行\n" +
                "}"
            }
          ]
        },
        {
          id: "2.2.2",
          title: "switch-case 分支匹配",
          kw: "switch case default break 穿透 字符匹配 固定整数",
          blocks: [
            { t: "p", v: "适配固定整数、字符匹配场景，必须带 break 防止穿透。" },
            {
              t: "code", v:
                "int x;\n" +
                "cin >> x;\n" +
                "switch(x){\n" +
                "    case 1: cout << \"一\"; break;\n" +
                "    case 2: cout << \"二\"; break;\n" +
                "    default: cout << \"其他\"; break;\n" +
                "}"
            },
            { t: "note", v: "必考坑点：缺少 break 会发生 case 穿透，后续分支会无条件执行。" }
          ]
        },
        {
          id: "2.3",
          title: "循环嵌套（二级压轴核心）",
          kw: "循环嵌套 for 外层 内层 行 列 图形输出 压轴",
          blocks: [
            {
              t: "list", ol: false, v: [
                "核心口诀（必背）",
                "经典图形输出模板（正三⻆）",
                "空格 + 字符组合图形模板"
              ]
            }
          ]
        },
        {
          id: "2.3.1",
          title: "核心口诀（必背）",
          kw: "口诀 外层循环 行数 内层循环 列数 必背",
          blocks: [
            { t: "note", v: "外层循环控制行数，内层循环控制列数。" }
          ]
        },
        {
          id: "2.3.2",
          title: "经典图形输出模板（正三⻆）",
          kw: "图形输出 正三角 星号 模板 循环嵌套 main",
          blocks: [
            {
              t: "code", v:
                "#include <iostream>\n" +
                "using namespace std;\n" +
                "\n" +
                "int main(){\n" +
                "    int n;\n" +
                "    cin >> n;\n" +
                "    for(int i=1;i<=n;i++){        // 外层：行\n" +
                "        for(int j=1;j<=i;j++){    // 内层：列\n" +
                "            cout << \"*\";\n" +
                "        }\n" +
                "        cout << endl;\n" +
                "    }\n" +
                "    return 0;\n" +
                "}"
            }
          ]
        },
        {
          id: "2.3.3",
          title: "空格 + 字符组合图形模板",
          kw: "空格 字符 倒三角 居中 图形 组合 模板 解题思路",
          blocks: [
            {
              t: "code", v:
                "// 倒三⻆ / 居中图形通用结构\n" +
                "for(int i=1;i<=n;i++){\n" +
                "    // 打印前置空格\n" +
                "    for(int s=1;s<=n-i;s++) cout << \" \";\n" +
                "    // 打印字符\n" +
                "    for(int k=1;k<=2*i-1;k++) cout << \"*\";\n" +
                "    cout << endl;\n" +
                "}"
            },
            { t: "note", v: "解题思路：图形题固定拆分「空格区 + 字符区」，分别用两层内层循环控制。" }
          ]
        }
      ]
    },
    {
      no: "3",
      title: "cmath 数学函数与随机数（必考）",
      sections: [
        {
          id: "3.1",
          title: "必备头文件",
          kw: "头文件 include cmath iomanip 数学函数 浮点精度 输出",
          blocks: [
            {
              t: "list", ol: false, v: [
                "数学函数：#include<cmath>",
                "浮点精度输出：#include<iomanip>"
              ]
            }
          ]
        },
        {
          id: "3.2",
          title: "四大核心数学函数",
          kw: "abs sqrt pow 绝对值 平方根 次方 浮点 返回值",
          blocks: [
            {
              t: "code", v:
                "abs(x);     // 整数绝对值\n" +
                "sqrt(x);    // 平方根（返回浮点）\n" +
                "pow(x,y);   // x 的 y 次方（返回浮点）"
            }
          ]
        },
        {
          id: "3.3",
          title: "随机数用法",
          kw: "随机数 rand srand time 种子 cstdlib ctime 取模 0~99",
          blocks: [
            {
              t: "code", v:
                "#include <iostream>\n" +
                "#include <cstdlib>\n" +
                "#include <ctime>\n" +
                "using namespace std;\n" +
                "\n" +
                "int main(){\n" +
                "    srand((unsigned)time(0)); // 设置随机种子\n" +
                "    int r = rand() % 100;     // 生成 0~99 随机整数\n" +
                "    cout << r;\n" +
                "    return 0;\n" +
                "}"
            }
          ]
        },
        {
          id: "3.4",
          title: "浮点数精准输出（必背）",
          kw: "fixed setprecision iomanip 保留小数 输出格式 两位小数",
          blocks: [
            {
              t: "code", v:
                "#include <iomanip>\n" +
                "// 保留 2 位小数\n" +
                "cout << fixed << setprecision(2) << ans;"
            }
          ]
        }
      ]
    },
    {
      no: "4",
      title: "基础算法（二级编程必考）",
      sections: [
        {
          id: "4.1",
          title: "数位拆分模板（个位 / 十位 / 百位）",
          kw: "数位拆分 个位 十位 百位 取模 整除 n%10 n/10",
          blocks: [
            {
              t: "code", v:
                "int n;\n" +
                "cin >> n;\n" +
                "int ge = n % 10;        // 个位\n" +
                "int shi = n / 10 % 10;  // 十位\n" +
                "int bai = n / 100;      // 百位"
            }
          ]
        },
        {
          id: "4.2",
          title: "累加、计数、最值基础模板",
          kw: "累加 计数 最大值 最小值 sum cnt max min 1e9 模板",
          blocks: [
            {
              t: "code", v:
                "int sum = 0, cnt = 0;\n" +
                "int maxx = 0, minx = 1e9;\n" +
                "for(int i=1;i<=n;i++){\n" +
                "    sum += i;       // 累加\n" +
                "    cnt++;          // 计数\n" +
                "    maxx = max(maxx,i);\n" +
                "    minx = min(minx,i);\n" +
                "}"
            }
          ]
        },
        {
          id: "4.3",
          title: "奇偶判断",
          kw: "奇偶 判断 偶数 奇数 n%2 取模",
          blocks: [
            {
              t: "code", v:
                "if(n % 2 == 0) cout << \"偶数\";\n" +
                "else cout << \"奇数\";"
            }
          ]
        },
        {
          id: "4.4",
          title: "闰年判断（二级经典题）",
          kw: "闰年 平年 判断 400 100 4 整除 经典题",
          blocks: [
            { t: "p", v: "闰年规则：能被 4 整除且不能被 100 整除，或能被 400 整除。" },
            {
              t: "code", v:
                "int year;\n" +
                "cin >> year;\n" +
                "if( (year%4==0 && year%100!=0) || (year%400==0) ){\n" +
                "    cout << \"闰年\";\n" +
                "}else{\n" +
                "    cout << \"平年\";\n" +
                "}"
            }
          ]
        }
      ]
    },
    {
      no: "5",
      title: "GESP2 级考前必背满分模板",
      sections: [
        {
          id: "5.1",
          title: "模板1：循环嵌套通用口诀",
          kw: "模板1 口诀 外层控行 内层控列 空格 字符 逐层打印",
          blocks: [
            { t: "note", v: "外层控行，内层控列；先空格后字符，逐层打印。" }
          ]
        },
        {
          id: "5.2",
          title: "模板2：图形输出标准结构",
          kw: "模板2 图形输出 标准结构 行循环 空格循环 字符循环 换行",
          blocks: [
            {
              t: "code", v:
                "for( 行循环 ){\n" +
                "    空格循环 ;\n" +
                "    字符循环 ;\n" +
                "    换行 ;\n" +
                "}"
            }
          ]
        },
        {
          id: "5.3",
          title: "模板3：强制类型转换",
          kw: "模板3 强制类型转换 (int) (double) 转整数 转浮点",
          blocks: [
            {
              t: "code", v:
                "(int)x;    // 转整数\n" +
                "(double)y;  // 转浮点"
            }
          ]
        },
        {
          id: "5.4",
          title: "模板4：浮点保留小数输出",
          kw: "模板4 浮点 保留小数 iomanip fixed setprecision res",
          blocks: [
            {
              t: "code", v:
                "#include <iomanip>\n" +
                "cout<<fixed<<setprecision(2)<<res;"
            }
          ]
        },
        {
          id: "5.5",
          title: "模板5：闰年判断核心条件",
          kw: "模板5 闰年 核心条件 400 100 4",
          blocks: [
            { t: "code", v: "(year%4==0&&year%100!=0)||year%400==0" }
          ]
        },
        {
          id: "5.6",
          title: "模板6：数位拆分通用公式",
          kw: "模板6 数位拆分 通用公式 个位 十位 百位 n%10 n/100",
          blocks: [
            {
              t: "code", v:
                "个位 :n%10\n" +
                "十位 :n/10%10\n" +
                "百位 :n/100"
            }
          ]
        },
        {
          id: "5.7",
          title: "打印备考说明",
          kw: "备考说明 必考大题 考前重点背诵 ASCII 口诀 输出格式 说明",
          blocks: [
            {
              t: "list", ol: true, v: [
                "本文档为 GESP2 级专属完整版手册，全覆盖计算机基础、嵌套语法、数学函数、基础算法全部考点。",
                "所有代码适配二级考级难度，无超纲，图形题、闰年题、数位拆分题为必考大题。",
                "考前重点背诵：ASCII 码、循环嵌套口诀、浮点输出格式、闰年判断条件。"
              ]
            },
            { t: "note", v: "（注：部分内容由豆包 AI 生成）" }
          ]
        }
      ]
    }
  ]
};

window.GESP_KB_LEVELS[3] = {
  title: "GESP C++3级全套复习手册（可直接打印）",
  chapters: [
    {
      no: "0",
      title: "手册说明",
      sections: [
        {
          id: "0.1",
          title: "核心定位与适用规则",
          kw: "核心定位 考试占比 适用规则 考纲 进制 编码 位运算 数组 字符串 枚举 模拟",
          blocks: [
            { t: "p", v: "核心定位:进制与编码、位运算基础、一维数组、字符数组字符串、枚举模拟算法入门" },
            { t: "p", v: "考试占比:数组与字符串为大题核心,进制转换、位运算为选择填空必考,枚举模拟是编程题基础" },
            { t: "p", v: "适用规则:严格贴合GESP3级考纲,无超纲内容,规避变长数组等扣分点,全部为考级可默写标准" }
          ]
        },
        {
          id: "0.2",
          title: "目录",
          kw: "目录 章节 大纲",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "数据编码与位运算(原反补码、进制转换、位运算)",
                "一维数组核心(定义、遍历、统计、前缀和、数字拆分)",
                "字符数组与字符串(库函数、操作、大小写转换)",
                "基础算法(枚举穷举、模拟算法经典题型)",
                "3级考前必背满分模板(核心考点默写)"
              ]
            }
          ]
        },
        {
          id: "0.3",
          title: "打印备考说明",
          kw: "打印 备考 说明 背诵 满分写法 豆包AI",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "本文档为GESP3级专属完整版手册,全覆盖进制编码、位运算、数组、字符串、枚举模拟全部考点。",
                "严格规避变长数组等考级扣分点,所有代码为3级标准满分写法。",
                "考前重点背诵:位运算奇偶判断、字符串结束符、规范数组定义、四大字符串函数。"
              ]
            },
            { t: "p", v: "(注:部分内容由豆包AI生成)" }
          ]
        }
      ]
    },
    {
      no: "1",
      title: "数据编码与位运算（3级新增必考）",
      sections: [
        {
          id: "1.1",
          title: "核心知识点汇总",
          kw: "机器编码 原码 反码 补码 进制转换 位运算 奇偶 左移 右移 清零",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "机器编码:原码、反码、补码概念与转换规则,计算机存储默认补码。",
                "进制转换:二进制、八进制、十进制、十六进制双向转换,考级高频计算题。",
                "基础位运算:与、或、非、异或、左移、右移,整数二进制位操作。",
                "位运算应用:奇偶判断、快速乘除2、数值清零等极简用法。"
              ]
            }
          ]
        },
        {
          id: "1.2",
          title: "原码、反码、补码规则",
          kw: "正数 负数 原码 反码 补码 符号位 取反 加一 三码统一",
          blocks: [
            { t: "p", v: "正数规则(三码统一)" },
            { t: "p", v: "正数:原码=反码=补码" },
            { t: "p", v: "负数规则" },
            {
              t: "list",
              ol: true,
              v: [
                "原码:最高位符号位为1,其余为数值位",
                "反码:符号位不变,数值位按位取反",
                "补码:反码+1(计算机实际存储格式)"
              ]
            },
            { t: "note", v: "考级核心结论:计算机中所有整数均以补码形式存储和运算。" }
          ]
        },
        {
          id: "1.3",
          title: "进制转换核心方法",
          kw: "10进制 R进制 除基取余 逆序 按权展开 二进制 八进制 十六进制 三位一组 四位一组",
          blocks: [
            { t: "p", v: "10进制转R进制" },
            { t: "p", v: "除基取余法:反复除以目标进制R,逆序取余数" },
            { t: "p", v: "R进制转10进制" },
            { t: "p", v: "按权展开:每一位数字×R的对应位次幂,累加求和" },
            { t: "p", v: "二/八/十六进制互转" },
            {
              t: "list",
              ol: false,
              v: [
                "二进制转八进制:三位一组,对应一位八进制",
                "二进制转十六进制:四位一组,对应一位十六进制"
              ]
            }
          ]
        },
        {
          id: "1.4",
          title: "六大位运算详解（3级必考）",
          kw: "与 或 异或 非 左移 右移 & | ^ ~ << >> 置位 交换 快速乘除",
          blocks: [
            {
              t: "table",
              head: ["运算符", "名称", "运算规则", "考级常用场景"],
              rows: [
                ["&", "按位与", "同为1则1,否则0", "x&1判断奇偶、清零指定位"],
                ["|", "按位或", "有1则1,全0为0", "置位指定二进制位为1"],
                ["^", "按位异或", "相同为0,不同为1", "数值翻转、交换两数"],
                ["~", "按位非", "逐位取反", "位翻转运算"],
                ["<<", "左移", "整体左移,右侧补0", "快速×2、×2^n"],
                [">>", "右移", "整体右移,符号位补位", "快速÷2、÷2^n"]
              ]
            }
          ]
        },
        {
          id: "1.5",
          title: "位运算经典代码模板",
          kw: "代码模板 奇偶判断 x&1 左移 右移 快速乘除2 main",
          blocks: [
            {
              t: "code",
              v: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    // 1. 奇偶判断( 3 级必背)
    if(x & 1) cout << " 奇数 ";
    else cout << " 偶数 ";

    // 2. 快速乘除 2
    cout << (x << 1) << endl; // *2
    cout << (x >> 1) << endl; // /2
    return 0;
}`
            }
          ]
        }
      ]
    },
    {
      no: "2",
      title: "一维数组（3级核心大题考点）",
      sections: [
        {
          id: "2.1",
          title: "核心知识点汇总",
          kw: "规范定义 常量 变长数组 遍历 赋值 最值 统计 逆序 拆分 前缀和",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "规范定义:必须使用常量定义数组,禁止变长数组inta[n](考级扣分重灾区)。",
                "基础操作:遍历、赋值、最值查找、元素统计、数组逆序。",
                "进阶题型:数字逐位拆分、数据计数统计、一维前缀和。"
              ]
            }
          ]
        },
        {
          id: "2.2",
          title: "3级标准数组定义（满分规范）",
          kw: "数组定义 常量 const int N 满分规范 错误写法 变长数组 扣分",
          blocks: [
            {
              t: "code",
              v: `// 正确写法:常量定义,考级满分规范
const int N = 105;
int a[N];

// 错误写法(禁止!扣分)
// int n; cin>>n; int a[n];`
            }
          ]
        },
        {
          id: "2.3",
          title: "数组基础操作模板",
          kw: "数组 输入 赋值 遍历 输出 最大值 maxx 模板",
          blocks: [
            {
              t: "code",
              v: `#include <iostream>
using namespace std;
const int N = 105;
int a[N];

int main() {
    int n;
    cin >> n;
    // 输入赋值
    for(int i = 0; i < n; i++)
        cin >> a[i];

    // 遍历输出
    for(int i = 0; i < n; i++)
        cout << a[i] << " ";

    // 找最大值
    int maxx = a[0];
    for(int i = 1; i < n; i++)
        if(a[i] > maxx) maxx = a[i];

    return 0;
}`
            }
          ]
        },
        {
          id: "2.4",
          title: "数组逆序模板",
          kw: "逆序 双指针 swap 首尾交换",
          blocks: [
            {
              t: "code",
              v: `// 双指针逆序
for(int i = 0; i < n / 2; i++) {
    swap(a[i], a[n - 1 - i]);
}`
            }
          ]
        },
        {
          id: "2.5",
          title: "一维前缀和模板",
          kw: "前缀和 区间和 预处理 sum 高频 考点",
          blocks: [
            { t: "p", v: "作用:快速求解区间和,3级高频编程考点" },
            {
              t: "code",
              v: `int sum[N];
// 预处理前缀和
sum[0] = a[0];
for(int i = 1; i < n; i++)
    sum[i] = sum[i-1] + a[i];

// 查询 [l,r] 区间和(下标从 0 开始)
// res = sum[r] - (l ? sum[l-1] : 0);`
            }
          ]
        },
        {
          id: "2.6",
          title: "数字拆分统计",
          kw: "数字拆分 逐位 位数 奇偶 数字和 num%10 除以10",
          blocks: [
            { t: "p", v: "将整数逐位拆分存入数组,统计位数、奇偶、数字和" },
            {
              t: "code",
              v: `int num, cnt = 0;
int res[N];
cin >> num;
while(num > 0) {
    res[cnt++] = num % 10;
    num /= 10;
}`
            }
          ]
        }
      ]
    },
    {
      no: "3",
      title: "字符数组与字符串（char[]）",
      sections: [
        {
          id: "3.1",
          title: "核心知识点汇总",
          kw: "字符串 结束标志 \\0 有效长度 strlen strcmp strcpy strcat 大小写 分割 查找",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "存储本质:C++字符串以'\\0'作为结束标志,不占有效长度。",
                "四大核心库函数:strlen、strcmp、strcpy、strcat。",
                "基础操作:输入输出、长度获取、字符串比较、复制、拼接。",
                "考级题型:大小写转换、字符统计、字符串简单分割与查找。"
              ]
            }
          ]
        },
        {
          id: "3.2",
          title: "字符串基础定义与结束符",
          kw: "char 字符数组 cstring 头文件 结束符 \\0 strlen 必背考点",
          blocks: [
            {
              t: "code",
              v: `#include <iostream>
#include <cstring> // 字符串函数必须头文件
using namespace std;

char s[105]; // 字符数组存储字符串`
            },
            { t: "note", v: "必背考点:'\\0'是字符串结束符,strlen()统计长度不包含结束符。" }
          ]
        },
        {
          id: "3.3",
          title: "四大字符串库函数模板",
          kw: "strlen strcmp strcpy strcat 长度 比较 复制 拼接 返回值",
          blocks: [
            {
              t: "code",
              v: `char a[105], b[105];
cin >> a >> b;

strlen(a);   // 获取字符串有效长度
strcmp(a,b); // 字符串比较:相等返回 0 , a 大返回正数, a 小返回负数
strcpy(a,b); // 将 b 字符串复制到 a
strcat(a,b); // 将 b 拼接到 a 末尾`
            }
          ]
        },
        {
          id: "3.4",
          title: "字符串大小写转换模板",
          kw: "小写转大写 大写转小写 32 'a' 'z' 'A' 'Z'",
          blocks: [
            {
              t: "code",
              v: `// 小写转大写
for(int i = 0; i < strlen(s); i++)
    if(s[i] >= 'a' && s[i] <= 'z')
        s[i] -= 32;

// 大写转小写
for(int i = 0; i < strlen(s); i++)
    if(s[i] >= 'A' && s[i] <= 'Z')
        s[i] += 32;`
            }
          ]
        }
      ]
    },
    {
      no: "4",
      title: "基础算法（枚举+模拟）",
      sections: [
        {
          id: "4.1",
          title: "枚举法（穷举）核心思想",
          kw: "枚举 穷举 遍历 所有可能 筛选 答案 算法入门",
          blocks: [
            { t: "p", v: "遍历所有可能情况,筛选符合条件的答案,3级算法核心入门,适配所有简单数学题型。" }
          ]
        },
        {
          id: "4.2",
          title: "经典例题:水仙花数",
          kw: "水仙花数 三位数 立方和 拆分 百位 十位 个位 枚举 例题",
          blocks: [
            { t: "p", v: "水仙花数:三位数,各位立方和等于自身" },
            {
              t: "code",
              v: `#include <iostream>
using namespace std;

int main() {
    for(int i = 100; i <= 999; i++) {
        int a = i / 100;
        int b = i / 10 % 10;
        int c = i % 10;
        if(a*a*a + b*b*b + c*c*c == i)
            cout << i << endl;
    }
    return 0;
}`
            }
          ]
        },
        {
          id: "4.3",
          title: "经典例题:鸡兔同笼",
          kw: "鸡兔同笼 头 脚 兔子 鸡 枚举 方程 例题 break",
          blocks: [
            {
              t: "code",
              v: `int head, foot;
cin >> head >> foot;
// 枚举兔子数量
for(int rabbit = 0; rabbit <= head; rabbit++) {
    int chicken = head - rabbit;
    if(rabbit * 4 + chicken * 2 == foot) {
        cout << chicken << " " << rabbit;
        break;
    }
}`
            }
          ]
        },
        {
          id: "4.4",
          title: "模拟算法核心思想",
          kw: "模拟 按步骤 逐行实现 不优化 日期计算 字符串处理 流程模拟 编程大题",
          blocks: [
            { t: "p", v: "完全按照题目描述步骤逐行代码实现,不优化、不推导公式,适合日期计算、字符串处理、流程模拟类题目,是3级编程大题高频题型。" }
          ]
        }
      ]
    },
    {
      no: "5",
      title: "GESP3级考前必背满分模板",
      sections: [
        {
          id: "5.1",
          title: "考前必背满分模板（模板1~模板5）",
          kw: "满分模板 必背 数组定义 奇偶判断 字符串 strlen 遍历 最值 枚举框架",
          blocks: [
            { t: "p", v: "模板1:规范数组定义(绝对不扣分)" },
            {
              t: "code",
              v: `const int N = 105;
int a[N];`
            },
            { t: "p", v: "模板2:位运算判断奇偶(3级必考)" },
            {
              t: "code",
              v: `if(x & 1) 奇数
else       偶数`
            },
            { t: "p", v: "模板3:字符串核心用法" },
            {
              t: "code",
              v: `#include <cstring>
char s[105];
int len = strlen(s); // 不含 '\\0'`
            },
            { t: "p", v: "模板4:数组遍历与最值查找" },
            {
              t: "code",
              v: `for(int i=0;i<n;i++) cin>>a[i];
int maxx=a[0];
for(int i=1;i<n;i++) maxx=max(maxx,a[i]);`
            },
            { t: "p", v: "模板5:枚举通用框架" },
            {
              t: "code",
              v: `for( 枚举所有可能 ){
    if( 满足题目条件 ){
        输出答案 ;
    }
}`
            }
          ]
        }
      ]
    }
  ]
};

window.GESP_KB_LEVELS[4] = {
  title: "GESP C++4级复习手册(可直接打印)",
  chapters: [
    {
      no: "0",
      title: "手册说明",
      sections: [
        {
          id: "0.1",
          title: "适用范围与规则",
          kw: "适用范围 GESP四级 允许 禁止 函数 引用 指针 结构体 二维数组 排序 递推 文件读写",
          blocks: [
            { t: "p", v: "适用范围:GESP四级" },
            {
              t: "list",
              ol: false,
              v: [
                "允许:函数、引用、指针基础、结构体、固定大小二维数组、冒泡/选择排序、递推、ifstream/ofstream文件读写",
                "禁止:Lambda、仿函数、变长数组、多级指针、复杂STL"
              ]
            }
          ]
        },
        {
          id: "0.2",
          title: "目录",
          kw: "目录 章节 函数 指针 结构体 二维数组 排序 递推 文件读写 模板",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "函数(值传递/引用传递/指针传递、作用域)",
                "指针基础",
                "结构体与结构体数组",
                "二维数组(固定尺寸,禁止变长)",
                "排序算法:冒泡排序、选择排序",
                "递推算法(斐波那契、台阶问题)",
                "文件读写ifstream/ofstream",
                "考前必背3套模板(默写版)"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "1",
      title: "函数(四级核心考点)",
      sections: [
        {
          id: "1.1",
          title: "知识点要点",
          kw: "函数 声明 定义 调用 返回值 形参 实参 值传递 引用传递 指针传递 局部变量 全局变量 作用域",
          blocks: [
            { t: "p", v: "知识点要点" },
            {
              t: "list",
              ol: true,
              v: [
                "组成:函数声明、函数定义、函数调用、返回值、形参实参",
                "值传递:拷⻉副本,函数内部修改不会影响外部变量",
                "引用传递&(高频必考):形参是外部变量别名,共用内存,内部修改会改变原值",
                "指针传递:传入变量地址,通过*解引用修改原值",
                "局部变量:大括号{}内定义,出作用域失效;全局变量:所有函数外部定义,全程可见;同名时局部优先。"
              ]
            }
          ]
        },
        {
          id: "1.2",
          title: "样例1:值传递",
          kw: "值传递 拷⻉ 副本 独立内存 样例",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nvoid change(int x) {\n    x = 100;\n}\nint main() {\n    int a = 10;\n    change(a);\n    cout << a << endl; // 输出 10 ,原值不变\n    return 0;\n}"
            },
            { t: "note", v: "分析:x只是a的一份拷⻉,二者独立内存,修改副本不影响外部。" }
          ]
        },
        {
          id: "1.3",
          title: "样例2:引用传递【重点】",
          kw: "引用传递 别名 共用内存 重点 &x",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nvoid change(int &x) {\n    x = 100;\n}\nint main() {\n    int a = 10;\n    change(a);\n    cout << a << endl; // 输出 100 ,原值被修改\n    return 0;\n}"
            },
            { t: "note", v: "分析: int &x ,x是a的别名,共用一块内存。想要函数修改外部变量优先用引用。" }
          ]
        },
        {
          id: "1.4",
          title: "样例3:指针传递",
          kw: "指针传递 地址 解引用 样例",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nvoid change(int *p) {\n    *p = 100;\n}\nint main() {\n    int a = 10;\n    change(&a);\n    cout << a << endl;// 输出 100\n    return 0;\n}"
            },
            { t: "note", v: "分析:&a取出地址传给指针p;*p代表访问地址里面的数据。" }
          ]
        },
        {
          id: "1.5",
          title: "样例4:局部变量、全局变量、作用域",
          kw: "局部变量 全局变量 作用域 同名 屏蔽 样例",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint num = 100; // 全局变量\nvoid func() {\n    int num = 20;// 局部变量,屏蔽全局\n    cout << num << endl;//20\n}\nint main() {\n    func();\n    cout << num << endl;//100\n    return 0;\n}"
            },
            { t: "note", v: "分析:局部与全局重名,优先使用局部变量。" }
          ]
        }
      ]
    },
    {
      no: "2",
      title: "指针基础",
      sections: [
        {
          id: "2.1",
          title: "知识点要点",
          kw: "取地址 解引用 NULL 空指针 数组名 指针运算 p++ 一级指针 二级指针",
          blocks: [
            { t: "p", v: "知识点要点" },
            {
              t: "list",
              ol: true,
              v: [
                "& 变量:取变量地址",
                "* 指针:解引用,读取/修改地址存放的数据",
                "NULL:空指针,不指向有效内存,禁止对空指针解引用",
                "数组名等价于数组首元素地址;指针运算p++自动跨过一整个元素,不是+1字节",
                "四级只考一级指针,不考二级指针"
              ]
            }
          ]
        },
        {
          id: "2.2",
          title: "样例1:地址、解引用、空指针",
          kw: "地址 解引用 空指针 NULL 样例",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 50;\n    int *p = &a;\n    cout << *p << endl;//50\n    *p = 99;\n    cout << a << endl;//99\n\n    int *q = NULL;\n    //*q = 10; 错误!空指针不能解引用\n    return 0;\n}"
            }
          ]
        },
        {
          id: "2.3",
          title: "样例2:指针与一维数组、指针运算",
          kw: "指针 一维数组 指针运算 p++ += 首元素地址 样例",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {10,20,30,40,50};\n    int *p = arr;//arr 等于 &arr[0]\n    cout << *p << endl;//10\n    p++;\n    cout << *p << endl;//20\n    p +=2;\n    cout << *p << endl;//40\n    return 0;\n}"
            }
          ]
        }
      ]
    },
    {
      no: "3",
      title: "结构体struct",
      sections: [
        {
          id: "3.1",
          title: "知识点要点",
          kw: "struct 结构体 成员 结构体数组 定义 访问 遍历 查找 冒泡排序",
          blocks: [
            { t: "p", v: "知识点要点" },
            {
              t: "list",
              ol: true,
              v: [
                "作用:把多个不同类型数据打包在一起",
                "语法:struct名称{成员列表};",
                "结构体数组:Nodea[105];固定大小,禁止变长数组",
                "访问成员: 变量 . 成员 , 数组 [ 下标 ]. 成员",
                "常考:结构体数组遍历、查找、冒泡排序"
              ]
            }
          ]
        },
        {
          id: "3.2",
          title: "样例:结构体+结构体数组遍历",
          kw: "结构体 结构体数组 遍历 样例 成员访问",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nstruct Node{\n    int x;\n    int y;\n};\nint main() {\n    Node a[105];\n    a[0].x = 1; a[0].y = 2;\n    a[1].x = 3; a[1].y = 4;\n    for(int i=0;i<=1;i++){\n        cout << a[i].x << \" \" << a[i].y << endl;\n    }\n    return 0;\n}"
            }
          ]
        },
        {
          id: "3.3",
          title: "拓展:结构体冒泡排序(压轴题型)",
          kw: "结构体 冒泡排序 swap 压轴 拓展 排序依据",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nstruct Student{\n    int id;\n    int score;\n};\nint main() {\n    Student s[105]={{1,85},{2,72},{3,90}};\n    int n=3;\n    for(int i=1;i<=n-1;i++){\n        for(int j=0;j<=n-1-i;j++){\n            if(s[j].score > s[j+1].score){\n                swap(s[j],s[j+1]);\n            }\n        }\n    }\n    for(int i=0;i<n;i++){\n        cout<<s[i].id<<\" \"<<s[i].score<<endl;\n    }\n    return 0;\n}"
            },
            { t: "note", v: "分析:swap可以直接交换整个结构体,修改比较字段即可更换排序依据。" }
          ]
        }
      ]
    },
    {
      no: "4",
      title: "二维数组(固定尺寸)",
      sections: [
        {
          id: "4.1",
          title: "知识点要点",
          kw: "二维数组 固定大小 g[i][j] 行 列 变长数组 矩阵 判错",
          blocks: [
            { t: "p", v: "知识点要点" },
            {
              t: "list",
              ol: true,
              v: [
                "定义格式: int g[105][105];",
                "g[i][j]:第i行,第j列;外层循环遍历行i,内层循环遍历列j",
                "❌ 严禁写法:intn;cin>>n;intarr[n][n];变长数组GESP判错",
                "考点:矩阵赋值、遍历、查找元素"
              ]
            }
          ]
        },
        {
          id: "4.2",
          title: "样例:矩阵遍历、赋值、查找",
          kw: "矩阵 遍历 赋值 查找 二维数组 样例",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint main() {\n    int g[4][3];//4 行 3 列,固定大小\n    // 赋值\n    for(int i=0;i<4;i++){\n        for(int j=0;j<3;j++){\n            g[i][j] = i+j;\n        }\n    }\n    // 输出矩阵\n    for(int i=0;i<4;i++){\n        for(int j=0;j<3;j++){\n            cout << g[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    // 查找等于 3 的元素位置\n    for(int i=0;i<4;i++){\n        for(int j=0;j<3;j++){\n            if(g[i][j]==3){\n                cout<<\" 找到 3 ,行 \"<<i<<\" ,列 \"<<j<<endl;\n            }\n        }\n    }\n    return 0;\n}"
            }
          ]
        }
      ]
    },
    {
      no: "5",
      title: "排序算法",
      sections: [
        {
          id: "5.1",
          title: "冒泡排序【必背模板】",
          kw: "冒泡排序 升序 相邻 比较 交换 swap 模板 必背 外层轮次 内层比较",
          blocks: [
            { t: "p", v: "原理:相邻两个数两两比较,逆序交换;每一轮将最大值“浮”到数组末尾" },
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a[105]={5,2,8,1,4};\n    int n=5;\n    // 升序模板\n    for(int i=1;i<=n-1;i++){\n        for(int j=0;j<=n-1-i;j++){\n            if(a[j]>a[j+1]){\n                swap(a[j],a[j+1]);\n            }\n        }\n    }\n    for(int i=0;i<n;i++) cout<<a[i]<<\" \";\n    return 0;\n}"
            },
            { t: "note", v: "分析:外层控制轮次;内层只比较未排序部分;末尾i个数字已有序,不再参与比较。" }
          ]
        },
        {
          id: "5.2",
          title: "选择排序",
          kw: "选择排序 最小值 下标 minpos 交换 未排序区间",
          blocks: [
            { t: "p", v: "原理:每一轮在未排序区间找到最小值下标,和区间第一个元素交换,一轮最多交换1次" },
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint main() {\n    int a[105]={5,2,8,1,4};\n    int n=5;\n    for(int i=0;i<n-1;i++){\n        int minpos=i;\n        for(int j=i+1;j<n;j++){\n            if(a[j]<a[minpos]) minpos=j;\n        }\n        swap(a[i],a[minpos]);\n    }\n    for(int i=0;i<n;i++) cout<<a[i]<<\" \";\n    return 0;\n}"
            }
          ]
        }
      ]
    },
    {
      no: "6",
      title: "递推算法",
      sections: [
        {
          id: "6.1",
          title: "递推思想",
          kw: "递推 初始条件 已算出的值 循环 思想",
          blocks: [
            { t: "p", v: "递推思想:先确定初始条件,利用前面已经算出的值循环推出后续结果,优先循环实现。" }
          ]
        },
        {
          id: "6.2",
          title: "样例1:斐波那契数列f[1]=1,f[2]=1,f[n]=f[n-1]+f[n-2]",
          kw: "斐波那契 递推 f[n] long long 样例",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint main() {\n    long long f[105];\n    f[1]=1; f[2]=1;\n    for(int i=3;i<=10;i++){\n        f[i]=f[i-1]+f[i-2];\n    }\n    for(int i=1;i<=10;i++) cout<<f[i]<<\" \";\n    return 0;\n}"
            }
          ]
        },
        {
          id: "6.3",
          title: "样例2:台阶问题(一次走1级或2级,求n级台阶走法总数)",
          kw: "台阶 递推公式 dp 走法 总数为 n级",
          blocks: [
            { t: "p", v: "递推公式:dp[1]=1,dp[2]=2,dp[i]=dp[i-1]+dp[i-2]" },
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nint main() {\n    int n=10;\n    long long dp[105];\n    dp[1]=1;\n    dp[2]=2;\n    for(int i=3;i<=n;i++){\n        dp[i]=dp[i-1]+dp[i-2];\n    }\n    cout<<dp[n];\n    return 0;\n}"
            }
          ]
        }
      ]
    },
    {
      no: "7",
      title: "文件读写ifstream/ofstream",
      sections: [
        {
          id: "7.1",
          title: "知识点要点",
          kw: "fstream ifstream ofstream 文件 读写 close 头文件 真题套路",
          blocks: [
            { t: "p", v: "知识点要点" },
            {
              t: "list",
              ol: true,
              v: [
                "需要头文件 #include <fstream>",
                "ofstreamfout(\"xxx.txt\");向文件写入,等价cout",
                "ifstreamfin(\"xxx.txt\");从文件读取,等价cin",
                "读写完成建议调用.close()关闭文件",
                "真题套路:文件读入→存入数组/结构体→排序→结果输出到文件"
              ]
            }
          ]
        },
        {
          id: "7.2",
          title: "样例:写入文件+读取文件",
          kw: "文件 写入 读取 样例 fout fin test.txt",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\n#include <fstream>\nusing namespace std;\nint main() {\n    // 写入文件\n    ofstream fout(\"test.txt\");\n    fout << 10 << \" \" << 20 << endl;\n    fout.close();\n\n    // 读取文件\n    ifstream fin(\"test.txt\");\n    int a,b;\n    fin >> a >> b;\n    cout << a << \" \" << b << endl;\n    fin.close();\n    return 0;\n}"
            }
          ]
        }
      ]
    },
    {
      no: "8",
      title: "考前默写模板(打印单独摘抄背诵)",
      sections: [
        {
          id: "8.1",
          title: "模板1:引用传递(函数修改外部变量)",
          kw: "模板 引用传递 函数 修改 外部变量 add",
          blocks: [
            {
              t: "code",
              v: "void add(int &x){\n    x++;\n}"
            }
          ]
        },
        {
          id: "8.2",
          title: "模板2:冒泡排序升序模板",
          kw: "模板 冒泡排序 升序 swap 默写",
          blocks: [
            {
              t: "code",
              v: "for(int i=1;i<=n-1;i++){\n    for(int j=0;j<=n-1-i;j++){\n        if(a[j]>a[j+1]) swap(a[j],a[j+1]);\n    }\n}"
            }
          ]
        },
        {
          id: "8.3",
          title: "模板3:结构体数组定义与遍历",
          kw: "模板 结构体数组 定义 遍历 Node arr",
          blocks: [
            {
              t: "code",
              v: "struct Node{\n    int x,y;\n};\nNode arr[105];\nfor(int i=0;i<n;i++){\n    cin>>arr[i].x>>arr[i].y;\n}"
            }
          ]
        },
        {
          id: "8.4",
          title: "打印建议",
          kw: "打印 建议 Word WPS 宋体 小四 行距 Consolas 等宽 目录 练习题",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "复制全部文本粘贴到Word/WPS,字体选用宋体小四,1.5倍行距;",
                "代码块可以设置等宽字体(Consolas);",
                "可以删除目录,直接打印正文;",
                "如果需要,我可以再增加\\\\10道GESP4难度练习题(含答案代码)\\\\追加到文档末尾。"
              ]
            }
          ]
        },
        {
          id: "8.5",
          title: "完整版打印最终建议",
          kw: "完整版 打印 最终建议 考点 标准写法 背诵 数论模板 二分模板 递归边界 排序",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "本文档整合GESP4级全部考点,覆盖考级100%笔试、大题范围",
                "所有代码均为考级标准写法,无超纲语法,可直接默写、上机运行",
                "考前重点背诵:数论模板、二分模板、递归边界、排序代码"
              ]
            },
            { t: "p", v: "(注:部分内容由豆包AI生成)" }
          ]
        }
      ]
    }
  ]
};

window.GESP_KB_LEVELS[5] = {
    title: "GESP C++ 5级全套复习手册（可直接打印）",
    chapters: [
      {
        no: "0",
        title: "手册说明",
        sections: [
          {
            id: "0.1",
            title: "核心定位、考试占比与目录",
            kw: "核心定位 考试占比 适用规则 目录 考纲 初等数论 二分 递归 分治 贪心 高精度 单链表 时间复杂度",
            blocks: [
              { t: "p", v: "核心定位:初等数论、二分算法、递归分治、贪心、高精度运算、单链表、时间复杂度分析" },
              { t: "p", v: "考试占比:初等数论35%(核心重难点),二分、递归、高精度、链表为大题高频考点" },
              { t: "p", v: "适用规则:严格贴合GESP5级考纲,无超纲语法、无复杂STL、仅考级标准写法" },
              { t: "p", v: "目录" },
              {
                t: "list", ol: true, v: [
                  "初等数论(质数、筛法、GCD/LCM、质因数分解、模运算)",
                  "二分算法(基础二分查找、二分答案最值问题)",
                  "递归与分治(递归思想、归并排序、快速排序、复杂度分析)",
                  "高精度运算(大整数加法、减法、乘法)",
                  "单链表基础(创建、遍历、插入、删除)",
                  "5级考前必背默写模板(核心必考)"
                ]
              }
            ]
          }
        ]
      },
      {
        no: "1",
        title: "初等数论(5级最高频重点)",
        sections: [
          {
            id: "1.1",
            title: "核心知识点汇总",
            kw: "质数 合数 试除法 因数成对 平方根 埃氏筛 线性筛 欧拉筛 GCD LCM 欧几里得 质因数分解 模运算 同余",
            blocks: [
              {
                t: "list", ol: true, v: [
                  "质数与合数:大于1的自然数,仅能被1和自身整除为质数,否则为合数;1既不是质数也不是合数。",
                  "试除法判质数:利用因数成对特性,枚举至 优化时间复杂度,避免超时。",
                  "质数筛法:埃氏筛(简易批量筛质数)、线性筛(欧拉筛,最优O(n)筛法)。",
                  "GCD/LCM:欧几里得算法求最大公约数,推导最小公倍数。",
                  "质因数分解:将任意正整数拆解为若干质数幂次乘积形式。",
                  "模运算与同余:大数运算取模、同余等式判断,数论题目基础核心性质。"
                ]
              }
            ]
          },
          {
            id: "1.2",
            title: "样例1:优化试除法判定质数",
            kw: "isPrime 试除法 sqrt 根号n 特判 n<2 因数成对 质数判断 时间复杂度",
            blocks: [
              { t: "p", v: "核心优化:因数成对出现,无需遍历1~n,仅需遍历到根号n,大幅提升效率" },
              {
                t: "code", v: "#include <iostream>\n#include <cmath>\nusing namespace std;\n\n// 优化试除法判断质数\nbool isPrime(int n) {\n    if(n < 2) return false;  // 小于 2 的数一定不是质数\n    for(int i = 2; i <= sqrt(n); i++) {\n        if(n % i == 0) return false; // 存在其他因数,为合数\n    }\n    return true;\n}\n\nint main() {\n    int x;\n    cin >> x;\n    if(isPrime(x)) cout << \" 是质数 \";\n    else cout << \" 不是质数 \";\n    return 0;\n}"
              },
              { t: "p", v: "详细分析:特判n<2是高频易错点;枚举到 是考级标准优化写法,可满足5级所有数据范围,避免暴力遍历超时。" }
            ]
          },
          {
            id: "1.3",
            title: "样例2:埃氏筛(批量筛选质数)",
            kw: "埃氏筛 筛法 质数 合数 倍数 标记 prime 数组 100以内 批量筛",
            blocks: [
              { t: "p", v: "原理:质数的所有倍数一定是合数,遍历标记所有合数,剩余未标记数字即为质数" },
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 1005;\nbool prime[N];\n\n// 埃氏筛初始化\nvoid init() {\n    for(int i = 2; i < N; i++) prime[i] = true; // 初始默认全为质数\n    for(int i = 2; i < N; i++) {\n        if(prime[i]) { // 若 i 是质数,标记其所有倍数为合数\n            for(int j = i * 2; j < N; j += i) {\n                prime[j] = false;\n            }\n        }\n    }\n}\n\nint main() {\n    init();\n    // 输出 100 以内所有质数\n    for(int i = 2; i <= 100; i++) {\n        if(prime[i]) cout << i << \" \";\n    }\n    return 0;\n}"
              }
            ]
          },
          {
            id: "1.4",
            title: "样例3:线性筛(欧拉筛·最优筛法)",
            kw: "线性筛 欧拉筛 最小质因子 O(n) 去重 vis prime cnt 合数标记",
            blocks: [
              { t: "p", v: "核心优势:每个合数仅被其最小质因子标记一次,时间复杂度严格O(n),无重复运算" },
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\nconst int N = 1005;\nbool vis[N];  // 标记是否为合数\nint prime[N], cnt; // 存储质数、统计质数个数\n\nvoid euler() {\n    for(int i = 2; i < N; i++) {\n        if(!vis[i]) prime[++cnt] = i; // 未被标记,是质数\n        // 遍历已找到的质数,标记合数\n        for(int j = 1; j <= cnt && i * prime[j] < N; j++) {\n            vis[i * prime[j]] = true;\n            if(i % prime[j] == 0) break; // 核心去重,避免重复标记\n        }\n    }\n}\n\nint main() {\n    euler();\n    for(int i = 1; i <= cnt; i++) cout << prime[i] << \" \";\n    return 0;\n}"
              }
            ]
          },
          {
            id: "1.5",
            title: "样例4:GCD与LCM(必考模板)",
            kw: "GCD 最大公约数 LCM 最小公倍数 欧几里得 递归 先除后乘 溢出 公式",
            blocks: [
              { t: "p", v: "核心公式: (先除后乘,避免整数溢出)LCM(a, b) =" },
              { t: "p", v: "×GCD(a, b) a b" },
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\n\n// 欧几里得算法求最大公约数 GCD 【 5 级必背】\nint gcd(int a, int b) {\n    return b ? gcd(b, a % b) : a;\n}\n\n// 求最小公倍数 LCM\nint lcm(int a, int b) {\n    return a / gcd(a, b) * b;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << \" 最大公约数 GCD : \" << gcd(a,b) << endl;\n    cout << \" 最小公倍数 LCM : \" << lcm(a,b) << endl;\n    return 0;\n}"
              },
              { t: "p", v: "详细分析:递归实现欧几里得算法,代码极简、考级通用;LCM计算必须先除后乘,规避int类型数据溢出问题,是考级高频考点。" }
            ]
          },
          {
            id: "1.6",
            title: "样例5:质因数分解",
            kw: "质因数分解 divide 幂次 质因子 cnt 循环相除 n>1 输出 a^b",
            blocks: [
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\n\n// 质因数分解函数\nvoid divide(int n) {\n    for(int i = 2; i * i <= n; i++) {\n        if(n % i == 0) {\n            int cnt = 0;\n            // 统计当前质因子的幂次\n            while(n % i == 0) {\n                cnt++;\n                n /= i;\n            }\n            cout << i << \"^\" << cnt << \" \";\n        }\n    }\n    if(n > 1) cout << n << \"^1\"; // 剩余大于 1 的数为最后一个质因子\n}\n\nint main() {\n    int x;\n    cin >> x;\n    divide(x);\n    return 0;\n}"
              }
            ]
          },
          {
            id: "1.7",
            title: "样例6:模运算基础(考级常用性质)",
            kw: "模运算 取模 MOD 1e9+7 同余 加法取模 乘法取模 溢出 long long",
            blocks: [
              { t: "p", v: "常用模运算公式: 、 (a + b)%m = (a%m + b%m)%m (a × b)%m = (a%m × b%m)%m" },
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\nconst int MOD = 1e9 + 7;\n\nint main() {\n    int a = 123456, b = 789012;\n    int add_res = (a % MOD + b % MOD) % MOD; // 加法取模\n    int mul_res = 1LL * (a % MOD) * (b % MOD) % MOD; // 乘法取模(防溢出)\n    cout << \" 加法取模结果: \" << add_res << endl;\n    cout << \" 乘法取模结果: \" << mul_res << endl;\n    return 0;\n}"
              }
            ]
          }
        ]
      },
      {
        no: "2",
        title: "二分算法(编程核心考点)",
        sections: [
          {
            id: "2.1",
            title: "核心知识点汇总",
            kw: "二分 有序区间 对半拆分 O(logn) 二分查找 下标 二分答案 最值 最小最大值 最大最小值",
            blocks: [
              {
                t: "list", ol: true, v: [
                  "核心思想:基于有序区间,对半拆分、舍弃无效区间,快速逼近答案,时间复杂度O(logn)",
                  "二分查找:针对有序数组,精准查找目标值下标",
                  "二分答案:解决最值问题(最小最大值、最大最小值),5级大题压轴高频考点"
                ]
              }
            ]
          },
          {
            id: "2.2",
            title: "样例1:有序数组二分查找(必背模板)",
            kw: "binarySearch 二分查找 升序 有序数组 l r mid 下标 -1 未找到 必背模板",
            blocks: [
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\n\n// 升序有序数组二分查找\nint binarySearch(int a[], int n, int x) {\n    int l = 0, r = n - 1;\n    while(l <= r) {\n        int mid = (l + r) / 2;\n        if(a[mid] == x) return mid;    // 找到目标,返回下标\n        else if(a[mid] < x) l = mid + 1; // 目标在右区间\n        else r = mid - 1;               // 目标在左区间\n    }\n    return -1; // 未找到目标\n}\n\nint main() {\n    int arr[6] = {1,3,5,7,9,11};\n    int pos = binarySearch(arr,6,7);\n    cout << \" 目标值下标: \" << pos;\n    return 0;\n}"
              }
            ]
          },
          {
            id: "2.3",
            title: "样例2:二分答案(最小化最大值经典题)",
            kw: "二分答案 check mid 分段 最大段和 最小化最大值 边界 max sum cnt 压轴",
            blocks: [
              { t: "p", v: "题目描述:给定数组,分割为m段,求所有段和的最大值的最小值" },
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\nint a[105];\nint n, m;\n\n// 校验函数:判断 mid 是否为合法最大段和\nbool check(int mid) {\n    int cnt = 1, sum = 0;\n    for(int i = 0; i < n; i++) {\n        if(sum + a[i] > mid) {\n            cnt++;\n            sum = a[i];\n        } else sum += a[i];\n    }\n    return cnt <= m;\n}\n\nint main() {\n    cin >> n >> m;\n    int l = 0, r = 0;\n    // 确定二分左右边界\n    for(int i = 0; i < n; i++) {\n        cin >> a[i];\n        l = max(l, a[i]);\n        r += a[i];\n    }\n    // 二分答案核心逻辑\n    while(l < r) {\n        int mid = (l + r) / 2;\n        if(check(mid)) r = mid;\n        else l = mid + 1;\n    }\n    cout << l;\n    return 0;\n}"
              }
            ]
          }
        ]
      },
      {
        no: "3",
        title: "递归与分治",
        sections: [
          {
            id: "3.1",
            title: "核心知识点汇总",
            kw: "递归 边界 终止条件 递推式 死递归 分治 归并排序 快速排序 复杂度 O(n) O(logn) O(nlogn)",
            blocks: [
              {
                t: "list", ol: true, v: [
                  "递归核心:边界终止条件+递归递推式,无边界会造成死递归",
                  "分治思想:分而治之,将大问题拆分为多个相同子问题,求解后合并结果",
                  "必考算法:归并排序、快速排序(分治经典应用)",
                  "复杂度识别:O(n)、O(logn)、O(nlogn)"
                ]
              }
            ]
          },
          {
            id: "3.2",
            title: "样例1:递归经典-斐波那契数列",
            kw: "递归 斐波那契 Fibonacci f(n) 边界 f(1)=1 递推 f(n-1)+f(n-2) 终止条件",
            blocks: [
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\n\n// 递归边界: f(1)=1 、 f(2)=1\nint f(int n) {\n    if(n == 1 || n == 2) return 1; // 递归终止条件\n    return f(n-1) + f(n-2); // 递归递推公式\n}\n\nint main() {\n    cout << f(10);\n    return 0;\n}"
              }
            ]
          },
          {
            id: "3.3",
            title: "样例2:归并排序(分治经典)",
            kw: "归并排序 mergeSort 分治 mid 合并 两个有序区间 tmp 回填 递归边界",
            blocks: [
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\nint a[105], tmp[105];\n\n// 归并排序:分治实现\nvoid mergeSort(int l, int r) {\n    if(l >= r) return; // 递归边界:区间长度为 1 ,无需排序\n    int mid = (l + r) / 2;\n    mergeSort(l, mid);    // 分:排序左半区间\n    mergeSort(mid+1, r);  // 分:排序右半区间\n\n    // 治:合并两个有序区间\n    int i = l, j = mid+1, k = l;\n    while(i <= mid && j <= r) {\n        if(a[i] <= a[j]) tmp[k++] = a[i++];\n        else tmp[k++] = a[j++];\n    }\n    // 补全剩余元素\n    while(i <= mid) tmp[k++] = a[i++];\n    while(j <= r) tmp[k++] = a[j++];\n    // 回填原数组\n    for(int p = l; p <= r; p++) a[p] = tmp[p];\n}\n\nint main() {\n    int n = 5;\n    for(int i = 0; i < n; i++) cin >> a[i];\n    mergeSort(0, n-1);\n    for(int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}"
              }
            ]
          },
          {
            id: "3.4",
            title: "样例3:快速排序(分治经典)",
            kw: "快速排序 quickSort 基准数 mid 双指针 i j swap 递归左右区间 分治",
            blocks: [
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\nint a[105];\n\nvoid quickSort(int l, int r) {\n    if(l >= r) return; // 递归边界\n    int mid = a[(l+r)/2]; // 选取中间值为基准数\n    int i = l, j = r;\n    // 左右指针遍历交换\n    while(i <= j) {\n        while(a[i] < mid) i++;\n        while(a[j] > mid) j--;\n        if(i <= j) swap(a[i++], a[j--]);\n    }\n    quickSort(l, j);  // 递归排序左区间\n    quickSort(i, r);  // 递归排序右区间\n}\n\nint main() {\n    int n = 5;\n    for(int i = 0; i < n; i++) cin >> a[i];\n    quickSort(0, n-1);\n    for(int i = 0; i < n; i++) cout << a[i] << \" \";\n    return 0;\n}"
              }
            ]
          },
          {
            id: "3.5",
            title: "时间复杂度总结(考级必认)",
            kw: "时间复杂度 O(n) O(logn) O(nlogn) 单层遍历 简单递归 对半拆分 归并排序 快速排序 考级必认",
            blocks: [
              {
                t: "list", ol: false, v: [
                  "单层遍历、简单递归:O(n)",
                  "二分算法、对半拆分:O(logn)",
                  "归并排序、快速排序:O(nlogn)"
                ]
              }
            ]
          }
        ]
      },
      {
        no: "4",
        title: "高精度运算(大整数模拟)",
        sections: [
          {
            id: "4.1",
            title: "核心知识点汇总",
            kw: "高精度 大整数 超出范围 long long 数组存储 逆序存储 低位在前 进位 借位 高精加 高精减 高精乘",
            blocks: [
              { t: "p", v: "适用场景:数值超出int、longlong取值范围,用数组逐位存储大整数,模拟人工加减乘运算,5级必考高精加、高精减、高精乘。" },
              { t: "p", v: "核心技巧:数组逆序存储(低位在前、高位在后),方便进位、借位运算。" }
            ]
          },
          {
            id: "4.2",
            title: "样例1:高精度加法",
            kw: "高精度加法 逆序存储 逐位相加 进位 c[i+1] 最高位进位 逆序输出 string '0'",
            blocks: [
              {
                t: "code", v: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint a[205], b[205], c[205];\nint main() {\n    string s1, s2;\n    cin >> s1 >> s2;\n    // 逆序存储大整数\n    int len1 = s1.size(), len2 = s2.size();\n    for(int i = 0; i < len1; i++) a[len1-1-i] = s1[i] - '0';\n    for(int i = 0; i < len2; i++) b[len2-1-i] = s2[i] - '0';\n\n    int len = max(len1, len2);\n    // 逐位相加,处理进位\n    for(int i = 0; i < len; i++) {\n        c[i] += a[i] + b[i];\n        c[i+1] += c[i] / 10;\n        c[i] %= 10;\n    }\n    if(c[len]) len++; // 处理最高位进位\n    // 逆序输出结果\n    for(int i = len-1; i >= 0; i--) cout << c[i];\n    return 0;\n}"
              }
            ]
          },
          {
            id: "4.3",
            title: "样例2:高精度乘法",
            kw: "高精度乘法 逐位相乘 累加进位 c[i+j] 去除前导零 len1+len2 逆序存储 输出结果",
            blocks: [
              {
                t: "code", v: "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint a[205], b[205], c[405];\nint main() {\n    string s1, s2;\n    cin >> s1 >> s2;\n    int len1 = s1.size(), len2 = s2.size();\n    // 逆序存储\n    for(int i = 0; i < len1; i++) a[len1-1-i] = s1[i] - '0';\n    for(int i = 0; i < len2; i++) b[len2-1-i] = s2[i] - '0';\n\n    // 高精度乘法核心:逐位相乘、累加进位\n    for(int i = 0; i < len1; i++) {\n        for(int j = 0; j < len2; j++) {\n            c[i+j] += a[i] * b[j];\n            c[i+j+1] += c[i+j] / 10;\n            c[i+j] %= 10;\n        }\n    }\n    // 去除前导零\n    int len = len1 + len2;\n    while(len > 1 && c[len-1] == 0) len--;\n    // 输出结果\n    for(int i = len-1; i >= 0; i--) cout << c[i];\n    return 0;\n}"
              }
            ]
          }
        ]
      },
      {
        no: "5",
        title: "单链表基础",
        sections: [
          {
            id: "5.1",
            title: "核心知识点汇总",
            kw: "单链表 节点 数据域 指针域 next 不连续 创建 遍历 头部插入 删除 双链表 循环链表 限制",
            blocks: [
              {
                t: "list", ol: true, v: [
                  "链表结构:节点存储数据+下一个节点地址,内存不连续,灵活高效",
                  "5级考点:单链表创建、遍历、头部插入、指定节点删除",
                  "考试限制:仅考单链表,不考双链表、循环链表"
                ]
              }
            ]
          },
          {
            id: "5.2",
            title: "样例:单链表完整操作(全覆盖考点)",
            kw: "struct Node val next new 遍历 printList 头部插入 删除节点 pre delete 内存泄漏",
            blocks: [
              {
                t: "code", v: "#include <iostream>\nusing namespace std;\n\n// 定义单链表节点\nstruct Node {\n    int val;\n    Node *next;\n};\n\n// 链表遍历输出\nvoid printList(Node *head) {\n    Node *p = head;\n    while(p != NULL) {\n        cout << p->val << \" \";\n        p = p->next;\n    }\n    cout << endl;\n}\n\nint main() {\n    // 1. 创建链表节点并串联\n    Node *n1 = new Node; n1->val = 10;\n    Node *n2 = new Node; n2->val = 20;\n    Node *n3 = new Node; n3->val = 30;\n    n1->next = n2;\n    n2->next = n3;\n    n3->next = NULL;\n\n    cout << \" 原始链表: \";\n    printList(n1);\n\n    // 2. 头部插入节点\n    Node *newNode = new Node; newNode->val = 5;\n    newNode->next = n1;\n    n1 = newNode;\n    cout << \" 头部插入后: \";\n    printList(n1);\n\n    // 3. 删除指定值( 20 )的节点\n    Node *p = n1, *pre = NULL;\n    while(p != NULL && p->val != 20) {\n        pre = p;\n        p = p->next;\n    }\n    if(p != NULL) {\n        pre->next = p->next;\n        delete p; // 释放内存,避免内存泄漏\n    }\n    cout << \" 删除节点后: \";\n    printList(n1);\n\n    return 0;\n}"
              }
            ]
          }
        ]
      },
      {
        no: "6",
        title: "GESP5级考前必背默写模板(满分核心)",
        sections: [
          {
            id: "6.1",
            title: "考前必背默写模板",
            kw: "必背 默写 模板 GCD 质数判断 二分查找 递归通用结构 备考说明 满分",
            blocks: [
              { t: "p", v: "模板1:GCD欧几里得算法(万能必考)" },
              {
                t: "code", v: "int gcd(int a, int b){\n    return b ? gcd(b, a % b) : a;\n}"
              },
              { t: "p", v: "模板2:质数快速判断模板" },
              {
                t: "code", v: "bool isPrime(int n){\n    if(n < 2) return false;\n    for(int i = 2; i * i <= n; i++)\n        if(n % i == 0) return false;\n    return true;\n}"
              },
              { t: "p", v: "模板3:标准二分查找模板" },
              {
                t: "code", v: "int binarySearch(int a[], int n, int x){\n    int l = 0, r = n - 1;\n    while(l <= r){\n        int mid = (l + r) / 2;\n        if(a[mid] == x) return mid;\n        else if(a[mid] < x) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}"
              },
              { t: "p", v: "模板4:递归通用结构" },
              {
                t: "code", v: "// 1. 递归边界(终止条件,必须先写)\nif( 终止条件 ) return 对应结果 ;\n// 2. 递归递推式(拆分问题,调用自身)\nreturn 递归函数 ( 子问题参数 );"
              },
              { t: "p", v: "打印备考说明" },
              {
                t: "list", ol: true, v: [
                  "本文档为GESP5级专属完整版,覆盖100%笔试、编程大题考点",
                  "所有代码均为考级标准写法,无超纲内容,可直接默写、上机运行",
                  "考前重点背诵:数论模板、二分模板、递归边界、排序代码"
                ]
              },
              { t: "p", v: "(注:部分内容由豆包AI生成)" }
            ]
          }
        ]
      }
    ]
};

window.GESP_KB_LEVELS[6] = {
  title: "GESP C++6级全套复习手册（可直接打印）",
  chapters: [
    {
      no: "0",
      title: "手册说明",
      sections: [
        {
          id: "0.1",
          title: "手册说明与目录",
          kw: "GESP 6级 核心定位 考试占比 适用规则 目录 二叉树 栈 队列 DFS BFS 动态规划 面向对象",
          blocks: [
            { t: "p", v: "核心定位:二叉树、栈与队列、DFS/BFS搜索、动态规划DP、面向对象基础" },
            { t: "p", v: "考试占比:树结构、搜索、DP为六级核心大题考点,面向对象为基础必考知识点" },
            { t: "p", v: "适用规则:严格贴合GESP6级考纲,无超纲语法,全部为考级标准可默写模板" },
            { t: "p", v: "目录" },
            {
              t: "list", ol: true, v: [
                "树结构(二叉树、遍历、BST、哈夫曼树)",
                "线性数据结构(栈、队列、单调栈基础)",
                "搜索算法(DFS回溯、BFS最短路径)",
                "动态规划DP入门(经典一维DP、01背包、LIS)",
                "面向对象基础(类、对象、构造函数、权限控制)",
                "6级考前必背默写模板(核心满分模板)"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "1",
      title: "树结构(6级核心重点)",
      sections: [
        {
          id: "1.1",
          title: "核心知识点汇总",
          kw: "二叉树 左孩子 右孩子 链表 数组 完全二叉树 前序 中序 后序 满二叉树 BST 哈夫曼树 WPL",
          blocks: [
            {
              t: "list", ol: true, v: [
                "二叉树基础:每个节点最多两个子节点(左孩子、右孩子),区分度极高,左右子树不可互换。",
                "存储方式:链表存储(常规)、数组存储(完全二叉树专用)。",
                "三大遍历:前序、中序、后序(递归必考、非递归了解)。",
                "特殊二叉树:完全二叉树、满二叉树、二叉搜索树BST(左小右大)。",
                "哈夫曼树:带权路径最短树、哈夫曼编码生成规则。"
              ]
            }
          ]
        },
        {
          id: "1.2",
          title: "二叉树节点定义(标准模板)",
          kw: "TreeNode struct val left right 构造函数 NULL 链表存储",
          blocks: [
            {
              t: "code", v: "#include <iostream>\nusing namespace std;\n\n// 二叉树节点结构体( 6 级通用)\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};"
            }
          ]
        },
        {
          id: "1.3",
          title: "递归遍历(必考核心)",
          kw: "前序遍历 中序遍历 后序遍历 根左右 左根右 左右根 递归 preOrder inOrder postOrder 升序",
          blocks: [
            { t: "note", v: "口诀:前序根左右、中序左根右、后序左右根" },
            {
              t: "code", v: "// 前序遍历:根  →  左  →  右\nvoid preOrder(TreeNode *root) {\n    if(!root) return;\n    cout << root->val << \" \";\n    preOrder(root->left);\n    preOrder(root->right);\n}\n\n// 中序遍历:左  →  根  →  右( BST 中序有序)\nvoid inOrder(TreeNode *root) {\n    if(!root) return;\n    inOrder(root->left);\n    cout << root->val << \" \";\n    inOrder(root->right);\n}\n\n// 后序遍历:左  →  右  →  根\nvoid postOrder(TreeNode *root) {\n    if(!root) return;\n    postOrder(root->left);\n    postOrder(root->right);\n    cout << root->val << \" \";\n}"
            },
            { t: "note", v: "关键结论:二叉搜索树BST的中序遍历结果一定是升序序列,为考级高频考点。" }
          ]
        },
        {
          id: "1.4",
          title: "完全二叉树数组存储规则",
          kw: "完全二叉树 数组存储 下标 i 左孩子 右孩子 父节点 2i 2i+1 i/2",
          blocks: [
            { t: "p", v: "设当前节点下标为i:" },
            { t: "p", v: "左孩子下标: ,右孩子下标: ,父节点下标: 2 × i 2 × i + 1 i/2" }
          ]
        },
        {
          id: "1.5",
          title: "二叉搜索树BST插入",
          kw: "BST 插入 insert 小往左 大往右 递归 new TreeNode",
          blocks: [
            {
              t: "code", v: "// BST 插入节点:小往左、大往右\nTreeNode* insert(TreeNode *root, int x) {\n    if(!root) return new TreeNode(x);\n    if(x < root->val)\n        root->left = insert(root->left, x);\n    else\n        root->right = insert(root->right, x);\n    return root;\n}"
            }
          ]
        },
        {
          id: "1.6",
          title: "哈夫曼树核心结论",
          kw: "哈夫曼树 权值 合并 WPL 带权路径长度 度为1 哈夫曼编码 左0右1 前缀编码",
          blocks: [
            {
              t: "list", ol: true, v: [
                "每次选取权值最小两个节点合并,新节点权值为两节点之和。",
                "带权路径长度WPL最小,无度为1的节点。",
                "哈夫曼编码:左0右1,前缀编码、无冲突。"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "2",
      title: "栈与队列(线性数据结构)",
      sections: [
        {
          id: "2.1",
          title: "核心知识点汇总",
          kw: "栈 stack LIFO 后进先出 队列 queue FIFO 先进先出 循环队列 假溢出 单调栈 区间最值",
          blocks: [
            {
              t: "list", ol: true, v: [
                "栈stack:后进先出LIFO,常用于表达式求值、括号匹配、单调栈。",
                "队列queue:先进先出FIFO,核心用于BFS广度优先搜索。",
                "循环队列:解决顺序队列假溢出问题。",
                "单调栈基础:维护栈内元素单调递增/递减,用于区间最值问题。"
              ]
            }
          ]
        },
        {
          id: "2.2",
          title: "stack栈标准用法",
          kw: "stack push top pop empty size 入栈 取栈顶 出栈 判断空 元素个数",
          blocks: [
            {
              t: "code", v: "#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    stack<int> st;\n    st.push(1);   // 入栈\n    st.push(2);\n    st.top();     // 取栈顶\n    st.pop();     // 出栈(不返回值)\n    st.empty();   // 判断空\n    st.size();    // 元素个数\n    return 0;\n}"
            }
          ]
        },
        {
          id: "2.3",
          title: "queue队列标准用法",
          kw: "queue push front back pop empty 入队 队首 队尾 出队",
          blocks: [
            {
              t: "code", v: "#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    queue<int> q;\n    q.push(1);    // 入队\n    q.front();    // 队首\n    q.back();     // 队尾\n    q.pop();      // 出队\n    q.empty();\n    return 0;\n}"
            }
          ]
        },
        {
          id: "2.4",
          title: "经典样例:括号匹配(栈)",
          kw: "括号匹配 栈 check 合法 不合法 string 遍历 empty push pop",
          blocks: [
            {
              t: "code", v: "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool check(string s) {\n    stack<char> st;\n    for(char c : s) {\n        if(c == '(') st.push(c);\n        else {\n            if(st.empty()) return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << (check(s) ? \" 合法 \" : \" 不合法 \");\n    return 0;\n}"
            }
          ]
        }
      ]
    },
    {
      no: "3",
      title: "搜索算法(DFS/BFS/回溯)",
      sections: [
        {
          id: "3.1",
          title: "核心知识点汇总",
          kw: "DFS 深度优先 回溯 枚举 组合 连通块 选择 撤销 BFS 广度优先 逐层 无权图 最短路径",
          blocks: [
            {
              t: "list", ol: true, v: [
                "DFS深度优先:一路走到底,走不通回溯,适合枚举、组合、连通块。",
                "回溯算法:DFS核心思想,选择、递归、撤销选择。",
                "BFS广度优先:逐层遍历,无权图最短路径唯一解法。"
              ]
            }
          ]
        },
        {
          id: "3.2",
          title: "DFS递归框架(必背)",
          kw: "dfs 递归边界 终止条件 记录答案 遍历选择 合法未访问 标记访问 撤销标记 回溯",
          blocks: [
            {
              t: "code", v: "void dfs( 状态 ) {\n    // 1. 递归边界\n    if( 满足终止条件 ) {\n        记录答案 ;\n        return;\n    }\n    // 2. 遍历所有选择\n    for( 所有可选方向 / 状态 ) {\n        if( 合法未访问 ) {\n            标记访问 ;\n            dfs( 新状态 );\n            撤销标记 ; // 回溯\n        }\n    }\n}"
            }
          ]
        },
        {
          id: "3.3",
          title: "BFS标准框架(最短路径必考)",
          kw: "BFS queue Node step 方向 dx dy vis 边界 最短路径 bfs 入队",
          blocks: [
            {
              t: "code", v: "#include <iostream>\n#include <queue>\n#include <cstring>\nusing namespace std;\n\nint n,m;\nbool vis[105][105];\nint dx[4]={-1,1,0,0};\nint dy[4]={0,0,-1,1};\n\n// 坐标结构体\nstruct Node{\n    int x,y,step;\n};\n\nint bfs(int sx,int sy) {\n    queue<Node> q;\n    q.push({sx,sy,0});\n    vis[sx][sy]=true;\n    while(!q.empty()) {\n        Node now=q.front(); q.pop();\n        // 到达终点\n        if( 到达条件 ) return now.step;\n        // 四个方向遍历\n        for(int i=0;i<4;i++) {\n            int nx=now.x+dx[i];\n            int ny=now.y+dy[i];\n            if( 合法边界  && !vis[nx][ny]) {\n                vis[nx][ny]=true;\n                q.push({nx,ny,now.step+1});\n            }\n        }\n    }\n    return -1;\n}"
            },
            { t: "note", v: "核心结论:BFS第一次到达终点的路径,一定是最短路径。" }
          ]
        }
      ]
    },
    {
      no: "4",
      title: "动态规划DP入门(6级压轴)",
      sections: [
        {
          id: "4.1",
          title: "DP核心思想",
          kw: "DP 动态规划 状态定义 转移方程 初始条件 子问题 最优解 重复计算",
          blocks: [
            { t: "p", v: "状态定义+转移方程+初始条件,用子问题最优解推导全局最优解,避免重复计算。" }
          ]
        },
        {
          id: "4.1b",
          title: "经典1:爬楼梯",
          kw: "爬楼梯 递推 dp 斐波那契 1步 2步 台阶 走法 long long",
          blocks: [
            { t: "p", v: "题意:每次走1/2步,求n级台阶总走法" },
            {
              t: "code", v: "#include <iostream>\nusing namespace std;\nlong long dp[105];\n\nint main() {\n    int n; cin>>n;\n    dp[1]=1; dp[2]=2;\n    for(int i=3;i<=n;i++)\n        dp[i]=dp[i-1]+dp[i-2];\n    cout<<dp[n];\n    return 0;\n}"
            }
          ]
        },
        {
          id: "4.2",
          title: "经典2:最长上升子序列LIS",
          kw: "LIS 最长上升子序列 dp a[i] max 双层循环 ans",
          blocks: [
            {
              t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[105],dp[105];\n\nint main() {\n    int n; cin>>n;\n    for(int i=1;i<=n;i++) cin>>a[i];\n    int ans=0;\n    for(int i=1;i<=n;i++) {\n        dp[i]=1;\n        for(int j=1;j<i;j++) {\n            if(a[j]<a[i])\n                dp[i]=max(dp[i],dp[j]+1);\n        }\n        ans=max(ans,dp[i]);\n    }\n    cout<<ans;\n    return 0;\n}"
            }
          ]
        },
        {
          id: "4.3",
          title: "经典3:一维01背包(6级必背模板)",
          kw: "01背包 一维 逆向遍历 倒序 容量 vol 价值 w v dp max 完全背包",
          blocks: [
            { t: "p", v: "物品只能选或不选,一维数组逆向遍历防重复选取" },
            {
              t: "code", v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint v[105],w[105];\nint dp[1005]; // dp[j] :容量 j 的最大价值\n\nint main() {\n    int n,vol;\n    cin>>n>>vol;\n    for(int i=1;i<=n;i++)\n        cin>>w[i]>>v[i];\n\n    // 01 背包一维核心模板\n    for(int i=1;i<=n;i++)\n        for(int j=vol;j>=w[i];j--)\n            dp[j]=max(dp[j],dp[j-w[i]]+v[i]);\n\n    cout<<dp[vol];\n    return 0;\n}"
            },
            { t: "note", v: "关键考点:01背包必须倒序遍历容量,完全背包正序遍历,考级极易混淆。" }
          ]
        }
      ]
    },
    {
      no: "5",
      title: "面向对象基础(OOP)",
      sections: [
        {
          id: "5.1",
          title: "核心知识点汇总",
          kw: "类 对象 实例 模板 public private 访问权限 构造函数 成员变量 成员函数 封装",
          blocks: [
            {
              t: "list", ol: true, v: [
                "类与对象:类是模板,对象是实例。",
                "访问权限:public(公有,外部可访问)、private(私有,仅类内访问)。",
                "构造函数:与类名同名,创建对象自动调用,无返回值。",
                "成员变量、成员函数:封装数据与行为。"
              ]
            }
          ]
        },
        {
          id: "5.2",
          title: "标准完整样例(考级满分模板)",
          kw: "class Student private public 构造函数 成员函数 show 创建对象 满分模板",
          blocks: [
            {
              t: "code", v: "#include <iostream>\nusing namespace std;\n\n// 定义类\nclass Student {\nprivate:\n    // 私有成员:外部无法直接访问\n    int id;\n    int score;\npublic:\n    // 构造函数:同名、无返回值\n    Student(int i,int s) {\n        id=i;\n        score=s;\n    }\n    // 成员函数\n    void show() {\n        cout<<id<<\" \"<<score<<endl;\n    }\n};\n\nint main() {\n    // 创建对象\n    Student s1(1,95);\n    s1.show();\n    return 0;\n}"
            }
          ]
        }
      ]
    },
    {
      no: "6",
      title: "GESP6级考前必背默写模板(满分核心)",
      sections: [
        {
          id: "6.1",
          title: "考前必背默写模板",
          kw: "模板 默写 二叉树递归遍历 DFS回溯 BFS最短路径 01背包 面向对象 类模板",
          blocks: [
            { t: "p", v: "模板1:二叉树递归遍历模板" },
            {
              t: "code", v: "void pre(TreeNode* root){\n    if(!root)return;\n    // 根左右\n    cout<<root->val;\n    pre(root->left);\n    pre(root->right);\n}"
            },
            { t: "p", v: "模板2:DFS回溯通用框架" },
            {
              t: "code", v: "void dfs(){\n    if( 边界条件 ){\n        更新答案 ;\n        return;\n    }\n    for( 遍历所有选择 ){\n        if( 合法 ){\n            标记 ;\n            dfs();\n            回溯撤销 ;\n        }\n    }\n}"
            },
            { t: "p", v: "模板3:BFS最短路径框架" },
            {
              t: "code", v: "queue<Node>q;\nvis[sx][sy]=1;\nq.push({sx,sy,0});\nwhile(!q.empty()){\n    auto now=q.front();q.pop();\n    if( 终点 )return now.step;\n    四方向遍历入队 ;\n}"
            },
            { t: "p", v: "模板4:一维01背包DP(6级压轴必考)" },
            {
              t: "code", v: "for(int i=1;i<=n;i++)\n    for(int j=vol;j>=w[i];j--)\n        dp[j]=max(dp[j],dp[j-w[i]]+v[i]);"
            },
            { t: "p", v: "模板5:面向对象基础类模板" },
            {
              t: "code", v: "class Name{\nprivate:\n    // 私有成员\npublic:\n    // 构造函数\n    Name(){}\n    // 成员函数\n};"
            }
          ]
        },
        {
          id: "6.2",
          title: "打印备考说明",
          kw: "备考说明 全覆盖 考级标准 默写 上机 考前重点 豆包AI",
          blocks: [
            {
              t: "list", ol: true, v: [
                "本文档为GESP6级纯专属手册,全覆盖树、栈队列、搜索、DP、面向对象考点。",
                "所有代码严格贴合考级标准,无超纲内容,可直接默写、上机得分。",
                "考前重点:二叉树遍历、BFS最短路径、01背包一维DP、回溯DFS。"
              ]
            },
            { t: "p", v: "(注:部分内容由豆包AI生成)" }
          ]
        }
      ]
    }
  ]
};

window.GESP_KB_LEVELS[7] = {
  title: "GESP C++ 7级考纲考点（暂无手册，依据考纲考点表整理）",
  chapters: [
    {
      no: "0",
      title: "等级说明",
      sections: [
        {
          id: "0.1",
          title: "考核目标与内容说明",
          kw: "七级 考核目标 考纲 复杂动态规划 图遍历 泛洪 哈希表",
          blocks: [
            { t: "p", v: "七级考核目标：复杂动态规划；图遍历；泛洪算法；哈希表；高级数学库函数。" },
            { t: "p", v: "说明：官方未提供 7 级全套复习手册，本部分内容依据《GESP 考纲考点表（C++）》整理。" }
          ]
        }
      ]
    },
    {
      no: "1",
      title: "数学库函数",
      sections: [
        {
          id: "1.1",
          title: "三角函数、对数与指数",
          kw: "sin cos log10 log2 exp cmath 数学库函数",
          blocks: [
            {
              t: "list", v: [
                "三角函数：sin、cos。",
                "对数函数：log10、log2。",
                "指数函数：exp。"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "2",
      title: "复杂动态规划",
      sections: [
        {
          id: "2.1",
          title: "二维 DP 与区间 DP",
          kw: "二维DP 区间DP 状态 转移",
          blocks: [
            {
              t: "list", v: [
                "二维 DP：状态由两个维度描述。",
                "区间 DP：以区间端点作为状态，按区间长度从小到大转移。"
              ]
            }
          ]
        },
        {
          id: "2.2",
          title: "LIS 最长上升子序列与 LCS 最长公共子序列",
          kw: "LIS 最长上升子序列 LCS 最长公共子序列",
          blocks: [
            {
              t: "list", v: [
                "LIS：最长上升子序列。",
                "LCS：最长公共子序列。"
              ]
            }
          ]
        },
        {
          id: "2.3",
          title: "滚动数组空间优化",
          kw: "滚动数组 空间优化 降维",
          blocks: [
            { t: "p", v: "滚动数组：复用少量状态行，把二维 DP 的空间复杂度降为一维。" }
          ]
        }
      ]
    },
    {
      no: "3",
      title: "图论",
      sections: [
        {
          id: "3.1",
          title: "有向图、无向图与顶点度",
          kw: "有向图 无向图 顶点 度",
          blocks: [
            {
              t: "list", v: [
                "有向图：边有方向。",
                "无向图：边无方向。",
                "顶点度：与该顶点相连的边数。"
              ]
            }
          ]
        },
        {
          id: "3.2",
          title: "图的 DFS/BFS 遍历",
          kw: "DFS BFS 遍历 深搜 广搜",
          blocks: [
            { t: "p", v: "图的遍历：DFS 深度优先搜索、BFS 广度优先搜索。" }
          ]
        },
        {
          id: "3.3",
          title: "Flood-Fill 泛洪算法",
          kw: "Flood-Fill 泛洪 连通块 填充",
          blocks: [
            { t: "p", v: "Flood-Fill 泛洪算法：从起点向相邻可扩展位置扩散，用于连通块统计、区域填充等问题。" }
          ]
        }
      ]
    },
    {
      no: "4",
      title: "哈希表",
      sections: [
        {
          id: "4.1",
          title: "哈希表原理与简单应用",
          kw: "哈希表 散列 映射 冲突",
          blocks: [
            { t: "p", v: "哈希表：通过哈希函数把键映射到存储位置，实现快速查找，需要处理哈希冲突。" }
          ]
        }
      ]
    }
  ]
};

window.GESP_KB_LEVELS[8] = {
  title: "GESP C++8级全套复习手册（可直接打印）",
  chapters: [
    {
      no: "0",
      title: "手册说明",
      sections: [
        {
          id: "0.1",
          title: "核心定位与适用规则",
          kw: "核心定位 考试占比 适用规则 GESP 8级 考纲 压轴 OOP 封装 算法效率",
          blocks: [
            { t: "p", v: "核心定位：图论进阶高级算法、复杂动态规划、排列组合数学、倍增算法、算法复杂度优化、面向对象封装" },
            { t: "p", v: "考试占比：最短路、最小生成树、并查集、快速幂为八级压轴大题，OOP封装、算法效率为必考基础考点" },
            { t: "p", v: "适用规则：严格贴合GESP8级考纲，无超纲内容，全部为考级标准可默写满分模板，衔接7级知识、适配八级拔高考点" }
          ]
        },
        {
          id: "0.2",
          title: "目录",
          kw: "目录 图论进阶 数学与计数算法 算法优化与效率分析 面向对象进阶 必背满分模板",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "图论进阶(最小生成树、最短路、并查集、连通分量)",
                "数学与计数算法(排列组合、杨辉三⻆、快速幂倍增)",
                "算法优化与效率分析(复杂度、倍增、贪心、状态压缩基础)",
                "面向对象进阶(封装、构造析构、访问控制、类与对象)",
                "8级考前必背满分模板(四大核心压轴模板)"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "1",
      title: "图论进阶(8级核心压轴)",
      sections: [
        {
          id: "1.1",
          title: "核心知识点汇总",
          kw: "最小生成树 MST Kruskal Prim 最短路 Dijkstra Floyd 并查集 强连通分量 拓扑排序 环判定",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "最小生成树MST:无向连通图权值和最小的生成树,包含n个点、n-1条边,无环连通。两大核心算法:Kruskal(克鲁斯卡尔)、Prim(普里姆)。",
                "最短路算法:Dijkstra(单源最短路、无负权边)、Floyd(多源最短路、可处理负权、不能有负环)。",
                "并查集:高效维护集合合并、查询连通性,是Kruskal算法核心底层,考级高频考点。",
                "进阶图论概念:强连通分量、拓扑排序进阶、图的环判定。"
              ]
            }
          ]
        },
        {
          id: "1.2",
          title: "并查集(8级基础核心,必考)",
          kw: "并查集 查找根节点 合并集合 路径压缩 连通性 fa find unite init 近似O(1)",
          blocks: [
            { t: "p", v: "核心功能:查找根节点、合并集合、判断两点是否连通,路径压缩优化,时间复杂度近似O(1)" },
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\n\nconst int N = 105;\nint fa[N]; // 父节点数组\n\n// 初始化:每个点自成集合\nvoid init(int n) {\n    for(int i = 1; i <= n; i++)\n        fa[i] = i;\n}\n\n// 查找根节点 + 路径压缩\nint find(int x) {\n    if(fa[x] == x) return x;\n    return fa[x] = find(fa[x]);\n}\n\n// 合并两个集合\nvoid unite(int x, int y) {\n    x = find(x);\n    y = find(y);\n    if(x != y) fa[y] = x;\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    init(n);\n    for(int i = 1; i <= m; i++) {\n        int u, v;\n        cin >> u >> v;\n        unite(u, v);\n    }\n    // 判断连通\n    if(find(1) == find(n)) cout << \"连通\";\n    else cout << \"不连通\";\n    return 0;\n}"
            }
          ]
        },
        {
          id: "1.3",
          title: "Kruskal最小生成树算法",
          kw: "Kruskal 克鲁斯卡尔 最小生成树 边贪心 排序 并查集判环 稀疏图 Edge cmp cnt",
          blocks: [
            { t: "p", v: "核心思想:边贪心,将所有边按权值升序排序,依次选边,不构成环则加入,依托并查集判环,适合稀疏图" },
            {
              t: "code",
              v: "#include <iostream>\n#include <algorithm>\nusing namespace std;\nconst int N = 1005;\n\n// 边结构体\nstruct Edge {\n    int u, v, w;\n}e[N];\n\nint fa[N];\n// 并查集查找\nint find(int x) {\n    return fa[x] == x ? x : fa[x] = find(fa[x]);\n}\n\n// 边权升序排序\nbool cmp(Edge a, Edge b) {\n    return a.w < b.w;\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    // 初始化并查集\n    for(int i = 1; i <= n; i++) fa[i] = i;\n    for(int i = 1; i <= m; i++)\n        cin >> e[i].u >> e[i].v >> e[i].w;\n\n    sort(e + 1, e + 1 + m, cmp);\n    int sum = 0, cnt = 0;\n    for(int i = 1; i <= m; i++) {\n        int fu = find(e[i].u);\n        int fv = find(e[i].v);\n        if(fu != fv) {\n            fa[fv] = fu;\n            sum += e[i].w;\n            cnt++;\n            if(cnt == n - 1) break; // 生成树凑⻬ n-1 条边,提前结束\n        }\n    }\n    cout << \"最小生成树权值和: \" << sum;\n    return 0;\n}"
            }
          ]
        },
        {
          id: "1.4",
          title: "Prim最小生成树算法",
          kw: "Prim 普里姆 最小生成树 点贪心 邻接矩阵 稠密图 dis vis INF 最短边",
          blocks: [
            { t: "p", v: "核心思想:点贪心,从起点出发,每次选取连接已连通集合、权值最小的边拓展,适合稠密图(邻接矩阵实现,考级简易版)" },
            {
              t: "code",
              v: "#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\nconst int N = 105;\nconst int INF = 0x3f3f3f3f;\nint g[N][N];\nint dis[N]; // 节点到生成树的最短距离\nbool vis[N];\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    memset(g, 0x3f, sizeof(g));\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        g[u][v] = g[v][u] = w;\n    }\n    // 初始化距离数组\n    for(int i = 1; i <= n; i++) dis[i] = g[1][i];\n    vis[1] = true;\n    int sum = 0;\n\n    for(int i = 2; i <= n; i++) {\n        // 找最短边\n        int minw = INF, pos = 0;\n        for(int j = 1; j <= n; j++) {\n            if(!vis[j] && dis[j] < minw) {\n                minw = dis[j];\n                pos = j;\n            }\n        }\n        sum += minw;\n        vis[pos] = true;\n        // 更新距离\n        for(int j = 1; j <= n; j++) {\n            if(!vis[j]) dis[j] = min(dis[j], g[pos][j]);\n        }\n    }\n    cout << sum;\n    return 0;\n}"
            }
          ]
        },
        {
          id: "1.5",
          title: "Dijkstra堆优化最短路(单源无负权)",
          kw: "Dijkstra 单源最短路 堆优化 优先队列 priority_queue PII 邻接表 O(mlogn) 无负权",
          blocks: [
            { t: "p", v: "八级必考压轴模板,求解单点到所有点最短路径,堆优化时间复杂度O(mlogn),适配大数据范围" },
            {
              t: "code",
              v: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <cstring>\nusing namespace std;\ntypedef pair<int, int> PII;\nconst int N = 105;\nconst int INF = 0x3f3f3f3f;\nvector<PII> edge[N]; // 邻接表: first 终点, second 边权\nint dis[N];\nbool vis[N];\n\n// 起点 st\nvoid dijkstra(int st, int n) {\n    memset(dis, 0x3f, sizeof(dis));\n    memset(vis, 0, sizeof(vis));\n    priority_queue<PII, vector<PII>, greater<PII>> q;\n    dis[st] = 0;\n    q.push({0, st});\n\n    while(!q.empty()) {\n        auto now = q.top();\n        q.pop();\n        int d = now.first;\n        int u = now.second;\n        if(vis[u]) continue;\n        vis[u] = true;\n        for(auto p : edge[u]) {\n            int v = p.first;\n            int w = p.second;\n            if(dis[v] > d + w) {\n                dis[v] = d + w;\n                q.push({dis[v], v});\n            }\n        }\n    }\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        edge[u].push_back({v, w});\n    }\n    dijkstra(1, n);\n    for(int i = 1; i <= n; i++)\n        cout << dis[i] << \" \";\n    return 0;\n}"
            }
          ]
        },
        {
          id: "1.6",
          title: "Floyd多源最短路",
          kw: "Floyd 多源最短路 动态规划 中转点 三重循环 负权 负环 小点图",
          blocks: [
            { t: "p", v: "核心:动态规划思想,枚举中转点,支持多起点最短路,代码极简,适合小点图" },
            {
              t: "code",
              v: "#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\nconst int N = 105;\nconst int INF = 0x3f3f3f3f;\nint d[N][N];\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    memset(d, 0x3f, sizeof(d));\n    for(int i = 1; i <= n; i++) d[i][i] = 0;\n    for(int i = 1; i <= m; i++) {\n        int u, v, w;\n        cin >> u >> v >> w;\n        d[u][v] = min(d[u][v], w);\n    }\n    // Floyd 核心三重循环\n    for(int k = 1; k <= n; k++) // 中转点\n        for(int i = 1; i <= n; i++) // 起点\n            for(int j = 1; j <= n; j++) // 终点\n                d[i][j] = min(d[i][j], d[i][k] + d[k][j]);\n\n    // 输出 1 到 n 最短路\n    cout << d[1][n];\n    return 0;\n}"
            },
            { t: "note", v: "核心考点区分:Dijkstra无负权、单源;Floyd多源、可负权、不可负环;Kruskal/Prim求解最小生成树,四类算法场景必考区分。" }
          ]
        }
      ]
    },
    {
      no: "2",
      title: "数学与计数算法(8级数学核心)",
      sections: [
        {
          id: "2.1",
          title: "核心知识点汇总",
          kw: "计数原理 加法原理 乘法原理 排列组合 杨辉三角 二项式系数 快速幂 倍增 坐标运算 几何面积 方程求解",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "计数原理:加法原理(分类)、乘法原理(分步)",
                "排列组合:有序排列、无序组合计算公式与应用",
                "杨辉三⻆:组合数递推、二项式系数",
                "快速幂(倍增):高效求解高次幂,时间复杂度O(logk),考级必考模板",
                "基础数算应用:坐标运算、几何面积、方程求解"
              ]
            }
          ]
        },
        {
          id: "2.1b",
          title: "快速幂(倍增算法·满分模板)",
          kw: "快速幂 倍增 pow qpow 取模 mod long long 二进制 b&1 b>>1 O(logk)",
          blocks: [
            { t: "p", v: "作用:快速计算 ,规避暴力循环超时,8级必考核心a modb mod" },
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\ntypedef long long ll;\n// 快速幂: a^b % mod\nll qpow(ll a, ll b, ll mod) {\n    ll res = 1;\n    while(b) {\n        if(b & 1) res = res * a % mod;\n        a = a * a % mod;\n        b >>= 1;\n    }\n    return res;\n}\n\nint main() {\n    ll a, b, mod;\n    cin >> a >> b >> mod;\n    cout << qpow(a, b, mod);\n    return 0;\n}"
            }
          ]
        },
        {
          id: "2.2",
          title: "杨辉三⻆与组合数递推",
          kw: "杨辉三角 组合数 递推 二项式系数 C(n,k) 边界 c[n][k] 初始化",
          blocks: [
            { t: "p", v: "公式: C(n, 0) = 1, C(n, n) = 1, C(n, k) = C(n − 1, k − 1) + C(n − 1, k)" },
            {
              t: "code",
              v: "#include <iostream>\nusing namespace std;\nconst int N = 50;\nll c[N][N];\n\nvoid init() {\n    for(int n = 0; n < N; n++) {\n        c[n][0] = 1;\n        c[n][n] = 1;\n        for(int k = 1; k < n; k++)\n            c[n][k] = c[n-1][k-1] + c[n-1][k];\n    }\n}\n\nint main() {\n    init();\n    int n, k;\n    cin >> n >> k;\n    cout << c[n][k];\n    return 0;\n}"
            }
          ]
        },
        {
          id: "2.3",
          title: "排列组合基础公式",
          kw: "排列 组合 有序 无序 阶乘 A(n,k) C(n,k) 加法原理 分类 乘法原理 分步",
          blocks: [
            {
              t: "list",
              ol: false,
              v: [
                "排列(有序): A =n k = n! / (n − k)!",
                "组合(无序): C =n k = n! / [k!(n − k)!]",
                "加法原理:分类相加、独立事件;乘法原理:分步相乘、关联事件"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "3",
      title: "算法优化与效率分析",
      sections: [
        {
          id: "3.1",
          title: "核心知识点汇总",
          kw: "复杂度 时间复杂度 空间复杂度 倍增 二进制拆分 贪心 状态压缩 DP优化 O(nlogn)",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "复杂度分析:时间复杂度、空间复杂度判定,常见复杂度等级O(1)、O(logn)、O(n)、O(nlogn)、O(n2)",
                "倍增思想:二进制拆分、快速幂为经典应用,大幅降低时间复杂度",
                "贪心优化:局部最优推全局最优,适配图论、区间问题",
                "状态压缩基础:二进制压缩状态,适配小规模DP优化"
              ]
            }
          ]
        },
        {
          id: "3.2",
          title: "算法复杂度核心结论",
          kw: "复杂度结论 循环嵌套 单层 双层 二分 倍增 O(logn) 排序 图遍历 滚动数组 空间优化",
          blocks: [
            {
              t: "list",
              ol: false,
              v: [
                "循环嵌套层数决定复杂度:单层O(n)、双层O(n2)",
                "二分、倍增类算法固定O(logn)",
                "排序、图遍历优化算法多为O(nlogn)",
                "空间优化核心:滚动数组、临时变量替代数组、动态内存释放"
              ]
            }
          ]
        }
      ]
    },
    {
      no: "4",
      title: "面向对象OOP进阶(封装核心)",
      sections: [
        {
          id: "4.1",
          title: "核心知识点汇总",
          kw: "封装 private public 访问权限 构造函数 析构函数 成员函数 类与对象 成员变量",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "封装特性:将数据与行为封装在类中,隐藏私有细节,暴露公有接口",
                "访问权限:private私有(类内访问)、public公有(全局访问)",
                "构造函数:创建对象自动调用,初始化成员变量,无返回值、与类名同名",
                "析构函数:对象销毁自动调用,释放内存资源",
                "成员函数:类内定义,操作类的成员变量"
              ]
            }
          ]
        },
        {
          id: "4.2",
          title: "8级标准OOP封装满分模板",
          kw: "OOP 封装 类 class Person private public 构造函数 showInfo setAge 实例化",
          blocks: [
            {
              t: "code",
              v: "#include <iostream>\n#include <cstring>\nusing namespace std;\n\n// 标准封装类\nclass Person {\nprivate:\n    // 私有成员:外部无法直接访问,封装核心\n    string name;\n    int age;\npublic:\n    // 构造函数\n    Person(string n, int a) {\n        name = n;\n        age = a;\n    }\n    // 成员函数:提供公有访问接口\n    void showInfo() {\n        cout << \"姓名: \" << name << \"年龄: \" << age << endl;\n    }\n    // 修改私有成员接口\n    void setAge(int a) {\n        if(a > 0) age = a;\n    }\n};\n\nint main() {\n    // 实例化对象\n    Person p(\"张三\", 15);\n    p.showInfo();\n    p.setAge(16);\n    p.showInfo();\n    return 0;\n}"
            }
          ]
        },
        {
          id: "4.3",
          title: "析构函数基础模板",
          kw: "析构函数 ~Person 对象销毁 释放动态内存 收尾 调用时机",
          blocks: [
            {
              t: "code",
              v: "~Person() {\n    // 释放动态内存、收尾操作\n    cout << \"对象销毁,调用析构函数 \" << endl;\n}"
            },
            { t: "note", v: "考级核心:8级重点考察封装思想,私有数据隐藏、公有接口访问,区分构造与析构函数的调用时机。" }
          ]
        }
      ]
    },
    {
      no: "5",
      title: "GESP8级考前必背满分模板(压轴核心)",
      sections: [
        {
          id: "5.1",
          title: "模板1:堆优化Dijkstra最短路模板",
          kw: "模板1 Dijkstra 堆优化 最短路 priority_queue 压轴 背诵",
          blocks: [
            {
              t: "code",
              v: "void dijkstra(int st, int n) {\n    memset(dis,0x3f,sizeof(dis));\n    memset(vis,0,sizeof(vis));\n    priority_queue<PII,vector<PII>,greater<PII>> q;\n    dis[st]=0;q.push({0,st});\n    while(!q.empty()){\n        auto now=q.top();q.pop();\n        int d=now.first,u=now.second;\n        if(vis[u])continue;vis[u]=1;\n        for(auto p:edge[u]){\n            int v=p.first,w=p.second;\n            if(dis[v]>d+w){\n                dis[v]=d+w;\n                q.push({dis[v],v});\n            }\n        }\n    }\n}"
            }
          ]
        },
        {
          id: "5.2",
          title: "模板2:Kruskal最小生成树+并查集模板",
          kw: "模板2 Kruskal 最小生成树 并查集 find cmp sort cnt n-1",
          blocks: [
            {
              t: "code",
              v: "int find(int x){\n    return fa[x]==x?x:fa[x]=find(fa[x]);\n}\nbool cmp(Edge a,Edge b){\n    return a.w<b.w;\n}\n// 主逻辑\nsort(e+1,e+1+m,cmp);\nint sum=0,cnt=0;\nfor(int i=1;i<=m;i++){\n    int fu=find(e[i].u),fv=find(e[i].v);\n    if(fu!=fv){\n        fa[fv]=fu;sum+=e[i].w;\n        if(++cnt==n-1)break;\n    }\n}"
            }
          ]
        },
        {
          id: "5.3",
          title: "模板3:Prim最小生成树核心逻辑",
          kw: "模板3 Prim 最小生成树 核心逻辑 minw pos dis vis INF",
          blocks: [
            {
              t: "code",
              v: "memset(dis,0x3f,sizeof(dis));\nfor(int i=1;i<=n;i++) dis[i]=g[1][i];\nvis[1]=1;int sum=0;\nfor(int i=2;i<=n;i++){\n    int minw=INF,pos=0;\n    for(int j=1;j<=n;j++)\n        if(!vis[j]&&dis[j]<minw) minw=dis[j],pos=j;\n    sum+=minw;vis[pos]=1;\n    for(int j=1;j<=n;j++)\n        if(!vis[j]) dis[j]=min(dis[j],g[pos][j]);\n}"
            }
          ]
        },
        {
          id: "5.4",
          title: "模板4:快速幂(倍增)万能模板",
          kw: "模板4 快速幂 倍增 万能模板 ll qpow res mod",
          blocks: [
            {
              t: "code",
              v: "typedef long long ll;\nll qpow(ll a,ll b,ll mod){\n    ll res=1;\n    while(b){\n        if(b&1) res=res*a%mod;\n        a=a*a%mod;\n        b>>=1;\n    }\n    return res;\n}"
            }
          ]
        },
        {
          id: "5.5",
          title: "模板5:OOP封装标准类模板",
          kw: "模板5 OOP 封装 标准类 ClassName private public 构造函数 成员函数",
          blocks: [
            {
              t: "code",
              v: "class ClassName{\nprivate:\n    // 私有成员变量\npublic:\n    // 构造函数\n    ClassName(){}\n    // 公有成员函数(访问 / 修改接口)\n};"
            }
          ]
        },
        {
          id: "5.6",
          title: "打印备考说明",
          kw: "打印 备考说明 专属完整版 满分写法 手写考试 上机编程 核心背诵",
          blocks: [
            {
              t: "list",
              ol: true,
              v: [
                "本文档为GESP8级专属完整版手册,全覆盖图论进阶、数学计数、算法优化、OOP封装全部考点。",
                "所有代码均为考级标准满分写法,无超纲内容,适配手写考试、上机编程双重场景。",
                "考前核心背诵:Dijkstra、Kruskal、快速幂、并查集、OOP封装模板(八级五大压轴考点)。"
              ]
            },
            { t: "note", v: "(注:部分内容由豆包AI生成)" }
          ]
        }
      ]
    }
  ]
};
