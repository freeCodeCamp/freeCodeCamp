---
title: Introducing Else statements
localeTitle: 介绍Else语句
---
## 介绍Else语句

### 问题解释：

· _将`if`语句组合到单个`if/else`语句中。_

#### 提示1

当第一个`if`语句返回`false` ，执行/评估下一段代码（如`return` ， `if`或`else`语句）。

> _现在尝试解决问题_

#### 提示2

有时`if` （ `condition` ）语句可以用`else {code to execute instead}`语句`else {code to execute instead}` （实质上你告诉你的函数做_“y”，_如果它不能做_“x”_而不是多次指定_“x”_ ）。

> _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 基本代码解决方案

```javascript
function testElse(val) { 
  var result = ""; 
  // Only change code below this line 
 
  if (val > 5) { 
    result = "Bigger than 5"; 
  } 
 
  else { 
    result = "5 or smaller"; 
  } 
 
  // Only change code above this line 
  return result; 
 } 
 
 // Change this value to test 
 testElse(4); 
```

· [在repl.it上运行代码](https://repl.it/@AdrianSkar/Introducing-else-statements)

### 代码说明

功能首先评估`if`条件`val > 5`的计算结果为`true` 。如果没有，则执行下一个语句（ `else { return "5 or smaller";})` 。

### 资源

*   [“if ... else” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)