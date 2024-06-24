---
id: 5900f3c11000cf542c50fed3
title: 'Problema 84: probabilità del Monopoli'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

Nel gioco, *Monopoli*, il tabellone standard è sistemato in questo modo:

<div style="text-align: center;">
  <table cellspacing="1" cellpadding="5" border="0" style="background-color: black; color: black;" align="center">
    <tbody>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">VIA</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">A1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">A2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">T1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">PRIGIONE</td>
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

Il giocatore inizia nella cella del VIA e somma il risultato di due dadi a sei facce per determinare il numero di caselle di cui avanzare in senso orario. Senza regole aggiuntive ci aspetteremmo di visitare ogni casella con la stessa probabilità: 2,5%. Invece, finire su G2J (Go to jail - vai in prigione), CC (community chest - imprevisto) e CH (chance - probabilità) cambia questa distribuzione.

In aggiunta a G2J e una carta ciascuno per CC e CH che ordina al giocatore di andare direttamente in prigione, se un giocatore tira tre doppi consecutivi, non avanza del risultato del terzo tiro. Invece va direttamente in prigione.

All'inizio del gioco, le carte CC e CH sono mescolate. Quando un giocatore finisce su una carta CC o CH, prende una carta dalla cima del rispettivo mazzo e, dopo aver seguito le istruzioni, la rimette in fondo al mazzo. Ci sono sedici carte in ogni mazzo, ma per l'obbiettivo di questo problema ci interessano solo le carte che dicono di muoversi; qualsiasi istruzione non legata con il movimento sarà ignorata e il giocatore rimarrà sulla casella CC/CH.

<ul>
  <li>Imprevisto (2/16 carte):</li>
  <ol>
    <li>Vai al VIA</li>
    <li>Vai in PRIGIONE</li>
  </ol>

  <li>Probabilità (10/16 carte):</li>
  <ol>
    <li>Vai al VIA</li>
    <li>Vai in PRIGIONE</li>
    <li>Vai a C1</li>
    <li>Vai a E3</li>
    <li>Vai ad H2</li>
    <li>Vai a R1</li>
    <li>Vai al R successivo (stazione ferroviaria)</li>
    <li>Vai al R successivo</li>
    <li>Vai al U successivo (compagnia elettrica/dell'acqua)</li>
    <li>Indietreggia di 3 caselle.</li>
  </ol>
</ul>

Il cuore di questo problema si incentra sulla probabilità di visitare una certa casella. Cioè, la probabilità di finire su quella casella dopo un tiro di dado. Per questa ragione dovrebbe essere chiaro che, con l'eccezzione di G2J per cui la probabilità di finire un movimento su di esso è zero, le caselle CH hanno la probabilità minore, visto che 5/8 carte dicono di muoversi su un'altra casella, e quella è la casella finale su cui il giocatore finisce il movimento per ogni tiro a cui siamo interessati. Non facciamo alcuna distinzione tra "Visita alla prigione" e venir mandati in prigione, e ignoriamo la regola che richiede un doppio per uscire di prigione, assumendo che il giocatore paghi al turno successivo per uscire di prigione.

Iniziando al VIA e numerando le celle sequenzialmente da 00 a 39 possiamo concatenare questi numeri a due cifre per produrre stringhe che corrispondono a set di celle.

Statisticamente si può mostrare che le tre celle più popolari sono, in ordine, PRIGIONE (6.24%) = cella 10, E3 (3.18%) = cella 24 e VIA (3.09%) = square 00. Queste tre celle più popolari possono essere elencate con la stringa a sei cifre `102400`.

Trova la stringa a sei cifre che si ottiene sostituendo i due dadi a 6 facce con due dadi ad `n` facce.

# --hints--

`monopolyOdds(8)` dovrebbe restituire una stringa.

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` dovrebbe restituire la stringa `102400`.

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` dovrebbe restituire la stringa `100024`.

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` dovrebbe restituire la stringa `100005`.

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` dovrebbe restituire la stringa `101524`.

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
