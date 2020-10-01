---
id: 5900f4731000cf542c50ff85
challengeType: 5
videoUrl: ''
title: 问题262：山脉
---

## Description
<section id="description">以下等式表示山区的连续地形，给出任意点（x，y）处的高程h： <p>蚊子打算从A（200,200）飞到B（1400,1400），而不会离开0≤x，y≤1600的区域。 </p><p>由于中间的山脉，它首先直线上升到A&#39;点，具有高度f。然后，在保持在相同高度f的同时，它在任何障碍物周围飞行，直到它到达B正上方的B&#39;点。 </p><p>首先，确定fmin，它是允许从A到B的这种行程的最小恒定高度，同时保持在指定区域。然后，找到A&#39;和B&#39;之间最短路径的长度，同时以恒定高度fmin飞行。 </p><p>将该长度作为答案，四舍五入到小数点后三位。 </p><p>注意：为方便起见，下面以适合大多数编程语言的形式重复上面显示的高程函数：h =（5000-0.005 <em>（x</em> x + y <em>y + x</em> y）+12.5 <em>（x + y））</em> exp（ - abs（0.000001 <em>（x</em> x + y <em>y）-0.0015</em> （x + y）+0.7）） </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler262()</code>应返回2531.205。
    testString: assert.strictEqual(euler262(), 2531.205);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler262() {
  // Good luck!
  return true;
}

euler262();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
