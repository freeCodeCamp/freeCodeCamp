---
id: 587d8247367417b2b2512c36
title: Instalar y Requerir Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clona <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">este repositorio de GitHub </a> y completa esos retos localmente.
- Usa <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">nuestro proyecto de inicial Replit</a> para completar estos retos.
- Utilice un constructor de sitios de su elección para completar el proyecto. Asegúrese de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando haya terminado, asegúrese de que un demo funcional de su proyecto esté alojado en algún lugar público. A continuación, envíe la URL en el campo `Solution Link`.

Helmet te ayuda a proteger tus aplicaciones Express configurando varias cabeceras HTTP.

# --instructions--

Todo su código para estas lecciones va en el archivo `myApp.js` entre las líneas de código con las que hemos iniciado. No cambie o elimine el código que hemos añadido para usted.

La versión de Helmet `3.21.3` ya ha sido instalada, así que requiera `helmet` en `myApp.js`.

# --hints--

`helmet` version `3.21.3` debería estar en `package.json`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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
