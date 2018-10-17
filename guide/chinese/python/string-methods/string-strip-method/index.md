---
title: String Strip Method
localeTitle: 字符串条方法
---
## 字符串条方法

在Python， `lstrip()` ， `rstrip()`和`strip()`从字符串中剥离字符有三个选项。

每个都将返回字符串的副本，其中包含从开头，结尾或开头和结尾删除的字符。如果没有给出参数，则默认为剥离空白字符。

例：

```py
>>> string = '   Hello, World!    ' 
 >>> strip_beginning = string.lstrip() 
 >>> strip_beginning 
 'Hello, World!    ' 
 >>> strip_end = string.rstrip() 
 >>> strip_end 
 '   Hello, World!' 
 >>> strip_both = string.strip() 
 >>> strip_both 
 'Hello, World!' 
```

可选参数可以作为包含要删除的所有字符的字符串提供。

```py
>>> url = 'www.example.com/' 
 >>> url.strip('w./') 
 'example.com' 
```

但是，请注意只有第一个`.`从字符串中剥离出来。这是因为`strip`函数仅剥离位于左侧或最右侧的参数字符。因为w出现在第一个之前`.`它们被剥离在一起，而'com'出现在右边的前面`.`剥离后`/`

#### 更多信息：

字符串方法[文档](https://docs.python.org/3/library/stdtypes.html#string-methods) 。