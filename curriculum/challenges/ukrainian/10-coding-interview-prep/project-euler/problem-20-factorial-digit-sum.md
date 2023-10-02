---
id: 5900f3801000cf542c50fe93
title: 'Завдання 20: Сума цифр факторіала'
challengeType: 1
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! означає `n` × (`n` − 1) × ... × 3 × 2 × 1

Наприклад, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,  
і сума цифр у числі 10! дорівнює 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Знайдіть суму цифр у числі `n`!

# --hints--

`sumFactorialDigits(10)` має повернути число.

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(10)` має повернути число 27.

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(25)` має повернути число 72.

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(50)` має повернути число 216.

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` має повернути число 432.

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` має повернути число 648.

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
