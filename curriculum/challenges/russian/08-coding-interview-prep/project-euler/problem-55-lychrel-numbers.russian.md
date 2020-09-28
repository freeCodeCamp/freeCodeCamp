---
id: 5900f3a31000cf542c50feb6
challengeType: 5
title: 'Problem 55: Lychrel numbers'
forumTopicId: 302166
localeTitle: 'Проблема 55: числа Лычреля'
---

## Description
<section id='description'>
Если взять 47, перевернуть и добавить, 47 + 74 = 121, что является палиндромным. Не все числа производят палиндромы так быстро. Например, 349 + 943 = 1292, 1292 + 2921 = 4213 4213 + 3124 = 7337 То есть 349 потребовалось три итерации, чтобы добраться до палиндрома. Хотя пока никто этого не доказал, считается, что некоторые цифры, такие как 196, никогда не производят палиндром. Число, которое никогда не образует палиндром через процесс обратного и добавления, называется числом Лычреля. Из-за теоретического характера этих чисел и для этой задачи мы будем предполагать, что число - это Лычрель, пока не будет доказано обратное. Кроме того, вам дается, что для каждого числа ниже десяти тысяч он либо (i) станет палиндром менее чем за пятьдесят итераций, либо (ii) никто со всей вычислительной мощью, которая существует, до сих пор сопоставьте его с палиндром. Фактически, 10677 является первым номером, который должен быть показан, чтобы потребовать более пятидесяти итераций до создания палиндрома: 4668731596684224866951378664 (53 итерации, 28 цифр). Удивительно, но есть палиндромные числа, которые сами являются числами Лычреля; первый пример - 4994. Сколько цифр Лычреля находится ниже <code>num</code> ? ПРИМЕЧАНИЕ. Редакция немного изменилась 24 апреля 2007 года, чтобы подчеркнуть теоретический характер чисел Лычреля.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countLychrelNumbers(1000)</code> should return 13.
    testString: assert.strictEqual(countLychrelNumbers(1000), 13);
  - text: <code>countLychrelNumbers(5000)</code> should return 76.
    testString: assert.strictEqual(countLychrelNumbers(5000), 76);
  - text: <code>countLychrelNumbers(10000)</code> should return 249.
    testString: assert.strictEqual(countLychrelNumbers(10000), 249);
  - text: Your function should count all Lychrel numbers.
    testString: assert.strictEqual(countLychrelNumbers(3243), 39);
  - text: Your function should pass all test cases.
    testString: assert.strictEqual(countLychrelNumbers(7654), 140);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countLychrelNumbers(num) {
  // Good luck!
  return true;
}

countLychrelNumbers(10000);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```

</section>
