---
id: 5900f3831000cf542c50fe96
challengeType: 5
title: 'Problem 23: Non-abundant sums'
videoUrl: ''
localeTitle: 问题23：非丰富的总和
---

## Description
<section id="description">完美数字是一个数字，其正确除数的总和恰好等于数字。例如，28的适当除数之和为1 + 2 + 4 + 7 + 14 = 28，这意味着28是一个完美数。如果<var>n</var>的适当除数之和小于<var>n</var> ，则<var>n</var>被称为不足，如果该和超过<var>n</var>则称为<var>n</var> 。由于12是最小的有限数，1 + 2 + 3 + 4 + 6 = 16，可以写成两个有限数之和的最小数是24.通过数学分析，可以看出所有整数都大于28123可以写成两个数字的总和。然而，即使已知不能表示为两个充裕数的总和的最大数小于该限制，也不能通过分析进一步减小该上限。找出所有正整数&lt;= <var>n</var>的总和，它不能写成两个丰富数字的总和。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfNonAbundantNumbers(10000)</code>应返回3731004。
    testString: assert(sumOfNonAbundantNumbers(10000) === 3731004);
  - text: <code>sumOfNonAbundantNumbers(15000)</code>应该返回4039939。
    testString: assert(sumOfNonAbundantNumbers(15000) === 4039939);
  - text: <code>sumOfNonAbundantNumbers(20000)</code>应返回4159710。
    testString: assert(sumOfNonAbundantNumbers(20000) === 4159710);
  - text: <code>sumOfNonAbundantNumbers(28123)</code>应该返回4179871。
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

/section>
