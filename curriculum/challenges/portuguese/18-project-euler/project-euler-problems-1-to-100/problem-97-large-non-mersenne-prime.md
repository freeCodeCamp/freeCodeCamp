---
id: 5900f3ce1000cf542c50fee0
title: 'Problema 97: Grande número primo que não seja de Mersenne'
challengeType: 1
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

O primeiro número primo descoberto que excedia um milhão de algarismos foi descoberto em 1999. Ele é um primo de Mersenne no formato $2^{6972593} - 1$ e contém exatamente 2.098.960 algarismos. Depois disso, outros primos de Mersenne, no formato $2^p - 1$, foram encontrados e contendo mais algarismos.

No entanto, em 2004, foi encontrado um número primo enorme e não sendo um primo de Mersenne que contém 2.357.207 algarismos: $28433 × 2^{7830457} + 1$.

Encontre os últimos dez algarismos daquele primo que não seja de Mersenne na forma $multiplicador × 2^{potência} + 1$.

# --hints--

`largeNonMersennePrime(19, 6833086)` deve retornar uma string.

```js
assert(typeof largeNonMersennePrime(19, 6833086) === 'string');
```

`largeNonMersennePrime(19, 6833086)` deve retornar a string `3637590017`.

```js
assert.strictEqual(largeNonMersennePrime(19, 6833086), '3637590017');
```

`largeNonMersennePrime(27, 7046834)` deve retornar a string `0130771969`.

```js
assert.strictEqual(largeNonMersennePrime(27, 7046834), '0130771969');
```

`largeNonMersennePrime(6679881, 6679881)` deve retornar a string `4455386113`.

```js
assert.strictEqual(largeNonMersennePrime(6679881, 6679881), '4455386113');
```

`largeNonMersennePrime(28433, 7830457)` deve retornar a string `8739992577`.

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
