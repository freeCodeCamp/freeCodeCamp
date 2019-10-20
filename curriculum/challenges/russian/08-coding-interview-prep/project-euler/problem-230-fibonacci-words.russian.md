---
id: 5900f4531000cf542c50ff65
challengeType: 5
title: 'Problem 230: Fibonacci Words'
forumTopicId: 301874
localeTitle: 'Задача 230: Слова Фибоначчи'
---

## Description
<section id='description'>
Для любых двух строк цифр A и B определим FA, B как последовательность (A, B, AB, BAB, ABBAB, ...), в которой каждый член является конкатенацией предыдущих двух. <p> Далее, мы определяем DA, B (n) как n-ю цифру в первом члене FA, B, который содержит не менее n цифр. </p><p> Пример: </p><p> Пусть A = 1415926535, B = 8979323846. Мы хотим найти DA, B (35), скажем. </p><p> Первые несколько терминов FA, B: 1415926535 8979323846 14159265358979323846 897932384614159265358979323846 14159265358979323846897932384614159265358979323846 </p><p> Тогда DA, B (35) является 35-й цифрой в пятом члене, что равно 9. </p><p> Теперь мы используем для A первые 100 цифр π за десятичной точкой: 14159265358979323846264338327950288419716939937510 58209749445923078164062862089986280348253421170679 </p><p> и для B следующие сто цифр: </p><p> 82148086513282306647093844609550582231725359408128 48111745028410270193852110555964462294895493038196. </p><p> Найти Σn = 0,1, ..., 17 10n × DA, B ((127 + 19n) × 7n). </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler230()</code> should return 850481152593119200.
    testString: assert.strictEqual(euler230(), 850481152593119200);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler230() {
  // Good luck!
  return true;
}

euler230();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
