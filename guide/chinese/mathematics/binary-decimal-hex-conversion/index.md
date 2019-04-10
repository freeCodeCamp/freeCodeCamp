---
title: Binary Decimal Hexadecimal Conversion
localeTitle: 二进制十进制十六进制转换
---
# 转换：

您可以使用基于n的数字的定义轻松地将数字从一个基数转换为另一个基数，这需要您了解我们的位置系统如何工作： 让我们从两位数字开始，例如`12` 。为了获得它的10的基数值，我们需要将其单个数字乘以`10^n` ，其中n是从右边开始的数字位置并从0开始计数。然后我们简单地对所有值求和。 例如，将以这种方式获得`12`的base-10值：

\`\`\` 1 _（10 ^ 1）+ 2_ （10 ^ 0）= 10 + 2 = 12
```
This was obvious but what if you had a base-2 number and wanted to know its base-10 value? 
 First of all mind that a base n number only has `n` total symbols to represent its values. 
 In the binary base we have then just 2 (base-2) symbols: `1` and `0`. 
 Applying the procedure you have seen before you will be able to obtain a decimal number starting from a binary one like `101`: 
```

101 = 1 _（2 ^ 2）+ 0_ （2 ^ 1）+ 1 \*（2 ^ 0）= 4 + 0 + 1 = 5
```
In the same way a hexadecimal (base-16) number has 16 symbols to represent its values: `0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, A, B, C, D, E, F`. 
 Converting a base-16 number like `7AF` to a decimal will be easy then: 
```

7AF = 7 _（16 ^ 2）+ A_ （16 ^ 1）+ F _（16 ^ 0）= 7_ 256 + 10 _16 + 15_ 1 = 1967
```
What if you wished to convert a decimal number into a n-based number? 
 A common way to accomplish this is dividing the decimal number by the n base repeatedly. 
 Take note of all remainders, and when your quotient reaches 0 stop. 
 Now simply write all your remainders setting the last one as the most significant digit (your newly converted n-based number should have as last digit your first remainder). 
 EG: Let's convert the base-10 `12` to its base-2 value 
```

12/2 = 6，余数为0 6/2 = 3，余数为0 3/2 = 1，余数为1 1/2 = 0，余数为1

base-10 12 = base-2 1100 \`\`\` 现在使用上面写的第一个方法，您可以检查一切是否正常：

`1100 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 0*(2^0) = 8+4+0+0 = 12`

## 二进制十进制十六进制转换器

二进制，十进制和十六进制转换器它是一个工具，允许您转换在不同数字系统中表示的相应数字中的一个数字。允许的数字系统是`base-2` （二进制）， `base-10` （十进制），这是我们通常使用的数字和`base-16` （十六进制）。 网上有很多这样的工具：

*   [二进制十六进制转换器](www.binaryhexconverter.com/)
*   [计算器网站](http://www.calculator.net/) 通常科学计算器也包括基本转换工具，在MacOSX默认计算器中，您可以使用程序员视图按`Cmd+3`或在菜单`View->Programmer`下使用此功能。

### 你自己的转换器：

练习编程和完全理解数字转换的好主意是编写自己的在线转换工具。 如果您想了解有关此主题的更多信息，请查看[此维基百科条目](https://en.wikipedia.org/wiki/Positional_notation) 。