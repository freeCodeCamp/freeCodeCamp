---
title: Error Handling
localeTitle: 错误处理
---
# C ++异常处理

例外是在执行程序期间出现的问题。例外提供了一种将控制从程序的一个部分转移到另一个部分的方法。 C ++异常处理基于三个关键字：＃try，#catch和#throw。

*   # throw - 当问题出现时，程序会抛出异常。这是使用throw关键字完成的。
    
*   # catch - 程序在您要处理问题的程序中的位置捕获异常处理程序的异常。 catch关键字表示捕获异常。
    
*   #try - try块标识将激活特定异常的代码块。接下来是一个或多个catch块。
    

```CPP
#include <iostream> 
 using namespace std; 
 
 int main() 
 { 
   int x = -1; 
 
   // Some code 
   cout << "Before try \n"; 
   try { 
      cout << "Inside try \n"; 
      if (x < 0) 
      { 
         throw x; 
         cout << "After throw (Never executed) \n"; 
      } 
   } 
   catch (int x ) { 
      cout << "Exception Caught \n"; 
   } 
 
   cout << "After catch (Will be executed) \n"; 
   return 0; 
 } 
```

# 在你继续之前......

## 回顾

*   错误类型的分组。
*   从正常代码中分离错误处理代码。
*   函数/方法可以处理他们选择的任何异常。