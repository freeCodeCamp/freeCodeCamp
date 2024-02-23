---
id: 587d7fb7367417b2b2512c0d
title: Usar model.findById() para procurar no seu banco de dados por _id
challengeType: 2
forumTopicId: 301544
dashedName: use-model-findbyid-to-search-your-database-by-id
---

# --description--

Ao salvar um documento, o MongoDB adiciona automaticamente o campo `_id`, e define-o como uma chave alfanumérica única. Procurar por `_id` é uma operação extremamente frequente, então o Mongoose fornece um método dedicado para isso.

# --instructions--

Modifique `findPersonById` para encontrar a única pessoa com um `_id` dado, usando `Model.findById() -> Person`. Use o argumento `personId` da função como chave de pesquisa.

# --hints--

Você deve ter sucesso em encontrar um item por Id

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/find-by-id').then(
    (data) => {
      assert.equal(data.name, 'test', 'item.name is not what expected');
      assert.equal(data.age, 0, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['none'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0, 'The item should be not previously edited');
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
