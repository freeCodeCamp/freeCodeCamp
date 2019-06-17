---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
localeTitle: Используйте model.findOne (), чтобы вернуть один соответствующий документ из вашей базы данных
challengeType: 2
---

## Description
<section id='description'> 
Model.findOne () ведет себя как .find (), но возвращает только один документ (не массив), даже если есть несколько элементов. Это особенно полезно при поиске по свойствам, которые вы объявили уникальными. Найдите только одного человека, у которого есть определенная еда в избранном, используя Model.findOne () -&gt; Person. Используйте аргумент функции food в качестве ключа поиска. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Найти один предмет должен быть успешным
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-by-food'', {name: ''Gary'', age: 46, favoriteFoods: [''chicken salad'']}).then(data => { assert.equal(data.name, ''Gary'', ''item.name is not what expected''); assert.deepEqual(data.favoriteFoods, [''chicken salad''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
