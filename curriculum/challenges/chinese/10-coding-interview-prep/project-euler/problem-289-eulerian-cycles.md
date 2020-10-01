---
id: 5900f48d1000cf542c50ffa0
challengeType: 5
videoUrl: ''
title: 问题289：欧拉循环
---

## Description
<section id="description">
令C（x，y）为穿过点（x，y），（x，y + 1），（x + 1，y）和（x + 1，y + 1）的圆。

对于正整数m和n，令E（m，n）为由m·n个圆组成的配置：
{C（x，y）：0≤x <m，0≤y <n，x和y是整数}

E（m，n）上的欧拉循环是一条闭合路径，它恰好通过每个圆弧一次。
E（m，n）上可能有许多这样的路径，但是我们只对那些不会自交叉的路径感兴趣：
非相交路径仅在格点处触碰自身，但从未相交。

下图显示了E（3,3）和一个欧拉非交叉路径的示例。

令L（m，n）为E（m，n）上的欧拉非交叉路径数。
例如，L（1,2）= 2，L（2,2）= 37，L（3,3）= 104290。

找出L（6,10）mod 1010。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler289()</code>应该返回6567944538。
    testString: assert.strictEqual(euler289(), 6567944538);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler289() {
  // Good luck!
  return true;
}

euler289();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
