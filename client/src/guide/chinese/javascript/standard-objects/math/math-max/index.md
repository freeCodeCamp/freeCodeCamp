---
title: Math Max
localeTitle: 数学最大
---
## 数学最大

`Math.max()`是一个函数，它返回作为参数传递的数值列表中的最大值。如果将非数字值作为参数传递， `Math.max()`将返回`NaN` 。

可以使用`spread (...)`或`apply`数值数组作为单个参数传递给`Math.max()` 。但是，当数组值的数量过高时，这些方法中的任何一个都会失败。

### 句法

```js
Math.max(value1, value2, value3, ...); 
```

### 参数

数字或有限的数字数组。

### 回报价值

给定数值的最大值，如果任何给定值为非数字，则为`NaN` 。

### 例子

_数字作为参数_

```js
Math.max(4, 13, 27, 0, -5); // returns 27 
```

_无效的参数_

```js
Math.max(4, 13, 27, 'eight', -5); // returns NaN 
```

_数组作为参数，使用Spread（...）_

```js
let numbers = [4, 13, 27, 0, -5]; 
 
 Math.max(...numbers); // returns 27 
```

_数组作为参数，使用Apply_

```js
let numbers = [4, 13, 27, 0, -5]; 
 
 Math.max.apply(null, numbers); // returns 27 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)