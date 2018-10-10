---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
videoUrl: ''
localeTitle: Список покупок
---

## Description
<section id="description"> Создайте список покупок в переменной <code>myList</code> . Список должен быть многомерным массивом, содержащим несколько подмассивов. Первый элемент в каждом под-массиве должен содержать строку с именем элемента. Второй элемент должен быть числом, представляющим количество, т. Е. <code>[&quot;Chocolate Bar&quot;, 15]</code> В списке должно быть не менее 5 под-массивов. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> должен быть массивом
    testString: 'assert(isArray, "<code>myList</code> should be an array");'
  - text: Первыми элементами в каждом из ваших подматриц должны быть строки
    testString: 'assert(hasString, "The first elements in each of your sub-arrays must all be strings");'
  - text: Все элементы в каждом из ваших подматриц должны быть числами
    testString: 'assert(hasNumber, "The second elements in each of your sub-arrays must all be numbers");'
  - text: В вашем списке должно быть не менее 5 элементов
    testString: 'assert(count > 4, "You must have at least 5 items in your list");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myList = [];

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
