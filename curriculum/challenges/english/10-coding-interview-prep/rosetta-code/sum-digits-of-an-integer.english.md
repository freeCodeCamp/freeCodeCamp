---
id: 5a23c84252665b21eecc803f
title: Sum digits of an integer
challengeType: 5
forumTopicId: 302331
---

## Description

<section id='description'>
Write a function that takes a string as a parameter. This string represents a number that can be in any base (less than 37) and return the sum of its digits.
<ul>
  <li><b>1</b><sub>10</sub> sums to <b>1</b></li>
  <li><b>1234</b><sub>10</sub> sums to <b>10</b></li>
  <li><b>fe</b><sub>16</sub> sums to <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> sums to <b>29</b></li>
</ul>
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>sumDigits</code> should be a function.
    testString: assert(typeof sumDigits == 'function');
  - text: <code>sumDigits("1")</code> should return a number.
    testString: assert(typeof sumDigits("1") == 'number');
  - text: <code>sumDigits("1")</code> should return <code>1</code>.
    testString: assert.equal(sumDigits("1"), 1);
  - text: <code>sumDigits("12345")</code> should return <code>15</code>.
    testString: assert.equal(sumDigits("12345"), 15);
  - text: <code>sumDigits("254")</code> should return <code>11</code>.
    testString: assert.equal(sumDigits("254"), 11);
  - text: <code>sumDigits("fe")</code> should return <code>29</code>.
    testString: assert.equal(sumDigits("fe"), 29);
  - text: <code>sumDigits("f0e")</code> should return <code>29</code>.
    testString: assert.equal(sumDigits("f0e"), 29);
  - text: <code>sumDigits("999ABCXYZ")</code> should return <code>162</code>.
    testString: assert.equal(sumDigits("999ABCXYZ"), 162);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function sumDigits(n) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function sumDigits(n) {
  n += '';
  for (var s = 0, i = 0, e = n.length; i < e; i += 1)
    s += parseInt(n.charAt(i), 36);
  return s;
}
```

</section>
