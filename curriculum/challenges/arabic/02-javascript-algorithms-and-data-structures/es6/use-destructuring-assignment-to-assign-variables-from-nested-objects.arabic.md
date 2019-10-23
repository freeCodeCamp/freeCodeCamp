---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(getMaxOfTmrw(LOCAL_FORECAST) === 84.6, "<code>maxOfTomorrow</code> equals <code>84.6</code>");'
  - text: ''
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
