---
title: Random Functions
localeTitle: 随机函数
---
*   随机数是将随机化引入程序的便捷方式。例如，如果你想运行任何模拟或玩游戏，删除数组的随机索引等，那么随机数就是要走的路。
*   要包含在c ++中使用随机数的头文件是`cstdlib` 。
*   _专业提示： -_您可以使用`cpp #include<bits/stdc++.h>`来包含所有头文件中的所有函数。

功能： - rand（）  
\- 返回从0到RAND _MAX_的伪随机数（整数） _。不接受任何争论。 - RAND_ MAX是允许的最大整数。它是编译器依赖，通常是2147483647。

以下是一个例子： -

```cpp
#include <cstdlib> 
 #include <iostream> 
 using namespace std; 
 
 int main() { 
  cout << rand() << endl; 
  cout << rand() << endl; 
  cout << rand() << endl; 
  return 0; 
 } 
 
 /* 
 Output:- (Note that the output is random and will differ from what is mentioned here) 
 1804289383 
 846930886 
 1681692777 
 */ 
```

现在，再次运行该程序。然后再次。然后再次。你看到了什么？ 一次又一次地打印相同的输出。

让我们回到rand（）函数的定义： -

rand（）： - _返回从0到RAND\_MAX的**伪随机**数（整数）。不接受任何争论。_

那么什么是伪随机数？

*   顾名思义，一个非真正随机的数字是伪随机数。
*   伪随机数不是加密安全的，容易受到攻击。
*   在C ++的上下文中，数字看起来是随机的，但不是真正随机的。该函数假定从0到RAND\_MAX的每个数字都具有相同的可能性并吐出一个数字。 （事实上​​， 事实并非如此，但它很接近）。例如，数字5几乎用于所有地方。如果随机数吐出5，您可能认为该数字不是随机的。
*   随机函数rand（）占用一个非常大的数字，通过一个大的素数应用模数，并对数字进行各种操作并返回一个值。无论多么复杂，它仍有可能打破它。

我们如何在每个程序执行时获得一组独特的随机数？

我们使用`void srand(int seed)` ;

*   “种子”是赋予一个数字的名称，使得随机序列生成器每次都在不同的起始点开始。这可确保随机函数在程序运行期间不会吐出相同的值。
*   **重要的是只在程序开始时调用sCE调用ONCE。**
*   不需要重复调​​用来播种随机数生成器（实际上，它会使您的数字不均匀 分散式）。
*   一种常用的技术是使用时钟为随机数生成器播种，因为每次看时它都会为您提供不同的输出。因此，对于种子，您可以获取时间输出并将其插入随机数生成器。
*   time（）函数将返回计算机的时间。这表示为数量 自1970年1月1日（大纪元）以来已经过去的秒数。
*   函数时间（NULL）将返回计算机时间内经过的秒数。
*   时间函数必须包含的头文件：\`ctime'。

代码段：

```cpp
#include <ctime> 
 
 srand(time(NULL)); 
 cout << rand(); 
 
 /* 
 Output: (Will differ from computer to computer, and because of the seed, will also differ from time to time, literally. :D) 
 1696269016 
 */ 
```

每次运行程序时，这会产生不同的值。

额外奖励：根据您的方便调整兰特（）。

*   由于rand（）返回一个从0到RAND\_MAX的随机数，如果你想要一个0到8之间的数字，那么 -rand（）％9。 任何模9的数字都将返回0到8之间的值。
    
*   更正式的是，如果你想要一个L（包括）和U（包括）之间的数字，你必须这样做 `int num = L + rand()%(U-L+1).` 说明： - rand（）％（UL + 1）返回0和（UL）的随机（伪随机，别忘记）数字。因此，添加L确保我们得到L和U之间的值。
    
    摘要：-
    

1.  int rand（）：返回0到RAND\_MAX之间的随机数。
    
2.  void srand（int seed）：用于为随机数生成器设定种子。仅调用此函数_一次_就足够了。
    
    ### 来源： - [随机数生成](http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/RandomFunctions)