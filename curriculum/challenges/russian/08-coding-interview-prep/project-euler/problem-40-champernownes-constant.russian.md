---
id: 5900f3941000cf542c50fea7
challengeType: 5
title: 'Problem 40: Champernowne''s constant'
forumTopicId: 302066
localeTitle: 'Задача 40: постоянная Шампернауне'
---

## Description
<section id='description'>
An irrational decimal fraction is created by concatenating the positive integers:
<span style='display: block; text-align: center;'>0.12345678910<b style='color: red;'>1</b>112131415161718192021...</span>
It can be seen that the 12<sup>th</sup> digit of the fractional part is 1.
If <i>d<sub>n</sub></i> represents the <i>n</i><sup>th</sup> digit of the fractional part, find the value of the following expression.
<span style='display: block; text-align: center;'>d<sub>1</sub> × d<sub>10</sub> × d<sub>100</sub> × d<sub>1000</sub> × d<sub>10000</sub> × d<sub>100000</sub> × d<sub>1000000</sub></span>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>champernownesConstant(100)</code> should return 5.
    testString: assert.strictEqual(champernownesConstant(100), 5);
  - text: <code>champernownesConstant(1000)</code> should return 15.
    testString: assert.strictEqual(champernownesConstant(1000), 15);
  - text: <code>champernownesConstant(1000000)</code> should return 210.
    testString: assert.strictEqual(champernownesConstant(1000000), 210);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function champernownesConstant(n) {
  // Good luck!
  return true;
}

champernownesConstant(100);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function champernownesConstant(n) {
  let fractionalPart = '';
  for (let i = 0; fractionalPart.length <= n; i++) {
    fractionalPart += i.toString();
  }

  let product = 1;
  for (let i = 0; i < n.toString().length; i++) {
    const index = 10 ** i;
    product *= parseInt(fractionalPart[index], 10);
  }

  return product;
}
```

</section>
