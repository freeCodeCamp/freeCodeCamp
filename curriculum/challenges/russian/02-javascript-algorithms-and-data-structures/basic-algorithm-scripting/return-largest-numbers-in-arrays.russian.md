---
id: a789b3483989747d63b0e427
title: Return Largest Numbers in Arrays
isRequired: true
challengeType: 5
forumTopicId: 16042
localeTitle: Возвращает наибольшие числа в массивах
---

## Description
<section id='description'>
Возвращает массив, состоящий из наибольшего числа из каждого предоставленного подматрица. Для простоты предоставленный массив будет содержать ровно 4 поддиапазона. Помните, вы можете перебирать массив с помощью простого цикла и обращаться к каждому члену с синтаксисом массива <code>arr[i]</code> . Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return an array.
    testString: assert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]).constructor === Array);
  - text: <code>largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return <code>[27, 5, 39, 1001]</code>.
    testString: assert.deepEqual(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27, 5, 39, 1001]);
  - text: <code>largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])</code> should return <code>[9, 35, 97, 1000000]</code>.
    testString: assert.deepEqual(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9, 35, 97, 1000000]);
  - text: <code>largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])</code> should return <code>[25, 48, 21, -3]</code>.
    testString: assert.deepEqual(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]), [25, 48, 21, -3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function largestOfFour(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

</section>
