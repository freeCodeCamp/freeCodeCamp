---
id: 5
localeTitle: 5900f5221000cf542c510033
challengeType: 5
title: 'Problem 436: Unfair wager'
---

## Description
<section id='description'> 
Julie le propone la siguiente apuesta a su hermana Louise. 
Ella sugiere que jueguen un juego de azar para determinar quién lavará los platos. 
Para este juego, usarán un generador de números aleatorios independientes distribuidos uniformemente entre 0 y 1. 
El juego comienza con S = 0. 
La primera jugadora, Louise, suma a S diferentes números aleatorios del generador hasta que S&gt; 1 y registra su último número aleatorio &#39;x&#39;. 
La segunda jugadora, Julie, continúa agregando a S diferentes números aleatorios del generador hasta S&gt; 2 y registra su último número aleatorio &#39;y&#39;. 
El jugador con el número más alto gana y el perdedor lava los platos, es decir, si y&gt; x el segundo jugador gana. 

Por ejemplo, si el primer jugador roba 0.62 y 0.44, el primer turno de jugador termina desde 0.62 + 0.44&gt; 1 yx = 0.44. 
Si los segundos jugadores empatan 0.1, 0.27 y 0.91, el segundo turno de jugador termina desde 0.62 + 0.44 + 0.1 + 0.27 + 0.91&gt; 2 y y = 0.91. 
Desde y&gt; x, el segundo jugador gana. 

Louise lo piensa por un segundo, y se opone: &quot;Eso no es justo&quot;. 
¿Cuál es la probabilidad de que el segundo jugador gane? 
Da tu respuesta redondeada a 10 lugares detrás del punto decimal en la forma 0.abcdefghij 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler436()</code> debe devolver 0.5276662759.
    testString: 'assert.strictEqual(euler436(), 0.5276662759, "<code>euler436()</code> should return 0.5276662759.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler436() {
  // Good luck!
  return true;
}

euler436();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
