---
id: 587d7b8e367417b2b2512b5c
title: Comprende la terminología de la programación funcional
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

El equipo de FCC tuvo un cambio de humor y ahora quiere dos tipos de té: té verde y té negro. Hecho general: Los cambios del estado de ánimo de los clientes son bastante concurrentes.

Con esa información, tendremos que volver a visitar la función `getTea` del último desafío para manejar varias solicitudes de té. Podemos modificar `getTea` para aceptar una función como parámetro y así poder cambiar el tipo de té que prepara. Esto hace que `getTea` sea más flexible y le da al programador más control cuando las solicitudes del cliente cambian.

Pero primero, cubramos alguna terminología de la programación funcional:

<dfn>Callbacks</dfn> son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función. Es posible que las hayas visto pasar a otros métodos, por ejemplo en `filter`, la función callback le dice a JavaScript los criterios para filtrar un arreglo.

Las funciones que pueden ser asignadas a una variable, pasadas a otra función o devueltas desde otra función como cualquier otro valor normal, se llaman funciones de <dfn>primera clase</dfn>. En JavaScript, todas las funciones son funciones de primera clase.

Las funciones que toman una función como argumento, o devuelven una función como valor de retorno, se denominan funciones <dfn>higher order</dfn>.

Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o devolvieron se pueden llamar <dfn>lambda</dfn>.

# --instructions--

Prepara 27 tazas de té verde (green tea) y 13 tazas de té negro (black tea) y almacénalas en las variables `tea4GreenTeamFCC` y `tea4BlackTeamFCC`, respectivamente. Ten en cuenta que la función `getTea` ha sido modificada por lo que ahora recibe una función como primer argumento.

Nota: Los datos (el número de tazas de té) son suministrados como el último argumento. Discutiremos más sobre esto en lecciones posteriores.

# --hints--

La variable `tea4GreenTeamFCC` debe contener 27 tazas de té verde para el equipo.

```js
assert(tea4GreenTeamFCC.length === 27);
```

La variable `tea4GreenTeamFCC` debe contener tazas de té verde.

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

La variable `tea4BlackTeamFCC` debe contener 13 tazas de té negro.

```js
assert(tea4BlackTeamFCC.length === 13);
```

La variable `tea4BlackTeamFCC` debe contener tazas de té negro.

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
