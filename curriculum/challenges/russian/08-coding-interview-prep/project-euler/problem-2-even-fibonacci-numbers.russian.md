---
id: 5900f36e1000cf542c50fe81
challengeType: 5
title: 'Problem 2: Even Fibonacci Numbers'
videoUrl: ''
localeTitle: 'Проблема 2: Чётные числа Фибоначчи'
---

## Description
<section id="description"> Каждый новый член в последовательности Фибоначчи генерируется путем сложения предыдущих двух членов. Начиная с 1 и 2, первые 10 членов будут: <div style="text-align: center;"> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... </div> Рассматривая члены в последовательности Фибоначчи до <code>n</code> -го включительно, найдите сумму четных чисел последовательности. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fiboEvenSum(10)</code> должен вернуться 188.
    testString: 'assert.strictEqual(fiboEvenSum(10), 188, "<code>fiboEvenSum(10)</code> should return 188.");'
  - text: <code>fiboEvenSum(23)</code> должен вернуть 60696.
    testString: 'assert.strictEqual(fiboEvenSum(23), 60696, "<code>fiboEvenSum(23)</code> should return 60696.");'
  - text: <code>fiboEvenSum(43)</code> должен вернуть 1485607536.
    testString: 'assert.strictEqual(fiboEvenSum(43), 1485607536, "<code>fiboEvenSum(43)</code> should return 1485607536.");'
  - text: 'Ваша функция не возвращает правильный результат, используя наши значения тестов.'
    testString: 'assert.strictEqual(fiboEvenSum(18), 3382, "Your function is not returning the correct result using our tests values.");'
  - text: Ваша функция должна возвращать <code>чётные</code> значения.
    testString: 'assert.equal(fiboEvenSum(31) % 2 === 0, true, "Your function should return an <code>even</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fiboEvenSum(n) {
  // Вы можете сделать это!
  return true;
}

fiboEvenSum(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
