---
id: 587d7fb9367417b2b2512c12
title: Encadear auxiliares de consulta para restringir resultados de pesquisa
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

Se você não passar o callback como o último argumento para `Model.find()` (ou para outros métodos de pesquisa), a consulta não é executada. Você pode armazenar a consulta em uma variável para uso posterior. Esse tipo de objeto permite que você crie uma consulta usando a sintaxe de encadeamento. A pesquisa real do banco de dados é executada quando você finalmente encadear o método `.exec()`. Você sempre precisa passar seu callback para este último método. Existem muitos auxiliares de consulta. Aqui, usaremos os mais comuns.

# --instructions--

Modifique a função `queryChain` para que encontre pessoas que gostam do alimento especificado pela variável `foodToSearch`. Classifique-os por `name`, limite os resultados a dois documentos e oculte idade deles. Encadeie `.find()`, `.sort()`, `.limit()`, `.select()`e, então, `.exec()`. Passe a callback `done(err, data)` para `exec()`.

# --hints--

Você deve ter sucesso em encadear auxiliares de consulta

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/query-tools',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Pablo', age: 26, favoriteFoods: ['burrito', 'hot-dog'] },
      { name: 'Bob', age: 23, favoriteFoods: ['pizza', 'nachos'] },
      { name: 'Ashley', age: 32, favoriteFoods: ['steak', 'burrito'] },
      { name: 'Mario', age: 51, favoriteFoods: ['burrito', 'prosciutto'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data.length,
        2,
        'the data array length is not what expected'
      );
      assert.notProperty(
        data[0],
        'age',
        'The returned first item has too many properties'
      );
      assert.equal(
        data[0].name,
        'Ashley',
        'The returned first item name is not what expected'
      );
      assert.notProperty(
        data[1],
        'age',
        'The returned second item has too many properties'
      );
      assert.equal(
        data[1].name,
        'Mario',
        'The returned second item name is not what expected'
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
