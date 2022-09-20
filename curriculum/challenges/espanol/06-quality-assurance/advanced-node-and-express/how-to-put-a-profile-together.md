---
id: 5895f70ef9fc0f352b528e6b
title: Cómo elaborar un perfil
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Ahora que podemos asegurarnos de que el usuario que accede al `/profile` está autenticado, ¡podemos utilizar la información contenida en `req.user` en nuestra página!

Pasa un objeto que contenga la propiedad `username` y el valor de `req.user.username` como segundo argumento para el método render de la vista de perfil. Luego, ve a tu perfil `profile.pug` y agrega la siguiente línea debajo del elemento existente `h1` y al mismo nivel de indentación:

```pug
h2.center#welcome Welcome, #{username}!
```

Esto crea un elemento `h2` con la clase '`center`' e id '`welcome`' conteniendo el texto '`Welcome,`' seguido por el nombre de usuario.

Además, en `profile.pug`, añade un enlace que haga referencia a la ruta `/logout`, que alojará la lógica para des-autentificar a un usuario.

```pug
a(href='/logout') Logout
```

Envía tu página cuando creas que lo has hecho bien. Si te estás encontrando errores, puedes <a href="https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a" target="_blank" rel="noopener noreferrer nofollow">mirar el proyecto completado hasta este punto</a>.

# --hints--

Debes agregar correctamente una variable de renderizado Pug a /profile.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
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
