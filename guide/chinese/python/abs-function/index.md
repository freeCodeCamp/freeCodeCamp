---
title: Python Abs Function
localeTitle: Python Abs函数
---
`abs()`是Python 3中的内置函数，用于计算任何数字的绝对值。数字的绝对值“仅表示数字与0之间的距离” 1它需要一个参数`x` 。参数甚至可以是一个[复数](https://docs.python.org/3.0/library/cmath.html) ，在这种情况下，它的[模数](http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf)被返回。

## 论据

它需要一个参数`x` - 一个整数，或十进制，或一个复数。

## 回报价值

返回值为正数。即使传递了复数，也会返回其大小，按复数代数计算。

## 代码示例

```python
print(abs(3.4)) # prints 3.4 
 print(abs(-6)) # prints 6 
 print(abs(3 + 4j)) # prints 5, because |3 + 4j| = 5 
```

[🚀运行代码](https://repl.it/CL8k/0)

[官方文件](https://docs.python.org/3/library/functions.html#abs)

### 来源

1.  [数学很有趣。访问时间：2017年10月25日](https://www.mathsisfun.com/numbers/absolute-value.html)