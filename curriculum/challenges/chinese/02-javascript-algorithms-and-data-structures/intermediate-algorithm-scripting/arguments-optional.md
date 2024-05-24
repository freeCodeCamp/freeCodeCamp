---
id: a97fd23d9b809dac9921074f
title: 可选参数
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

创建一个将两个参数相加的函数。 如果只提供了一个参数，则返回一个需要一个参数并返回总和的函数。

比如，`addTogether(2, 3)` 应该返回 `5`。 而 `addTogether(2)` 应该返回一个函数。

调用这个返回的函数，为它传入一个值，会返回两个值的总和：

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` 应返回 `5`。

如果任一参数不是有效数字，则返回 undefined。

# --hints--

`addTogether(2, 3)` 应返回 5。

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23.4, 30)` 应返回 53.4。

```js
assert.deepEqual(addTogether(23.4, 30), 53.4);
```

`addTogether("2", 3)` 应返回 `undefined`。

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` 应返回 `undefined`。

```js
assert.isUndefined(addTogether(5, undefined));
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` 应返回 `undefined`。

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(5)` 应返回一个函数。

```js
assert.deepEqual(typeof(addTogether(5)), 'function');
```

`addTogether(5)(7)` 应返回 12。

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether(2)([3])` 应返回 `undefined`。

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether(2, "3")` 应返回 `undefined`。

```js
assert.isUndefined(addTogether(2, '3'));
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
  const first = arguments[0];
  if (typeof(first) !== 'number') {
    return undefined;
  }
  if (arguments.length === 1) {
    return function(second) {
      if (typeof(second) !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  const second = arguments[1];
  if (typeof(second) !== 'number') {
    return undefined;
  }
  return first + second;
}
```
