---
id: 5900f3b11000cf542c50fec4
challengeType: 5
title: 'Problem 69: Totient maximum'
forumTopicId: 302181
---

## Description
<section id='description'>

Euler's Totient function, φ(<var>n</var>) [sometimes called the phi function], is used to determine the number of numbers less than <var>n</var> which are relatively prime to <var>n</var>. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.

<div style='margin-left: 4em;'>

  |<var>n</var>|Relatively Prime|φ(<var>n</var>)|<var>n</var>/φ(<var>n</var>)|
  |--- |--- |--- |--- |
  |2|1|1|2|
  |3|1,2|2|1.5|
  |4|1,3|2|2|
  |5|1,2,3,4|4|1.25|
  |6|1,5|2|3|
  |7|1,2,3,4,5,6|6|1.1666...|
  |8|1,3,5,7|4|2|
  |9|1,2,4,5,7,8|6|1.5|
  |10|1,3,7,9|4|2.5|

</div>

It can be seen that <var>n</var>=6 produces a maximum <var>n</var>/φ(<var>n</var>) for <var>n</var> ≤ 10.

Find the value of <var>n</var> ≤ 1,000,000 for which n/φ(<var>n</var>) is a maximum.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>totientMaximum()</code> should return a number.
    testString: assert(typeof totientMaximum() === 'number');
  - text: <code>totientMaximum()</code> should return 510510.
    testString: assert.strictEqual(totientMaximum(), 510510);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function totientMaximum() {

  return true;
}

totientMaximum();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
