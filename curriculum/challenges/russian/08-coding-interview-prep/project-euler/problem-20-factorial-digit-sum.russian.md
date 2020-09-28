---
id: 5900f3801000cf542c50fe93
challengeType: 5
title: 'Problem 20: Factorial digit sum'
forumTopicId: 301839
localeTitle: 'Задача 20: Факториальная цифра'
---

## Description
<section id='description'>
<var>n</var> ! означает <var>n</var> × ( <var>n</var> - 1) × ... × 3 × 2 × 1 Например, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, <br> и сумму цифр в цифре 10! равно 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27. Найдите сумму цифр <var>n</var> !
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumFactorialDigits(10)</code> should return 27.
    testString: assert.strictEqual(sumFactorialDigits(10), 27);
  - text: <code>sumFactorialDigits(25)</code> should return 72.
    testString: assert.strictEqual(sumFactorialDigits(25), 72);
  - text: <code>sumFactorialDigits(50)</code> should return 216.
    testString: assert.strictEqual(sumFactorialDigits(50), 216);
  - text: <code>sumFactorialDigits(75)</code> should return 432.
    testString: assert.strictEqual(sumFactorialDigits(75), 432);
  - text: <code>sumFactorialDigits(100)</code> should return 648.
    testString: assert.strictEqual(sumFactorialDigits(100), 648);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumFactorialDigits(n) {
  // Good luck!
  return n;
}

sumFactorialDigits(100);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
