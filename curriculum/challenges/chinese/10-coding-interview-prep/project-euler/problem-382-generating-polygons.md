---
id: 5900f4eb1000cf542c50fffd
challengeType: 5
videoUrl: ''
title: 问题382：生成多边形
---

## Description
<section id="description">多边形是由直线段组成的扁平形状，所述直线段连接以形成闭合链或电路。多边形由至少三个边组成，并且不自相交。 <p>如果：P的两边不是相同的长度，P的每一边的长度在S中，并且S不包含其他值，则称正数的集合S生成多边形P. </p><p>例如：集合{3,4,5}生成边3,4和5（三角形）的多边形。集合{6,9,11,24}生成具有边6,9,11和24（四边形）的多边形。集合{1,2,3}和{2,3,4,9}根本不生成任何多边形。 </p><p>考虑序列s，定义如下：s1 = 1，s2 = 2，s3 = 3 sn = sn-1 + sn-3，n&gt; 3。 </p><p>设Un为集合{s1，s2，...，sn}。例如，U10 = {1,2,3,4,6,9,13,19,28,41}。设f（n）是产生至少一个多边形的Un子集的数量。例如，f（5）= 7，f（10）= 501，f（25）= 18635853。 </p><p>找到f（1018）的最后9位数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler382()</code>应该返回697003956。
    testString: assert.strictEqual(euler382(), 697003956);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler382() {
  // Good luck!
  return true;
}

euler382();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
