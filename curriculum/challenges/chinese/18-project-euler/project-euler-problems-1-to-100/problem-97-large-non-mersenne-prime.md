---
id: 5900f3ce1000cf542c50fee0
title: '问题 97：大的非梅森素数'
challengeType: 1
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form $2^{6972593} − 1$; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form $2^p − 1$, have been found which contain more digits.

然而，在 2004 年发现了一个巨大的非梅森素数，它包含 2,357,207 位数字：$28433 × 2^{7830457} + 1$。

以 $multiplier × 2^{power} + 1$ 的形式找到该非梅森素数的最后十位数字。

# --hints--

`largeNonMersennePrime(19, 6833086)` 应该返回一个字符串。

```js
assert(typeof largeNonMersennePrime(19, 6833086) === 'string');
```

`largeNonMersennePrime(19, 6833086)` 应该返回字符串 `3637590017`。

```js
assert.strictEqual(largeNonMersennePrime(19, 6833086), '3637590017');
```

`largeNonMersennePrime(27, 7046834)` 应该返回字符串 `0130771969`。

```js
assert.strictEqual(largeNonMersennePrime(27, 7046834), '0130771969');
```

`largeNonMersennePrime(6679881, 6679881)` 应该返回字符串 `4455386113`。

```js
assert.strictEqual(largeNonMersennePrime(6679881, 6679881), '4455386113');
```

`largeNonMersennePrime(28433, 7830457)` 应该返回字符串 `8739992577`。

```js
assert.strictEqual(largeNonMersennePrime(28433, 7830457), '8739992577');
```

# --seed--

## --seed-contents--

```js
function largeNonMersennePrime(multiplier, power) {

  return true;
}

largeNonMersennePrime(19, 6833086);
```

# --solutions--

```js
function largeNonMersennePrime(multiplier, power) {
  function modStepsResults(number, other, mod, startValue, step) {
    let result = startValue;
    for (let i = 0; i < other; i++) {
      result = step(number, result) % mod;
    }
    return result;
  }

  const numOfDigits = 10;
  const mod = 10 ** numOfDigits;
  const digitsAfterPower = modStepsResults(2, power, mod, 1, (a, b) => a * b);
  const digitsAfterMultiply = modStepsResults(
    digitsAfterPower,
    multiplier,
    mod,
    0,
    (a, b) => a + b
  );
  const lastDigits = (digitsAfterMultiply + 1) % mod;

  return lastDigits.toString().padStart(10, '0');
}
```
