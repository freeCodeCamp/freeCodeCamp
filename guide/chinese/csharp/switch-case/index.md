---
title: Switch Case
localeTitle: 开关盒
---
# 开关盒

Switch是一个选择语句，根据与要计算的表达式/值匹配的值选择switch case部分。 1如果case语句都不匹配switch变量的值，则选择默认路径。 switch语句就像一组`if statements` 。我们`break`从交换机退出。

## 例
```
public enum Colors { Red, Blue, Green, Orange } 
 
 Colors myColor; 
 
 ... myColor is set to one of the enum values ... 
 
 switch(myColor){ 
  case Colors.Red: 
    Console.WriteLine("How you like them apples?"); 
    break; 
  case Colors.Blue: 
    Console.WriteLine("Ice Ice Baby..."); 
    break; 
  case Colors.Green: 
    Console.WriteLine("Fore!"); 
    break; 
  default: 
    Console.WriteLine("I have a hard time when I try to rhyme."); 
 } 
```

## 产量
```
If myColor is Colors.Red: 
 > How you like them apples? 
 
 If myColor is Colors.Blue: 
 > Ice Ice Baby... 
 
 If myColor is Colors.Green: 
 > Fore! 
 
 If myColor is Colors.Orange: 
 > I have a hard time when I try to rhyme. 
```

### 资料来源：

*   1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch