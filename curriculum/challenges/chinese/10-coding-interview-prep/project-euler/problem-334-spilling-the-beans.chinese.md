---
id: 5900f4ba1000cf542c50ffcd
challengeType: 5
title: 'Problem 334: Spilling the beans'
videoUrl: ''
localeTitle: 问题334：溢出豆子
---

## Description
<section id="description">在柏拉图的天堂里，存在着无数个直线的碗。每个碗都包含一些或不包含有限数量的豆。一个孩子玩游戏，只允许一种移动：从任何碗中取出两个豆子，并在两个相邻的碗中放入一个豆子。当每个碗包含一个或没有豆时，游戏结束。 <p>例如，考虑两个相邻的碗分别包含2个和3个豆，所有其他碗都是空的。以下八个动作将完成游戏： </p><p>您将获得以下序列：t0 = 123456。 </p><pre> <code> ti = ti-12 , if ti-1 is even ti-12 926252, if ti-1 is odd where ⌊x⌋ is the floor function and is the bitwise XOR operator. bi = ( ti mod 211) + 1.</code> </pre><p>最后一个序列的前两个项是b1 = 289和b2 = 145.如果我们从两个相邻碗中的b1和b2豆开始，则需要3419100次移动来完成游戏。 </p><p>现在考虑1500个相邻的碗，分别包含b1，b2，...，b1500豆，所有其他碗都是空的。查看游戏结束前需要多少动作。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler334()</code>应该返回150320021261690850。
    testString: assert.strictEqual(euler334(), 150320021261690850);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler334() {
  // Good luck!
  return true;
}

euler334();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
