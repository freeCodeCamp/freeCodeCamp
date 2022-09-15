---
id: 587d7fb5367417b2b2512c01
title: Gestiona dependencias npm entendiendo versionado semántico
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

`Versions` de los paquetes npm en la sección dependencias de tu archivo package.json siguen lo que se llama Versionado Semántico (SemVer), un estándar de la industria para el versionado de software con el objetivo de facilitar la gestión de las dependencias. Bibliotecas, frameworks u otras herramientas publicadas en npm deberían usar SemVer para comunicar claramente qué tipo de cambios pueden esperar los proyectos si se actualizan.

Conocer SemVer puede ser útil cuando se desarrolla software que utiliza dependencias externas (algo que casi siempre se hace). Un día tu comprensión de estos números te salvará de introducir accidentalmente cambios que rompan tu proyecto, sin entender por qué las cosas que funcionaron ayer de repente no funcionan hoy. Así es como funciona el Versionado Semántico según el sitio web oficial:

```json
"package": "MAJOR.MINOR.PATCH"
```

La versión MAJOR debe incrementarse cuando hagas cambios de API incompatibles. La versión MINOR debe incrementarse cuando añadas funcionalidades de forma compatible con versiones anteriores. La versión de PATCH debe incrementarse cuando realices correcciones de errores compatibles con versiones anteriores. Esto significa que PATCHes son correcciones de errores y los MINORs añaden nuevas funcionalidades, pero ninguno de ellos rompe lo que funcionó antes. Finalmente, los MAJORs añaden cambios que no funcionarán con versiones anteriores.

# --instructions--

En la sección de dependencias de `package.json`, cambie la versión de `@freecodecamp/example` para que coincida con MAJOR versión 1, la MINOR versión 2 y PATCH versión 13

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

`"@freecodecamp/example"` debería tener la versión `"1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies["@freecodecamp/example"],
        '1.2.13',
        'Wrong version of "@freecodecamp/example". It should be 1.2.13'
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
