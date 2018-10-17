---
title: Set Default Parameters for Your Functions
localeTitle: 设置函数的默认参数
---
## 设置函数的默认参数

： _帖子_上_的_ _三角旗_ _：如果卡住，请记得使用Read-Search-Ask。尝试配对程序：_ busts in\_silhouette：并编写自己的代码：pencil：

### ：checkered\_flag：问题说明：

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

我们将修改增量功能，使**数**参数递增1默认情况下，如果**值**的值不会传递到增量功能设置**值设置**为1。

### ：speech\_balloon：提示：1

让我们确定参数**值**在JS函数中的位置

现在尝试解决问题

### ：speech\_balloon：提示：2

设置**值**等于某个**值** ，以便默认为该值

现在尝试解决问题

### 扰流警报！

![扰流板](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

提前解决！

## ：初学者：基本代码解决方案：

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value = 1) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

：rocket： [运行代码](https://repl.it/@RyanPisuena/PleasingFumblingThings)

## 代码说明

*   这部分非常简单。通过将**value**参数设置为1来传递此部分。当函数遇到未传递任何**值的**测试用例时，默认情况下将为**值**分配一个值。

相关链接：

[Javascript默认参数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

# ：剪贴板：供稿说明：

*   ：警告：请勿添加与任何现有解决方案类似的解决方案。如果您认为它相似但更好，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - 基本，中级和高级。 ：红绿灯：
*   如果您添加了任何相关的主要内容，请仅添加您的用户名。 （：警告：不要删除任何现有的用户名）

请参阅：point\_right： [Wiki挑战解决方案模板](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-template-guide/14272)以供参考。