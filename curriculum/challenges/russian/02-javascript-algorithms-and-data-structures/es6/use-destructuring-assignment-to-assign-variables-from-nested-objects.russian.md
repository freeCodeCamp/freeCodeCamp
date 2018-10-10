---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: Назначение Destructuring для назначения переменных из вложенных объектов
---

## Description
<section id="description"> Подобным же образом мы можем разрушить <em>вложенные</em> объекты в переменные. Рассмотрим следующий код: <blockquote> const a = { <br> start: {x: 5, y: 6}, <br> end: {x: 6, y: -9} <br> }; <br> const {start: {x: startX, y: startY}} = a; <br> console.log (startX, startY); // 5, 6 </blockquote> В приведенном выше примере <code>start</code> переменной присваивается значение <code>a.start</code> , которое также является объектом. </section>

## Instructions
<section id="instructions"> Используйте назначение destructuring, чтобы получить <code>max</code> <code>forecast.tomorrow</code> И назначьте его <code>maxOfTomorrow</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maxOfTomorrow</code> равняется <code>84.6</code>
    testString: 'assert(getMaxOfTmrw(LOCAL_FORECAST) === 84.6, "<code>maxOfTomorrow</code> equals <code>84.6</code>");'
  - text: вложенное деструктурирование
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*\{\s*max\s*:\s*maxOfTomorrow\s*\}\s*\}\s*=\s*forecast/g),"nested destructuring was used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const maxOfTomorrow = undefined; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
