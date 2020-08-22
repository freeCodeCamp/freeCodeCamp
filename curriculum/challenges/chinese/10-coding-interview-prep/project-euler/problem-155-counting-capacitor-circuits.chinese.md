---
id: 5900f4081000cf542c50ff1a
challengeType: 5
title: 'Problem 155: Counting Capacitor Circuits'
videoUrl: ''
localeTitle: 问题155：计算电容器电路
---

## Description
<section id="description">电路仅使用相同值C的相同电容器。 <p>电容器可以串联或并联连接以形成子单元，子单元然后可以与其他电容器或其他子单元串联或并联连接以形成更大的子单元，以此类推直到最终电路。使用这个简单的程序和多达n个相同的电容器，我们可以制造具有一系列不同总电容的电路。例如，使用最多n = 3个电容器，每个电容器为60 F，我们可以获得以下7个不同的总电容值： </p><p>如果我们用D（n）表示当使用多达n个等值电容器时我们可以获得的不同总电容值的数量和上述简单程序，我们得到：D（1）= 1，D（2）= 3 ，D（3）= 7 ...求D（18）。提醒：当并联电容器C1，C2等时，总电容为CT = C1 + C2 + ......， </p><p>而当它们串联连接时，总电容由下式给出： </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler155()</code>应返回3857447。
    testString: assert.strictEqual(euler155(), 3857447);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler155() {
  // Good luck!
  return true;
}

euler155();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
