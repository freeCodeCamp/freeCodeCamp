---
title: Harshad or Niven series
id: 595668ca4cfe1af2fb9818d4
challengeType: 5
forumTopicId: 302281
localeTitle: Серия Harshad или Niven
---

## Description
<section id='description'>
<p> Номера <a href="http://mathworld.wolfram.com/HarshadNumber.html" title="ссылка: http://mathworld.wolfram.com/HarshadNumber.html">Harshad</a> или Niven представляют собой целые положительные числа ≥ 1, которые делятся на сумму их цифр. </p><p> Например, 42 является <a href="http://rosettacode.org/wiki/oeis:A005349" title="OEIS: A005349">числом Харшада,</a> поскольку 42 делится на (4 + 2) без остатка. </p> Предположим, что ряд определяется как числа в порядке возрастания. Задача: <p> Реализуйте функцию для генерации последовательных членов последовательности Harshad. </p><p> Используйте его, чтобы перечислить первые двадцать членов последовательности и перечислите первое число Harshad, превышающее 1000. </p>
</section>

## Instructions
<section id='instructions'>
Implement a function to generate successive members of the Harshad sequence.
Use it to list the first twenty members of the sequence and list the first Harshad number greater than 1000.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isHarshadOrNiven</code> is a function.
    testString: assert(typeof isHarshadOrNiven === 'function');
  - text: '<code>isHarshadOrNiven()</code> should return <code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>'
    testString: assert.deepEqual(isHarshadOrNiven(), res);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line

  return res;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const res = {
  firstTwenty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],
  firstOver1000: 1002
};

```

</div>

</section>

## Solution
<section id='solution'>

```js
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };

  function isHarshad(n) {
    let s = 0;
    const nStr = n.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  let count = 0;
  const harshads = [];

  for (let n = 1; count < 20; ++n) {
    if (isHarshad(n)) {
      count++;
      harshads.push(n);
    }
  }

  res.firstTwenty = harshads;

  let h = 1000;
  while (!isHarshad(++h));
  res.firstOver1000 = h;

  return res;
}
```

</section>
