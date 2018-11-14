---
title: Python Boolean Operations
localeTitle: Python布尔运算
---
[`and`](https://docs.python.org/3/reference/expressions.html#and) ， [`or`](https://docs.python.org/3/reference/expressions.html#or) ， [`not`](https://docs.python.org/3/reference/expressions.html#not)

[Python Docs - 布尔运算](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

这些是布尔运算，按升序排序：

操作|结果|笔记  
\--------- | ------------------------------------ | -----  
x或y |如果x为假，则为y，否则为x | （1）  
x和y |如果x为假，则为x，否则为y | （2）  
不是x |如果x为假，则为True，否则为False | （3）

**笔记：**

1.  这是一个短路运算符，因此只有在第一个参数为False时才会计算第二个参数。
2.  这是一个短路操作符，因此只有在第一个参数为True时才会计算第二个参数。
3.  没有比非布尔运算符更低的优先级，因此不是a == b被解释为不是（a == b），而a ==不是b是语法错误。

## 例子：

### `not` ：
```
>>> not True 
 False 
 >>> not False 
 True 
```

### `and` ：
```
>>> True and False    # Short-circuited at first argument. 
 False 
 >>> False and True    # Second argument is evaluated. 
 False 
 >>> True and True     # Second argument is evaluated. 
 True 
```

### `or` ：
```
>>> True or False    # Short-circuited at first argument. 
 True 
 >>> False or True    # Second argument is evaluated. 
 True 
 >>> False or False   # Second argument is evaluated. 
 False 

```