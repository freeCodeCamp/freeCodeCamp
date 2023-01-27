---
id: 5900f3811000cf542c50fe94
title: 'Завдання 21: Дружні числа'
challengeType: 1
forumTopicId: 301851
dashedName: problem-21-amicable-numbers
---

# --description--

Визначимо d(`n`) як суму власних дільників числа `n` (числа менші, ніж `n`, які діляться націло на `n`).

Якщо d(`a`) = `b` і d(`b`) = `a`, де `a` ≠ `b`, тоді `a` і `b` є дружньою парою і кожен з `a` та `b` називаються дружніми числами.

Наприклад, власними дільниками числа 220 є 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 та 110; тому d(220) = 284. Власними дільниками числа 284 є 1, 2, 4, 71 та 142; отже, d(284) = 220.

Обчисліть суму всіх дружніх чисел, менших за `n`.

# --hints--

`sumAmicableNum(1000)` має повернути число.

```js
assert(typeof sumAmicableNum(1000) === 'number');
```

`sumAmicableNum(1000)` має повернути число 504.

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)` має повернути число 2898.

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)` має повернути число 8442.

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)` має повернути число 31626.

```js
assert.strictEqual(sumAmicableNum(10000), 31626);
```

# --seed--

## --seed-contents--

```js
function sumAmicableNum(n) {

  return n;
}

sumAmicableNum(10000);
```

# --solutions--

```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```
