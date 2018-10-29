---
title: String Methods
localeTitle: 字符串方法
---
**TODO： `string`基本信息**

[Python文档 - 字符串](https://docs.python.org/3/library/stdtypes.html#strings)

**创建：**

使用一对引号或撇号创建空`string` ：

```shell
>>> new_string = '' 
 >>> type(new_string) 
 <class 'string'> 
 >>> len(new_string) 
 0 
```

[Python文档 - 有关字符串的更多信息](https://docs.python.org/3/tutorial/datastructures.html#more-on-strings)

*   `string.find('you')`返回找到子字符串的最低位置。
    
*   `str.join(iterable)`使用指定的字符串连接`iterable`所有元素。
    
*   `str.replace(old, new, max)`方法用于将字符串`old`替换为字符串`new` ，总计`max`次数。此方法返回带有替换的字符串的新副本，并且原始`str`不变。
    
*   `string.split(separator, maxsplit)`返回由分隔字符串的列表`separator` ，可选`maxsplit`的次数，如果没有指定，该字符串将在所有情况下被分裂`separator` 。
    
*   `string.strip(to_strip)`返回从字符串的开头和结尾删除`to_strip`的字符串。如果未指定`to_strip` ，则将删除所有空白字符。