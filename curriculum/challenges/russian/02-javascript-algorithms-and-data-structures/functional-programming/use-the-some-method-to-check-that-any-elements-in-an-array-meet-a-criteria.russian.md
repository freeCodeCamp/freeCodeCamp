---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
forumTopicId: 301314
localeTitle: Используйте некоторый метод для проверки того, что любые элементы в массиве соответствуют критериям
---

## Description
<section id='description'>
Метод <code>some</code> работает с массивами, чтобы проверить проходит ли <em>какой-либо</em> элемент определенный тест. Он возвращает логическое значение - <code>true</code> если любое из значений соответствует критерию, <code>false</code> если нет.
Например, следующий код будет проверять, является ли какой-либо элемент в массиве <code>чисел</code> значением меньше 10:

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
```

</section>

## Instructions
<section id='instructions'>
Используйте метод <code>some</code> внутри функции <code>checkPositive</code>, чтобы проверить является ли какой-либо из элементов в <code>arr</code> положительным. Функция должна вернуть логическое значение.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>some</code> method.
    testString: assert(code.match(/\.some/g));
  - text: <code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>true</code>.
    testString: assert(checkPositive([1, 2, 3, -4, 5]));
  - text: <code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.
    testString: assert(checkPositive([1, 2, 3, 4, 5]));
  - text: <code>checkPositive([-1, -2, -3, -4, -5])</code> should return <code>false</code>.
    testString: assert(!checkPositive([-1, -2, -3, -4, -5]));

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
  return arr.some(elem => elem > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</section>
