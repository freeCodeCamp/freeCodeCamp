---
title: Zhang-Suen thinning algorithm
id: 594810f028c0303b75339ad7
challengeType: 5
videoUrl: ''
localeTitle: Algoritmo de adelgazamiento de Zhang-Suen
---

## Description
<section id="description"> Este es un algoritmo utilizado para diluir imágenes en blanco y negro, es decir, un bit por píxel. Por ejemplo, con una imagen de entrada de: <pre> ################# #############
 ################## ################
 ################### ##################
 ######## ####### ###################
   ###### ################ ######
   ###### ###############
   ################# #######
   ################ #######
   ################# #######
   ###### ###############
   ###### ###############
   ###### ################ ######
 ######## ####### ###################
 ######## ####### ######################## ######
 ######## ####### ###################### ######
 ######## ####### ##########################
                                                           </pre> Produce la salida adelgazada: <pre>
<pre> <code># ########## ####### ## # #### # # # ## # # # # # # # # # ############ # # # # # # # # # # # # # # ## # ############ ### ### &lt;/pre&gt;</code> </pre>
<h2> Algoritmo </h2>
Suponga que los píxeles negros son uno y los píxeles blancos cero, y que la imagen de entrada es una matriz rectangular N por M de unos y ceros.
El algoritmo opera en todos los píxeles negros P1 que pueden tener ocho vecinos. Los vecinos están, en orden, dispuestos como:
<table border="1">
  <tbody><tr><td> P9 </td><td> P2 </td><td> P3 </td></tr>
  <tr><td> P8 </td><td> <b>P1</b> </td><td> P4 </td></tr>
  <tr><td> P7 </td><td> P6 </td><td> P5 </td></tr>
</tbody></table>
Obviamente, los píxeles del límite de la imagen no pueden tener los ocho vecinos completos.
<pre> <code>Define $A(P1)$ = the number of transitions from white to black, (0 -&gt; 1) in the sequence P2,P3,P4,P5,P6,P7,P8,P9,P2. (Note the extra P2 at the end - it is circular). Define $B(P1)$ = the number of black pixel neighbours of P1. ( = sum(P2 .. P9) )</code> </pre>
<h3> Paso 1: </h3>
Todos los píxeles se prueban y los píxeles que satisfacen todas las condiciones siguientes (simultáneamente) se anotan en esta etapa.
  (0) El píxel es negro y tiene ocho vecinos.
  (1) $ 2 &lt;= B (P1) &lt;= 6 $
  (2) $ A (P1) = 1 $
  (3) Al menos uno de P2 y P4 y P6 es blanco
  (4) Al menos uno de P4 y P6 y P8 es blanco
Después de recorrer la imagen y recopilar todos los píxeles que satisfacen todas las condiciones del paso 1, todas estas condiciones que satisfacen los píxeles se establecen en blanco.
<h3> Paso 2: </h3>
Todos los píxeles se vuelven a probar y los píxeles que satisfacen todas las condiciones siguientes se mencionan en esta etapa.
  (0) El píxel es negro y tiene ocho vecinos.
  (1) $ 2 &lt;= B (P1) &lt;= 6 $
  (2) $ A (P1) = 1 $
  (3) Al menos uno de P2 y P4 y &quot;&#39;P8&quot;&#39; es blanco
  (4) Al menos uno de &quot;P2&quot; y P6 y P8 es blanco
Después de recorrer la imagen y recopilar todos los píxeles que satisfacen todas las condiciones del paso 2, todas estas condiciones que satisfacen los píxeles se configuran nuevamente en blanco.
Iteración:
Si se establecieron píxeles en esta ronda del paso 1 o el paso 2, todos los pasos se repiten hasta que no se cambien los píxeles de la imagen.
<p>
Tarea:
Escriba una rutina para realizar el adelgazamiento de Zhang-Suen en una matriz de imágenes de unos y ceros.
</p>
</pre></section>

## Instructions
<section id="instructions">
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
// solution required
```
</section>
