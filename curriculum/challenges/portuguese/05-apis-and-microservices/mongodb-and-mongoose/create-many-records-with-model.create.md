---
id: 587d7fb7367417b2b2512c0a
title: Criar muitos registros com model.create()
challengeType: 2
forumTopicId: 301537
dashedName: create-many-records-with-model-create
---

# --description--

Às vezes, você precisa criar muitas instâncias dos seus modelos. Por exemplo, ao fazer o seeding de um banco de dados com os dados iniciais. `Model.create()` recebe um array de objetos como `[{name: 'John', ...}, {...}, ...]` como o primeiro argumento e o salva no banco de dados.

# --instructions--

Modifique a função `createManyPeople` para criar muitas pessoas usando `Model.create()` com o argumento `arrayOfPeople`.

**Observação:** você pode reutilizar o modelo que você instanciou no exercício anterior.

# --hints--

Você deve ter sucesso na criação de muitos itens de banco de dados ao mesmo tempo

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/create-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'John', age: 24, favoriteFoods: ['pizza', 'salad'] },
      { name: 'Mary', age: 21, favoriteFoods: ['onions', 'chicken'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an array');
      assert.equal(
        data.length,
        2,
        'the response does not contain the expected number of items'
      );
      assert.equal(data[0].name, 'John', 'The first item is not correct');
      assert.equal(
        data[0].__v,
        0,
        'The first item should be not previously edited'
      );
      assert.equal(data[1].name, 'Mary', 'The second item is not correct');
      assert.equal(
        data[1].__v,
        0,
        'The second item should be not previously edited'
      );
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
