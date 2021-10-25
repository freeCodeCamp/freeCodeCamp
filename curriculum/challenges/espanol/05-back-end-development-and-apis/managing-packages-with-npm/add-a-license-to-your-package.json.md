---
id: 587d7fb4367417b2b2512bfe
title: Agrega una licencia a tu package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

El campo `license` es donde se informa a los usuarios de lo que pueden hacer con tu proyecto.

Algunas de las licencias comunes para proyectos de código abierto incluyen MIT y BSD. La información de la licencia no es requerida, y las leyes de derechos de autor en la mayoría de los países te darán la propiedad de lo que creas de manera predeterminada. Sin embargo, siempre es una buena práctica exponer explícitamente lo que los usuarios pueden y no pueden hacer. Aquí hay un ejemplo del campo de la licencia:

```json
"license": "MIT",
```

# --instructions--

Rellena el campo `license` en el archivo package.json de tu proyecto según lo encuentres apropiado.

# --hints--

package.json debe tener una clave válida de "license"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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
