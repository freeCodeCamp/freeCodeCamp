---
title: Python Defining Functions
localeTitle: Python定义函数
---
[Python文档](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

我们可以创建一个将Fibonacci系列写入任意边界的函数：
```
>>> def fib(n):    # write Fibonacci series up to n 
 ...     """Print a Fibonacci series up to n.""" 
 ...     a, b = 0, 1 
 ...     while a < n: 
 ...         print(a, end=' ') 
 ...         a, b = b, a+b 
 ...     print() 
 ... 
 >>> # Now call the function we just defined: 
 ... fib(2000) 
 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 
```

[`def`](https://docs.python.org/3/reference/compound_stmts.html#def)关键字引入了函数定义。它必须后跟函数名称和带括号的形式参数列表。构成函数体的语句从下一行开始，必须缩进。

函数体的第一个语句可以选择是字符串文字;此字符串文字是函数的文档字符串或[docstring](https://www.python.org/dev/peps/pep-0257/) （有关文档[字符串的](https://www.python.org/dev/peps/pep-0257/)更多信息，请参阅文档字符串部分）。有些工具使用文档字符串自动生成在线或印刷文档，或让用户以交互方式浏览代码。在你编写的代码中包含docstrings是一种很好的做法，所以尽量养成习惯。