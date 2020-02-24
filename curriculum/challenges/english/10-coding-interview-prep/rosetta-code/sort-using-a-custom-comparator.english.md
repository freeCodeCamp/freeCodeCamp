---
id: 5a23c84252665b21eecc8016
title: Sort using a custom comparator
challengeType: 5
isHidden: false
forumTopicId: 302309
---

## Description

<section id='description'>
Write a function to sort an array (or list) of strings in order of descending length, and in ascending lexicographic order for strings of equal length.
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>lengthSorter</code> should be a function.
    testString: assert(typeof lengthSorter == 'function');
  - text: <code>lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])</code> should return an array.
    testString: assert(Array.isArray(lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])));
  - text: <code>lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])</code> should return <code>["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]</code>.
    testString: assert.deepEqual(lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"]), ["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]);
  - text: <code>lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"])</code> should return <code>["going", "good", "hope", "your", "day", "is", "?","I"]</code>.
    testString: assert.deepEqual(lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"]), ["going", "good", "hope", "your", "day", "is", "?","I"]);
  - text: <code>lengthSorter(["Mine", "is", "going", "great"])</code> should return <code>["going", "great", "Mine", "is"]</code>.
    testString: assert.deepEqual(lengthSorter(["Mine", "is", "going", "great"]), ["going", "great", "Mine", "is"]);
  - text: <code>lengthSorter(["Have", "fun", "sorting", "!!"])</code> should return <code>["sorting", "Have", "fun", "!!"]</code>.
    testString: assert.deepEqual(lengthSorter(["Have", "fun", "sorting", "!!"]), ["sorting", "Have", "fun", "!!"]);
  - text: <code>lengthSorter(["Everything", "is", "good", "!!"])</code> should return <code>["Everything", "good", "!!", "is"]</code>.
    testString: assert.deepEqual(lengthSorter(["Everything", "is", "good", "!!"]), ["Everything", "good", "!!", "is"]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function lengthSorter(arr) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function lengthSorter(arr) {
  arr.sort(function(a, b) {
    var result = b.length - a.length;
    if (result == 0) result = a.localeCompare(b);
    return result;
  });
  return arr;
}
```

</section>
