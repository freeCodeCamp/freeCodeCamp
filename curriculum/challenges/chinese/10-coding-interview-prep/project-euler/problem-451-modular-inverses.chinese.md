---
id: 5900f5311000cf542c510042
challengeType: 5
title: 'Problem 451: Modular inverses'
videoUrl: ''
localeTitle: 问题451：模逆
---

## Description
<section id="description">考虑数字15.有八个正数小于15，它们与15：1,2,4,7,8,11,13,14相互作用。这些数模15的模数逆是：1,8,4 ，13,2,11,7,14因为1 * 1 mod 15 = 1 2 * 8 = 16 mod 15 = 1 4 * 4 = 16 mod 15 = 1 7 * 13 = 91 mod 15 = 1 11 * 11 = 121 mod 15 = 1 14 * 14 = 196 mod 15 = 1 <p>设I（n）是小于n-1的最大正数m，使得m modulo n的模逆与m本身相等。所以我（15）= 11。我（100）= 51和I（7）= 1。 </p><p>求3Σn≤2·107的ΣI（n） </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler451()</code>应该返回153651073760956。
    testString: assert.strictEqual(euler451(), 153651073760956);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler451() {
  // Good luck!
  return true;
}

euler451();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
