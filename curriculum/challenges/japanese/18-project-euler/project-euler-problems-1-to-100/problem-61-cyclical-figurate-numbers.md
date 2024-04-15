---
id: 5900f3a91000cf542c50febc
title: '問題 61: 循環的な多角数'
challengeType: 1
forumTopicId: 302173
dashedName: problem-61-cyclical-figurate-numbers
---

# --description--

三角数、四角数、五角数、六角数、七角数、八角数はすべて多角数 であり、次の式によって得られます。

| 数の型 | 式                             | 数列                    |
| --- | ----------------------------- | --------------------- |
| 三角数 | $P_3(n) = \frac{n(n+1)}{2}$  | 1, 3, 6, 10, 15, ...  |
| 四角数 | $P_4(n) = n^2$                | 1, 4, 9, 16, 25, ...  |
| 五角数 | $P_5(n) = \frac{n(3n−1)}2$   | 1, 5, 12, 22, 35, ... |
| 六角数 | $P_6(n) = n(2n−1)$            | 1, 6, 15, 28, 45, ... |
| 七角数 | $P_7(n) = \frac{n(5n−3)}{2}$ | 1, 7, 18, 34, 55, ... |
| 八角数 | $P_8(n) = n(3n−2)$            | 1, 8, 21, 40, 65, ... |

4 桁の数が 3 つ含まれている順序集合 (8128, 2882, 8281) は、3 つの興味深い性質を持っています。

1. それぞれの数の下位 2 桁が次の数の上位 2 桁である (最後の数の下位 2 桁が最初の数の上位 2 桁であることも含む) という点で、この集合は循環的である。
2. それぞれの数の型 (三角数 ($P_3(127) = 8128$)、四角数 ($P_4(91) = 8281$)、五角数 ($P_5(44) = 2882$)) が、集合内の異なる数で表されている。
3. 4 桁の数の集合のうち、この性質を持つのはこの集合のみである。

$P_3$ 角数から $P_{n + 2}$ 角数までのそれぞれが集合内の異なる数で表されるような集合のうち、`n` 個の循環的な 4 桁の数からなる順序集合に含まれる数の総和を求めなさい。

# --hints--

`cyclicalFigurateNums(3)` は数値を返す必要があります。

```js
assert(typeof cyclicalFigurateNums(3) === 'number');
```

`cyclicalFigurateNums(3)` は `19291` を返す必要があります。

```js
assert.strictEqual(cyclicalFigurateNums(3), 19291);
```

`cyclicalFigurateNums(4)` は `28684` を返す必要があります。

```js
assert.strictEqual(cyclicalFigurateNums(4), 28684);
```

`cyclicalFigurateNums(5)` は `76255` を返す必要があります。

```js
assert.strictEqual(cyclicalFigurateNums(5), 76255);
```

`cyclicalFigurateNums(6)` は `28684` を返す必要があります。

```js
assert.strictEqual(cyclicalFigurateNums(6), 28684);
```

# --seed--

## --seed-contents--

```js
function cyclicalFigurateNums(n) {

  return true;
}

cyclicalFigurateNums(3);
```

# --solutions--

