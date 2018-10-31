---
title: Introducing Else If statements
localeTitle: 介绍Else If语句
---
## 介绍Else If语句

如果卡住，请记得使用Read-Search-Ask。尝试配对程序并编写自己的代码。

###问题解释：

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  return "Between 5 and 10"; 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

我们将修改上面的现有代码，以便它遵循**else-if**语句具有的逻辑流程。

###提示：1 `javascript if (val > 10) { return "Greater than 10"; }` 所有`if`语句及其变体都以`if`语句开头。

> _现在尝试解决问题_

###提示：2 `javascript else if (val < 5) { return "Smaller than 5"; }` 该之间的语句`if`语句和`else`报表的**其他，如果**流是在else，如果格式

> _现在尝试解决问题_

###提示：3 `javascript else { return "Between 5 and 10"; }` **else-if**流中的最后一个语句是`else`格式 ###扰流警报！ ![扰流板](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif) 提前解决！ ##基本代码解决方案：

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  else if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  else { 
  return "Between 5 and 10"; 
  } 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

：rocket： [运行代码](https://repl.it/@RyanPisuena/GoldenWorriedRuntime) ##代码说明 **else-if逻辑流**的结构是一个初始`if`语句，一个`if-else`语句和一个final `else`语句。

### 资源

*   [“if ... else” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)