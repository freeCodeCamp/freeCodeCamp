---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
localeTitle: Используйте model.findById () для поиска в вашей базе данных по _id
challengeType: 2
---

## Description
<section id='description'> 
При сохранении документа mongodb автоматически добавляет поле _id и присваивает ему уникальный буквенно-цифровой ключ. Поиск по _id является чрезвычайно частой операцией, поэтому mongoose предоставляет для нее специальный метод. Найдите (только !!) человека, имеющего данный _id, используя Model.findById () -&gt; Person. Используйте аргумент функции personId в качестве ключа поиска. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Найти предмет по идентификатору должно получиться
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/find-by-id'').then(data => { assert.equal(data.name, ''test'', ''item.name is not what expected''); assert.equal(data.age, 0, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''none''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
