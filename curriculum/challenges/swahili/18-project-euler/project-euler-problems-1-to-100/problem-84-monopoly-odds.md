---
id: 5900f3c11000cf542c50fed3
title: 'Problem 84: Monopoly odds'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

In the game, *Monopoly*, the standard board is set up in the following way:

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

A player starts on the GO square and adds the scores on two 6-sided dice to determine the number of squares they advance in a clockwise direction. Without any further rules we would expect to visit each square with equal probability: 2.5%. However, landing on G2J (Go To Jail), CC (community chest), and CH (chance) changes this distribution.

In addition to G2J, and one card from each of CC and CH, that orders the player to go directly to jail, if a player rolls three consecutive doubles, they do not advance the result of their 3rd roll. Instead they proceed directly to jail.

At the beginning of the game, the CC and CH cards are shuffled. When a player lands on CC or CH they take a card from the top of the respective pile and, after following the instructions, it is returned to the bottom of the pile. There are sixteen cards in each pile, but for the purpose of this problem we are only concerned with cards that order a movement; any instruction not concerned with movement will be ignored and the player will remain on the CC/CH square.

<ul>
  <li>Community Chest (2/16 cards):</li>
  <ol>
    <li>Advance to GO</li>
    <li>Go to JAIL</li>
  </ol>

  <li>Chance (10/16 cards):</li>
  <ol>
    <li>Advance to GO</li>
    <li>Go to JAIL</li>
    <li>Go to C1</li>
    <li>Go to E3</li>
    <li>Go to H2</li>
    <li>Go to R1</li>
    <li>Go to next R (railway company)</li>
    <li>Go to next R</li>
    <li>Go to next U (utility company)</li>
    <li>Go back 3 squares.</li>
  </ol>
</ul>

The heart of this problem concerns the likelihood of visiting a particular square. That is, the probability of finishing at that square after a roll. For this reason it should be clear that, with the exception of G2J for which the probability of finishing on it is zero, the CH squares will have the lowest probabilities, as 5/8 request a movement to another square, and it is the final square that the player finishes at on each roll that we are interested in. We shall make no distinction between "Just Visiting" and being sent to JAIL, and we shall also ignore the rule about requiring a double to "get out of jail", assuming that they pay to get out on their next turn.

By starting at GO and numbering the squares sequentially from 00 to 39 we can concatenate these two-digit numbers to produce strings that correspond with sets of squares.

Statistically it can be shown that the three most popular squares, in order, are JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. So these three most popular squares can be listed with the six-digit modal string `102400`.

If, instead of using two 6-sided dice, two `n`-sided dice are used, find the six-digit modal string.

# --hints--

`monopolyOdds(8)` should return a string.

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` should return string `102400`.

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` should return string `100024`.

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` should return string `100005`.

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` should return string `101524`.

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
const GO = 0;
const JAIL = 10;
const GO_TO_JAIL = 30;

const C1 = 11;
const E3 = 24;
const H2 = 39;

const R1 = 5;
const R2 = 15;
const R3 = 25;

const U1 = 12;
const U2 = 28;

const SPECIAL_CARDS = 16;
const GAME_SQUARES = 40;

const CC1 = 2;
const CC2 = 17;
const CC3 = 33;
const CHESTS = [CC1, CC2, CC3];
const chestCardsMoves = [GO, JAIL];

const CH1 = 7;
const CH2 = 22;
const CH3 = 36;
const CHANCES = [CH1, CH2, CH3];
const chanceCardsMoves = [GO, JAIL, C1, E3, H2, R1];
const chanceToRailroad = { [CH1]: R2, [CH2]: R3, [CH3]: R1 };
const chanceToUtility = { [CH1]: U1, [CH2]: U2, [CH3]: U1 };

function multiplyMatrix(matrix1, matrix2) {
  const multiplied = [];

  for (let row = 0; row < matrix1.length; row++) {
    const newRow = [];
    for (let col = 0; col < matrix1[row].length; col++) {
      let newCell = 0;
      for (let i = 0; i < matrix1[row].length; i++) {
        const value1 = matrix1[row][i];
        const value2 = matrix2[i][col];
        newCell += value1 * value2;
      }
      newRow.push(newCell);
    }
    multiplied.push(newRow);
  }
  return multiplied;
}

function normalizeRow(row) {
  const sum = row.reduce((total, value) => total + value, 0);
  if (sum > 0) {
    for (let j = 0; j < row.length; j++) {
      const value = row[j];
      row[j] = value / sum;
    }
  }
}

function sortByProbability(board) {
  return board
    .map((probability, squareNo) => [squareNo, probability])
    .sort((a, b) => a[1] - b[1])
}

function getTopThree(board) {
  return sortByProbability(board)
    .slice(-3)
    .reverse()
    .map(([squareNo, _]) => squareNo.toString().padStart(2, '0')
    )
    .join('');
}

function didConverge(matrix1, matrix2, precision) {
  return matrix1.every((row, rowNo) => row.every((value1, colNo) => Math.abs(value1 - matrix2[rowNo][colNo]) <= precision))
}

function monopolyOdds(diceSides) {
  // Based on https://github.com/ByteThisCoding/project-euler/blob/master/problems/0084/0084.ts

  const timesRolled = new Array(diceSides * 2 + 1).fill(0);
  for (let dice1 = 1; dice1 <= diceSides; dice1++) {
    for (let dice2 = 1; dice2 <= diceSides; dice2++) {
      timesRolled[dice1 + dice2]++;
    }
  }

  // Transitions matrix contain probabilities of reaching each square (row values)
  // from each starting square (row no.).
  let transitions = [];
  for (let startSquare = 0; startSquare < GAME_SQUARES; startSquare++) {
    const row = new Array(GAME_SQUARES).fill(0);
    for (let rollResult = 2; rollResult <= diceSides * 2; rollResult++) {
      const rollChance = timesRolled[rollResult]
      const position = (startSquare + rollResult) % GAME_SQUARES;

      if (CHANCES.includes(position)) {
        // Chance cards ordering movement.
        for (let i = 0; i < chanceCardsMoves.length; i++) {
          const nextSquare = chanceCardsMoves[i];
          row[nextSquare] += rollChance / SPECIAL_CARDS;
        }
        row[chanceToRailroad[position]] += 2 * rollChance / SPECIAL_CARDS;
        row[chanceToUtility[position]] += rollChance / SPECIAL_CARDS;
        row[position - 3] += rollChance / SPECIAL_CARDS;

        // Rest non-moving Chance cards.
        row[position] += (SPECIAL_CARDS - chanceCardsMoves.length) * rollChance / SPECIAL_CARDS;
      } else if (CHESTS.includes(position)) {
        // Community Chest cards ordering movement.
        for (let i = 0; i < chestCardsMoves.length; i++) {
          const nextSquare = chestCardsMoves[i];
          row[nextSquare] += rollChance / SPECIAL_CARDS;
        }
        // Rest non-moving Community Chest cards.
        row[position] += (SPECIAL_CARDS - chestCardsMoves.length) * rollChance / SPECIAL_CARDS
      } else if (position === GO_TO_JAIL) {
        row[JAIL] += rollChance;
      } else {
        row[position] += rollChance;
      }
    }
    normalizeRow(row)
    transitions.push(row);
  }

  const precision = 0.000001;
  for (let i = 0; i < GAME_SQUARES; i++) {
    const next = multiplyMatrix(transitions, transitions);
    if (didConverge(transitions, next, precision)) {
      break;
    }
    transitions = next;
  }

  // All rows converge to the same values.
  return getTopThree(transitions[0]);
}
```
