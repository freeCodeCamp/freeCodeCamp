---
title: Return Statement
localeTitle: 退货声明
---
# 退货声明

`return`语句终止它出现的方法的执行，并将控制返回给调用方法。它可能会也可能不会返回值。

如果`return`语句在`try`块内并且如果有`finally`块，则控件被传递给`finally`块，之后它将返回到调用方法。

## 例
```
class Calc 
 { 
  static int Sum(int i, int j) 
  { 
    return i + j; 
  } 
 
  static void Main() 
  { 
    int a = 4; 
    int b = 3; 
    int sum = Sum(a, b); 
    Console.WriteLine($"The sum of {a} and {b} is {result}"); 
 
    // To keep the console from closing 
    Console.ReadLine(); 
  } 
 } 
```

## 输出：

\`\`\`

> 4和3的总和是7 \`\`