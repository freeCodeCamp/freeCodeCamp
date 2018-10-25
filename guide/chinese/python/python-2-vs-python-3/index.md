---
title: Python 2 vs Python 3
localeTitle: Python 2与Python 3
---
我们不参与辩论。如果您有兴趣了解更多关于它的学术目的，也许[这篇文章比较Python 2和Python 3](https://wiki.python.org/moin/Python2orPython3)会引起您的兴趣。

但是，我们也不能不知道有两种主要的Python风格。你问，为什么要关心你呢？因为为一个版本的Python编写的代码可能会导致另一个版本的Python出现语法错误。

以下是Python 2中的有效`print`语句，但不适用于Python 3：

```py
print "Hello World" 
```

在Python 3中，同一语句会抛出这样的错误：
```
>>> print "hello" 
  File "<stdin>", line 1 
    print "hello" 
                ^ 
 SyntaxError: Missing parentheses in call to 'print' 
```

在Python 2中，“print”被视为语句而不是函数。尽管您可以，但您无需将要打印的文本包装在括号中。 Python 3明确将“print”视为一个函数，这意味着您必须以标准方式将需要打印的项目传递给括号中的函数，否则您将收到语法错误

在Python 2和3中使用`print()`函数是“安全的”：

```python
print("Hello World") 
```

Python 2和Python 3之间的另一个区别是它们在调用`map()`函数时返回的数据结构。

在Python 2中， `map()`返回一个列表：
```
>>> result = map(int,['10','20','30','40']) 
 >>> print result 
 >>> [10,20,30,40] 
```

在Python 3中， `map()`返回一个迭代器：
```
>>> result = map(int,['10','20','30','40']) 
 >>> print (result) 
 >>> <map object at 0x7f40896b4630> 
```

要在Python 3中获取列表，您需要转换它：
```
>>> result = list(map(int,['10','20','30','40'])) 
 >>> print (result) 
 >>> [10,20,30,40] 
```

所以，你现在唯一需要关注的问题是什么;你要选哪一个？如果你是Python的新手，你应该选择Python 3.Python 2目前[的生命终止](https://www.python.org/dev/peps/pep-0373/#update)日期设置为2020.意味着常规错误修正不能保证前进，是的，甚至需要时间来熟悉大多数常见方面蟒蛇;而你的时间很重要。所以，明智地投入时间和精力！

虽然Python 2受到良好支持和欢迎，但Python中最常见的库和框架更喜欢Python 3. Django正式[推荐](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support) Python 3. Flask及其所有依赖项也[支持](http://flask.pocoo.org/docs/0.10/python3/#python3-support) Python 3。

Python 2和Python 3都很棒。大多数Linux和macOS发行版预装了Python 2作为Python的默认版本。 Python 3源于对更可读和更美丽​​的语言结构的永不满足的追求。

本文使用Python 3在您的开发环境中设置Web框架。但在此之前，您需要确保拥有Python 3并知道如何使用它！

#### 更多信息：

*   [Python 2或3文章](https://wiki.python.org/moin/Python2orPython3)