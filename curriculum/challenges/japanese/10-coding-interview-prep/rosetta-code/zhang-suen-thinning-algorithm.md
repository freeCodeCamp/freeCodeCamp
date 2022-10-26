---
id: 594810f028c0303b75339ad7
title: Zhang-Suen の細線化アルゴリズム
challengeType: 1
forumTopicId: 302347
dashedName: zhang-suen-thinning-algorithm
---

# --description--

これは、白黒画像、つまり 1 ビット画像を細線化するために使用されるアルゴリズムです。 たとえば、以下の入力画像の場合、

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

以下のように、細線化された出力を生成します。

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

## アルゴリズム

黒のピクセルを 1、白のピクセルを 0 とし、入力画像は 1 と 0 の N×M の長方形配列とします。 このアルゴリズムは、8つの近傍を持つ黒のピクセル P1 全体に処理を行います。 近傍は以下のように並んでいます:

$$\begin{array}{|c|c|c|} \\hline P9 & P2              & P3\\\\ \\hline P8 & \boldsymbol{P1} & P4\\\\ \\hline P7 & P6              & P5\\\\ \\hline \end{array}$$

当然、画像の境界ピクセルは 8 つすべての近傍を持つことはできません。

- 数列 P2, P3, P4, P5, P6, P7, P8, P9, P2 において、$A(P1)$ = 白から黒 ($0 \to 1$) になっている場所の数として定義します。 (最後に追加の P2 が来て、環状になります)
- $B(P1)$ = P1 の近傍の黒のピクセル数として定義します。 ($= \\sum(P2 \ldots P9)$)

**ステップ 1:**

すべてのピクセルをテストし、この段階では次のすべての条件を (同時に) 満たすピクセルに注目します。

1. ピクセルは黒で8つの近傍を持ちます
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. $P2$、$P4$、$P6$ のうち、少なくとも1つは白です
5. $P4$、$P6$、$P8$ のうち、少なくとも1つは白です

画像への条件の適用を反復し、ステップ 1 の条件を満たすピクセルをすべて収集した後、この条件を満たす全ピクセルを白にします。

**ステップ 2:**

すべてのピクセルを再度テストし、この段階では次のすべての条件を満たすピクセルに注目します。

1. ピクセルは黒で8つの近傍を持ちます
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. $P2$、$P4$、$P8$ のうち、少なくとも1つは白です
5. $P2$、$P6$、$P8$ のうち、少なくとも1つは白です

画像への条件の適用を反復し、ステップ 2 の条件を満たすピクセルをすべて収集した後、この条件を満たす全ピクセルを白にします。

**反復:**

ステップ 1 またはステップ 2 の作業で任意のピクセルを設定し、画像ピクセルに変更点がなくなるまで、すべてのステップを繰り返します。

# --instructions--

与えられた `image`上で Zhang-Suen の細線化アルゴリズムを実行するためのルーチンを記述してください。文字列の配列で、各文字列は画像の単一の行を表します。 文字列内では、`#` が黒のピクセル、空白は白のピクセルを表します。 関数は、同じ表現を使用して、細線化された画像を返さなければなりません。

# --hints--

`thinImage` は関数とします。

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` は配列を返す必要があります。

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` は文字列の配列を返す必要があります。

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` は例で示すような細線化された画像を返す必要があります。

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` は細線化された画像を返す必要があります。

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
