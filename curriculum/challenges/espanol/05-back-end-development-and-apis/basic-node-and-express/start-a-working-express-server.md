---
id: 587d7fb0367417b2b2512bee
title: Inicia un servidor Express
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

En las primeras dos líneas del archivo `myApp.js`, puedes ver lo fácil que es crear un objeto app Express. Este objeto tiene varios métodos, y aprenderás muchos de ellos en estos desafíos. Un método fundamental es `app.listen(port)`. Le dice a tu servidor que escuche en un puerto determinado, poniéndolo en estado de ejecución. Por razones de prueba, necesitamos que la aplicación se ejecute en segundo plano, así que añadimos este método en el archivo `server.js` para ti.

¡Sirvamos nuestra primer cadena! En Express, las rutas toman la siguiente estructura: `app.METHOD(PATH, HANDLER)`. METHOD es un método http en minúsculas. PATH es una ruta relativa en el servidor (puede ser una cadena, o incluso una expresión regular). HANDLER es una función que Express llama cuando la ruta coincide. Los Handlers toman la forma `function(req, res) {...}`, donde req es el objeto de la solicitud, y res es el objeto de respuesta. Por ejemplo, el handler

```js
function(req, res) {
  res.send('Response String');
}
```

servirá la cadena 'Response String'.

# --instructions--

Utiliza el método `app.get()` para servir la cadena "Hello Express" a las peticiones GET que coincidan con la ruta `/` (raíz). Asegúrate de que tu código funciona mirando los registros, luego ve los resultados en la vista previa si estás usando Replit.

**Nota:** Todo el código de estas lecciones debe añadirse entre las pocas líneas de código con las que hemos iniciado.

# --hints--

Tu aplicación debe mostrarte en consola la cadena 'Hello Express'

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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
