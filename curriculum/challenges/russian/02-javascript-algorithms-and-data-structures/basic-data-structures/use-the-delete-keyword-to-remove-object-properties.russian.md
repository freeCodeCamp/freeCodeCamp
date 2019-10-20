---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
forumTopicId: 301168
localeTitle: Использование ключа удаления для удаления свойств объекта
---

## Description
<section id='description'>
Теперь вы знаете, какие объекты и их основные функции и преимущества. Короче говоря, это хранилища с ключевыми значениями, которые обеспечивают гибкий, интуитивно понятный способ структурирования данных <strong><em>и</em></strong> обеспечивают очень быстрое время поиска. Во всех остальных задачах мы опишем несколько общих операций, которые вы можете выполнять на объектах, чтобы вы могли комфортно применять эти полезные структуры данных в своих программах. В более ранних задачах мы добавили и модифицировали пары ключ-значение объекта. Здесь мы увидим, как мы можем <em>удалить</em> пару ключ-значение из объекта. Давайте вернемся к примеру нашего <code>foods</code> последний раз. Если мы хотим удалить ключ <code>apples</code> , мы можем удалить его, используя ключевое слово <code>delete</code> : <blockquote> удалять пищу. </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте ключевое слово delete для удаления <code>oranges</code> , <code>plums</code> и <code>strawberries</code> ключей из объекта <code>foods</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The <code>foods</code> object only has three keys: <code>apples</code>, <code>grapes</code>, and <code>bananas</code>'
    testString: assert(!foods.hasOwnProperty('oranges') && !foods.hasOwnProperty('plums') && !foods.hasOwnProperty('strawberries') && Object.keys(foods).length === 3);
  - text: The <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys are removed using <code>delete</code>
    testString: assert(code.search(/oranges:/) !== -1 && code.search(/plums:/) !== -1 && code.search(/strawberries:/) !== -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```

</section>
