---
id: 5900f3db1000cf542c50feec
challengeType: 5
title: 'Problem 109: Darts'
videoUrl: ''
localeTitle: 'Problema 109: Dardos'
---

## Description
<section id="description"> En el juego de dardos, un jugador lanza tres dardos en un tablero objetivo que se divide en veinte secciones del mismo tamaño numeradas del uno al veinte. <p> La puntuación de un dardo está determinada por el número de la región en la que el dardo cae. Un dardo que cae fuera del anillo exterior verde / rojo tiene una puntuación de cero. Las regiones negras y cremas dentro de este anillo representan puntuaciones individuales. Sin embargo, el anillo exterior rojo / verde y el anillo medio obtienen puntuaciones dobles y triples respectivamente. En el centro del tablero hay dos círculos concéntricos llamados la región del toro u ojo de buey. El toro exterior vale 25 puntos y el toro interior es doble, vale 50 puntos. Hay muchas variaciones de reglas, pero en el juego más popular, los jugadores comenzarán con una puntuación de 301 o 501 y el primer jugador que reduzca su total de carreras a cero es el ganador. Sin embargo, es normal jugar un sistema de &quot;dobles&quot;, lo que significa que el jugador debe obtener un doble (incluida la doble diana en el centro del tablero) en su dardo final para ganar; cualquier otro dardo que reduzca su total acumulado a uno o más bajo significa que el puntaje para ese conjunto de tres dardos es &quot;busto&quot;. Cuando un jugador puede terminar con su puntaje actual, se le llama &quot;checkout&quot; y el checkout más alto es 170: T20 T20 D25 (dos agudos 20 y doble toro). Hay exactamente once formas distintas de pagar en una puntuación de 6: </p><p> D3 </p><p> D1 D2 </p><p> S2 D2 </p><p> D2 D1 </p><p> S4 D1 </p><p> S1 S1 D2 S1 T1 D1 S1 S3 D1 D1 D1 D1 D1 S2 D1 S2 S2 D1 </p><p> Tenga en cuenta que D1 D2 se considera diferente de D2 D1, ya que terminan en diferentes dobles. Sin embargo, la combinación S1 T1 D1 se considera la misma que T1 S1 D1. Además no incluiremos fallos al considerar combinaciones; por ejemplo, D3 es lo mismo que 0 D3 y 0 0 D3. Increíblemente, hay 42336 formas distintas de revisar en total. ¿De cuántas maneras distintas puede un jugador pagar con un puntaje menor a 100? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler109()</code> debe devolver 38182.
    testString: 'assert.strictEqual(euler109(), 38182, "<code>euler109()</code> should return 38182.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler109() {
  // Good luck!
  return true;
}

euler109();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
