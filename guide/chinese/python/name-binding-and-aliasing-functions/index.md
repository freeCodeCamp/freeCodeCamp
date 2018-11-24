---
title: Python Name Binding and Aliasing Functions
localeTitle: Python名称绑定和别名函数
---
函数定义在当前符号表中引入函数名称。函数名称的值具有解释器将其识别为用户定义函数的类型。
```
>>> something = 1 
 >>> type(something) 
 <type 'int'> 
 >>> def something(): 
 ...     pass 
 ... 
 >>> type(something) 
 <type 'function'> 
 >>> something = [] 
 >>> type(something) 
 <type 'list'> 
```

此值可以分配给另一个名称，该名称也可以用作函数。这是一般的重命名机制：
```
>>> fib 
 <function fib at 10042ed0> 
 >>> f = fib 
 >>> f(100) 
 0 1 1 2 3 5 8 13 21 34 55 89 

```