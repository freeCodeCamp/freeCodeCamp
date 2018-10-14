---
title: RegExp.prototype.test
localeTitle: RegExp.prototype.test
---
## RegExp.prototype.test

如果字符串与正则表达式匹配，则`test()`方法返回`true`否则返回`false` 。

## 例子

```javascript
let str = 'freeCodeCamp'; 
 let regEx = /Code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints true 
```

**注意：**正则表达式区分大小写。如果`regEx`是`/code/`而不是`/Code/`则上面的示例将返回`false` 。要使正则表达式不区分大小写，必须将`i`标志添加到正则表达式中。

```javascript
let str = 'freeCodeCamp'; 
 let regEx = /code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints false 
 
 // Include the 'i' flag. 
 
 regEx = /code/i; 
 result = regEx.test(str); 
 console.log(result); // prints true 
```

#### 更多信息：

查看[官方MDN `RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)页面以获取更多信息。