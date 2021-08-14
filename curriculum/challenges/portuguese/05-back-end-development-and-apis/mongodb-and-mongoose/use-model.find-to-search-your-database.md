---
id: 587d7fb7367417b2b2512c0b
title: Usar model.find() para procurar no seu banco de dados
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

Em seu uso mais simples, `Model.find()` aceita um documento de consulta (um objeto JSON) como o primeiro argumento e depois um callback. Ele retorna um array de correspondências. Ele dá suporte a uma variedade extremamente ampla de opções de pesquisa. Leia mais na documentação.

# --instructions--

Modifique a função `findPeopleByName` para encontrar todas as pessoas que tenham um determinado nome, usando <code>Model.find() -\> [Person]</code>

Use o argumento `personName` da função como chave de pesquisa.

# --hints--

Localize todos os itens correspondentes a um critério com sucesso

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-all-by-name', {
    name: 'r@nd0mN4m3',
    age: 24,
    favoriteFoods: ['pizza']
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data[0].name,
        'r@nd0mN4m3',
        'item.name is not what expected'
      );
      assert.equal(data[0].__v, 0, 'The item should be not previously edited');
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
