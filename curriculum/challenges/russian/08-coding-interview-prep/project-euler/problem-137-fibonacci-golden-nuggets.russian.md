---
id: 5900f3f51000cf542c50ff08
challengeType: 5
title: 'Problem 137: Fibonacci golden nuggets'
forumTopicId: 301765
localeTitle: 'Задача 137: золотые самородки Фибоначчи'
---

## Description
<section id='description'>
Рассмотрим бесконечный полиномиальный ряд AF (x) = xF1 + x2F2 + x3F3 + ..., где Fk - k-й член в последовательности Фибоначчи: 1, 1, 2, 3, 5, 8, ...; то есть Fk = Fk-1 + Fk-2, F1 = 1 и F2 = 1. Для этой задачи нас будут интересовать значения x, для которых AF (x) является натуральным числом. Удивительно, что AF (1/2) = (1/2) .1 + (1/2) 2,1 + (1/2) 3,2 + (1/2) 4,3 + (1/2) 5,5 + ... <p> = 1/2 + 1/4 + 2/8 + 3/16 + 5/32 + ... </p><p> = 2 Соответствующие значения x для первых пяти натуральных чисел показаны ниже. </p><p> xAF (x) √2-11 1/22 (√13-2) / 33 (√89-5) / 84 (√34-3) / 55 </p><p> Будем называть AF (x) золотым саморождением, если x рационально, потому что они становятся все реже; например, 10-й золотой самородок - 74049690. Найдите 15-й золотой самородок. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler137()</code> should return 1120149658760.
    testString: assert.strictEqual(euler137(), 1120149658760);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler137() {
  // Good luck!
  return true;
}

euler137();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
