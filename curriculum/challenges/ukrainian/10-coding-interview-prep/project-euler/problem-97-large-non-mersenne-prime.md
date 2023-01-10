---
id: 5900f3ce1000cf542c50fee0
title: 'Завдання 97: Велике просте число не-Мерсенна'
challengeType: 1
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

Перше відоме просте число, що перевищувало один мільйон цифр, було виявлено в 1999 році, і воно є Мерсеннським простим числом у формі $2^{6972593} − 1$; воно містить рівно 2,098,960 цифр. Згодом, виявилося, що інші Мерсеннівські числа, у формі $2^p − 1$, містять більше цифр.

Однак, у 2004 році винайшли масивне немерсеннівське просте число, яке містить 2,357,207 цифр: $28433 × 2^{7830457} + 1$.

Знайдіть останні десять цифр простих чисел у вигляді $multiplier × 2^{power} + 1$.

# --hints--

`largeNonMersennePrime(19, 6833086)` має вивести рядок.

```js
assert(typeof largeNonMersennePrime(19, 6833086) === 'string');
```

`largeNonMersennePrime(19, 6833086)` має вивести рядок `3637590017`.

```js
assert.strictEqual(largeNonMersennePrime(19, 6833086), '3637590017');
```

`largeNonMersennePrime(27, 7046834)` має вивести рядок `0130771969`.

```js
assert.strictEqual(largeNonMersennePrime(27, 7046834), '0130771969');
```

`largeNonMersennePrime(6679881, 6679881)` має вивести рядок `4455386113`.

```js
assert.strictEqual(largeNonMersennePrime(6679881, 6679881), '4455386113');
```

`largeNonMersennePrime(28433, 7830457)` має вивести рядок `8739992577`.

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
