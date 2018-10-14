---
title: Chaining If Else Statements
localeTitle: 链接如果其他声明
---
## 链接如果其他声明

*   `If` ：每个if / else语句中的第一个条件，条件为_true的_情况下，执行代码并忽略其余的。
*   `Else if` ：永远不能用作第一个条件。它始终是一个条件后`if` ，情况条件为真，执行代码。否则跳进下一个条件。
*   `Else` ：所有先前的条件都是_假的_ ， **否则**执行。

### 问题解释：

_写入链接`if` / `else if`语句以满足以下条件_ ：

_`num < 5` - 返回“Tiny” `num < 10` - 返回“Small” `num < 15` - 返回“中” `num < 20` - 返回“Large” `num >= 20` - 返回“巨大”_

#### 提示1

请记住，您可以一个接一个地组合（链接）几个`if...else`语句，直到最后一个使用`else if (condition) {do this}` 。

> _现在尝试解决问题_
> 
> #### 提示2
> 
> 有时候，当你编写的代码比你习惯的多，并且它不起作用时，小事就是背叛了我们。检查丢失的分号，括号等是非常有用的。 _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 解：

```javascript
function testSize(num) { 
  // Only change code below this line 
  if (num < 5){ 
    return "Tiny"; 
  } 
  else if (num < 10) { 
    return "Small"; 
  } 
  else if (num < 15){ 
    return "Medium"; 
  } 
  else if (num < 20){ 
    return "Large"; 
  } 
  else { 
    return "Huge"; 
  } 
  // Only change code above this line 
 } 
```

·在[repl.it上](https://repl.it/@AdrianSkar/Basic-JS-Chaining-ifelse-statements)运行代码

### 代码说明

该函数首先检查`if`条件`(num < 5)` 。如果它的计算结果为`true` ，则返回花括号之间的语句（“Tiny”）。如果没有，则检查下一个条件，直到最后一个`else`语句。

### 资源

*   [“if ... else” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)