---
title: Map Function
localeTitle: 地图功能
---## 地图功能

`map()`函数用于从现有数组创建新数组，将函数应用于第一个数组的每个元素。

map函数的原始语法是：

```javascript
  let new_arr = arr.map(function callback(currentValue, index, array) { 
                  // Do some stuff with currentValue (index and array are optionals) 
                }) 
```

### 示例（ES6）：

```javascript
const myArray_1 = [1, 2, 3, 4]; 
 const myArray_2 = myArray_1.map(el => el * 2); 
```

`myArray_2`将包含以下元素： `[2, 4, 6, 8]`

`map()`是`Array`对象的一个​​方法，因此要将该函数传递给一个可迭代对象，必须使该对象成为一个Array。