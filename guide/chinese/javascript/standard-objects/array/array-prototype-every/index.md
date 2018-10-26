---
title: Array.prototype.every
localeTitle: Array.prototype.every
---
`every()`方法测试数组中的所有元素是否都通过了由提供的函数实现的测试。

**句法**

```javascript
  arr.every(callback[, thisArg]) 
```

## 参数

*   **callback**函数测试每个元素，取三个参数：
    
    *   **currentValue** （必填）
        
        当前元素在数组中处理。
        
    *   **索引** （可选）
        
        数组中正在处理的当前元素的索引。
        
    *   **数组** （可选）
        
        每个阵列都被调用了。
        
*   **thisArg**可选。执行回调时要使用的值。
    

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/ff679981%28v=vs.94%29.aspx)

## 描述

`every`方法按升序索引顺序为每个数组元素调用`every` `callback`函数，直到`callback`函数返回false。如果找到导致`callback`返回false的元素，则every方法立即返回`false` 。否则，every方法返回`true` 。

不会为缺少的数组元素调用回调函数。

除了数组对象之外，每个方法都可以被具有length属性且具有数字索引属性名称的任何对象使用。 `every`都不会改变调用它的数组。

## 例子

```javascript
  function isBigEnough(element, index, array) { 
    return element >= 10; 
  } 
  [12, 5, 8, 130, 44].every(isBigEnough);   // false 
  [12, 54, 18, 130, 44].every(isBigEnough); // true 
 
  // Define the callback function. 
  function CheckIfEven(value, index, ar) { 
      document.write(value + " "); 
 
      if (value % 2 == 0) 
          return true; 
      else 
          return false; 
  } 
 
  // Create an array. 
  var numbers = [2, 4, 5, 6, 8]; 
 
  // Check whether the callback function returns true for all of the 
  // array values. 
  if (numbers.every(CheckIfEven)) 
      document.write("All are even."); 
  else 
      document.write("Some are not even."); 
 
  // Output: 
  // 2 4 5 Some are not even. 

```