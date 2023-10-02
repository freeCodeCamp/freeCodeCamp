---
id: 587d7dab367417b2b2512b6e
title: 使用 every 方法檢查數組中的每個元素是否符合條件
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

`every` 方法用於檢測數組中*所有*元素是否都符合指定條件。 如果所有元素滿足條件，返回布爾值 `true`，反之返回 `false`。

舉個例子，下面的代碼檢測數組 `numbers` 的所有元素是否都小於 10：

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

`every` 方法在這裏會返回 `false`。

# --instructions--

在 `checkPositive` 函數中使用 `every` 方法檢查 `arr` 中是否所有元素都是正數。 函數應返回一個布爾值。

# --hints--

應使用`every`方法。

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` 應返回 `false`。

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` 應返回 `true`。

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` 應返回 `false`。

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
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
  return arr.every(num => num > 0);
}
```
