---
id: 5
localeTitle: 5900f3cc1000cf542c50fedf
challengeType: 5
title: 'Problem 96: Su Doku'
---

## Description
<section id='description'> 
Su Doku (lugar que significa japonés) es el nombre que recibe un concepto de rompecabezas popular. Su origen no está claro, pero se debe atribuir el crédito a Leonhard Euler, quien inventó una enigmática similar, mucho más difícil, llamada Latin Squares. El objetivo de los rompecabezas de Su Doku, sin embargo, es reemplazar los espacios en blanco (o ceros) en una cuadrícula de 9 por 9, de modo que cada fila, columna y cuadro de 3 por 3 contenga cada uno de los dígitos del 1 al 9. A continuación se muestra un ejemplo de una cuadrícula de rompecabezas de partida típica y su cuadrícula de solución. 




0 0 0 
0 2 0 0 
0 0 0 0 
0 0 0 0 
0 0 0 
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
0 0 28 0 00 0 5 
6 0 92 0 30 1 0 
5 0 00 0 93 0 0 



4 8 39 6 72 5 1 
9 2 13 4 58 7 6 
6 5 78 2 14 9 3 
5 4 87 2 91 3 6 
1 3 25 6 47 9 8 
9 7 61 3 82 4 5 
3 7 28 1 46 9 5 
6 8 92 5 34 1 7 
5 1 47 6 93 8 2 


Un rompecabezas Su Doku bien construido tiene una solución única y puede ser resuelto por la lógica, aunque puede ser necesario emplear métodos de &quot;adivinar y probar&quot; para eliminar opciones (hay mucha opinión cuestionada sobre esto). La complejidad de la búsqueda determina la dificultad del rompecabezas; el ejemplo anterior se considera fácil porque puede resolverse mediante una deducción directa directa. 
El archivo de texto 6K, sudoku.txt (haga clic con el botón derecho y &#39;Guardar enlace / Destinar como ...&#39;), contiene cincuenta rompecabezas Su Doku diferentes en dificultad, pero todos con soluciones únicas (el primer enigma del archivo es el ejemplo encima). 
Al resolver los cincuenta rompecabezas, encuentre la suma de los números de 3 dígitos que se encuentran en la esquina superior izquierda de cada cuadrícula de soluciones; por ejemplo, 483 es ​​el número de 3 dígitos que se encuentra en la esquina superior izquierda de la cuadrícula de soluciones de arriba. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler96()</code> debe devolver 24702.
    testString: 'assert.strictEqual(euler96(), 24702, "<code>euler96()</code> should return 24702.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler96() {
  // Good luck!
  return true;
}

euler96();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
