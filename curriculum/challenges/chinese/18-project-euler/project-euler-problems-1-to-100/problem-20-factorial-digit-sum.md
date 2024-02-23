---
id: 5900f3801000cf542c50fe93
title: '问题20：因子数字和'
challengeType: 1
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! means `n` × (`n` − 1) × ... × 3 × 2 × 1

For example, 10! = 10×9×...×3×2×1 = 3628800，  
和数字10中的数字之和！ is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

`sumFactorialDigits(25)`应该返回72。

# --hints--

`sumFactorialDigits(50)`应该返回216。

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(75)`应该返回432。

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(100)`应该返回648。

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(10)`应该返回27。

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` should return 432.

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` should return 648.

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
