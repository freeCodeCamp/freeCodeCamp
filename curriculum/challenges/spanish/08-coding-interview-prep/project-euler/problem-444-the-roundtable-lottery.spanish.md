---
id: 5
localeTitle: 5900f52a1000cf542c51003b
challengeType: 5
title: 'Problem 444: The Roundtable Lottery'
---

## Description
<section id='description'> 
Un grupo de personas decide sentarse en una mesa redonda y jugar un juego de intercambio de boletos de lotería. Cada persona comienza con un boleto de lotería sin puntuación asignado al azar. Cada boleto, cuando se rasca, revela un premio de una libra entera que va desde £ 1 a £ p, sin dos boletos iguales. El objetivo del juego es que cada persona maximice sus ganancias de boletos al abandonar el juego. 

Se elige una persona arbitraria para ser el primer jugador. Al ir alrededor de la mesa, cada jugador tiene solo una de dos opciones: 

1. El jugador puede rascar su boleto y revelar su valor a todos en la mesa. 
2. El jugador puede cambiar su boleto sin puntuación por un boleto rayado de un jugador anterior, y luego dejar el juego con ese boleto. El jugador anterior luego rasca su boleto recién adquirido y revela su valor para todos en la mesa. 

El juego termina una vez que todas las entradas han sido rayadas. Todos los jugadores que queden en la mesa deben irse con sus boletos actualmente retenidos. 

Suponga que cada jugador utiliza la estrategia óptima para maximizar el valor esperado de sus ganancias de boletos. 

Sea E (p) el número esperado de jugadores que quedan en la mesa cuando el juego termina en un juego que consiste en jugadores p (por ejemplo, E (111) = 5.2912 cuando se redondea a 5 dígitos significativos). 

Deje que S1 (N) = E (p) 
Deje que Sk (N) = Sk-1 (p) para k&gt; 1 

Encuentre S20 (1014) y escriba la respuesta en notación científica redondeada a 10 dígitos significativos. Use una e minúscula para separar la mantisa y el exponente (por ejemplo, S3 (100) = 5.983679014e5). 
</section>

## Instructions
<section id='instructions'> 

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
