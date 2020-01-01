---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
challengeType: 2
forumTopicId: 301533
localeTitle: Помощники поискового запроса цепочки сужают результаты поиска
---

## Description
<section id='description'>
Если вы не передадите обратный вызов в качестве последнего аргумента для Model.find()(или для других методов поиска), запрос не будет выполнен. Вы можете сохранить запрос в переменной для дальнейшего использования. Этот тип объекта позволяет создавать запрос с использованием синтаксиса цепочки. Фактический поиск в БД выполняется, когда вы, наконец, связываете метод .exec(). Передайте обратный вызов этому последнему методу. Есть много помощников запросов, здесь мы будем использовать самые «известные». 
Найди людей которые любят «буррито». Сортируйте их по имени, ограничьте результаты двумя документами и скройте их возраст. Цепочка .find (), .sort (), .limit (), .select (), а затем .exec (). Передайте обратный вызов done (err, data) в exec ().
</section>

## Instructions
<section id='instructions'>
Найди людей которые любят <code>burrito</code>. Сортируйте их по имени, ограничьте результаты двумя документами и скройте их возраст. Цепочка <code>.find()</code>, <code>.sort()</code>, <code>.limit()</code>, <code>.select()</code>, а затем <code>.exec()</code>. Передайте обратный вызов <code>done(err, data)</code> в <code>exec()</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Помощники цепочки запросов должны быть успешными
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/query-tools'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Pablo'', age: 26, favoriteFoods: [''burrito'', ''hot-dog'']}, {name: ''Bob'', age: 23, favoriteFoods: [''pizza'', ''nachos'']}, {name: ''Ashley'', age: 32, favoriteFoods: [''steak'', ''burrito'']}, {name: ''Mario'', age: 51, favoriteFoods: [''burrito'', ''prosciutto'']} ]) }).then(data => { assert.isArray(data, ''the response should be an Array''); assert.equal(data.length, 2, ''the data array length is not what expected''); assert.notProperty(data[0], ''age'', ''The returned first item has too many properties''); assert.equal(data[0].name, ''Ashley'', ''The returned first item name is not what expected''); assert.notProperty(data[1], ''age'', ''The returned second item has too many properties''); assert.equal(data[1].name, ''Mario'', ''The returned second item name is not what expected'');}, xhr => { throw new Error(xhr.responseText); })'

```

</section>
