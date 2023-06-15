---
id: 5900f3ba1000cf542c50fecd
title: 'Завдання 78: сортування монет'
challengeType: 1
forumTopicId: 302191
dashedName: problem-78-coin-partitions
---

# --description--

Нехай ${p}(n)$ представляє кількість різних способів, за яких можна розділити `n` монет на стопки. Наприклад, п’ять монет можна розділити на стопки сімома способами, тому ${p}(5) = 7$.

<div style='text-align: center;'>

| Стопки монет        |
| ----------------- |
| OOOOO             |
| OOOO   O          |
| OOO   OO          |
| OOO   O   O       |
| OO   OO   O       |
| OO   O   O   O    |
| O   O   O   O   O |

</div><br>

Знайдіть найменше значення `n`, при якому ${p}(n)$ ділиться на `divisor`.

# --hints--

`coinPartitions(7)` має повернути число.

```js
assert(typeof coinPartitions(7) === 'number');
```

`coinPartitions(7)` має повернути `5`.

```js
assert.strictEqual(coinPartitions(7), 5);
```

`coinPartitions(10000)` має повернути `599`.

```js
assert.strictEqual(coinPartitions(10000), 599);
```

`coinPartitions(100000)` має повернути `11224`.

```js
assert.strictEqual(coinPartitions(100000), 11224);
```

`coinPartitions(1000000)` має повернути `55374`.

```js
assert.strictEqual(coinPartitions(1000000), 55374);
```

# --seed--

## --seed-contents--

```js
function coinPartitions(divisor) {

  return true;
}

coinPartitions(7);
```

# --solutions--

```js
function coinPartitions(divisor) {
  const partitions = [1];

  let n = 0;
  while (partitions[n] !== 0) {
    n++;
    partitions.push(0);

    let i = 0;
    let pentagonal = 1;
    while (pentagonal <= n) {
      const sign = i % 4 > 1 ? -1 : 1;
      partitions[n] += sign * partitions[n - pentagonal];
      partitions[n] = partitions[n] % divisor;

      i++;

      let k = Math.floor(i / 2) + 1;
      if (i % 2 !== 0) {
        k *= -1;
      }
      pentagonal = Math.floor((k * (3 * k - 1)) / 2);
    }
  }
  return n;
}
```
