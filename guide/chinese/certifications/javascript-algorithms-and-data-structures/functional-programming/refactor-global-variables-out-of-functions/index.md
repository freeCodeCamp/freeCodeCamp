---
title: Refactor Global Variables Out of Functions
localeTitle: 重构函数的全局变量
---
## 重构函数的全局变量

*   如果您在更改bookList时遇到问题，请尝试在函数中使用该数组的副本。
    
*   这里有一些关于\[JavaScript如何处理函数参数\]的更多信息（https://codeburst.io/javascript-passing-by-value-vs- reference-explanation-in-plain-english-8d00fd06a47c）。
    

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

## 解决方案1

```javascript
function add (arr, bookName) { 
  let newArr = [...arr];  // Copy the bookList array to a new array. 
  newArr.push(bookName);  // Add bookName parameter to the end of the new array. 
  return newArr; // Return the new array. 
 } 
 
 function remove (arr, bookName) { 
  let newArr = [...arr];  // Copy the bookList array to a new array. 
  if (newArr.indexOf(bookName) >= 0) {   // Check whether the bookName parameter is in new array. 
    /. 
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array. 
    return newArr; // Return the new array. 
    } 
 } 
```

## 解决方案2

```javascript
function add (list,bookName) { 
  return [...list, bookName]; 
 } 
 
 function remove (list,bookName) { 
  if (list.indexOf(bookName) >= 0) { 
    return list.filter((item) => item !== bookName); 
    } 
 } 

```