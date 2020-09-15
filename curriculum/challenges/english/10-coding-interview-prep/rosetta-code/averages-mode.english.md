---
title: Averages/Mode
id: 594d8d0ab97724821379b1e6
challengeType: 5
forumTopicId: 302226
---

## Description
<section id='description'>
Write a program to find the <a href='https://en.wikipedia.org/wiki/Mode (statistics)' title='wp: Mode (statistics)' target='_blank'>mode</a> value of a collection.
The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.
If it is not appropriate or possible to support a general collection, use a vector (array), if possible. If it is not appropriate or possible to support an unspecified value type, use integers.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mode</code> should be a function.
    testString: assert(typeof mode === 'function');
  - text: <code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> should equal <code>[6]</code>
    testString: assert.deepEqual(mode(arr1), [6]);
  - text: <code>mode([1, 2, 4, 4, 1])</code> should equal <code>[1, 4]</code>.
    testString: assert.deepEqual(mode(arr2).sort(), [1, 4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mode(arr) {

  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}

```

</section>
