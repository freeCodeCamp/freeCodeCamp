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

Além de G2J, e de uma carta de cada, CC e CH, que ordena ao jogador que vá diretamente para a prisão, se um jogador rolar o mesmo número nos dois dados três vezes seguidas, eles não avançam o resultado da terceira jogada. Em vez disso, eles vão para a prisão diretamente.

No início do jogo, as cartas de CC e de CH são embaralhadas. Quando um jogador cai em CC ou em CH, ele tira uma carta do topo da pilha respectiva, e, após seguir as instruções, ela é retornada para o fim da pilha. Existem dezesseis cartas em cada pilha, mas, para efeito deste problema, nos preocupamos apenas com as cartas que ordenam um movimento; qualquer instrução que não tenha a ver com movimento será ignorada e o jogador permanecerá no quadrado CC/CH.

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

O centro deste problema diz respeito à possibilidade de visitar um determinado quadrado. Ou seja, a probabilidade de terminar naquele quadrado depois de uma jogada dos dados. Por esta razão, deveria ficar claro que, com a exceção da G2J, para a qual a probabilidade de terminar em cima dela é zero, os quadrados em CH terão as menores probabilidades, já que 5 a cada 8 solicitam um movimento para outro quadrado, e é o último quadrado em que o jogador fica em cada jogada que nos interessa. Não estabeleceremos qualquer distinção entre o "Just Visiting" (estar só de passagem) e ser enviado para JAIL (prisão), e também ignoraremos a regra sobre a exigência de uma rolada de dois números iguais nos dados para "sair da cadeia", assumindo que eles pagam para sair no próximo turno.

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
