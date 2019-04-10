---
title: Write Arrow Functions with Parameters
localeTitle: 用参数写箭头函数
---
## 用参数写箭头函数

这里有一个[关于JavaScript中匿名函数](http://helephant.com/2008/08/23/javascript-anonymous-functions/)的[很酷的资源](http://helephant.com/2008/08/23/javascript-anonymous-functions/) ，以防你仍然想知道它们是什么，以及它们的作用。

现在，您的任务是将参数放在箭头函数中。

## 提示1：

摆脱`function`关键字。放箭头操作符。

## 提示2：

确保将`var`更改为`const` 。

## 扰流板警告 - 提前解决！

## 解：

```javascript
const myConcat = (arr1, arr2) => { 
  "use strict"; 
  return arr1.concat(arr2); 
 }; 
 // test your code 
 console.log(myConcat([1, 2], [3, 4, 5])); 

```