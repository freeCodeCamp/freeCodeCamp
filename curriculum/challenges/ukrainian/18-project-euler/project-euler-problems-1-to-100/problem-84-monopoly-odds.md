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

Починаючи GO та послідовно нумеруючи клітинки від 00 до 39, ми можемо об’єднати ці двозначні числа, щоб отримати рядки, які відповідають множинам клітинок.

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
