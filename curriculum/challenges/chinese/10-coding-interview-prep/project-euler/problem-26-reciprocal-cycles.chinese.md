---
id: 5900f3861000cf542c50fe99
challengeType: 5
title: 'Problem 26: Reciprocal cycles'
videoUrl: ''
localeTitle: 问题26：互惠周期
---

## Description
<section id="description">单位分数在分子中包含1。给出分母2到10的单位分数的十进制表示： <div style="padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;"><div> <sup><sub>二分之一</sub></sup> = 0.5 </div><div> <sup><sub>三分之一</sub></sup> = 0（3） </div><div> <sup><sub>四分之一</sub></sup> = 0.25 </div><div> <sup>的<sub>1/5</sub></sup> = 0.2 </div><div> <sup><sub>六分之一</sub></sup> = 0.1（6） </div><div> <sup><sub>七分之一</sub></sup> = 0（142857） </div><div> <sup><sub>八分之一</sub></sup> = 0.125 </div><div> <sup><sub>九分之一</sub></sup> = 0（1） </div><div> <sup><sub>一十分之一</sub></sup> = 0.1 </div></div>其中0.1（6）表示0.166666 ...，并具有1位循环周期。可以看出， <sup>1</sup> / <sub>7</sub>具有6位循环周期。找到<var>d</var> &lt; <var>n</var>的值，其中<sup>1</sup> / <sub>d</sub>包含其小数部分中最长的循环周期。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reciprocalCycles(700)</code>应该返回659。
    testString: assert(reciprocalCycles(700) == 659);
  - text: <code>reciprocalCycles(800)</code>应该返回743。
    testString: assert(reciprocalCycles(800) == 743);
  - text: <code>reciprocalCycles(900)</code>应该返回887。
    testString: assert(reciprocalCycles(900) == 887);
  - text: <code>reciprocalCycles(1000)</code>应该返回983。
    testString: assert(reciprocalCycles(1000) == 983);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function reciprocalCycles(n) {
  // Good luck!
  return n;
}

reciprocalCycles(1000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
