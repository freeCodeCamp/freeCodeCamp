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
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

El archivo `package.json` es el centro de cualquier proyecto Node.js o paquete npm. It stores information about your project. Está formado por un único objeto JSON donde se guarda la información en pares clave-valor. There are only two required fields; `name` and `version`, but it’s good practice to provide additional information.

You can create the `package.json` file from the terminal using the `npm init` command. This will run a guided setup. Using `npm init` with the `-y` flag will generate the file without having it ask any questions, `npm init -y`.

Observando el árbol de ficheros del proyecto, se puede ver que `package.json` está en la raíz. Este es el archivo que mejorarás en el próximo par de desafíos.

Uno de los datos más comunes de este archivo es el campo `author`. Específica quién creó el proyecto, y puede consistir en una cadena o un objeto con datos de contacto u otros detalles. Un objeto es recomendable para proyectos de cierta importancia; para nuestro proyecto de prueba, servirá con una simple cadena como la siguiente.

```json
"author": "Jane Doe",
```

# --instructions--

Agrega tu nombre como `author` del proyecto en el fichero `package.json`.

**Nota:** Recuerda que estás escribiendo JSON, de manera que todos los nombres de campos deben ir entre comillas dobles (") y separados por una coma (,).

If you are using Gitpod, make sure the app is running and the preview window is open. Copy the preview window's URL and paste it into the Solution Link input below.

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
