---
id: 587d8249367417b2b2512c3e
title: Desactiva el cache del lado del cliente con helmet.noCache()
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

Como recordatorio, este proyecto está siendo construído en base al siguiente proyecto iniciado en <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Si esta lanzando una actualización para su sitio web, y quiere que los usuarios siempre descarguen la versión más reciente, puede (intentar) desactivar la cache en el navegador del cliente. Puede ser útil también en desarrollo. El almacenamiento de cache tiene beneficios de rendimiento, los cuales perderás, así que solo usa está opción cuando haya una necesidad real.

# --instructions--

Usa el método `helmet.noCache()` en tu servidor.

# --hints--

helmet.noCache() middleware debe ser montado correctamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nocache');
      assert.equal(
        data.headers['cache-control'],
        'no-store, no-cache, must-revalidate, proxy-revalidate'
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
