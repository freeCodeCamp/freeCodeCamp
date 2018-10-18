---
title: Reto De Algoritmo Bu
localeTitle: 算法挑战Bu
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3c8584a085a0deaea66b3400e6321eeadab552a2.jpg)

### 问题解释：

*   这个程序很简单，诀窍是要明白它是一种原始的boolaneo。程序接收真或假参数。

## 线索：1

*   您应该检查收到的参数类型是boolaneo。

## 线索：2

*   要检查参数的类型，可以使用`typeof`

## 线索：3

*   因为必须返回true或false，所以可以使用if语句或只返回将在if语句中使用的语句。

## 扰流板警报！

![警告标志](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**解决方案如下**

## 代码解决方案
```
function booWho(bool) { 
  return typeof bool === 'boolean'; 
 } 
 
 // realizamos el test 
 booWho(null); 
```

![:rocket:](/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [在REPL中！](https://repl.it/CLnK/0)

# 代码说明：

我们使用`typeof`运算符来检查变量是否为boolanea。如果是，它将返回`true` 。否则，另一种类型将返回`falso` 。

> **注意：**如果您已在文章中添加了**相关内容** ，请仅添加您的用户名。 （请不要删除任何现有名称。）