```js
function cyclicalFigurateNums(n) {
  function getChains(chain, n, numberTypes, numsExcludingLastNeededType) {
    if (chain.length === n) {
      return [chain];
    }

    const nextNumbers = getNextNumbersInChain(
      chain[chain.length - 1],
      numsExcludingLastNeededType
    );

    const chains = [];
    for (let j = 0; j < nextNumbers.length; j++) {
      const nextNumber = nextNumbers[j];
      if (chain.indexOf(nextNumber) === -1) {
        const nextChain = [...chain, nextNumber];
        chains.push(
          ...getChains(nextChain, n, numberTypes, numsExcludingLastNeededType)
        );
      }
    }
    return chains;
  }

  function getNextNumbersInChain(num, numsExcludingLastNeededType) {
    const results = [];
    const beginning = num % 100;
    numsExcludingLastNeededType.forEach(number => {
      if (Math.floor(number / 100) === beginning) {
        results.push(number);
      }
    });
    return results;
  }

  function fillNumberTypes(n, numberTypes, numsExcludingLastNeededType) {
    const [, lastTypeCheck, lastTypeArr] = numberTypes[n - 1];

    for (let i = 1000; i <= 9999; i++) {
      for (let j = 0; j < n - 1; j++) {
        const [, typeCheck, typeArr] = numberTypes[j];
        if (typeCheck(i)) {
          typeArr.push(i);
          numsExcludingLastNeededType.add(i);
        }
      }

      if (lastTypeCheck(i)) {
        lastTypeArr.push(i);
      }
    }
  }

  function isCyclicalChain(chain, n, numberTypes) {
    const numberTypesInChain = getNumberTypesInChain(chain, numberTypes);

    if (!isChainAllowed(numberTypesInChain, n)) {
      return false;
    }

    const isChainCyclic =
      Math.floor(chain[0] / 100) === chain[chain.length - 1] % 100;
    return isChainCyclic;
  }

  function getNumberTypesInChain(chain, numberTypes) {
    const numbersInChain = {};
    for (let i = 0; i < numberTypes.length; i++) {
      const numberTypeName = numberTypes[i][0];
      numbersInChain[numberTypeName] = [];
    }

    for (let i = 0; i < chain.length; i++) {
      for (let j = 0; j < n; j++) {
        const [typeName, , typeNumbers] = numberTypes[j];
        const typeNumbersInChain = numbersInChain[typeName];
        if (typeNumbers.indexOf(chain[i]) !== -1) {
          typeNumbersInChain.push(chain[i]);
        }
      }
    }
    return numbersInChain;
  }

  function isChainAllowed(numberTypesInChain, n) {
    for (let i = 0; i < n; i++) {
      const typeName = numberTypes[i][0];
      const isNumberWithTypeInChain = numberTypesInChain[typeName].length > 0;
      if (!isNumberWithTypeInChain) {
        return false;
      }

      for (let j = i + 1; j < n; j++) {
        const otherTypeName = numberTypes[j][0];
        if (
          isNumberRepeatedAsOnlyNumberInTwoTypes(
            numberTypesInChain[typeName],
            numberTypesInChain[otherTypeName]
          )
        ) {
          return false;
        }
      }
    }
    return true;
  }

  function isNumberRepeatedAsOnlyNumberInTwoTypes(
    typeNumbers,
    otherTypeNumbers
  ) {
    return (
      typeNumbers.length === 1 &&
      otherTypeNumbers.length === 1 &&
      typeNumbers[0] === otherTypeNumbers[0]
    );
  }

  function isTriangle(num) {
    return ((8 * num + 1) ** 0.5 - 1) % 2 === 0;
  }

  function isSquare(num) {
    return num ** 0.5 === parseInt(num ** 0.5, 10);
  }

  function isPentagonal(num) {
    return ((24 * num + 1) ** 0.5 + 1) % 6 === 0;
  }

  function isHexagonal(num) {
    return ((8 * num + 1) ** 0.5 + 1) % 4 === 0;
  }

  function isHeptagonal(num) {
    return ((40 * num + 9) ** 0.5 + 3) % 10 === 0;
  }

  function isOctagonal(num) {
    return ((3 * num + 1) ** 0.5 + 1) % 3 === 0;
  }

  const numberTypes = [
    ['triangle', isTriangle, []],
    ['square', isSquare, []],
    ['pentagonal', isPentagonal, []],
    ['hexagonal', isHexagonal, []],
    ['heptagonal', isHeptagonal, []],
    ['octagonal', isOctagonal, []]
  ];
  const numsExcludingLastNeededType = new Set();
  fillNumberTypes(n, numberTypes, numsExcludingLastNeededType);

  const nNumberChains = [];
  const [, , lastType] = numberTypes[n - 1];
  for (let i = 0; i < lastType.length; i++) {
    const startOfChain = lastType[i];
    nNumberChains.push(
      ...getChains([startOfChain], n, numberTypes, numsExcludingLastNeededType)
    );
  }

  const cyclicalChains = nNumberChains.filter(chain =>
    isCyclicalChain(chain, n, numberTypes)
  );

  let sum = 0;
  for (let i = 0; i < cyclicalChains.length; i++) {
    for (let j = 0; j < cyclicalChains[0].length; j++) {
      sum += cyclicalChains[i][j];
    }
  }
  return sum;
}
```
