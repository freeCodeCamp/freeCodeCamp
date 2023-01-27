---
id: 5a23c84252665b21eecc7edb
title: Intero più grande da interi concatenati
challengeType: 1
forumTopicId: 302298
dashedName: largest-int-from-concatenated-ints
---

# --description--

Dato un insieme di numeri interi positivi, scrivere una funzione per ordinare gli interi in modo che la concatenazione dei numeri formi il più grande numero intero possibile e restituisca questo numero intero.

# --hints--

`maxCombine` dovrebbe essere una funzione.

```js
assert(typeof maxCombine == 'function');
```

`maxCombine([1, 3, 3, 4, 55])` dovrebbe restituire un numero.

```js
assert(typeof maxCombine([1, 3, 3, 4, 55]) == 'number');
```

`maxCombine([1, 3, 3, 4, 55])` dovrebbe restituire `554331`.

```js
assert.equal(maxCombine([1, 3, 3, 4, 55]), 554331);
```

`maxCombine([71, 45, 23, 4, 5])` dovrebbe restituire `71545423`.

```js
assert.equal(maxCombine([71, 45, 23, 4, 5]), 71545423);
```

`maxCombine([14, 43, 53, 114, 55])` dovrebbe restituire `55534314114`.

```js
assert.equal(maxCombine([14, 43, 53, 114, 55]), 55534314114);
```

`maxCombine([1, 34, 3, 98, 9, 76, 45, 4])` dovrebbe restituire `998764543431`.

```js
assert.equal(maxCombine([1, 34, 3, 98, 9, 76, 45, 4]), 998764543431);
```

`maxCombine([54, 546, 548, 60])` dovrebbe restituire `6054854654`.

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
