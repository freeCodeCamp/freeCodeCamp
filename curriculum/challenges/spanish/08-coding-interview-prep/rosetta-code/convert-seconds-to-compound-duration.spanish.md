---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
challengeType: 5
videoUrl: ''
localeTitle: Convertir segundos a duración compuesta
---

## Description
<section id="description"> Tarea: <p> Implementar una función que: </p> toma un número entero positivo que representa una duración en segundos como entrada (por ejemplo, <code>100</code> ), y devuelve una cadena que muestra la misma duración descompuesta en semanas, días, horas, minutos y segundos como se detalla a continuación (por ejemplo, <code>1 min, 40 sec</code>). <p> Demostrar que pasa los siguientes tres casos de prueba: </p><p style="font-size:115%; margin:1em 0 0 0"> Casos de prueba </p><table><tbody><tr><th> número de entrada </th><th> número de salida </th></tr><tr><td> 7259 </td><td> <code>2 hr, 59 sec</code> </td> </tr><tr><td> 86400 </td><td> <code>1 d</code> </td> </tr><tr><td> 6000000 </td><td> <code>9 wk, 6 d, 10 hr, 40 min</code> </td> </tr></tbody></table><p style="font-size:115%; margin:1em 0 0 0"> Detalles </p> Se deben usar las siguientes cinco unidades: <table><tbody><tr><th> unidad </th><th> sufijo utilizado en la salida </th><th> conversión </th></tr><tr><td> semana </td><td> <code>wk</code> </td> <td> 1 semana = 7 días </td></tr><tr><td> día </td><td> <code>d</code> </td> <td> 1 día = 24 horas </td></tr><tr><td> hora </td><td> <code>hr</code> </td> <td> 1 hora = 60 minutos </td></tr><tr><td> minuto </td><td> <code>min</code> </td> <td> 1 minuto = 60 segundos </td></tr><tr><td> segundo </td><td> <code>sec</code> </td> <td></td></tr></tbody></table> Sin embargo, solo incluya cantidades con valores distintos de cero en la salida (p. Ej., Devuelva <code>1 d</code> y no &<code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>). Dé prioridad a las unidades más grandes sobre las más pequeñas como sea posible (p. ej., devolver <code>2 min, 10 sec</code> y no <code>1 min, 70 sec</code> o <code>130 sec</code> ) Imitar el formato que se muestra en los casos de prueba (cantidades ordenadas de unidad mayor a menor y separadas por comas + espacio; valor y unidad de cada cantidad separada por espacio). <p></p><hr style="margin:1em 0;"><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertSeconds</code> es una función.
    testString: 'assert(typeof convertSeconds === "function", "<code>convertSeconds</code> is a function.");'
  - text: '<code>convertSeconds(7259)</code> debe devolver <code>2 hr, 59 sec</code> .'
    testString: 'assert.equal(convertSeconds(testCases[0]), results[0], "<code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.");'
  - text: <code>convertSeconds(86400)</code> debe devolver <code>1 d</code> .
    testString: 'assert.equal(convertSeconds(testCases[1]), results[1], "<code>convertSeconds(86400)</code> should return <code>1 d</code>.");'
  - text: '<code>convertSeconds(6000000)</code> deben devolver <code>9 wk, 6 d, 10 hr, 40 min</code> <code>convertSeconds(6000000)</code> <code>9 wk, 6 d, 10 hr, 40 min</code> .'
    testString: 'assert.equal(convertSeconds(testCases[2]), results[2], "<code>convertSeconds(6000000)</code> should return <code>9 wk, 6 d, 10 hr, 40 min</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertSeconds (sec) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
