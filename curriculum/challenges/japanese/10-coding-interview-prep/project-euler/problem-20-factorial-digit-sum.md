---
id: 5900f3801000cf542c50fe93
title: '問題 20: 階乗の各位の和'
challengeType: 1
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! は、`n` × (`n` − 1) × ... 3 × 2 × 1 を意味します。

例えば 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800 であり、  
10! の各位の和は 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27 です。

`n`! の各位の和を求めなさい。

# --hints--

`sumFactorialDigits(10)` は数値を返す必要があります。

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(10)` は 27 を返す必要があります。

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(25)` は 72 を返す必要があります。

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(50)` は 216 を返す必要があります。

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` は 432 を返す必要があります。

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` は 648 を返す必要があります。

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
