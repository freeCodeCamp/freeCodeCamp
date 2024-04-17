---
id: 5900f3c11000cf542c50fed3
title: 'Problem 84: Monopoly odds'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

Im Spiel *Monopoly* ist das Standardspielbrett folgendermaßen aufgebaut:

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
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">GEFÄNGNIS</td>
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

A player starts on the GO square and adds the scores on two 6-sided dice to determine the number of squares they advance in a clockwise direction. Ohne weitere Regeln würden wir erwarten, dass jedes Feld mit der gleichen Wahrscheinlichkeit besucht wird: 2,5 %. However, landing on G2J (Go To Jail), CC (community chest), and CH (chance) changes this distribution.

Zusätzlich zu G2J und je einer Karte aus CC und CH, die den Spieler direkt ins Gefängnis bringt, wird das Ergebnis des dritten Wurfs nicht vorverlegt, wenn ein Spieler drei aufeinanderfolgende Paschs würfelt. Stattdessen kommen sie direkt ins Gefängnis.

Zu Beginn des Spiels werden die CC- und CH-Karten gemischt. Wenn ein Spieler auf CC oder CH landet, nimmt er eine Karte von der Oberseite des jeweiligen Stapels und legt sie, nachdem er die Anweisungen befolgt hat, wieder auf den Boden des Stapels zurück. Es gibt sechzehn Karten in jedem Stapel, aber zum Zweck dieses Problems befassen wir uns nur mit Karten, die eine Bewegung anordnen; jede Anweisung, die sich nicht auf eine Bewegung bezieht, wird ignoriert und der Spieler bleibt auf dem CC/CH-Feld.

<ul>
  <li>Community-Truhe (2/16 Karten):</li>
  <ol>
    <li>Advance to GO</li>
    <li>Gehe ins GEFÄNGNIS</li>
  </ol>

  <li>Ereigniskarten (10/16 Karten):</li>
  <ol>
    <li>Advance to GO</li>
    <li>Go to JAIL</li>
    <li>Gehe zu C1</li>
    <li>Gehe zu E3</li>
    <li>Gehe zu H2</li>
    <li>Gehe zu R1</li>
    <li>Gehe zum nächsten R (Eisenbahngesellschaft)</li>
    <li>Gehe zum nächsten R</li>
    <li>Gehe zur nächsten U (Versorgungsunternehmen)</li>
    <li>Gehe 3 Felder zurück.</li>
  </ol>
</ul>

Der Kern dieses Problems betrifft die Wahrscheinlichkeit, einen bestimmten Platz zu besuchen. Das heißt, die Wahrscheinlichkeit, nach einem Wurf auf diesem Feld zu landen. Aus diesem Grund sollte klar sein, dass mit Ausnahme von G2J, bei dem die Wahrscheinlichkeit auf diesem Feld zu enden gleich Null ist, die CH-Felder die niedrigsten Wahrscheinlichkeiten haben, da 5/8 eine Bewegung auf ein anderes Feld verlangen, und es ist das letzte Feld, auf dem der Spieler bei jedem Wurf endet, das uns interessiert. We shall make no distinction between "Just Visiting" and being sent to JAIL, and we shall also ignore the rule about requiring a double to "get out of jail", assuming that they pay to get out on their next turn.

By starting at GO and numbering the squares sequentially from 00 to 39 we can concatenate these two-digit numbers to produce strings that correspond with sets of squares.

Statistically it can be shown that the three most popular squares, in order, are JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. Diese drei beliebtesten Quadrate können also mit dem sechsstelligen modalen String `102400` aufgeführt werden.

Wenn anstelle von zwei 6-seitigen Würfeln zwei `n`-seitige Würfel verwendet werden, findest du den sechsstelligen Modal-String.

# --hints--

`monopolyOdds(8)` sollte einen String zurückgeben.

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` sollte einen String `102400` zurückgeben.

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` sollte einen String `100024` zurückgeben.

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` sollte einen String `100005` zurückgeben.

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` sollte einen String `101524` zurückgeben.

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
