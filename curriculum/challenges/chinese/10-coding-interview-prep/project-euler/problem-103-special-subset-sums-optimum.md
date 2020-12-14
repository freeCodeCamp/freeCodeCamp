---
id: 5900f3d61000cf542c50fee7
challengeType: 5
videoUrl: ''
title: 问题103：特殊子集和：最佳
---

## Description
<section id="description">设S（A）表示大小为n的集合A中的元素之和。如果对于任何两个非空的不相交子集B和C，我们将其称为特殊和集合，以下属性为真：S（B）≠S（C）;也就是说，子集的总和不能相等。如果B包含的元素多于C，则S（B）&gt; S（C）。如果对于给定的n，S（A）被最小化，我们将其称为最优的特殊和集。下面给出前五个最佳特殊和集。 n = 1：{1} n = 2：{1,2} n = 3：{2,3,4} n = 4：{3,5,6,7} n = 5：{6,9,11 ，12,13}似乎对于给定的最优集合，A = {a1，a2，...，an}，下一个最优集合的形式为B = {b，a1 + b，a2 + b，... ..，an + b}，其中b是前一行的“中间”元素。通过应用这个“规则”，我们期望n = 6的最优集合为A = {11,17,20,22,23,24}，其中S（A）= 117.但是，这不是最佳集合因为我们仅应用算法来提供接近最优的集合。 n = 6的最佳集合是A = {11,18,19,20,22,25}，其中S（A）= 115并且对应的集合字符串：111819202225。假设A是n =的最优特殊和集合7，找到它的设置字符串。注意：此问题与问题105和问题106有关。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler103()</code>应该返回20313839404245。
    testString: assert.strictEqual(euler103(), 20313839404245);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler103() {
  // Good luck!
  return true;
}

euler103();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
