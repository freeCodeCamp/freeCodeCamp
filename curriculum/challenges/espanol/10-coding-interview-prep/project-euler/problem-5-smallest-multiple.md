---
id: 5900f3711000cf542c50fe84
title: 'Problema 5: Múltiplo más pequeño'
challengeType: 1
forumTopicId: 302160
dashedName: problem-5-smallest-multiple
---

# --description--

2520 es el número más pequeño que puede ser dividido de forma exacta por cada uno de los números de 1 a 10.

¿Cuál es el número positivo más pequeño que es divisible de forma exacta por todos los números de 1 a `n`?

# --hints--

`smallestMult(5)`debe devolver un número.

```js
assert(typeof smallestMult(5) === 'number');
```

`smallestMult(5)` debe devolver 60.

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)` debe devolver 420.

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)` debe devolver 2520.

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)` debe devolver 360360.

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)` debe devolver 232792560.

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
