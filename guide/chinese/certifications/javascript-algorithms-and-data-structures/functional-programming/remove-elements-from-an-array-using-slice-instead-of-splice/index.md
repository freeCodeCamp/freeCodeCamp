---
title: Remove Elements from an Array Using slice Instead of splice
localeTitle: 使用切片从阵列中删除元素而不是拼接
---
## 使用切片从阵列中删除元素而不是拼接

*   splice和slice方法之间的区别在于slice方法不会改变原始数组，而是返回一个新数组。
*   slice方法需要2个参数才能使索引开始和结束切片（结束是非包含的）。
*   如果您不想改变原始数组，可以使用切片方法。

## 解

```javascript
function nonMutatingSplice(cities) { 
  // Add your code below this line 
 
  return cities.slice(0, 3); 
 
  // Add your code above this line 
 } 
 var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]; 
 nonMutatingSplice(inputCities); 

```