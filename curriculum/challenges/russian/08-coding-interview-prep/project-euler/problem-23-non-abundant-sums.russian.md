---
id: 5900f3831000cf542c50fe96
challengeType: 5
title: 'Problem 23: Non-abundant sums'
forumTopicId: 301873
localeTitle: 'Задача 23: Недостаточные суммы'
---

## Description
<section id='description'>
Идеальное число - это число, для которого сумма его собственных делителей точно равна числу. Например, сумма правильных делителей 28 будет равна 1 + 2 + 4 + 7 + 14 = 28, что означает, что 28 - идеальное число. Число <var>n</var> называется дефицитным, если сумма его собственных делителей меньше <var>n,</var> и его называют обильным, если эта сумма превышает <var>n</var> . Поскольку 12 - наименьшее обильное число, 1 + 2 + 3 + 4 + 6 = 16, наименьшее число, которое можно записать как сумму двух обильных чисел, равно 24. По математическому анализу можно показать, что все целые числа, большие 28123 можно записать как сумму двух обильных чисел. Однако этот верхний предел еще не может быть уменьшен путем анализа, хотя известно, что наибольшее число, которое не может быть выражено как сумма двух обильных чисел, меньше этого предела. Найдите сумму всех натуральных чисел &lt;= <var>n,</var> которые не могут быть записаны в виде суммы двух обильных чисел.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfNonAbundantNumbers(10000)</code> should return 3731004.
    testString: assert(sumOfNonAbundantNumbers(10000) === 3731004);
  - text: <code>sumOfNonAbundantNumbers(15000)</code> should return 4039939.
    testString: assert(sumOfNonAbundantNumbers(15000) === 4039939);
  - text: <code>sumOfNonAbundantNumbers(20000)</code> should return 4159710.
    testString: assert(sumOfNonAbundantNumbers(20000) === 4159710);
  - text: <code>sumOfNonAbundantNumbers(28123)</code> should return 4179871.
    testString: assert(sumOfNonAbundantNumbers(28123) === 4179871);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfNonAbundantNumbers(n) {
  // Good luck!
  return n;
}

sumOfNonAbundantNumbers(28123);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
