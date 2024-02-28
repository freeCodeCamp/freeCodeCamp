---
id: 59694356a6e7011f7f1c5f4e
title: Роздача карт для FreeCell
challengeType: 1
forumTopicId: 302246
dashedName: deal-cards-for-freecell
---

# --description--

*FreeCell* — це пасьянс, представлений Полом Альфілле у системі PLATO в 1978 році. Джим Хорн з Microsoft змінив назву на FreeCell і відновив гру для DOS, а потім для Windows. У цій версії було представлено 32 000 роздач.

Як тільки гра стала популярною, Джим Хорн розкрив її алгоритм, що дало початок реалізації нових версій FreeCell, які відтворювали роздачі Microsoft. Ці роздачі пронумеровані від 1 до 32 000. Новіші версії від Microsoft мають близько 1 мільйону роздач, пронумерованих від 1 до 1 000 000, а деякі реалізації дозволяють числа поза межами цього діапазону.

Алгоритм використовує цей лінійний конгруентний метод від Microsoft C:

<ul>
  <li>$state_{n + 1} \equiv 214013 \times state_n + 2531011 \pmod{2^{31}}$</li>
  <li>$rand_n = state_n \div 2^{16}$</li>
  <li>$rand_n$ знаходиться в діапазоні від 0 до 32 767.</li>
</ul>

Алгоритм діє наступним чином:

<ol>
  <li>Надайте генератору випадкових чисел номер роздачі.
  </li><li>Створіть масив з 52 карт: туз трефи, туз бубни, туз чирви, туз піки, двійка трефи, двійка бубни і так далі (туз, 2, 3, 4, 5, 6, 7, 8, 9, 10, валет, дама, король). Індекси масиву починаються з 0 та закінчуються на 51, де туз трефи має індекс 0, а король піки — 51.</li>
  <li>Допоки масив не стане порожнім:</li>
    <ul>
      <li>Оберіть випадкову карту за <i>індексом</i>, який логічно еквівалентний <i>наступному випадковому числу</i> (mod <i>довжина масиву</i>).</li>
      <li>Поміняйте цю випадкову карту з останньою картою масиву.</li>
      <li>Видаліть цю випадкову карту з масиву. (Довжина масиву зменшується на 1.)</li>
      <li>Роздайте цю випадкову карту.</li>
    </ul>
  <li>Роздайте всі 52 карти, лицем догори, на 8 частин. Перші 8 карт роздайте на 8 частин, наступні 8 карт роздайте поверх перших 8 карт і так далі.</li>
</ol>

**Наприклад:**

**Порядок роздачі карт**

<pre> 1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52</pre>

**Гра №1**

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

**Гра №617**

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

Напишіть функцію, яка приймає номер роздачі та роздає карти в тому ж порядку, як цей алгоритм. Функція має повернути двовимірний масив, який представляє дошку FreeCell.

# --hints--

`dealFreeCell` має бути функцією.

```js
assert(typeof dealFreeCell === 'function');
```

`dealFreeCell(seed)` має повернути об’єкт.

```js
assert(typeof dealFreeCell(1) === 'object');
```

`dealFreeCell(seed)` має повернути масив довжиною 7.

```js
assert(dealFreeCell(1).length === 7);
```

`dealFreeCell(1)` має повернути масив, ідентичний до прикладу «Гра №1».

```js
assert.deepEqual(dealFreeCell(1), game1);
```

`dealFreeCell(617)` має повернути масив, ідентичний до прикладу «Гра №617».

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

  const dealtCards = [[], [], [], [], [], [], []];
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
    dealtCards[currentRow].push(card);
    currentColumn += 1;
    if (currentColumn === 8) {
      currentColumn = 0;
      currentRow += 1;
    }
  }

  return dealtCards;
}
```
