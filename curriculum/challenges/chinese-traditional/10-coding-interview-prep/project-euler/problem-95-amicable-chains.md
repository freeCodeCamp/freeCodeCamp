---
id: 5900f3cc1000cf542c50fede
title: '問題 95：友好的數鏈'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

一個數的真因子是除自身以外的其他因子。 例如，28 的真因子是 1、2、4、7 和 14。 由於這些真因子之和等於 28，我們稱 28 爲完全數，又稱完美數或完備數。

有趣的是，220 的真因子之和爲 284，而 284 的真因子之和爲 220，形成了一條兩個數構成的鏈。 因此，220 和 284 被稱爲友好數對。

也許更長的鏈條鮮爲人知。 例如，從 12496 開始，可以形成一條五個數字的數鏈：

$$ 12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots) $$

由於該鏈返回其起始點，因此稱爲友好數鏈。

找出最長友好數鏈中的最小數字，要求該鏈中的每一個數字均不能超過給定的 `limit`。

# --hints--

`amicableChains(300)` 應該返回一個數字。

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` 應該返回 `220`。

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` 應該返回 `220`。

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` 應該返回 `12496`。

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` 應該返回 `14316`。

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
