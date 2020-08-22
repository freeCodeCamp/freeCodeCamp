---
id: 5900f47f1000cf542c50ff91
challengeType: 5
title: 'Problem 274: Divisibility Multipliers'
videoUrl: ''
localeTitle: 问题274：可分性乘数
---

## Description
<section id="description">对于每个整数p&gt; 1互质到10，有一个正的可分性乘数m &lt;p，它对任何正整数n的后续函数保持p的可除性。 <p> f（n）=（除了n的最后一位以外的所有数字）+（n的最后一位）* m </p><p>也就是说，如果m是p的可分数乘数，则当且仅当n可被p整除时，f（n）可被p整除。 </p><p> （当n远大于p时，f（n）将小于n，并且f的重复应用为p提供乘法可除性测试。） </p><p>例如，113的可分性乘数是34。 </p><p> f（76275）= 7627 + 5 <em>34 = 7797：76275和7797都可以被113f（12345）= 1234 + 5</em> 34 = 1404：12345和1404整除都不能被113整除</p><p>对于10和小于1000互质的素数的可除性乘数的总和是39517.对于10和小于107互质的素数的可除数乘数的总和是多少？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler274()</code>应该返回1601912348822。
    testString: assert.strictEqual(euler274(), 1601912348822);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler274() {
  // Good luck!
  return true;
}

euler274();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
