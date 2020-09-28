---
id: 5900f48a1000cf542c50ff9c
challengeType: 5
title: 'Problem 285: Pythagorean odds'
forumTopicId: 301936
localeTitle: 'Задача 285: шансы Пифагора'
---

## Description
<section id='description'>
Альберт выбирает положительное целое число k, тогда два действительных числа a, b случайным образом выбираются в интервале [0,1] с равномерным распределением. Тогда квадратный корень из суммы (k · a + 1) 2 + (k · b + 1) 2 вычисляется и округляется до ближайшего целого числа. Если результат равен k, он набирает k очков; иначе он ничего не наберет. <p> Например, если k = 6, a = 0,2 и b = 0,85, то (k · a + 1) 2 + (k · b + 1) 2 = 42,05. Квадратный корень из 42.05 составляет 6,484 ... и округленный до ближайшего целого, он становится равным 6. Это равно k, поэтому он набирает 6 очков. </p><p> Можно показать, что если он играет 10 оборотов с k = 1, k = 2, ..., k = 10, ожидаемое значение его общего балла, округленное до пяти знаков после запятой, равно 10.20914. </p><p> Если он играет 105 оборотов с k = 1, k = 2, k = 3, ..., k = 105, каково ожидаемое значение его общего балла, округленное до пяти знаков после запятой? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler285()</code> should return 157055.80999.
    testString: assert.strictEqual(euler285(), 157055.80999);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler285() {
  // Good luck!
  return true;
}

euler285();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
