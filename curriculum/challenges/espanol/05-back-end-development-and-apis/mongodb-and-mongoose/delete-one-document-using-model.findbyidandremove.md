---
id: 587d7fb8367417b2b2512c10
title: Elimina un documento usando el método model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

`findByIdAndRemove` y `findOneAndRemove` son como los métodos de actualización anteriores. Éstos pasan el documento retirado a la base de datos. Como siempre, utiliza el argumento de la función `personId` como la clave de búsqueda.

# --instructions--

Modifica la función `removeById` para eliminar una persona por el `_id` de la persona. Debes usar uno de los métodos `findByIdAndRemove()` o `findOneAndRemove()`.

# --hints--

La eliminación de un elemento debe ser exitosa

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
