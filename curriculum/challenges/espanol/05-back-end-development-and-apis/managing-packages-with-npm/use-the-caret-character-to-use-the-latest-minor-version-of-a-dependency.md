---
id: 587d7fb5367417b2b2512c03
title: Usa el carácter caret para usar la última versión menor de una dependencia
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Similar a cómo la tilde que aprendimos en el último desafío permite a npm instalar la última PATCH para una dependencia, el caret (`^`) permite a npm instalar futuras actualizaciones también. La diferencia es que el caret permitirá tanto actualizaciones MINOR como PATCHes.

Su versión actual de `@freecodecamp/example` debería ser `~1.2.13` que permite a npm instalar a la última versión `1.2.x`. Si tuvieras que usar el caret (^) como prefijo de versión, npm podría actualizarse a cualquier versión `1.x.x`.

```json
"package": "^1.3.8"
```

Esto permitiría actualizaciones a cualquier versión `1.x.x` del paquete.

# --instructions--

Usa el caret (`^`) para fijar la versión de `@freecodecamp/example` en su lugar y permitir a npm actualizarla a cualquier versión anterior.

**Nota:** Los números de versión no deben ser cambiados.

# --hints--

`"dependencies"` debería incluir `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

La versión de `"@freecodecamp/example"` debería coincidir con `"^1.x.x"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\^1\./,
        'Wrong version of "@freecodecamp/example". It should be ^1.2.13'
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
