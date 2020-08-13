---
id: 5900f51d1000cf542c51002f
challengeType: 5
title: 'Problem 433: Steps in Euclid"s algorithm'
videoUrl: ''
localeTitle: 问题433：欧几里得算法的步骤
---

## Description
<section id="description">
设E（x0，y0）为用Euclid算法确定x0和y0的最大公约数所需要的步数。 更正式地说：x1 = y0，y1 = x0 mod y0xn = yn-1，yn = xn-1 mod yn-1
E（x0，y0）是最小的n，因此yn = 0。


我们有E（1,1）= 1，E（10,6）= 3和E（6,10）= 4。


将S（N）定义为1≤x，y≤N的E（x，y）之和。
我们有S（1）= 1，S（10）= 221和S（100）= 39826。


求S（5·106）。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler433()</code>应该返回326624372659664。
    testString: assert.strictEqual(euler433(), 326624372659664);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler433() {
  // Good luck!
  return true;
}

euler433();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
