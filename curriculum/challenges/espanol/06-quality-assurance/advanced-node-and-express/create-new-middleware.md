---
id: 5895f70df9fc0f352b528e6a
title: Crea nuevo Middleware
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

Tal como está, cualquier usuario puede ir a `/profile` si se ha autentificado o no, escribiendo la url. Queremos evitar esto, comprobando si el usuario está autentificado primero antes de mostrar la página de perfil. Este es el ejemplo perfecto de cuándo crear un middleware.

El desafío aquí es crear la función middleware `ensureAuthenticated(req, res, next)`, el cual comprobará si un usuario está autentificado llamando al método `isAuthenticated` del pasaporte en la `request` que, a su vez, comprueba si `req.user` está definido. Si lo es, entonces se debe llamar a `next()`, de lo contrario, podemos simplemente responder a la solicitud con una redirección a nuestra página de inicio para iniciar sesión. Una implementación de este middleware es:

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Ahora añade *ensureAuthenticated* como middleware a la petición de la página de perfil antes del argumento de la petición get que contiene la función que renderiza la página.

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes consultar el <a href="https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959" target="_blank" rel="noopener noreferrer nofollow">proyecto completado hasta este momento</a>.

# --hints--

El Middleware ensureAuthenticated debe ser implementado y en nuestra ruta /profile.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Una petición Get a /profile debe redirigir correctamente a / ya que no estamos autentificados.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
