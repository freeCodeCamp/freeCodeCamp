---
id: 5900f3b71000cf542c50feca
title: 'Problem 75: Singular integer right triangles'
challengeType: 5
forumTopicId: 302188
dashedName: problem-75-singular-integer-right-triangles
---

# --description--

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

# --hints--

`singularIntRightTriangles()` should return a number.

```js
assert(typeof singularIntRightTriangles() === 'number');
```

`singularIntRightTriangles()` should return 161667.

```js
assert.strictEqual(singularIntRightTriangles(), 161667);
```

# --seed--

## --seed-contents--

```js
function singularIntRightTriangles() {

  return true;
}

singularIntRightTriangles();
```

# --solutions--

```js
// solution required
```
