---
id: 5900f3b71000cf542c50feca
challengeType: 5
title: 'Problem 75: Singular integer right triangles'
forumTopicId: 302188
---

## Description
<section id='description'>

It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.

<div style='margin-left: 4em;'>
  <strong>12 cm:</strong> (3,4,5)<br>
  <strong>24 cm:</strong> (6,8,10)<br>
  <strong>30 cm:</strong> (5,12,13)<br>
  <strong>36 cm:</strong> (9,12,15)<br>
  <strong>40 cm:</strong> (8,15,17)<br>
  <strong>48 cm:</strong> (12,16,20)<br>
</div>

In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.

<div style='margin-left: 4em;'>
  <strong>120 cm:</strong> (30,40,50), (20,48,52), (24,45,51)
</div>

Given that L is the length of the wire, for how many values of L ≤ 1,500,000 can exactly one integer sided right angle triangle be formed?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>singularIntRightTriangles()</code> should return a number.
    testString: assert(typeof singularIntRightTriangles() === 'number');
  - text: <code>singularIntRightTriangles()</code> should return 161667.
    testString: assert.strictEqual(singularIntRightTriangles(), 161667);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function singularIntRightTriangles() {

  return true;
}

singularIntRightTriangles();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
