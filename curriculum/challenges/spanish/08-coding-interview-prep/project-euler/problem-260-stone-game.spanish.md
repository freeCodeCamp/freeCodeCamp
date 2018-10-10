---
id: 5900f4701000cf542c50ff83
challengeType: 5
title: 'Problem 260: Stone Game'
videoUrl: ''
localeTitle: 'Problema 260: Juego de piedras'
---

## Description
<section id="description"> Un juego se juega con tres pilas de piedras y dos jugadores. En su turno, un jugador quita una o más piedras de las pilas. Sin embargo, si toma piedras de más de una pila, debe quitar la misma cantidad de piedras de cada una de las pilas seleccionadas. <p> En otras palabras, el jugador elige algunos N&gt; 0 y elimina: N piedras de cualquier pila individual; o N piedras de cada una de las dos pilas (2N total); o N piedras de cada una de las tres pilas (3N total). El jugador que toma la última piedra (s) gana el juego. </p><p> Una configuración ganadora es aquella en la que el primer jugador puede forzar una victoria. Por ejemplo, (0,0,13), (0,11,11) y (5,5,5) son configuraciones ganadoras porque el primer jugador puede eliminar inmediatamente todas las piedras. </p><p> Una configuración perdida es aquella en la que el segundo jugador puede forzar una victoria, sin importar lo que haga el primer jugador. Por ejemplo, (0,1,2) y (1,3,3) están perdiendo configuraciones: cualquier movimiento legal deja una configuración ganadora para el segundo jugador. </p><p> Considere todas las configuraciones perdidas (xi, yi, zi) donde xi ≤ yi ≤ zi ≤ 100. Podemos verificar que Σ (xi + yi + zi) = 173895 para estas. </p><p> Encuentre Σ (xi + yi + zi) donde (xi, yi, zi) se extiende sobre las configuraciones perdidas con xi ≤ yi ≤ zi ≤ 1000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler260()</code> debe devolver 167542057.
    testString: 'assert.strictEqual(euler260(), 167542057, "<code>euler260()</code> should return 167542057.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler260() {
  // Good luck!
  return true;
}

euler260();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
