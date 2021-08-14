---
id: 587d7fb8367417b2b2512c10
title: Excluir um documento usando model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

`findByIdAndRemove` e `findOneAndRemove` são como os métodos da atualização anterior. Eles passam o documento removido para a db. Como de costume, use o argumento da função `personId` como chave de pesquisa.

# --instructions--

Modifique a função `removeById` para excluir uma pessoa pelo `_id` da pessoa. Você deve usar um dos métodos `findByIdAndRemove()` ou `findOneAndRemove()`.

# --hints--

A exclusão de um item deve ser bem-sucedida

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/remove-one-person', {
    name: 'Jason Bourne',
    age: 36,
    favoriteFoods: ['apples']
  }).then(
    (data) => {
      assert.equal(data.name, 'Jason Bourne', 'item.name is not what expected');
      assert.equal(data.age, 36, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['apples'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0);
      assert.equal(data.count, 0, 'the db items count is not what expected');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
