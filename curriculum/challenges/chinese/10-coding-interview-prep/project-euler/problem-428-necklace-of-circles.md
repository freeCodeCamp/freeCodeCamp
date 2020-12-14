---
id: 5900f5191000cf542c51002b
challengeType: 5
videoUrl: ''
title: 问题428：圆圈项链
---

## Description
<section id="description">
令<var> a </var>，<var> b </var>和<var> c </var>为正数。
令W，X，Y，Z为四个共线点，其中| WX | = <var>到</var>，| XY | = <var> b </var>，| YZ | = <var> c </var>和| WZ | = <var> a </var> + <var> b </var> + <var> c </var>。
令</sub>中的C <sub>为直径XY的圆。
令C <sub> out </sub>为直径WZ的圆。

如果可以放置<var> k，则三元组（<var> a </var>，<var> b </var>，<var> c </var>）被称为<em>项链三元组</ em>。 </var>≥3个不同的圆C <sub> 1 </sub>，C <sub> 2 </sub>，...，C <sub> <var> k </var> </sub> ：
<ul> <li> C <sub> <var> i </var> </sub>与任何C <sub> <var> j </var> </sub>都没有公共内点，且1≤<var > i </var>，<var> j </var>≤<var> k </var>和<var> i </var>≠<var> j </var>，</ li> <li> C <sub> <var> i </var> </sub>与</sub>中的C <sub>和 C <sub> out </sub>表示1≤<var> i </var>≤<var> k </var>，</ li> <li> C <sub> <var> i </var> < / sub>与C <sub> <var> i </var> +1 </sub>相切1≤<var> i </var> &lt; <var> k </var>和</ li> <li> C <sub> <var> k </var> </sub>与C <sub> 1 </sub>相切。</ li> </ ul>
例如，（5,5,5）和（4,3,21）是项链三胞胎，而可以证明（2,2,5）不是。
<img src="https://projecteuler.net/project/images/p428_necklace.png" alt="a visual representation of a necklace triplet">

令T（<var> n </var>）为项链三联体的数量（<var> a </var>，<var> b </var>，<var> c </var>），使得<var > a </var>，<var> b </var>和<var> c </var>是正整数，并且<var> b </var>≤<var> n </var>。
例如，T（1）= 9，T（20）= 732和T（3000）= 438106。
求T（1000000000000）。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>necklace(1000000000)</code>应该返回747215561862。
    testString: assert.strictEqual(necklace(1000000000), 747215561862);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function necklace(n) {
  // Good luck!
  return true;
}

necklace(1000000000)

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
