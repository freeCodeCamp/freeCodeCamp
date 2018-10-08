---
id: 5
localeTitle: 5900f5431000cf542c510055
challengeType: 5
title: 'Problem 470: Super Ramvok'
---

## Description
<section id='description'> 
Considere un solo juego de Ramvok: 

Sea t el número máximo de turnos que dura el juego. Si t = 0, entonces el juego termina inmediatamente. De lo contrario, en cada turno i, el jugador tira un dado. Después de la tirada, si el jugador puede detener el juego y recibir un premio igual al valor de la tirada actual, o descartar la tirada y volver a intentarlo en el siguiente turno. Si i = t, entonces el rollo no puede ser descartado y el premio debe ser aceptado. Antes de que comience el juego, t es elegido por el jugador, quien debe pagar un costo por adelantado por alguna constante c. Para c = 0, t puede elegirse para ser infinito (con un costo inicial de 0). Sea R (d, c) la ganancia esperada (es decir, la ganancia neta) que recibe el jugador de un solo juego de Ramvok con un juego óptimo, dado un dado justo y costoso constante c. Por ejemplo, R (4, 0.2) = 2.65. Supongamos que el jugador tiene fondos suficientes para pagar cualquiera o todos los costos iniciales. 

Ahora considere un juego de Super Ramvok: 

En Super Ramvok, el juego de Ramvok se juega repetidamente, pero con una ligera modificación. Después de cada juego, el dado se altera. El proceso de alteración es el siguiente: el dado se lanza una vez, y si la cara resultante tiene sus puntos visibles, entonces se modifica esa cara para que esté en blanco. Si la cara ya está en blanco, se vuelve a cambiar a su valor original. Después de que se realiza la alteración, puede comenzar otro juego de Ramvok (y durante ese juego, en cada turno, el dado se lanza hasta que aparece una cara con un valor). El jugador sabe qué caras están en blanco y cuáles no están en todo momento. El juego de Super Ramvok termina una vez que todas las caras del dado están en blanco. 

Sea S (d, c) la ganancia esperada que el jugador recibe de un juego de Super Ramvok jugado de manera óptima, dado un buen dado de d-sided para comenzar (con todos los lados visibles) y costo constante c. Por ejemplo, S (6, 1) = 208.3. 

Sea F (n) = ∑4≤d≤n ∑0≤c≤n S (d, c). 

Calcule F (20), redondeado al entero más cercano. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler470()</code> debe devolver 147668794.
    testString: 'assert.strictEqual(euler470(), 147668794, "<code>euler470()</code> should return 147668794.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler470() {
  // Good luck!
  return true;
}

euler470();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
