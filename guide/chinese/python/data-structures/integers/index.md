---
title: Python Integers
localeTitle: Python整数
---
python中整数的理论域是负无穷大到无穷大。实际上，整数值受可用内存量的限制。

在Python 2中， **`int`** ，数字适合32或64位_C长_ ，而**`long`**数字受可用内存限制。 Python 3将这两种类型统一为**`int`** ，更多信息在[PEP 237中](https://www.python.org/dev/peps/pep-0237/) 。

**使用整数文字创建`int`**

[整数文字](https://docs.python.org/3/reference/lexical_analysis.html#integer-literals)

可以使用整数文字创建_整数对象_ 。没有小数的简单数字是整数文字：
```
>>> 1234567890           # Unadorned numbers are integer literals 
 1234567890 
 >>> type(1234567890) 
 <class 'int'> 
```

数字文字不包含符号，但是可以通过在文字前面没有空格的一元`-` （减号）运算符作为前缀来创建负_整数对象_ ：
```
>>> -1234567890 
 -1234567890 
 >>> type(-1234567890) 
 <class 'int'> 
```

同样，可以通过在一元`+` （加号）运算符前面添加数字之前没有空格来创建正整数对象。通常`+`被忽略：
```
>>> +1234 
 1234 
```

二进制（基数2，前缀： `0b`或`0B` ），八进制（基数8，前缀： `0o`或`0O` ）和十六进制（基数16，前缀： `0x`或`0X` ）整数也可以使用整数文字创建：
```
>>> 0b1, 0b10, 0b11 
 (1, 2, 3) 
 >>> 0o1, 0o10, 0o11 
 (1, 8, 9) 
 >>> 0x1, 0x10, 0x11 
 (1, 16, 17) 
```

请注意， **不允许使用**前导0表示非零整数文字：
```
>>> 0     # Zero by itself is okay. 
 0 
 >>> 01    # Leading zero(s) cause SyntaxError. 
  File "<stdin>", line 1 
    01 
     ^ 
 SyntaxError: invalid token 
```

`int` [构造函数](https://docs.python.org/3/library/functions.html#int)是另一种创建_整数对象的方法_ 。
```
class int(x=0) 
 class int(x, base=10) 
```

在可能的情况下，首选创建具有整数文字的_整数对象_ ：
```
>>> a = 1         # Prefer integer literal when possible. 
 >>> type(a) 
 <class 'int'> 
 >>> b = int(1)    # Works but unnecessary. 
 >>> type(b) 
 <class 'int'> 
```

但是，构造函数允许从其他数字类型创建_整数对象_ ：
```
>>> a = 1.123 
 >>> type(a) 
 <class 'float'> 
 >>> print(a) 
 1.123 
 >>> b = int(1.123) 
 >>> type(b) 
 <class 'int'> 
 >>> print(b) 
 1 
```

对浮点数使用`int`构造函数会将数字截断为零：
```
>>> int(-1.23) 
 -1 
 >>> int(1.23) 
 1 
```

内置的`boolean`常量是`bool`类的实例，并且是`int`类的子类，使它们成为一种数字类型：
```
>>> type(True) 
 <class 'bool'> 
 >>> issubclass(bool, int) 
 True 
```

如果这对你没有意义，请不要担心。现在只记得用`boolean`对象调用int构造函数将返回_整数对象_ ：
```
>>> int(True) 
 1 
 >>> int(False) 
 0 
```

`int`构造函数还将从字符串中生成_整数对象_ ：
```
>>> a = "10" 
 >>> type(a) 
 <class 'str'> 
 >>> b = int("10") 
 >>> type(b) 
 <class 'int'> 
```

`int`构造函数的_字符串_必须表示整数文字：

`int`构造函数的第二个参数是指定一个base（默认值：10）。有效基数为0和2-36。

如果提供了显式基数，则第一个参数必须是字符串。
```
>>> int("111", 2) 
 7 
 >>> int(111, 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: int() can't convert non-string with explicit base 
```

用于具有显式基础的`int`构造函数的字符串必须是该基数的有效整数文字：
```
>>> int('11', 2) 
 3 
 >>> int('12', 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: invalid literal for int() with base 2: '12' 
```

可以使用前缀和非前缀的整数文字字符串，但是，如果使用，前缀必须与提供的基数匹配。
```
>>> int('1101', 2) 
 13 
 >>> int('0b1101', 2) 
 13 
 >>> int('0x1101', 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: invalid literal for int() with base 2: '0x1101' 
```

如果使用带前缀的字符串和基数0，则创建的整数对象将使用前缀指定的基数。如果没有使用前缀，则假定基数为10
```
>>> int('100', 0) 
 100 
 >>> int('0b100', 0) 
 4 
 >>> int('0o100', 0) 
 64 

```