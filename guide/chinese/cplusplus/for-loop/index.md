---
title: For Loop
localeTitle: 对于循环
---
For循环是一个重复语句，用于检查某些条件，然后根据条件重复执行代码块，直到满足指定条件。

for循环通过显式循环计数器或循环变量区别于其他循环语句，循环变量允许循环体知道每次迭代的精确排序。

因此，for循环是一种重复控制结构，允许您有效地编写需要执行特定次数的循环。

## 句法
```
for ( init; condition; increment ) { 
   statement(s); 
 } 
```

允许将增量放在for循环中，就像在while循环中一样。这意味着这样的语法也可以。
```
for ( init; condition;) { 
   statement(s); 
   increment; 
 } 
```

### 在里面

此步骤允许您声明和初始化任何循环控制变量。此步骤首先执行且仅执行一次。

### 条件

接下来评估条件。如果它成立，则执行循环体。如果它保持为false，则循环体不执行，控制流跳转到下一次迭代（重复进程）。

### 更新

update语句用于通过使用加法，减法，乘法或除法等简单操作来更改循环变量。 update语句在执行循环体之后执行。

## 实现：

```cpp
#include <iostream> 
 using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std:: 
 
 int main () { 
   // for loop execution 
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20 
      cout << "value of a: " << a << endl; 
   } 
 
   return 0; 
 }``` 
 
 Output: 
 value of a: 10 
 value of a: 11 
 value of a: 12 
 value of a: 13 
 value of a: 14 
 value of a: 15 
 value of a: 16 
 value of a: 17 
 value of a: 18 
 value of a: 19 
 
 ##Single lined loop 
 The body of the for loop need not be enclosed in braces if the loop iterates over only one satatement. 
 ##Example 
```

C ++ ＃包括 使用命名空间std;

int main（）{ //单行for循环 for（int a = 10; a <20; a = a + 1） cout <<“a的价值：”<< a << endl;

返回0; }\`\`\`

这将生成与前一个程序相同的输出。 即 输出： 价值：10 价值：11 价值：12 价值a：13 a的值：14 价值a：15 价值：16 价值：17 价值：18 价值：19
```
## Explanation 
 Here's the initialization condition is first set to a=10. The loop first checks for this condition. It then checks for the condition expression ie a<20 which holds true as 10<20(for the first case). Now the body of the loop is executed and we get the output "Value of a: 10". Then the update expression is executed which adds the number 1 to 'a' and the value of 'a' gets updated to 11 and the same steps are followed (as above) until the value of v reaches less than 20 ie 19. 
 
 # Range-based for-loop 
 C++ also has what we call range-based for loops which iterates through all the elements of a container(eg array). 
 
 ## Syntax 
```

for（element：container） 声明（S）; }

int \[5\] array = {1,2,3,4,5} for（int i：array） cout << i << endl; }

输出： 1 2 3 4 五 \`\`\`