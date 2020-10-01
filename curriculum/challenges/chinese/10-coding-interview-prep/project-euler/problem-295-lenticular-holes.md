---
id: 5900f4931000cf542c50ffa6
challengeType: 5
videoUrl: ''
title: 问题295：透镜孔
---

## Description
<section id="description">
如果满足以下条件，我们称两个圆包围的凸面为透镜孔：
两个圆的中心都在晶格点上。
两个圆在两个不同的晶格点处相交。
被两个圆包围的凸区域的内部不包含任何晶格点。

考虑一下圈子：
C0：x2 + y2 = 25
C1：（x + 4）2+（y-4）2 = 1
C2：（x-12）2+（y-4）2 = 65


下图绘制了圆圈C0，C1和C2。


C0和C1以及C0和C2形成一个透镜孔。

如果存在两个半径为r1和r2且形成一个透镜孔的圆，我们将一个有序正实数对（r1，r2）称为透镜对。
我们可以验证（1，5）和（5，√65）是以上示例的双凸透镜对。

令L（N）为0 <r1≤r2≤N的不同双凸透镜对（r1，r2）的数量。
我们可以验证L（10）= 30和L（100）= 3442。

求L（100 000）。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler295()</code>应该返回4884650818。
    testString: assert.strictEqual(euler295(), 4884650818);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler295() {
  // Good luck!
  return true;
}

euler295();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
