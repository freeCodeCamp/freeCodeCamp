---
id: 587d7fb0367417b2b2512bed
title: Bienvenido a la consola de Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clone este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Durante el proceso de desarrollo, es importante poder comprobar lo que ocurre en el código.

Node es solo un entorno JavaScript. Al igual que el JavaScript del lado cliente, puedes hacer uso de la consola para mostrar información útil para la depuración. En tu máquina, varía la salida de la consola en un terminal. On Gitpod, a terminal is open at the bottom of the editor by default.

Recomendamos mantener abierto el terminal mientras desarrolles estos retos. Al leer el resultado en el terminal, puedes ver cualquier error que pueda producirse.

# --instructions--

Modifica el archivo `myApp.js` para que registre "Hello World" en la consola.

# --hints--

`"Hello World"` debe aparecer en la consola

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
