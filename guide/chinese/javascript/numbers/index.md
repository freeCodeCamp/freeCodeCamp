---
title: Numbers
localeTitle: 数字
---
## 数字

JavaScript `number`的实现基于`IEEE 754`标准，通常称为“浮点”。

[IEEE 754维基百科链接](https://en.wikipedia.org/wiki/IEEE_754) [IEEE 754双精度浮点可视化](http://bartaz.github.io/ieee754-visualization/)

数字文字通常表示为`base-10`十进制文字。

```javascript
var foo = 47; 
 var bar = 47.9; 
```

十进制值的前导部分（如果为`0` ）是可选的：

```javascript
var same = 0.47; 
 var stillSame = .47; 
```

同样，后面的十进制值的尾部（小数） `.` ，如果为`0` ，则是可选的：

```javascript
var a = 47.0; 
 var b = 47.; 
```

默认情况下，大多数数字将输出为`base-10`小数，并删除尾随小数`0` 。所以：

```javascript
var foo = 47.300; 
 var bar = 47.0; 
 
 foo; // 47.3 
 bar; // 47 
```

非常大或非常小的`numbers`可写为：

```javascript
var foo = 47e8; // 4700000000 
 var baz = 47e-8; // 00.00000047 
```

`toExponential`方法可用于将`number`转换为`exponential notation` 。

```javascript
var foo = 47e8; 
 foo;  // 4700000000 
 foo.toExponential()   //"47e8" 
```

Numbers可以访问`Number.prototype`中内置的方法。

例如： `toFixed()`方法格式化一个具有小数点右侧特定位数的数字。

```javascript
var foo = 47.69; 
 foo.toFixed(0);  // "48" 
 foo.toFixed(1);  // "47.7" 
 foo.toFixed(2);  // "47.69" 
```

> 在浏览器中键入`Number.prototype`并自己查看其他可用方法。

#### 更多信息：

1.  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
2.  [JavaScript编号](https://www.w3schools.com/js/js_numbers.asp)

#### 参考

1.  Kyle Simpson的[类型和语法](https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar) 。
2.  [ECMAScript语言规范：4.3.20](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.20)
3.  [ECMAScript语言规范：15.7数字对象](https://www.ecma-international.org/ecma-262/5.1/#sec-15.7)