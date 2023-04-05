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

Si utilizas Replit, sigue estos pasos para configurar el proyecto:

-   Empieza importando el proyecto en Replit.
-   A continuación, verás una ventana `.replit`.
-   Selecciona `Use run command` y haz clic en el botón `Done`.

Cuando hayas terminado, asegúrate de que una demo funcional de tu proyecto está alojada en algún lugar público. A continuación, introduce la URL en el campo enlace a la solución.

Un motor de plantillas te permite utilizar archivos de plantillas estáticas (como los escritos en *Pug*) en tu aplicación. En tiempo de ejecución, el motor de plantillas sustituye las variables de un archivo de plantilla por valores reales que pueden ser suministrados por tu servidor. A continuación, transforma la plantilla en un archivo HTML estático que se envía al cliente. Este enfoque facilita el diseño de una página HTML y permite mostrar variables en la página sin necesidad de realizar una llamada a la API desde el cliente.

`pug@~3.0.0` ya se ha instalado y aparece como dependencia en el archivo `package.json`.

Express necesita saber qué motor de plantillas está utilizando. Utiliza el método `set` para asignar `pug` como valor de la propiedad `view engine`:

```javascript
app.set('view engine', 'pug');
```

Después de eso, añade otro método `set` que establezca la propiedad `views` de tu `app` para que apunte al directorio `./views/pug`. Esto le dice a Express que renderice todas las vistas relativas a ese directorio.

Por último, utiliza `res.render()` en la ruta para tu página de inicio, pasando `index` como primer argumento. Esto mostrará la plantilla `pug`.

Si todo ha ido según lo previsto, la página de inicio de tu aplicación ya no estará en blanco. ¡En su lugar, mostrará un mensaje indicando que has renderizado correctamente la plantilla Pug!

Envía tu página cuando crea que lo ha hecho bien. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Pug should be a dependency.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

View engine should be Pug.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

You should set the `views` property of the application to `./views/pug`.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

Use the correct ExpressJS method to render the index page from the response.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug should be working.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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
