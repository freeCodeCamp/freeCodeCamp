---
title: Python Ord Function
localeTitle: Python Ord函数
---
## Ord功能

`ord()`是Python 3中的内置函数，用于将表示一个Unicode字符的字符串转换为整数 表示字符的Unicode代码。

#### 例子：
```
>>> ord('d') 
 100 
 >>> ord('1') 
 49 
```

## chr功能

`chr()`是Python 3中的内置函数，用于转换整数 将Unicode代码表示为表示相应字符的字符串。

#### 例子：
```
>>> chr(49) 
 '1' 
```

有一点需要注意，如果传递给`chr()`的整数值超出范围，则会引发ValueError。
```
>>> chr(-10) 
 'Traceback (most recent call last): 
  File "<pyshell#24>", line 1, in <module> 
    chr(-1) 
 ValueError: chr() arg not in range(0x110000)' 

```