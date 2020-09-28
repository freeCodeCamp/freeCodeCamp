---
id: 5a23c84252665b21eecc7e1e
title: Dot product
challengeType: 5
forumTopicId: 302251
---

## Description

<section id='description'>

Create a function, to compute the <b><a href="https://en.wikipedia.org/wiki/Dot product">dot product</a></b>, also known as the <b>scalar product</b> of two vectors.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>dotProduct</code> should be a function.
    testString: assert(typeof dotProduct == 'function');
  - text: <code>dotProduct([1, 3, -5], [4, -2, -1])</code> should return a number.
    testString: assert(typeof dotProduct([1, 3, -5], [4, -2, -1]) == 'number');
  - text: <code>dotProduct([1, 3, -5], [4, -2, -1])</code> should return <code>3</code>.
    testString: assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
  - text: <code>dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])</code> should return <code>130</code>.
    testString: assert.equal(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 130);
  - text: <code>dotProduct([5, 4, 3, 2], [7, 8, 9, 6])</code> should return <code>106</code>.
    testString: assert.equal(dotProduct([5, 4, 3, 2], [7, 8, 9, 6]), 106);
  - text: <code>dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6])</code> should return <code>-36</code>.
    testString: assert.equal(dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6]), -36);
  - text: <code>dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])</code> should return <code>10392</code>.
    testString: assert.equal(dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110]), 10392);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function dotProduct(ary1, ary2) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function dotProduct(ary1, ary2) {
  var dotprod = 0;
  for (var i = 0; i < ary1.length; i++) dotprod += ary1[i] * ary2[i];
  return dotprod;
}
```

</section>
