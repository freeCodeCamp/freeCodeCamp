---
id: 5900f3ae1000cf542c50fec1
challengeType: 5
title: 'Problem 66: Diophantine equation'
forumTopicId: 302178
---

## Description
<section id='description'>

Consider quadratic Diophantine equations of the form:

<div style='text-align: center;'>x<sup>2</sup> – Dy<sup>2</sup> = 1</div>

For example, when D=13, the minimal solution in x is 649<sup>2</sup> – 13×180<sup>2</sup> = 1.

It can be assumed that there are no solutions in positive integers when D is square.

By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:

<div style='margin-left: 2em;'>
  3<sup>2</sup> – 2×2<sup>2</sup> = 1<br>
  2<sup>2</sup> – 3×1<sup>2</sup> = 1<br>
  <strong><span style='color: red;'>9</span></strong><sup>2</sup> – 5×4<sup>2</sup> = 1<br>
  5<sup>2</sup> – 6×2<sup>2</sup> = 1<br>
  8<sup>2</sup> – 7×3<sup>2</sup> = 1<br>
</div>

Hence, by considering minimal solutions in <var>x</var> for D ≤ 7, the largest <var>x</var> is obtained when D=5.

Find the value of D ≤ 1000 in minimal solutions of <var>x</var> for which the largest value of <var>x</var> is obtained.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>diophantineEquation()</code> should return a number.
    testString: assert(typeof diophantineEquation() === 'number');
  - text: <code>diophantineEquation()</code> should return 661.
    testString: assert.strictEqual(diophantineEquation(), 661);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function diophantineEquation() {

  return true;
}

diophantineEquation();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
