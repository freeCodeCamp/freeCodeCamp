---
id: 59694356a6e7011f7f1c5f4e
title: Dai le carte per FreeCell
challengeType: 1
forumTopicId: 302246
dashedName: deal-cards-for-freecell
---

# --description--

*FreeCell* è il gioco di carte solitario che Paul Alfille ha introdotto nel sistema PLATO nel 1978. Jim Horne, a Microsoft, cambiò il nome a FreeCell e ha reimplementato il gioco per DOS e poi per Windows. Questa versione ha introdotto 32000 mani numerate.

Come il gioco è diventato più popolare, Jim Horne ha rivelato l'algoritmo, e altre implementazioni di FreeCell hanno iniziato a riprodutte le mani di Microsoft. Queste mani sono numerate da 1 a 32000. Versioni più nuove da Microsoft hanno 1 milione di mani, numerate da 1 a 1000000; alcune implementazioni permettono numeri al di fuori di quel range.

L'algoritmo usa questo generatore congruenziale lineare da Microsoft C:

<ul>
  <li>$state_{n + 1} \equiv 214013 \times state_n + 2531011 \pmod{2^{31}}$</li>
  <li>$rand_n = state_n \div 2^{16}$</li>
  <li>$rand_n$ is in range 0 to 32767.</li>
</ul>

L'algoritmo segue:

<ol>
  <li>Fai il seed del RNG con il numero della mano.
  </li><li>Crea un array di 52 carte: Asso di Fiori, Asso di Quadri, Asso di Cuori, Asso di Picche, 2 di Fiori, 2 di Quadri, e così via tra i semi: Asso, 2, 3, 4, 5, 6, 7, 8, 9, 10, Fante, Regina, Re. Gli indici dell'array sono da 0 a 51, con l'asso di fiori a 0, e Re di picche a 51.</li>
  <li>Fino a quando l'array non è vuoto:</li>
  <li>Scegli una carta casuale dall'indice ≡ prossimo numero casuale (modulo lunghezza dell'array).</li>
    <ul>
      <li>Scambia questa carta casuale con l'ultima carta dell'array.</li>
      <li>Rimuovi questa carta casuale dall'array. (La lunghezza dell'array scende di 1.)</li>
      <li>Distribuisci questa carta casuale.</li>
    </ul>
  <li>Distribuisci tutte le 52 carte, a faccia in su, su 8 colonne. Le prime 8 carte vanno in 8 colonne, le sucessive 8 carte vanno sulle prime 8 carte, e così via.</li>
</ol>

**Per esempio:**

**Ordine in cui dare le carte**

<pre> 1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52</pre>

**Gioco #1**

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

**Gioco #617**

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

Scrivi una funzione che prende un numero di mano e distribuisce le carte nello stesso ordine di questo algoritmo. La funzione deve restituire un array bidimensionale rappresentante il tavolo di FreeCell.

# --hints--

`dealFreeCell` dovrebbe essere una funzione.

```js
assert(typeof dealFreeCell === 'function');
```

`dealFreeCell(seed)` dovrebbe restituire un oggetto.

```js
assert(typeof dealFreeCell(1) === 'object');
```

`dealFreeCell(seed)` dovrebbe restituire un array di lunghezza 7.

```js
assert(dealFreeCell(1).length === 7);
```

`dealFreeCell(1)` dovrebbe restituire un array identico all'esempio "Game #1"

```js
assert.deepEqual(dealFreeCell(1), game1);
```

`dealFreeCell(617)` dovrebbe restituire un array identico all'esempio "Game #617"

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
