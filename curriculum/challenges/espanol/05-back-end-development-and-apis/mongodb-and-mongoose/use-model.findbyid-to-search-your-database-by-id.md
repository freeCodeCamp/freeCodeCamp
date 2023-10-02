---
id: 587d7fb7367417b2b2512c0d
title: Usa model.findById() para buscar en tu base de datos por _id
challengeType: 2
forumTopicId: 301544
dashedName: use-model-findbyid-to-search-your-database-by-id
---

# --description--

Al guardar un documento, MongoDB añade automáticamente el campo `_id`, y lo establece como una clave alfanumérica única. Buscar por `_id` es una operación extremadamente frecuente, así que Mongoose proporciona un método dedicado para ello.

# --instructions--

Modifique el `findPersonById` para encontrar la única persona que tenga una determinada `_id`, usando `Model.findById() -> Person`. Utiliza el argumento de la función `personId` como clave de búsqueda.

# --hints--

Encontrar un elemento por Id debe ser exitoso

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
