---
id: 5900f3cc1000cf542c50fede
title: '問題 95: 友愛鎖'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

数の真の約数とは、その数自体を除くすべての約数です。 例えば、28の真の約数は 1, 2, 4, 7, 14 です。 これらの約数の和は 28 に等しく、このような数を完全数と呼びます。

面白いことに、220 の真の約数の和は 284であり、284 の真の約数の和は 220 で、2 つの数字の連鎖を形成します。 このため、220 と 284は友愛数ペアと呼ばれます。

おそらくあまり知られていないのは、もっと長い連鎖です。 例えば、12496 から始めて 5 つの数字の連鎖を作ります。

$$ 12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots) $$

この連鎖は出発点に戻るので、友愛鎖と呼ばれます。

どの要素も `limit` を超えない、最も長い友愛鎖の最小の数字を求めなさい。

# --hints--

`amicableChains(300)` は数値を返す必要があります。

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` は `220` を返す必要があります。

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` は `220` を返す必要があります。

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` は `12496` を返す必要があります。

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` は `14316` を返す必要があります。

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
