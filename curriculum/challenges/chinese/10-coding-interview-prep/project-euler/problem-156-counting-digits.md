---
id: 5900f4091000cf542c50ff1b
challengeType: 5
videoUrl: ''
title: 问题156：计数数字
---

## Description
<section id="description">从零开始，自然数字在基数10中写下，如下所示： <p> 0 1 2 3 4 5 6 7 8 9 10 11 12 .... </p><p>考虑数字d = 1。在我们写下每个数字n后，我们将更新已发生的数字并将此数字称为f（n，1）。那么f（n，1）的第一个值如下： </p><p> nf（n，1）00 11 21 31 41 51 61 71 81 91 102 114 125 </p><p>请注意，f（n，1）永远不等于3。 </p><p>因此，等式f（n，1）= n的前两个解是n = 0并且n = 1。下一个解决方案是n = 199981。以相同的方式，函数f（n，d）给出在写入数字n之后已经写下的总位数d。 </p><p>实际上，对于每个数字d≠0,0是方程f（n，d）= n的第一个解。设s（d）是f（n，d）= n的所有解的总和。 </p><p>你得到s（1）= 22786974071。找到Σs（d）的1≤d≤9。注意：如果对于某些n，对于多于一个d的值，f（n，d）= n，对于d的每个值，再次计算n的这个值。 F（N，d）= N。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler156</code>应该返回21295121502550。
    testString: assert.strictEqual(euler156(), 21295121502550);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler156() {
  // Good luck!
  return true;
}

euler156();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
