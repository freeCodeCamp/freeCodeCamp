---
id: 59694356a6e7011f7f1c5f4e
title: Reparte cartas para FreeCell
challengeType: 1
forumTopicId: 302246
dashedName: deal-cards-for-freecell
---

# --description--

*FreeCell* es el juego de cartas solitario que Paul Alfille presentó para el sistema PLATO en 1978. Jim Horne, en Microsoft, cambió el nombre a FreeCell y reimplementó el juego para DOS, luego Windows. Esta version introdujo 32000 repartidas numeradas.

Como el juego se hizo popular, Jim Horne revelo el algoritmo, y otras implementaciones de FreeCell comenzaron a reproducir los turnos de Microsoft. Estos turnos son numerados desde 1 to 32000. Nuevas versiones de Microsoft tienen 1 million de turnos, numerados desde 1 a 1000000; algunas implementaciones permiten números fuera de ese rango.

El algoritmo usa este generador congruencial lineal de Microsoft C:

<ul>
  <li>$state_{n + 1} \equiv 214013 \times state_n + 2531011 \pmod{2^{31}}$</li>
  <li>$rand_n = state_n \div 2^{16}$</li>
  <li>$rand_n$ is in range 0 to 32767.</li>
</ul>

A continuación el algoritmo:

<ol>
  <li>Sembrar la RNG con el número del turno.
  </li><li>Crea un arreglo de 52 cartas: As de Tréboles, As de Diamantes, As de Corazones, As de Espadas, 2 de Tréboles, 2 de Diamantes, y así sucesivamente por los rangos: As, 2, 3, 4, 5, 6, 7, 8, 9, 10, Sota, Reina, Rey. Los índices del arreglo son de 0 a 51, con As de Tréboles en 0, y Rey de Espadas al 51.</li>
  <li>Hasta que el arreglo quede vacío:</li>
  <li>Escoge una carta aleatoria al índice ≡ siguiente número aleatorio (mod array length).</li>
    <ul>
      <li>Intercambia esta carta aleatoria con la última carta del arreglo.</li>
      <li>Remueve esta carta aleatoria del arreglo. (Longitud del arreglo bajara en 1)</li>
      <li>Reparte esta carta aleatoria.</li>
    </ul>
  <li>Reparte todas las 52 cartas, boca arriba, sobre 8 columnas. Las primeras 8 cartas van en 8 columnas, las siguientes 8 van sobre las primeras 8 cartas, y así sucesivamente.</li>
</ol>

**Por ejemplo:**

**Ordena para repartir cartas**

<pre> 1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52</pre>

**Juego #1**

```js
[
  ['JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H'],
  ['KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H'],
  ['2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C'],
  ['4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S'],
  ['3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D'],
  ['6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC'],
  ['6S', '9C', '2H', '6H']
]
```

**Juego nº 617**

```js
[
  ['7D', 'AD', '5C', '3S', '5S', '8C', '2D', 'AH'],
  ['TD', '7S', 'QD', 'AC', '6D', '8H', 'AS', 'KH'],
  ['TH', 'QC', '3H', '9D', '6S', '8D', '3D', 'TC'],
  ['KD', '5H', '9S', '3C', '8S', '7H', '4D', 'JS'],
  ['4C', 'QS', '9C', '9H', '7C', '6H', '2C', '2S'],
  ['4S', 'TS', '2H', '5D', 'JC', '6C', 'JH', 'QH'],
  ['JD', 'KS', 'KC', '4H']
]
```

# --instructions--

Escribe una función que tome un número de reparto y reparta las cartas en el mismo orden como este algoritmo. La función debe retornar un arreglo de dos dimensiones representando el tablero de FreeCell.

# --hints--

`dealFreeCell` debe ser una función.

```js
assert(typeof dealFreeCell === 'function');
```

`dealFreeCell(seed)` debe devolver un objeto.

```js
assert(typeof dealFreeCell(1) === 'object');
```

`dealFreeCell(seed)` debe devolver un arreglo de tamaño 7.

```js
assert(dealFreeCell(1).length === 7);
```

`dealFreeCell(1)` debería devolver un arreglo identico al ejemplo "Juego #1"

```js
assert.deepEqual(dealFreeCell(1), game1);
```

`dealFreeCell(617)` debería devolver un arreglo identico al ejemplo "Juego #617"

```js
assert.deepEqual(dealFreeCell(617), game617);
```

# --seed--

## --after-user-code--

```js
const replaceThis = 3;
const game1 = [
  ['JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H'],
  ['KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H'],
  ['2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C'],
  ['4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S'],
  ['3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D'],
  ['6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC'],
  ['6S', '9C', '2H', '6H']
];
const game617 = [
  ['7D', 'AD', '5C', '3S', '5S', '8C', '2D', 'AH'],
  ['TD', '7S', 'QD', 'AC', '6D', '8H', 'AS', 'KH'],
  ['TH', 'QC', '3H', '9D', '6S', '8D', '3D', 'TC'],
  ['KD', '5H', '9S', '3C', '8S', '7H', '4D', 'JS'],
  ['4C', 'QS', '9C', '9H', '7C', '6H', '2C', '2S'],
  ['4S', 'TS', '2H', '5D', 'JC', '6C', 'JH', 'QH'],
  ['JD', 'KS', 'KC', '4H']
];
```

## --seed-contents--

```js
function dealFreeCell(seed) {

  return true;
}
```

# --solutions--

```js
// RNG
function FreeCellRNG(seed) {
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
