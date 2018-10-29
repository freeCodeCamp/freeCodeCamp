---
title: Hello World C
localeTitle: Hello World C
---
＃＃ 你好，世界

要在控制台上编写，您可以使用库中`include <stdio.h>`的函数`printf()` `include <stdio.h>`

\`\`\`C ＃包括

int main（void） {
```
 printf("hello, world\n");  //lines starting with this are called comments.. 
 
 return 0; 
```

} \`\`\` ##解释

*   #include 是一个预处理器命令。该命令告诉编译器在程序中包含stdio.h（标准输入和输出）文件的内容。
    
*   stdio.h文件包含scanf（）和print（）等函数，分别用于输入和显示输出。
    
*   如果使用printf（）函数而不编写#include ，该程序将不会编译。
    
*   C程序的执行从main（）函数开始。
    
*   printf（）是一个库函数，用于将格式化输出发送到屏幕。在这个程序中，printf（）显示Hello，World！屏幕上的文字。
    
*   返回0; statement是程序的“退出状态”。简单来说，程序以此声明结束
    
    ## 输出：
    
    \`\`\`
    

> 你好，世界 \`\`\`