---
title: Enumerations
localeTitle: 枚举
---
# 枚举

枚举是一组使用`enum`关键字声明的命名整数常量。

## 例
```
enum Gender 
 { 
  Male, 
  Female 
 } 
```

默认情况下，对于每个枚举名称，整数值从0开始并增加1，即Male = 0，Female = 1等。

可以通过为任何枚举名称指定整数值来覆盖这些。

## 例
```
enum Gender 
 { 
  Male = 1, 
  Female 
 } 
```

在这种情况下，整数值将从1开始并从那里开始增加。

要使用枚举，您可以声明其类型的变量并为其赋值：

`Gender myVar = Gender.Male;`

您还可以将枚举名称值强制转换为基础整数值，反之亦然：
```
Console.WriteLine($"Male: {(int)Gender.Male}"); 
 Console.WriteLine($"Female: {(int)Gender.Female}"); 
```

## 输出：
```
Male: 1 
 Female: 2 

```