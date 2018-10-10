---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
videoUrl: ''
localeTitle: 'Используйте каждый метод для проверки того, что каждый элемент в массиве соответствует критерию'
---

## Description
<section id="description"> <code>every</code> метод работает с массивами, чтобы проверить, прошел ли <em>каждый</em> элемент конкретного теста. Он возвращает логическое значение - <code>true</code> если все значения соответствуют критериям, <code>false</code> если нет. Например, следующий код будет проверять, если каждый элемент массива <code>numbers</code> меньше 10: <blockquote> var numbers = [1, 5, 8, 0, 10, 11]; <br> numbers.every (function (currentValue) { <br> return currentValue &lt;10; <br> }); <br> // Возвращает false </blockquote></section>

## Instructions
<section id="instructions"> Используйте <code>every</code> метод внутри функции <code>checkPositive</code> чтобы проверить, является ли каждый элемент в <code>arr</code> положительным. Функция должна возвращать логическое значение. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать <code>every</code> метод.
    testString: 'assert(code.match(/\.every/g), "Your code should use the <code>every</code> method.");'
  - text: '<code>checkPositive([1, 2, 3, -4, 5])</code> должен возвращать <code>false</code> .'
    testString: 'assert(!checkPositive([1, 2, 3, -4, 5]), "<code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>false</code>.");'
  - text: '<code>checkPositive([1, 2, 3, 4, 5])</code> должен возвращать <code>true</code> .'
    testString: 'assert(checkPositive([1, 2, 3, 4, 5]), "<code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.");'
  - text: '<code>checkPositive([1, -2, 3, -4, 5])</code> должен возвращать <code>false</code> .'
    testString: 'assert(!checkPositive([1, -2, 3, -4, 5]), "<code>checkPositive([1, -2, 3, -4, 5])</code> should return <code>false</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkPositive(arr) {
  // Add your code below this line


  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
