---
id: 59694356a6e7011f7f1c5f4e
title: Distribuir as cartas no Freecell
challengeType: 1
forumTopicId: 302246
dashedName: deal-cards-for-freecell
---

# --description--

O *FreeCell* é o jogo de cartas de paciência que Paul Alfille introduziu no sistema PLATO, em 1978. Jim Horne, da Microsoft, mudou o nome para FreeCell e implementou novamente o jogo no DOS e depois no Windows. A versão do Windows apresentava 32 mil distribuições numeradas.

À medida que o jogo se tornou popular, Jim Horne revelou o algoritmo, e outras implementações do FreeCell começaram a reproduzir as distribuições de cartas da versão da Microsoft. Estas distribuições eram numeradas de 1 a 32000. As versões mais recentes da Microsoft têm 1 milhão de distribuições, numeradas de 1 a 1000000. Algumas implementações permitem números fora desse intervalo.

O algoritmo usa o gerador de congruência linear do C da Microsoft:

<ul>
  <li>$state_{n + 1} \equiv 214013 \times state_n + 2531011 \pmod{2^{31}}$</li>
  <li>$rand_n = state_n \div 2^{16}$</li>
  <li>$rand_n$ está no intervalo de 0 a 32767.</li>
</ul>

Segue o algoritmo:

<ol>
  <li>Faça o seed do RNG (intervalo) com o número da distribuição.
  </li><li>Crie um array de 52 cartas: Ás de Paus, Ás de Ouro, Ás de Copas, Ás de Espadas, 2 de Paus, 2 de Ouro, e assim por diante: Ás, 2, 3, 4, 5, 6, 7, 8, 9, 10, Valete, Rainha, Rei. Os índices do array vão de 0 a 51, estando o Ás de Paus no índice 0 e o Rei de Espadas no índice 51.</li>
  <li>Até que o array esteja vazio:</li>
  <li>Escolha uma carta aleatória no índice ≡ próximo número aleatório (tamanho do array mod).</li>
    <ul>
      <li>Troque esta carta aleatória pela última carta do array.</li>
      <li>Remova esta carta aleatória do array. (O comprimento do array diminui em 1.)</li>
      <li>Distribua esta carta aleatória.</li>
    </ul>
  <li>Distribua todas as 52 cartas, com a face voltada para cima, em 8 colunas. As primeiras 8 cartas aparecem em 8 colunas, as próximas 8 cartas vão sobre as primeiras 8 cartas e assim por diante.</li>
</ol>

**Exemplo:**

**Ordenar de distribuição das cartas**

<pre> 1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52</pre>

**Jogo nº 1**

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

**Jogo nº 617**

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

Escreva uma função para receber um número de distribuição e distribuir as cartas na mesma ordem que se encontram neste algoritmo. A função deve retornar um array bidimensional representando a mesa de Freecell.

# --hints--

`dealFreeCell` deve ser uma função.

```js
assert(typeof dealFreeCell === 'function');
```

`dealFreeCell(seed)` deve retornar um objeto.

```js
assert(typeof dealFreeCell(1) === 'object');
```

`dealFreeCell(seed)` deve retornar um array de tamanho 7.

```js
assert(dealFreeCell(1).length === 7);
```

`dealFreeCell(1)` deve retornar um array idêntico ao exemple "Jogo nº 1"

```js
assert.deepEqual(dealFreeCell(1), game1);
```

`dealFreeCell(617)` deve retornar um array idêntico ao exemplo "Jogo nº 617"

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
