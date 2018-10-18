---
title: Number isInteger
localeTitle: Number isInteger
---
# Number isInteger

## 描述

`Number.isInteger()`方法确定传递的值是否为整数。这种方法是在ES6中引入的

## 句法

`Number.isInteger(val)`

### 参数

**val** - 要检查是否为整数的值

## 返回值

一个[布尔值，](https://guide.freecodecamp.org/javascript/booleans)指示值是否为整数。

## 描述

如果传递的值是整数，则该方法返回`true` ，否则返回`false` 。无限和`NaN`值返回`false` 。

## 例子
```
Number.isInteger(0);         // true 
 Number.isInteger(-0);        // true 
 Number.isInteger(1);         // true 
 Number.isInteger(2);         // true 
 Number.isInteger(-100001);   // true 
 Number.isInteger(999999999999999999999999); // true 
 
 Number.isInteger(0.1);       // false 
 Number.isInteger(0.3);       // false 
 Number.isInteger(Math.PI);   // false 
 
 Number.isInteger(NaN);       // false 
 Number.isInteger(Infinity);  // false 
 Number.isInteger(-Infinity); // false 
 Number.isInteger('10');      // false 
 Number.isInteger(true);      // false 
 Number.isInteger(false);     // false 
 Number.isInteger([1]);       // false 
```

#### 更多信息：

[ECMA 2015文件](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isinteger) [Number.isInteger（）MDN Web文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)