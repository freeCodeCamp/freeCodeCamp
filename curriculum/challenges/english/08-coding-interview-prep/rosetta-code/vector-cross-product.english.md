---
title: Vector cross product
id: 594810f028c0303b75339ad2
challengeType: 5
---

## Description
<section id='description'>
A vector is defined as having three dimensions as being represented by an ordered collection of three numbers: &nbsp; (X, Y, Z).
<p>
Task:

    Write a function that takes two vectors (arrays) as input and computes their cross product.

Your function should return <code>null</code> on
invalid inputs (ie vectors of different lengths).
</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: dotProduct must be a function
    testString: 'assert.equal(typeof crossProduct, "function", "dotProduct must be a function");'
  - text: dotProduct() must return null
    testString: 'assert.equal(crossProduct(), null, "dotProduct() must return null");'
  - text: 'crossProduct([1, 2, 3], [4, 5, 6]) must return [-3, 6, -3].'
    testString: 'assert.deepEqual(res12, exp12, "crossProduct([1, 2, 3], [4, 5, 6]) must return [-3, 6, -3].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function crossProduct() {
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
function crossProduct(a, b) {
  if (!a || !b) {
    return null;
  }

  // Check lengths
  if (a.length !== 3 || b.length !== 3) {
    return null;
  }

  return [
    (a[1] * b[2]) - (a[2] * b[1]),
    (a[2] * b[0]) - (a[0] * b[2]),
    (a[0] * b[1]) - (a[1] * b[0])
  ];
}

```

</section>
