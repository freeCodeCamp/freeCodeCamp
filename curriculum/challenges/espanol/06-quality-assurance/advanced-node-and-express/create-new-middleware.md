---
id: 5895f70df9fc0f352b528e6a
title: Crea nuevo Middleware
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

Tal y como está, cualquier usuario puede simplemente ir a `/profile` se haya autenticado o no, escribiendo la url. Para evitar esto, comprueba si el usuario está autenticado antes de mostrar la página de perfil. Este es el ejemplo perfecto de cuándo crear un middleware.

El reto aquí es crear la función de middleware `ensureAuthenticated(req, res, next)`, que comprobará si un usuario está autenticado llamando al método `isAuthenticated` de Passport sobre el `request` que comprueba si `req.user` está definido. Si lo es, entonces `next()` debe ser llamado. De lo contrario, puedes responder a la solicitud con una redirección a tu página de inicio para iniciar sesión.

Una implementación de este middleware es:

```javascript
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Crea la función middleware anterior y, luego, pasa `ensureAuthenticated` como middleware a las solicitudes para la página de perfil antes del argumento a la solicitud GET:

```javascript
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render('profile');
 });
```

Envía tu página cuando creas que la has hecho bien. Si te encuentras con errores, puedes <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#create-new-middleware-8" target="_blank" rel="noopener noreferrer nofollow">consultar el proyecto completado hasta este momento</a>.

# --hints--

El middleware `ensureAuthenticated` debe ser implementado y adjunto a la ruta `/profile`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /ensureAuthenticated[^]*req.isAuthenticated/,
    'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
  );
  assert.match(
    data,
    /profile[^]*get[^]*ensureAuthenticated/,
    'Your ensureAuthenticated middleware should be attached to the /profile route'
  );
}
```

Una petición GET no autenticada a `/profile` debe redirigir correctamente a `/`.

```js
async (getUserInput) => {
  const url = new URL("/profile", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/,
    'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
