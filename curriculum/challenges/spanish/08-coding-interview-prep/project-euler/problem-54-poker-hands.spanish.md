---
id: 5
localeTitle: 5900f3a21000cf542c50feb5
challengeType: 5
title: 'Problem 54: Poker hands'
---

## Description
<section id='description'> 
En el juego de cartas de póker, una mano consta de cinco cartas y se clasifican, de la más baja a la más alta, de la siguiente manera: 
Carta alta: carta de mayor valor. 
Un par: Dos cartas del mismo valor. 
dos pares: dos pares diferentes. 
Three of a Kind: Tres cartas del mismo valor. 
Recta: Todas las cartas son valores consecutivos. 
Flush: Todas las cartas del mismo palo. 
Full House: Tres de una clase y una pareja. 
Four of a Kind: Cuatro cartas del mismo valor. 
Descarga directa: todas las cartas son valores consecutivos del mismo palo. 
Escalera Real: Diez, Jack, Reina, Rey, As, en el mismo palo. 
Las cartas se valoran en el orden: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Reina, Rey, As. 
Si dos jugadores tienen las mismas manos clasificadas, el rango compuesto por el valor más alto gana; por ejemplo, un par de ochos supera un par de cinco (vea el ejemplo 1 a continuación). Pero si dos rangos empatan, por ejemplo, ambos jugadores tienen un par de reinas, entonces se comparan las cartas más altas en cada mano (ver el ejemplo 4 a continuación); si las cartas más altas se empatan, se comparan las siguientes cartas más altas, y así sucesivamente. 
Considera las siguientes cinco manos repartidas a dos jugadores: 

Mano Jugador 1 Jugador 2 Ganador 
1 5H 5C 6S 7S KDPair of Fives 2C 3S 8S 8D TDPair of Eights Player 2 
2 5D 8C 9S JS ACHasta la carta más alta Ace 2C 5C 7D 8S QHLa carta más alta Queen Player 1 
3 2D 9C AS AH Tree Aces 3D 6D 7D TD QDFlush with Diamonds Player 2 
4 4D 6S 9H QH QCPair of QueensLa carta más alta Nueve 3D 6D 7H QD QSPair of QueensLa carta más alta Seven Player 1 
5 2H 2D 4C 2D 4C 4D 4SFull HouseWith Three Fours 3C 3D 3S 9S 9DFull Houseewith Three Threes Player 1 

El archivo, poker.txt, contiene mil manos aleatorias repartidas a dos jugadores. Cada línea del archivo contiene diez cartas (separadas por un solo espacio): las cinco primeras son las cartas del Jugador 1 y las cinco últimas son las cartas del Jugador 2. Puede suponer que todas las manos son válidas (sin caracteres no válidos ni cartas repetidas), la mano de cada jugador no tiene un orden específico y en cada mano hay un claro ganador. 
¿Cuántas manos gana el jugador 1? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler54()</code> debe devolver 376.
    testString: 'assert.strictEqual(euler54(), 376, "<code>euler54()</code> should return 376.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler54() {
  // Good luck!
  return true;
}

euler54();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
