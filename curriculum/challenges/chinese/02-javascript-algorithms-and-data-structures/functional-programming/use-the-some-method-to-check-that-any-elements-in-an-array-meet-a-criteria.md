---
id: 587d7dab367417b2b2512b6f
title: 使用 some 方法检查数组中是否有元素是否符合条件
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

`some` 方法用于检测数组中*任何*元素是否满足指定条件。 如果有一个元素满足条件，返回布尔值 `true`，反之返回 `false`。

举个例子，下面的代码检测数组`numbers`中是否有元素小于 10：

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

`some` 方法将返回 `true`。

# --instructions--

在 `checkPositive` 函数值中使用 `some` 检查 `arr` 中是否有元素为正数。 函数应返回一个布尔值。

# --hints--

应该使用 `some` 方法。

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` 应返回 `true`。

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` 应返回 `true`。

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` 应返回 `false`。

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
