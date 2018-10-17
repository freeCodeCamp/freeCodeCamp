---
title: Capitalize the First Letter of a String
localeTitle: 将字符串的第一个字母大写
---
要大写随机字符串的第一个字母，您应该按照以下步骤操作：

1.  获取字符串的第一个字母;
2.  将第一个字母转换为大写;
3.  获取字符串的其余部分;
4.  将首字母大写与字符串的其余部分连接起来并返回结果;

## 1.获取字符串的第一个字母

你应该使用[charAt（）](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)方法， 在_索引0处_ ，选择字符串的第一个字符。

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0); // Returns "f" 
```

> 注意： `charAt`优于使用`[ ]` （ [括号表示法](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) ）为`str.charAt(0)` 在`''[0]`情况下，为`str = ''`返回一个空字符串（ _`''`_ ）而不是`undefined` 。

## 2.将第一个字母转换为大写

您可以使用[toUpperCase（）](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)方法 并将调用字符串转换为大写。

```javascript
var string = "freeCodecamp"; 
 
 string.charAt(0).toUpperCase(); // Returns "F" 
```

## 3.获取字符串的剩余部分

您可以使用[slice（）](https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice)方法并获取 字符串的剩余部分（从第二个字符， _索引1_到字符串的结尾）。

```javascript
var string = "freeCodecamp"; 
 
 string.slice(1); // Returns "reeCodecamp" 
```

## 4.返回结果，添加第一个字母和字符串的其余部分

您应该创建一个接受字符串作为唯一参数的函数，并返回第一个字母的串联 大写`string.charAt(0).toUpperCase()`和字符串`string.slice(1)`的其余部分。

```javascript
var string = "freeCodecamp"; 
 
 function capitalizeFirstLetter(str) { 
  return str.charAt(0).toUpperCase() + str.slice(1); 
 } 
 
 capitalizeFirstLetter(string); // Returns "FreeCodecamp" 
```

或者您可以将该函数添加到`String.prototype`以便使用以下代码直接在字符串上使用它 （ _这样该方法不可枚举，但可以在以后覆盖或删除_ ）：

```javascript
var string = "freeCodecamp"; 
 
 /* this is how methods are defined in prototype of any built-in Object */ 
 Object.defineProperty(String.prototype, 'capitalizeFirstLetter', { 
    value: function () { 
        return this.charAt(0).toUpperCase() + this.slice(1); 
    }, 
    writable: true, // so that one can overwrite it later 
    configurable: true // so that it can be deleted later 
 }); 
 
 string.capitalizeFirstLetter(); // Returns "FreeCodecamp" 
```

### 资源

[stackoverflow - 在JavaScript中大写字符串的第一个字母](http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087)