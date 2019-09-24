---
id: 5900f5411000cf542c510052
challengeType: 5
title: 'Problem 467: Superinteger'
forumTopicId: 302142
localeTitle: 'Задача 467: суперинтегер'
---

## Description
<section id='description'>
Целое число s называется суперинтегером другого целого числа n, если цифры n образуют подпоследовательность цифр s. Например, 2718281828 является суперинтегратором 18828, тогда как 314159 не является суперинтегратором 151. <p> Пусть p (n) - n-е простое число, а c (n) - n-е составное число. Например, p (1) = 2, p (10) = 29, c (1) = 4 и c (10) = 18. {p (i): i ≥ 1} = {2, 3, 5, 7 , 11, 13, 17, 19, 23, 29, ...} {c (i): i ≥ 1} = {4, 6, 8, 9, 10, 12, 14, 15, 16, 18,. ..} </p><p> Пусть PD - последовательность цифровых корней {p (i)} (CD определяется аналогично для {c (i)}): PD = {2, 3, 5, 7, 2, 4, 8, 1, 5, 2, ...} CD = {4, 6, 8, 9, 1, 3, 5, 6, 7, 9, ...} </p><p> Пусть Pn - целое число, образованное конкатенированием первых n элементов PD (Cn определено аналогично для CD). P10 = 2357248152 C10 = 4689135679 </p><p> Пусть f (n) - наименьшее положительное целое число, являющееся общим суперинтегратором Pn и Cn. Например, f (10) = 2357246891352679 и f (100) mod 1 000 000 007 = 771661825. </p><p> Найдите f (10 000) мод 1 000 000 007. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler467()</code> should return 775181359.
    testString: assert.strictEqual(euler467(), 775181359);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler467() {
  // Good luck!
  return true;
}

euler467();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
