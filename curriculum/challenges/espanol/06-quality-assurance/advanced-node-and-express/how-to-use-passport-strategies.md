---
id: 5895f70df9fc0f352b528e69
title: Cómo utilizar las estrategias de Passport
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

En el archivo `index.pug` proporcionado, hay realmente un formulario de inicio de sesión. Anteriormente ha estado oculto debido al JavaScript inline `if showLogin` con el formulario indentado después de él. Antes `showLogin` como variable nunca se definía, por lo que nunca renderizaba el bloque de código que contenía el formulario. Sigue adelante y en el `res.render` de esa página añade una nueva variable al objeto `showLogin: true`. Cuando actualices la página, ¡deberías ver el formulario! Este formulario está configurado para hacer una petición **POST** en `/login`, así que aquí es donde debemos configurar para aceptar el POST y autentificar al usuario.

Para este desafío debes añadir la ruta `/login` para aceptar una petición POST. Para autentificarse en esta ruta, es necesario añadir un middleware para hacerlo antes de enviar una respuesta. ¡Esto se hace simplemente pasando otro argumento con el middleware antes de tu `function(req,res)` con tu respuesta! El middleware a usar es `passport.authenticate('local')`.

`passport.authenticate` también puede tomar algunas opciones como un argumento como: `{ failureRedirect: '/' }` que es increíblemente útil, así que asegúrate de añadirlo también. La respuesta después de usar el middleware (que sólo se llamará si el middleware de autentificación pasa) debe ser redirigir al usuario a `/profile` y esa ruta debe renderizar el perfil `profile.pug`.

Si la autentificación fue exitosa, el user object se guardará en `req.user`.

En este punto, si introduces un nombre de usuario y una contraseña en el formulario, debe redirigirse a la página de inicio `/`, y la consola de tu servidor debe mostrar `'User {USERNAME} attempted to log in.'`, ya que actualmente no podemos iniciar la sesión de un usuario que no está registrado.

Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9).

# --hints--

Todos los pasos deben ser correctamente implementados en el server.js.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Una solicitud POST a /login debe redirigir correctamente a /.

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
