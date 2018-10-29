---
title: Python Powxy
localeTitle: Python Powxy
---
`pow(x, y, z)`是Python 3中的内置函数，用于计算`x`到幂`y` ，如果`z`存在，则将`x`返回到幂`y` [modulo](https://processing.org/reference/modulo.html) `z` 。

## 参数

参数必须具有数字类型。 该函数有两个参数， `x`和`y` ，以及三个， `x` ， `y`和`z` 。 如果存在`z` ，则`x`和`y`必须是整数类型，y必须是非负的。

## 返回

如果`z`存在，它返回`x`的电源`y`模`z` 。如果仅存在`x`和`y` ，则将`x`返回到幂`y` （与`x**y`相同）。

## 例

```python
print(pow(2,4))    # prints 16 
 print(pow(10,-2))  # prints 0.01 
 print(pow(4,3,5))  # prints 4 
```

[🚀运行代码](https://repl.it/CTGi)

[官方文件](https://docs.python.org/3/library/functions.html#pow)