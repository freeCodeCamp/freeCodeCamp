---
title: String.prototype.endsWith
localeTitle: String.prototype.endsWith
---
## String.prototype.endsWith

`endsWith()`方法检查字符串是否以字符串输入结束并返回布尔值。

### 例如

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld") // true 
 bool = str.endsWith("llo") // false 
```

此方法还可以接受另一个参数，即在搜索字符串的字符之前确定的`length` 。

```js
let str = "Hello world"; 
 let bool = str.endsWith("ld", 5) // false, it's the same as "Hello".endsWith("ld") 
 bool = str.endsWith("llo", 5) // true, it's the same as "Hello".endsWith("llo") 

```