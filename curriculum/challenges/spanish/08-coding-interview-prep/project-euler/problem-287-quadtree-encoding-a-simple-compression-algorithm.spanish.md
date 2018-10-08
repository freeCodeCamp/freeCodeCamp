---
id: 5
localeTitle: 5900f48b1000cf542c50ff9e
challengeType: 5
title: 'Problem 287: Quadtree encoding (a simple compression algorithm)'
---

## Description
<section id='description'> 
La codificación de quadtree nos permite describir una imagen en blanco y negro 2N × 2N como una secuencia de bits (0 y 1). Esas secuencias deben leerse de izquierda a derecha de la siguiente manera: 
el primer bit se ocupa de la región completa 2N × 2N; 
&quot;0&quot; denota una división: 
la región actual 2n × 2n se divide en 4 subregiones de dimensión 2n-1 × 2n-1, 
los siguientes bits contienen la descripción de la parte superior izquierda, superior derecha, inferior izquierda y Subregiones de abajo a la derecha - en ese orden; 
&quot;10&quot; indica que la región actual contiene solo píxeles negros; 
&quot;11&quot; indica que la región actual solo contiene píxeles blancos. Considere la siguiente imagen 4 × 4 (las marcas de color indican lugares donde puede ocurrir una división): 

Esta imagen se puede describir mediante varias secuencias, por ejemplo: 
&quot;0010101010010111110101010101010 &quot;, de longitud 30, o 
&quot; 0100101111101110 &quot;, de longitud 16, que es la secuencia mínima para esta imagen. 

Para un entero positivo N, defina DN como la imagen 2N × 2N con el siguiente esquema de coloración: 
el píxel con coordenadas x = 0, y = 0 corresponde al píxel inferior izquierdo, 
si (x - 2N-1) 2 + (y - 2N-1) 2 ≤ 22N-2, entonces el píxel es negro, 
contrario el píxel es blanco. ¿Cuál es la longitud de la secuencia mínima que describe D24? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler287()</code> debe devolver 313135496.
    testString: 'assert.strictEqual(euler287(), 313135496, "<code>euler287()</code> should return 313135496.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler287() {
  // Good luck!
  return true;
}

euler287();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
