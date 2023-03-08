---
id: 594810f028c0303b75339ad7
title: Алгоритм проріджування Чжан-Суна
challengeType: 1
forumTopicId: 302347
dashedName: zhang-suen-thinning-algorithm
---

# --description--

Це алгоритм, який використовується для проріджування чорно-білих зображень, тобто один біт на піксель зображення. Наприклад, із вхідним зображенням:

```js
const testImage1 = [
 '                               ',
 '#########       ########       ',
 '###   ####     ####  ####      ',
 '###    ###     ###    ###      ',
 '###   ####     ###             ',
 '#########      ###             ',
 '### ####       ###    ###      ',
 '###  ####  ### ####  #### ###  ',
 '###   #### ###  ########  ###  ',
 '                               '
];
```

Отримуємо проріджений результат:

```js
[ '                               ',
  '########         ######        ',
  '#      #        ##             ',
  '#       #       #              ',
  '#      #        #              ',
  '###### #        #              ',
  '#     ##        #              ',
  '#      #    #   ##    ##   #   ',
  '#       #         ####         ',
  '                               ' ];
```

## Алгоритм

Припустимо, що чорні пікселі дорівнюють одиниці, а білі — нулю, а вхідне зображення — прямокутним масивом одиниць і нулів N на M. Алгоритм працює на всіх чорних пікселях P1, які мають вісім сусідніх пікселів. Сусідні пікселі впорядковані наступним чином:

$$\begin{array}{|c|c|c|} \\hline P9 & P2              & P3\\\\ \\hline P8 & \boldsymbol{P1} & P4\\\\ \\hline P7 & P6              & P5\\\\ \\hline \end{array}$$

Звичайно, що граничні пікселі зображення не можуть мати всі вісім сусідніх пікселів.

- Визначаємо, що $A(P1)$ = кількість переходів від білого до чорного, ($ 0 \to 1 $) у послідовності P2, P3, P4, P5, P6, P7, P8, P9, P2. (Зверніть увагу на додатковий Р2 в кінці - він круговий).
- Визначаємо, що $B(P1)$ = кількість сусідніх чорних пікселів P1. ($= \\суму(P2 \ P9)$)

**Крок 1:**

На цьому етапі визначаємо пікселі, що задовольняють всі наведені нижче умови (одночасно).

1. Піксель чорний і має вісім сусідів
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. Принаймні один із $P2$, $P4$ та $P6$ є білим
5. Принаймні один із $P4$, $P6$ та $P8$ є білим

Після ітерації зображення та збору всіх пікселів, що задовольняють усі умови 1 кроку, усі ці пікселі замінюються на білі.

**Крок 2:**

Усі пікселі знову перевіряємо і на цьому етапі визначаємо пікселі, що задовольняють всі наведені нижче умови.

1. Піксель чорний і має вісім сусідніх пікселів
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. Принаймні один із $P2$, $P4$ та $P8$ є білим
5. Принаймні один із $P2$, $P6$ та $P8$ є білим

Після ітерації зображення та збору всіх пікселів, що задовольняють усі умови 2 кроку, усі ці пікселі знову замінюються на білі.

**Ітерація:**

Якщо на етапі кроку 1 або кроку 2 були встановлені будь-які пікселі, усі кроки повторюються, поки усі пікселі зображення перестануть змінюватися таким чином.

# --instructions--

Напишіть процедуру, щоб виконати проріджування Чжан-Суна на наданому `image`, масиві рядків, де кожен рядок представляє один рядок зображення. У рядку `#` позначає чорний піксель, а пробіл — білий піксель. Функція повинна повернути проріджене зображення, використовуючи те саме вираження.

# --hints--

`thinImage` має бути функцією.

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` повинно бути масивом.

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` має повернути масив рядків.

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` має повернути проріджене зображення, як у прикладі.

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` має повернути проріджене зображення.

```js
assert.deepEqual(thinImage(_testImage2), expected2);
```

# --seed--

## --after-user-code--

