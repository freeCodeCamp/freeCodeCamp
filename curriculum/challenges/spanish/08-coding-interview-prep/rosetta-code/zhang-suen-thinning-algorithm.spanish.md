---
title: Zhang-Suen thinning algorithm
id: 594810f028c0303b75339ad7
localeTitle: 594810f028c0303b75339ad7
challengeType: 5
---

## Description
<section id='description'> 
Este es un algoritmo utilizado para diluir imágenes en blanco y negro, es decir, un bit por píxel. 
Por ejemplo, con una imagen de entrada de: 
<pre> 
################# ############# 
################## ################ 
################### ############## #### 
#################################### 
###### #### ### ####### ###### 
###### ####### ####### 
############ ##### ####### 
################ ####### 
############# #### ####### 
###### ####### ####### 
###### ####### #### ### 
###### ####### ####### ###### 
######## ####### #### ############### 
######## ####### ###### ############# ##### ###### 
################ ###################### # ##### 
################ ###### ################### 
</pre> 
Produce la salida adelgazada: 
<pre> 

# ########## ####### 
## # #### # 
# # ## 
# # # 
# # # 
# # # 
### ######### # 
# # # 
# # # 
# # # 
# # # 
# ## 
# ############ 
### ## # 

</pre> 
<h2> Algoritmo </h2> 
Suponga que los píxeles negros son uno y los píxeles blancos cero, y que la imagen de entrada es una matriz rectangular N por M de unos y ceros. 
El algoritmo opera en todos los píxeles negros P1 que pueden tener ocho vecinos. Los vecinos están, en orden, ordenados como: 
<table border="1"> 
<tr> <td> P9 </td><td> P2 </td><td> P3 </td></tr> 
<tr> <td> P8 </td><td> <b>P1</b> </td><td> P4 </td></tr> 
<tr> <td> P7 </td><td> P6 </td><td> P5 </td></tr> 
</table> 
Obviamente, los píxeles del límite de la imagen no pueden tener los ocho vecinos completos. 

Defina $ A (P1) $ = el número de transiciones de blanco a negro, (0 -&gt; 1) en la secuencia P2, P3, P4, P5, P6, P7, P8, P9, P2. (Note el P2 extra al final - es circular). 


Defina $ B (P1) $ = el número de vecinos de píxeles negros de P1. (= suma (P2 .. P9)) 

<h3> Paso 1: </h3> 
Todos los píxeles se prueban y los píxeles que satisfacen todas las condiciones siguientes (simultáneamente) se anotan en esta etapa. 
(0) El píxel es negro y tiene ocho vecinos 
(1) $ 2 &lt;= B (P1) &lt;= 6 $ 
(2) $ A (P1) = 1 $ 
(3) Al menos uno de P2 y P4 y P6 es blanco 
(4) Al menos uno de P4 y P6 y P8 es blanco 
Después de iterar sobre la imagen y recolectar todos los píxeles que satisfacen todas las condiciones del paso 1, todas estas condiciones que satisfacen los píxeles se configuran en blanco. 
<h3> Paso 2: </h3> 
Todos los píxeles se vuelven a probar y los píxeles que satisfacen las siguientes condiciones se mencionan en esta etapa. 
(0) El píxel es negro y tiene ocho vecinos 
(1) $ 2 &lt;= B (P1) &lt;= 6 $ 
(2) $ A (P1) = 1 $ 
(3) Al menos uno de P2 y P4 y &quot;&#39;P8&quot;&#39; es blanco 
(4) Al menos uno de &quot;&#39;P2&quot;&#39; y P6 y P8 es blanco 
Después de iterar sobre la imagen y recolectar todos los píxeles que satisfacen todas las condiciones del paso 2, todas estas condiciones que satisfacen los píxeles son de nuevo en blanco. Iteración 
: 
Si se establecieron algunos píxeles en esta ronda del paso 1 o el paso 2, todos los pasos se repiten hasta que no se cambien los píxeles de la imagen. 
<p> 
Tarea: 
Escriba una rutina para realizar el adelgazamiento de Zhang-Suen en una matriz de imágenes de unos y ceros. 
</p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>thinImage</code> debe ser una función
    testString: 'assert.equal(typeof thinImage, "function", "<code>thinImage</code> must be a function");'
  - text: <code>thinImage</code> debe devolver una matriz
    testString: 'assert(Array.isArray(result), "<code>thinImage</code> must return an array");'
  - text: <code>thinImage</code> debe devolver una serie de cadenas
    testString: 'assert.equal(typeof result[0], "string", "<code>thinImage</code> must return an array of strings");'
  - text: <code>thinImage</code> debe devolver una serie de cadenas
    testString: 'assert.deepEqual(result, expected, "<code>thinImage</code> must return an array of strings");'

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


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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
