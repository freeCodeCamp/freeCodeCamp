---
title: String Find Method
localeTitle: 字符串查找方法
---
## 字符串查找方法

在Python中`find()`字符串中的子字符串有两种选择： `find()`和`rfind()` 。

每个都将返回找到子字符串的位置。两者之间的区别在于`find()`返回最低位置， `rfind()`返回最高位置。

可以提供可选的开始和结束参数，以限制在字符串的部分内搜索子字符串。

例：

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you') 
 6 
 >>> string.rfind('you') 
 42 
```

如果未找到子字符串，则返回-1。

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you', 43)  # find 'you' in string anywhere from position 43 to the end of the string 
 -1 
```

更多信息：

字符串方法[文档](https://docs.python.org/3/library/stdtypes.html#string-methods) 。