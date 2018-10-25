---
title: Create Strings Using Template Literals
localeTitle: 使用模板文字创建字符串
---
ES6不是使用字符串连接，而是提供模板文字来创建字符串。在此挑战中，您必须使用模板文字来创建文本警告数组。

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序并编写自己的代码。

### 问题说明：

需要使用模板文字将列表作为数组中的每个元素返回，因为元素将包含在`<li></li>`标记中。

## 提示：1

*   使用`map()`函数在所有`arr`元素上应用模板文字

> _现在尝试解决问题_

## 提示：2

*   在`map()`使用一个箭头函数，它将`element`作为参数并返回`<li></li>` ，它具有text-warning类并包含其中的`element`

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

``const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);``

## 没有map（）解决方案

尽管它是一个不太灵活的解决方案，如果您事先知道元素的数量，您可以将它们枚举为

``const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>` ,`<li class="text-warning">${arr[2]}</li>`];``