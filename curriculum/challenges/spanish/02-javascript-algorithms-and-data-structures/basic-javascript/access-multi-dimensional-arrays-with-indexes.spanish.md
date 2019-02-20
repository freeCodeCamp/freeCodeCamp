---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: ''
localeTitle: Acceder a matrices multidimensionales con índices
---

## Description
<section id="description"> Una forma de pensar en una matriz <dfn>multidimensional</dfn> es como una <em>matriz de matrices</em> . Cuando usa corchetes para acceder a su matriz, el primer conjunto de corchetes se refiere a las entradas en la matriz más externa (el primer nivel), y cada par adicional de corchetes se refiere al siguiente nivel de entradas adentro. <strong>Ejemplo</strong> <blockquote> var arr = [ <br> [1,2,3], <br> [4,5,6], <br> [7,8,9], <br> [[10,11,12], 13, 14] <br> ]; <br> arr [3]; // es igual a [[10,11,12], 13, 14] <br> arr [3] [0]; // es igual a [10,11,12] <br> arr [3] [0] [1]; // es igual a 11 </blockquote> <strong>Nota</strong> <br> No debe haber espacios entre el nombre de la matriz y los corchetes, como la <code>array [0][0]</code> e incluso esta <code>array [0] [0]</code> no está permitida. Aunque JavaScript puede procesar esto correctamente, esto puede confundir a otros programadores que leen su código. </section>

## Instructions
<section id="instructions"> Usando la notación de corchetes, seleccione un elemento de <code>myArray</code> para que <code>myData</code> sea ​​igual a <code>8</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myData</code> debe ser igual a <code>8</code> .
    testString: 'assert(myData === 8, "<code>myData</code> should be equal to <code>8</code>.");'
  - text: Debe usar la notación de corchetes para leer el valor correcto de <code>myArray</code> .
    testString: 'assert(/myArray\[2\]\[1\]/g.test(code) && !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code), "You should be using bracket notation to read the correct value from <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

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
