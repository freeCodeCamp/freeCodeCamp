---
title: Comparisons with the && (logical AND) operator
localeTitle: 与&&（逻辑AND）运算符进行比较
---
## 与&&（逻辑AND）运算符进行比较

### 问题解释：

· _将两个if语句合并为一个语句，如果`val`小于或等于`50`且大于或等于`25` ，则返回`"Yes"` 。否则，将返回`"No"` 。_

#### 提示1

逻辑AND（ `&&` ）运算符比较两个语句，并且仅当两者都为真或可以转换为true（真实）时才返回`true` 。

> _现在尝试解决问题_

#### 提示2

请记住，嵌套`if`语句也可以实现这种效果。

> _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 基本代码解决方案

```javascript
function testLogicalAnd(val) { 
  // Only change code below this line 
 
  if (val <= 50 && val >= 25) { 
      return "Yes"; 
  } 
 
  // Only change code above this line 
  return "No"; 
 } 
 
 // Change this value to test 
 testLogicalAnd(10); 
```

· [在repl.it上运行代码](https://repl.it/@AdrianSkar/Basic-JS-Comparison-with-the-and-operator)

### 代码说明

功能首先评估`if`条件`val <= 50`的计算结果为`true`转换`val`到一个号码，如果有必要，则确实具有相同的`val >=25` ，因为逻辑AND（的`&&` ）算子;如果两者都返回true，则`return "Yes"`语句。

### 资源

*   [“逻辑运算符” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)