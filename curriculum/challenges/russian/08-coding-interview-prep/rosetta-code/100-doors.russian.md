---
title: 100 doors
id: 594810f028c0303b75339acb
challengeType: 5
forumTopicId: 302217
localeTitle: 100 дверей
---

## Description
<section id='description'>
<p> Есть 100 дверей подряд, все изначально закрыты. Вы делаете 100 проходов у дверей. В первый раз, зайдите в каждую дверь и «переключите» дверь (если дверь закрыта, откройте ее, если она открыта, закройте ее). Во второй раз заходите только к каждой второй двери (т. Е. К двери №2, №4, №6, ...) и переключите ее. В третий раз посетите каждую 3-ю дверь (т. Е. Дверь № 3, №6, №9, ...) и т. Д., Пока вы не посетите только 100-ю дверь. </p><p> Внедрите функцию определения состояния дверей после последнего прохода. Верните конечный результат в массив, только если номер двери включен в массив, если он открыт. </p>
</section>

## Instructions
<section id='instructions'>
Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getFinalOpenedDoors</code> is a function.
    testString: assert(typeof getFinalOpenedDoors === 'function');
  - text: <code>getFinalOpenedDoors</code> should return an array.
    testString: assert(Array.isArray(getFinalOpenedDoors(100)));
  - text: <code>getFinalOpenedDoors</code> did not produce the correct results.
    testString: assert.deepEqual(getFinalOpenedDoors(100), solution);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getFinalOpenedDoors(numDoors) {
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const solution = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function getFinalOpenedDoors(numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}
```

</section>
