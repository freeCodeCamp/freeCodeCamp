---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
challengeType: 2
forumTopicId: 301538
localeTitle: Удалить много документов с model.remove ()
---

## Description
<section id='description'>
Model.remove () полезна для удаления всех документов, соответствующих заданным критериям. Удалите всех людей с именем «Мэри», используя Model.remove (). Передайте его в документ запроса с установленным полем «имя» и, конечно, с обратным вызовом. 
Примечание: Model.remove () возвращает не удаленный документ, а объект JSON, содержащий результат операции и количество затронутых элементов. Не забудьте передать его обратному вызову done (), так как мы используем его в тестах.
</section>

## Instructions
<section id='instructions'>
Delete all the people whose name is “Mary”, using <code>Model.remove()</code>. Pass it to a query document with the <code>name</code> field set, and of course a callback.
<strong>Note:</strong> The <code>Model.remove()</code> doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the <code>done()</code> callback, since we use it in tests.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deleting many items at once should succeed
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/remove-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Mary'', age: 16, favoriteFoods: [''lollipop'']}, {name: ''Mary'', age: 21, favoriteFoods: [''steak'']}])}).then(data => { assert.isTrue(!!data.ok, ''The mongo stats are not what expected''); assert.equal(data.n, 2, ''The number of items affected is not what expected''); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
