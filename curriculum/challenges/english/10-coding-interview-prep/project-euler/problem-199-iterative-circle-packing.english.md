---
id: 5900f4341000cf542c50ff46
challengeType: 5
isHidden: false
title: 'Problem 199: Iterative Circle Packing'
forumTopicId: 301837
---

## Description
<section id='description'>
Three circles of equal radius are placed inside a larger circle such that each pair of circles is tangent to one another and the inner circles do not overlap. There are four uncovered "gaps" which are to be filled iteratively with more tangent circles.

<img class="img-responsive center-block" alt="a diagram of non-overlapping concentric circles" src="https://projecteuler.net/project/images/p199_circles_in_circles.gif" style="background-color: white; padding: 10px;">

At each iteration, a maximally sized circle is placed in each gap, which creates more gaps for the next iteration. After 3 iterations (pictured), there are 108 gaps and the fraction of the area which is not covered by circles is 0.06790342, rounded to eight decimal places.

What fraction of the area is not covered by circles after 10 iterations?
Give your answer rounded to eight decimal places using the format x.xxxxxxxx .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler199()</code> should return a number.
    testString: assert(typeof euler199() === 'number');
  - text: <code>euler199()</code> should return 0.00396087.
    testString: assert.strictEqual(euler199(), 0.00396087);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler199() {
  // Good luck!
  return true;
}

euler199();
```

</div>



</section>

## Solution
<section id='solution'>

```js
function euler199() {
  let size = 10;
  let k1 = 1;
  let k0 = k1 * (3 - 2 * Math.sqrt(3));
  let a0 = 1 / (k0 * k0);
  let a1 = 3 / (k1 * k1);
  a1 += 3 * getArea(k0, k1, k1, size);
  a1 += getArea(k1, k1, k1, size);
  let final = ((a0 - a1) / a0).toFixed(8);
  return +final;

  function getArea(k1, k2, k3, depth) {
      if (depth == 0) return 0.0;
      let k4 = k1 + k2 + k3 + 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
      let a = 1 / (k4 * k4);
      a += getArea(k1, k2, k4, depth - 1);
      a += getArea(k2, k3, k4, depth - 1);
      a += getArea(k3, k1, k4, depth - 1);
      return a;
  }
}
euler199();
```

</section>
