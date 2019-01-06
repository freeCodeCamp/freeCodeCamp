---
title: For Loop
localeTitle: For循环
---
# For循环

`for`循环执行代码块，直到指定的条件为false。当迭代次数可变时使用`while`循环，否则使用`for`循环。 `for`循环的常见用途是数组迭代。

## For循环的语法

```c
for(init; condition; increment){ 
   statement(s); 
 } 
```

`for`循环由3个部分组成，初始化部分，特定条件和增量或减量操作部分。这3个部分控制`for`循环。

初始化语句只执行一次。然后，评估测试表达式。如果测试表达式为假（0），则for循环终止。但是如果测试表达式为真（非零），则执行for循环体内的代码并更新更新表达式。重复此过程直到测试表达式为假。

当迭代次数已知时，通常使用for循环。

## 例

```c
#include <stdio.h> 
 
 int main () { 
 
    int array[] = {1, 2, 3, 4, 5}; 
 
    for (int i = 0; i < 5; i++) { 
        printf("Item on index %d is %d\n", i, array[i]); 
    } 
 } 
```

## 输出：

```shell
> Item on index 0 is 1 
> Item on index 1 is 2 
> Item on index 2 is 3 
> Item on index 3 is 4 

```
