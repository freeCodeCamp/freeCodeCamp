---
title: Array.prototype.findIndex
localeTitle: Array.prototype.findIndex
---
## 信息

`findIndex()`方法返回数组中第一个满足提供的测试函数的元素的索引。否则返回-1。

`findIndex()`方法不会改变调用它的数组。

句法：
```
arr.findIndex(callback[, thisArg]) 
```

##### 参数

*   `callback`
*   函数对数组中的每个值执行，取三个参数：
*   `element`
    *   当前元素在数组中处理。
*   `index`
    *   数组中正在处理的当前元素的索引。
*   `array`
    *   调用了数组findIndex（）。
*   `thisArg` （可选）
*   执行回调时要用作此对象的对象。

##### 返回值

如果元素通过测试，则为数组中的索引;否则，-1。

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## 例子

此示例将在数组中找到相应的项并从中返回索引。

```javascript
let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.findIndex(findMovies)); 
 
 // Index of 2nd element in the Array is returned, 
 // so this will result in '1' 
```

以下示例显示了回调函数的每个可选参数的输出。这将返回`-1`因为没有任何项将从回调函数返回true。

```javascript
function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].findIndex(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = -1 

```