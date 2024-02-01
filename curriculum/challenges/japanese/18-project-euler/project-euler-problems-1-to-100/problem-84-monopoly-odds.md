---
id: 5900f3c11000cf542c50fed3
title: '問題 84: モノポリーの確率'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

*モノポリー*というゲームでは、標準のボードが次のように設定されています。

<div style="text-align: center;">
  <table cellspacing="1" cellpadding="5" border="0" style="background-color: black; color: black;" align="center">
    <tbody>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">GO</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">A1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">A2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">T1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">JAIL</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">H2</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">C1</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">T2</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">U1</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">H1</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">C2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH3</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">C3</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R4</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G3</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">D1</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC3</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G2</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">D2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G1</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">D3</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G2J</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">F3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">U2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">F2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">F1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">E3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">E2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">E1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">FP</td>
      </tr>
    </tbody>
  </table>
</div><br>

プレイヤーは GO のマスから始め、2 つの 6 面サイコロの目を足した数だけマスを時計回りに進みます。 他にルールがなければ、各マスに止まる確率は一律に 2.5% のはずです。 しかし、G2J (刑務所へ行く)、CC (コミュニティチェスト)、CH (チャンス) に止まると確率の分布が変わります。

G2J に止まった場合と、CC または CH に止まって引いたカードに指示された場合、プレイヤーは JAIL へ直行します。それに加え、3 回連続でゾロ目を出したプレイヤーは 3 投目の分を進むことができません。 代わりに JAIL へ直行します。

ゲームの開始時に、CC と CH カードはシャッフルされます。 CC または CH に止まると、プレイヤーは各カードの束の一番上にあるカードを取り、その指示に従った後に束の一番下に戻します。 それぞれの束には 16 枚のカードがありますが、この問題では移動を指示するカードのみを扱います。移動と関係のない指示は無視され、プレイヤーは CC/CH のマスにとどまります。

<ul>
  <li>コミュニティチェスト (2/16 枚):</li>
  <ol>
    <li>GO へ進む</li>
    <li>JAIL へ行く</li>
  </ol>

  <li>チャンス (10/16 枚):</li>
  <ol>
    <li>GO へ進む</li>
    <li>JAIL へ行く</li>
    <li>C1 へ行く</li>
    <li>E3 へ行く</li>
    <li>H2 へ行く</li>
    <li>R1 へ行く</li>
    <li>次の R (鉄道会社) へ行く</li>
    <li>次の R へ行く</li>
    <li>次の U (電力会社と水道会社) へ行く</li>
    <li>3 マス戻る</li>
  </ol>
</ul>

この問題では、特定のマスを訪れる確率に着目します。 つまり、サイコロを 1 回振った後、最終的にそのマスにいる確率です。 そのため、G2J (そこで終わる確率が 0) を除けば、CH マスで終わる確率が最も低いことは明らかです。なぜなら、カード全体の 5/8 が別のマスへの移動を指示するからです。ここでの焦点は、プレイヤーがサイコロを振った後に自分のターンが終わる時点で、どのマスにいるかです。 ここでは、JAILを「たまたま訪れた」ことと、他のマスから JAIL に飛ばされることを区別しません。ゾロ目を出して「刑務所から出る」というルールも無視します。次のターンで保釈金を払って刑務所から出ることを前提とします。

GO から順に各マスに 00 から 39 までの番号を付けると、これらの 2 桁の番号を連結することで、マスの組に対応する文字列を生成することができます。

統計的には、プレイヤーが 1 回のターンを終えるときにいる上位 3 マスは、JAIL (6. 4%) = マス 10、E3 (3.18%) = マス 24、GO (3.09%) = マス 00 です。 したがって、訪問確率が最も高いこれらの 3 マスは、6 桁のモーダルストリング `102400` で表すことができます。

2 つの 6 面サイコロの代わりに 2 つの `n` 面サイコロを使った場合の、6 桁のモーダルストリングを求めなさい。

# --hints--

`monopolyOdds(8)` は文字列を返す必要があります。

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` は文字列 `102400` を返す必要があります。

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` は文字列 `100024` を返す必要があります。

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` は文字列 `100005` を返す必要があります。

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` は文字列 `101524` を返す必要があります。

```js
assert.strictEqual(monopolyOdds(4), '101524');
```

# --seed--

## --seed-contents--

```js
function monopolyOdds(n) {

  return true;
}

monopolyOdds(8);
```

# --solutions--

```js
function monopolyOdds(n) {
  function chanceCard(position, chanceCardPosition) {
    chanceCardPosition = (chanceCardPosition + 1) % 16;
    if (chanceCardPosition < 6) {
      position = chanceCardsMoves[chanceCardPosition];
    } else if (chanceCardPosition === 6 || chanceCardPosition === 7) {
      position = nextMovesFromR[position];
    } else if (chanceCardPosition === 8) {
      position = nextMovesFromU[position];
    } else if (chanceCardPosition === 9) {
      position -= 3;
    }
    return [position, chanceCardPosition];
  }

  function chestCard(position, chestPosition) {
    chestPosition = (chestPosition + 1) % 16;
    if (chestPosition < 2) {
      position = chestCardsMoves[chestPosition];
    }
    return [position, chestPosition];
  }

  function isChest(position) {
    return position === 2 || position === 17 || position === 33;
  }

  function isChance(position) {
    return position === 7 || position === 22 || position === 36;
  }

  function isJail(position) {
    return position === 30;
  }

  function roll(dice) {
    return Math.floor(Math.random() * dice) + 1;
  }

  function getTopThree(board) {
    return sortByVisits(board)
      .slice(0, 3)
      .map(elem => elem[0].toString().padStart(2, '0'))
      .join('');
  }

  function sortByVisits(board) {
    return board
      .map((element, index) => [index, element])
      .sort((a, b) => a[1] - b[1])
      .reverse();
  }

  const rounds = 2000000;
  const chestCardsMoves = [0, 10];
  const chanceCardsMoves = [0, 10, 11, 24, 39, 5];
  const nextMovesFromR = { 7: 15, 22: 25, 36: 5 };
  const nextMovesFromU = { 7: 12, 36: 12, 22: 28 };

  const board = new Array(40).fill(0);
  let doubleCount = 0;
  let curPosition = 0;
  let curChestCard = 0;
  let curChanceCard = 0;

  for (let i = 0; i < rounds; i++) {
    const dice1 = roll(n);
    const dice2 = roll(n);

    if (dice1 === dice2) {
      doubleCount++;
    } else {
      doubleCount = 0;
    }

    if (doubleCount > 2) {
      curPosition = 10;
      doubleCount = 0;
    } else {
      curPosition = (curPosition + dice1 + dice2) % 40;

      if (isChance(curPosition)) {
        [curPosition, curChanceCard] = chanceCard(curPosition, curChanceCard);
      } else if (isChest(curPosition)) {
        [curPosition, curChestCard] = chestCard(curPosition, curChestCard);
      } else if (isJail(curPosition)) {
        curPosition = 10;
      }
    }
    board[curPosition]++;
  }
  return getTopThree(board);
}
```
