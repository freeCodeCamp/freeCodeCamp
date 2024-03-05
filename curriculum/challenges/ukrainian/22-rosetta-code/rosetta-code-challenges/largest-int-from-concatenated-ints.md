---
id: 5a23c84252665b21eecc7edb
title: Найбільше ціле число з об’єднаних цілих чисел
challengeType: 1
forumTopicId: 302298
dashedName: largest-int-from-concatenated-ints
---

# --description--

Дано множину натуральних чисел. Напишіть функцію, яка впорядкує цілі числа, щоб утворилось найбільше можливе ціле число, і поверне це число.

# --hints--

`maxCombine` має бути функцією.

```js
assert(typeof maxCombine == 'function');
```

`maxCombine([1, 3, 3, 4, 55])` має повернути число.

```js
assert(typeof maxCombine([1, 3, 3, 4, 55]) == 'number');
```

`maxCombine([1, 3, 3, 4, 55])` має повернути `554331`.

```js
assert.equal(maxCombine([1, 3, 3, 4, 55]), 554331);
```

`maxCombine([71, 45, 23, 4, 5])` має повернути `71545423`.

```js
assert.equal(maxCombine([71, 45, 23, 4, 5]), 71545423);
```

`maxCombine([14, 43, 53, 114, 55])` має повернути `55534314114`.

```js
assert.equal(maxCombine([14, 43, 53, 114, 55]), 55534314114);
```

`maxCombine([1, 34, 3, 98, 9, 76, 45, 4])` має повернути `998764543431`.

```js
assert.equal(maxCombine([1, 34, 3, 98, 9, 76, 45, 4]), 998764543431);
```

`maxCombine([54, 546, 548, 60])` має повернути `6054854654`.

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
