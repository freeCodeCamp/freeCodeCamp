---
id: 5a23c84252665b21eecc8046
title: Symmetric difference
challengeType: 5
forumTopicId: 16086
---

## Description

<section id='description'>

Given two [set](https://rosettacode.org/wiki/set)s *A* and *B*, compute $(A \\setminus B) \\cup (B \\setminus A).$ That is, enumerate the items that are in *A* or *B* but not both. This set is called the [symmetric difference](<https://en.wikipedia.org/wiki/Symmetric difference>) of *A* and *B*. In other words: $(A \\cup B) \\setminus (A \\cap B)$ (the set of items that are in at least one of *A* or *B* minus the set of items that are in both *A* and *B*).

</section>

## Instructions

<section id='instructions'>

Write a function that takes two arrays as parameters and returns the symmetric difference. Sort the resultant array before returning it.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>symmetricDifference</code> should be a function.
    testString: assert(typeof symmetricDifference == 'function');
  - text: <code>symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])</code> should return an array.
    testString: assert(Array.isArray(symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])));
  - text: <code>symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])</code> should return <code>["Jim", "Serena"]</code>.
    testString: assert.deepEqual(symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"]), ["Jim", "Serena"]);
  - text: <code>symmetricDifference([1, 2, 3], [3, 4])</code> should return <code>[1, 2, 4]</code>.
    testString: assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
  - text: <code>symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])</code> should return <code>[1, 2, 5, 7, 8]</code>.
    testString: assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [1, 2, 5, 7, 8]);
  - text: <code>symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])</code> should return <code>[2, 4, 9]</code>.
    testString: assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]), [2, 4, 9]);
  - text: <code>symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])</code> should return <code>[1, 3, 4, 8]</code>.
    testString: assert.deepEqual(symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9]), [1, 3, 4, 8]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function symmetricDifference(A, B) {

}
```

</div>

</section>

## Solution

<section id='solution'>

```js
function symmetricDifference(A, B) {
  function relative_complement(A, B) {
    return A.filter(function(elem) {
      return B.indexOf(elem) == -1;
    });
  }

  function unique(ary) {
    var u = ary.concat().sort();
    for (var i = 1; i < u.length; ) {
      if (u[i - 1] === u[i]) u.splice(i, 1);
      else i++;
    }
    return u;
  }

  return unique(
    relative_complement(A, B).concat(relative_complement(B, A))
  ).sort();
}
```

</section>
