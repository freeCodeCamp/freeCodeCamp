---
title: Learn About Ruby Arrays
localeTitle: 了解Ruby数组
---
### 基本：

*   数组是存储在`<a href='http://ruby-doc.org/core-2.2.0/Array.html' target='_blank' rel='nofollow'>]`括号内的索引项列表。
*   Ruby使用从零开始的索引。这意味着数组中的第一项存储在索引号`0` ，然后第二项存储在索引号`1` ，依此类推，对于存储在数组中的每个附加项，值增加1。
*   可以使用`[]`或`Array.new`语法创建数组。
*   Ruby有许多构建方法来对数组执行操作，例如反转或查找存储在数组中的元素。

## 例子：
```
arr = [1,2,3] 
 # is equivalent to: 
 arr = Array.new(3) 
 arr[0] = 1 
 arr[1] = 2 
 arr[2] = 3 
 # is also equivalent to: 
 arr = Array(1..3) 
 # All three of these examples return: 
 [1,2,3] 
```

## 参考文献：

*   [数组的官方Ruby文档](https://docs.ruby-lang.org/en/2.0.0/Array.html) 。