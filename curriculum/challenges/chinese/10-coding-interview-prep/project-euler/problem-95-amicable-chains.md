---
id: 5900f3cc1000cf542c50fede
title: '问题 95：友好的数链'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

一个数的真因子是除自身以外的其他因子。 例如，28 的真因子是 1、2、4、7 和 14。 由于这些真因子之和等于 28，我们称 28 为完全数，又称完美数或完备数。

有趣的是，220 的真因子之和为 284，而 284 的真因子之和为 220，形成了一条两个数构成的链。 因此，220 和 284 被称为友好数对。

也许更长的链条鲜为人知。 例如，从 12496 开始，可以形成一条五个数字的数链：

$$ 12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots) $$

由于该链返回其起始点，因此称为友好数链。

找出最长友好数链中的最小数字，要求该链中的每一个数字均不能超过给定的 `limit`。

# --hints--

`amicableChains(300)` 应该返回一个数字。

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` 应该返回 `220`。

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` 应该返回 `220`。

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` 应该返回 `12496`。

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` 应该返回 `14316`。

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
