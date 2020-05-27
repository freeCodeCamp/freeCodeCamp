---
id: a105e963526e7de52b219be9
title: Sorted Union
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16077
---

## Description
<section id='description'>
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> should return <code>[1, 3, 2, 5, 4]</code>.
    testString: assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1])</code> should return <code>[1, 2, 3, 5]</code>.
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> should return <code>[1, 2, 3, 5, 4, 6, 7, 8]</code>.
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(a, b.filter(function(e) {return a.indexOf(e) === -1;}));
  }, []);
}
```

</section>
