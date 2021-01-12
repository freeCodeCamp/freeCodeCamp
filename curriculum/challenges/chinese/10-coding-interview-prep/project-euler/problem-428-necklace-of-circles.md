---
id: 5900f5191000cf542c51002b
title: 问题428：圆圈项链
challengeType: 5
videoUrl: ''
dashedName: problem-428-necklace-of-circles
---

# --description--

令`a`，`b`和`c`为正数。

令W，X，Y，Z为四个共线点，其中| WX | = `到`，| XY | = `b`，| YZ | = `c`和| WZ | = `a` + `b` + `c`。

令中的C <sub>为直径XY的圆。 令C <sub>out</sub>为直径WZ的圆。</sub>

如果可以放置`k，则三元组（a，b，c）被称为项链三元组</ em>。`*≥3个不同的圆C <sub>1</sub>，C <sub>2</sub>，...，C <sub><var>k</var></sub> ：*

<ul> <li> C <sub> <var> i </var> </sub>与任何C <sub> <var> j </var> </sub>都没有公共内点，且1≤<var > i </var>，<var> j </var>≤<var> k </var>和<var> i </var>≠<var> j </var>，</ li> <li> C <sub> <var> i </var> </sub>与</sub>中的C <sub>和 C <sub> out </sub>表示1≤<var> i </var>≤<var> k </var>，</ li> <li> C <sub> <var> i </var> < / sub>与C <sub> <var> i </var> +1 </sub>相切1≤<var> i </var> &lt; <var> k </var>和</ li> <li> C <sub> <var> k </var> </sub>与C <sub> 1 </sub>相切。</ li> </ ul>
例如，（5,5,5）和（4,3,21）是项链三胞胎，而可以证明（2,2,5）不是。
<img src="https://projecteuler.net/project/images/p428_necklace.png" alt="a visual representation of a necklace triplet">

令T（`n`）为项链三联体的数量（`a`，`b`，`c`），使得`a`，`b`和`c`是正整数，并且`b`≤`n`。 例如，T（1）= 9，T（20）= 732和T（3000）= 438106。 求T（1000000000000）。

# --hints--

`necklace(1000000000)`应该返回747215561862。

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
