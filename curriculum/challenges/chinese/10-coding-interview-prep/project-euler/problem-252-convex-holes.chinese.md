---
id: 5900f4691000cf542c50ff7b
challengeType: 5
title: 'Problem 252: Convex Holes'
videoUrl: ''
localeTitle: 问题252：凸孔
---

## Description
<section id="description">给定平面上的一组点，我们将凸孔定义为凸多边形，其具有作为顶点的任何给定点并且不包含其内部中的任何给定点（除了顶点之外，其他给定点可能位于在多边形的周长上）。 <p>作为示例，下面的图像示出了一组二十个点和一些这样的凸孔。显示为红色七边形的凸孔具有等于1049694.5平方单位的面积，这是给定点集上的凸孔的最高可能区域。 </p><p>对于我们的例子，我们使用前20个点（T2k-1，T2k），对于k = 1,2，...，20，使用伪随机数生成器生成： </p><p> S0 = 290797 Sn + 1 = Sn2 mod 50515093 Tn =（Sn mod 2000）-1000 </p><p>即（527,144），（ -  488,732），（ -  454，-947），...... </p><p>包含伪随机序列中前500个点的集合上凸孔的最大面积是多少？指定您的答案，包括小数点后的一位数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler252()</code>应该返回104924。
    testString: assert.strictEqual(euler252(), 104924);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler252() {
  // Good luck!
  return true;
}

euler252();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
