---
id: 5a23c84252665b21eecc8040
title: Somma multipli di 3 e 5
challengeType: 1
forumTopicId: 302332
dashedName: sum-multiples-of-3-and-5
---

# --description--

L'obiettivo è quello di scrivere una funzione che trova la somma di tutti i multipli positivi di 3 o 5 inferiori a *n*.

# --hints--

`sumMults` dovrebbe essere una funzione.

```js
assert(typeof sumMults == 'function');
```

`sumMults(10)` dovrebbe restituire un numero.

```js
assert(typeof sumMults(10) == 'number');
```

`sumMults(10)` dovrebbe restituire `23`.

```js
assert.equal(sumMults(10), 23);
```

`sumMults(100)` dovrebbe restituire `2318`.

```js
assert.equal(sumMults(100), 2318);
```

`sumMults(1000)` dovrebbe restituire `233168`.

```js
assert.equal(sumMults(1000), 233168);
```

`sumMults(10000)` dovrebbe restituire `23331668`.

```js
assert.equal(sumMults(10000), 23331668);
```

`sumMults(100000)` dovrebbe restituire `2333316668`.

```js
assert.equal(sumMults(100000), 2333316668);
```

# --seed--

## --seed-contents--

```js
function sumMults(n) {

}
```

# --solutions--

```js
function sumMults(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}
```
