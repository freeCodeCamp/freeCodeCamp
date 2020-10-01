---
id: 5900f4be1000cf542c50ffd1
challengeType: 5
title: 'Problem 338: Cutting Rectangular Grid Paper'
forumTopicId: 301996
---

## Description
<section id='description'>
A rectangular sheet of grid paper with integer dimensions w × h is given. Its grid spacing is 1.
When we cut the sheet along the grid lines into two pieces and rearrange those pieces without overlap, we can make new rectangles with different dimensions.
For example, from a sheet with dimensions 9 × 4 , we can make rectangles with dimensions 18 × 2, 12 × 3 and 6 × 6 by cutting and rearranging as below:




Similarly, from a sheet with dimensions 9 × 8 , we can make rectangles with dimensions 18 × 4 and 12 × 6 .

For a pair w and h, let F(w,h) be the number of distinct rectangles that can be made from a sheet with dimensions w × h .
For example, F(2,1) = 0, F(2,2) = 1, F(9,4) = 3 and F(9,8) = 2.
Note that rectangles congruent to the initial one are not counted in F(w,h).
Note also that rectangles with dimensions w × h and dimensions h × w are not considered distinct.

For an integer N, let G(N) be the sum of F(w,h) for all pairs w and h which satisfy 0 < h ≤ w ≤ N.
We can verify that G(10) = 55, G(103) = 971745 and G(105) = 9992617687.

Find G(1012). Give your answer modulo 108.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler338()</code> should return 15614292.
    testString: assert.strictEqual(euler338(), 15614292);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler338() {

  return true;
}

euler338();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
