---
id: 5900f43e1000cf542c50ff4f
challengeType: 5
title: 'Problem 209: Circular Logic'
forumTopicId: 301850
---

## Description
<section id='description'>
A k-input binary truth table is a map from k input bits
(binary digits, 0 [false] or 1 [true]) to 1 output bit. For example, the 2-input binary truth tables for the logical AND and XOR functions are:

x
y
x AND y000010100111x
y
x XOR y000011101110How many 6-input binary truth tables, τ, satisfy the formula

τ(a, b, c, d, e, f) AND τ(b, c, d, e, f, a XOR (b AND c)) = 0
for all 6-bit inputs (a, b, c, d, e, f)?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler209()</code> should return 15964587728784.
    testString: assert.strictEqual(euler209(), 15964587728784);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler209() {

  return true;
}

euler209();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
