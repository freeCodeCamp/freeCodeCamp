---
id: 5900f52a1000cf542c51003b
challengeType: 5
title: 'Problem 444: The Roundtable Lottery'
videoUrl: ''
localeTitle: 'Problema 444: La Lotería de la Mesa Redonda'
---

## Description
<section id="description"> Un grupo de personas decide sentarse en una mesa redonda y jugar un juego de intercambio de billetes de lotería. Cada persona comienza con un boleto de lotería sin puntuación asignado al azar. Cada boleto, cuando se rasca, revela un premio de una libra entera que va desde £ 1 a £ p, sin dos boletos iguales. El objetivo del juego es que cada persona maximice sus ganancias de boletos al abandonar el juego. <p> Una persona arbitraria es elegida para ser el primer jugador. Al ir alrededor de la mesa, cada jugador tiene solo una de dos opciones: </p><ol><li> El jugador puede rascar su boleto y revelar su valor a todos en la mesa. </li><li> El jugador puede intercambiar su boleto sin puntuación por un boleto rayado de un jugador anterior, y luego dejar el juego con ese boleto. El jugador anterior luego rasca su boleto recién adquirido y revela su valor para todos en la mesa. </li></ol><p> El juego termina una vez que todos los boletos han sido rayados. Todos los jugadores que queden en la mesa deben irse con sus boletos actualmente retenidos. </p><p> Suponga que cada jugador usa la estrategia óptima para maximizar el valor esperado de sus ganancias de boletos. </p><p> Sea E (p) el número esperado de jugadores que quedan en la mesa cuando el juego termina en un juego que consiste en jugadores p (por ejemplo, E (111) = 5.2912 cuando se redondea a 5 dígitos significativos). </p><p> Sea S1 (N) = E (p) Sea Sk (N) = Sk-1 (p) para k&gt; 1 </p><p> Encuentre S20 (1014) y escriba la respuesta en notación científica redondeada a 10 dígitos significativos. Use una e minúscula para separar la mantisa y el exponente (por ejemplo, S3 (100) = 5.983679014e5). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler444()</code> debe devolver 1.200856722e + 263.
    testString: 'assert.strictEqual(euler444(), 1.200856722e+263, "<code>euler444()</code> should return 1.200856722e+263.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler444() {
  // Good luck!
  return true;
}

euler444();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
