---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 5
isHidden: false
forumTopicId: 301611
---

## Description
<section id='description'>
The mathematical term <dfn>symmetric difference</dfn> (<code>&xutri;</code> or <code>&oplus;</code>) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets <code>A = {1, 2, 3}</code> and <code>B = {2, 3, 4}</code>, <code>A &xutri; B = {1, 4}</code>.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among <em>three</em> elements (<code>A &xutri; B &xutri; C</code>), you must complete one operation at a time. Thus, for sets <code>A</code> and <code>B</code> above, and <code>C = {2, 3}</code>, <code>A &xutri; B &xutri; C = (A &xutri; B) &xutri; C = {1, 4} &xutri; {2, 3} = {1, 2, 3, 4}</code>.
</section>

## Instructions
<section id='instructions'>
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (<em>no duplicates</em>).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3);
  - text: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
  - text: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3);
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]);
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3);
  - text: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>
    testString: assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
  - text: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3);
  - text: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
  - text: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.
    testString: assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.
    testString: assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7]);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.
    testString: assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.
    testString: assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9]);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.
    testString: assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function sym() {
  var arrays = [].slice.call(arguments);
  return arrays.reduce(function (symDiff, arr) {
    return symDiff.concat(arr).filter(function (val, idx, theArr) {
      return theArr.indexOf(val) === idx
        && (symDiff.indexOf(val) === -1 || arr.indexOf(val) === -1);
    });
  });
}
sym([1, 2, 3], [5, 2, 1, 4]);

```

</section>
