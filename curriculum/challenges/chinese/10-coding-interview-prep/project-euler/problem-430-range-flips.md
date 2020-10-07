---
id: 5900f51a1000cf542c51002d
challengeType: 5
videoUrl: ''
title: 问题430：范围翻转
---

## Description
<section id="description">
N个磁盘连续放置，从左到右从1到N索引。
每个磁盘都有黑色和白色的一面。 最初，所有磁盘都显示白色的一面。

在每一回合，随机地均匀地选择介于1和N（含）之间的两个整数A和B（不一定是不同的）。
索引从A到B（包括B）的所有磁盘均被翻转。

以下示例显示了N = 8的情况。在第一圈A = 5且B = 2，在第二圈A = 4且B = 6。



令E（N，M）为M圈后显示白色面的预期磁盘数量。
我们可以验证E（3，1）= 10/9，E（3，2）= 5/3，E（10，4）≈5,157和E（100，10）≈51,893。

找出E（1010，4000）。
将答案四舍五入到小数点后两位。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler430()</code>应该返回5000624921.38。
    testString: assert.strictEqual(euler430(), 5000624921.38);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler430() {
  // Good luck!
  return true;
}

euler430();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
