---
id: 5900f45b1000cf542c50ff6d
challengeType: 5
videoUrl: ''
title: 问题238：无限的字符串游览
---

## Description
<section id="description">使用“Blum Blum Shub”伪随机数生成器创建一系列数字： <p> s0 = 14025256 sn + 1 = sn2 mod 20300713 </p><p>连接这些数字s0s1s2 ...以创建一个无限长度的字符串w。然后，w = 14025256741014958470038053646 ...... </p><p>对于正整数k，如果不存在w的子串，其中数字之和等于k，则p（k）被定义为零。如果w的至少一个子字符串存在且数字之和等于k，则我们定义p（k）= z，其中z是最早的这种子字符串的起始位置。 </p><p>例如： </p><p>子串1,14,1402 ......具有等于1,5,7，...的数字的总和，从位置1开始，因此p（1）= p（5）= p（7）= ...... = 1。 </p><p>子串4,402,4025，...各自的数字总和等于4,6,11 ......从位置2开始，因此p（4）= p（6）= p（11）= ...... = 2。 </p><p>子串02,0252，......各自的数字总和等于2,9，...从位置3开始，因此p（2）= p（9）= ...... = 3。 </p><p>请注意，从位置3开始的子字符串025具有等于7的数字之和，但是存在较早的子字符串（从位置1开始），其数字之和等于7，因此p（7）= 1，而不是3。 </p><p>我们可以验证，对于0 &lt;k≤103，Σp（k）= 4742。 </p><p>求Σp（k），0 &lt;k≤2·1015。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler238()</code>应该返回9922545104535660。
    testString: assert.strictEqual(euler238(), 9922545104535660);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler238() {
  // Good luck!
  return true;
}

euler238();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
