---
title: Array.prototype.join
localeTitle: Array.prototype.join
---
JavaScript数组方法`.join()`将数组的所有元素组合成一个字符串。

**句法**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor", "Sit"]; 
  var str = array.join([separator]); 
```

## 参数

**分隔器**

可选的。指定用于分隔原始数组的每个元素的字符串。如果分隔符不是字符串，则将其转换为字符串。如果未提供separator参数，则默认情况下使用逗号分隔数组元素。如果separator是一个空字符串`""` ，则所有数组元素之间的连接都没有分隔符。

## 描述

`.join()`将数组的所有元素连接成一个字符串。如果任何数组元素`undefined`或为`null` ，则该元素将转换为空字符串`""` 。

## 例子

**使用`.join()`四种不同的方式**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor" ,"Sit"]; 
 
  var join1 = array.join();           /* assigns "Lorem,Ipsum,Dolor,Sit" to join1 variable 
                                         (because no separator was provided .join() 
                                         defaulted to using a comma) */ 
  var join2 = array.join(", ");       // assigns "Lorem, Ipsum, Dolor, Sit" to join2 variable 
  var join3 = array.join(" + ");      // assigns "Lorem + Ipsum + Dolor + Sit" to join3 variable 
  var join4 = array.join("");         // assigns "LoremIpsumDolorSit" to join4 variable 
```

资料来源： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)