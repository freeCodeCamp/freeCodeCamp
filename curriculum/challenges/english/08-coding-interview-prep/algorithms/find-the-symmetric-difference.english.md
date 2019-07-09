---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 5
---

## Description
<section id='description'>
Create a function that takes two or more arrays and returns an array of the <dfn>symmetric difference</dfn> (<code>&xutri;</code> or <code>&oplus;</code>) of the provided arrays.
Given two sets (for example set <code>A = {1, 2, 3}</code> and set <code>B = {2, 3, 4}</code>), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (<code>A &xutri; B = C = {1, 4}</code>). For every additional symmetric difference you take (say on a set <code>D = {2, 3}</code>), you should get the set with elements which are in either of the two the sets but not both (<code>C &xutri; D = {1, 4} &xutri; {2, 3} = {1, 2, 3, 4}</code>). The resulting array must contain only unique values (<em>no duplicates</em>).
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

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
