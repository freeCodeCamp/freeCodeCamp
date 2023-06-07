---
id: 5900f3b61000cf542c50fec9
title: 'Проблема 74: ланцюги цифрових факторіалів'
challengeType: 1
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

Число 145 відоме своєю властивістю, що сума факторіала цих цифр дорівнює 145:

$$1! + 4! + 5! = 1 + 24 + 120 = 145$$

Можливо, менш відомим є 169, в якому він продукує найдовший ланцюг чисел, що посилається на 169; виявляється, що існує лише три такі цикли:

$$\початок{align} &169 → 363601 → 1454 → 169\\\\
&871 → 45361 → 871\\\\ &872 → 45362 → 872\\\\
\кінець{align}$$

Не важко довести, що КОЖНЕ початкове число врешті застрягне в циклі. Наприклад,

$$\початок{align} &69 → 363600 → 1454 → 169 → 363601\\ (→ 1454)\\\\
&78 → 45360 → 871 → 45361\\ (→ 871)\\\\ &540 → 145\\ (→ 145)\\\\
\кінець{align}$$

Починаючи з 69 продукується ланцюжок з 5 неповторних значень, але найдовший неповторний ланцюжок з початковим числом нижче одного мільйона - це шістдесят значень.

Скільки ланцюжків з початковим числом нижче `n` містить саме шістдесят неповторних значень?

# --hints--

`digitFactorialChains(2000)` має вивести число.

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` має вивести `6`.

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` має вивести `42`.

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` має вивести `282`.

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` має вивести `402`.

```js
assert.strictEqual(digitFactorialChains(1000000), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains(n) {

  return true;
}

digitFactorialChains(2000);
```

# --solutions--

```js
function digitFactorialChains(n) {
  function sumDigitsFactorials(number) {
    let sum = 0;
    while (number > 0) {
      sum += factorials[number % 10];
      number = Math.floor(number / 10);
    }
    return sum;
  }

  const factorials = [1];
  for (let i = 1; i < 10; i++) {
    factorials.push(factorials[factorials.length - 1] * i);
  }

  const sequences = {
    169: 3,
    871: 2,
    872: 2,
    1454: 3,
    45362: 2,
    45461: 2,
    3693601: 3
  };
  let result = 0;

  for (let i = 2; i < n; i++) {
    let curNum = i;
    let chainLength = 0;
    const curSequence = [];
    while (curSequence.indexOf(curNum) === -1) {
      curSequence.push(curNum);
      curNum = sumDigitsFactorials(curNum);
      chainLength++;
      if (sequences.hasOwnProperty(curNum) > 0) {
        chainLength += sequences[curNum];
        break;
      }
    }
    if (chainLength === 60) {
      result++;
    }
    for (let j = 1; j < curSequence.length; j++) {
      sequences[curSequence[j]] = chainLength - j;
    }
  }
  return result;
}
```
