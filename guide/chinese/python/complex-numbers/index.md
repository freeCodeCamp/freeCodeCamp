---
title: Python Complex Numbers
localeTitle: Python复杂数字
---
复数具有实部和虚部，每个部分由浮点数表示。

可以使用虚构的文字创建复数的虚部，这会产生一个复数，其实部为`0.0` ：

```python
>>> a = 3.5j 
 >>> type(a) 
 <class 'complex'> 
 >>> print(a) 
 3.5j 
 >>> a.real 
 0.0 
 >>> a.imag 
 3.5 
```

不存在用于创建具有非零实部和虚部的复数的文字。要创建非零实部复数，请将虚构文字添加到浮点数：

```python
>>> a = 1.1 + 3.5j 
 >>> type(a) 
 <class 'complex'> 
 >>> print(a) 
 (1.1+3.5j) 
 >>> a.real 
 1.1 
 >>> a.imag 
 3.5 
```

或者使用[复杂的构造函数](https://docs.python.org/3/library/functions.html#complex) 。

```python
class complex([real[, imag]]) 
```

用于调用复杂构造函数的参数可以是任一参数的数字（包括`complex` ）类型：

```python
>>> complex(1, 1) 
 (1+1j) 
 >>> complex(1j, 1j) 
 (-1+1j) 
 >>> complex(1.1, 3.5) 
 (1.1+3.5j) 
 >>> complex(1.1) 
 (1.1+0j) 
 >>> complex(0, 3.5) 
 3.5j 
```

`string`也可以用作参数。如果将字符串用作参数，则不允许使用第二个参数

```python
>>> complex("1.1+3.5j") 
 (1.1+3.5j) 

```