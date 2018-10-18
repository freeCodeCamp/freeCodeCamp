---
title: Add Key-Value Pairs to JavaScript Objects
localeTitle: 将键值对添加到JavaScript对象
---
## 将键值对添加到JavaScript对象

*   食物对象已经宣布。剩下要做的就是添加三个新的`key-values` 。

```javascript
OBJECT[{KEY}] = {VALUE} 
```

*   上面的代码将在对象中创建一个ney `key-value` 。

## 解

```javascript
let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28 
 }; 
 // change code below this line 
 foods['bananas'] = 13; 
 foods['grapes'] = 35; 
 foods['strawberries'] = 27; 
 // change code above this line 
 console.log(foods); 

```