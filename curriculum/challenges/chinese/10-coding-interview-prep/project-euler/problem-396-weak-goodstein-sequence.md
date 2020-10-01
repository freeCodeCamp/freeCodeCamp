---
id: 5900f4f81000cf542c51000b
challengeType: 5
videoUrl: ''
title: 问题396：弱Goodstein序列
---

## Description
<section id="description">对于任何正整数n，第n个弱Goodstein序列{g1，g2，g3，...}定义为：g1 = n，对于k&gt; 1，gk是通过在基k中写gk-1获得的，将其解释为a基数k + 1，减去1。 <p>当gk变为0时，序列终止。 </p><p>例如，第6个弱Goodstein序列是{6,11,17,25，...}：g1 = 6. g2 = 11，因为6 = 1102,1103 = 12，12  -  1 = 11. g3 = 17 11 = 1023,1024 = 18,18-1 = 17.g4 = 25，因为17 = 1014,1015 = 26,26-1 = 25。 </p><p>等等。 </p><p>可以证明，每个弱的Goodstein序列都会终止。 </p><p>设G（n）为第n个弱Goodstein序列中的非零元素的数量。可以证实G（2）= 3，G（4）= 21和G（6）= 381.还可以证实ΣG（n）= 2517，1≤n&lt;8。 </p><p>找到ΣG（n）的最后9位数，1≤n&lt;16。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler396()</code>应该返回173214653。
    testString: assert.strictEqual(euler396(), 173214653);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler396() {
  // Good luck!
  return true;
}

euler396();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
