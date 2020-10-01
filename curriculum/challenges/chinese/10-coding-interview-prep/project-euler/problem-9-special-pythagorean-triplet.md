---
id: 5900f3761000cf542c50fe88
challengeType: 5
title: 'Problem 9: Special Pythagorean triplet'
videoUrl: ''
localeTitle: 问题9：特殊的毕达哥拉斯三重奏
---

## Description
<section id="description">毕达哥拉斯三元组是一组三个自然数， <var>a</var> &lt; <var>b</var> &lt; <var>c</var> ，其中， <div style="text-align: center;"> <var>a</var> <sup>2</sup> + <var>b</var> <sup>2</sup> = <var>c</var> <sup>2</sup> </div>例如，3 <sup>2</sup> + 4 <sup>2</sup> = 9 + 16 = 25 = 5 <sup>2</sup> 。恰好存在一个毕达哥拉斯三元组，其中<var>a</var> + <var>b</var> + <var>c</var> = 1000.求产品<var>abc</var>使得<var>a</var> + <var>b</var> + <var>c</var> = <code>n</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>specialPythagoreanTriplet(1000)</code>应返回31875000。
    testString: assert.strictEqual(specialPythagoreanTriplet(1000), 31875000);
  - text: <code>specialPythagoreanTriplet(24)</code>应该返回480。
    testString: assert.strictEqual(specialPythagoreanTriplet(24), 480);
  - text: <code>specialPythagoreanTriplet(120)</code>应该返回49920。
    testString: assert([49920, 55080, 60000].includes(specialPythagoreanTriplet(120)));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 // Good luck!
 return true;
}

specialPythagoreanTriplet(1000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
