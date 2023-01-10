---
id: 5900f3c81000cf542c50fedb
title: 'Завдання 92: Послідовності квадратів цифр'
challengeType: 1
forumTopicId: 302209
dashedName: problem-92-square-digit-chains
---

# --description--

Послідовність чисел створюється шляхом додавання квадратів цифр попереднього числа до тих пір, поки не вийде число, яке вже зустрічалося раніше.

Наприклад,

$$\begin{align}   & 44 → 32 → 13 → 10 → \boldsymbol{1} → \boldsymbol{1}\\\\
  & 85 → \boldsymbol{89} → 145 → 42 → 20 → 4 → 16 → 37 → 58 → \boldsymbol{89}\\\\ \end{align}$$

Таким чином, будь-яка послідовність, що призводить до отримання 1 або 89, замкнеться в нескінченний цикл. Найдивовижніше, що БУДЬ-ЯКЕ початкове число рано чи пізно дасть 1 або 89.

Скільки початкових чисел `limit` десяти мільйонів приведуть до отримання 89?

# --hints--

`squareDigitChains(100)` повинен повертатися як число.

```js
assert(typeof squareDigitChains(100) === 'number');
```

`squareDigitChains(100)` повинен повертатися як `80`.

```js
assert.strictEqual(squareDigitChains(100), 80);
```

`squareDigitChains(1000)` має повертатися як `857`.

```js
assert.strictEqual(squareDigitChains(1000), 857);
```

`squareDigitChains(100000)` повинен повертатися як `85623`.

```js
assert.strictEqual(squareDigitChains(100000), 85623);
```

`squareDigitChains(10000000)` повинен повертатися як `8581146`.

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
