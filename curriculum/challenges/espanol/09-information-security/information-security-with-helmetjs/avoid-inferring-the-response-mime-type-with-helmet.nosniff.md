---
id: 587d8248367417b2b2512c3a
title: Evita inferir en la Respuesta MIME Tipo con helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

Como recordatorio, este proyecto esta contruido hasta el próximo proyecto inicial en <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>. Navegadores pueden usar contenido o recorte MIME para anular los encabezados de respuesta `Content-Type` headers para adivinar y procesar los datos usando un tipo de contenido implícito. Mientras esto puede ser conveniente en algunos escenarios, esto puede conducir a algunos ataques peligrosos. Este middleware configura el encabezado X-Content-Type-Options a `nosniff`, indicando al navegador no eluda el proporcionado `Content-Type`.

# --instructions--

Usa el método `helmet.noSniff()` en tu servidor.

# --hints--

helmet.noSniff() middleware debe ser montado correctamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
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
