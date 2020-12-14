---
id: 5900f53d1000cf542c510050
challengeType: 5
videoUrl: ''
title: 问题465：极地多边形
---

## Description
<section id="description">多边形的内核由一组点定义，整个多边形的边界是可见的。我们将极坐标多边形定义为多边形，其原点严格包含在其内核中。 <p>对于此问题，多边形可以具有共线的连续顶点。但是，多边形仍然不能具有自相交，并且不能具有零面积。 </p><p>例如，只有下面的第一个是极多边形（第二个，第三个和第四个的内核不严格包含原点，第五个根本没有内核）： </p><p>请注意，第一个多边形有三个连续的共线顶点。 </p><p>令P（n）为极坐标多边形的数量，使得顶点（x，y）具有绝对值不大于n的整数坐标。 </p><p>请注意，如果多边形具有不同的边集，即使它们包含相同的区域，也应该计为不同的多边形。例如，具有顶点[（0,0），（0,3），（1,1），（3,0）]的多边形与具有顶点[（0,0），（0,3）的多边形不同），（1,1），（3,0），（1,0）]。 </p><p>例如，P（1）= 131，P（2）= 1648531，P（3）= 1099461296175，P（343）mod 1 000 000 007 = 937293740。 </p><p>求P（713）mod 1 000 000 007。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler465()</code>应该返回585965659。
    testString: assert.strictEqual(euler465(), 585965659);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler465() {
  // Good luck!
  return true;
}

euler465();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
