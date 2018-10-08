---
title: Deal cards for FreeCell
id: 59694356a6e7011f7f1c5f4e
localeTitle: 59694356a6e7011f7f1c5f4e
challengeType: 5
---

## Description
<section id='description'> 
<p> Free Cell es el juego de cartas solitario que Paul Alfille introdujo al sistema PLATO en 1978. Jim Horne, de Microsoft, cambió el nombre a FreeCell y reimplementó el juego para <a href="http://rosettacode.org/wiki/DOS" title="DOS">DOS</a> , luego <a href="http://rosettacode.org/wiki/Windows" title="Windows">Windows</a> . </p> 
<p> Esta versión introdujo 32000 ofertas numeradas. (Las <a href="http://www.solitairelaboratory.com/fcfaq.html" title="enlace: http://www.solitairelaboratory.com/fcfaq.html">preguntas frecuentes de FreeCell</a> cuentan esta historia). </p><p> A medida que el juego se hizo popular, Jim Horne reveló <a href="http://www.solitairelaboratory.com/mshuffle.txt" title="enlace: http://www.solitairelaboratory.com/mshuffle.txt">el algoritmo</a> y otras implementaciones de FreeCell comenzaron a reproducir los acuerdos de Microsoft. </p> 
<p> Estas ofertas están numeradas del 1 al 32000. </p> 
<p> Las versiones más nuevas de Microsoft tienen 1 millón de ofertas, numeradas del 1 al 1000000; Algunas implementaciones permiten números fuera de ese rango. </p><p> El algoritmo utiliza este <a href="http://rosettacode.org/wiki/linear congruential generator" title="generador lineal congruente">generador lineal congruente</a> de Microsoft C: </p> $ state_ {n + 1} \ equiv 214013 \ times state_n + 2531011 \ pmod {2 ^ {31}} $ 
$ rand_n = state_n \ div 2 ^ {16} $ 
$ rand_n $ está en el rango de 0 a 32767. 
<p> El algoritmo sigue: </p> Siembra el RNG con el número de la oferta. 
Crea una <a href="http://rosettacode.org/wiki/array" title="formación">serie</a> de 52 cartas: As of Clubs, As of Diamonds, As of Hearts, As of Spades, 2 of Clubs, 2 of Diamonds, y así sucesivamente a través de las filas: As, 2, 3, 4, 5, 6 , 7, 8, 9, 10, Jack, reina, rey. Los índices de matriz son de 0 a 51, con Ace of Clubs en 0 y King of Spades en 51. 
Hasta que la matriz esté vacía: 
Elija una tarjeta al azar en el índice ≡ siguiente número aleatorio (mod longitud de la matriz). 
Intercambia esta carta aleatoria con la última carta de la matriz. 
Eliminar esta tarjeta aleatoria de la matriz. (La longitud de la matriz se reduce en 1.) 
Repartir esta carta aleatoria. 
Reparte las 52 cartas, boca arriba, en 8 columnas. Las primeras 8 cartas van en 8 columnas, las siguientes 8 cartas van en las primeras 8 cartas, y así sucesivamente. 
Ejemplo: 
<p> Orden para repartir cartas </p> 
<p> <pre> 1 2 3 4 5 6 7 8 
9 10 11 12 13 14 15 16 
17 18 19 20 21 22 23 24 
25 26 27 28 29 30 31 32 
33 34 35 36 37 38 39 40 
41 42 43 44 45 46 47 48 
49 50 51 52 </pre></p> 
<p> Juego # 1 </p> 
<p> <pre> [ 
[&#39;JD&#39;, &#39;2D&#39;, &#39;9H&#39;, &#39;JC&#39;, &#39;5D&#39;, &#39;7H&#39;, &#39;7C&#39;, &#39;5H&#39;], 
[&#39;KD&#39;, &#39;KC&#39;, &#39;9S&#39;, &#39;5S&#39;, &#39;AD&#39;, &#39;QC&#39;, &#39;KH&#39;, &#39;3H&#39;], 
[&#39;2S&#39;, &#39;KS&#39;, &#39;9D&#39;, &#39;QD&#39;, &#39;JS&#39;, &#39;AS&#39;, &#39;AH&#39; , &#39;3C&#39;], 
[&#39;4C&#39;, &#39;5C&#39;, &#39;TS&#39;, &#39;QH&#39;, &#39;4H&#39;, &#39;AC&#39;, &#39;4D&#39;, &#39;7S&#39;], 
[&#39;3S&#39;, &#39;TD&#39; , &#39;4S&#39;, &#39;TH&#39;, &#39;8H&#39;, &#39;2C&#39;, &#39;JH&#39;, &#39;7D&#39;], 
[&#39;6D&#39;, &#39;8S&#39;, &#39;8D&#39;, &#39;QS&#39;, &#39;6C&#39;, &#39;3D &#39;,&#39; 8C &#39;,&#39; TC &#39;], 
[&#39; 6S &#39;,&#39; 9C &#39;,&#39; 2H &#39;,&#39; 6H &#39;] 
] </pre></p> 
<p> Juego # 617 </p> 
<p> <pre> [ 
[&#39;7D&#39;, &#39;AD&#39;, &#39;5C&#39;, &#39;3S&#39;, &#39;5S&#39;, &#39;8C&#39;, &#39;2D&#39;, &#39;AH&#39;], 
[&#39;TD&#39;, &#39;7S&#39;, &#39;QD&#39;, &#39;AC&#39;, &#39;6D&#39;, &#39;8H&#39;, &#39;AS&#39;, &#39;KH&#39;], 
[&#39;TH&#39;, &#39;QC&#39;, &#39;3H&#39;, &#39;9D&#39;, &#39;6S&#39;, &#39;8D&#39;, &#39;3D&#39; , &#39;TC&#39;], 
[&#39;KD&#39;, &#39;5H&#39;, &#39;9S&#39;, &#39;3C&#39;, &#39;8S&#39;, &#39;7H&#39;, &#39;4D&#39;, &#39;JS&#39;], 
[&#39;4C&#39;, &#39;QS&#39; , &#39;9C&#39;, &#39;9H&#39;, &#39;7C&#39;, &#39;6H&#39;, &#39;2C&#39;, &#39;2S&#39;], 
[&#39;4S&#39;, &#39;TS&#39;, &#39;2H&#39;, &#39;5D&#39;, &#39;JC&#39;, &#39;6C &#39;,&#39; JH &#39;,&#39; QH &#39;], 
[&#39; JD &#39;,&#39; KS &#39;,&#39; KC &#39;,&#39; 4H &#39;] 
] </pre></p> 
Tarea: 
<p> Escriba una función para tomar un número de acuerdo y tarjetas de acuerdo en el mismo orden que este algoritmo. </p> 
<p> La función debe devolver una matriz bidimensional que representa la placa FreeCell. </p> 
<p> Las ofertas también pueden <a href="http://freecellgamesolutions.com/" title="enlace: http://freecellgamesolutions.com/">compararse con las soluciones FreeCell para 1000000 juegos</a> . </p> 
<p> (Invoca una solución de video y muestra el trato inicial.) </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dealFreeCell</code> es una función.
    testString: 'assert(typeof dealFreeCell === "function", "<code>dealFreeCell</code> is a function.");'
  - text: <code>dealFreeCell(seed)</code> debe devolver un objeto.
    testString: 'assert(typeof dealFreeCell(1) === "object", "<code>dealFreeCell(seed)</code> should return an object.");'
  - text: <code>dealFreeCell(seed)</code> debe devolver una matriz de longitud 7.
    testString: 'assert(dealFreeCell(1).length === 7, "<code>dealFreeCell(seed)</code> should return an array of length 7.");'
  - text: &#39; <code>dealFreeCell(1)</code> debe devolver una matriz idéntica al ejemplo &quot;Juego # 1&quot;&#39;
    testString: 'assert.deepEqual(dealFreeCell(1), game1, "<code>dealFreeCell(1)</code> should return an array identical to example "Game #1"");'
  - text: &#39; <code>dealFreeCell(617)</code> debe devolver una matriz idéntica al ejemplo &quot;Juego # 617&quot;&#39;
    testString: 'assert.deepEqual(dealFreeCell(617), game617, "<code>dealFreeCell(617)</code> should return an array identical to example "Game #617"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dealFreeCell (seed) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
// RNG
function FreeCellRNG (seed) {
  return {
    lastNum: seed,
    next() {
      this.lastNum = ((214013 * this.lastNum) + 2531011) % (Math.pow(2, 31));
      return this.lastNum >> 16;
    }
  };
}
// Get cards
function getDeck() {
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
  const suits = ['C', 'D', 'H', 'S'];
  const cards = [];
  for (let i = 0; i < ranks.length; i += 1) {
    for (let j = 0; j < suits.length; j += 1) {
      cards.push(`${ranks[i]}${suits[j]}`);
    }
  }
  return cards;
}
function dealFreeCell(seed) {
  const rng = FreeCellRNG(seed);
  const deck = getDeck();

  const deltCards = [[], [], [], [], [], [], []];
  let currentColumn = 0;
  let currentRow = 0;

  let rand;
  let temp;
  let card;
  while (deck.length > 0) {
    // Choose a random card
    rand = rng.next() % deck.length;

    // Swap this random card with the last card in the array
    temp = deck[deck.length - 1];
    deck[deck.length - 1] = deck[rand];
    deck[rand] = temp;

    // Remove this card from the array
    card = deck.pop();

    // Deal this card
    deltCards[currentRow].push(card);
    currentColumn += 1;
    if (currentColumn === 8) {
      currentColumn = 0;
      currentRow += 1;
    }
  }

  return deltCards;
}

```

</section>
