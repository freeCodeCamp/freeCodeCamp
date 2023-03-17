---
id: 587d7fb6367417b2b2512c07
title: Crea un modelo
challengeType: 2
forumTopicId: 301535
dashedName: create-a-model
---

# --description--

**C**RUD Parte 1: CREATE (Crear)

En primer lugar, necesitamos un esquema. Cada esquema asigna a una colección de MongoDB. Define la forma de los documentos dentro de esa colección. Los esquemas son bloques de construcción para los modelos. Pueden ser anidados para crear modelos complejos, pero en este caso las cosas serán sencillas. Un modelo te permite crear instancias de tus objetos, llamados documentos.

Replit es un servidor real, y en los servidores reales, las interacciones con la base de datos ocurren en funciones de manejo. Estas funciones se ejecutan cuando ocurre algún evento (por ejemplo, alguien golpea un endpoint en tu API). Seguiremos el mismo enfoque en estos ejercicios. La función `done()` es un callback que nos dice que podemos proceder después de completar una operación asincrónica como insertar, buscar, actualizar o eliminar. Sigue la convención de Node, y debe ser llamado como `done(null, data)` en caso de éxito, o `done(err)` en caso de error.

Advertencia: ¡Al interactuar con servicios remotos, pueden ocurrir errores!

```js
/* Example */

const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```

# --instructions--

Create a person schema called `personSchema` with the following shape:

* A required `name` field of type `String`
* An `age` field of type `Number`
* A `favoriteFoods` field of type `[String]`

Usa los tipos básicos de esquemas de Mongoose. Si quieres también puedes añadir más campos, utilizar validadores sencillos como required o unique, y establecer valores por defecto. Mira nuestro <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" target="_blank" rel="noopener noreferrer nofollow">artículo sobre Mongoose </a>.

Now, create a model from the `personSchema` and assign it to the existing variable `Person`.

# --hints--

La creación de una instancia a partir de un esquema mongoose debe ser exitosa

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/mongoose-model', {
    name: 'Mike',
    age: 28,
    favoriteFoods: ['pizza', 'cheese']
  }).then(
    (data) => {
      assert.equal(data.name, 'Mike', '"model.name" is not what expected');
      assert.equal(data.age, '28', '"model.age" is not what expected');
      assert.isArray(
        data.favoriteFoods,
        '"model.favoriteFoods" is not an Array'
      );
      assert.include(
        data.favoriteFoods,
        'pizza',
        '"model.favoriteFoods" does not include the expected items'
      );
      assert.include(
        data.favoriteFoods,
        'cheese',
        '"model.favoriteFoods" does not include the expected items'
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
