---
id: 5900f3c61000cf542c50fed9
challengeType: 5
title: 'Problem 90: Cube digit pairs'
videoUrl: ''
localeTitle: 问题90：立方体数字对
---

## Description
<section id="description">立方体上的六个面中的每一个都有一个写在其上的不同数字（0到9）;第二个立方体也是如此。通过将两个立方体并排放置在不同的位置，我们可以形成各种2位数字。 <p>例如，可以形成平方数64： </p><p>实际上，通过仔细选择两个立方体上的数字，可以显示低于100的所有正方形数字：01,04,09,16,25,36,49,64和81。 </p><p>例如，可以实现的一种方法是将{0,5,6,7,8,9}放在一个立方体上，将{1,2,3,4,8,9}放在另一个立方体上。 </p><p>但是，对于这个问题，我们应该允许将6或9颠倒，以便安排像{0,5,6,7,8,9}和{1,2,3,4,6,7}允许显示所有九个方形数字;否则就不可能获得09。 </p><p>在确定不同的排列时，我们对每个立方体上的数字感兴趣，而不是订单。 </p><p> {1,2,3,4,5,6}相当于{3,6,4,1,2,5} {1,2,3,4,5,6}不同于{1,2， 3,4,5,9} </p><p>但是因为我们允许反转6和9，所以最后一个例子中的两个不同的集合都代表扩展集{1,2,3,4,5,6,9}以形成2位数字。 </p><p>两个立方体有多少不同的排列可以显示所有的方形数字？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler90()</code>应该返回1217。
    testString: assert.strictEqual(euler90(), 1217);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler90() {
  // Good luck!
  return true;
}

euler90();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
