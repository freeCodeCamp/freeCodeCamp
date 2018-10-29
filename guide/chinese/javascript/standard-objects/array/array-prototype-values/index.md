---
title: Array.prototype.values
localeTitle: Array.prototype.values
---
## Array.prototype.values

`values`方法返回一个新的`Array Iterator`对象，该对象包含数组中每个索引的值。

### 句法

```javascript
arr.values() 
```

### 返回

一个新的`array` ittertator对象。

### 例

```javascript
let friends = ["Rachel", "Monica", "Chandler", "Phoebe", "Joey", "Ross"] 
 
 for (let friend of friends) { 
  console.log(friend) 
 } 
 
 // Rachel 
 // Monica 
 // Chandler 
 // Phoebe 
 // Joey 
 // Ross 
```

#### 更多信息：

[MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)