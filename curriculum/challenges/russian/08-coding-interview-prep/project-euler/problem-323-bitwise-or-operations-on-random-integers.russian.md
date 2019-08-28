---
id: 5900f4b01000cf542c50ffc2
challengeType: 5
title: 'Problem 323: Bitwise-OR operations on random integers'
forumTopicId: 301980
localeTitle: 'Задача 323: Побитовые операции OR для случайных целых чисел'
---

## Description
<section id='description'>
Пусть y0, y1, y2, ... - последовательность случайных беззнаковых 32-битных целых чисел (т.е. 0 ≤ yi &lt;232, каждое значение одинаково вероятно). Для последовательности xi дана следующая рекурсия: x0 = 0 и xi = xi-1 | yi-1, для i&gt; 0. (| - оператор побитового OR). Видно, что в конце концов будет индекс N такой, что xi = 232 -1 (бит-шаблон всех) для всех i ≥ Н. <p> Найдите ожидаемое значение N. Дайте ваш ответ округленным до десяти цифр после десятичной точки. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler323()</code> should return 6.3551758451.
    testString: assert.strictEqual(euler323(), 6.3551758451);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler323() {
  // Good luck!
  return true;
}

euler323();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
