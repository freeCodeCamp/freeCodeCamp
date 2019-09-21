---
id: 5900f48d1000cf542c50ff9f
challengeType: 5
title: 'Problem 288: An enormous factorial'
forumTopicId: 301939
localeTitle: 'Задача 288: Огромный факторный'
---

## Description
<section id='description'>
Для любого простого числа p число N (p, q) определяется формулой N (p, q) = Σn = 0 до q Tn * pn с Tn, порожденной следующим генератором случайных чисел: <p> S0 = 290797 Sn + 1 = Sn2 mod 50515093 Tn = Sn mod p </p><p> Пусть Nfac (p, q) - факториал N (p, q). Пусть NF (p, q) - число множителей p в Nfac (p, q). </p><p> Вам дается NF (3,10000) mod 320 = 624955285. </p><p> Найдите NF (61,107) мод 6110 </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler288()</code> should return 605857431263982000.
    testString: assert.strictEqual(euler288(), 605857431263982000);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler288() {
  // Good luck!
  return true;
}

euler288();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
