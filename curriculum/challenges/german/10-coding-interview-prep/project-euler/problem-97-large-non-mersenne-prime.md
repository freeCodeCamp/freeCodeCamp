---
id: 5900f3ce1000cf542c50fee0
title: 'Problem 97: Große "Nicht-Mersenne-Primzahl"'
challengeType: 1
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

Die erste bekannte Primzahl mit mehr als einer Million Ziffern wurde 1999 entdeckt und ist eine Mersenne-Primzahl der Form $2^{6972593} - 1$; sie enthält genau 2.098.960 Ziffern. In der Folge wurden weitere Mersenne-Zahlen der Form $2^p - 1$ gefunden, die mehr Ziffern enthalten.

Im Jahr 2004 wurde jedoch eine massive Nicht-Mersenne-Primzahl gefunden, die 2.357.207 Ziffern enthält: $28433 × 2^{7830457} + 1$. + 1$.

Finde die letzten zehn Ziffern dieser Nicht-Mersenne-Primzahl in der Form $multiplier × 2^{power} + 1$.

# --hints--

`largeNonMersennePrime(19, 6833086)` sollte einen String zurückgeben.

```js
assert(typeof largeNonMersennePrime(19, 6833086) === 'string');
```

`largeNonMersennePrime(19, 6833086)` sollte einen String `3637590017` zurückgeben.

```js
assert.strictEqual(largeNonMersennePrime(19, 6833086), '3637590017');
```

`largeNonMersennePrime(27, 7046834)` sollte einen String `0130771969` zurückgeben.

```js
assert.strictEqual(largeNonMersennePrime(27, 7046834), '0130771969');
```

`largeNonMersennePrime(6679881, 6679881)` sollte einen String `4455386113` zurückgeben.

```js
assert.strictEqual(largeNonMersennePrime(6679881, 6679881), '4455386113');
```

`largeNonMersennePrime(28433, 7830457)` sollte einen String `8739992577` zurückgeben.

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
