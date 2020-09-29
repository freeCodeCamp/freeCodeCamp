---
id: 5900f4231000cf542c50ff36
challengeType: 5
title: 'Problem 183: Maximum product of parts'
videoUrl: ''
localeTitle: 问题183：零件的最大产品
---

## Description
<section id="description">令N为正整数，并且将N分成k个相等的部分，r = N / k，使得N = r + r + ... + r。设P是这些部分的乘积，P = r×r×...×r = rk。 <p>例如，如果11被分成五个相等的部分，11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2，那么P = 2.25 = 51.53632。 </p><p>对于给定的N值，设M（N）= Pmax。 </p><p>事实证明，N = 11的最大值是通过将11分成4个相等的部分得到的，这导致Pmax =（11/4）4;即，M（11）= 14641/256 = 57.19140625，这是终止小数。 </p><p>然而，对于N = 8，通过将其分成三个相等的部分来实现最大值，因此M（8）= 512/27，这是非终止小数。 </p><p>如果M（N）是非终止小数，则令D（N）= N，如果M（N）是终止小数，则D（N）= -N。 </p><p>例如，5≤N≤100的ΣD（N）是2438。 </p><p>求ΣD（N）为5≤N≤10000。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler183()</code>应该返回48861552。
    testString: assert.strictEqual(euler183(), 48861552);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler183() {
  // Good luck!
  return true;
}

euler183();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
