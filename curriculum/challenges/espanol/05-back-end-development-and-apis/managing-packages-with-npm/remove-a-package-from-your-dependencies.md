---
id: 587d7fb5367417b2b2512c04
title: Elimina un paquete de tus dependencias
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

Ahora has probado algunas maneras en que puedes gestionar las dependencias de tu proyecto usando la sección de dependencias de package.json. También has incluido paquetes externos agregándolos al archivo e incluso le has dicho a npm los tipos de versiones que deseas, usando caracteres especiales como la tilde o el caret.

Pero, ¿Qué pasa si deseas eliminar un paquete externo que ya no necesitas? Puede que ya lo hayas adivinado, simplemente elimina el par clave-valor correspondiente a ese paquete de tus dependencias.

Este mismo método se aplica para eliminar otros zonas de tu package.json.

# --instructions--

Retire el paquete `@freecodecamp/example` de sus dependencias.

**Nota:** Asegúrate de que tienes la cantidad correcta de comas después de eliminarlo.

# --hints--

`"dependencies"` no debe incluir `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" still includes "@freecodecamp/example"'
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
