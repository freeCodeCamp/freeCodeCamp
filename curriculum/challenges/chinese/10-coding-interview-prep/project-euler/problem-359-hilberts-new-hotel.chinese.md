---
id: 5900f4d31000cf542c50ffe6
challengeType: 5
title: 'Problem 359: Hilbert"s New Hotel'
videoUrl: ''
localeTitle: 问题359：希尔伯特的新酒店
---

## Description
<section id="description">无数人（编号1,2,3等）排成一列，在希尔伯特最新的无限酒店找到一个房间。酒店包含无限数量的楼层（编号为1,2,3等），每层楼包含无限数量的房间（编号为1,2,3等）。 <p>最初酒店是空的。希尔伯特宣布了关于如何为第n人分配房间的规则：人员在最低编号的楼层中获得满足以下任一项的第一个空置房间：楼层是空的，楼层不是空的，以及最新的人是否占用房间在那个楼层是人m，那么m + n是一个完美的正方形</p><p>由于1楼空了，1号人员在1楼获得1号房间。由于1 + 2 = 3不是完美的正方形，因此人2在1楼没有得到2号房间。由于2楼是空的，因此人2在2楼获得1号房间。人3在1楼获得2号房，因为1 + 3 = 4是一个完美的广场。 </p><p>最终，该线路中的每个人都在酒店获得一个房间。 </p><p>如果人n占据楼层f中的房间r，则将P（f，r）定义为n，如果没有人占用房间，则定义为0。以下是一些例子：P（1,1）= 1 P（1,2）= 3 P（2,1）= 2 P（10,20）= 440 P（25,75）= 4863 P（99， 100）= 19454 </p><p>找到所有正f和r的所有P（f，r）之和，使得f×r = 71328803586048，并将最后8位数作为答案。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler359()</code>应该返回40632119。
    testString: assert.strictEqual(euler359(), 40632119);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler359() {
  // Good luck!
  return true;
}

euler359();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
