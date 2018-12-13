---
title: If
localeTitle: 如果
---
# 如果

if语句根据条件执行不同的代码块。
```
if (condition) { 
    // Do something when `condition` is true 
 } 
 else { 
    // Do something when `condition` is false 
 } 
```

当`condition`为真，代码里面`if`部分执行，否则`else`执行。有时您需要添加第二个条件。为了便于阅读，您应该使用`else if`而不是嵌套`if`语句。
```
if (condition) { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) { 
    // Do something if `anotherCondition` is ture 
 } 
 else { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

请注意， `else`和`else if`部分不是必需的，而`if`是必需的。

## 例
```
#include <stdio.h> 
 
 int main () { 
 
   // Local variable definition 
   int a = 100; 
 
   // Check the boolean condition 
   if(a < 5) { 
      // If condition is true then print the following 
      printf("a is less than 5!\n" ); 
   } 
   else { 
      // If condition is false then print the following 
      printf("a is not less than 5!\n" ); 
   } 
 
   printf("Value of a is : %d\n", a); 
 
   return 0; 
 } 
```

## 产量
```
-> a is not less than 5! 
 -> Value of a is : 100 

```
