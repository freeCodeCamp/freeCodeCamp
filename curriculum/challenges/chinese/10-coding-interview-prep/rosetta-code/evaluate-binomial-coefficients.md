---
title: Evaluate binomial coefficients
id: 598de241872ef8353c58a7a2
challengeType: 5
videoUrl: ''
localeTitle: 评估二项式系数
---

## Description
<section id="description"><p>写一个函数来计算给定n和k值的二项式系数。 </p><p>推荐这个公式： </p> $ \ binom {n} {k} = \ frac {n！} {（nk）！k！} = \ frac {n（n-1）（n-2）\ ldots（n-k + 1）} { k（k-1）（k-2）\ ldots 1} $ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>binom</code>是一个功能。
    testString: assert(typeof binom === 'function');
  - text: '<code>binom(5,3)</code>应该返回10。'
    testString: assert.equal(binom(5, 3), 10);
  - text: '<code>binom(7,2)</code>应该返回21。'
    testString: assert.equal(binom(7, 2), 21);
  - text: '<code>binom(10,4)</code>应该返回210。'
    testString: assert.equal(binom(10, 4), 210);
  - text: '<code>binom(6,1)</code>应该返回6。'
    testString: assert.equal(binom(6, 1), 6);
  - text: '<code>binom(12,8)</code>应该返回495。'
    testString: assert.equal(binom(12, 8), 495);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function binom (n, k) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
