---
id: 587d7b89367417b2b2512b48
title: 使用 spread 运算符展开数组项
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 引入了<dfn>展开操作符</dfn>，可以展开数组以及需要多个参数或元素的表达式。

下面的 ES5 代码使用了 `apply()` 来计算数组的最大值：

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` 的值为 `89`。

我们必须使用 `Math.max.apply(null, arr)`，因为 `Math.max(arr)` 返回 `NaN`。 `Math.max()` 函数中需要传入的是一系列由逗号分隔的参数，而不是一个数组。 展开操作符可以提升代码的可读性，使代码易于维护。

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` 的值应该是 `89`。

`...arr` 返回一个解压的数组。 也就是说，它*展开*数组。 然而，展开操作符只能够在函数的参数中或者数组中使用。 下面的代码将会报错：

```js
const spreaded = ...arr;
```

# --instructions--

使用展开操作符将 `arr1` 中的内容都复制到 `arr2` 中去。

# --hints--

`arr2` 应该是从 `arr1` 复制而来。

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

应使用展开操作符 `...` 来复制 `arr1`。

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

当 `arr1` 改变的时候，`arr2` 应保持不变。

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
