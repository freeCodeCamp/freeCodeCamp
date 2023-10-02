---
id: 587d7fb6367417b2b2512c09
title: Crea y guarda un registro de un modelo
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

En este desafío tendrás que crear y guardar un registro de un modelo.

# --instructions--

Dentro de la función `createAndSavePerson`, crea una instancia de documento usando el constructor del modelo `Person` que construiste antes. Pasa al constructor un objeto con los campos `name`, `age`y `favoriteFoods`. Sus tipos deben adaptarse a los del `personSchema`. Luego, llama al método `document.save()` en la instancia del documento devuelto. Pásale un callback usando la convención de Node. Este es un patrón común; todos los siguientes métodos CRUD toman una función de callback como este como el último argumento.

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

# --hints--

La creación y guardado de un elemento debe ser exitoso

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/create-and-save-person').then(
    (data) => {
      assert.isString(data.name, '"item.name" should be a String');
      assert.isNumber(data.age, '28', '"item.age" should be a Number');
      assert.isArray(
        data.favoriteFoods,
        '"item.favoriteFoods" should be an Array'
      );
      assert.equal(data.__v, 0, 'The db item should be not previously edited');
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
