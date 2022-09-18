---
id: 5895f700f9fc0f352b528e63
title: Configura un motor de plantillas
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clone este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
- Usa <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">nuestro proyecto de inicio Replit</a> para completar estos desafíos.
- Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que un demo funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`.

Un motor de plantillas te permite usar plantillas estáticas (como las escritas en *Pug*) en tu aplicación. En tiempo de ejecución, el motor de plantillas reemplaza variables en un archivo de plantilla con valores reales que pueden ser suministrados por tu servidor. Luego transforma la plantilla en un archivo HTML estático que se envía al cliente. Este enfoque hace más fácil el diseño de una página HTML y permite mostrar variables en la página sin necesidad de hacer una llamada API desde el cliente.

`pug@~3.0.0` ya ha sido instalado, y se muestra como una dependencia en tu archivo `package.json`.

Express necesita saber qué motor de plantillas está utilizando. Utilizaremos el método `set` para asignar `pug` como el valor de `view engine` de la propiedad: `app.set('view engine', 'pug')`

Tu página estará en blanco hasta que proceses correctamente el archivo de índice en el directorio `views/pug`.

Para renderizar la plantilla `pug`, necesitas usar `res.render()` en la ruta `/`. Pasa la ruta del archivo al directorio `views/pug` como argumento al método. La ruta puede ser una ruta relativa (relativa a las vistas), o una ruta absoluta, y no requiere una extensión de archivo.

Si todo salió según lo planeado, la página de inicio de tu aplicación ya no estará en blanco y mostrará un mensaje indicando que has renderizado correctamente la plantilla Pug!

Envía tu página cuando creas que lo has hecho bien. Si te estás encontrando errores, puedes <a href="https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791" target="_blank" rel="noopener noreferrer nofollow">mirar el proyecto completado hasta este punto</a>.

# --hints--

Pug debe ser una dependencia.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'pug',
        'Your project should list "pug" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

El motor de vistas debe ser Pug.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /('|")view engine('|"),( |)('|")pug('|")/gi,
        'Your project should set Pug as a view engine'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Utiliza el método de ExpressJS correcto para renderizar la página de índice de la respuesta.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Pug debe estar funcionando.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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
