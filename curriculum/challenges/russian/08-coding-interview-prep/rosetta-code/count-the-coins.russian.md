---
title: Count the coins
id: 59713bd26bdeb8a594fb9413
challengeType: 5
forumTopicId: 302238
localeTitle: Подсчитайте монеты
---

## Description
<section id='description'>
<p> В <a href="https://en.wikipedia.org/wiki/United_States" title="ссылка: https://en.wikipedia.org/wiki/United_States">американской</a> валюте существует четыре типа обычных монет: </p> кварталы (25 центов), десять центов (10 центов), никель (5 центов) и пенни (1 цент) <p> Существует шесть способов внести изменения в 15 центов: </p> Копейка и никель Копейка и 5 пенни 3 никеля 2 никеля и 5 пенни Никель и 10 пенни 15 пенни Задача: <p> Внедрить функцию, чтобы определить, сколько способов внести изменения в доллар, используя эти общие монеты? (1 доллар = 100 центов). </p> Ссылка: <a href="http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52" title="ссылка: http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52">алгоритм из MIT Press</a> .
</section>

## Instructions
<section id='instructions'>
Implement a function to determine how many ways there are to make change for a dollar using these common coins (1 dollar = 100 cents)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countCoins</code> is a function.
    testString: assert(typeof countCoins === 'function');
  - text: <code>countCoints()</code> should return 242.
    testString: assert.equal(countCoins(), 242);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countCoins() {
  // Good luck!
  return true;
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function countCoins() {
  let t = 100;
  const operands = [1, 5, 10, 25];
  const targetsLength = t + 1;
  const operandsLength = operands.length;
  t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}
```

</section>
