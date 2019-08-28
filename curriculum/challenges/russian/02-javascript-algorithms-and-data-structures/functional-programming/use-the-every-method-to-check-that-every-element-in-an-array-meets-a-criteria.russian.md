---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
forumTopicId: 301312
localeTitle: Используйте каждый метод для проверки того, что каждый элемент в массиве соответствует критерию
---

## Description
<section id='description'>
<code>every</code> метод работает с массивами, чтобы проверить, прошел ли <em>каждый</em> элемент конкретного теста. Он возвращает логическое значение - <code>true</code> если все значения соответствуют критериям, <code>false</code> если нет. Например, следующий код будет проверять, если каждый элемент массива <code>numbers</code> меньше 10: <blockquote> var numbers = [1, 5, 8, 0, 10, 11]; <br> numbers.every (function (currentValue) { <br> return currentValue &lt;10; <br> }); <br> // Возвращает false </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте <code>every</code> метод внутри функции <code>checkPositive</code> чтобы проверить, является ли каждый элемент в <code>arr</code> положительным. Функция должна возвращать логическое значение.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>every</code> method.
    testString: assert(code.match(/\.every/g));
  - text: <code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>false</code>.
    testString: assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
  - text: <code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.
    testString: assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
  - text: <code>checkPositive([1, -2, 3, -4, 5])</code> should return <code>false</code>.
    testString: assert.isFalse(checkPositive([1, -2, 3, -4, 5]));

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
function checkPositive(arr) {
  // Add your code below this line
  return arr.every(num => num > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</section>
