---
id: 587d8247367417b2b2512c37
title: Ocultar Información potencialmente Peligrosa usando helmet.hidePoweredBy()
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

Como recordatorio, este proyecto está siendo construído a base del proyecto iniciado en <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Los Hackers pueden aprovechar la vulnerabalidades conocidas en Express/Node, si ellos ven que tu sitio está siendo alimentado por Express. `X-Powered-By: Express` Se envía por defecto en cualquier solicitud proveniente de Express. Utilice el middleware de `helmet.hidePoweredBy()` para quitar la cabecera X-Powered-By.

# --hints--

helmet.hidePoweredBy() middleware debería montarse correctamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hidePoweredBy');
      assert.notEqual(data.headers['x-powered-by'], 'Express');
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
