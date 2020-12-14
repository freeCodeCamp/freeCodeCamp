---
id: 5900f4a71000cf542c50ffb9
challengeType: 5
videoUrl: ''
title: 问题314：月球上的老鼠
---

## Description
<section id="description">
月亮已经打开，可以免费获得土地，但是有一个陷阱。您必须在放样的土地周围建造一堵墙，在月球上建造一堵墙很昂贵。每个国家都被分配了500 m x 500 m平方的面积，但它们仅拥有其围墙所在的区域。 251001个帖子已放置在1米间隔的矩形网格中。墙必须是一系列闭合的直线，每条直线都在柱子之间延伸。


当然，较大的国家/地区建造了2000 m的围墙，将整个250 000 m2的区域封闭起来。大芬维克公国（Duchy of Grand Fenwick）的预算较为紧张，并已要求您（他们的皇家程序员）计算出哪种形状会获得最佳的最大封闭面积/墙长比。


您已经在一张纸上进行了一些初步的计算。
对于封闭25万平方米的2000米墙，
封闭区域/墙长比为125。
尽管不允许，但要弄清楚是否更好：如果在正方形区域内放置一个圆圈，使其接触四边，则该区域将等于π* 2502 m2，周长将为π* 500 m，因此封闭区域/墙长比也将为125。


但是，如果从正方形切下边长为75 m，75 m和75√2m的四个三角形，则总面积将变为238750 m2，周长将变为1400 +300√2m。因此，得出的封闭区域/壁长比为130.87，这要好得多。



找到最大的封闭区域/墙长比。
以abc.defghijk的形式将答案四舍五入到小数点后8位。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler314()</code>应该返回132.52756426。
    testString: assert.strictEqual(euler314(), 132.52756426);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler314() {
  // Good luck!
  return true;
}

euler314();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
