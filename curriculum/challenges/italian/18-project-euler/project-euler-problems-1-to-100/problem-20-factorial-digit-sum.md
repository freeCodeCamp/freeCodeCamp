---
id: 5900f3801000cf542c50fe93
title: 'Problema 20: somma delle cifre del fattoriale'
challengeType: 1
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! significa `n` × (`n` − 1) × ... × 3 × 2 × 1

Ad esempio, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,  
e la somma delle cifre nel numero 10! è 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Trova la somma delle cifre del numero `n`!

# --hints--

`sumFactorialDigits(10)` dovrebbe restituire un numero.

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(10)` dovrebbe restituire 27.

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(25)` dovrebbe restituire 72.

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(50)` dovrebbe restituire 216.

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` dovrebbe restituire 432.

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` dovrebbe restituire 648.

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
