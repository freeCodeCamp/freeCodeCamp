---
id: a97fd23d9b809dac9921074f
title: 可選參數
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

創建一個將兩個參數相加的函數。 如果只提供了一個參數，則返回一個需要一個參數並返回總和的函數。

比如，`addTogether(2, 3)` 應該返回 `5`。 而 `addTogether(2)` 應該返回一個函數。

調用這個返回的函數，爲它傳入一個值，會返回兩個值的總和：

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` 應返回 `5`。

如果任一參數不是有效數字，則返回 undefined。

# --hints--

`addTogether(2, 3)` 應返回 5。

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` 應返回 53。

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` 應返回 12。

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` 應該返回 `undefined`。

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(2, "3")` 應返回 `undefined`。

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` 應返回 `undefined`。

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether("2", 3)` 應該返回 `undefined`。

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` 應該返回 `undefined`。

```js
assert.isUndefined(addTogether(5, undefined));
```

# --seed--

## --seed-contents--

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

# --solutions--

```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```
