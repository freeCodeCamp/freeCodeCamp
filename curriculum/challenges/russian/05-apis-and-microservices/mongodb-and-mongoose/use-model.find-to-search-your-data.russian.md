---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
localeTitle: Используйте model.find () для поиска в вашей базе данных
challengeType: 2
---

## Description
<section id='description'>
Найдите всех людей с данным именем, используя Model.find () -&gt; [Person] 
В простейшем случае Model.find () принимает документ запроса (объект JSON) в качестве первого аргумента, а затем обратный вызов. Возвращает массив совпадений. Он поддерживает чрезвычайно широкий спектр параметров поиска. Проверьте это в документах. Используйте аргумент функции personName в качестве ключа поиска.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Найти все элементы, соответствующие критериям, должны быть успешными
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-all-by-name'', {name: ''r@nd0mN4m3'', age: 24, favoriteFoods: [''pizza'']}).then(data => { assert.isArray(data, ''the response should be an Array'');  assert.equal(data[0].name, ''r@nd0mN4m3'', ''item.name is not what expected''); assert.equal(data[0].__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'
```

</section>
