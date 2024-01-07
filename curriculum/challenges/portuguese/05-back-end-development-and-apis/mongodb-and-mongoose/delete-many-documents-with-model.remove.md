---
id: 587d7fb8367417b2b2512c11
title: Excluir vários documentos com model.remove()
challengeType: 2
forumTopicId: 301538
dashedName: delete-many-documents-with-model-remove
---

# --description--

`Model.remove()` é útil para excluir todos os documentos que correspondem a determinados critérios.

# --instructions--

Modifique a função `removeManyPeople` para excluir todas as pessoas cujo nome esteja dentro da variável `nameToRemove`, usando `Model.remove()`. Passe-a a um documento de consulta com o campo `name` definido e uma função de callback.

**Observação:** `Model.remove()` não retorna o documento excluído, mas um objeto JSON que contém o resultado da operação e o número de itens afetado. Não se esqueça de passar o objeto para a função de callback `done()`, já que a usamos nos testes.

# --hints--

Você deve ter sucesso na exclusão de vários itens

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/remove-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Mary', age: 16, favoriteFoods: ['lollipop'] },
      { name: 'Mary', age: 21, favoriteFoods: ['steak'] }
    ])
  }).then(
    (data) => {
      assert.isTrue(!!data.ok, 'The mongo stats are not what expected');
      assert.equal(
        data.n,
        2,
        'The number of items affected is not what expected'
      );
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
