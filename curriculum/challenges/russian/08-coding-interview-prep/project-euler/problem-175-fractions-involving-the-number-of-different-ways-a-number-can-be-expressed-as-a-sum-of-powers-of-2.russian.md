---
id: 5900f41c1000cf542c50ff2e
challengeType: 5
title: 'Problem 175: Fractions involving the number of different ways a number can be expressed as a sum of powers of 2'
forumTopicId: 301810
localeTitle: 'Задача 175: Фракции, включающие количество разных способов, число может быть выражено как сумма степеней 2'
---

## Description
<section id='description'>
Определим f (0) = 1 и f (n) как число способов записи n как суммы степеней 2, где никакая мощность не более двух раз. <p> Например, f (10) = 5, поскольку существует пять различных способов выражения 10:10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1 </p><p> Можно показать, что для любой доли p / q (p&gt; 0, q&gt; 0) существует хотя бы одно целое число n такое, что f (n) / f (n-1) = p / q. Например, наименьшее n, для которого f (n) / f (n-1) = 13/17 равно 241. Бинарное разложение 241 равно 11110001. Считая это двоичное число от самого значащего бита до наименее значимого бита, 4 one, 3 zeroes и 1 one. Будем называть строку 4,3,1 сокращенным двоичным расширением 241. Найти сокращенное двоичное разложение наименьшего n, для которого f (n) / f (n-1) = 123456789/987654321. Дайте свой ответ как целые числа, разделенные запятой, без каких-либо пробелов. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler175()</code> should return 1, 13717420, 8.
    testString: assert.strictEqual(euler175(), 1, 13717420, 8);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler175() {
  // Good luck!
  return true;
}

euler175();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
