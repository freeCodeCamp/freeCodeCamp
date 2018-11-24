---
title: Python f-strings
localeTitle: Python f字符串
---
# Python中的f字符串

在Python 3.6版中，实现了一种格式化字符串的新方法。新方法称为文字字符串插值（通常称为f字符串）。

f-string的使用允许程序员以干净简洁的方式动态地将变量插入到字符串中。除了将变量插入字符串之外，此功能还为程序员提供了计算表达式，连接集合内容，甚至调用f字符串中的函数的能力。

要在f字符串中执行这些动态行为，我们将它们包装在字符串中的大括号内，并将小写字母f前置到字符串的开头（在开头引号之前）。

### 例子

1.  在运行时动态地将变量插入到字符串中：
    
    ```python
    name = 'Jon Snow' 
     greeting = f'Hello! {name}' 
     print(greeting) 
    
    ```
    
2.  评估字符串中的表达式： `python val1 = 2 val2 = 3 expr = f'The sum of {val1} + {val2} is {val1 + val2}' print(expr)`
    
3.  调用函数并在字符串中插入输出：
    
    ```python
    def sum(*args): 
        result = 0 
        for arg in args: 
            result += arg 
        return result 
     
     func = f'The sum of 3 + 5 is {sum(3, 5)}' 
     print(func) 
    
    ```
    
4.  在字符串中连接集合的内容：
    
    ```python
    fruits = ['Apple', 'Banana', 'Pear'] 
     
     list_str = f'List of fruits: {", ".join(fruits)}' 
     print(list_str) 
    
    ```
    

### 来源

https://www.python.org/dev/peps/pep-0498/