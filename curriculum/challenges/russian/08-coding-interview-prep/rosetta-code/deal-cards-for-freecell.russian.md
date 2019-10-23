---
title: Deal cards for FreeCell
id: 59694356a6e7011f7f1c5f4e
challengeType: 5
forumTopicId: 302246
localeTitle: Карты сделок для FreeCell
---

## Description
<section id='description'>
<p> Free Cell - это карточная игра для пасьянсов, которую Пол Альфил представил системе PLATO в 1978 году. Джим Хорн в Microsoft заменил имя на FreeCell и переопределил игру для <a href="http://rosettacode.org/wiki/DOS" title="DOS">DOS</a> , а затем <a href="http://rosettacode.org/wiki/Windows" title="Windows">Windows</a> . </p><p> В этой версии реализовано 32000 номеров. ( <a href="http://www.solitairelaboratory.com/fcfaq.html" title="ссылка: http://www.solitairelaboratory.com/fcfaq.html">Часто задаваемые вопросы FreeCell</a> рассказывают об этой истории.) </p><p> Когда игра стала популярной, Джим Хорн раскрыл <a href="http://www.solitairelaboratory.com/mshuffle.txt" title="ссылка: http://www.solitairelaboratory.com/mshuffle.txt">алгоритм</a> , а другие реализации FreeCell начали воспроизводить сделки Microsoft. </p><p> Эти сделки пронумерованы от 1 до 32000. </p><p> Более новые версии от Microsoft имеют 1 миллион сделок, пронумерованных от 1 до 1000000; некоторые реализации позволяют использовать номера за пределами этого диапазона. </p><p> Алгоритм использует этот <a href="http://rosettacode.org/wiki/linear congruential generator" title="линейный конгруэнтный генератор">линейный конгруэнтный генератор</a> от Microsoft C: </p> $ state_ {n + 1} \ equiv 214013 \ times state_n + 2531011 \ pmod {2 ^ {31}} $ $ rand_n = state_n \ div 2 ^ {16} $ $ rand_n $ находится в диапазоне от 0 до 32767. <p> Алгоритм: </p> Выделите RNG с номером сделки. Создайте <a href="http://rosettacode.org/wiki/array" title="массив">массив</a> из 52 карт: туз клубов, туз бриллиантов, туз сердец, туз пик, 2 из клубов, 2 бриллиантов и т. Д. Через звания: туз, 2, 3, 4, 5, 6, 7, 8, 9, 10, Джек, Королева, Король. Индексы массива от 0 до 51, с Ace of Clubs в 0 и King of Spades - 51. Пока массив не будет пустым: выберите случайную карту с индексом ≡ следующее случайное число (длина массива мод). Поменяйте эту случайную карту последней карточкой массива. Удалите эту случайную карту из массива. (Длина массива снижается на 1.) Обработайте эту случайную карту. Сделки все 52 карты, лицевой стороной вверх, через 8 столбцов. Первые 8 карт идут в 8 столбцах, следующие 8 карт идут на первые 8 карт и так далее. Пример: <p> Заказать карты </p><p></p><pre> 1 2 3 4 5 6 7 8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52 </pre><p></p><p> Игра №1 </p><p></p><pre> [
[&#39;JD&#39;, &#39;2D&#39;, &#39;9H&#39;, &#39;JC&#39;, &#39;5D&#39;, &#39;7H&#39;, &#39;7C&#39;, &#39;5H&#39;],
[&#39;KD&#39;, &#39;KC&#39;, &#39;9S&#39;, &#39;5S&#39;, &#39;AD&#39;, &#39;QC&#39;, &#39;KH&#39;, &#39;3H&#39;],
[&#39;2S&#39;, &#39;KS&#39;, &#39;9D&#39;, &#39;QD&#39;, &#39;JS&#39;, &#39;AS&#39;, &#39;AH&#39;, &#39;3C&#39;],
[&#39;4C&#39;, &#39;5C&#39;, &#39;TS&#39;, &#39;QH&#39;, &#39;4H&#39;, &#39;AC&#39;, &#39;4D&#39;, &#39;7S&#39;],
[3S, TD, 4S, TH, 8H, 2C, JH, 7D,
[6D, 8S, 8D, QS, 6C, 3D, 8C,
[&#39;6S&#39;, &#39;9C&#39;, &#39;2H&#39;, &#39;6H&#39;]
] </pre><p></p><p> Игра № 617 </p><p></p><pre> [
[&#39;7D&#39;, &#39;AD&#39;, &#39;5C&#39;, &#39;3S&#39;, &#39;5S&#39;, &#39;8C&#39;, &#39;2D&#39;, &#39;AH&#39;],
[&#39;TD&#39;, &#39;7S&#39;, &#39;QD&#39;, &#39;AC&#39;, &#39;6D&#39;, &#39;8H&#39;, &#39;AS&#39;, &#39;KH&#39;],
[&#39;TH&#39;, &#39;QC&#39;, &#39;3H&#39;, &#39;9D&#39;, &#39;6S&#39;, &#39;8D&#39;, &#39;3D&#39;, &#39;TC&#39;],
[&#39;KD&#39;, &#39;5H&#39;, &#39;9S&#39;, &#39;3C&#39;, &#39;8S&#39;, &#39;7H&#39;, &#39;4D&#39;, &#39;JS&#39;],
[4C, QS, 9C, 9H, 7C,
[&#39;4S&#39;, &#39;TS&#39;, &#39;2H&#39;, &#39;5D&#39;, &#39;JC&#39;, &#39;6C&#39;, &#39;JH&#39;, &#39;QH&#39;],
[&#39;JD&#39;, &#39;KS&#39;, &#39;KC&#39;, &#39;4H&#39;]
] </pre><p></p> Задача: <p> Напишите функцию, чтобы взять номер сделки и раздавать карты в том же порядке, что и этот алгоритм. </p><p> Функция должна возвращать двухмерный массив, представляющий плату FreeCell. </p><p> Сделки можно также проверить на <a href="http://freecellgamesolutions.com/" title="ссылка: http://freecellgamesolutions.com/">решения FreeCell для 1000000 игр</a> . </p><p> (Вызов видео решения, и он отображает первоначальную сделку.) </p>
</section>

## Instructions
<section id='instructions'>
Write a function to take a deal number and deal cards in the same order as this algorithm. The function must return a two dimensional array representing the FreeCell board.
Deals can also be checked against <a href="https://freecellgamesolutions.com/" target="_blank">FreeCell solutions to 1000000 games</a>. (Summon a video solution, and it displays the initial deal.)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dealFreeCell</code> is a function.
    testString: assert(typeof dealFreeCell === 'function');
  - text: <code>dealFreeCell(seed)</code> should return an object.
    testString: assert(typeof dealFreeCell(1) === 'object');
  - text: <code>dealFreeCell(seed)</code> should return an array of length 7.
    testString: assert(dealFreeCell(1).length === 7);
  - text: '<code>dealFreeCell(1)</code> should return an array identical to example "Game #1"'
    testString: assert.deepEqual(dealFreeCell(1), game1);
  - text: '<code>dealFreeCell(617)</code> should return an array identical to example "Game #617"'
    testString: assert.deepEqual(dealFreeCell(617), game617);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dealFreeCell(seed) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
