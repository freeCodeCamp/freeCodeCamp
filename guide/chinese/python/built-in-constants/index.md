---
title: Python Built in Constants
localeTitle: Python内置常量
---
[常量](https://docs.python.org/3/library/constants.html)

三种常用的内置常量：

*   `True` ： _bool_类型的真正价值。赋值为`True`引发_SyntaxError_ 。
*   `False` ： _bool_类型的错误值。赋值为`False`引发_SyntaxError_ 。
*   `None` ： _NoneType_类型的唯一值。 None通常用于表示缺少值，因为默认参数未传递给函数。分配给`None`引发_SyntaxError_ 。

其他内置常量：

*   `NotImplemented` ：特殊值，应该由二进制特殊方法返回，例如`__eg__()` ， `__add__()` `__eg__()` ， `__add__()` `__rsub__()`等），以指示操作未针对其他类型实现。
*   `Ellipsis` ：特殊值主要与扩展切片语法一起用于用户定义的容器数据类型。
*   `__debug__` ：如果Python没有使用-o选项启动， `__debug__` True。

站点模块添加的常量 站点模块（在启动期间自动导入，除非给出了-S命令行选项）向内置命名空间添加了几个常量。它们对交互式解释器shell很有用，不应该在程序中使用。

打印时的对象，打印消息，如“使用退出（）或Ctrl-D（即EOF）退出”，并在调用时，使用指定的退出代码引发SystemExit：

*   退出（代码=无）
*   出口（代码=无）

打印时的对象，打印“类型许可证（）以查看完整的许可证文本”等消息，并在调用时，以类似寻呼机的方式显示相应的文本（一次一个屏幕）：

*   版权
*   执照
*   学分