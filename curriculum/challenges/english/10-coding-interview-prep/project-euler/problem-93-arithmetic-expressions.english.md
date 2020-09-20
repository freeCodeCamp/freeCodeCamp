---
id: 5900f3ca1000cf542c50fedc
challengeType: 5
title: 'Problem 93: Arithmetic expressions'
forumTopicId: 302210
---

## Description
<section id='description'>

By using each of the digits from the set, {1, 2, 3, 4}, exactly once, and making use of the four arithmetic operations (+, −, *, /) and brackets/parentheses, it is possible to form different positive integer targets.

For example,

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

Note that concatenations of the digits, like 12 + 34, are not allowed.

Using the set, {1, 2, 3, 4}, it is possible to obtain thirty-one different target numbers of which 36 is the maximum, and each of the numbers 1 to 28 can be obtained before encountering the first non-expressible number.

Find the set of four distinct digits, <var>a</var> < <var>b</var> < <var>c</var> < <var>d</var>, for which the longest set of consecutive positive integers, 1 to <var>n</var>, can be obtained, giving your answer as a string: <var>abcd</var>.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arithmeticExpressions()</code> should return a number.
    testString: assert(typeof arithmeticExpressions() === 'number');
  - text: <code>arithmeticExpressions()</code> should return 1258.
    testString: assert.strictEqual(arithmeticExpressions(), 1258);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
