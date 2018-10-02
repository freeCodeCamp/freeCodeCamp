---
title: 100 doors
id: 594810f028c0303b75339acb
challengeType: 5
---

## Description
<section id='description'>
<p>There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.</p>
<p>Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>getFinalOpenedDoors</code> is a function.
  testString: 'assert(typeof getFinalOpenedDoors === ''function'', ''<code>getFinalOpenedDoors</code> is a function.'');'
- text: <code>getFinalOpenedDoors</code> should return an array.
  testString: 'assert(Array.isArray(getFinalOpenedDoors(100)), ''<code>getFinalOpenedDoors</code> should return an array.'');'
- text: <code>getFinalOpenedDoors</code> did not produce the correct results.
  testString: 'assert.deepEqual(getFinalOpenedDoors(100), solution, ''<code>getFinalOpenedDoors</code> did not produce the correct results.'');'

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
function getFinalOpenedDoors (numDoors) {
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
