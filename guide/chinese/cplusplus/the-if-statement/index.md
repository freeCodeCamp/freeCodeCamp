---
title: C++ If Statement
localeTitle: C ++ If Statement
---# IF声明。

**if语句有什么作用？**

*   `if`语句计算括号内存在的测试表达式。
*   `if`语句使用关系运算符和逻辑运算符来生成逻辑表达式。

* * *

`if`语句的一般形式：

```cpp
  if (Test Expression / Condition) 
  { 
    // Block of statements if test expression is True 
  } 
```

如果测试表达式的值为**true** ，则为块 执行if语句中的代码。

如果测试表达式的值为**false** ，则为块 跳过if语句中的代码并继续执行代码。

示例`if`语句：

```cpp
  int a = 10; 
 
  // true statement 
  if (a < 20) 
  { 
    // execute this block of code 
  } 
 
  // false statement 
  if (a < 0) 
  { 
    // Skip this block of code. 
  } 
```

示例在C ++中：

```cpp
  // Program to check if number entered by the user is positive 
  // If negative, the block of code is skipped 
 
  #include <iostream> 
  using namespace std; 
 
  int main() 
  { 
    int no ; 
    cout << "Enter a number: "; 
    cin >> no; 
 
    // if statement to check if the number is positive 
    if ( no > 0) 
    { 
      cout << "You have entered a positive number: " << no << endl; 
    } 
 
    // If number is not positive, then if statement is skipped a program continues 
    cout << "This step is always printed" << endl; 
 
    return 0; 
  } 
```

**输出：**

输出1：
```
Enter a number: 5 
 You have entered a positive number: 5 
 This step is always printed 
 ``` 
 This is the output when the number entered is positive. 
 
 OUTPUT 2: 
```

输入一个数字：-1 始终打印此步骤 \`\`\` 这是输入数字为负数时的输出。

[亲自尝试一下代码吧！ :)](https://repl.it/Mg9X)

_祝贺。祝贺。这是关于IF声明的文章的结尾_

**祝大家好运**

**快乐的编码！ :)**

**随意在FreeCodeCamp的GitHub页面或[FreeCodeCamp的论坛](https://forum.freecodecamp.org/)上询问任何问题[。](https://forum.freecodecamp.org/)**