---
id: 5900f4111000cf542c50ff24
challengeType: 5
title: 'Problem 165: Intersections'
videoUrl: ''
localeTitle: 问题165：交叉口
---

## Description
<section id="description">段由其两个端点唯一定义。通过考虑平面几何中的两个线段，存在三种可能性：段具有零点，一个点或无限多个共同点。此外，当两个段恰好具有一个共同点时，可能是该公共点是任一段或两者的端点的情况。如果两个段的公共点不是任一段的端点，则它是两个段的内点。如果T是L1和L2的唯一公共点，则我们将两个段L1和L2的公共点T称为L1和L2的真实交点，并且T是两个段的内点。 <p>考虑三个段L1，L2和L3：L1：（27,44）到（12,32）L2：（46,53）到（17,62）L3：（46,70）到（22,40）可以证实线段L2和L3具有真实的交叉点。我们注意到，作为L3的终点之一：（22,40）位于L1上，这不被认为是真正的交点。 L1和L2没有共同点。因此，在三个线段中，我们找到一个真正的交叉点。现在让我们对5000个线段进行相同的操作。为此，我们使用所谓的“Blum Blum Shub”伪随机数生成器生成20000个数字。 s0 = 290797 sn + 1 = sn×sn（modulo 50515093）tn = sn（modulo 500）为了创建每个线段，我们使用四个连续的数字tn。也就是说，第一个线段由下式给出：（t1，t2）到（t3，t4）根据上述发生器计算的前四个数字应该是：27,144,12和232.因此第一个线段是（ 27,144）至（12,232）。在5000个线段中发现了多少个不同的真实交叉点？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler165()</code>应该返回2868868。
    testString: assert.strictEqual(euler165(), 2868868);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler165() {
  // Good luck!
  return true;
}

euler165();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
