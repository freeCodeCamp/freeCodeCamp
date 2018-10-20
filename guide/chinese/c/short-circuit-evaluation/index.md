---
title: Short-Circuit Evaluation
localeTitle: 短路评估
---
# 短路评估

仅当第一个参数不足以确定表达式的值时，短路评估才包括检查或执行第二个参数。

您可以使用&&和||进行短路评估运营商。

## &&运算符的示例：

```c
  canOpenFile(filename) && openFile(filename); // If you can open the file then open it. 
```

上面的例子相当于：

```c
  if ( canOpenFile(filename) ) { 
    openFile(filename); 
  } 
```

## 示例包含||运营商：

```c
  isServerOn || startServer(); // If the server is not on then start it. 
 ``` 
 The example above is equivalent to: 
 
 ```c 
  if ( !isServerOn ) { 
    startServer(); 
  } 
 ``` 
 
 ## Keep it all together in real example 
 
 ```c 
 #include <stdio.h> 
 #include <stdlib.h> 
 
 char *getName(); 
 
 int main(int argc, char *argv[]) { 
    // Get first argument passed via terminal 
    char *name = argv[1]; 
 
    // If name is not passed via terminal then print message and then get the name 
    name || printf("Please give me your name:") && (name = getName()); 
 
    printf("Hello %s\n", name); 
 } 
 
 char *getName() { 
    // Allocate memory 
    char *name = malloc(30); 
 
    scanf("%s", name); 
    return name; 
 } 

```