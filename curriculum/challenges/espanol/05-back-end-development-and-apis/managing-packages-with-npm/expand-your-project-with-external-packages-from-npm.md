---
id: 587d7fb4367417b2b2512c00
title: Ampliar tu proyecto con paquetes externos de npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

Una de las razones más importantes para utilizar un gestor de paquetes, es su potente gestión de dependencias. En lugar de tener que asegurarte manualmente de que obtienes todas las dependencias cada vez que configuras un proyecto en una nuevo computadora, npm instala automáticamente todo para ti. Pero ¿cómo puede npm saber exactamente lo que necesita tu proyecto? Conoce la sección `dependencies` de tu archivo package.json.

En esta sección, los paquetes que tu proyecto necesita se almacenan usando el siguiente formato:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Añade la versión `1.1.0` del paquete `@freecodecamp/example` al campo `dependencies` del archivo `package.json`.

**Nota:** `@freecodecamp/example` es un paquete falso usado como una herramienta de aprendizaje.

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

`"@freecodecamp/example"` debería tener la versión `"1.1.0"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^[\^\~]?1\.1\.0/,
        'Wrong version of "@freecodecamp/example" installed. It should be 1.1.0'
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
