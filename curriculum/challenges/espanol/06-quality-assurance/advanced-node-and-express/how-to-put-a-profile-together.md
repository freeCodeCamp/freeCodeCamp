---
id: 5895f70ef9fc0f352b528e6b
title: Cómo elaborar un perfil
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Una vez asegurado que el usuario que accede a `/profile` está autenticado, se puede aprovechar la información contenida en `req.user` y hacer uso de ella en la página que estamos construyendo.

Pasa un objeto con la propiedad `username` y valor `req.user.username` como segundo argumento al método `render` de la vista profile.

Después, en la vista `profile.pug` añade la siguiente línea debajo del elemento `h1`, con el mismo nivel de indentación:

```pug
h2.center#welcome Welcome, #{username}!
```

Esto crea un elemento `h2` con la clase `center` e id `welcome` que contiene el texto`Welcome,` seguido del nombre de usuario.

Añade, también en `profile.pug`, un enlace a la ruta `/logout`, la cual albergará la lógica para desautenticar un usuario:

```pug
a(href='/logout') Logout
```

Envía tu página cuando creas que está correcta. Si tienes problemas, <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-put-a-profile-together-9" target="_blank" rel="noopener noreferrer nofollow"> aquí puedes comprobar el proyecto completado hasta este punto</a>.

# --hints--

Debes añadir correctamente la variable de renderizado Pug a `/profile`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /username:( |)req.user.username/,
    'You should be passing the variable username with req.user.username into the render function of the profile page'
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
