---
id: 5900f50c1000cf542c51001e
challengeType: 5
title: 'Problem 415: Titanic sets'
forumTopicId: 302084
---

## Description
<section id='description'>
A set of lattice points S is called a titanic set if there exists a line passing through exactly two points in S.

An example of a titanic set is S = {(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)}, where the line passing through (0, 1) and (2, 0) does not pass through any other point in S.

On the other hand, the set {(0, 0), (1, 1), (2, 2), (4, 4)} is not a titanic set since the line passing through any two points in the set also passes through the other two.

For any positive integer N, let T(N) be the number of titanic sets S whose every point (x, y) satisfies 0 ≤ x, y ≤ N.
It can be verified that T(1) = 11, T(2) = 494, T(4) = 33554178, T(111) mod 108 = 13500401 and T(105) mod 108 = 63259062.

Find T(1011) mod 108.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler415()</code> should return 55859742.
    testString: assert.strictEqual(euler415(), 55859742);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler415() {

  return true;
}

euler415();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
