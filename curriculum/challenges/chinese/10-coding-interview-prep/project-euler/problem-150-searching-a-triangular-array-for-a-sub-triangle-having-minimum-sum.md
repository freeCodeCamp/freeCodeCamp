---
id: 5900f4031000cf542c50ff15
challengeType: 5
videoUrl: ''
title: 问题150：在三角形阵列中搜索具有最小和的子三角形
---

## Description
<section id="description">在正整数和负整数的三角形阵列中，我们希望找到一个子三角形，使得它包含的数字之和尽可能小。在下面的示例中，可以很容易地验证标记的三角形满足具有-42的总和的条件。 <p>我们希望制作一个包含一千行的三角形数组，因此我们使用一种随机数生成器（称为线性同余生成器）生成5009个伪随机数sk，范围为±219，如下所示：t：= 0 </p><p>对于k = 1到k = 500500： </p><p> t：=（615949 * t + 797807）modulo 220 sk：= t-219因此：s1 = 273519，s2 = -153582，s3 = 450905等我们的三角形数组然后使用伪随机数形成： </p><p> s1 s2 s3 s4 s5 s6 </p><p> s7 s8 s9 s10 ...... </p><p>子三角形可以从数组的任何元素开始，并在我们喜欢的范围内向下延伸（从下一行直接接收它下面的两个元素，之后直接从该行下面的三个元素，依此类推）。 </p><p> “三角形的总和”定义为它包含的所有元素的总和。 </p><p>找到可能的最小子三角形和。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler150()</code>应返回-271248680。
    testString: assert.strictEqual(euler150(), -271248680);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler150() {
  // Good luck!
  return true;
}

euler150();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
