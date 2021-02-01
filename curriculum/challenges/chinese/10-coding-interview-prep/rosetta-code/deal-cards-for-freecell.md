---
id: 59694356a6e7011f7f1c5f4e
title: FreeCell的交易卡
challengeType: 5
videoUrl: ''
dashedName: deal-cards-for-freecell
---

# --description--

<p> Free Cell是Paul Alfille在1978年向PLATO系统推出的单人纸牌游戏。微软的Jim Horne将名称更改为FreeCell并重新实现了<a href='http://rosettacode.org/wiki/DOS' title='DOS'>DOS</a>游戏，然后是<a href='http://rosettacode.org/wiki/Windows' title='视窗'>Windows</a>游戏。 </p><p>这个版本引入了32000个编号的交易。 （ <a href='http://www.solitairelaboratory.com/fcfaq.html' title='链接：http：//www.solitairelaboratory.com/fcfaq.html'>FreeCell FAQ</a>讲述了这段历史。） </p><p>随着游戏的流行，Jim Horne披露<a href='http://www.solitairelaboratory.com/mshuffle.txt' title='链接：http：//www.solitairelaboratory.com/mshuffle.txt'>了这种算法</a> ，FreeCell的其他实现开始重现微软的交易。 </p><p>这些交易编号从1到32000。 </p><p>微软的新版本有100万笔交易，编号从1到1000000;某些实现允许该范围之外的数字。 </p><p>该算法使用Microsoft C的这种<a href='http://rosettacode.org/wiki/linear congruential generator' title='线性同余发生器'>线性同余生成器</a> ： </p> $ state\_ {n + 1} \\ equiv 214013 \\ times state_n + 2531011 \\ pmod {2 ^ {31}} $ $ rand_n = state_n \\ div 2 ^ {16} $ $ rand_n $的范围是0到32767。 <p>该算法如下： </p>使用交易编号为RNG播种。创建一个由52张牌组成的<a href='http://rosettacode.org/wiki/array' title='排列'>阵列</a> ：俱乐部的王牌，钻石王牌，心中的王牌，黑桃王牌，2个俱乐部，2个钻石等等等等：Ace，2,3,4,5,6， 7,8,9,10，杰克，女王，国王。数组索引为0到51，其中俱乐部的Ace为0，黑桃之王为51.直到数组为空：在索引≡下一个随机数（mod数组长度）中选择随机卡。将此随机卡与阵列的最后一张卡交换。从阵列中删除此随机卡。 （数组长度减少1.）处理此随机卡。交易所有52张牌，面朝上，横跨8列。前8张牌分为8列，后8张牌分为8张，依此类推。例： <p>订购交易卡</p><p></p><pre> 1 2 3 4 5 6 7 8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52 </pre><p></p><p>游戏＃1 </p><p></p><pre> [
['JD'，'2D'，'9H'，'JC'，'5D'，'7H'，'7C'，'5H']，
['KD'，'KC'，'9S'，'5S'，'AD'，'QC'，'KH'，'3H']，
['2S'，'KS'，'9D'，'QD'，'JS'，'AS'，'AH'，'3C']，
['4C'，'5C'，'TS'，'QH'，'4H'，'AC'，'4D'，'7S']，
['3S'，'TD'，'4S'，'TH'，'8H'，'2C'，'JH'，'7D']，
['6D'，'8S'，'8D'，'QS'，'6C'，'3D'，'8C'，'TC']，
['6S'，'9C'，'2H'，'6H']
] </pre><p></p><p>游戏＃617 </p><p></p><pre> [
['7D'，'AD'，'5C'，'3S'，'5S'，'8C'，'2D'，'AH']，
['TD'，'7S'，'QD'，'AC'，'6D'，'8H'，'AS'，'KH']，
['TH'，'QC'，'3H'，'9D'，'6S'，'8D'，'3D'，'TC']，
['KD'，'5H'，'9S'，'3C'，'8S'，'7H'，'4D'，'JS']，
['4C'，'QS'，'9C'，'9H'，'7C'，'6H'，'2C'，'2S']，
['4S'，'TS'，'2H'，'5D'，'JC'，'6C'，'JH'，'QH']，
['JD'，'KS'，'KC'，'4H']
] </pre><p></p>任务： <p>编写一个函数来获取交易编号并按照与此算法相同的顺序处理卡。 </p><p>该函数必须返回表示FreeCell板的二维数组。 </p><p>还可以针对<a href='http://freecellgamesolutions.com/' title='链接：http：//freecellgamesolutions.com/'>1000000游戏的FreeCell解决方案</a>检查交易。 </p><p> （召唤一个视频解决方案，它会显示初始交易。） </p>

# --hints--

`dealFreeCell`是一个功能。

```js
assert(typeof dealFreeCell === 'function');
```

`dealFreeCell(seed)`应该返回一个对象。

```js
assert(typeof dealFreeCell(1) === 'object');
```

`dealFreeCell(seed)`应该返回一个长度为7的数组。

```js
assert(dealFreeCell(1).length === 7);
```

`dealFreeCell(1)`应该返回一个与示例“Game＃1”相同的数组

```js
assert.deepEqual(dealFreeCell(1), game1);
```

`dealFreeCell(617)`应该返回一个与示例“Game＃617”相同的数组

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
