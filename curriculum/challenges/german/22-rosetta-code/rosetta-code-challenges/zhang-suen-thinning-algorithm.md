---
id: 594810f028c0303b75339ad7
title: Zhang-Suen-Ausdünnungsalgorithmus
challengeType: 1
forumTopicId: 302347
dashedName: zhang-suen-thinning-algorithm
---

# --description--

This is an algorithm used to thin a black and white i.e. one bit per pixel images. For example, with an input image of:

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

Es erzeugt die verdünnte Ausgabe:

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

## Algorithm

Nehmen wir an, dass schwarze Pixel eine Eins und weiße Pixel eine Null sind, und dass das Eingabebild eine rechteckige N x M-Matrix aus Einsen und Nullen ist. Der Algorithmus arbeitet mit allen schwarzen Pixeln P1, die acht Nachbarn haben können. Die Nachbarn sind der Reihe nach wie folgt angeordnet:

$$\begin{array}{|c|c|c|} \\hline P9 & P2              & P3\\\\ \\hline P8 & \boldsymbol{P1} & P4\\\\ \\hline P7 & P6              & P5\\\\ \\hline \end{array}$$

Es ist offensichtlich, dass die Randpixel des Bildes nicht alle acht Nachbarn haben können.

- Define $A(P1)$ = the number of transitions from white to black, ($0 \to 1$) in the sequence P2, P3, P4, P5, P6, P7, P8, P9, P2. (Note the extra P2 at the end - it is circular).
- Definiere $B(P1)$ = die Anzahl der schwarzen Pixel-Nachbarn von P1. ($= \\sum(P2 \ldots P9)$)

**Schritt 1:**

Alle Pixel werden getestet, und Pixel, die alle folgenden Bedingungen (gleichzeitig) erfüllen, werden in diesem Stadium lediglich vermerkt.

1. The pixel is black and has eight neighbours
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. At least one of $P2$, $P4$ and $P6$ is white
5. At least one of $P4$, $P6$ and $P8$ is white

Nach der Iteration über das Bild und dem Sammeln aller Pixel, die alle Bedingungen von Schritt 1 erfüllen, werden alle Pixel, die diese Bedingungen erfüllen, auf weiß gesetzt.

**Schritt 2:**

Alle Pixel werden erneut getestet, und Pixel, die alle folgenden Bedingungen erfüllen, werden in diesem Stadium einfach vermerkt.

1. The pixel is black and has eight neighbours
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. Mindestens eines von $P2$, $P4$ und $P8$ ist weiß
5. Mindestens eines von $P2$, $P6$ und $P8$ ist weiß

Nach der Iteration über das Bild und dem Sammeln aller Pixel, die alle Bedingungen von Schritt 2 erfüllen, werden alle Pixel, die diese Bedingungen erfüllen, wieder auf weiß gesetzt.

**Iteration:**

Wenn in dieser Runde von Schritt 1 oder Schritt 2 Pixel gesetzt wurden, werden alle Schritte wiederholt, bis keine Bildpixel mehr verändert werden.

# --instructions--

Schreibe eine Routine zur Durchführung der Zhang-Suen-Durchforstung für das angegebene `image`, eine Anordnung von Zeichenketten, wobei jede Zeichenfolge eine einzelne Zeile des Bildes darstellt. Im String steht `#` für schwarze Pixel und Leerzeichen für weiße Pixel. Die Funktion sollte ein ausgedünntes Bild zurückgeben, das die gleiche Darstellung verwendet.

# --hints--

`thinImage` sollte eine Funktion sein.

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` sollte ein Array zurückgeben.

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` sollte ein Array an Strings zurückgeben.

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` sollte ein ausgedünntes Bild wie im Beispiel zurückgeben.

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` sollte ein ausgedünntes Bild zurückgeben.

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
