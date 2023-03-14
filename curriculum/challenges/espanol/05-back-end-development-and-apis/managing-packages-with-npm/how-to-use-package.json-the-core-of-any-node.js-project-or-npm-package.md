---
id: 587d7fb3367417b2b2512bfb
title: 'Cómo usar package.json, el núcleo de cualquier proyecto Node.js o paquete npm'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clone este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
- Usa <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">nuestro proyecto de inicio Replit</a> para completar estos desafíos.
- Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Si usas Replit, sigue los siguientes pasos para configurar el proyecto:

-   Comienza importando el proyecto en Replit.
-   A continuación, verás una ventana `.replit`
-   Selecciona `Use run command` y haz click en el botón `Done`.

Una vez que hayas acabado, asegúrate de que un demo funcional del proyecto esté alojado en algún sitio público. A continuación, introduce la URL en el campo enlace a la solución.

El archivo `package.json` es el centro de cualquier proyecto Node.js o paquete npm. Almacena información del proyecto, de manera similar a como la sección `head` de un documento HTML describe el contenido de una página web. Está formado por un único objeto JSON donde se guarda la información en pares clave-valor. Solo hay dos campos obligatorios: `name` y `version`, pero se considera una buena práctica plasmar información adicional que pueda ser útil a futuros usuarios o mantenedores.

Observando el árbol de ficheros del proyecto, se puede ver que `package.json` está en la raíz. Este es el archivo que mejorarás en el próximo par de desafíos.

Uno de los datos más comunes de este archivo es el campo `author`. Específica quién creó el proyecto, y puede consistir en una cadena o un objeto con datos de contacto u otros detalles. Un objeto es recomendable para proyectos de cierta importancia; para nuestro proyecto de prueba, servirá con una simple cadena como la siguiente.

```json
"author": "Jane Doe",
```

# --instructions--

Agrega tu nombre como `author` del proyecto en el fichero `package.json`.

**Nota:** Recuerda que estás escribiendo JSON, de manera que todos los nombres de campos deben ir entre comillas dobles (") y separados por una coma (,).

# --hints--

`package.json` debe tener una clave válida "author"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
