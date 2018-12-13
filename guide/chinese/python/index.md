---
title: Python
localeTitle: 蟒蛇
---
## 什么是Python？

[Python](https://www.python.org)是一种通用编程语言，它具有动态类型，解释和着名的易读性，并具有出色的设计原则。

要了解有关Python的更多信息，请查看python.org上的这些页面：

[什么是Python？](https://www.python.org/doc/essays/blurb/)

[Python FAQ](https://docs.python.org/3/faq/general.html) 。

## Python 2或Python 3

*   这两个版本是相似的，知道一个切换为另一个编写代码很容易。
*   [Python 2或Python 3](https://wiki.python.org/moin/Python2orPython3)
    *   [Python 2.x将不会维持到2020年。](https://www.python.org/dev/peps/pep-0373/)
    *   3.x正在积极发展中。这意味着，例如，所有最近的标准库改进仅在Python 3.x中默认可用。
    *   多年来，Python生态系统积累了大量优质软件。在3.x中打破向后兼容性的缺点是，某些软件（特别是公司内部的软件）仍然无法在3.x上运行。

## 安装

大多数基于\* nix的操作系统都安装了Python（通常是Python 2，最近的Python 3）。建议不要更换系统Python，否则可能会导致问题。但是，可以与系统Python一起安全地安装不同版本的Python。请参阅[Python设置和使用](https://docs.python.org/3/using/index.html) 。

Windows没有附带Python，可以在[此处](https://docs.python.org/3/using/windows.html)找到安装程序和说明

## Python解释器

Python解释器是用于运行Python脚本的。

如果它可用并且在Unix shell的搜索路径中可以通过键入命令`python`启动它，然后脚本名称将调用解释器并运行脚本。

`hello_campers.py`

```python
print('Hello campers!') 
```

从终端：
```
$ python hello_campers.py 
 Hello campers! 
```

“当安装多个版本的Python时，可以根据安装配置调用它们。在Cloud9 ide自定义环境中，可以调用它们：
```
$ python --version 
 Python 2.7.6 
 $ python3 --version 
 Python 3.4.3 
 $ python3.5 --version 
 Python 3.5.1 
 $ python3.6 --version 
 Python 3.6.2 
 $ python3.7 --version 
 Python 3.7.1 
```

## Python解释器交互模式

可以通过使用`-i`标志或不带任何参数调用Python解释器来启动交互模式。

交互模式有一个提示，可以输入和运行Python命令：
```
$ python3.5 
 Python 3.5.1 (default, Dec 18 2015, 00:00:00) 
 GCC 4.8.4 on linux 
 Type "help", "copyright", "credits" or "license" for more information. 
 >>> print("Hello campers!") 
 Hello campers! 
 >>> 1 + 2 
 3 
 >>> exit() 
 $ 
```

## Python的禅宗

影响Python设计的一些原则包含在复活节彩蛋中，可以使用Python解释器交互模式中的命令来读取：
```
>>> import this 
 The Zen of Python, by Tim Peters 
 
 Beautiful is better than ugly. 
 Explicit is better than implicit. 
 Simple is better than complex. 
 Complex is better than complicated. 
 Flat is better than nested. 
 Sparse is better than dense. 
 Readability counts. 
 Special cases aren't special enough to break the rules. 
 Although practicality beats purity. 
 Errors should never pass silently. 
 Unless explicitly silenced. 
 In the face of ambiguity, refuse the temptation to guess. 
 There should be one-- and preferably only one --obvious way to do it. 
 Although that way may not be obvious at first unless you're Dutch. 
 Now is better than never. 
 Although never is often better than *right* now. 
 If the implementation is hard to explain, it's a bad idea. 
 If the implementation is easy to explain, it may be a good idea. 
 Namespaces are one honking great idea -- let's do more of those! 
```

## Python的优点和缺点

### 优点

1.  交互式语言，模块支持几乎所有功能。
2.  开源：因此，您可以为社区做出贡献，为将来使用而开发的功能以及帮助他人
3.  许多优秀的口译员和笔记本电脑可以提供更好的体验，例如jupyter笔记本电脑。

#### 缺点

1.  作为开源，一年中开发了许多不同的方式来实现相同的功能。这有时会给其他人创造混乱，让他人阅读别人的代码。
2.  这是一种缓慢的语言。因此，用于开发通用算法的语言非常糟糕。

## 文档

[Python有很好的文档记录](https://docs.python.org/3/) 。这些文档包括语言的教程，指南，参考和元信息。

另一个重要的参考是Python增强提议（ [PEP](https://www.python.org/dev/peps/) ）。 PEP中包含用于编写Python代码的样式指南， [`PEP 8`](https://www.python.org/dev/peps/pep-0008/) 。

## 调试

内联`print`语句可用于简单调试：

> **...通常，调试程序的最快方法是向源添加一些打印语句：快速编辑 - 测试 - 调试周期使这种简单方法非常有效。**
> 
> \- [执行摘要](https://www.python.org/doc/essays/blurb/)

Python还包含更强大的调试工具，例如：

*   记录模块， [_记录_](https://docs.python.org/3/library/logging.html)
*   调试模块， [_pdb_](https://docs.python.org/3/library/pdb.html)

请注意，这些目前存在。

## 你好，世界！

回到文档，我们可以阅读[`print`](https://docs.python.org/3/library/functions.html#print)函数，这是[Python标准库](https://docs.python.org/3/library/index.html)的[_内置函数_](https://docs.python.org/3/library/functions.html) 。
```
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) 
```

内置函数按字母顺序列出。该名称后跟带括号的形式参数列表，其中包含可选的默认值。在此之下，给出了函数及其参数的简短描述，并偶尔给出一个例子。

Python 3中的[`print`](https://docs.python.org/3/library/functions.html#print)函数替换了Python 2中的[`print`](https://docs.python.org/2/reference/simple_stmts.html#print)语句。
```
>>> print("Hello world!") 
 Hello world! 
```

当函数名称后跟`()`时，将调用函数。对于Hello世界！例如，使用字符串作为第一个参数的参数调用print函数。对于其余参数，使用默认值。

我们称之为`print`函数的参数是`str`对象或_字符串_ ，它是Python的[_内置类型之一_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) 。 关于python最重要的是你在声明变量时不必指定数据类型，python的编译器 将根据分配的值类型自行完成。

`objects`参数以`*`为前缀，表示该函数将为该参数采用任意数量的参数。

## 你可以用python来做的事
正如之前所说，Python是一门通用型语言。你可以用它来做任何你想做的事情，但是python一个很重要的应用在于机器学习和人工智能。python同样是一门很受欢迎的网站开发语言，这得益于一些优秀的框架，例如[Django](https://www.djangoproject.com/) and [flask](http://flask.pocoo.org/)。除此之外，python还是一种流行的脚本语言。由于它易读易懂的语法格式，python正在不同的领域快速发展，并成为最受欢迎的编程语言。

## 想了解更多？

免费代码营有一些很好的资源。网络是一个很大的地方，还有很多值得探索的地方：

*   Python练习册：http：//anandology.com/python-practice-book/index.html
*   想想Python：http：//greenteapress.com/thinkpython/html/index.html
*   实用商务Python：http：//pbpython.com/
*   另一门课程：https _：//realpython.com/？utm source = fsp＆utm_ medium = promo＆utm\_campaign = bestresources
*   一般：https：//www.fullstackpython.com/
*   学习基础知识：https：//www.codecademy.com/learn/learn-python
*   使用Python的计算机科学：https：//www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11?ref=hackernoon#！
*   学习python的更多资源列表：https：//github.com/vinta/awesome-python
*   Interactive Python：http：//interactivepython.org/runestone/static/thinkcspy/index.html
*   开发人员Python指南：https：//devguide.python.org/
