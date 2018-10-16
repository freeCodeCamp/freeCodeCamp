---
title: Python Floating Point Numbers
localeTitle: Python浮点数
---
有关浮点数的一般信息以及它们如何在Python中工作，可以在[这里](https://docs.python.org/3/tutorial/floatingpoint.html)找到。

几乎所有Python的实现都遵循IEEE 754规范：二进制浮点运算标准。更多信息可在[IEEE网站](http://grouper.ieee.org/groups/754/)上找到。

可以使用[浮点文字](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals)创建浮动对象：
```
>>> 3.14 
 3.14 
 >>> 314\.    # Trailing zero(s) not required. 
 314.0 
 >>> .314    # Leading zero(s) not required. 
 0.314 
 >>> 3e0 
 3.0 
 >>> 3E0     # 'e' or 'E' can be used. 
 3.0 
 >>> 3e1     # Positive value after e moves the decimal to the right. 
 30.0 
 >>> 3e-1    # Negative value after e moves the decimal to the left. 
 0.3 
 >>> 3.14e+2 # '+' not required but can be used for exponent part. 
 314.0 
```

数字文字不包含符号，但是可以通过在文字前面没有空格的一元`-` （减号）运算符作为前缀来创建负浮点对象。
```
>>> -3.141592653589793 
 -3.141592653589793 
 >>> type(-3.141592653589793) 
 <class 'float'> 
```

同样，正浮点对象可以使用一元`+ (`加号）运算符作为前缀，在文字前没有空格。通常`+`省略：
```
>>> +3.141592653589793 
 3.141592653589793 
```

请注意，前导零和尾随零对浮点文字有效
```
>>> 0.0 
 0.0 
 >>> 00.00 
 0.0 
 >>> 00100.00100 
 100.001 
 >>> 001e0010      # Same as 1e10 
 10000000000.0 
```

[`float`构造函数](https://docs.python.org/3/library/functions.html#float)是另一种创建`float`对象的方法。

在可能的情况下，首选创建具有浮点文字的`float`对象：
```
>>> a = 3.14         # Prefer floating point literal when possible. 
 >>> type(a) 
 <class 'float'> 
 >>> b = int(3.14)    # Works but unnecessary. 
 >>> type(b) 
 <class 'float'> 
```

但是，float构造函数允许从其他数字类型创建float对象：
```
>>> a = 4 
 >>> type(a) 
 <class 'int'> 
 >>> print(a) 
 4 
 >>> b = float(4) 
 >>> type(b) 
 <class 'float'> 
 >>> print(b) 
 4.0 
 >>> float(400000000000000000000000000000000) 
 4e+32 
 >>> float(.00000000000000000000000000000004) 
 4e-32 
 >>> float(True) 
 1.0 
 >>> float(False) 
 0.0 
```

`float`构造函数还将从表示数字文字的字符串中创建`float`对象：
```
>>> float('1') 
 1.0 
 >>> float('.1') 
 0.1 
 >>> float('3.') 
 3.0 
 >>> float('1e-3') 
 0.001 
 >>> float('3.14') 
 3.14 
 >>> float('-.15e-2') 
 -0.0015 
```

`float`构造函数也可用于表示`NaN` （非数字），负`infinity`和`infinity`数字表示（注意这些字符串不区分大小写）：
```
>>> float('nan') 
 nan 
 >>> float('inf') 
 inf 
 >>> float('-inf') 
 -inf 
 >>> float('infinity') 
 inf 
 >>> float('-infinity') 
 -inf 

```