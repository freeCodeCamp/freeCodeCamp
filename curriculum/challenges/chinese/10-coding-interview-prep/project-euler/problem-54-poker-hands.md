---
id: 5900f3a21000cf542c50feb5
challengeType: 5
videoUrl: ''
title: 问题54：扑克手
---

## Description
<section id="description">在纸牌游戏扑克牌中，一手牌由五张牌组成，并按以下方式从最低到最高排名：高牌：最高价值牌。一对：两张价值相同的牌。两对：两对不同。三种类型：三张相同价值的牌。直：所有卡都是连续值。同花顺：同一套牌的所有牌。满屋：三种和一对。四种：四张相同价值的牌。同花顺：所有牌都是同一套牌的连续值。皇家同花顺：十，杰克，女王，国王，王牌，同样的诉讼。卡的价值依次为：2,3,4,5,6,7,8,9,10，Jack，Queen，King，Ace。如果两个玩家拥有相同的排名牌，则排名由最高值赢得;例如，一对八个击打一对五（见下面的例子1）。但是，如果两个级别相关，例如，两个玩家都有一对皇后，则比较每手牌中的最高牌数（参见下面的例子4）;如果最高牌结合，则比较下一张最高牌，依此类推。考虑以下五手交给两名球员： <p>手牌1球员2冠军1 5H 5C 6S 7S KDPair of Fives 2C 3S 8S 8D TDPair of Eights Player 2 2 5D 8C 9S JS ACHighest card Ace 2C 5C 7D 8S QHHighest card Queen Player 1 3 2D 9C AS AH ACThree Aces 3D 6D 7D TD QDFlush与钻石玩家2 4 4D 6S 9H QH QCPair of Queens最高卡九3D 6D 7H QD QSPair皇后最高卡七人玩家1 5 2H 2D 4C 4D 4SFull HouseWith Three Fours 3C 3D 3S 9S 9DFull Housewith Three Threes Player 1 </p><p>文件poker.txt包含一千个随机发给两个玩家的牌。该文件的每一行包含十张牌（由一个空格分隔）：前五张是Player 1的牌，后五张是Player 2的牌。你可以假设所有的牌都是有效的（没有无效的角色或重复的牌），每个牌手的牌都没有特定的顺序，而且每手牌都有明显的赢家。玩家1赢了多少手牌？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler54()</code>应该返回376。
    testString: assert.strictEqual(euler54(), 376);

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

/section>
