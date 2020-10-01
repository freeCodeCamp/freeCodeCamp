---
id: 5900f4361000cf542c50ff48
challengeType: 5
videoUrl: ''
title: 问题201：具有唯一总和的子集
---

## Description
<section id="description">对于任何数字集A，让sum（A）为A的元素之和。考虑集合B = {1,3,6,8,10,11}。 B的20个子集包含三个元素，它们的总和是： <p> sum（{1,3,6}）= 10，sum（{1,3,8}）= 12，sum（{1,3,10}）= 14，sum（{1,3,11}）= 15，sum（{1,6,8}）= 15，sum（{1,6,10}）= 17，sum（{1,6,11}）= 18，sum（{1,8,10} ）= 19，sum（{1,8,11}）= 20，sum（{1,10,11}）= 22，sum（{3,6,8}）= 17，sum（{3,6， 10}）= 19，sum（{3,6,11}）= 20，sum（{3,8,10}）= 21，sum（{3,8,11}）= 22，sum（{3， 10,11}）= 24，sum（{6,8,10}）= 24，sum（{6,8,11}）= 25，sum（{6,10,11}）= 27，sum（{ 8,10,11}）= 29。 </p><p>其中一些总和不止一次出现，有些则是独一无二的。对于集合A，设U（A，k）是A的k元素子集的唯一和的集合，在我们的例子中我们发现U（B，3）= {10,12,14,18,21,25 ，27,29}和和（U（B，3））= 156。 </p><p>现在考虑100个元素集S = {12,22，...，1002}。 S具有100891344545564193334812497256 50个元素子集。 </p><p>确定所有整数的和，它们是S的50个元素子集中的一个的总和，即求和（U（S，50））。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler201()</code>应返回115039000。
    testString: assert.strictEqual(euler201(), 115039000);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler201() {
  // Good luck!
  return true;
}

euler201();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
