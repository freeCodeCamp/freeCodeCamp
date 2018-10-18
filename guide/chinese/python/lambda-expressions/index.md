---
title: Lambda Expressions
localeTitle: Lambda表达式
---
## Lambda表达式

Lambda表达式理想地用于我们有一些简单的事情要做，我们对快速完成工作更感兴趣而不是正式命名函数。 Lambda表达式也称为匿名函数。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md) 。

Python中的Lambda表达式是声明小型和匿名函数的简短方法（没有必要为lambda函数提供名称）。 Lambda函数的行为与使用`def`关键字声明的常规函数​​一样。当您想要以简洁的方式定义一个小函数时，它们会派上用场。它们只能包含一个表达式，因此它们不适合具有control-flow语句的函数。 主

#### Lambda函数的语法

`lambda arguments: expression`

Lambda函数可以包含任意数量的参数，但只能包含一个表达式

#### 示例代码

```py
# Lambda function to calculate square of a number 
 square = lambda x: x ** 2 
 print(square(3)) # Output: 9 
 
 # Traditional function to calculate square of a number 
 def square1(num): 
  return num ** 2 
 print(square(5)) # Output: 25 
```

在上面的lambda示例中， `lambda x: x ** 2`产生一个匿名函数对象，该对象可以与任何名称相关联。 因此，我们将函数对象与`square`相关联，因此从现在开始，我们可以像任何传统函数一样调用`square`对象。例如`square(10)`

## 例子

### 初学者

```py
lambda_func = lambda x: x**2 # Function that takes an integer and returns its square 
 lambda_func(3) # Returns 9 
```

### 中间

```py
lambda_func = lambda x: True if x**2 >= 10 else False 
 lambda_func(3) # Returns False 
 lambda_func(4) # Returns True 
```

### 复杂

```py
my_dict = {"A": 1, "B": 2, "C": 3} 
 sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B'] 
```

### 用例

假设您要从`list`过滤掉奇数。你可以使用`for`循环：

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 filtered = [] 
 
 for num in my_list: 
     if num % 2 != 0: 
         filtered.append(num) 
 
 print(filtered)      # Python 2: print filtered 
 # [1, 3, 5, 7, 9] 
 ``` 
 
 You could write this as a one liner with list-comprehensions 
```

蟒蛇 如果x％2！= 0，则过滤= \[x代表\[1,2,3,4,5,6,7,8,9,10\]中的x​​\] \`\`\`

但是你可能会想要使用内置的`filter`功能。为什么？第一个例子有点冗长，单线程可能更难理解，因为`filter`提供两个单词中最好的。更重要的是，内置函数通常更快。

\`\`\`蟒蛇 my\_list = \[1,2,3,4,5,6,7,8,9,10\]

filtered = filter（lambda x：x％2！= 0，my\_list）

列表（过滤）

# \[1,3,5,7,9\]

` `` NOTE: in Python 3 built in function return generator objects, so you have to call` list `, while in Python 2 they return a` list `,` tuple `or` string\`。

发生了什么？你告诉`filter`使用`my_list`每个元素并应用lambda表达式。返回`False`的值将被过滤掉。

#### 更多信息：

*   [官方文件](https://docs.python.org/3/reference/expressions.html#lambda)
*   [进一步阅读](https://dbader.org/blog/python-lambda-functions)