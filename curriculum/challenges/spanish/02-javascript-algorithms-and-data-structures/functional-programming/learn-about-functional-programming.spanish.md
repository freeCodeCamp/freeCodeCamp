---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: Aprenda acerca de la programación funcional
---

## Description
<section id="description"> La programación funcional es un estilo de programación donde las soluciones son funciones simples y aisladas, sin efectos secundarios fuera del alcance de la función. <code>INPUT -&gt; PROCESS -&gt; OUTPUT</code> La programación funcional trata sobre: ​​1) Funciones aisladas: no hay dependencia del estado del programa, que incluye variables globales que están sujetas a cambios 2) Funciones puras: la misma entrada siempre da la misma salida 3) Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controlan cuidadosamente </section>

## Instructions
<section id="instructions"> A los miembros de freeCodeCamp les encanta el té. En el editor de código, las funciones <code>prepareTea</code> y <code>getTea</code> ya están definidas para usted. Llame a la función <code>getTea</code> para obtener 40 tazas de té para el equipo y guárdelas en la variable <code>tea4TeamFCC</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>tea4TeamFCC</code> debe contener 40 tazas de té para el equipo.
    testString: 'assert(tea4TeamFCC.length === 40, "The <code>tea4TeamFCC</code> variable should hold 40 cups of tea for the team.");'
  - text: La variable <code>tea4TeamFCC</code> debe contener tazas de té verde.
    testString: 'assert(tea4TeamFCC[0] === "greenTea", "The <code>tea4TeamFCC</code> variable should hold cups of green tea.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * Un largo proceso para preparar té.
 * @return {string} Una taza de té.
 **/
const prepareTea = () => 'greenTea';

/**
 * Obtener número dado de tazas de té.
 * @param {number} numOfCups Número de tazas de té requeridas.Number of required cups of tea.
 * @return {Array<string>} Cantidad dada de tazas de té.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = null; // :(

// Add your code above this line

console.log(tea4TeamFCC);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
