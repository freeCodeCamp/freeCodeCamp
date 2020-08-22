---
id: 5900f3e61000cf542c50fef9
challengeType: 5
isHidden: false
title: 'Problem 122: Efficient exponentiation'
forumTopicId: 301749
---

## Description
<section id='description'>
The most naive way of computing n15 requires fourteen multiplications:
n × n × ... × n = n15
But using a "binary" method you can compute it in six multiplications:
n × n = n2n2 × n2 = n4n4 × n4 = n8n8 × n4 = n12n12 × n2 = n14n14 × n = n15
However it is yet possible to compute it in only five multiplications:
n × n = n2n2 × n = n3n3 × n3 = n6n6 × n6 = n12n12 × n3 = n15
We shall define m(k) to be the minimum number of multiplications to compute nk; for example m(15) = 5.
For 1 ≤ k ≤ 200, find ∑ m(k).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler122()</code> should return 1582.
    testString: assert.strictEqual(euler122(), 1582);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler122() {
  // Good luck!
  return true;
}

euler122();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
