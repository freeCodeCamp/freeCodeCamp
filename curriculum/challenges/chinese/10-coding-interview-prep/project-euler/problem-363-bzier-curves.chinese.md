---
id: 5900f4d91000cf542c50ffeb
challengeType: 5
title: 'Problem 363: Bézier Curves'
videoUrl: ''
localeTitle: 问题363：Bézier曲线
---

## Description
<section id="description">立方贝塞尔曲线由四个点定义：P0，P1，P2和P3。 <p>曲线构造如下：在段P0P1，P1P2和P2P3上绘制点Q0，Q1和Q2，使得P0Q0 / P0P1 = P1Q1 / P1P2 = P2Q2 / P2P3 = t（[0,1]中的t）。在段Q0Q1和Q1Q2上绘制点R0和R1，使得对于相同的t值，Q0R0 / Q0Q1 = Q1R1 / Q1Q2 = t。在段R0R1上绘制点B，使得对于相同的t值，R0B / R0R1 = t。由点P0，P1，P2，P3定义的贝塞尔曲线是B的轨迹，因为Q0占据了段P0P1上的所有可能位置。 （请注意，对于所有点，t的值都相同。） </p><p>在此（外部）Web地址，您将找到一个小程序，它允许您拖动点P0，P1，P2和P3，以查看这些点定义的Bézier曲线（绿色曲线）是什么样的。您也可以沿着段P0P1拖动点Q0。 </p><p>从构造中可以清楚地看出，Bézier曲线将与P0中的P0P1和P3中的P2P3相切。 </p><p>使用P0 =（1,0），P1 =（1，v），P2 =（v，1）和P3 =（0,1）的三次Bézier曲线来近似四分之一圆。选择值v&gt; 0，使得由线OP0，OP3和曲线包围的区域等于π/ 4（四分之一圆的面积）。 </p><p>曲线长度与四分之一圆的长度有多少百分比？也就是说，如果L是曲线的长度，则计算100×L  - π/2π/ 2给你的答案四舍五入到小数点后面的10位数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler363()</code>应返回0.0000372091。
    testString: assert.strictEqual(euler363(), 0.0000372091);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler363() {
  // Good luck!
  return true;
}

euler363();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
