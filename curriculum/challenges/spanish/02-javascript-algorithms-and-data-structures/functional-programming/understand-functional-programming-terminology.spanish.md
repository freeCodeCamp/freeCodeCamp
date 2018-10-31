---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
videoUrl: ''
localeTitle: Entender la terminología de programación funcional
---

## Description
<section id="description"> El equipo de la FCC tuvo un cambio de humor y ahora quiere dos tipos de té: té verde y té negro. Hecho general: los cambios de humor del cliente son bastante comunes. Con esa información, tendremos que revisar la función <code>getTea</code> del último desafío para manejar varias solicitudes de té. Podemos modificar <code>getTea</code> para aceptar una función como parámetro para poder cambiar el tipo de té que prepara. Esto hace que <code>getTea</code> sea ​​más flexible y le da al programador más control cuando cambian las solicitudes de los clientes. Pero primero, vamos a cubrir algunos términos funcionales: las <code>Callbacks</code> son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función. Es posible que los haya visto pasar a otros métodos, por ejemplo, en el <code>filter</code> , la función de devolución de llamada le dice a JavaScript los criterios sobre cómo filtrar una matriz. Las funciones que se pueden asignar a una variable, pasar a otra función o devolver desde otra función al igual que cualquier otro valor normal, se denominan funciones de <code>first class</code> . En JavaScript, todas las funciones son funciones de <code>first class</code> . Las funciones que toman una función como argumento o que devuelven una función como valor de retorno se denominan funciones de <code>higher order</code> . Cuando las funciones se pasan a otra función o se devuelven desde otra función, las funciones que se pasan o se devuelven pueden llamarse <code>lambda</code> . </section>

## Instructions
<section id="instructions"> Prepare 27 tazas de té verde y 13 tazas de té negro y almacénelas en las variables <code>tea4GreenTeamFCC</code> y <code>tea4BlackTeamFCC</code> , respectivamente. Tenga en cuenta que la función <code>getTea</code> se ha modificado, por lo que ahora toma una función como primer argumento. Nota: Los datos (el número de tazas de té) se proporcionan como el último argumento. Discutiremos esto más en lecciones posteriores. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>tea4GreenTeamFCC</code> debe contener 27 tazas de té verde para el equipo.
    testString: 'assert(tea4GreenTeamFCC.length === 27, "The <code>tea4GreenTeamFCC</code> variable should hold 27 cups of green tea for the team.");'
  - text: La variable <code>tea4GreenTeamFCC</code> debe contener tazas de té verde.
    testString: 'assert(tea4GreenTeamFCC[0] === "greenTea", "The <code>tea4GreenTeamFCC</code> variable should hold cups of green tea.");'
  - text: La variable <code>tea4BlackTeamFCC</code> debe contener 13 tazas de té negro.
    testString: 'assert(tea4BlackTeamFCC.length === 13, "The <code>tea4BlackTeamFCC</code> variable should hold 13 cups of black tea.");'
  - text: La variable <code>tea4BlackTeamFCC</code> debe contener tazas de té negro.
    testString: 'assert(tea4BlackTeamFCC[0] === "blackTea", "The <code>tea4BlackTeamFCC</code> variable should hold cups of black tea.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = null; // :(
const tea4BlackTeamFCC = null; // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
