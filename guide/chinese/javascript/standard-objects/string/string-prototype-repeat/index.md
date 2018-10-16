---
title: String.prototype.repeat
localeTitle: String.prototype.repeat
---
## String.prototype.repeat

`.repeat(n)`方法获取整数参数，并返回重复`n`次的字符串。

### 例如

```js
  let str = "test"; 
  console.log(str.repeat(3)); // "testtesttest", test is repeated 3 times 
 
  // NB 
  console.log(str.repeat(2.5)); // "testtest", 2.5 is converted to an integer and test is repeated 2 times 
```

#### 更多信息

[MDN - String.prototype.repeat（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)