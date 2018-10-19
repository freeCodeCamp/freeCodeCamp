---
title: If Elif Else Statements
localeTitle: If/Elif/Else声明语句
---
## If/Elif/Else声明语句

`if` / `elif` / `else`结构是控制程序流的常用方法，允许您根据某些数据的值（true/false）执行特定的代码块。如果关键字`if`后面的条件计算为`true` ，则代码块将执行： 请注意，在判断条件的语句之前和之后不使用括号，如同其他语言一样。

```python
if True: 
  print('If block will execute!') 
```

```python
x = 5 
 
 if x > 4: 
  print("The condition was true!") #this statement executes 
```

如果条件为`false` ，您可以选择添加在if代码块之后执行的`else`响应：

```python
if not True: 
  print('If statement will execute!') 
 else: 
  print('Else statement will execute!') 
```

或者你也可以看到这个例子

```python
y = 3 
 
 if y > 4: 
  print("I won't print!") #this statement does not execute 
 else: 
  print("The condition wasn't true!") #this statement executes 
```

_请注意， `else`关键字后面没有条件 - 它执行条件为if代码块未执行的所有情况_

可以通过在初始`if`语句之后包含一个或多个`elif`检查来检查多个条件，但只执行一个条件：

```python
z = 7 
 
 if z > 8: 
  print("I won't print!") #this statement does not execute 
 elif z > 5: 
  print("I will!") #this statement will execute 
 elif z > 6: 
  print("I also won't print!") #this statement does not execute 
 else: 
  print("Neither will I!") #this statement does not execute 
```

_请注意，只有第一个计算为`true`条件才会执行。即使`z > 6`为`true` ， `if/elif/else`块`if/elif/else`在第一个真实条件之后终止。这意味着只有在else之前没有条件为`true`的情况下才会执行`else` 。_

我们还可以创建嵌套if用于决策。在此之前请参阅前面的href ='https：//guide.freecodecamp.org/python/code-blocks-and-indentation'target ='\_ blank'rel ='nofollow'>缩进指南。

让我们举个例子来找既是一个偶数也大于'10'的数字
```
python 
 x = 34 
 if x %  2 == 0:  # this is how you create a comment and now, checking for even. 
  if x > 10: 
    print("This number is even and is greater than 10") 
  else: 
    print("This number is even, but not greater 10") 
 else: 
  print ("The number is not even. So point checking further.") 
```

这只是嵌套if的一个简单示例。请随时在线浏览更多内容。

虽然上面的示例很简单，但您可以使用[布尔比较](https://guide.freecodecamp.org/python/comparisons)和[布尔运算符](https://guide.freecodecamp.org/python/boolean-operations)创建复杂条件。

**_内联python if-else语句_**

我们也可以使用if-else语句内联python函数 以下示例应检查数字是否大于或等于50，如果是，则返回True：
```
python 
 x = 89 
 is_greater = True if x >= 50 else False 
 
 print(is_greater) 
```

产量
```
> 
 True 
 > 

```
