---
id: 587d7fb8367417b2b2512c0f
title: Realiza nuevas actualizaciones en un documento usando model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

Las versiones recientes de Mongoose tienen métodos para simplificar la actualización de documentos. Algunas características más avanzadas (por ejemplo, pre/post hooks, validación) se comportan de forma diferente con este enfoque, por lo que el método clásico sigue siendo útil en muchas situaciones. `findByIdAndUpdate()` puede ser usado al buscar por id.

# --instructions--

Modifica la función `findAndUpdate` para encontrar a una persona por `Name` y establece la edad de la persona a `20`. Utiliza el parámetro de la función `personName` como clave de búsqueda.

**Nota:** Debes devolver el documento actualizado. Para hacer eso, necesitas pasar el documento de opciones `{ new: true }` como tercer argumento a `findOneAndUpdate()`. Por defecto, estos métodos devuelven el objeto no modificado.

# --hints--

findOneAndUpdate un elemento debe ser exitoso

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-update', {
    name: 'Dorian Gray',
    age: 35,
    favoriteFoods: ['unknown']
  }).then(
    (data) => {
      assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected');
      assert.equal(data.age, 20, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['unknown'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(
        data.__v,
        0,
        'findOneAndUpdate does not increment version by design!'
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
