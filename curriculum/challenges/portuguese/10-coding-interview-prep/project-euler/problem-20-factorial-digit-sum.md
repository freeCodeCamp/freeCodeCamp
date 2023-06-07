---
id: 5900f3801000cf542c50fe93
title: 'Problema 20: Soma dos algarismos de um fatorial'
challengeType: 1
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! significa `n` × (`n` - 1) × ... × 3 × 2 × 1

Por exemplo: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800.   
E a soma dos algarismos no número 10! é 3 + 6 + 2 + 8 + 8 + 0 + 0 + 0 = 27.

Encontre a soma dos algarismos de `n`!

# --hints--

`sumFactorialDigits(10)` deve retornar um número.

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(10)` deve retornar 27.

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(25)` deve retornar 72.

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(50)` deve retornar 216.

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` deve retornar 432.

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` deve retornar 648.

```js
assert.strictEqual(sumFactorialDigits(100), 648);
```

# --seed--

## --seed-contents--

```js
function sumFactorialDigits(n) {

  return n;
}

sumFactorialDigits(100);
```

# --solutions--

```js
let factorial = (n) => n <= 1 ? BigInt(n) : BigInt(n) * BigInt(factorial(--n));

let sumDigits = n => n.toString().split('').map(x => parseInt(x)).reduce((a,b) => a + b);

function sumFactorialDigits(n) {
  return sumDigits(factorial(n));
}
```
