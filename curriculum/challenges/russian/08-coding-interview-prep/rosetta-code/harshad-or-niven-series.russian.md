---
title: Harshad or Niven series
id: 595668ca4cfe1af2fb9818d4
challengeType: 5
videoUrl: ''
localeTitle: Серия Harshad или Niven
---

## Description
<section id="description"><p> Номера <a href="http://mathworld.wolfram.com/HarshadNumber.html" title="ссылка: http://mathworld.wolfram.com/HarshadNumber.html">Harshad</a> или Niven представляют собой целые положительные числа ≥ 1, которые делятся на сумму их цифр. </p><p> Например, 42 является <a href="http://rosettacode.org/wiki/oeis:A005349" title="OEIS: A005349">числом Харшада,</a> поскольку 42 делится на (4 + 2) без остатка. </p> Предположим, что ряд определяется как числа в порядке возрастания. Задача: <p> Реализуйте функцию для генерации последовательных членов последовательности Harshad. </p><p> Используйте его, чтобы перечислить первые двадцать членов последовательности и перечислите первое число Harshad, превышающее 1000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isHarshadOrNiven</code> - это функция.
    testString: 'assert(typeof isHarshadOrNiven === "function", "<code>isHarshadOrNiven</code> is a function.");'
  - text: '<code>isHarshadOrNiven()</code> должен возвращать <code>{&quot;firstTwenty&quot;: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],&quot;firstOver1000&quot;: 1002}</code>'
    testString: 'assert.deepEqual(isHarshadOrNiven(), res, "<code>isHarshadOrNiven()</code> should return <code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isHarshadOrNiven () {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line

  return res;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
