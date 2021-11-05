---
id: 587d7fb0367417b2b2512bed
title: Bienvenido a la consola de Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Trabajar en estos desafíos implica escribir tu código usando uno de los siguientes métodos:

- Clona [este repositorio de GitHub](https://github.com/freeCodeCamp/boilerplate-express/) y completa estos desafíos localmente.
- Usa [nuestro proyecto inicial de Replit](https://replit.com/github/freeCodeCamp/boilerplate-express) para completar estos desafíos.
- Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que un demo funcional de tu proyecto esté alojado en algún lugar público. A continuación, envía la URL en el campo `Solution Link`.

Durante el proceso de desarrollo, es importante poder comprobar lo que está pasando en tu código.

Node es sólo un entorno JavaScript. Al igual que JavaScript en el lado del cliente, puedes usar la consola para mostrar información útil de depuración. En tu máquina local, verías la salida de la consola en una terminal. En Replit, una terminal está abierta por defecto en el panel derecho.

Recomendamos mantener la terminal abierta mientras trabajamos en estos desafíos. Al leer la salida en la terminal, puedes ver cualquier error que pueda ocurrir.

# --instructions--

Modifica el archivo `myApp.js` para escribir "Hello World" en la consola.

# --hints--

`"Hello World"` debe estar en la consola

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
