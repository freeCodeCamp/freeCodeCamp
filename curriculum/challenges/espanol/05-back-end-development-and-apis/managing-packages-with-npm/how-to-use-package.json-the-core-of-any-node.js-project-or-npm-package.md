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

Cuando hayas terminado, asegúrate de que un demo funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`.

El archivo `package.json` es el centro de cualquier proyecto Node.js o paquete npm. Almacena información sobre tu proyecto, similar a cómo la sección &lt;head> de un documento HTML describe el contenido de una página web. Consiste en un único objeto JSON donde la información se almacena en pares clave-valor. Sólo hay dos campos obligatorios; "name" y "version", pero es una buena práctica proporcionar información adicional sobre tu proyecto que podría ser útil para futuros usuarios o mantenedores.

Si miras el árbol de archivos de tu proyecto, encontrarás el archivo package.json en el nivel superior del árbol. Este es el archivo que mejorarás en el próximo par de desafíos.

Una de las piezas de información más comunes en este archivo es el campo `author`. Este especifica quién creó el proyecto, y puede consistir en una cadena u objeto con contacto u otros detalles. Se recomienda un objeto para proyectos más grandes, pero una simple cadena como el siguiente ejemplo funcionará para este proyecto.

```json
"author": "Jane Doe",
```

# --instructions--

Añade tu nombre como el `author` del proyecto en el archivo package.json.

**Nota:** Recuerda que estás escribiendo JSON, por lo que todos los nombres de campos deben usar comillas dobles (") y separarse con una coma (,).

# --hints--

el archivo package.json debe tener una clave "author" válida

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
