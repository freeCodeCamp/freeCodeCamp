---
title: Check For The Presence of an Element With indexOf()
localeTitle: 使用indexOf（）检查元素是否存在
---
## 使用indexOf（）检查元素是否存在

*   可以使用简单的`if-statement`来检查`indexOf()`函数返回的值是否小于0。
*   一旦发现了值，您就可以返回`true`或`false` 。
*   `Solution-1`演示了一个简单的`if-statement`如何返回正确的结果。

## 方案1：

```javascript
function quickCheck(arr, elem) { 
  if(arr.indexOf(elem)>=0) { 
    return true; 
  } 
  return false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
```

*   `Solution-2`演示如何使用`? : (conditional)`解决问题`? : (conditional)`运算符。

## 方案2：

```javascript
function quickCheck(arr, elem) { 
 return arr.indexOf(elem) >= 0 ? true : false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 

```