---
id: 594810f028c0303b75339ad7
title: Zhang-Suen 细化算法
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

细化后的输出图像为：

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

假设黑色像素为 1，白色像素为 0，并且输入图像是一个由 1 和 0 组成的 N×M 矩形阵列。 该算法对可以有八个邻居的所有黑色像素 P1 进行操作。 邻居按顺序排列为：

$$\begin{array}{|c|c|c|} \\hline P9 & P2              & P3\\\\ \\hline P8 & \boldsymbol{P1} & P4\\\\ \\hline P7 & P6              & P5\\\\ \\hline \end{array}$$

显然，图像的边界像素不可能有完整的八个邻域。

- Define $A(P1)$ = the number of transitions from white to black, ($0 \to 1$) in the sequence P2, P3, P4, P5, P6, P7, P8, P9, P2. (Note the extra P2 at the end - it is circular).
- 定义 $B(P1)$ = P1 的黑色像素邻居的数量。 ($= \\sum(P2 \ldots P9)$)

**步骤 1：**

测试所有像素，并且在此阶段仅记录满足以下所有条件（同时）的像素。

1. The pixel is black and has eight neighbours
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. At least one of $P2$, $P4$ and $P6$ is white
5. At least one of $P4$, $P6$ and $P8$ is white

在对图像进行迭代并收集满足所有步骤 1 条件的所有像​​素后，将所有这些满足条件的像素设置为白色。

**步骤 2：**

再次测试所有像素，并在此阶段仅记录满足以下所有条件的像素。

1. The pixel is black and has eight neighbours
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. $P2$、$P4$ 和 $P8$ 中的至少一个是白色的
5. $P2$、$P6$ 和 $P8$ 中的至少一个是白色的

在迭代图像并收集满足所有步骤 2 条件的所有像​​素后，所有这些满足条件的像素再次设置为白色。

**迭代：**

如果在这轮步骤 1 或步骤 2 中设置了任何像素，则重复所有步骤，直到没有图像像素发生如此变化。

# --instructions--

编写一个例程，对提供的 `image`（一个字符串数组）执行 Zhang-Suen 细化，其中每个字符串代表图像的单行。 字符串中，`#`代表黑色像素，空格代表白色像素。 函数应返回细化图像，使用相同的表示。

# --hints--

`thinImage` 应该是一个函数。

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` 应该返回一个数组。

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` 应该返回一个字符串数组。

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` 应该返回一个细化的图像，如示例中所示。

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` 应该返回一个细化的图像。

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
