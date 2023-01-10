---
id: 5900f3cc1000cf542c50fede
title: 'Задача 95: Ланцюжки дружніх чисел'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

Власними дільниками числа є всі його дільники, окрім самого числа. Наприклад, власними дільниками числа 28 є 1, 2, 4, 7 і 14. Оскільки сума цих дільників дорівнює 28, ми називаємо його ідеальним числом.

Цікаво, що сума власних дільників числа 220 дорівнює 284, а сума власних дільників числа 284 дорівнює 220, утворюючи ланцюжок з двох чисел. Тому числа 220 і 284 називаються парою дружніх чисел.

Можливо, менше відомими є ланцюжки більшої довжини. Наприклад, починаючи з числа 12496, формується ланцюжок з п'яти чисел:

$$ 12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots) $$

Оскільки ланцюжок закінчується тим самим числом, з якого починався, його називають ланцюжком дружніх чисел.

Знайдіть найменший член найдовшого ланцюжка дружніх чисел, жоден елемент якої не перевищує `limit`.

# --hints--

`amicableChains(300)` має повернути число.

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` має повернути `220`.

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` має повернути `220`.

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` має повернути `12496`.

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` має повернути `14316`.

```js
assert.strictEqual(amicableChains(1000000), 14316);
```

# --seed--

## --seed-contents--

```js
function amicableChains(limit) {

  return true;
}

amicableChains(300);
```

# --solutions--

```js
function amicableChains(limit) {
  function getSmallestMember(chain) {
    let smallest = chain[0];
    for (let i = 1; i < chain.length; i++) {
      if (smallest > chain[i]) {
        smallest = chain[i];
      }
    }
    return smallest;
  }

  function getFactorsSums(limit) {
    const factorsSums = new Array(limit + 1).fill(1);
    for (let i = 2; i <= limit / 2; i++) {
      for (let j = 2 * i; j <= limit; j += i) {
        factorsSums[j] += i;
      }
    }
    return factorsSums;
  }

  const factorsSums = getFactorsSums(limit);
  const checkedNumbers = new Set();

  let longestChain = 0;
  let smallestMember = 0;
  for (let i = 0; i <= limit; i++) {
    const curChain = [];
    let curNumber = i;
    while (!checkedNumbers.has(curNumber) && factorsSums[curNumber] <= limit) {
      curNumber = factorsSums[curNumber];

      const chainStart = curChain.indexOf(curNumber);
      if (chainStart === -1) {
        curChain.push(curNumber);
        continue;
      }

      const chainLength = curChain.length - chainStart;
      if (chainLength > longestChain) {
        longestChain = chainLength;
        smallestMember = getSmallestMember(curChain.slice(chainStart));
      }
      break;
    }

    for (let j = 0; j < curChain.length; j++) {
      checkedNumbers.add(curChain[j]);
    }
  }

  return smallestMember;
}
```
