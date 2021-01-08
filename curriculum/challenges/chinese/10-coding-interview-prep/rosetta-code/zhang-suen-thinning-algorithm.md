---
id: 594810f028c0303b75339ad7
title: Zhang-Suen 细化算法
challengeType: 5
forumTopicId: 302347
---

# --description--

这是一个黑白图像（二值图像）的细化算法。 例如，输入图像如下：

<!-- TODO write fully in markdown>
<!-- markdownlint-disable -->

<pre>
 #################                   #############
 ##################               ################
 ###################            ##################
 ########     #######          ###################
   ######     #######         #######       ######
   ######     #######        #######
   #################         #######
   ################          #######
   #################         #######
   ######     #######        #######
   ######     #######        #######
   ######     #######         #######       ######
 ########     #######          ###################
 ########     ####### ######    ################## ######
 ########     ####### ######      ################ ######
 ########     ####### ######         ############# ######
</pre>

细化后的输出图像为：

<pre>

    # ##########                       #######
     ##        #                   ####       #
     #          #                 ##
     #          #                #
     #          #                #
     #          #                #
     ############               #
     #          #               #
     #          #                #
     #          #                #
     #          #                #
     #                            ##
     #                             ############
                       ###                          ###

</pre>

<h2>算法</h2>

假设黑像素点为 1，白像素点为 0；则输入图像可以用一个 N * M 的矩阵（或数组）来表示，其中，矩阵中的元素只能为 0 或 1。这个算法对所有黑像素点 P1 进行操作。每个点 P1 都可以有 8 个相邻的点，分别是：

<table border="3">
  <tr><td style="text-align: center;">P9</td><td style="text-align: center;">P2</td><td style="text-align: center;">P3</td></tr>
  <tr><td style="text-align: center;">P8</td><td style="text-align: center;"><strong>P1</strong></td><td style="text-align: center;">P4</td></tr>
  <tr><td style="text-align: center;">P7</td><td style="text-align: center;">P6</td><td style="text-align: center;">P5</td></tr>
</table>

显然，对于图像边框上的像素点，与它们相邻的点的数量是小于 8 的。

<ul>
  <li>令 $A(P1)$ 为需要变为黑点的白点数量，即在 P2, P3, P4, P5, P6, P7, P8, P9, P2 这一序列中，(0 -> 1) 的操作次数（注意：为了表示循环/闭环，我们在序列的结尾特地多加了一个 P2）</li>
  <li>令 $B(P1)$ 为与 P1 相邻的点中，黑点的数量（即 sum(P2 .. P9)）</li>
</ul>

<h3>步骤一：</h3>

选出同时满足以下列出条件的所有像素点：

  <ol>
    <li>像素点为黑色，且有 8 个点与之相邻</li>
    <li>$2 <= B(P1) <= 6$</li>
    <li>$A(P1) = 1$</li>
    <li><strong>P2, P4 and P6</strong> 中至少有一个是白点</li>
    <li><strong>P4, P6 and P8</strong> 中至少有一个是白点</li>
  </ol>

在对图像进行迭代并选出所有符合这一步所述条件的点后，把这些点都设置为白色。

<h3>步骤二：</h3>

选出同时满足以下列出条件的所有像素点：

  <ol>
    <li>像素点为黑色，且有 8 个点与之相邻</li>
    <li>$2 <= B(P1) <= 6$</li>
    <li>$A(P1) = 1$</li>
    <li><strong>P2, P4 and P6</strong> 中至少有一个是白点</li>
    <li><strong>P2, P6 and P8</strong> 中至少有一个是白点</li>
  </ol>
  
在对图像进行迭代并选出所有符合这一步所述条件的点后，把这些点都设置为白色。

<h3>迭代：</h3>

只要在步骤一或步骤二，有黑色点被选出并设置成了白色，则继续重复步骤一和步骤二，直到没有黑色点被选出并更改为止。

# --instructions--

基于输入图像（以矩阵的形式给出），实现 Zhang-suen 细化算法。

# --hints--

`thinImage` 应为函数。

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` 应返回数组。

```js
assert(Array.isArray(result));
```

`thinImage` 应返回字符串数组。

```js
assert.equal(typeof result[0], 'string');
```

`thinImage` 应返回预计的结果。

```js
assert.deepEqual(result, expected);
```

# --seed--

## --after-user-code--

```js
const imageForTests = [
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
const expected = [
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
const result = thinImage(imageForTests);
```

## --seed-contents--

```js
const testImage = [
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

function thinImage(image) {

}
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
