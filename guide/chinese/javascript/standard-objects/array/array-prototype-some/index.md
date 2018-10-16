---
title: Array.prototype.some
localeTitle: Array.prototype.some
---
JavaScript数组方法`.some()`将使用回调函数来测试数组中的每个元素;一旦回调返回`true`则`.some()`将立即返回true。

**句法**

```javascript
  var arr = [1, 2, 3, 4]; 
  arr.some(callback[, thisArg]); 
```

## 回调函数

**句法**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
```

请参阅[算术运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)上的wiki以查看余数运算符`%`

**有3个参数**

*   currentElement
    
    *   这是一个变量，表示传递给回调的元素。
*   指数
    
    *   这是从0开始的当前元素的索引值
*   排列
    
    *   调用`.some()`的数组。

回调函数应该实现一个测试用例。

## thisArg

是可选参数，可以在\[MDN\]找到更多信息

## 描述

`.some()`将为数组中的每个元素运行回调函数。一旦回调返回true， `.some()`将返回`true` 。如果回调为数组中的_每个_元素返回一个[伪值](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) ，则`.some()`返回false。

`.some()`不会改变/改变调用它的数组。

## 例子

**将函数传递给`.some()`**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
 
  var arr1 = [1, 2, 3, 4, 5, 6]; 
  arr1.some(isEven);  // returns true 
  var arr2 = [1, 3, 5, 7]; 
  arr2.some(isEven);  // returns false 
```

**匿名功能**

```javascript
  var arr3 = ['Free', 'Code', 'Camp', 'The Amazing']; 
  arr3.some(function(curr, index, arr) { 
      if (curr === 'The Amazing') { 
          return true; 
      } 
      }); // returns true 
 
  var arr4 = [1, 2, 14, 5, 17, 9]; 
  arr4.some(function(curr, index, arr) { 
      return curr > 20; 
      });  // returns false 
 
  // ES6 arrows functions 
  arr4.some((curr) => curr >= 14)  // returns true 
```

资料来源： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)