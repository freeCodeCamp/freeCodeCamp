---
id: 587d7fb7367417b2b2512c0b
title: Usa model.find() para buscar en tu base de datos
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

En su uso más simple, `Model.find()` acepta un documento de consulta (un objeto JSON) como el primer argumento, luego un callback. Devuelve un arreglo de coincidencias. Soporta una amplia gama de opciones de búsqueda. Lee más en la documentación.

# --instructions--

Modifica la función `findPeopleByName` para encontrar a todas las personas que tengan un nombre dado, usando <code>Model.find() -\> [Person]</code>

Utiliza el argumento de la función `personName` como clave de búsqueda.

# --hints--

Encontrar todos los elementos correspondientes a un criterio debe ser exitoso

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
