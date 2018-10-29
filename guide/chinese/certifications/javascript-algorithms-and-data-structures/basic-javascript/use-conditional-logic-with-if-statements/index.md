---
title: Use conditional logic with If statements
localeTitle: 对If语句使用条件逻辑
---
## 对If语句使用条件逻辑

### 问题解释：

_在函数内部创建一个`if`语句`"Yes, that was true"`如果参数`wasThatTrue`为`true`则返回`"Yes, that was true"` `"No, that was false"`否则返回`"No, that was false"` 。_

#### 提示1

您的`if`语句将评估您的`(condition)`是`true`还是`false`并执行（如果它的计算结果为`true` ）后面`{statement}`的`{statement}` 。

> _现在尝试解决问题_

#### 提示2

如果您的`(condition)`求值为`false` ，则不会执行`{statement}` ，函数将返回下一个`return`语句。

> _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 基本代码解决方案

```javascript
// Setup 
 function trueOrFalse(wasThatTrue) { 
 
  // Only change code below this line. 
 
  if (wasThatTrue) 
   { 
    return "Yes, that was true"; 
    } 
  return "No, that was false"; 
 
  // Only change code above this line. 
 } 
```

### 代码说明

该函数首先计算`if`条件`(wasThatTrue)`计算结果为`true` 。如果是，则ir返回花括号之间的语句。如果没有，则返回它们之外的下一个`return`语句。

### 资源

*   [“布尔” - MDN词汇表](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
    
*   [“if ... else” - MDN JavaScript参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)