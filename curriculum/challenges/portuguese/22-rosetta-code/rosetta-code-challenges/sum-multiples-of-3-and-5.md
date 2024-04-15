---
id: 5a23c84252665b21eecc8040
title: Soma dos múltiplos de 3 e 5
challengeType: 1
forumTopicId: 302332
dashedName: sum-multiples-of-3-and-5
---

# --description--

O objetivo é escrever uma função que encontra a soma de todos os múltiplos positivos de 3 ou 5 abaixo de *n*.

# --hints--

`sumMults` deve ser uma função.

```js
assert(typeof sumMults == 'function');
```

`sumMults(10)` deve retornar um número.

```js
assert(typeof sumMults(10) == 'number');
```

`sumMults(10)` deve retornar `23`.

```js
assert.equal(sumMults(10), 23);
```

`sumMults(100)` deve retornar `2318`.

```js
assert.equal(sumMults(100), 2318);
```

`sumMults(1000)` deve retornar `233168`.

```js
assert.equal(sumMults(1000), 233168);
```

`sumMults(10000)` deve retornar `23331668`.

```js
assert.equal(sumMults(10000), 23331668);
```

`sumMults(100000)` deve retornar `2333316668`.

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
