---
id: 587d7fb8367417b2b2512c11
title: Elimina muchos documentos con model.remove()
challengeType: 2
forumTopicId: 301538
dashedName: delete-many-documents-with-model-remove
---

# --description--

`Model.remove()` es útil para eliminar todos los documentos que coincidan con los criterios dados.

# --instructions--

Modifica la función `removeManyPeople` para eliminar a todas las personas cuyo nombre esté dentro de la variable `nameToRemove`, usando `Model.remove()`. Pásalo a un documento de consulta con el campo `name` establecido, y un callback.

**Nota:** El `Model.remove()` no devuelve el documento eliminado, sino un objeto JSON que contiene el resultado de la operación, y el número de elementos afectados. No olvides pasarlo al callback `done()`, ya que lo usamos en las pruebas.

# --hints--

Eliminar muchos elementos a la vez debe ser exitoso

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
