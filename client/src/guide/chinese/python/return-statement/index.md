---
title: Python Return Statement
localeTitle: Python返回声明
---
[Python文档](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)

调用时，所有函数都返回一个值。

如果返回语句后跟表达式列表，则计算该表达式列表并返回值：
```
>>> def greater_than_1(n): 
 ...     return n > 1 
 ... 
 >>> print(greater_than_1(1)) 
 False 
 >>> print(greater_than_1(2)) 
 True 
```

如果未指定表达式列表，则返回`None` ：
```
>>> def no_expression_list(): 
 ...     return    # No return expression list. 
 ... 
 >>> print(no_expression_list()) 
 None 
```

如果在执行函数期间达到return语句，则当前函数调用将保留在该点：
```
>>> def return_middle(): 
 ...     a = 1 
 ...     return a 
 ...     a = 2     # This assignment is never reached. 
 ... 
 >>> print(return_middle()) 
 1 
```

如果没有return语句，则函数到达结尾时返回None：
```
>>> def no_return(): 
 ...     pass     # No return statement. 
 ... 
 >>> print(no_return()) 
 None 
```

单个函数可以有多个`return`语句。当达到以下`return`语句之一时，函数的执行结束：
```
 >>> def multiple_returns(n): 
 ...    if(n): 
 ...        return "First Return Statement" 
 ...    else: 
 ...        return "Second Return Statement" 
 ... 
 >>> print(multiple_returns(True)) 
 First Return Statement 
 >>> print(multiple_returns(False)) 
 Second Return Statement 
```

单个函数可以返回各种类型：
```
 >>> def various_return_types(n): 
 ...     if(n==1): 
 ...         return "Hello World."   # Return a string 
 ...     elif(n==2): 
 ...         return 42               # Return a value 
 ...     else: 
 ...         return True             # Return a boolean 
 ... 
 >>> print(various_return_types(1)) 
 Hello World. 
 >>> print(various_return_types(2)) 
 42 
 >>> print(various_return_types(3)) 
 True 
```

甚至可以让单个函数返回多个值，只返回一个：
```
 >>> def return_two_values(): 
 ...     a = 40 
 ...     b = 2 
 ...     return a,b 
 ... 
 >>> print("First value = %d,  Second value = %d" %(return_two_values())) 
 First value = 40,  Second value = 2 

```