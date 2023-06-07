---
id: 5895f70df9fc0f352b528e69
title: Cómo utilizar las estrategias de Passport
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

En el archivo `index.pug` proporcionado, hay un formulario de inicio de sesion. Esta oculto debido al JavaScript en línea `if showLogin` con el formulatio indentado luego de este.

En el `res.render` para esa página, agrega una nueva variable para el objeto `showLogin: true`. Cuando actualices tu página, entonces deberas ver el formulario! Este formulario est configurado para **POST** en `/login`. Así que, aquí es donde tu deberías configurar para aceptar la petición POST y autenticar al usuario.

Para este desafío, tu debes agregar la ruta `/login` para aceptar una petición POST. Para autenticarse en esta ruta, se necesita agregar un middleware para hacer eso antes de enviar una respuesta. Esto se hace pasando otro argumento con el middleware antes que tu respuesta. El middleware para usar es `passport.authenticate('local')`.

`passport.authenticate` puede además tomar algunas opciones como argumento tales como `{ failureRedirect: '/' }` la cual es increiblemente útil, así que asegurate de agregarla también. Agrega una respuesta luego de usar el middleware (la cual solo sera llamada si pasa la autenticación del middleware) esta redirige al usuario a `/profile`. Agrega también esa ruta, y haz que renderice la vista `profile.pug`.

Si la autenticación es exitosa, el objeto usuario será guardado en `req.user`.

En este punto, si ingresaste un nombre de usuario y contraseña en el formulario, esta debería redirigir a la página inicial `/`, y la consola de tu servidor debería mostrar `'User {USERNAME} attempted to log in.'`, ya que actualmento no podemos iniciar sesión a un usuario que no esta registrado.

Envía tu página cuando creas que esta correcta. Si te encuentras con errores, tu puedes <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">comprueba el proyecto realizado hasta este punto</a>.

# --hints--

Todos los pasos deben ser correctamente implementados en `server.js`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

Una solicitud POST `/login` debería redirigir correctamente a `/`.

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
