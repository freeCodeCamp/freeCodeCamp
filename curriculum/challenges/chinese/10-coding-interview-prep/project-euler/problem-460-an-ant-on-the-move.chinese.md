---
id: 5900f5381000cf542c51004b
challengeType: 5
title: 'Problem 460: An ant on the move'
videoUrl: ''
localeTitle: 问题460：移动中的蚂蚁
---

## Description
<section id="description">在欧几里得平面上，蚂蚁从点A（0,1）行进到点B（d，1）得到整数d。 <p>在每个步骤中，点（x0，y0）处的蚂蚁选择满足x1≥0且y1≥1的格点（x1，y1）之一，并以恒定速度v直接到（x1，y1）。 v取决于y0和y1如下：如果y0 = y1，则v的值等于y0。如果y0≠y1，则v的值等于（y1-y0）/（ln（y1）-ln（y0））。 </p><p>左图是d = 4的可能路径之一。首先，蚂蚁以速度（3  -  1）/（ln（3） -  ln（1）从A（0,1）到达P1（1,3） ）≈1.8205。然后所需的时间是sqrt（5）/1.8205≈1.2283。从P1（1,3）到P2（3,3），蚂蚁以速度3行进，因此所需时间为2 /3≈0.6667。从P2（3,3）到B（4,1），蚂蚁以速度（1  -  3）/（ln（1） -  ln（3））≈1.8205，所以需要的时间是sqrt（5）/ 1.8205 ...“抓鸟”英语词典1.2283。因此总的所需时间是1.2283 + 0.6667 + 1.2283 = 3.1233。 </p><p>正确的形象是另一条道路。总的所需时间计算为0.98026 + 1 + 0.98026 = 2.96052。可以证明这是d = 4的最快路径。 </p><p>如果蚂蚁选择最快的路径，则让F（d）成为所需的总时间。例如，F（4）≈2.960516287。我们可以验证F（10）≈4.6668787834和F（100）≈9.217221972。 </p><p>找到F（10000）。将您的答案四舍五入到小数点后九位。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler460()</code>应该返回18.420738199。
    testString: assert.strictEqual(euler460(), 18.420738199);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler460() {
  // Good luck!
  return true;
}

euler460();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
