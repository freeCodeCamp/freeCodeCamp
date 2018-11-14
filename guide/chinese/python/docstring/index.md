---
title: Docstring
localeTitle: 文档字符串
---
## 文档字符串

Docstring是开发人员向其他开发人员传达Python中函数的用途，参数，要求和用法的一种方式。它允许简化代码维护和理解。

与传统的源代码注释不同，docstring应该描述什么 功能，不是如何。

与Docstring类似的例子是Java中的@Javadoc。

Docstring在Python中的声明标题之后写成多行注释。 docstring有4个不同的部分：

1.  输入类型和输出类型
    *   输入/输出可以是`obj, list, bool, int, str, float`
2.  功能说明
    *   简要但详尽地描述了您的功能
3.  要求
    *   这是由人类阅读的，因此不必是代码
4.  测试用例（通常为2-3）

一般格式如下。

## Docstring的格式

```python
def my_examplefunc(input_type1, input_type2): 
  '''(input_type1, input_type2) -> output_type        # Your first line will be the input/output. Remember the space around the arrow! 
  Here is a description of my example function        # Your second line will be the description 
  REQ: type(input_type1) == list                      # Your next line (or lines) will be the requirements for the input of your function 
  REQ: type(input_type2) == str 
  >>> my_example_func([2, 3], "Hello World!")         # After the requirements come test cases 
  [2, 3] "Hello World" 
  >>> my_example_func([7, 2], "Another test case")    # Your first line of the test case is an example of the usage, prefaced by >>> 
  [7, 2] "Another test case"                          # Your second line of the test case is the output 
  >>> my_example_func([5, 6], "Last test case") 
  [5, 6] "Last test case" 
  ''' 
  # Your code goes here, underneath the Docstring 
```

使用示例可以最好地理解Docstring，因此请查看下面的示例程序，如果数字小于5，程序将输出True，如果数字大于5，则输出False。

## 例1

```python
def is_less_than_five(some_number): 
  '''(int) -> bool 
  Returns True if the given number is less than 5, and False is the given number is greater than 5. 
  REQ: some_number != 5 
  >>> is_less_than_five(4) 
  True 
  >>> is_less_than_five(6) 
  False 
  >>> is_less_than_five(100000) 
  False 
  ''' 
  # Your code goes here 
```

### 一些有用的链接：

Numpy和Google Docstrings是两种常用的方法：

*   Google：http：//sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_google.html
*   Numpy：http：//sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_numpy.html 另外，请参阅一些旧的PEP评论：https：//www.python.org/dev/peps/pep-0257/