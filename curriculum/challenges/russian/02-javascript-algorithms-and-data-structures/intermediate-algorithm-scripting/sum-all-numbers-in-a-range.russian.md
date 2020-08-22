---
id: a3566b1109230028080c9345
title: Sum All Numbers in a Range
isRequired: true
challengeType: 5
forumTopicId: 16083
localeTitle: Сумма всех чисел в диапазоне
---

## Description
<section id='description'>
Мы передадим вам массив из двух чисел. Верните сумму этих двух чисел плюс сумму всех чисел между ними. Самое низкое число не всегда будет первым. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumAll([1, 4])</code> should return a number.
    testString: assert(typeof sumAll([1, 4]) === 'number');
  - text: <code>sumAll([1, 4])</code> should return 10.
    testString: assert.deepEqual(sumAll([1, 4]), 10);
  - text: <code>sumAll([4, 1])</code> should return 10.
    testString: assert.deepEqual(sumAll([4, 1]), 10);
  - text: <code>sumAll([5, 10])</code> should return 45.
    testString: assert.deepEqual(sumAll([5, 10]), 45);
  - text: <code>sumAll([10, 5])</code> should return 45.
    testString: assert.deepEqual(sumAll([10, 5]), 45);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```

</section>
