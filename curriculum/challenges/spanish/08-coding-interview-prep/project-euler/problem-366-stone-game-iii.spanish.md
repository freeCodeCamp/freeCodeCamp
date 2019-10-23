---
id: 5900f4da1000cf542c50ffed
challengeType: 5
title: 'Problem 366: Stone Game III'
videoUrl: ''
localeTitle: 'Problema 366: Juego de piedra III'
---

## Description
<section id="description"> Dos jugadores, Anton y Bernhard, están jugando el siguiente juego. Hay una pila de n piedras. El primer jugador puede eliminar cualquier número positivo de piedras, pero no toda la pila. Después de eso, cada jugador puede quitar a lo sumo el doble de la cantidad de piedras que su oponente tomó en el movimiento anterior. El jugador que quita la última piedra gana. <p> Ej. N = 5 Si el primer jugador toma algo más de una piedra, el siguiente jugador podrá tomar todas las piedras restantes. Si el primer jugador toma una piedra, dejando cuatro, su oponente tomará también una piedra, dejando tres piedras. El primer jugador no puede tomar los tres porque puede tomar como máximo 2x1 = 2 piedras. Así que digamos que toma también una piedra, dejando 2. El segundo jugador puede tomar las dos piedras restantes y gana. Entonces 5 es una posición perdedora para el primer jugador. Para algunas posiciones ganadoras hay más de un movimiento posible para el primer jugador. Por ejemplo, cuando n = 17 el primer jugador puede quitar una o cuatro piedras. </p><p> Sea M (n) el número máximo de piedras que el primer jugador puede tomar de una posición ganadora en su primer turno y M (n) = 0 para cualquier otra posición. </p><p> ∑M (n) para n≤100 es 728. </p><p> Encuentra ∑M (n) para n≤1018. Da tu respuesta módulo 108. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler366()</code> debe devolver 88351299.
    testString: 'assert.strictEqual(euler366(), 88351299, "<code>euler366()</code> should return 88351299.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler366() {
  // Good luck!
  return true;
}

euler366();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
