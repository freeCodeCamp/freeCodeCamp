---
id: 5900f3ba1000cf542c50fecd
title: 'Problema 78: spartizioni di monete'
challengeType: 1
forumTopicId: 302191
dashedName: problem-78-coin-partitions
---

# --description--

${p}(n)$ rappresenta il numero di modi differenti nei quali `n` monete possono essere separate in pile. Ad esempio, cinque monete possono essere separate in pile esattamente in sette modi diversi, quindi ${p}(5) = 7$.

<div style='text-align: center;'>

| Pile di monete    |
| ----------------- |
| OOOOO             |
| OOOO   O          |
| OOO   OO          |
| OOO   O   O       |
| OO   OO   O       |
| OO   O   O   O    |
| O   O   O   O   O |

</div><br>

Trova il valore minimo di `n` per il quale ${p}(n)$ è divisibile per `divisor`.

# --hints--

`coinPartitions(7)` dovrebbe restituire un numero.

```js
assert(typeof coinPartitions(7) === 'number');
```

`coinPartitions(7)` dovrebbe restituire `5`.

```js
assert.strictEqual(coinPartitions(7), 5);
```

`coinPartitions(10000)` dovrebbe restituire `599`.

```js
assert.strictEqual(coinPartitions(10000), 599);
```

`coinPartitions(100000)` dovrebbe restituire `11224`.

```js
assert.strictEqual(coinPartitions(100000), 11224);
```

`coinPartitions(1000000)` dovrebbe restituire `55374`.

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
// compute pentagonal numbers per generating function
const pentagonalNumbers = Array(251)
  .fill(0)
  .flatMap((_, i) => i ? [i * (3 * i - 1) / 2, i * (3 * i - 1) / 2 + i] : []);

function coinPartitions(divisor) {
  // helper data
  const signs = [1, 1, -1, -1];

  // compute partition counts until we find a multiple of divisor
  const partitions = Array(divisor + 1).fill(0);
  partitions[0] = 1;
  for (let i = 1; partitions[i - 1] > 0; i++) {
    // compute next partition count
    for (let j = 0; pentagonalNumbers[j] <= i; j++) {
      partitions[i] += partitions[i - pentagonalNumbers[j]] * signs[j % 4];
    }

    partitions[i] = partitions[i] % divisor;
    if (partitions[i] < 0) partitions[i] += divisor; // positive mod
    // return when found
    if (partitions[i] === 0) return i;
  }
}
```
