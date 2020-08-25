---
id: 5900f51f1000cf542c510031
challengeType: 5
title: 'Problem 434: Rigid graphs'
videoUrl: ''
localeTitle: 问题434：刚性图
---

## Description
<section id="description">
回想一下，图是顶点和连接顶点的边的集合，并且通过边连接的两个顶点称为相邻。
通过将每个顶点与欧氏空间中的一个点相关联，可以将图嵌入到欧氏空间中。
柔性图是图的嵌入，其中可以连续移动一个或多个顶点，以便至少两个不相邻顶点之间的距离发生变化，而每对相邻顶点之间的距离保持恒定。
刚性图是不灵活的图的嵌入。
非正式地，如果通过用完全旋转的铰链替换顶点，并用不弯曲且无弹性的杆代替边，则图形是刚性的，则图形的任何部分都不能独立于图形的其余部分移动。

嵌入在欧几里得平面中的网格图不是刚性的，如以下动画所示：
但是，可以通过向单元格添加对角线边缘来使它们变硬。例如，对于2x3网格图，有19种方法可以使图变刚性：
请注意，出于解决此问题的目的，我们不考虑更改对角线边缘的方向或将两个对角线边缘添加到单元格，这是使网格图变硬的另一种方法。

令R（m，n）为使m×n网格图变硬的方法的数量。
例如。 R（2,3）= 19和R（5,5）= 23679901

对于1≤i，j≤N，将S（N）定义为∑R（i，j）。
例如。 S（5）= 25021721。
求S（100），以1000000033为模给出答案
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler434()</code>应该返回863253606。
    testString: assert.strictEqual(euler434(), 863253606);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler434() {
  // Good luck!
  return true;
}

euler434();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
