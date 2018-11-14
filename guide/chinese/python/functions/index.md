---
title: Functions
localeTitle: 功能
---
## 功能

函数允许您定义可在程序中多次执行的可重用代码块。

功能允许您为复杂问题创建更多模块化和[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)解决方案。

虽然Python已经提供了许多内置函数，例如`print()`和`len()` ，但您也可以定义自己的函数以在项目中使用。

在代码中使用函数的一大优势是它减少了项目中代码行的总数。

### 句法

在Python中，函数定义具有以下功能：

1.  关键字`def`
2.  一个功能名称
3.  paranthesis'（）'，并在paranthesis输入参数内，尽管输入参数是可选的。
4.  冒号'：'
5.  一些要执行的代码块
6.  返回语句（可选）

```python
# a function with no parameters or returned values 
 def sayHello(): 
  print("Hello!") 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 def helloWithName(name): 
  print("Hello " + name + "!") 
 
 helloWithName("Ada")  # calls the function, 'Hello Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 def multiply(val1, val2): 
  return val1 * val2 
 
 multiply(3, 5)  # prints 15 to the console 
```

函数是代码块，只需调用函数即可重用。这样可以实现简单，优雅的代码重用，而无需显式重写代码段。这使代码更易读，使调试更容易，并限制输入错误。

Python中的函数是使用`def`关键字创建的，后跟括号内的函数名和函数参数。

函数总是返回一个值，函数使用`return`关键字返回一个值，如果你不想返回任何值，则返回默认值`None` 。

函数名称用于调用函数，在括号内传递所需的参数。

```python
# this is a basic sum function 
 def sum(a, b): 
  return a + b 
 
 result = sum(1, 2) 
 # result = 3 
```

您可以为参数定义默认值，这样Python将解释该参数的值是默认值，如果没有给出。

```python
def sum(a, b=3): 
  return a + b 
 
 result = sum(1) 
 # result = 4 
```

您可以使用参数名称按所需顺序传递参数。

```python
result = sum(b=2, a=2) 
 # result = 4 
```

但是，无法在非关键字参数之前传递关键字参数

```Python
result = sum(3, b=2) 
 #result = 5 
 result2 = sum(b=2, 3) 
 #Will raise SyntaxError 
```

函数也是对象，因此您可以将它们分配给变量，并像函数一样使用该变量。

```python
s = sum 
 result = s(1, 2) 
 # result = 3 
```

### 笔记

*   如果函数定义包含参数，则在调用函数时必须提供相同数量的参数。
    
    ```python
    print(multiply(3))  # TypeError: multiply() takes exactly 2 arguments (0 given) 
     
     print(multiply('a', 5))  # 'aaaaa' printed to the console 
     
     print(multiply('a', 'b'))  # TypeError: Python can't multiply two strings 
    
    ```
    
*   函数将运行的代码块包括函数内缩进的所有语句。
    
    ```python
    def myFunc(): 
     print('this will print') 
     print('so will this') 
     
     x = 7 
     # the assignment of x is not a part of the function since it is not indented 
    
    ```
    
*   函数中定义的变量仅存在于该函数的范围内。
    
    ```python
    def double(num): 
     x = num * 2 
     return x 
     
     print(x)  # error - x is not defined 
     print(double(4))  # prints 8 
    
    ```
    
    \-Python仅在调用函数时解释函数块，而不是在定义函数时解释函数块。即使函数定义块包含某种错误，python解释器也只会在函数被调用时指出。
    

### 更多信息：

*   [Python 3 Docs：定义函数](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)