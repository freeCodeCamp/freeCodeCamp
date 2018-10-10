---
title: Extensible prime generator
id: 598ee8b91b410510ae82efef
challengeType: 5
videoUrl: ''
localeTitle: Расширяемый первичный генератор
---

## Description
<section id="description"><p> Напишите генератор простых чисел, чтобы он автоматически регулировался для генерации любого разумно высокого премьер. </p> Генератор должен иметь возможность: Показывать первые <b>n</b> простых чисел. Показывать простые числа в диапазоне. Показывать количество простых чисел в диапазоне. Показывать <b>n- <sup>е</sup></b> простое число. <p> Функция должна иметь два параметра. Первый получит <b>n</b> или диапазон в виде массива. Вторая будет получать логическое значение, которое указывает, возвращает ли функция числа простых чисел в виде массива или одного числа (числа простых чисел в диапазоне или <b>n- <sup>го</sup></b> числа). В соответствии с параметрами функция должна возвращать массив. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeGenerator</code> - функция.
    testString: 'assert(typeof primeGenerator === "function", "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> - функция.
    testString: 'assert.deepEqual(primeGenerator(20, true), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> - функция.
    testString: 'assert.deepEqual(primeGenerator([100, 150], true), [101, 103, 107, 109, 113, 127, 131, 137, 139, 149], "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> - функция.
    testString: 'assert.equal(primeGenerator([7700, 8000], false), 30, "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> - функция.
    testString: 'assert.equal(primeGenerator(10000, false), 104729, "<code>primeGenerator</code> is a function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeGenerator (num, showPrimes) {
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
