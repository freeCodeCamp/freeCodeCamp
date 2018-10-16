---
title: Array.prototype.lastIndexOf
localeTitle: Array.prototype.lastIndexOf
---
## Array.prototype.lastIndexof

`lastIndexOf()`方法返回在数组中可以找到给定元素的最后一个索引，如果不存在则返回-1。从`fromIndex`开始向后搜索数组。

**句法**

```javascript
  arr.lastIndexOf(searchElement, fromIndex = arr.length - 1]) 
```

## 参数

*   **searchElement**
    
    *   要在数组中定位的元素。
*   **的fromIndex**
    
    *   _可选_ 。要开始向后搜索的索引。默认为数组的长度减去1，即将搜索整个数组。如果索引大于或等于数组的长度，则将搜索整个数组。如果是负数，则将其作为距离数组末尾的偏移量。请注意，即使索引为负数，仍会从后向前搜索数组。如果计算的索引小于0，则返回-1，即不搜索数组。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/ff679972%28v=vs.94%29.aspx)

## 返回

数组中最后一次出现`searchElement`的索引，如果未找到`searchElement` ，则`searchElement` -1。

## 描述

`lastIndexOf`使用严格相等（与===或`searchElement`运算符使用的方法相同）将`searchElement`与Array的元素进行比较。

## 备注

搜索以降序索引顺序（最后一个成员优先）发生。要按升序搜索，请使用`indexOf`方法。

可选的`fromIndex`参数指定开始搜索的数组索引。如果`fromIndex`大于或等于数组长度，则搜索整个数组。如果`fromIndex`为负数，则搜索从数组长度加上`fromIndex` 。如果计算的索引小于0，则返回-1。

## 例子

```javascript
  var array = [2, 5, 9, 2]; 
  array.lastIndexOf(2);     // 3 
  array.lastIndexOf(7);     // -1 
  array.lastIndexOf(2, 3);  // 3 
  array.lastIndexOf(2, 2);  // 0 
  array.lastIndexOf(2, -2); // 0 
  array.lastIndexOf(2, -1); // 3 
 
  // Create an array. 
  var ar = ["ab", "cd", "ef", "ab", "cd"]; 
 
  // Determine the first location, in descending order, of "cd". 
  document.write(ar.lastIndexOf("cd") + "<br/>"); 
 
  // Output: 4 
 
  // Find "cd" in descending order, starting at index 2. 
  document.write(ar.lastIndexOf("cd", 2) + "<br/>"); 
 
  // Output: 1 
 
  // Search for "gh" (which is not found). 
  document.write(ar.lastIndexOf("gh")+ "<br/>"); 
 
  // Output: -1 
 
  // Find "ab" with a fromIndex argument of -3. 
  // The search in descending order starts at index 3, 
  // which is the array length minus 2. 
  document.write(ar.lastIndexOf("ab", -3) + "<br/>"); 
  // Output: 0 

```