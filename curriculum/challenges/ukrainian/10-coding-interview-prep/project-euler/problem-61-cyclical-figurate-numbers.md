---
id: 5900f3a91000cf542c50febc
title: 'Завдання 61: Циклічні фігурні числа'
challengeType: 1
forumTopicId: 302173
dashedName: problem-61-cyclical-figurate-numbers
---

# --description--

Трикутні, квадратні, п'ятикутні, шестикутні, семикутні і восьмикутні числа є фігурними (багатокутними) числами і визначаються за такими формулами:

| Тип числа   | Формула                       | Послідовність         |
| ----------- | ----------------------------- | --------------------- |
| Трикутне    | $P_3(n) = \frac{n(n+1)}{2}$  | 1, 3, 6, 10, 15, ...  |
| Квадратне   | $P_4(n) = n^2$                | 1, 4, 9, 16, 25, ...  |
| П'ятикутне  | $P_5(n) = \frac{n(3n−1)}2$   | 1, 5, 12, 22, 35, ... |
| Шестикутне  | $P_6(n) = n(2n−1)$            | 1, 6, 15, 28, 45, ... |
| Семикутне   | $P_7(n) = \frac{n(5n−3)}{2}$ | 1, 7, 18, 34, 55, ... |
| Восьмикутне | $P_8(n) = n(3n−2)$            | 1, 8, 21, 40, 65, ... |

Впорядкована множина з трьох 4-значних чисел: 8128, 2882, 8281 має три цікаві властивості.

1. Множина циклічна, оскільки дві останні цифри кожного числа є першими двома цифрами наступного числа (включаючи останнє та перше число).
2. Кожен тип багатокутника: трикутний ($P_3(127) = 8128$), квадратний ($P_4(91) = 8281$), і п'ятикутний ($P_5(44) = 2882$), представлений іншим числом в даній множині.
3. Це єдина множина 4-цифрових чисел з цією властивістю.

Знайдіть суму всіх чисел у впорядкованих множинах з `n` циклічних 4-значних чисел, в яких кожен з типів багатокутника від $P_3$ до $P_{n + 2}$ представлений іншим числом цієї множини.

# --hints--

`cyclicalFigurateNums(3)` має повернути число.

```js
assert(typeof cyclicalFigurateNums(3) === 'number');
```

`cyclicalFigurateNums(3)` має повернути `19291`.

```js
assert.strictEqual(cyclicalFigurateNums(3), 19291);
```

`cyclicalFigurateNums(4)` має повернути `28684`.

```js
assert.strictEqual(cyclicalFigurateNums(4), 28684);
```

`cyclicalFigurateNums(5)` має повернути `76255`.

```js
assert.strictEqual(cyclicalFigurateNums(5), 76255);
```

`cyclicalFigurateNums(6)` має повернути `28684`.

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
