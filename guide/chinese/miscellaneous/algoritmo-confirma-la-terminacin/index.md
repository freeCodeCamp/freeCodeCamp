---
title: Algoritmo Confirma La Terminacin
localeTitle: 算法确认完成
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a081f3fa5316b7d400a5e518bb0620eef64caa08.jpg)

### 解释：

该函数只是一个布尔运算。如果第一个参数以第二个参数结束，则必须返回true。这意味着例如问题`confirmEnding('Bastian', 'n');` ，必须返回true。

## 线索：1

看一下`substr()`工作原理。你应该尝试获取最后的X个字符。

## 线索：2

要获取最后的X个字符，必须使用length（）并将其转换为负数。

## 线索：3

检查您是否具有正确的语法，并使用`===`进行比较。

## 扰流板警报！

![警告标志](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**解决方案如下**

## 代码解决方案
```
function confirmEnding(str, target) { 
  return str.substr(-target.length) === target; 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CLjU/18)

## 代码说明：

我们使用带有返回目标长度的负值的subtring（）。我们可以使用-1来获取最后一个字符，但如果目标长度实际上大于1，那么该函数将返回不正确的信息。然后我们返回其boolanea表达式的值。

> **注意：**如果您已在文章中添加了**相关内容** ，请仅添加您的用户名。 （请不要删除任何现有名称。）