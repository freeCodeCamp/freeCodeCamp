---
id: 5a23c84252665b21eecc8014
title: Sort stability
challengeType: 5
isHidden: false
forumTopicId: 302308
---

## Description

<section id='description'>
When sorting records in a table by a particular column or field, a <a href="https://en.wikipedia.org/wiki/Stable_sort#Stability" target="_blank">stable sort</a> will always retain the  relative order of records that have the same key.
For example, in this table of countries and cities, a stable sort on the <b>second</b> column, the cities, would  keep the US Birmingham above the UK Birmingham. (Although an unstable sort <i>might</i>, in this case, place the US Birmingham above the UK Birmingham, a stable sort routine would <i>guarantee</i> it).
<pre>
UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>
Similarly, stable sorting on just the first column would generate "UK London" as the first item and "US Birmingham" as the last item (since the order of the elements having the same first word – "UK" or "US" – would be maintained).
</section>

## Instructions

<section id='instructions'>
Write a function that takes a 2D array as a parameter. Each element has 2 elements similar to the above example. The function should sort the array as mentioned previously and return the sorted array.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>stableSort</code> should be a function.
    testString: assert(typeof stableSort == 'function');
  - text: <code>stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])</code> should return an array.
    testString: assert(Array.isArray(stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])));
  - text: <code>stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])</code> should return <code>[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]</code>.
    testString: assert.deepEqual(stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]]), [["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]);
  - text: <code>stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])</code> should return <code>[[2, 2], [1, 2], [1, 4], [1, 5]]</code>.
    testString: assert.deepEqual(stableSort([[2, 2], [1, 2], [1, 4], [1, 5]]), [[2, 2], [1, 2], [1, 4], [1, 5]]);
  - text: <code>stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])</code> should return <code>[[12, 45], [11, 45], [32, 45], [11, 55]]</code>.
    testString: assert.deepEqual(stableSort([[11, 55], [12, 45], [11, 45], [32, 45]]), [[12, 45], [11, 45], [32, 45], [11, 55]]);
  - text: <code>stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])</code> should return <code>[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]</code>.
    testString: assert.deepEqual(stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]]), [[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]);
  - text: <code>stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])</code> should return <code>[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]</code>.
    testString: assert.deepEqual(stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]]), [[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function stableSort(arr) {
  // Good luck!
}
```

</div>

</section>

## Solution

<section id='solution'>

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```

</section>
