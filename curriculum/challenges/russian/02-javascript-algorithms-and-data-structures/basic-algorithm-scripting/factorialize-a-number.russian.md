---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Факториализация номера
---

## Description
<section id="description"> Верните факториал предоставленного целого числа. Если целое число представлено буквой n, факториал является произведением всех положительных целых чисел, меньших или равных n. Факториалы часто представлены сокращенной нотой <code>n!</code> Например: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code> В функцию будут <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code> только целые числа, большие или равные нулю. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factorialize(5)</code> должен возвращать число.
    testString: 'assert(typeof factorialize(5) === "number", "<code>factorialize(5)</code> should return a number.");'
  - text: <code>factorialize(5)</code> должен вернуть 120.
    testString: 'assert(factorialize(5) === 120, "<code>factorialize(5)</code> should return 120.");'
  - text: <code>factorialize(10)</code> должен вернуть 3628800.
    testString: 'assert(factorialize(10) === 3628800, "<code>factorialize(10)</code> should return 3628800.");'
  - text: <code>factorialize(20)</code> должен возвращать 2432902008176640000.
    testString: 'assert(factorialize(20) === 2432902008176640000, "<code>factorialize(20)</code> should return 2432902008176640000.");'
  - text: <code>factorialize(0)</code> должен возвращать 1.
    testString: 'assert(factorialize(0) === 1, "<code>factorialize(0)</code> should return 1.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factorialize(num) {
  return num;
}

factorialize(5);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
