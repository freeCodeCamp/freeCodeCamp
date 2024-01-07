---
id: 587d7fb7367417b2b2512c0c
title: Usa model.findOne() para devolver un único documento coincidente de tu base de datos
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` se comporta como `Model.find()`, pero solo devuelve un documento (no un arreglo), incluso si hay varios elementos. Es especialmente útil a la hora de buscar por propiedades que has declarado como únicas.

# --instructions--

Modifica la función `findOneByFood` para encontrar una sola persona que tenga cierta comida en los favoritos de la persona, usando `Model.findOne() -> Person`. Usa el argumento de función `food` como clave de búsqueda.

# --hints--

Encontrar un elemento por Id debe ser exitoso

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-by-food', {
    name: 'Gary',
    age: 46,
    favoriteFoods: ['chicken salad']
  }).then(
    (data) => {
      assert.equal(data.name, 'Gary', 'item.name is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['chicken salad'],
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
