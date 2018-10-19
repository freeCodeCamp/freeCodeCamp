---
title: If-Else Statement
localeTitle: If-Else声明
---## If-Else声明有什么作用？

*   If-Else语句是简单If语句的扩展。
*   在简单的If语句中，如果测试表达式的值为false，那么我们跳过块的代码并继续我们的下一个语句。
*   但很多时候，如果test表达式的值为false，我们希望执行某些步骤。
*   在这种情况下，我们使用if-else语句。

### If-Else声明的一般形式

```cpp
if (test expression) 
 { 
  //statements that run if the test expression is true 
 } 
 else 
 { 
  //statements that run if the test expression is false 
 } 
```

### If-Else语句的示例

如果test表达式为true：

```cpp
int a=10; 
 if (a < 20) // This expression is true, so... 
 { 
  //...the code in this block gets executed, and... 
 } 
 else 
 { 
  //...the code in this block gets skipped. 
 } 
 //program continues 
```

如果test表达式为false：

```cpp
int a=10; 
 if (a>20) // This expression is false, so this time... 
 { 
  //...this code gets skipped... 
 } 
 else 
 { 
  //...and this code executes instead. 
 } 
 //program continues 
```

### C ++中的示例：

```cpp
//Program to check whether number entered by user is positive or negative 
 #include <iostream> 
 using namespace std; 
 int main() 
 { 
  int no; 
  cout << "Enter a number: " << endl; 
 
  cin >> no; 
 
  // condition to check if number is positive or negative 
  if (no >= 0) // positive 
  { 
    // block if value is true 
    cout << "You entered a positive number: " << no << endl; 
  } 
  else         // negative 
  { 
    // block if value is false 
    cout << "You entered a negative number: " << no << endl; 
  } 
 
  // program continues 
  cout << "This step is always printed" << endl; 
  return 0; 
 } 
```

#### 产量

*   输入正数时：
```
Enter a number: 
 4 
 You entered a positive number: 4 
 This step is always printed 
```

*   输入负数时：
```
Enter a number: 
 -200 
 You entered a negative number: -200 
 This step is always printed 
```

[亲自尝试一下代码](https://repl.it/MzBq)

# **随意在FreeCodeCamp的GitHub页面或[FreeCodeCamp的论坛](https://forum.freecodecamp.org/)上询问任何问题[。](https://forum.freecodecamp.org/)**

[亲自尝试一下代码](https://repl.it/MzBq)

### 使用if ... else if ... else梯形图

如果我们必须使用if else基于多个条件做出决策。如果条件如下，我们使用其他 -

```cpp
#include<iostream> 
 int main() 
 { 
    int score; 
    std::cout<<"Enter your score: \n"; 
    std::cin>>score; 
    if(score>=90) 
        std::cout<<"Top performance."; 
    else if(score<90 && score>=70) 
        std::cout<<"Good performance"; 
    else if(score<70 && score>=45) 
        std::cout<<"Average performance"; 
    else if(score<45 && score>=30) 
        std::cout<<"You can improve it."; 
   return 0; 
 } 
```

#### 产量
```
Enter your score: 
 85 
 Good performance 
```

### if ... else if ... else ladder的另一个例子

假设我们有用户输入两个数字，我们将显示两个数字是否大于另一个数字。如果两者都不大于另一个，那么我们打印声明“两者都是平等的”。

在这个scinerio中，我们需要一个if ... else if ... else梯形图。该程序将如下所示：
```
#include<iostream> 
 using namespace std; 
 int main() 
 { 
    int number1,number2; 
    cout << "Enter first number: \n"; 
    cin >> number1; 
    cout << "Enter second number: \n"; 
    cin >> number2; 
 
    if(number1 > number2)     // Checks if the first number is greater than the second number 
    { 
        cout << "Number 1 is greater."; 
    } 
    else if(number2 > number1)    // Checks if the second number is greater than the first number 
    { 
        cout << "Number 2 is greater."; 
    } 
    else    // If both of the above cases return false, then both numbers are equal 
    { 
        cout << "Both the numbers are equal."; 
    } 
 
    return 0; 
 } 
```

#### 产量
```
Enter first number: 
 85 
 Enter second number: 
 86 
 Number 2 is greater. 
```

*   请注意，只有在不满足初始“if”条件时，程序才会检查“else if”条件。如果这些条件都不满足，则执行最后一个'else'块，打印语句：“两个数字相等。”。
    
*   if ... else if ... else梯形图的大小可能会有所不同，具体取决于程序试图解决的问题以及需要检查的条件数。
    

**祝大家好运**

**快乐的编码！ :)**

**欢迎在freeCodeCamp.org的GitHub页面或[freeCodeCamp.org论坛](https://forum.freecodecamp.org/)上询问任何问题** 。