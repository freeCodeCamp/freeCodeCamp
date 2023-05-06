---
id: 58965611f9fc0f352b528e6c
title: Cierra la sesión de un usuario
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

Crear la lógica de cierre de sesión es fácil. La ruta simplemente debe desautenticar el usuario y redirigir a la página de inicio, en lugar de renderizar ninguna vista.

En passport, desautenticar un usuario es tan sencillo como llamar a `req.logout()` antes de redireccionar. Añade la ruta `/logout` que haga lo siguiente:

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

Seguramente habrás observado que no estamos gestionando páginas no encontradas (404). La forma común de manejar esto en Node es con el siguiente middleware. Sigue adelante y añade esto después de todas tus rutas:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Envía tu página cuando creas que lo has hecho bien. Si tienes dudas o se producen errores, <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#logging-a-user-out-10" target="_blank" rel="noopener noreferrer nofollow">aquí puedes comprobar el proyecto completado hasta este punto</a>.

# --hints--

`req.logout()` debe ser llamado en la ruta `/logout`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /req.logout/gi,
    'You should be calling req.logout() in your /logout route'
  );
}
```

`/logout` debe redireccionar a la página de inicio.

```js
async (getUserInput) => {
  const url = new URL("/logout", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/gi,
    'When a user logs out they should be redirected to the homepage'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
