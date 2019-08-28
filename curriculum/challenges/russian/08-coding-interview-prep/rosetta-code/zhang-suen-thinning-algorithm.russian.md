---
title: Zhang-Suen thinning algorithm
id: 594810f028c0303b75339ad7
challengeType: 5
forumTopicId: 302347
localeTitle: Алгоритм прореживания Чжан-Суен
---

## Description
<section id='description'>
Это алгоритм, используемый для тонкого черно-белого изображения, т.е. одного бита на пиксель. Например, с входным изображением: <pre> ###############################
 #####################################
 #########################################################################
 ######## ############################
   ###### ####### ####### ######
   ###### ####### #######
   #########################
   ########################
   #########################
   ###### ####### #######
   ###### ####### #######
   ###### ####### ####### ######
 ######## ############################
 ######## ##################################################################################
 ############### #############################
 ######## ####### ###########################
                                                           </pre> Он производит утонченный выход: <pre>
<pre> <code># ########## ####### ## # #### # # # ## # # # # # # # # # ############ # # # # # # # # # # # # # # ## # ############ ### ### &lt;/pre&gt;</code> </pre>
<h2> Алгоритм </h2>
Предположим, что черные пиксели имеют один и белый пиксели нуль, а входное изображение представляет собой прямоугольный массив N по M из единиц и нулей.
Алгоритм работает со всеми черными пикселями P1, которые могут иметь восемь соседей. Соседи упорядочены как:
<table border="1">
  <tbody><tr><td> P9 </td><td> P2 </td><td> P3 </td></tr>
  <tr><td> P8 </td><td> <b>P1</b> </td><td> P4 </td></tr>
  <tr><td> P7 </td><td> P6 </td><td> P5 </td></tr>
</tbody></table>
Очевидно, что граничные пиксели изображения не могут иметь всех восьми соседей.
<pre> <code>Define $A(P1)$ = the number of transitions from white to black, (0 -&gt; 1) in the sequence P2,P3,P4,P5,P6,P7,P8,P9,P2. (Note the extra P2 at the end - it is circular). Define $B(P1)$ = the number of black pixel neighbours of P1. ( = sum(P2 .. P9) )</code> </pre>
<h3> Шаг 1: </h3>
Все пиксели тестируются, и пиксели, удовлетворяющие всем следующим условиям (одновременно), просто отмечены на этом этапе.
  (0) пиксель черный и имеет восемь соседей
  (1) $ 2 &lt;= B (P1) &lt;= 6 $
  (2) $ A (P1) = 1 $
  (3) По крайней мере один из P2 и P4 и P6 является белым
  (4) По крайней мере один из P4 и P6 и P8 является белым
После повторения изображения и сбора всех пикселей, удовлетворяющих всем условиям шага 1, все эти условия, удовлетворяющие пикселям, устанавливаются в белый цвет.
<h3> Шаг 2: </h3>
Все пиксели снова протестированы, и пиксели, удовлетворяющие всем следующим условиям, просто отмечены на этом этапе.
  (0) пиксель черный и имеет восемь соседей
  (1) $ 2 &lt;= B (P1) &lt;= 6 $
  (2) $ A (P1) = 1 $
  (3) По меньшей мере один из P2 и P4 и «P8» является белым
  (4) По крайней мере один из «P2» и P6 и P8 является белым
После повторения изображения и сбора всех пикселей, удовлетворяющих всем условиям шага 2, все эти условия, удовлетворяющие пикселям, снова устанавливаются в белый цвет.
Итерация:
Если в этом раунде любого шага 1 или шага 2 были установлены какие-либо пиксели, все этапы повторяются до тех пор, пока пиксели изображения не будут изменены.
<p>
Задача:
Напишите рутину, чтобы прореживать Чжан-Суен на матрице изображений единиц и нулей.
</p>
</pre>
</section>

## Instructions
<section id='instructions'>
Write a routine to perform Zhang-Suen thinning on the provided image matrix.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>thinImage</code> must be a function
    testString: assert.equal(typeof thinImage, 'function');
  - text: <code>thinImage</code> must return an array
    testString: assert(Array.isArray(result));
  - text: <code>thinImage</code> must return an array of strings
    testString: assert.equal(typeof result[0], 'string');
  - text: <code>thinImage</code> must return an array of strings
    testString: assert.deepEqual(result, expected);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
