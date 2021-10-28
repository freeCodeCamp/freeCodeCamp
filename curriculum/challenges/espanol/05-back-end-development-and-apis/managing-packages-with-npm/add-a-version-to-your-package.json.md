---
id: 587d7fb4367417b2b2512bff
title: Añade una versión a tu package.json
challengeType: 2
forumTopicId: 301525
dashedName: add-a-version-to-your-package-json
---

# --description--

Una `version` es uno de los campos obligatorios de tu archivo package.json. Este campo describe la versión actual de tu proyecto. A continuación un ejemplo:

```json
"version": "1.2.0",
```

# --instructions--

Añade una `version` al archivo package.json de tu proyecto.

# --hints--

package.json debe tener una clave de "version" válida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.version, '"version" is missing');
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
