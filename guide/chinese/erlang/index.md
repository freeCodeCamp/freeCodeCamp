---
title: Erlang
localeTitle: 二郎神
---
## 二郎神

Erlang是一种函数式编程语言，由爱立信开发，用于电信应用。因为他们觉得电信系统有任何重大的停机时间是不可接受的，所以Erlang的构建是（除其他事项外）：

*   分布式和容错_（一块失败的软件或硬件不应该导致系统崩溃）_
*   并发_（它可以产生许多进程，每个进程执行一个小的，定义明确的工作，彼此隔离但能够通过消息进行通信）_
*   可热插拔_（代码可以在运行时交换到系统中，从而实现高可用性和最小的系统停机时间）_

### 句法

Erlang大量使用**递归** 。由于数据在Erlang中是不可变的，因此不允许使用`while`和`for`循环（变量需要不断更改其值）。

这是一个递归的例子，显示了一个函数如何重复地从名称前面剥离第一个字母并打印它，只在遇到最后一个字母时停止。

```erlang
-module(name). 
 
 -export([print_name/1]). 
 
 print_name([RemainingLetter | []]) -> 
  io:format("~c~n", [RemainingLetter]); 
 print_name([FirstLetter | RestOfName]) -> 
  io:format("~c~n", [FirstLetter]), 
  print_name(RestOfName). 
```

输出：
```
> name:print_name("Mike"). 
 M 
 i 
 k 
 e 
 ok 
```

还特别强调**模式匹配** ，这通常消除了对`if`结构或`case`语句的需要。在以下示例中，特定名称有两个匹配项，后跟任何其他名称的catch-all。

```erlang
-module(greeting). 
 
 -export([say_hello/1]). 
 
 say_hello("Mary") -> 
  "Welcome back Mary!"; 
 say_hello("Tom") -> 
  "Howdy Tom."; 
 say_hello(Name) -> 
  "Hello " ++ Name ++ ".". 
```

输出：
```
> greeting:say_hello("Mary"). 
 "Welcome back Mary!" 
 > greeting:say_hello("Tom"). 
 "Howdy Tom." 
 > greeting:say_hello("Beth"). 
 "Hello Beth." 
```

### 试试看

有些网站可以尝试运行Erlang命令而无需在本地安装任何东西，例如：

*   [试试看！ （动手教程）](http://www.tryerlang.org/)
*   [TutorialsPoint CodingGround](https://www.tutorialspoint.com/compile_erlang_online.php)

如果您想在您的（或虚拟）计算机上安装它，可以在[Erlang.org](https://www.erlang.org/downloads)或[Erlang Solutions](https://www.erlang-solutions.com/resources/download.html)上找到安装文件。

#### 更多信息：

*   [关于Erlang](https://www.erlang.org/about)
*   [向大家学习一些Erlang吧！](http://learnyousomeerlang.com/)
*   [产卵避难所！](http://spawnedshelter.com/) _（用于学习Erlang的文章，视频和书籍的集合）_
*   [Erlang（编程语言）](https://en.wikipedia.org/wiki/Erlang_(programming_language))