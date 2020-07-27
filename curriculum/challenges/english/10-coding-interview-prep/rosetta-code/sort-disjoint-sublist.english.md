---
id: 5a23c84252665b21eecc8000
title: Sort disjoint sublist
challengeType: 5
isHidden: false
forumTopicId: 302307
---

## Description

<section id='description'>
Given a list of values and a set of integer indices into that value list, the task is to sort the values at the given indices, but preserving the values at indices outside the set of those to be sorted.
Make your function work with the following list of values and set of indices:
<code> values: [7, <b>6</b>, 5, 4, 3, 2, <b>1</b>, <b>0</b>]</code>
<code> indices(0-based): {6, 1, 7}</code>
Where the correct result would be:
<code>[7, <b>0</b>, 5, 4, 3, 2, <b>1</b>, <b>6</b>]</code>.
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>sortDisjoint</code> should be a function.
    testString: assert(typeof sortDisjoint == 'function');
  - text: <code>sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])</code> should return an array.
    testString: assert(Array.isArray(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])));
  - text: <code>sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])</code> should return <code>[7, 0, 5, 4, 3, 2, 1, 6]</code>.
    testString: assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]), [7, 0, 5, 4, 3, 2, 1, 6]);
  - text: <code>sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6])</code> should return <code>[7, 1, 2, 4, 3, 5, 6, 0]</code>.
    testString: assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6]), [7, 1, 2, 4, 3, 5, 6, 0]);
  - text: <code>sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7])</code> should return <code>[8, 1, 6, 5, 4, 3, 2, 7]</code>.
    testString: assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7]), [8, 1, 6, 5, 4, 3, 2, 7]);
  - text: <code>sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6])</code> should return <code>[8, 2, 6, 3, 4, 5, 7, 1]</code>.
    testString: assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6]), [8, 2, 6, 3, 4, 5, 7, 1]);
  - text: <code>sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4])</code> should return <code>[6, 1, 7, 1, 3, 5, 6]</code>.
    testString: assert.deepEqual(sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4]), [6, 1, 7, 1, 3, 5, 6]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function sortDisjoint(values, indices) {
  // Good luck!
}
```

</div>

</section>

## Solution

<section id='solution'>

```js
function sortDisjoint(values, indices) {
  let sublist = [];

  indices.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    sublist.push(values[indices[i]]);
  }

  sublist.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = sublist[i];
  }

  return values;
}
```

</section>
