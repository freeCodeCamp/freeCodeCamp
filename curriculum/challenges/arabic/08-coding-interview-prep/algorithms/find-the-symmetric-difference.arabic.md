---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 5
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
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: ''
    testString: 'assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: ''
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.");'
  - text: ''
    testString: 'assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>");'
  - text: ''
    testString: 'assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3, "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.");'
  - text: ''
    testString: 'assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3, "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.");'
  - text: ''
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.");'
  - text: ''
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.");'

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
// solution required
```
</section>
