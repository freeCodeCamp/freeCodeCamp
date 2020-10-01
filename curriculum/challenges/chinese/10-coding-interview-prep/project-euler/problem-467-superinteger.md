---
id: 5900f5411000cf542c510052
challengeType: 5
videoUrl: ''
title: 问题467：超级整数
---

## Description
<section id="description">如果n的数字形成s的数字的子序列，则整数s被称为另一整数n的超级整数。例如，2718281828是18828的超级整数，而314159不是151的超级整数。 <p>令p（n）为第n个素数，并且令c（n）为第n个复合数。例如，p（1）= 2，p（10）= 29，c（1）= 4且c（10）= 18. {p（i）：i≥1} = {2,3,5,7 ，11,13,17,19,23,29，...} {c（i）：i≥1} = {4,6,8,9,10,12,14,15,16,18，.... ..} </p><p>设PD为{p（i）}的数字根的序列（CD对{c（i）}的定义类似）：PD = {2,3,5,7,2,4,8,1,5， 2，...} CD = {4,6,8,9,1,3,5,6,7,9 ......} </p><p>令Pn为通过连接PD的前n个元素形成的整数（Cn类似地定义为CD）。 P10 = 2357248152 C10 = 4689135679 </p><p>设f（n）是最小的正整数，它是Pn和Cn的共同超整数。例如，f（10）= 2357246891352679，并且f（100）mod 1 000 000 007 = 771661825。 </p><p>求f（10 000）mod 1 000 000 007。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler467()</code>应该返回775181359。
    testString: assert.strictEqual(euler467(), 775181359);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler467() {
  // Good luck!
  return true;
}

euler467();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
