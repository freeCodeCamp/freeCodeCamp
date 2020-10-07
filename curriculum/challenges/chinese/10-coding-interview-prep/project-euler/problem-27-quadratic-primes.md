---
id: 5900f3871000cf542c50fe9a
challengeType: 5
videoUrl: ''
title: 问题27：二次素数
---

## Description
<section id="description">欧拉发现了显着的二次公式：$ n ^ 2 + n + 41 $事实证明，公式将为连续的整数值$ 0 \ le n \ le 39 $产生40个素数。但是，当$ n = 40时，40 ^ 2 + 40 + 41 = 40（40 + 1）+ 41 $可被41整除，当然$ n = 41时，41 ^ 2 + 41 + 41 $显然可以被整除41.发现了令人难以置信的公式$ n ^ 2  -  79n + 1601 $，它为连续值$ 0 \ le n \ le 79 $产生80个素数。系数-79和1601的乘积是-126479。考虑形式的二次方： <p> $ n ^ 2 + an + b $，其中$ | a | &lt;range $和$ | b | \ le $ $其中$ | n | $是$ n $的模数/绝对值，例如$ | 11 | = 11 $和$ | -4 | = 4 $ </p><p>找到系数的乘积，$ a $和$ b $，用于生成连续值$ n $的最大素数数的二次表达式，从$ n = 0 $开始。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quadraticPrimes(200)</code>应返回-4925。
    testString: assert(quadraticPrimes(200) == -4925);
  - text: <code>quadraticPrimes(500)</code>应返回-18901。
    testString: assert(quadraticPrimes(500) == -18901);
  - text: <code>quadraticPrimes(800)</code>应返回-43835。
    testString: assert(quadraticPrimes(800) == -43835);
  - text: <code>quadraticPrimes(1000)</code>应返回-59231。
    testString: assert(quadraticPrimes(1000) == -59231);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quadraticPrimes(range) {
  // Good luck!
  return range;
}

quadraticPrimes(1000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
