---
title: Converting Integer to String in Python
localeTitle: 在Python中将整数转换为字符串
---
## 在Python中将整数转换为字符串

与许多其他语言不同，Python在与字符串连接时不会隐式地将整数（或浮点数）强制转换为字符串。幸运的是，Python有一个方便的内置函数`str()` ，它将传入的参数转换为字符串格式。

#### 错误的方法

来自其他语言的程序员可能会尝试执行以下字符串连接，从而产生错误：

```py
age = 18 
 
 string = "Hello, I am " + age + " years old" 
```

[在repl.it上运行代码](https://repl.it/JyYH/0)

显示的错误是
```
Traceback (most recent call last): 
  File "python", line 3, in <module> 
 TypeError: must be str, not int 
```

`TypeError: must be str, not int`表示必须首先将整数转换为要连接的字符串。

#### 正确的方式

简单连接示例：

```py
age = 18 
 
 print("Hello, I am " + str(age) + " years old") 
 
 # Output 
 # Hello, I am 18 years old 
```

[在repl.it上运行代码](https://repl.it/Jz8Q/0)

使用单个字符串打印`1 2 3 4 5 6 7 8 9 10`

```py
result = "" 
 
 for i in range(1, 11): 
    result += str(i) + " " 
 
 print(result) 
 
 # Output 
 # 1 2 3 4 5 6 7 8 9 10 
```

[在repl.it上运行代码](https://repl.it/KBLB/0)

#### 逐行解释上面的代码

1.  首先，将变量“result”分配给空字符串。
2.  For循环用于遍历数字列表。
3.  使用范围功能生成此数字列表。
4.  所以range（1,11）将生成一个从1到10的数字列表。
5.  在每个for循环迭代中，这个'i'变量将占用1到10之间的值。
6.  在变量i = 1的第一次迭代时，则变量\[result = result + str（i）+“（空格字符）”\]，str（i）将作为整数值的'i'转换为字符串值。
7.  由于i = 1，在第一次迭代时最终结果= 1。
8.  并且相同的过程一直持续到i = 10并且最后在最后一次迭代之后结果= 1 2 3 4 5 6 7 8 9 10。
9.  因此，当我们最终在for循环后打印结果时，控制台上的输出为'1 2 3 4 5 6 7 8 9 10'。

#### 更多信息：

[`str()`官方Python文档](https://docs.python.org/3/library/stdtypes.html#str)