---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Сумма всех нечетных чисел Фибоначчи
---

## Description
<section id="description"> Учитывая положительное целое <code>num</code> , возвращаем сумму всех нечетных чисел Фибоначчи, которые меньше или равно <code>num</code> . Первые два числа в последовательности Фибоначчи равны 1 и 1. Каждое дополнительное число в последовательности представляет собой сумму двух предыдущих чисел. Первые шесть чисел последовательности Фибоначчи - 1, 1, 2, 3, 5 и 8. Например, <code>sumFibs(10)</code> должен возвращать <code>10</code> потому что все нечетные числа Фибоначчи, меньшие или равные <code>10</code> равны 1, 1, 3 и 5. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumFibs(1)</code> должен возвращать число.
    testString: 'assert(typeof sumFibs(1) === "number", "<code>sumFibs(1)</code> should return a number.");'
  - text: <code>sumFibs(1000)</code> должен вернуть 1785.
    testString: 'assert(sumFibs(1000) === 1785, "<code>sumFibs(1000)</code> should return 1785.");'
  - text: <code>sumFibs(4000000)</code> должен вернуть 4613732.
    testString: 'assert(sumFibs(4000000) === 4613732, "<code>sumFibs(4000000)</code> should return 4613732.");'
  - text: <code>sumFibs(4)</code> должен вернуть 5.
    testString: 'assert(sumFibs(4) === 5, "<code>sumFibs(4)</code> should return 5.");'
  - text: <code>sumFibs(75024)</code> должен возвращать 60696.
    testString: 'assert(sumFibs(75024) === 60696, "<code>sumFibs(75024)</code> should return 60696.");'
  - text: <code>sumFibs(75025)</code> должен вернуть 135721.
    testString: 'assert(sumFibs(75025) === 135721, "<code>sumFibs(75025)</code> should return 135721.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
