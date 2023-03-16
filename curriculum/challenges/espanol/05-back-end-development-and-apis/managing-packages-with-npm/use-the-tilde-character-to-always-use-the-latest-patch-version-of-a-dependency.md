---
id: 587d7fb5367417b2b2512c02
title: Usa el carácter tilde para usar la última versión del parche de una dependencia
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

En el último desafío, le dijiste a npm que sólo incluyera una versión específica de un paquete. Es una forma útil de congelar tus dependencias si necesitas asegurarte de que las diferentes partes de tu proyecto permanezcan compatibles entre sí. Pero en la mayoría de los casos, no querrás perderte las correcciones de errores, ya que a menudo incluyen importantes parches de seguridad y (con suerte) no rompen cosas al hacerlo.

Para permitir que una dependencia de npm se actualice a la última versión de PATCH, puedes prefijar la versión de la dependencia con el carácter tilde (`~`). A continuación se muestra un ejemplo de como permitir actualizaciones a cualquier versión `1.3.x`.

```json
"package": "~1.3.8"
```

# --instructions--

En el fichero package.json, la regla que dice a npm como puede actualizar `@freecodecamp/example` consiste en usar una versión específica (`1.2.13`). Pero ahora lo que quieres es permitir que actualice a la más reciente `1.2.x`.

Usa el carácter tilde (`~`) para fijar la versión de `@freecodecamp/example` en tus dependencias y permitir a npm actualizarla a cualquier nuevo lanzamiento de _patch_.

**Nota:** Los números de versión no deben ser cambiados.

# --hints--

`"dependencies"` debe incluir `"@freecodecamp/example"`.

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

La versión de `"@freecodecamp/example"` debe coincidir con `"~1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
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
