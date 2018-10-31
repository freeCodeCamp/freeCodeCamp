---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: Utilice la asignación de destrucción para asignar variables de objetos anidados
---

## Description
<section id="description"> De manera similar podemos destruir objetos <em>anidados</em> en variables. Considere el siguiente código: <blockquote> const a = { <br> inicio: {x: 5, y: 6}, <br> final: {x: 6, y: -9} <br> }; <br> const {inicio: {x: inicioX, y: inicioY}} = a; <br> console.log (startX, startY); // 5, 6 </blockquote> En el ejemplo anterior, a la variable <code>start</code> se le asigna el valor de <code>a.start</code> , que también es un objeto. </section>

## Instructions
<section id="instructions"> Utilice la asignación de desestructuración para obtener el <code>max</code> de <code>forecast.tomorrow</code> y asignarlo a <code>maxOfTomorrow</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maxOfTomorrow</code> es igual a <code>84.6</code>
    testString: 'assert(getMaxOfTmrw(LOCAL_FORECAST) === 84.6, "<code>maxOfTomorrow</code> equals <code>84.6</code>");'
  - text: se utilizó desestructuración anidada
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*\{\s*max\s*:\s*maxOfTomorrow\s*\}\s*\}\s*=\s*forecast/g),"nested destructuring was used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const maxOfTomorrow = undefined; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
