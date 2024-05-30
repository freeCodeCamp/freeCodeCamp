---
id: 5900f3c11000cf542c50fed3
title: 'Problem 84: Probabilidades no Monopoly'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

No jogo, *Monopoly*, o tabuleiro padrão é configurado da seguinte maneira:

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

Um jogador começa no quadrado GO e adiciona as pontuações de dois dados de 6 lados para determinar o número de quadrados que ele avança no sentido horário. Sem adicionarmos outras regras, esperaríamos visitar cada quadrado com igual probabilidade: 2,5%. No entanto, cair em G2J (Go To Jail), CC (Community Chest) e CH (Chance) altera esta distribuição.

Além de G2J e de uma carta de cada, CC e CH, que ordena ao jogador que vá diretamente para a prisão, se um jogador rolar o mesmo número nos dois dados três vezes seguidas, eles não avançam o resultado da terceira jogada. Em vez disso, eles vão para a prisão diretamente.

No início do jogo, as cartas de CC e de CH são embaralhadas. Quando um jogador cai em CC ou em CH, ele tira uma carta do topo da pilha respectiva e, após seguir as instruções, ela é retornada para o fim da pilha. Existem dezesseis cartas em cada pilha, mas, para efeito deste problema, nos preocupamos apenas com as cartas que ordenam um movimento; qualquer instrução que não tenha a ver com movimento será ignorada e o jogador permanecerá no quadrado CC/CH.

<ul>
  <li>Community Chest (2 cartas em 16):</li>
  <ol>
    <li>Avançar para o GO</li>
    <li>Ir para JAIL (prisão)</li>
  </ol>

  <li>Chance (10 cartas de 16):</li>
  <ol>
    <li>Avançar para o GO</li>
    <li>Ir para JAIL (prisão)</li>
    <li>Ir para C1</li>
    <li>Ir para E3</li>
    <li>Ir para H2</li>
    <li>Ir para R1</li>
    <li>Ir para a próxima R (companhia ferroviária)</li>
    <li>Ir para a próxima R</li>
    <li>Ir para a próxima U (empresa de serviços)</li>
    <li>Voltar 3 quadrados.</li>
  </ol>
</ul>

O centro deste problema diz respeito à possibilidade de visitar um determinado quadrado. Ou seja, a probabilidade de terminar naquele quadrado depois de uma jogada dos dados. Por esta razão, deveria ficar claro que, com a exceção de G2J, para o qual a probabilidade de terminar em cima dela é zero, os quadrados em CH terão as menores probabilidades, já que 5 a cada 8 solicitam um movimento para outro quadrado e é o último quadrado em que o jogador fica em cada jogada que nos interessa. Não estabeleceremos qualquer distinção entre o "Just Visiting" (estar só de passagem) e ser enviado para JAIL (prisão). Também ignoraremos a regra sobre a exigência de uma rolada de dois números iguais nos dados para "sair da cadeia", assumindo que eles pagam para sair no próximo turno.

Começando em GO e numerando os quadrados sequencialmente, de 00 a 39, podemos concatenar esses números de dois algarismos para produzir strings que correspondem a conjuntos de quadrados.

Estatisticamente, pode ser mostrado que os três quadrados mais populares, em ordem, são JAIL (6,24%) = Quadrado 10, E3 (3,18%) = Quadrado 24 e GO (3,09%) = Quadrado 00. Então, esses três quadrados mais populares podem ser listados com a string modal de seis algarismos `102400`.

Se, ao invés de usar dois dados de 6 lados, dois dados de `n` lados forem usados, encontre a string modal de 6 algarismos.

# --hints--

`monopolyOdds(8)` deve retornar uma string.

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` deve retornar a string `102400`.

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` deve retornar a string `100024`.

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` deve retornar a string `100005`.

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` deve retornar a string `101524`.

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