```js
const _testImage1 = [
  '                               ',
  '#########       ########       ',
  '###   ####     ####  ####      ',
  '###    ###     ###    ###      ',
  '###   ####     ###             ',
  '#########      ###             ',
  '### ####       ###    ###      ',
  '###  ####  ### ####  #### ###  ',
  '###   #### ###  ########  ###  ',
  '                               '
];
const expected1 = [
  '                               ',
  '########         ######        ',
  '#      #        ##             ',
  '#       #       #              ',
  '#      #        #              ',
  '###### #        #              ',
  '#     ##        #              ',
  '#      #    #   ##    ##   #   ',
  '#       #         ####         ',
  '                               '
];
const _testImage2 = [
  '                                                          ',
  ' #################                   #############        ',
  ' ##################               ################        ',
  ' ###################            ##################        ',
  ' ########     #######          ###################        ',
  '   ######     #######         #######       ######        ',
  '   ######     #######        #######                      ',
  '   #################         #######                      ',
  '   ################          #######                      ',
  '   #################         #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######         #######       ######        ',
  ' ########     #######          ###################        ',
  ' ########     ####### ######    ################## ###### ',
  ' ########     ####### ######      ################ ###### ',
  ' ########     ####### ######         ############# ###### ',
  '                                                          '];
const expected2 = [
  '                                                          ',
  '                                                          ',
  '    # ##########                       #######            ',
  '     ##        #                   ####       #           ',
  '     #          #                 ##                      ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     ############               #                         ',
  '     #          #               #                         ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     #                            ##                      ',
  '     #                             ############           ',
  '                       ###                          ###   ',
  '                                                          ',
  '                                                          '
];
```

## --seed-contents--

```js
function thinImage(image) {

}

const testImage1 = [
  '                               ',
  '#########       ########       ',
  '###   ####     ####  ####      ',
  '###    ###     ###    ###      ',
  '###   ####     ###             ',
  '#########      ###             ',
  '### ####       ###    ###      ',
  '###  ####  ### ####  #### ###  ',
  '###   #### ###  ########  ###  ',
  '                               '
];
```

# --solutions--

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

const ZhangSuen = (function () {
  function ZhangSuen() {
  }

  ZhangSuen.nbrs = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]];

  ZhangSuen.nbrGroups = [[[0, 2, 4], [2, 4, 6]], [[0, 2, 6], [0, 4, 6]]];

  ZhangSuen.toWhite = [];

  ZhangSuen.main = function (image) {
    ZhangSuen.grid = new Array(image);
    for (let r = 0; r < image.length; r++) {
      ZhangSuen.grid[r] = image[r].split('');
    }
    ZhangSuen.thinImage();
    return ZhangSuen.getResult();
  };

  ZhangSuen.thinImage = function () {
    let firstStep = false;
    let hasChanged;
    do {
      hasChanged = false;
      firstStep = !firstStep;
      for (let r = 1; r < ZhangSuen.grid.length - 1; r++) {
        for (let c = 1; c < ZhangSuen.grid[0].length - 1; c++) {
          if (ZhangSuen.grid[r][c] !== '#') {
            continue;
          }
          const nn = ZhangSuen.numNeighbors(r, c);
          if (nn < 2 || nn > 6) {
            continue;
          }
          if (ZhangSuen.numTransitions(r, c) !== 1) {
            continue;
          }
          if (!ZhangSuen.atLeastOneIsWhite(r, c, firstStep ? 0 : 1)) {
            continue;
          }
          ZhangSuen.toWhite.push(new Point(c, r));
          hasChanged = true;
        }
      }
      for (let i = 0; i < ZhangSuen.toWhite.length; i++) {
        const p = ZhangSuen.toWhite[i];
        ZhangSuen.grid[p.y][p.x] = ' ';
      }
      ZhangSuen.toWhite = [];
    } while ((firstStep || hasChanged));
  };

  ZhangSuen.numNeighbors = function (r, c) {
    let count = 0;
    for (let i = 0; i < ZhangSuen.nbrs.length - 1; i++) {
      if (ZhangSuen.grid[r + ZhangSuen.nbrs[i][1]][c + ZhangSuen.nbrs[i][0]] === '#') {
        count++;
      }
    }
    return count;
  };

  ZhangSuen.numTransitions = function (r, c) {
    let count = 0;
    for (let i = 0; i < ZhangSuen.nbrs.length - 1; i++) {
      if (ZhangSuen.grid[r + ZhangSuen.nbrs[i][1]][c + ZhangSuen.nbrs[i][0]] === ' ') {
        if (ZhangSuen.grid[r + ZhangSuen.nbrs[i + 1][1]][c + ZhangSuen.nbrs[i + 1][0]] === '#') {
          count++;
        }
      }
    }
    return count;
  };

  ZhangSuen.atLeastOneIsWhite = function (r, c, step) {
    let count = 0;
    const group = ZhangSuen.nbrGroups[step];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < group[i].length; j++) {
        const nbr = ZhangSuen.nbrs[group[i][j]];
        if (ZhangSuen.grid[r + nbr[1]][c + nbr[0]] === ' ') {
          count++;
          break;
        }
      }
    }
    return count > 1;
  };

  ZhangSuen.getResult = function () {
    const result = [];
    for (let i = 0; i < ZhangSuen.grid.length; i++) {
      const row = ZhangSuen.grid[i].join('');
      result.push(row);
    }
    return result;
  };
  return ZhangSuen;
}());

function thinImage(image) {
  return ZhangSuen.main(image);
}
```
