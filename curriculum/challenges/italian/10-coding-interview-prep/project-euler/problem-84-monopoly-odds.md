---
id: 5900f3c11000cf542c50fed3
title: 'Problema 84: probabilità del Monopoli'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

Nel gioco, *Monopoly*, il tabellone standard è sistemato in questo modo:

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

Il giocatore inizia nella cella del VIA e somma il risultato di due dadi a sei facce per determinare il numero di caselle di cui avanzano in senso orario. Senza regole aggiuntive ci aspetteremmo di visitare ogni casella con la stessa probabilità: 2,5%. Invece, finire su G2J (Go to jail - vai in prigione), CC (community chest - imprevisto), e CH (chance - probabilità) cambia questa distribuzione.

In aggiunta a G2J e una carta ciascuno per CC e CH che ordina al giocatore di andare direttamente in prigione, se un giocatore tira tre doppi consecutivi questo non avanza del risultato del loro terzo tiro. Invece va direttamente in prigione.

All'inizio del gioco, le carte CC e CH sono mescolate. Quando un giocatore finisce su una carta CC o CH questo prende una carta dalla cima del rispettivo mazzo e, dopo aver seguito le istruzioni, è rimessa al fondo della pila. Ci sono sedici carte in ogni mazzo, ma per l'obbiettivo di questo problema ci interessano solo le carte che dicono di muoversi; qualsiasi istruzione non legata con il movimento sarà ignorata e il giocatore rimarrà sulla casella CC/CH.

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

Il cuore di questo problema si incentra sulla probabilità di visitare una certa casella. Cioè, la probabilità di finire su quella casella dopo un tiro di dado. Per questa ragione dovrebbe essere chiaro che, con l'eccezzione di G2J per cui la probabilità di finire un movimento su di esso è zero, le caselle CH hanno la probabilità minore, visto che 5/8 carte dicono di muoversi su un'altra casella, e quella è la casella finale su cui il giocatore finisce il movimento per ogni tiro a cui siamo interessati. Non facciamo alcuna distinzione tra "Visita alla prigione" e venir mandati in prigione, e ignoriamo la regola che richiede un doppio per uscire di prigione, assumendo che il giocatore paga al turno successivo per uscire di prigione.

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
