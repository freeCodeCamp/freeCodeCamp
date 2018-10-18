---
title: Returning Boolean Values from Functions
localeTitle: 从函数返回布尔值
---
## 从函数返回布尔值

我们可以使用比较运算符和最小代码在return语句中直接执行，而不是使用if / else块来比较变量。

### 问题解释

_修复函数`isLess`以删除`if...else`语句。_

```js
// Fix this code 
  if (a < b) { 
    return true; 
  } else { 
    return false; 
  } 
```

#### 提示1

与[前面的练习一样，](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch)您将要更改函数返回正确值的方式，这意味着您不必重用或修改该代码，而是替换它。

> _现在尝试解决问题_

#### 提示2

为了返回`true`或`false` ，你不需要两个语句也不能使用`if`人。您只需要正确的[比较运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) 。

> _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 代码解决方案

```javascript
function isLess(a, b) { 
  // Fix this code 
  return a <= b; 
 } 
 // Change these values to test 
 isLess(10, 15); 
```

在[repl.it上](https://repl.it/@AdrianSkar/Basic-Js-Returning-boolean-from-function)运行代码。

### 资源

*   [“小于或等于运算符（<=）” - _MDN Javascript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator_(%3C))