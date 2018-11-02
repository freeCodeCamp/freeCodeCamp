---
title: While-loop
localeTitle: undefined
---
只要给定条件为真，while循环语句就会重复执行目标语句。

句法： while（condition）{ 声明（S）; }

while循环的一个关键点是循环可能永远不会运行。 当测试条件并且结果为假时，将跳过循环体并且将执行while循环之后的第一个语句。

例：

```C++
#include <iostream>
 using namespace std;

 int main () {
   // Local variable declaration:
   int a = 10;

   // while loop execution
   while( a < 20 ) {
      cout << "value of a: " << a << endl;
      a++;
   }

   return 0;
 }
```

输出：

价值：10 价值：11 价值：12 价值a：13 a的值：14 价值a：15 价值：16 价值：17 价值：18 价值：19

### 来源

www.tutorialspoint.com