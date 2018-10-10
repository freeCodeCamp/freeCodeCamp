---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
localeTitle: 596fd036dc1ab896c5db98b1
challengeType: 5
---

## Description
<section id='description'>
Tarea:
<p> Implementar una función que: </p>
toma un entero positivo que representa una duración en segundos como entrada (por ejemplo, <code>100</code> ), y
devuelve una cadena que muestra la misma duración descompuesta en semanas, días, horas, minutos y segundos como se detalla a continuación (por ejemplo, &quot; <code>1 min, 40 sec</code> &quot;).
<p> Demostrar que pasa los siguientes tres casos de prueba: </p><p style="font-size:115%; margin:1em 0 0 0"> Casos de prueba </p>
<table>
<tbody>
<tr>
<th> número de entrada </th>
<th> número de salida </th>
</tr>
<tr>
<td> 7259 </td>
<td> <code>2 hr, 59 sec</code> </td>
</tr>
<tr>
<td> 86400 </td>
<td> <code>1 d</code> </td>
</tr>
<tr>
<td> 6000000 </td>
<td> <code>9 wk, 6 d, 10 hr, 40 min</code> </td>
</tr>
</tbody>
</table>
<p style="font-size:115%; margin:1em 0 0 0"> Detalles </p>
Se deben usar las siguientes cinco unidades:
<table>
<tbody>
<tr>
<th> unidad </th>
<th> sufijo utilizado en la salida </th>
<th> conversión </th>
</tr>
<tr>
<td> semana </td>
<td> <code>wk</code> </td>
<td> 1 semana = 7 días </td>
</tr>
<tr>
<td> día </td>
<td> <code>d</code> </td>
<td> 1 día = 24 horas </td>
</tr>
<tr>
<td> hora </td>
<td> <code>hr</code> </td>
<td> 1 hora = 60 minutos </td>
</tr>
<tr>
<td> minuto </td>
<td> <code>min</code> </td>
<td> 1 minuto = 60 segundos </td>
</tr>
<tr>
<td> segundo </td>
<td> <code>sec</code> </td>
<td> </td>
</tr>
</tbody>
</table>
Sin embargo, solo incluya cantidades con valores que no sean cero en la salida (por ejemplo, devuelva &quot; <code>1 d</code> &quot; y no &quot; <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code> &quot;). Dé prioridad a las unidades más grandes sobre las más pequeñas como tanto como sea posible (p. ej., devuelva <code>2 min, 10 sec</code> y no <code>1 min, 70 sec</code> o <code>130 sec</code> ) Imite el formato que se muestra en los casos de prueba (cantidades ordenadas de unidad mayor a menor y separadas por comas + espacio; valor y unidad de cada cantidad separada por espacio).
<p><hr style="margin:1em 0;"/></p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertSeconds</code> es una función.
    testString: 'assert(typeof convertSeconds === "function", "<code>convertSeconds</code> is a function.");'
  - text: ' <code>convertSeconds(7259)</code> debe devolver <code>2 hr, 59 sec</code> .'
    testString: 'assert.equal(convertSeconds(testCases[0]), results[0], "<code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.");'
  - text: <code>convertSeconds(86400)</code> debe devolver <code>1 d</code> .
    testString: 'assert.equal(convertSeconds(testCases[1]), results[1], "<code>convertSeconds(86400)</code> should return <code>1 d</code>.");'
  - text: ' <code>convertSeconds(6000000)</code> debe devolver <code>9 wk, 6 d, 10 hr, 40 min</code> .'
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
function convertSeconds (sec) {
  const localNames = ['wk', 'd', 'hr', 'min', 'sec'];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
    .map((v, i) => [v, labels[i]])
    .reduce((a, x) =>
      a.concat(x[0] ? [`${x[0]} ${x[1] || '?'}`] : []), []
    )
    .join(', ');

    // weekParts :: Int -> [Int]
  const weekParts = intSeconds => [0, 7, 24, 60, 60]
    .reduceRight((a, x) => {
      const r = a.rem;
      const mod = x !== 0 ? r % x : r;

      return {
        rem: (r - mod) / (x || 1),
        parts: [mod].concat(a.parts)
      };
    }, {
      rem: intSeconds,
      parts: []
    })
    .parts;

  return compoundDuration(localNames, sec);
}

```

</section>
