---
title: Copy Array Items Using slice()
localeTitle: 使用slice（）复制数组项
---
## 使用slice（）复制数组项

*   `slice()`函数必须用于返回仅包含`warm` `sunny`的数组。
*   因此，必须将两个参数传递给`slice()`函数。第一个参数必须是您希望子字符串开始的索引。第二个参数必须是子字符串结束的索引。
*   注意：第二个参数将在该精确索引处结束子字符串。

## 例：

```javascript
 return arr.slice(1,4); 
 /* This will return a substring consisting of indexs [1,2,3] 
    Note: arr[4] is NOT included. 
```

## 解：

```javascript
function forecast(arr) { 
  // change code below this line 
  return arr.slice(2,4); 
 } 
 
 // do not change code below this line 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); 

```