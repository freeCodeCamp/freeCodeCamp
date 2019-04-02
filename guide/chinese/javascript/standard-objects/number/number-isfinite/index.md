---
title: Number isFinite
localeTitle: 数字是有限的
---
# 数字是有限的

## 描述

`Number.isFinite()`方法检查传入其中的值是否为有限数。这种方法是在ES6中引入的

## 句法

`Number.isFinite(val)`

### 参数

**val** - 检查有限性的值

## 返回值

一个[布尔值，](https://guide.freecodecamp.org/javascript/booleans)指示值是否为有限数。

## 描述

`Number.isFinite`与全局[isFinite（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)方法不同，它不会将测试值转换为数字。这意味着该值必须是一个数字并且有限以返回true。

## 例子
```
Number.isFinite(Infinity)     // false 
 Number.isFinite(-Infinity)    // false 
 
 Number.isFinite(1234)         // true 
 Number.isFinite(-1.11)        // true 
 Number.isFinite(0)            // true 
 Number.isFinite(3g55)         // true 
 
 Number.isFinite('1234')       // false 
 Number.isFinite('Hi')         // false 
 Number.isFinite('2005/12/12') // false 
 
 Number.isFinite('0');         // false, would've been true with 
                              // global isFinite('0') 
 
 Number.isFinite(null);        // false, would've been true with 
                              // global isFinite(null) 
```

#### 更多信息：

[ECMA 2015文件](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite) [Number.isFinite（）MDN Web文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)