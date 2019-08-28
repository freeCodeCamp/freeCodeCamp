---
id: 5900f3811000cf542c50fe94
challengeType: 5
title: 'Problem 21: Amicable numbers'
forumTopicId: 301851
localeTitle: 'Задача 21: дружественные номера'
---

## Description
<section id='description'>
Пусть d ( <var>n</var> ) определяется как сумма собственных делителей <var>n</var> (числа меньше <var>n,</var> которые равномерно делятся на <var>n</var> ). Если d ( <var>a</var> ) = <var>b</var> и d ( <var>b</var> ) = <var>a</var> , где <var>a</var> ≠ <var>b</var> , то <var>a</var> и <var>b</var> являются дружественной парой, и каждый из <var>a</var> и <var>b</var> называется дружественным числом. Например, правильные делители 220 являются 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 и 110; поэтому d (220) = 284. Собственные делители 284 равны 1, 2, 4, 71 и 142; так что d (284) = 220. Оцените сумму всех дружественных чисел при <var>n</var> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumAmicableNum(1000)</code> should return 504.
    testString: assert.strictEqual(sumAmicableNum(1000), 504);
  - text: <code>sumAmicableNum(2000)</code> should return 2898.
    testString: assert.strictEqual(sumAmicableNum(2000), 2898);
  - text: <code>sumAmicableNum(5000)</code> should return 8442.
    testString: assert.strictEqual(sumAmicableNum(5000), 8442);
  - text: <code>sumAmicableNum(10000)</code> should return 31626.
    testString: assert.strictEqual(sumAmicableNum(10000), 31626);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumAmicableNum(n) {
  // Good luck!
  return n;
}

sumAmicableNum(10000);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```

</section>
