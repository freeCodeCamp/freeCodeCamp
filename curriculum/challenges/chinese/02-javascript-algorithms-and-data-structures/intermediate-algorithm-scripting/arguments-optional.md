---
id: a97fd23d9b809dac9921074f
title: 可选参数
challengeType: 5
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

创建一个将两个参数相加的函数。如果调用时只传入了一个参数，则应返回一个接收新的参数的函数。待传入下一个参数后，再返回与之前传入的参数之和。

比如，`addTogether(2, 3)` 应该返回 `5`。而 `addTogether(2)` 应该返回一个函数。

调用这个返回的函数，为它传入一个值，然后再返回总和：

`var sumTwoAnd = addTogether(2);`

`sumTwoAnd(3)` 此时应返回 `5`。

任何时候，只要任一传入的参数不是数字，就应返回 `undefined`。

# --hints--

`addTogether(2, 3)` 应返回 5。

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` 应返回 53。

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` 应返回 12。

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("http://bit.ly/IqT6zt")` 应返回 undefined。

```js
assert.isUndefined(addTogether('http://bit.ly/IqT6zt'));
```

`addTogether(2, "3")` 应返回 undefined。

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` 应返回 undefined。

```js
assert.isUndefined(addTogether(2)([3]));
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
