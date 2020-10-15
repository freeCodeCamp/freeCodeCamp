---
id: 5900f4411000cf542c50ff53
challengeType: 5
videoUrl: ''
title: 问题212：长方体的组合体积
---

## Description
<section id="description">由参数{（x0，y0，z0），（dx，dy，dz）}指定的轴对齐长方体由所有点（X，Y，Z）组成，使得x0≤X≤x0+ dx，y0≤ Y≤y0+ dy且z0≤Z≤z0+ dz。长方体的体积是乘积，dx×dy×dz。长方体集合的总体积是它们的并集体积，如果任何长方体重叠，它将小于各个体积的总和。 <p>设C1，...，C50000是50000轴对齐长方体的集合，使得Cn具有参数</p><p> x0 = S6n-5模10000y0 = S6n-4模10000z0 = S6n-3模10000dx = 1 +（S6n-2模399）dy = 1 +（S6n-1模399）dz = 1 +（S6n模399） </p><p>其中S1，...，S300000来自“Lagged Fibonacci Generator”： </p><p>对于1≤k≤55，Sk = [100003  -  200003k + 300007k3]（模1000000）对于56≤k，Sk = [Sk-24 + Sk-55]（模1000000） </p><p>因此，C1具有参数{（7,53,183），（94,369,56）}，C2具有参数{（2383,3563,5079），（42,212,344）}，等等。 </p><p>前100个长方体C1，...，C100的总体积为723581599。 </p><p>所有50000个长方体的总体积是多少，C1，...，C50000？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler212()</code>应该返回328968937309。
    testString: assert.strictEqual(euler212(), 328968937309);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler212() {
  // Good luck!
  return true;
}

euler212();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
