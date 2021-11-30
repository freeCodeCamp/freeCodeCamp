---
id: 58965611f9fc0f352b528e6c
title: Cierra la sesión de un usuario
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

Crear la lógica de cierre de sesión es fácil. La ruta sólo debe desautentificar al usuario y redirigir a la página principal en lugar de mostrar cualquier vista.

En passport, desautentificar un usuario es tan fácil como llamar a `req.logout();` antes de redireccionar.

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

Puede que hayas notado que no estamos manejando páginas faltantes (404). La forma común de manejar esto en Node es con el siguiente middleware. Sigue adelante y añade esto después de todas tus rutas:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b).

# --hints--

`req.Logout` debe ser llamado en la ruta `/logout`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /req.logout/gi,
        'You should be calling req.logout() in your /logout route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Cerrar sesión debe redirigir a la página de inicio.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/logout').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'When a user logs out they should be redirected to the homepage'
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
