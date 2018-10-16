---
title: How to Convert Strings into Integers in Python
localeTitle: 如何在Python中将字符串转换为整数
---
## 如何在Python中将字符串转换为整数

就像内置的`str()`一样，Python也提供了一个方便的内置函数，它将一个字符串对象作为参数并返回相应的整数对象。

#### 用法示例：

```py
# Here age is a string object 
 age = "18" 
 print(age) 
 # Converting string to integer 
 int_age = int(age) 
 print(int_age) 
```

产量

```py
18 
 18 
```

虽然输出在视觉上类似，但你应该记住，第一行打印一个字符串对象，而它旁边的行打印一个整数对象，这将在下一个例子中进一步说明：

```py
age = "18" 
 print(age+2) 
```

输出：

```py
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: cannot concatenate 'str' and 'int' objects 
```

`The error should make it clear to you that you need to convert the`向其添加内容之前 `The error should make it clear to you that you need to convert the` age\`对象 `The error should make it clear to you that you need to convert the`整数。

```py
age = "18" 
 age_int = int(age) 
 print(age_int+2) 
```

输出：

```py
20 
```

但是你应该记住一些特殊情况：

1.  浮点（带小数部分的整数）作为参数将返回向下舍入到最接近的整数的浮点数。 例如： `print(int(7.9))`将打印`7` 。 `print(int("7.9"))`也会导致错误，因为字符串是转换为整数的无效参数。
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: '7.9' 
    
    ```
    
2.  如果作为参数给出，任何单词中的任何整数都将返回与上面相同的错误： `print(int("one"))`将给出如下错误：
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: 'one' 
    
    ```
    

#### 更多信息：

可在[此处](https://docs.python.org/3.6/library/functions.html#int)找到`int()`内置的官方文档