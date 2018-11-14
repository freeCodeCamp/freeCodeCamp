---
title: Break statement
localeTitle: 休息声明
---
# 休息声明

`break`语句终止它出现的封闭循环或switch语句。控件将传递给循环或开关块之后的语句。

在第一个例子中，当i的值为3时，执行break语句，这导致循环的执行被终止。

## 例
```
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if(i == 3) 
  { 
    break; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## 输出：
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
```

在第二个示例中，每个案例的末尾都包含一个break语句。这将执行案例中的语句，而不会继续下一个案例。如果没有break语句，程序将继续执行下一个案例，并且不会按预期运行。

## 例
```
switch (exampleVariable) 
 { 
    case 1: 
        Console.WriteLine("case 1"); 
        Console.WriteLine("This only shows in example 1"); 
        break; 
    case 2: 
        Console.WriteLine("case 2"); 
        Console.WriteLine("This only shows in example 2"); 
    Console.WriteLine("This also only shows in example 2"); 
        break; 
    Console.WriteLine("This would not show anywhere, as it is after the break line and before the next case"); 
    default: 
        Console.WriteLine("default"); 
        Console.WriteLine("This only shows in the Default Example"); 
        break; 
 } 
```

## 输出：
```
> case 1 
 > This only shows in example 1 
 > 
 > case  2 
 > This only shows in example 2 
 > This also only shows in example 2 
 > 
 > default 
 > This only shows in the Default Example 
 > 

```