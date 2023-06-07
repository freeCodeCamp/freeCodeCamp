---
id: 59f40b17e79dbf1ab720ed7a
title: Номери відділів
challengeType: 1
forumTopicId: 302249
dashedName: department-numbers
---

# --description--

Існує добре організоване місто, яке вирішило призначити номер для кожного з їх відділів:

<ul>
  <li>Відділ поліції</li>
  <li>Санітарний відділ</li>
  <li>Пожежний відділ</li>
</ul>

Кожен відділ може мати номер від 1 до 7 (включно).

Номери кожного з відділу мають бути унікальними (тобто бути відмінними одне від одного) та щоб в сумі було до номера 12.

Шеф поліції не любить непарних чисел і хоче мати парне число для свого відділу.

# --instructions--

Напишіть програму, яка виводить всі дійсні комбінації у вигляді масиву.

```js
[2, 3, 7] [2, 4, 6] [2, 6, 4]
[2, 7, 3] [4, 1, 7] [4, 2, 6]
[4, 3, 5] [4, 5, 3] [4, 6, 2]
[4, 7, 1] [6, 1, 5] [6, 2, 4]
[6, 4, 2] [6, 5, 1]
```

# --hints--

`combinations` має бути функцією.

```js
assert(typeof combinations === 'function');
```

`combinations([1, 2, 3], 6)` повинні повернути масив.

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` мають повернутися як рядок довжиною 14.

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` повинен повертати всі дійсні комбінації.

```js
assert.deepEqual(combinations(nums, total), result);
```

# --seed--

## --after-user-code--

```js
const nums = [1, 2, 3, 4, 5, 6, 7];
const total = 12;
const len = 14;
const result = [
  [2, 3, 7],
  [2, 4, 6],
  [2, 6, 4],
  [2, 7, 3],
  [4, 1, 7],
  [4, 2, 6],
  [4, 3, 5],
  [4, 5, 3],
  [4, 6, 2],
  [4, 7, 1],
  [6, 1, 5],
  [6, 2, 4],
  [6, 4, 2],
  [6, 5, 1]
];
```

## --seed-contents--

```js
function combinations(possibleNumbers, total) {

  return true;
}
```

# --solutions--

```js
function combinations(possibleNumbers, total) {
  let firstNumber;
  let secondNumber;
  let thridNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thridNumber = total - firstNumber - secondNumber;

          if (thridNumber !== firstNumber && thridNumber !== secondNumber && possibleNumbers.includes(thridNumber)) {
            allCombinations.push([firstNumber, secondNumber, thridNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}
```
