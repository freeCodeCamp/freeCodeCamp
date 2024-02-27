---
id: 59f40b17e79dbf1ab720ed7a
title: Числа органів
challengeType: 1
forumTopicId: 302249
dashedName: department-numbers
---

# --description--

Існує високо організоване місто, яке вирішило призначити число до кожного зі своїх органів:

<ul>
  <li>Поліція</li>
  <li>Водоканал</li>
  <li>Пожежна охорона</li>
</ul>

Кожен орган може отримати число від 1 до 7 (включно).

Числа всіх трьох органів мають бути унікальними (тобто відрізнятись) та в сумі дорівнювати 12.

Голова поліції не любить непарні числа, тому хоче, щоб поліція мала парне число.

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

`combinations([1, 2, 3], 6)` має повернути масив.

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` має повернути масив довжиною 14.

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` має повернути всі дійсні комбінації.

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
  let thirdNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thirdNumber = total - firstNumber - secondNumber;

          if (thirdNumber !== firstNumber && thirdNumber !== secondNumber && possibleNumbers.includes(thirdNumber)) {
            allCombinations.push([firstNumber, secondNumber, thirdNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}
```
