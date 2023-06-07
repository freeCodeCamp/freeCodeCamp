---
id: 5900f3711000cf542c50fe84
title: 'Problema 5: Menor múltiplo'
challengeType: 1
forumTopicId: 302160
dashedName: problem-5-smallest-multiple
---

# --description--

2520 é o menor número que pode ser dividido por cada um dos números entre 1 e 10, sem nenhum resto.

Qual é o menor número positivo que é igualmente divisível por todos os números de 1 a `n`?

# --hints--

`smallestMult(5)` deve retornar um número.

```js
assert(typeof smallestMult(5) === 'number');
```

`smallestMult(5)` deve retornar 60.

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)` deve retornar 420.

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)` deve retornar 2520.

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)` deve retornar 360360.

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)` deve retornar 232792560.

```js
assert.strictEqual(smallestMult(20), 232792560);
```

# --seed--

## --seed-contents--

```js
function smallestMult(n) {

  return true;
}

smallestMult(20);
```

# --solutions--

```js
function smallestMult(n){
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
  }

  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  var result = 1;
  for(var i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
```
