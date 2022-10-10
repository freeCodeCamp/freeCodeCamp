---
id: 5900f3801000cf542c50fe93
title: 'Problema 20: Suma de los dígitos de un factorial'
challengeType: 1
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! se define como `n` × (`n` − 1) × ... × 3 × 2 × 1

Por ejemplo, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,  
y la suma de los dígitos del número 10! es 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Encuentra la suma de los dígitos de `n`!

# --hints--

`sumFactorialDigits(10)` debe devolver un número.

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(10)` debe devolver 27.

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(25)` debe devolver 72.

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(50)` debe devolver 216.

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` debe devolver 432.

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` debe devolver 648.

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
