---
id: 5900f3c11000cf542c50fed3
title: 'Завдання 84: перевага в монополії'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

Стандартна карта гри *«Монополія»* виглядає так:

<div style="text-align: center;">
  <table cellspacing="1" cellpadding="5" border="0" style="background-color: black; color: black;" align="center">
    <tbody>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">GO</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">А1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">А2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">Т1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">В2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">JAIL</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">H2</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">С1</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">Т2</td>
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

Гравець починає гру на клітинці GO та додає очки з двох шестигранників, щоб визначити кількість клітинок, на які потрібно пройти за годинниковою стрілкою. За цим правилом ймовірність відвідати кожну клітинку становить 2,5%. Однак, якщо перейти до G2J (перейдіть до в’язниці), CC (благочинний фонд) та CH (шанс), то змінюється розподіл.

На додачу до G2J та по одній карті з CC й CH, які наказують гравцю перейти до в’язниці, якщо гравець викидає три пари підряд, то він не переходить до третього кидка. Натомість гравець одразу переходить до в’язниці.

На початку гри карти CC та CH перемішуються. Коли гравець опиняється на CC чи CH, він бере верхню карту з відповідної колоди і, виконавши інструкції, повертає карту вниз колоди. Кожна колода складається з 16 карт, але для цього завдання використано лише карти, пов’язані з пересуванням гравця. Будь-які інші інструкції ігноруються, а гравець залишається на клітинці CC/CH.

<ul>
  <li>Благочинний фонд (2/16 карт):</li>
  <ol>
    <li>Перейдіть до GO</li>
    <li>Пройдіть до JAIL</li>
  </ol>

  <li>Шанс (10/16 карт):</li>
  <ol>
    <li>Перейдіть до GO</li>
    <li>Пройдіть до JAIL</li>
    <li>Пройдіть до C1</li>
    <li>Пройдіть до E3</li>
    <li>Пройдіть до H2</li>
    <li>Пройдіть до R1</li>
    <li>Пройдіть до наступної R (залізничної компанії)</li>
    <li>Пройдіть до наступної R</li>
    <li>Пройдіть до наступної U (підприємство громадського користування)</li>
    <li>Назад на 3 клітинки.</li>
  </ol>
</ul>

Суть цього завдання полягає у ймовірності відвідати певну клітинку. Тобто ймовірність опинитись на цій клітинці після кидка. З цього варто розуміти, що (за винятком G2J, при якій ймовірність дорівнює нулю) клітинки CH матимуть найнижчу ймовірність, оскільки в 5/8 випадків гравцю доведеться перейти до іншої клітинки, а нас цікавить саме та клітинка, на якій гравець опиняється після кожного кидка. Ми не розглядатимемо гравця у в’язниці як відвідувача чи в’язня, а також ігноруватимемо правило, що, викинувши пару, гравець виходить із в’язниці — припустимо, що гравці платять за вихід із в’язниці на наступному ході.

Починаючи з GO та послідовно нумеруючи клітинки від 00 до 39, ми можемо об’єднати ці двозначні числа, щоб отримати рядки, які відповідають множинам клітинок.

Статистично можна показати, що трьома найпопулярнішими клітинками є JAIL (6.24%) = клітинка 10, Е3 (3.18%) = клітинка 24 та GO (3.09%) = клітинка 00. Їх можна перерахувати у вигляді рядка з шести цифр: `102400`.

Знайдіть шестизначний рядок, якщо замість шестигранника використовуватимуть два `n`-гранних кубика.

# --hints--

`monopolyOdds(8)` має повернути рядок.

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` має повернути рядок `102400`.

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` має повернути рядок `100024`.

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` має повернути рядок `100005`.

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` має повернути рядок `101524`.

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
