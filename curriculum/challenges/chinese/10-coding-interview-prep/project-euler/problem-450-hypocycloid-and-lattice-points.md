---
id: 5900f52e1000cf542c510041
challengeType: 5
videoUrl: ''
title: 问题450：Hypocycloid和Lattice点
---

## Description
<section id="description">内摆线是由在较大圆内滚动的小圆上的点绘制的曲线。以原点为中心，从最右边开始的内摆线的参数方程由下式给出：$ x（t）=（R  -  r）\ cos（t）+ r \ cos（\ frac {R  -  r} rt）$ $ y（t）=（R  -  r）\ sin（t） -  r \ sin（\ frac {R  -  r} rt）$其中R是大圆的半径，r是小圆的半径圈。 <p>设$ C（R，r）$是具有半径为R和r的内摆线上的整数坐标的不同点的集合，并且对应的值为t，使得$ \ sin（t）$和$ \ cos（ t）$是有理数。 </p><p>设$ S（R，r）= \ sum _ {（x，y）\ in C（R，r）} | x | + | y | $是$ C（R，r）$中点的x和y坐标的绝对值之和。 </p><p>设$ T（N）= \ sum <em>{R = 3} ^ N \ sum</em> {r = 1} ^ {\ lfloor \ frac {R  -  1} 2 \ rfloor} S（R，r）$是$的总和S（R，r）$表示R和r正整数，$ R \ leq N $和$ 2r &lt;R $。 </p><p>给出：C（3,1）= {（3,0），（-1,2），（ -  1,0），（ -  1，-2）} C（2500,1000）= {（2500 ，0），（772,2376），（772，-2376），（516,1792），（516，-1792），（500,0），（68,504），（68，-504），（ -1356,1088），（ -  1356，-1088），（ -  1500,1000），（ -  1500，-1000）} </p><p>注意：（ -  625,0）不是C（2500,1000）的元素，因为$ \ sin（t）$不是t的相应值的有理数。 </p><p> S（3,1）=（| 3 | + | 0 |）+（| -1 | + | 2 |）+（| -1 | + | 0 |）+（| -1 | + | -2 |） = 10 </p><p> T（3）= 10; T（10）= 524; T（100）= 580442; T（103）= 583108600。 </p><p>求T（106）。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler450()</code>应该返回583333163984220900。
    testString: assert.strictEqual(euler450(), 583333163984220900);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler450() {
  // Good luck!
  return true;
}

euler450();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
