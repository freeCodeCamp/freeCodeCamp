---
title: String.prototype.concat
localeTitle: String.prototype.concat
---
concat（）方法组合了两个或多个字符串的文本并返回一个新字符串。

**句法**
```
str.concat(string2[,..., stringN]); 
```

## 参数

**string2 ... string _N_**要连接到此String的字符串。

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

## 描述

concat（）方法组合了两个或多个字符串的文本并返回连接的字符串。它不会修改原始字符串。

## 例子

**连接字符串**

```JavaScript
    var str1 = "Hello"; 
    var str2 = "World"; 
    console.log(str1.concat(str2)); 
    // Console will output: HelloWorld 
 
    var str2 = "Hello, "; 
    console.log(str2.concat(" Welcome ", "to FCC.")); 
    // Console will output: Hello, Welcome to FCC. 
```

来源\[MDN\]