---
id: 5900f4be1000cf542c50ffd1
challengeType: 5
videoUrl: ''
title: 问题338：切割矩形网格纸
---

## Description
<section id="description">给出了具有整数尺寸w×h的矩形网格纸。它的网格间距为1.当我们沿着网格线将纸张切割成两个部分并重新排列这些部分而没有重叠时，我们可以制作具有不同尺寸的新矩形。例如，从尺寸为9×4的纸张中，我们可以通过切割和重新排列来制作尺寸为18×2,12×3和6×6的矩形，如下所示： <p>同样，从尺寸为9×8的纸张中，我们可以制作尺寸为18×4和12×6的矩形。 </p><p>对于w和h对，让F（w，h）是可以由尺寸为w×h的薄片制成的不同矩形的数量。例如，F（2,1）= 0，F（2,2）= 1，F（9,4）= 3和F（9,8）= 2.注意，与初始一致的矩形不计算在内在F（w，h）。还要注意，尺寸为w×h且尺寸为h×w的矩形不被认为是不同的。 </p><p>对于整数N，令G（N）为满足0 &lt;h≤w≤N的所有w和h的F（w，h）之和。我们可以验证G（10）= 55，G（103） ）= 971745和G（105）= 9992617687。 </p><p>找到G（1012）。给你的答案模数108。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler338()</code>应该返回15614292。
    testString: assert.strictEqual(euler338(), 15614292);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler338() {
  // Good luck!
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

/section>
