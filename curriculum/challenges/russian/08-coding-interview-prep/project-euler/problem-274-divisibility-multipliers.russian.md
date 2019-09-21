---
id: 5900f47f1000cf542c50ff91
challengeType: 5
title: 'Problem 274: Divisibility Multipliers'
forumTopicId: 301924
localeTitle: 'Задача 274: Множители делимости'
---

## Description
<section id='description'>
Для каждого целого числа p&gt; 1, равного 10, существует множитель положительной делимости m &lt;p, который сохраняет делимость на p для следующей функции на любом натуральном числе n: <p> f (n) = (все, кроме последней цифры n) + (последняя цифра n) * m </p><p> То есть, если m - множитель делимости для p, то f (n) делится на p тогда и только тогда, когда n делится на p. </p><p> (Когда n много больше p, f (n) будет меньше n, а повторное применение f дает мультипликативный тест делимости для p.) </p><p> Например, множитель делимости для 113 равен 34. </p><p> f (76275) = 7627 + 5 <em>34 = 7797: 76275 и 7797 оба делятся на 113f (12345) = 1234 + 5</em> 34 = 1404: 12345 и 1404 оба не делятся на 113 </p><p> Сумма умножителей делимости для простых чисел, равных 10 и менее 1000, равна 39517. Какова сумма коэффициентов делимости для простых чисел, которые являются взаимными до 10 и менее 107? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler274()</code> should return 1601912348822.
    testString: assert.strictEqual(euler274(), 1601912348822);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler274() {
  // Good luck!
  return true;
}

euler274();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
