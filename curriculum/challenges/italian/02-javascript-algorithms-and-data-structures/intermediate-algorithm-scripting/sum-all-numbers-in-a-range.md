---
id: a3566b1109230028080c9345
title: Sommare tutti i numeri in un intervallo
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

Ti passeremo una serie di due numeri. Restituisci la somma di questi due numeri più la somma di tutti i numeri compresi tra di essi. Il numero più basso non sempre verrà per primo.

Per esempio, `sumAll([4,1])` dovrebbe restituire `10` perché la somma di tutti i numeri tra 1 e 4 (entrambi inclusi) è `10`.

# --hints--

`sumAll([1, 4])` dovrebbe restituire un numero.

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` dovrebbe restituire 10.

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` dovrebbe restituire 10.

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` dovrebbe restituire 45.

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` dovrebbe restituire 45.

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
