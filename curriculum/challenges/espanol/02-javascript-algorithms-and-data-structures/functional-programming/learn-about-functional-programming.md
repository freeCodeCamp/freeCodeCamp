---
id: 587d7b8d367417b2b2512b5b
title: Aprende sobre programación funcional
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

La programación funcional es un estilo de programación donde las soluciones son simples, funciones aisladas, sin ningún efecto secundario fuera del ámbito de la función: `INPUT -> PROCESS -> OUTPUT`

La programación funcional se refiere a:

1) Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios

2) Funciones puras: una misma entrada siempre da la misma salida

3) Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados

# --instructions--

A los miembros de freeCodeCamp les encanta el té.

En el editor de código, las funciones `prepareTea` y `getTea` ya están definidas. Llama a la función `getTea` para obtener 40 tazas de té para el equipo y guárdalas en la variable `tea4TeamFCC`.

# --hints--

La variable `tea4TeamFCC` debe contener 40 tazas de té para el equipo.

```js
assert(tea4TeamFCC.length === 40);
```

La variable `tea4TeamFCC` debe contener tazas de té verde.

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
