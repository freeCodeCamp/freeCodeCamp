---
title: Object.prototype.hasOwnProperty
localeTitle: Object.prototype.hasOwnProperty
---
## Object.prototype.hasOwnProperty

### 句法

`Object.hasOwnProperty(prop)`

### 描述

**hasOwnProperty（）**方法返回一个[布尔值，](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)指示对象是否拥有指定的属性。

这是检查对象是否具有指定属性的便捷方法;相应地返回true / false。

### 参数

##### 支柱

要测试的[字符串](https://developer.mozilla.org/en-US/docs/Glossary/String)或[符号](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) 。

### 例子

使用**hasOwnProperty（）**来测试给定对象中是否存在属性：

```js
var course = { 
  name: 'freeCodeCamp', 
  feature: 'is awesome', 
 } 
 
 var student = { 
  name: 'enthusiastic student', 
 } 
 
 course.hasOwnProperty('name');  // returns true 
 course.hasOwnProperty('feature');   // returns true 
 
 student.hasOwnProperty('name');  // returns true 
 student.hasOwnProperty('feature'); // returns false 
```

#### 链接

[MDN hasOwnProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)