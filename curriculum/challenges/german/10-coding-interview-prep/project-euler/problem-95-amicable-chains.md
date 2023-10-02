---
id: 5900f3cc1000cf542c50fede
title: 'Problem 95: Befreundete Ketten'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

Die eigentlichen Teiler einer Zahl sind alle Teiler außer der Zahl selbst. Die richtigen Teiler von 28 sind zum Beispiel 1, 2, 4, 7 und 14. Da die Summe dieser Teiler gleich 28 ist, nennen wir sie eine perfekte Zahl.

Interessanterweise ist die Summe der richtigen Teiler von 220 gleich 284 und die Summe der richtigen Teiler von 284 gleich 220, so dass eine Kette von zwei Zahlen entsteht. Aus diesem Grund werden 220 und 284 als ein befreundetes Paar bezeichnet.

Weniger bekannt sind vielleicht die längeren Ketten. Zum Beispiel, beginnend mit 12496, bilden wir eine Kette von fünf Zahlen:

$$ 12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots) $$

Da diese Kette zu deinem Ausgangspunkt zurückkehrt, nennt man sie eine befreundete Kette.

Finde das kleinste Glied der längsten befreundeten Kette, in der kein Element `limit` überschreitet.

# --hints--

`amicableChains(300)` sollte eine Zahl zurückgeben.

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` sollte `220` zurückgeben.

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` sollte `220` zurückgeben.

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` sollte `12496` zurückgeben.

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` sollte `14316` zurückgeben.

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
