---
id: 587d7fb5367417b2b2512c03
title: Usa el carácter caret para usar la última versión menor de una dependencia
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Similar a cómo la tilde que aprendimos en el último desafío permite a npm instalar la última PATCH para una dependencia, el caret (`^`) permite a npm instalar futuras actualizaciones también. La diferencia es que el caret permitirá tanto actualizaciones MINOR como PATCHes.

Tu versión actual de moment debe ser "~2.10.0" lo que permite a npm instalar la última versión 2.10.x. Si se usara el caret (^) como prefijo de versión en su lugar, npm permitiría actualizar a cualquier versión 2.x.x.

```json
"package": "^1.3.8"
```

Esto permitiría actualizaciones a cualquier version 1.x.x del paquete.

# --instructions--

Usa el caret (`^`) para anteponer la versión de moment en tus dependencias y permitir a npm actualizarlo a cualquier nueva versión MINOR.

**Nota:** Los números de versión no deben ser cambiados.

# --hints--

"dependencies" debe incluir "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

la versión de "moment" debe coincidir con "2.x.x"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\^2\./,
        'Wrong version of "moment". It should be ^2.10.2'
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
