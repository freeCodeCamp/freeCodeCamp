---
title: Department Numbers
id: 59f40b17e79dbf1ab720ed7a
challengeType: 5
forumTopicId: 302249
localeTitle: Номера отделений
---

## Description
<section id='description'>
<p> Существует высоко организованный город, который решил присвоить номер каждому из своих отделов: </p> Отдел полиции Отдел санитарии Отдел пожарной охраны <p> Каждый отдел может иметь число от 1 до 7 (включительно). </p><p> Три номера отделов должны быть уникальными (отличными друг от друга) и должны содержать до 12. </p><p> Начальник полиции не любит странные цифры и хочет иметь четное число для своего отдела. </p> Задача: <p> Напишите программу, которая выводит все допустимые комбинации: </p><p> [2, 3, 7] </p><p> [2, 4, 6] </p><p> [2, 6, 4] </p><p> [2, 7, 3] </p><p> [4, 1, 7] </p><p> [4, 2, 6] </p><p> [4, 3, 5] </p><p> [4, 5, 3] </p><p> [4, 6, 2] </p><p> [4, 7, 1] </p><p> [6, 1, 5] </p><p> [6, 2, 4] </p><p> [6, 4, 2] </p><p> [6, 5, 1] </p>
</section>

## Instructions
<section id='instructions'>
Write a program which outputs all valid combinations as an array.

```js
[2, 3, 7] [2, 4, 6] [2, 6, 4]
[2, 7, 3] [4, 1, 7] [4, 2, 6]
[4, 3, 5] [4, 5, 3] [4, 6, 2]
[4, 7, 1] [6, 1, 5] [6, 2, 4]
[6, 4, 2] [6, 5, 1]
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code> should be a function.
    testString: assert(typeof combinations === 'function');
  - text: <code>combinations([1, 2, 3], 6)</code> should return an Array.
    testString: assert(Array.isArray(combinations([1, 2, 3], 6)));
  - text: <code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return an array of length 14.
    testString: assert(combinations(nums, total).length === len);
  - text: <code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return all valid combinations.
    testString: assert.deepEqual(combinations(nums, total), result);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations(possibleNumbers, total) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
