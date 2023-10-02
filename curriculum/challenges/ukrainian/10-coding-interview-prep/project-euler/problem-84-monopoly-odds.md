---
id: 5900f3c11000cf542c50fed3
title: 'Завдання 84: Шанси Монополії'
challengeType: 1
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

У грі, *Монополія*, стандартна плата встановлюється наступним чином:

<div style="text-align: center;">
  <table cellspacing="1" cellpadding="5" border="0" style="background-color: black; color: black;" align="center">
    <tbody>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">ВПЕРЕД</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">А1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">А2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">Т1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">Р1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">В1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">В2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">ТЮРМА</td>
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

Гравець стартує зі стартової площадки і додає очки з 6-бічних кубиків для визначення кількості квадратів, за якими просувається за годинниковою стрілкою. Без будь-яких подальших правил ми очікуємо відвідати кожен квадрат з рівною ймовірністю: 2,5%. Однак, кроки на G2J (прямуйте до тюрми), CC (скриня спільноти), і CH (шанс) змінює цей розподіл.

На додачу до G2J, є ще одна карта з CC і CH, що наказує гравцю іти безпосередньо до в'язниці, якщо гравець викидає три парні поспіль, то вони не підвищує результат свого третього кидка. Але вони потрапляють безпосередньо до тюрми.

На початку гри CC та CH картки змішані. Коли гравець опиняється на CC або CH він бере карту зверху відповідної купи і, після виконання інструкцій, повертає картку донизу купи. У кожній стопці по шістнадцять карт, але для цілей цієї задачі ми матимемо справу лише з картками, які вказують рух; будь-яка інструкція, яка не стосується руху буде проігнорована, і гравець залишиться на полі CC/CH.

<ul>
  <li>Скриня спільноти (2/16 карт):</li>
  <ol>
    <li>Перейти на початок</li>
    <li>Перейти до ТЮРМИ</li>
  </ol>

  <li>Шанс (10/16 карт):</li>
  <ol>
    <li>Перейти на початок</li>
    <li>Перейти до ТЮРМИ</li>
    <li>Перейти до C1</li>
    <li>Перейти до E3</li>
    <li>Перейти до H2</li>
    <li>Перейти до C1</li>
    <li>Перейти до наступної R (залізнична компанія)</li>
    <li>Перейти до наступної R</li>
    <li>Перейти до наступного U (комунальна компанія)</li>
    <li>Назад на 3 ходи.</li>
  </ol>
</ul>

Корінь цієї проблеми стосується ймовірності відвідання певного квадрату. Тобто ймовірність закінчити на цьому квадраті після виконання ходу. З цієї причини слід розуміти, що, за винятком G2J, при якому ймовірність фінішу на цьому кроці дорівнює нулю, квадрати CH матимуть найнижчі ймовірності, як 5/8 запит руху на інший квадрат, а ми зацікавленні саме на фінальному квадраті, де гравець закінчує після кожного кидку. Ми не будемо розрізняти "Просто відвідування" та відправлення до ТЮРЬМИ, також ми ігноруватимемо правило щодо вимагання подвійної плати щоб "вийти з в'язниці", припустивши, що гравці платять за те, щоб вийти на свій наступний хід.

Починаючи з кроку GO та послідовно нумеруючи квадрати з 00 до 39, ми можемо об'єднати ці двоцифрові числа для отримання рядків, що відповідають наборам квадратів.

Статистично можна показати, що три найпопулярніші квадрати, по порядку, це ТЮРМА (6.24%) = Квадрат 10, Е3 (3.18%) = Квадрат 24, і GO (3.09%) = Квадрат 00. Отож, ці три найпопулярніші квадрати можна перелічити шестизначним модальним рядком `102400`.

Якщо замість 6-гранного кубика використовується дво`n`-гранний кубик, знайдіть шестизначний модальний рядок.

# --hints--

`monopolyOdds(8)` має вивести рядок.

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` має вивести рядок `102400`.

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` має вивести рядок `100024`.

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` має вивести рядок `100005`.

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` має вивести рядок `101524`.

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
