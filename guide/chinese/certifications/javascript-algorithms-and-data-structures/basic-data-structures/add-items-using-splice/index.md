---
title: Add Items Using splice()
localeTitle: 使用splice（）添加项目
---
## 使用splice（）添加项目

*   使用接头（）函数，必须删除从阵列的第一2个元件`arr` ，并用替换它们`DarkSalmon`和`BlanchedAlmond` 。
*   请记住，拼接功能最多可以使用三个参数。

## 例：

```javascript
arr.splice(0, 1, "Two"); 
 /*  The first two paramemters are the same as they were in the previous challenge. 
    `0` will start the `splice()` function off at index 0. 
    The second parameter `1` will remove only 1 variable from the array. 
    The final variable "Two" will replace the variable in arr[0]. 
    Note: The final parameter can take more than 1 arguement. 
 */ 
```

## 解：

```javascript
function htmlColorNames(arr) { 
  // change code below this line 
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond"); 
  // change code above this line 
  return arr; 
 } 
 
 // do not change code below this line 
 console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick'])); 

```