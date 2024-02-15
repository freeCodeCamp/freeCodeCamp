---
id: 594810f028c0303b75339ad7
title: Algoritmo de afinamento de Zhang-Suen
challengeType: 1
forumTopicId: 302347
dashedName: zhang-suen-thinning-algorithm
---

# --description--

Este é um algoritmo usado para afinar imagens em preto e branco, ou seja, imagens de um bit por pixel. Por exemplo, com uma imagem de entrada de:

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

Ele produz a saída fina:

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

Suponha que os pixels pretos são um e os pixels brancos são zeros. Leve em conta também que a imagem de entrada é um array retangular, de N por M, de uns e zeros. O algoritmo opera em todos os pixels pretos P1 que podem ter oito vizinhos. Os vizinhos estão, por ordem, organizados como:

$$\begin{array}{|c|c|c|} \\hline P9 & P2              & P3\\\\ \\hline P8 & \boldsymbol{P1} & P4\\\\ \\hline P7 & P6              & P5\\\\ \\hline \end{array}$$

Obviamente que os pixels da borda da imagem não podem ter todos os oito vizinhos.

- Defina $A(P1)$ = o número de transições de branco para preto, ($0 \to 1$) na sequência P2, P3, P4, P5, P6, P7, P8, P9, P2. (Observe o P2 adicional no final - é circular).
- Defina $B(P1)$ = o número de vizinhos de P1 que são pixels pretos. ($= \\sum(P2 \ldots P9)$)

**Passo 1:**

Todos os pixels são testados e pixels satisfazendo todas as seguintes condições (simultaneamente) são apenas anotados nesta fase.

1. O pixel é preto e tem oito vizinhos
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. Pelo menos um dos pixels, entre $P2$, $P4$ e $P6$, é branco
5. Pelo menos um dos pixels, entre $P4$, $P6$ e $P8$, é branco

Depois de iterar sobre a imagem e coletar todos os pixels satisfazendo todas as condições do passo 1, todos estes pixels que satisfazem as condições são definidos como brancos.

**Passo 2:**

Todos os pixels são testados novamente e pixels satisfazendo todas as seguintes condições (simultaneamente) são apenas anotados nesta fase.

1. O pixel é preto e tem oito vizinhos
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. Pelo menos um dos pixels, entre $P2$, $P4$ e $P8$, é branco
5. Pelo menos um dos pixels, entre $P2$, $P6$ e $P8$, é branco

Depois de iterar sobre a imagem e coletar todos os pixels satisfazendo todas as condições do passo 2, todos estes pixels que satisfazem as condições são definidos novamente como brancos.

**Iteração:**

Se qualquer pixel for definido nessa rodada dos passos 1 ou 2, então todos os passos são repetidos até que nenhum pixels da imagem seja mudado.

# --instructions--

Escreva uma rotina que realize o afinamento de Zhang-Suen na `image` fornecida, um array de strings, onde cada string representa uma única linha da imagem. Na string, `#` representa um pixel preto e espaço em branco representa um pixel branco. A função deve retornar a imagem fina, usando a mesma representação.

# --hints--

`thinImage` deve ser uma função.

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` deve retornar um array.

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` deve retornar um array de strings.

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` deve retornar uma imagem fina como no exemplo.

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` deve retornar uma imagem fina.

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
