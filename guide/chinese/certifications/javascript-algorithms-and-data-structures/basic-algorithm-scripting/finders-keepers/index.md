---
title: Finders Keepers
localeTitle: Finders Keepers
---
## 问题解释

我们需要从传递函数的数组中返回元素。 `function`和`array`都传递给我们的函数`findElement(arr, func)` 。

## 提示：1

通过`for`循环可以查看数组。

> _现在尝试解决问题_

## 提示：2

`num`传递给函数。我们需要将它设置为我们想要使用该函数检查的元素。

> _现在尝试解决问题_

## 提示：3

不要忘记，如果数组中没有数字通过测试，它应返回`undefined` 。

> _现在尝试解决问题_

## 基本解决方案

```javascript
function findElement(arr, func) { 
  let num = 0; 
 
  for(var i = 0; i < arr.length; i++) { 
    num = arr[i]; 
    if (func(num)) { 
      return num; 
    } 
  } 
 
  return undefined; 
 } 
```

## 代码说明

*   挑战要求我们通过数组查看。这是使用`for`循环完成的。
*   `num`变量被传递给函数，因此我们将它设置为数组中的每个索引。
*   预定义的函数已经为我们检查了每个数字，所以如果它是“true”，我们将返回该数字。
*   如果数组中没有数字通过函数的测试，我们返回undefined。