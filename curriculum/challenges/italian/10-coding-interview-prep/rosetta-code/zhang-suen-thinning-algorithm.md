---
id: 594810f028c0303b75339ad7
title: L'algoritmo di semplificazione di Zhang-Suen
challengeType: 1
forumTopicId: 302347
dashedName: zhang-suen-thinning-algorithm
---

# --description--

Questo è un algoritmo usato per comprimere immagini in bianco e nero, cioè con un bit per ogni pixel. Ad esempio, fornendo la seguente immagine:

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

Produce il seguente output semplificato:

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

## Algoritmo

Supponiamo che i pixel neri siano 1 e i pixel bianchi 0, e che l'immagine in ingresso sia una matrice rettangolare N x M di 1 e 0. L'algoritmo opera su tutti i pixel P1 neri che possono avere otto vicini. I vicini sono, in ordine, disposti come:

$$\begin{array}{|c|c|c|} \\hline P9 & P2              & P3\\\\ \\hline P8 & \boldsymbol{P1} & P4\\\\ \\hline P7 & P6              & P5\\\\ \\hline \end{array}$$

Ovviamente i pixel ai margini dell'immagine non possono avere gli otto vicini.

- Definire $A(P1)$ = il numero di transizioni da bianco a nero, ($0 \to 1$) nella sequenza P2, P3, P4, P5, P6, P7, P8, P9, P2. (Si noti il P2 extra alla fine - è circolare).
- Sia $B(P1)$ = il numero di pixel neri vicini a P1. ($= \\sum(P2 \ldots P9)$)

**Step 1:**

Tutti i pixel sono testati e i pixel che soddisfano tutte le condizioni seguenti (contemporaneamente) sono solo annotati in questa fase.

1. Il pixel è nero e ha otto vicini
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. Almeno uno tra $P2$, $P4$ e $P6$ è bianco
5. Almeno uno tra $P4$, $P6$ e $P8$ è bianco

Dopo aver iterato sull'immagine e aver raccolto tutti i pixel che soddisfano tutte le condizioni del passaggio 1, tutti questi pixel sono impostati su bianco.

**Step 2:**

Tutti i pixel sono di nuovo testati e i pixel che soddisfano tutte le condizioni seguenti sono solo annotati in questa fase.

1. Il pixel è nero e ha otto vicini
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. Almeno uno tra $P2$, $P4$ e $P8$ è bianco
5. Almeno uno tra $P2$, $P6$ e $P8$ è bianco

Dopo aver iterato sull'intera immagine e aver raccolto tutti i pixel che soddisfano tutte le condizioni del passaggio 2, tutti questi pixel sono di nuovo impostati su bianco.

**Iterazione:**

Se un pixel è stato impostato in questa iterazione al passo 1 o 2, tutti i passi vengono ripetuti fino a quando nessun pixel dell'immagine non viene così modificato.

# --instructions--

Scrivi una routine per eseguire la compressione di Zhang-Suen sull'immagine `image` fornita, un insieme di stringhe, in cui ogni stringa rappresenta una singola riga dell'immagine. Nella stringa, `#` rappresenta i pixel neri e lo spazio vuoto quelli bianchi. La funzione dovrebbe restituire l'immagine assottigliata, usando la stessa rappresentazione.

# --hints--

`thinImage` dovrebbe essere una funzione.

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` dovrebbe restituire un array.

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` dovrebbe restituire un array di stringhe.

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` dovrebbe restituire un'immagine assottigliata come nell'esempio.

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` dovrebbe restituire un'immagine assottigliata.

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
