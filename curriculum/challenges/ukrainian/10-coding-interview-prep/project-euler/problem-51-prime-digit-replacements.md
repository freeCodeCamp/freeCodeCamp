---
id: 5900f39f1000cf542c50feb2
title: 'Завдання 51: Заміна цифр у простому числі'
challengeType: 5
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

Замінивши першу цифру двоцифрового числа \*3 виявляється, що шість із дев'яти можливих значень 13, 23, 43, 53, 73 та 83 є простими числами.

При заміні 3-ї і 4-ї цифри числа 56\*\*3 однаковими цифрами, виходить, що це 5-значне число - перший приклад, який містить сім простих чисел серед десяти згенерованих, що утворюють сімейство: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Отже, число 56003, як перший член цього сімейства, є найменшим простим числом з цією властивістю.

Знайдіть найменше просте число, котре при заміні частини числа (не обов'язково суміжних цифр) однаковими цифрами, буде частиною сімейства `n` простих значень.

# --hints--

`primeDigitReplacements(6)` має повернути число.

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` має повернути `13`.

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` має повернути `56003`.

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` має повернути `121313`.

```js
assert.strictEqual(primeDigitReplacements(8), 121313);
```

# --seed--

## --seed-contents--

```js
function primeDigitReplacements(n) {

  return true;
}

primeDigitReplacements(6);
```

# --solutions--

```js
function primeDigitReplacements(n) {
  function isNFamily(number, primesMap, n) {
    const prime = number.toString();
    const lastDigit = prime[prime.length - 1];
    return (
      doesReplacingMakeFamily(prime, '0', primesMap, n) ||
      (lastDigit !== '1' &&
        doesReplacingMakeFamily(prime, '1', primesMap, n)) ||
      doesReplacingMakeFamily(prime, '2', primesMap, n)
    );
  }

  function doesReplacingMakeFamily(prime, digitToReplace, primesMap, family) {
    let count = 0;
    const replaceWith = '0123456789';

    for (let i = 0; i < replaceWith.length; i++) {
      const nextNumber = parseInt(
        prime.replace(new RegExp(digitToReplace, 'g'), replaceWith[i]),
        10
      );

      if (isPartOfFamily(nextNumber, prime, primesMap)) {
        count++;
      }
    }
    return count === family;
  }

  function isPartOfFamily(number, prime, primesMap) {
    return (
      isPrime(number, primesMap) && number.toString().length === prime.length
    );
  }

  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i++) {
      if (primesMap[i]) {
        let j = i * i;
        for (j; j < max; j += i) {
          primesMap[j] = false;
        }
      }
    }
    return primesMap;
  }

  function isPrime(num, primesMap) {
    return primesMap[num];
  }

  const primesMap = getSievePrimes(1000000);

  for (let number = 1; number < 300000; number++) {
    if (primesMap[number]) {
      if (isNFamily(number, primesMap, n)) {
        return number;
      }
    }
  }
  return -1;
}
```
