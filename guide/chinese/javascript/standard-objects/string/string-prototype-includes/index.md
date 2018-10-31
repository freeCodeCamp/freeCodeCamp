---
title: String.prototype.includes
localeTitle: String.prototype.includes
---
## String.prototype.includes

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/string/string-prototype-includes/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

`includes()`方法用于确定是否可以在另一个字符串中找到一个字符串。此方法返回布尔值（ `true`或`false` ）。

需要注意的是，此方法区分大小写。

**句法**

```js
string.includes(searchString[, position]) 
```

**参数**

此方法只需要一个参数（searchString）。但是，通过包含第二个参数（位置），您可以从searchString中的特定位置（或索引）开始搜索字符串中的字符串。

**例子**

```js
let string = "Roses are red, violets are blue."; 
 
 string.includes('red'); // returns true 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('Red'); // returns false 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('red',12); // returns false because 'red' starts at position 9, and our search begins at position 12. 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('blue',12); // returns true because 'blue' starts after our search begins at position 12. 
```

```javascript
let string = "Roses are red, violets are blue."; 
 
 string.includes('violets are blue'); // returns true 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)