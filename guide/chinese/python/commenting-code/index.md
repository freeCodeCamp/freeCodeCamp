---
title: Python Commenting Code
localeTitle: Python评论代码
---
注释用于注释，描述或解释复杂或难以理解的代码。当解释器编译为字节码时，Python会故意忽略注释。 [`PEP 8`](https://www.python.org/dev/peps/pep-0008/#comments)有一个处理注释的部分。它们还通过添加简单和描述性语言来增加代码的可读性，以便更好地理解。

**阻止**和**内联**注释以`#`开头，后跟注释前的空格：

```python
    # This is a block comment. 
    print('Hello world!') # This is an inline commment. 
```

Python没有包含编写多行注释的正式方法。跨越多行的注释的每一行应以`#`和空格开头：

```python
    # This is the first line of a multiline comment. 
    # This is the second line. 
```

另一种评论是**文档字符串** ，记录在[`PEP 257`](https://www.python.org/dev/peps/pep-0257/) 。文档字符串是一种特定类型的注释，它将成为`__doc__`属性。

要使字符串文字成为文档字符串，它必须以`\"\"\"`开头和结尾，并且是它正在记录的模块，函数，类或方法定义的第一个语句：

```python
    class SomeClass(): 
        """Summary line for SomeClass. 
 
        More elaborate descriptions may require using a 
        a multiline docstring. 
        """ 
 
        def method_a(self): 
            """Single line summary of method_a.""" 
            pass 
```

以`"""`开头和结尾的字符串文字不是文档字符串（不是第一个语句），可以用于多行字符串。它们不会成为`__doc__`属性。如果它们没有分配给变量，它们将不会生成字节码。关于将它们用作[此处的](http://stackoverflow.com/questions/7696924/multiline-comments-in-python)多行注释，有一些讨论。