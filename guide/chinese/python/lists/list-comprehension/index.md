---
title: List Comprehension
localeTitle: 列表理解
---
## 列表理解

List Comprehension是一种循环遍历列表以基于某些条件生成新列表的方法。它起初可能令人困惑，但一旦你适应了语法，它就会非常强大和快速。

学习如何使用列表理解的第一步是查看循环遍历列表的传统方式。以下是一个返回偶数数字新列表的简单示例。

```python
# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # Empty list that will be populate with a loop 
 even_list = [] 
 
 for number in some_list: 
  if number % 2 == 0: 
    even_list.append(number) 
 
 # even_list now equals [2, 8, 10] 
```

首先，使用一些数字创建一个列表。然后创建一个空列表，用于保存循环中的结果。在循环中，检查每个数字是否可被2整除，如果是，则将其添加到even\_list。这需要5行代码，不包括注释和空格，在这个例子中并不多。

现在为列表理解示例。

```python
# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # List Comprehension 
 even_list = [number for number in some_list if number % 2 == 0] 
 
 # even_list now equals [2, 8, 10] 
```

另一个例子，有两个相同的步骤： 以下将创建一个与`my_starting_list`的数字相乘的数字`my_starting_list`乘以7。

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 my_new_list = [] 
 
 for item in my_starting_list: 
 my_new_list.append(item * 7) 
```

运行此代码时， `my_new_list`的最终值为： `[7, 14, 21, 28, 35, 42, 49, 56]`

使用列表`my_new_list`的开发人员可以使用以下列表`my_new_list`实现相同的结果，这导致相同的`my_new_list` 。

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 
 my_new_list = [item * 7 for item in my_starting_list] 
```

以列表理解方式编写的简单公式是：

`my_list = [{operation with input n} for n in {python iterable}]`

但是，如果要更改从iterable返回的项，请将`{operation with input n}`替换为。上面的例子使用`n * 7`但操作可以根据需要简单或复杂。

用任何iterable替换`{python iterable}` 。 [序列类型](https://guide.freecodecamp.org/python/sequence-types)将是最常见的。在上面的示例中使用了一个列表，但元组和范围也很常见。

如果满足某些条件，列表理解会将现有列表中的元素添加到新列表中。它更整洁，但在大多数情况下也快得多。在某些情况下，列表理解可能会妨碍可读性，因此在选择使用列表理解时，开发人员必须权衡他们的选项。

## 带条件的列表理解的例子

可以使用条件来控制列表推导中的控制流。例如：

```py
only_even_list = [i for i in range(13) if i%2==0] 
```

这相当于以下循环：

```py
only_even_list = list() 
 for i in range(13): 
  if i%2 == 0: 
    only_even_list.append(i) 
```

列表推导还可以包含嵌套的if条件。考虑以下循环：

```py
divisible = list() 
 for i in range(50): 
  if i%2 == 0: 
    if i%3 == 0: 
      divisible.append(i) 
```

使用列表理解，这可以写成：

```py
divisible = [i for i in range(50) if i%2==0 if i%3==0] 
```

If-Else语句也可以与列表理解一起使用。

```py
list_1 = [i if i%2==0 else i*-1 for i in range(10)] 
```

#### 更多信息：

[Python数据结构 - 列表](https://docs.python.org/2.7/tutorial/datastructures.html)

[Python for Loops](https://guide.freecodecamp.org/python/for-loop-statements)

[Python列表](https://guide.freecodecamp.org/python/learn-about-python-lists)

[Python初学者 - 列表理解](http://www.pythonforbeginners.com/basics/list-comprehensions-in-python)