---
title: Array.prototype.concat
localeTitle: Array.prototype.concat
---
## Array.prototype.concat

'concat'方法返回一个新数组，该数组由您调用它的数组元素组成，后跟参数传递顺序的元素。

您可以将多个参数传递给'concat'方法。参数可以是数组，也可以是布尔值，字符串和数字等数据类型。

### 句法

```javascript
const newArray = array.concat(value1, value2, value3...); 
```

### 例子

#### 连接两个数组

```javascript
var cold = ['Blue', 'Green', 'Purple']; 
 var warm = ['Red', 'Orange', 'Yellow']; 
 
 var result = cold.concat(warm); 
 
 console.log(result); 
 // results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow']; 
```

#### 将值连接到数组

```javascript
const odd = [1, 3, 5, 7, 9]; 
 const even = [0, 2, 4, 6, 8]; 
 
 const oddAndEvenAndTen = odd.concat(even, 10); 
 
 console.log(oddAndEvenAndTen); 
 // results in [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10]; 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)