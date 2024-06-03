---
id: 5a23c84252665b21eecc7edb
title: Größter Integer bei verketteten Integer
challengeType: 1
forumTopicId: 302298
dashedName: largest-int-from-concatenated-ints
---

# --description--

Given a set of positive integers, write a function to order the integers in such a way that the concatenation of the numbers forms the largest possible integer and return this integer.

# --hints--

`maxCombine` sollte eine Funktion sein.

```js
assert(typeof maxCombine == 'function');
```

`maxCombine([1, 3, 3, 4, 55])` sollte eine Zahl zurückgeben.

```js
assert(typeof maxCombine([1, 3, 3, 4, 55]) == 'number');
```

`maxCombine([1, 3, 3, 4, 55])` sollte `554331` zurückgeben.

```js
assert.equal(maxCombine([1, 3, 3, 4, 55]), 554331);
```

`maxCombine([71, 45, 23, 4, 5])` sollte `71545423` zurückgeben.

```js
assert.equal(maxCombine([71, 45, 23, 4, 5]), 71545423);
```

`maxCombine([14, 43, 53, 114, 55])` sollte `55534314114` zurückgeben.

```js
assert.equal(maxCombine([14, 43, 53, 114, 55]), 55534314114);
```

`maxCombine([1, 34, 3, 98, 9, 76, 45, 4])` sollte `998764543431` zurückgeben.

```js
assert.equal(maxCombine([1, 34, 3, 98, 9, 76, 45, 4]), 998764543431);
```

`maxCombine([54, 546, 548, 60])` sollte `6054854654` zurückgeben.

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
