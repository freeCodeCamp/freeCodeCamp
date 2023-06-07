---
id: 5900f3801000cf542c50fe93
title: 'Problem 20: Factorial digit sum'
challengeType: 1
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! bedeutet `n` × (`n` − 1) × ... × 3 × 2 × 1

Zum Beispiel, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,  
und die Summe der Ziffern der Zahl 10! ist 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Finde die Summe der Ziffern `n`!

# --hints--

`sumFactorialDigits(10)` sollte eine Zahl zurückgeben.

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(10)` sollte 27 zurückgeben.

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(25)` sollte 72 zurückgeben.

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(50)` sollte 216 zurückgeben.

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` sollte 432 zurückgeben.

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` sollte 648 zurückgeben.

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
