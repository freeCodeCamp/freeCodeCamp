---
id: a97fd23d9b809dac9921074f
title: 省略可能な引数
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

2 つの引数を合計する関数を作成してください。 1 つの引数のみが与えられた場合は、関数を返してください。その関数は 1 つの引数を取り、合計を返します。

たとえば、`addTogether(2, 3)` は `5`を返し、`addTogether(2)` は関数を返す必要があります。

この返された関数に １ つの引数を与えて呼び出すと、合計を返します。

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` は `5` を返します。

いずれかの引数が有効な数値でない場合は、undefined を返してください。

# --hints--

`addTogether(2, 3)` は 5 を返す必要があります。

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23.4, 30)` should return 53.4.

```js
assert.deepEqual(addTogether(23.4, 30), 53.4);
```

`addTogether("2", 3)` should return `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` should return `undefined`.

```js
assert.isUndefined(addTogether(5, undefined));
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` should return `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(5)` should return a function.

```js
assert.deepEqual(typeof(addTogether(5)), 'function');
```

`addTogether(5)(7)` should return 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether(2)([3])` should return `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether(2, "3")` should return `undefined`.

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
