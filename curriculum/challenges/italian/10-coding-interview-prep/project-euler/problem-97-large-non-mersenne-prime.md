---
id: 5900f3ce1000cf542c50fee0
title: 'Problema 97: Grandi numeri primi non-Mersenne'
challengeType: 1
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

Il primo numero primo trovato sopra un milione di cifre è stato scoperto nel 1999, ed è un primo di Mersenne nella forma $2^{6972593} − 1$; contiene esattamente 2.098.960 cifre. Successivamente sono stati trovati altri primi di Mersenne, della forma $2^p − 1$, contenenti più cifre.

Tuttavia, nel 2004 è stato trovato un enorme primo non-Mersenne che contiene 2.357.207 cifre: $28433 × 2^{7830457} + 1$.

Trova le ultime dieci cifre di quel primo non-Mersenne nella forma $multiplier × 2^{power} + 1$.

# --hints--

`largeNonMersennePrime(19, 6833086)` dovrebbe restituire una stringa.

```js
assert(typeof largeNonMersennePrime(19, 6833086) === 'string');
```

`largeNonMersennePrime(19, 6833086)` dovrebbe restituire la stringa `3637590017`.

```js
assert.strictEqual(largeNonMersennePrime(19, 6833086), '3637590017');
```

`largeNonMersennePrime(27, 7046834)` dovrebbe restituire la stringa `0130771969`.

```js
assert.strictEqual(largeNonMersennePrime(27, 7046834), '0130771969');
```

`largeNonMersennePrime(6679881, 6679881)` dovrebbe restituire la stringa `4455386113`.

```js
assert.strictEqual(largeNonMersennePrime(6679881, 6679881), '4455386113');
```

`largeNonMersennePrime(28433, 7830457)` dovrebbe restituire la stringa `8739992577`.

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
