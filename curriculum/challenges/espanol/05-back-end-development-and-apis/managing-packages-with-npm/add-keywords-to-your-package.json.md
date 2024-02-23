---
id: 587d7fb4367417b2b2512bfd
title: Añade palabras clave a tu package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

El campo `keywords` es donde puedes describir tu proyecto usando palabras clave relacionadas. A continuación un ejemplo:

```json
"keywords": [ "descriptive", "related", "words" ],
```

Como puedes ver, este campo está estructurado como un arreglo de cadenas con comillas dobles.

# --instructions--

Añade un arreglo de cadenas adecuadas al campo `keywords` en el archivo package.json de tu proyecto.

Una de las palabras clave debe ser "freecodecamp".

# --hints--

el archivo package.json debe tener una clave "keywords" válida

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.keywords, '"keywords" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

El campo "keywords" debe ser un arreglo

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.isArray(packJson.keywords, '"keywords" is not an array');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"keywords" debe incluir "freecodecamp"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.include(
        packJson.keywords,
        'freecodecamp',
        '"keywords" does not include "freecodecamp"'
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
