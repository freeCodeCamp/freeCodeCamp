---
id: 5900f3c81000cf542c50fedb
title: '問題 92: 各位の平方数の連鎖'
challengeType: 1
forumTopicId: 302209
dashedName: problem-92-square-digit-chains
---

# --description--

ある数の各位の 2 乗を足し合わせて新しい数を作ることを、以前と同じ数が現れるまで続けて、数の連鎖を作ります。

例えば次のようになります。

$$\begin{align}   & 44 → 32 → 13 → 10 → \boldsymbol{1} → \boldsymbol{1}\\\\
  & 85 → \boldsymbol{89} → 145 → 42 → 20 → 4 → 16 → 37 → 58 → \boldsymbol{89}\\\\ \end{align}$$

したがって、1 または 89 に達する連鎖はすべて無限ループに入ります。 最も驚くべきことは、どの数から始めても最終的に 1 または 89 に達するということです。

`limit` 未満の数のうち、そこから始めると最終的に 89 に達する数はいくつありますか。

# --hints--

`squareDigitChains(100)` は数値を返す必要があります。

```js
assert(typeof squareDigitChains(100) === 'number');
```

`squareDigitChains(100)` は `80` を返す必要があります。

```js
assert.strictEqual(squareDigitChains(100), 80);
```

`squareDigitChains(1000)` は `857` を返す必要があります。

```js
assert.strictEqual(squareDigitChains(1000), 857);
```

`squareDigitChains(100000)` は `85623` を返す必要があります。

```js
assert.strictEqual(squareDigitChains(100000), 85623);
```

`squareDigitChains(10000000)` は `8581146` を返す必要があります。

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
