---
title: 100 doors
id: 594810f028c0303b75339acb
challengeType: 5
videoUrl: ''
localeTitle: 100 дверей
---

## Description
<section id="description"><p> Есть 100 дверей подряд, все изначально закрыты. Вы делаете 100 проходов у дверей. В первый раз, зайдите в каждую дверь и «переключите» дверь (если дверь закрыта, откройте ее, если она открыта, закройте ее). Во второй раз заходите только к каждой второй двери (т. Е. К двери №2, №4, №6, ...) и переключите ее. В третий раз посетите каждую 3-ю дверь (т. Е. Дверь № 3, №6, №9, ...) и т. Д., Пока вы не посетите только 100-ю дверь. </p><p> Внедрите функцию определения состояния дверей после последнего прохода. Верните конечный результат в массив, только если номер двери включен в массив, если он открыт. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getFinalOpenedDoors</code> - это функция.
    testString: 'assert(typeof getFinalOpenedDoors === "function", "<code>getFinalOpenedDoors</code> is a function.");'
  - text: <code>getFinalOpenedDoors</code> должен возвращать массив.
    testString: 'assert(Array.isArray(getFinalOpenedDoors(100)), "<code>getFinalOpenedDoors</code> should return an array.");'
  - text: <code>getFinalOpenedDoors</code> не <code>getFinalOpenedDoors</code> правильных результатов.
    testString: 'assert.deepEqual(getFinalOpenedDoors(100), solution, "<code>getFinalOpenedDoors</code> did not produce the correct results.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getFinalOpenedDoors (numDoors) {
  // Good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
