---
id: 5900f36e1000cf542c50fe80
challengeType: 5
title: 'Problem 1: Multiples of 3 and 5'
videoUrl: ''
localeTitle: 'Проблема 1: Числа, кратные 3 или 5'
---

## Description
<section id="description"> Если мы перечислим все натуральные числа меньше 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23. Найдите сумму всех кратных 3 или 5 меньше значения параметра <code>number</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>multiplesOf3and5(1000)</code> должна возвращать 233168.
    testString: 'assert.strictEqual(multiplesOf3and5(1000), 233168, "<code>multiplesOf3and5(1000)</code> should return 233168.");'
  - text: <code>multiplesOf3and5(49)</code> должна возвращать 543.
    testString: 'assert.strictEqual(multiplesOf3and5(49), 543, "<code>multiplesOf3and5(49)</code> should return 543.");'
  - text: <code>multiplesOf3and5(19564)</code> должна возвращать 89301183.
    testString: 'assert.strictEqual(multiplesOf3and5(19564), 89301183, "<code>multiplesOf3and5(19564)</code> should return 89301183.");'
  - text: 'Ваша функция возвращает неправильный результат, используя наши тестовые значения.'
    testString: 'assert.strictEqual(multiplesOf3and5(8456), 16687353, "Your function is not returning the correct result using our tests values.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function multiplesOf3and5(number) {
  // Good luck!
  return true;
}

multiplesOf3and5(1000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
