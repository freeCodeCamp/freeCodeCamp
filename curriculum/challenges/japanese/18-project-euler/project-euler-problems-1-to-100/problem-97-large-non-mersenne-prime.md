---
id: 5900f3ce1000cf542c50fee0
title: '問題 97: 巨大な非メルセンヌ素数'
challengeType: 1
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

100 万桁を超える初めての既知の素数は 1999 年に発見されました。それは $2^{6972593} - 1$ で表されるメルセンヌ素数で、ちょうど 2,098,960 桁の数です。 以降、さらに桁が多い メルセンヌ素数 ($2^p − 1$ の形式) が他にも発見されました。

しかし 2004年、2,357,207 桁の巨大な非メルセンヌ素数 $28433 × 2^{7830457} + 1$ が発見されました。

$multiplier × 2^{power} + 1$ で表されるその非メルセンヌ素数の下位 10 桁を求めなさい。

# --hints--

`largeNonMersennePrime(19, 6833086)` は文字列を返す必要があります。

```js
assert(typeof largeNonMersennePrime(19, 6833086) === 'string');
```

`largeNonMersennePrime(19, 6833086)` は文字列 `3637590017` を返す必要があります。

```js
assert.strictEqual(largeNonMersennePrime(19, 6833086), '3637590017');
```

`largeNonMersennePrime(27, 7046834)` は文字列 `0130771969` を返す必要があります。

```js
assert.strictEqual(largeNonMersennePrime(27, 7046834), '0130771969');
```

`largeNonMersennePrime(6679881, 6679881)` は文字列 `4455386113` を返す必要があります。

```js
assert.strictEqual(largeNonMersennePrime(6679881, 6679881), '4455386113');
```

`largeNonMersennePrime(28433, 7830457)` は文字列 `8739992577` を返す必要があります。

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
