---
id: 5900f5021000cf542c510014
challengeType: 5
title: 'Problem 405: A rectangular tiling'
forumTopicId: 302073
---

## Description
<section id='description'>
We wish to tile a rectangle whose length is twice its width.
Let T(0) be the tiling consisting of a single rectangle.
For n > 0, let T(n) be obtained from T(n-1) by replacing all tiles in the following manner:






The following animation demonstrates the tilings T(n) for n from 0 to 5:






Let f(n) be the number of points where four tiles meet in T(n).
For example, f(1) = 0, f(4) = 82 and f(109) mod 177 = 126897180.



Find f(10k) for k = 1018, give your answer modulo 177.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler405()</code> should return 237696125.
    testString: assert.strictEqual(euler405(), 237696125);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler405() {

  return true;
}

euler405();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
