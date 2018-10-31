---
title: Emirp primes
id: 599d0ba974141b0f508b37d5
challengeType: 5
videoUrl: ''
localeTitle: Бонусы Эмирпа
---

## Description
<section id="description"><p> Эмирп (первичный, записанный в обратном порядке) - это простые числа, которые при обратном (в их десятичном представлении) являются разными штрихами. </p><p> Напишите функцию, которая должна быть способна: Показывать первые числа <b>n</b> номеров. Покажите числа eprimes в диапазоне. Покажите количество eprimes в диапазоне. Покажите номер <b>n <sup>th</sup></b> eprimes. </p><p> Функция должна иметь два параметра. Первый получит <b>n</b> или диапазон в виде массива. Вторая будет получать логическое значение, которое указывает, возвращает ли функция eprimes в виде массива или одного числа (количество простых чисел в диапазоне или <b>n- <sup>го</sup></b> числа). В соответствии с параметрами функция должна возвращать массив или число. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>emirps</code> - это функция.
    testString: 'assert(typeof emirps === "function", "<code>emirps</code> is a function.");'
  - text: '<code>emirps(20,true)</code> должны вернуться <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>'
    testString: 'assert.deepEqual(emirps(20, true), [13, 17, 31, 37, 71, 73, 79, 97, 107, 113, 149, 157, 167, 179, 199, 311, 337, 347, 359, 389], "<code>emirps(20,true)</code> should return <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>");'
  - text: <code>emirps(10000)</code> должен вернуть <code>948349</code>
    testString: 'assert.deepEqual(emirps(10000), 948349, "<code>emirps(10000)</code> should return <code>948349</code>");'
  - text: '<code>emirps([7700,8000],true)</code> должны быть возвращены <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>'
    testString: 'assert.deepEqual(emirps([7700, 8000], true), [7717, 7757, 7817, 7841, 7867, 7879, 7901, 7927, 7949, 7951, 7963], "<code>emirps([7700,8000],true)</code> should return <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>");'
  - text: '<code>emirps([7700,8000],true)</code> должен вернуть <code>11</code>'
    testString: 'assert.deepEqual(emirps([7700, 8000], false), 11, "<code>emirps([7700,8000],true)</code> should return <code>11</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function emirps(n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
