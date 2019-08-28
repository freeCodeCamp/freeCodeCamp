---
id: 5900f4091000cf542c50ff1b
challengeType: 5
title: 'Problem 156: Counting Digits'
forumTopicId: 301787
localeTitle: 'Задача 156: подсчет цифр'
---

## Description
<section id='description'>
Начиная с нуля, натуральные числа записываются в базе 10 следующим образом: <p> 0 1 2 3 4 5 6 7 8 9 10 11 12 .... </p><p> Рассмотрим цифру d = 1. После того, как мы запишем каждое число n, мы обновим число тех, которые произошли, и назовем это число f (n, 1). Тогда первые значения для f (n, 1) следующие: </p><p> nf (n, 1) 00 11 21 31 41 51 61 71 81 91 102 114 125 </p><p> Заметим, что f (n, 1) никогда не равно 3. </p><p> Итак, первые два решения уравнения f (n, 1) = n равны n = 0 и n = 1. Следующее решение - n = 199981. Таким же образом функция f (n, d) дает общее количество цифр d, записанных после того, как было записано число n. </p><p> Действительно, для каждой цифры d ≠ 0, 0 является первым решением уравнения f (n, d) = n. Пусть s (d) - сумма всех решений, для которых f (n, d) = n. </p><p> Вам дается, что s (1) = 22786974071. Найти Σ s (d) для 1 ≤ d ≤ 9. Примечание: если для некоторого n, f (n, d) = n для более чем одного значения d это значение n подсчитывается снова для каждого значения d, для которого е (п, д) = п. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler156()</code> should return 21295121502550.
    testString: assert.strictEqual(euler156(), 21295121502550);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler156() {
  // Good luck!
  return true;
}

euler156();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
