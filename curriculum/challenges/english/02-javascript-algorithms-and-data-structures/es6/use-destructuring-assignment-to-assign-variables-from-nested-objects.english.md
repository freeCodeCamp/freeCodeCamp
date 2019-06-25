---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
---

## Description
<section id='description'>
We can similarly destructure <em>nested</em> objects into variables.
Consider the following code:

```js
const a = {
  start: { x: 5, y: 6 },
  end: { x: 6, y: -9 }
};
const { start: { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```

In the example above, the variable <code>startX</code> is assigned the value of <code>a.start.x</code>.
</section>

## Instructions
<section id='instructions'>
Use destructuring assignment to obtain <code>max</code> of <code>forecast.tomorrow</code> and assign it to <code>maxOfTomorrow</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maxOfTomorrow</code> equals <code>84.6</code>
    testString: assert(getMaxOfTmrw(LOCAL_FORECAST) === 84.6, '<code>maxOfTomorrow</code> equals <code>84.6</code>');
  - text: nested destructuring was used
    testString: getUserInput => assert(getUserInput('index').match(/\{\s*tomorrow\s*:\s*\{\s*max\s*:\s*maxOfTomorrow\s*\}\s*\}\s*=\s*forecast/g),'nested destructuring was used');

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
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
   const {tomorrow : {max : maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
```
</section>
