---
id: 5
localeTitle: 5900f4971000cf542c50ffa9
challengeType: 5
title: 'Problem 298: Selective Amnesia'
---

## Description
<section id='description'> 
Larry y Robin juegan un juego de memoria que incluye una secuencia de números aleatorios entre 1 y 10, ambos incluidos, que se repiten uno por uno. Cada jugador puede recordar hasta 5 números anteriores. Cuando el número al que se llama está en la memoria de un jugador, ese jugador recibe un punto. Si no es así, el jugador agrega el número llamado a su memoria, eliminando otro número si su memoria está llena. 

Ambos jugadores comienzan con recuerdos vacíos. Ambos jugadores siempre agregan nuevos números perdidos a su memoria, pero utilizan una estrategia diferente para decidir qué número eliminar: 
La estrategia de Larry es eliminar el número que no se ha llamado en el tiempo más largo. 
La estrategia de Robin es eliminar el número que ha estado en la memoria por más tiempo. 

Ejemplo juego: Girar 
CalledNumber 
Larry&#39;smemory 
Larry&#39;sscore 
Robin&#39;smemory 
Robin&#39;sscore 
1 
1 
1 
0 
1 
0 
2 
2 
1,2 
0 
1,2 
0 
3 
4 
1,2,4 
0 
1,2,4 
0 
4 
6 
1,2,4,6 
0 
1,2,4,6 
0 
5 
1 
1,2,4,6 
1 
1,2,4,6 
1 
6 
8 
1,2,4,6,8 
1 
1,2,4,6,8 
1 
7 
10 
1,4,6,8,10 
1 
2,4,6,8,10 
1 
8 
2 
1,2,6,8,10 
1 
2,4,6,8 , 10 
2 
9 
4 
1,2,4,8,10 
1 
2,4,6,8,10 
3 
10 
1 
1,2,4,8,10 
2 
1 , 4,6,8,10 
3 


Denotando la puntuación de Larry por L y la puntuación de Robin por R, ¿cuál es el valor esperado de | LR | después de 50 vueltas? Da tu respuesta redondeada a ocho decimales usando el formato x.xxxxxxxx. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler298()</code> debe devolver 1.76882294.
    testString: 'assert.strictEqual(euler298(), 1.76882294, "<code>euler298()</code> should return 1.76882294.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler298() {
  // Good luck!
  return true;
}

euler298();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
