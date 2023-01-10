---
id: 5900f3c81000cf542c50fedb
title: '問題 92：平方數鏈'
challengeType: 1
forumTopicId: 302209
dashedName: problem-92-square-digit-chains
---

# --description--

將一個數字的每一位求平方再相加可以得到一個新的數字，不斷重複該過程，直到新的數字出現過爲止，可以得到一條數鏈。

舉個例子：

$$\begin{align}   & 44 → 32 → 13 → 10 → \boldsymbol{1} → \boldsymbol{1}\\\\
  & 85 → \boldsymbol{89} → 145 → 42 → 20 → 4 → 16 → 37 → 58 → \boldsymbol{89}\\\\ \end{align}$$

可以發現，每條到達 1 或 89 的數鏈都會陷入循環。 最令人驚訝的是，從任意數字開始，數鏈最終都會到達 1 或 89。

求出有多少個小於 `limit` 的數字最終會到達 89？

# --hints--

`squareDigitChains(100)` 應該返回一個數字。

```js
assert(typeof squareDigitChains(100) === 'number');
```

`squareDigitChains(100)` 應該返回 `80`。

```js
assert.strictEqual(squareDigitChains(100), 80);
```

`squareDigitChains(1000)` 應該返回 `857`。

```js
assert.strictEqual(squareDigitChains(1000), 857);
```

`squareDigitChains(100000)` 應該返回 `85623`。

```js
assert.strictEqual(squareDigitChains(100000), 85623);
```

`squareDigitChains(10000000)` 應該返回 `8581146`。

```js
assert.strictEqual(squareDigitChains(10000000), 8581146);
```

# --seed--

## --seed-contents--

```js
function squareDigitChains(limit) {

  return true;
}

squareDigitChains(100);
```

# --solutions--

```js
function squareDigitChains(limit) {
  // Based on https://www.xarg.org/puzzle/project-euler/problem-92/
  function getCombinations(neededDigits, curDigits) {
    if (neededDigits === curDigits.length) {
      return [curDigits];
    }
    const combinations = [];
    const lastDigit = curDigits.length !== 0 ? curDigits[0] : 9;
    for (let i = 0; i <= lastDigit; i++) {
      const results = getCombinations(neededDigits, [i].concat(curDigits));
      combinations.push(...results);
    }
    return combinations;
  }

  function getPossibleSums(limit) {
    const digitsCount = getDigits(limit).length - 1;
    const possibleSquaredSums = [false];
    for (let i = 1; i <= 81 * digitsCount; i++) {
      let curVal = i;
      while (curVal !== 1 && curVal !== 89) {
        curVal = addSquaredDigits(curVal);
      }
      possibleSquaredSums[i] = curVal === 89;
    }
    return possibleSquaredSums;
  }

  function addSquaredDigits(num) {
    const digits = getDigits(num);
    let result = 0;
    for (let i = 0; i < digits.length; i++) {
      result += digits[i] ** 2;
    }
    return result;
  }

  function getDigits(number) {
    const digits = [];
    while (number > 0) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }
    return digits;
  }

  function getFactorials(number) {
    const factorials = [1];
    for (let i = 1; i < number; i++) {
      factorials[i] = factorials[i - 1] * i;
    }
    return factorials;
  }

  const neededDigits = getDigits(limit).length - 1;
  const combinations = getCombinations(neededDigits, []);
  const possibleSquaredDigitsSums = getPossibleSums(limit);
  const factorials = getFactorials(neededDigits + 1);

  let endingWith89 = 0;

  for (let i = 0; i < combinations.length; i++) {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let digits = combinations[i];
    let curSum = 0;
    for (let j = 0; j < digits.length; j++) {
      const curDigit = digits[j];
      curSum += curDigit ** 2;
      counts[curDigit]++;
    }

    if (possibleSquaredDigitsSums[curSum]) {
      let denominator = 1;
      for (let j = 0; j < counts.length; j++) {
        denominator = denominator * factorials[counts[j]];
      }
      endingWith89 += Math.floor(
        factorials[factorials.length - 1] / denominator
      );
    }
  }
  return endingWith89;
}
```
