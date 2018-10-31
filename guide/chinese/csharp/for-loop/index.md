---
title: For Loop
localeTitle: 对于循环
---# 对于循环

for循环重复执行代码块，直到指定的条件表达式求值为false。

for循环剖析：
```
for (initialization; condition; iterator) 
 { 
    body 
 } 
```

*   初始化 - 初始化语句设置初始条件，并在进入循环体之前仅运行一次。
*   condition - 布尔表达式，用于确定循环体是应该再次执行还是循环应该退出。
*   iterator - 在循环体的每次迭代后执行。

### 例1
```
for (int i = 0; i < 5; i++) 
 { 
    Console.WriteLine("Number " + i); 
 } 
```

### 输出：
```
> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
```

### 例2
```
int j = 0; 
 for (int i = 0; j < 5; i++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
    j++; 
 } 
```

### 输出：
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### 实施例3-实施例2的简化
```
for (int i = 0, j = 0; i < 5 && j < 5; i++, j++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
 } 
```

### 输出：
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### 例4
```
for (int i = 5; i > 0; i--) 
 { 
    Console.WriteLine("Number " + i); 
 } 
```

### 输出：
```
> Number 5 
 > Number 4 
 > Number 3 
 > Number 2 
 > Number 1 
```

### 例5
```
// Infinite loop - The loop body is executed infinitely 
 for (; ;) 
 { 
    Console.WriteLine("The universe is infinite"); 
 } 
 
 // Anything after infinite loop is reported as "Unreachable code detected" in Visual Studio 
 Console.WriteLine("Never considered for execution"); 
```

### 输出：
```
> The universe is infinite 
 > The universe is infinite 
 > The universe is infinite 
 > .... 
 > .... 
```

### 例6
```
int i = 0; 
 for (; i < 5;) 
 { 
    Console.WriteLine("Number " + i); 
    i++; 
 } 
```

### 输出：
```
> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
```

### 其他资源

*   [Microsoft文档](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)

## 结束