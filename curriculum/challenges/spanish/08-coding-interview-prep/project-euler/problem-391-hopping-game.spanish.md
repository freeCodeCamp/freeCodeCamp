---
id: 5900f4f31000cf542c510006
challengeType: 5
title: 'Problem 391: Hopping Game'
videoUrl: ''
localeTitle: 'Problema 391: Juego de saltar'
---

## Description
<section id="description"> Sea sk el número de 1 al escribir los números del 0 al k en binario. Por ejemplo, escribiendo 0 a 5 en binario, tenemos 0, 1, 10, 11, 100, 101. Hay siete 1, entonces s5 = 7. La secuencia S = {sk: k ≥ 0} comienza {0, 1 , 2, 4, 5, 7, 9, 12, ...}. <p> Un juego es jugado por dos jugadores. Antes de que comience el juego, se elige un número n. Un contador c comienza en 0. En cada turno, el jugador elige un número de 1 a n (inclusive) y aumenta c en ese número. El valor resultante de c debe ser un miembro de S. Si no hay más movimientos válidos, el jugador pierde. </p><p> Por ejemplo: que n = 5. c comienza en 0. El jugador 1 elige 4, por lo que c se convierte en 0 + 4 = 4. El jugador 2 elige 5, por lo que c se convierte en 4 + 5 = 9. El jugador 1 elige 3, por lo que c se convierte en 9 + 3 = 12. etc. Tenga en cuenta que c siempre debe pertenecer a S, y cada jugador puede aumentar c en a lo sumo n. </p><p> Deje que M (n) sea el número más alto que el primer jugador puede elegir en su primer turno para forzar una victoria, y M (n) = 0 si no hay tal movimiento. Por ejemplo, M (2) = 2, M (7) = 1 y M (20) = 4. </p><p> Dado Σ (M (n)) 3 = 8150 para 1 ≤ n ≤ 20. </p><p> Encuentre Σ (M (n)) 3 para 1 ≤ n ≤ 1000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler391()</code> debe devolver 61029882288.
    testString: 'assert.strictEqual(euler391(), 61029882288, "<code>euler391()</code> should return 61029882288.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler391() {
  // Good luck!
  return true;
}

euler391();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
