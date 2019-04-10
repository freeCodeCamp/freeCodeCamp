---
title: Indeterminate parameters
localeTitle: 不确定参数
---
# 不确定参数

让我们想象一下，我们需要编写一个参数数量可变的方法。我们怎么能这样做？好吧，C＃（和其他语言）有一个简单的方法;通过在方法的参数上使用`params`关键字，我们可以使用可变数量的参数调用该方法。

## 例
```
public static void Main (string[] args) { 
    // Call PrintParams with 3 parameters 
    PrintParams(1, 2, 3); 
 
    // Call PrintParams with 1 parameter 
    PrintParams(4); 
 } 
 
 public static void PrintParams(params int[] values) 
 { 
    // Iterate through parameters 
    for (int i = 0; i < values.Length; i++) 
    { 
        Console.WriteLine("Parameter {0} is {1}", i, values[i]); 
    } 
 } 
```

## 输出：
```
> Parameter 0 is 1 
 > Parameter 1 is 2 
 > Parameter 2 is 3 
 > Parameter 0 is 4 

```