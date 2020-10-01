---
id: 5900f4eb1000cf542c50fffd
challengeType: 5
title: 'Problem 382: Generating polygons'
forumTopicId: 302046
---

## Description
<section id='description'>
A polygon is a flat shape consisting of straight line segments that are joined to form a closed chain or circuit. A polygon consists of at least three sides and does not self-intersect.



A set S of positive numbers is said to generate a polygon P if: no two sides of P are the same length,
 the length of every side of P is in S, and
 S contains no other value.

For example:
The set {3, 4, 5} generates a polygon with sides 3, 4, and 5 (a triangle).
The set {6, 9, 11, 24} generates a polygon with sides 6, 9, 11, and 24 (a quadrilateral).
The sets {1, 2, 3} and {2, 3, 4, 9} do not generate any polygon at all.


Consider the sequence s, defined as follows:s1 = 1, s2 = 2, s3 = 3
sn = sn-1 + sn-3 for n > 3.

Let Un be the set {s1, s2, ..., sn}. For example, U10 = {1, 2, 3, 4, 6, 9, 13, 19, 28, 41}.
Let f(n) be the number of subsets of Un which generate at least one polygon.
For example, f(5) = 7, f(10) = 501 and f(25) = 18635853.



Find the last 9 digits of f(1018).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler382()</code> should return 697003956.
    testString: assert.strictEqual(euler382(), 697003956);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler382() {

  return true;
}

euler382();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
