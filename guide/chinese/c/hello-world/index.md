---
title: Hello World C
localeTitle: Hello World C
---

## Hello, World

要在控制台上显示文字，您可以使用库`stdio.h`中的函数`printf()`

 ```C
 #include <stdio.h>

 int main(void)
 {

     printf("Hello, World!\n");  //这是注解...

     return 0;
 }
 ```

## 解释

*   #include是一个预处理器命令。该命令告诉编译器在程序中包含stdio.h（标准输入和输出）文件的内容。
*   stdio.h文件包含scanf()和print()等函数，分别用于输入和显示输出。
*   如果使用printf()函数而不编写#include <stdio.h>，该程序将不会编译。
*   C程序的执行从main()函数开始。
*   printf()是一个库函数，用于将格式化输出发送到屏幕。在这个程序中，printf()会在屏幕上显示Hello，World!文字。
*   return 0; 这行是程序的返回值。简单来说，程序以此声明结束。
    
## 输出：
 ```
 >Hello World!
 ```
