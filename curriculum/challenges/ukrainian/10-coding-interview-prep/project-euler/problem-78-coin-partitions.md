---
id: 5900f3ba1000cf542c50fecd
title: 'Завдання 78: Сортування монет'
challengeType: 1
forumTopicId: 302191
dashedName: problem-78-coin-partitions
---

# --description--

Нехай ${p}(n)$ представляє кількість різних способів, за яких `n` монети можуть бути розділені на стопки. Наприклад, п'ять монет можуть бути розділені на стопки у сім різних способів, тож ${p}(5) = 7$.

<div style='text-align: center;'>

| Монетні стопки        |
| ----------------- |
| OOOOO             |
| OOOO   O          |
| OOO   OO          |
| OOO   O   O       |
| OO   OO   O       |
| OO   O   O   O    |
| O   O   O   O   O |

</div><br>

Знайдіть найменше значення `n` за яке ${p}(n)$ ділиться на `divisor`.

# --hints--

`coinPartitions(7)` має вивести число.

```js
assert(typeof coinPartitions(7) === 'number');
```

`coinPartitions(7)` має вивести `5`.

```js
assert.strictEqual(coinPartitions(7), 5);
```

`coinPartitions(10000)` має вивести `599`.

```js
assert.strictEqual(coinPartitions(10000), 599);
```

`coinPartitions(100000)` має вивести `11224`.

```js
assert.strictEqual(coinPartitions(100000), 11224);
```

`coinPartitions(1000000)` має вивести `55374`.

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
