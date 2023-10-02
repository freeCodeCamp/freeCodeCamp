---
id: 587d7fb9367417b2b2512c12
title: Auxiliares de consulta de búsqueda en cadena para restringir los resultados de búsqueda
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

Si no pasas la función callback como el último argumento para `Model.find()` (o hacia otro método de búsqueda), la consulta no se ejecuta. Puedes almacenar la consulta en una variable para su posterior uso. Este tipo de objeto te permite construir la consulta usando sintaxis de encadenamiento. La búsqueda real en la base de datos se ejecuta cuando finalmente encadena el método `.exec()`. Siempre necesitas pasar tu función callback a este último método. Hay muchas ayudas de consulta, aquí usaremos el método comúnmente usado.

# --instructions--

Modifica la función `queryChain` para encontrar a gente que le gusta la comida especificada por la variable denominada `foodToSearch`. Ordénalos por `name`, limita los resultados para dos documentos, y oculta su edad. Encadena `.find()`, `.sort()`, `.limit()`, `.select()`, y entonces `.exec()`. Pasa la función callback `done(err, data)` a `exec()`.

# --hints--

Las ayudas de consulta de encadenamiento deben tener éxito

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
