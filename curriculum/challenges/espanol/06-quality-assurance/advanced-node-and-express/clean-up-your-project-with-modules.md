---
id: 589690e6f9fc0f352b528e6e
title: Limpia tu proyecto con módulos
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

Ahora mismo, todo lo que tienes está en tu archivo `server.js`. Esto puede dar lugar a un código difícil de gestionar y poco ampliable. Crea 2 nuevos archivos: `routes.js` y `auth.js`

Ambos deben comenzar con el siguiente código:

```js
module.exports = function (app, myDataBase) {

}
```

Ahora, en la parte superior de tu archivo de servidor, requiere estos archivos así: `const routes = require('./routes.js');` Justo después de establecer una conexión exitosa con la base de datos, instancia cada uno de ellos así: `routes(app, myDataBase)`

Finalmente, toma todas las rutas de tu servidor y pégalas en tus nuevos archivos, y elimínalas de tu archivo del servidor. También toma la función `ensureAuthenticated` ya que fue específicamente creada para enrutamiento. Ahora, tendrás que agregar correctamente las dependencias en las que se utilizan, como `const passport = require('passport');`, en la parte superior, encima de la línea de exportación en tu archivo `routes.js`.

Sigue agregándolos hasta que no existan más errores, y tu archivo de servidor ya no tenga ninguna ruta ¡(**excepto la ruta en el bloque catch**)!

Ahora haz lo mismo en tu archivo auth.js con todas las cosas relacionadas con la autenticación como la serialización y la configuración de la estrategia local y bórralas de tu archivo del servidor. Asegúrate de agregar las dependencias y llamar a `auth(app, myDataBase)` en el servidor en el mismo lugar.

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar un ejemplo del proyecto completado [aquí](https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92).

# --hints--

Los módulos deben estar presentes.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
        'You should have required your new files'
      );
      assert.match(
        data,
        /client\s*\.db[^]*routes/gi,
        'Your new modules should be called after your connection to the database'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
