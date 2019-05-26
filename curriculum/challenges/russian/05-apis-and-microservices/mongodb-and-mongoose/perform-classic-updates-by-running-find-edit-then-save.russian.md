---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
localeTitle: «Выполните классические обновления, запустив Find, Edit, затем Save»
challengeType: 2
---

## Description
<section id='description'> 
В старые добрые времена это было то, что вам нужно было сделать, если вы хотите отредактировать документ и иметь возможность каким-либо образом его использовать, например, отправив его обратно в ответе сервера. У Mongoose есть специальный метод обновления: Model.update (). Он привязан к низкоуровневому драйверу монго. Он может массово редактировать многие документы, соответствующие определенным критериям, но он не отправляет обратно обновленный документ, только сообщение о статусе. Кроме того, это затрудняет проверку модели, потому что она просто вызывает драйвер Монго. 
Найдите человека по _id (используйте любой из вышеперечисленных методов) с параметром personId в качестве ключа поиска. Добавьте «гамбургер» в список ее любимых продуктов (вы можете использовать Array.push ()). Затем - внутри обратного вызова find - save () обновленный Person. 
[*] Подсказка: это может быть непросто, если в вашей Схеме вы объявили FavoritesFoods как Массив без указания типа (например, [String]). В этом случае по умолчанию в файле favourFoods используется смешанный тип, и вы должны вручную пометить его как отредактированный с помощью document.markModified ('edited-field'). (http://mongoosejs.com/docs/schematypes.html - # Смешанный) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Поиск-редактирование-обновление элемента должно завершиться успешно
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-edit-save'', {name:''Poldo'', age: 40, favoriteFoods:[''spaghetti'']}).then(data => { assert.equal(data.name, ''Poldo'', ''item.name is not what expected''); assert.equal(data.age, 40, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''spaghetti'', ''hamburger''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 1, ''The item should be previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
