---
id: a3566b1109230028080c9345
title: Somar todos os números em um intervalo
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

Vamos passar um array de dois números. Retorne a soma desses dois números mais a soma de todos os números entre eles. O menor número nem sempre chegará primeiro.

Por exemplo, `sumAll([4,1])` deve retornar `10` porque a soma de todos os números entre 1 e 4 (ambos incluídos) é `10`.

# --hints--

`sumAll([1, 4])` deve ser um número.

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` deve retornar 10.

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` deve retornar 10.

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` deve retornar 45.

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` deve retornar 45.

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
