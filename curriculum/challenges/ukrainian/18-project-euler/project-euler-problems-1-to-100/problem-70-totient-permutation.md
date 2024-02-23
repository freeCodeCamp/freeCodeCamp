---
id: 5900f3b21000cf542c50fec5
title: 'Завдання 70: перестановка функції Ейлера'
challengeType: 1
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

Функція Ейлера ${\phi}(n)$ використовується для визначення кількості додатних чисел менших або рівних `n`, які є взаємно простими `n`. Наприклад, оскільки числа 1, 2, 4, 5, 7 і 8 менші за дев’ять та взаємно прості 9, ${\phi}(9) = 6$. Число 1 вважається взаємно простим для кожного додатного числа, тобто ${\phi}(1) = 1$.

Цікаво, що ${\phi}(87109) = 79180$, і можна побачити, що 87109 є перестановкою 79180.

Знайдіть значення `n`, 1 &lt; `n` &lt; `limit`, за якого ${\phi}(n)$ є перестановкою `n`, а співвідношення $\displaystyle\frac{n}{{\phi}(n)}$ є мінімальним.

# --hints--

`totientPermutation(10000)` має повернути число.

```js
assert(typeof totientPermutation(10000) === 'number');
```

`totientPermutation(10000)` має повернути `4435`.

```js
assert.strictEqual(totientPermutation(10000), 4435);
```

`totientPermutation(100000)` має повернути `75841`.

```js
assert.strictEqual(totientPermutation(100000), 75841);
```

`totientPermutation(500000)` має повернути `474883`.

```js
assert.strictEqual(totientPermutation(500000), 474883);
```

`totientPermutation(10000000)` має повернути `8319823`.

```js
assert.strictEqual(totientPermutation(10000000), 8319823);
```

# --seed--

## --seed-contents--

```js
function totientPermutation(limit) {

  return true;
}

totientPermutation(10000);
```

# --solutions--

```js
function totientPermutation(limit) {
  function getSievePrimes(max) {
    const primes = [];
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  function sortDigits(number) {
    return number.toString().split('').sort().join('');
  }

  function isPermutation(numberA, numberB) {
    return sortDigits(numberA) === sortDigits(numberB);
  }

  const MAX_PRIME = 4000;
  const primes = getSievePrimes(MAX_PRIME);

  let nValue = 1;
  let minRatio = Infinity;

  for (let i = 1; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const num = primes[i] * primes[j];
      if (num > limit) {
        break;
      }

      const phi = (primes[i] - 1) * (primes[j] - 1);
      const ratio = num / phi;

      if (minRatio > ratio && isPermutation(num, phi)) {
        nValue = num;
        minRatio = ratio;
      }
    }
  }
  return nValue;
}
```
