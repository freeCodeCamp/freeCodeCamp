---
id: 5900f4021000cf542c50ff13
challengeType: 5
title: 'Problem 149: Searching for a maximum-sum subsequence'
videoUrl: ''
localeTitle: 问题149：搜索最大和子序列
---

## Description
<section id="description">
查看下表，可以很容易地验证任意方向（水平，垂直，对角或反对角）上相邻数字的最大和为16（= 8 + 7 + 1）。


−25329−6513273−18−4 8

现在，让我们重复搜索，但范围更大：

首先，使用称为“滞后斐波那契生成器”的特定形式生成四百万个伪随机数：

对于1≤k≤55，sk = [100003 − 200003k + 300007k3]（模1000000）− 500000。
对于56≤k≤4000000，sk = [sk-24 + sk-55 + 1000000]（模1000000）− 500000。

因此，s10 = -393027，s100 = 86613。

然后，将s的项排列在2000×2000表中，使用前2000个数字（顺序）填充第一行，使用后2000个数字填充第二行，依此类推。

最后，在任何方向（水平，垂直，对角线或反对角线）上找到（任意数量）相邻项的最大和。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler149()</code>应该返回52852124。
    testString: assert.strictEqual(euler149(), 52852124);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler149() {
  // Good luck!
  return true;
}

euler149();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
