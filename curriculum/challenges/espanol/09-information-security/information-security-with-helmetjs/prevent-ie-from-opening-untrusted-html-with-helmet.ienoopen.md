---
id: 587d8248367417b2b2512c3b
title: Evitar que IE abra HTML no confiable con helmet.ieNoOpen()
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

Como recordatorio, este proyecto está siendo construido a la base del proyecto iniciado con <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">Github</a>.

Algunas aplicaciones web servirán HTML no confiable en la descarga. Algunas versiones de Internet Explorer por defecto abren estos archivos HTML en el contexto de tu sitio web. Esto significa que una página HTML no confiable podría haber empezado a hacer cosas malas en el contenido de tus páginas. Este middleware ajusta la cabecera X-Download-Options en noopen. Esto evitará que los usuarios IE ejecuten descargas en el contenido seguro del sitio web.

# --instructions--

Usa el método `helmet.ieNoOpen()` en tu servidor.

# --hints--

helmet.ieNoOpen() middleware debería montarse correctamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'ienoopen');
      assert.equal(data.headers['x-download-options'], 'noopen');
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
