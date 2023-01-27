---
id: 5a23c84252665b21eecc7edb
title: 連結整数の最大整数
challengeType: 1
forumTopicId: 302298
dashedName: largest-int-from-concatenated-ints
---

# --description--

指定された正の整数一式に対して、この数字の連結が最大の整数を形成するように整数を並び替え、この最大整数を返すような関数を記述してください。

# --hints--

`maxCombine` は関数とします。

```js
assert(typeof maxCombine == 'function');
```

`maxCombine([1, 3, 3, 4, 55])` は数値を返す必要があります。

```js
assert(typeof maxCombine([1, 3, 3, 4, 55]) == 'number');
```

`maxCombine([1, 3, 3, 4, 55])` は `554331` を返す必要があります。

```js
assert.equal(maxCombine([1, 3, 3, 4, 55]), 554331);
```

`maxCombine([71, 45, 23, 4, 5])` は `71545423` を返す必要があります。

```js
assert.equal(maxCombine([71, 45, 23, 4, 5]), 71545423);
```

`maxCombine([14, 43, 53, 114, 55])` は `55534314114` を返す必要があります。

```js
assert.equal(maxCombine([14, 43, 53, 114, 55]), 55534314114);
```

`maxCombine([1, 34, 3, 98, 9, 76, 45, 4])` は `998764543431` を返す必要があります。

```js
assert.equal(maxCombine([1, 34, 3, 98, 9, 76, 45, 4]), 998764543431);
```

`maxCombine([54, 546, 548, 60])` は `6054854654` を返す必要があります。

```js
assert.equal(maxCombine([54, 546, 548, 60]), 6054854654);
```

# --seed--

## --seed-contents--

```js
function maxCombine(xs) {

}
```

# --solutions--

```js
function maxCombine(xs) {
  return parseInt(
    xs
      .sort(function(x, y) {
        var a = x.toString(),
          b = y.toString(),
          ab = parseInt(a + b),
          ba = parseInt(b + a);

        return ab > ba ? -1 : ab < ba ? 1 : 0;
      })
      .join(''),
    10
  );
}
```
