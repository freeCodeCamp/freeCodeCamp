---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
videoUrl: ''
localeTitle: Iterar a través de todos los elementos de una matriz utilizando bucles for
---

## Description
<section id="description"> A veces, cuando se trabaja con matrices, es muy útil poder recorrer en iteración cada elemento para encontrar uno o más elementos que podríamos necesitar, o manipular una matriz en función de qué elementos de datos cumplen un determinado conjunto de criterios. JavaScript ofrece varios métodos integrados que se repiten en matrices de maneras ligeramente diferentes para lograr resultados diferentes (como <code>every()</code> , para <code>forEach()</code> , <code>map()</code> , etc.), sin embargo, la técnica es más flexible y nos ofrece la mejor cantidad de control es un simple <code>for</code> bucle. Considera lo siguiente: <blockquote> función mayorThanTen (arr) { <br> deja newArr = []; <br> para (sea i = 0; i &lt;arr.length; i ++) { <br> si (arr [i]&gt; 10) { <br> newArr.push (arr [i]); <br> } <br> } <br> devuelve newArr; <br> } <br><br> mayorThanTen ([2, 12, 8, 14, 80, 0, 1]); <br> // devoluciones [12, 14, 80] </blockquote> Usando un bucle <code>for</code> , esta función recorre y accede a cada elemento de la matriz y lo somete a una prueba simple que hemos creado. De esta manera, hemos determinado fácil y programáticamente qué elementos de datos son más grandes que <code>10</code> , y hemos devuelto una nueva matriz que contiene esos elementos. </section>

## Instructions
<section id="instructions"> Hemos definido una función, <code>filteredArray</code> , que toma <code>arr</code> , una matriz anidada, y <code>elem</code> como argumentos, y devuelve una nueva matriz. <code>elem</code> representa un elemento que puede o no estar presente en una o más de las matrices anidadas dentro de <code>arr</code> . Modifique la función, utilizando un bucle <code>for</code> , para devolver una versión filtrada de la matriz pasada de manera que se haya eliminado cualquier matriz anidada dentro de <code>arr</code> contenga <code>elem</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> debe devolver <code>[ [10, 8, 3], [14, 6, 23] ]</code>'
    testString: 'assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]], "<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> should return <code>[ [10, 8, 3], [14, 6, 23] ]</code>");'
  - text: '<code>filteredArray([ [&quot;trumpets&quot;, 2], [&quot;flutes&quot;, 4], [&quot;saxophones&quot;, 2] ], 2)</code> debe devolver <code>[ [&quot;flutes&quot;, 4] ]</code>'
    testString: 'assert.deepEqual(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2), [["flutes", 4]], "<code>filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)</code> should return <code>[ ["flutes", 4] ]</code>");'
  - text: '<code>filteredArray([ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;], [&quot;dave&quot;, &quot;sean&quot;, &quot;peter&quot;] ], &quot;peter&quot;)</code> debe devolver <code>[ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;] ]</code>'
    testString: 'assert.deepEqual(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"), [["amy", "beth", "sam"]], "<code>filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")</code> should return <code>[ ["amy", "beth", "sam"] ]</code>");'
  - text: '<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> debe devolver <code>[ ]</code>'
    testString: 'assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), [], "<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> should return <code>[ ]</code>");'
  - text: El <code>filteredArray</code> función debe utilizar un <code>for</code> bucle
    testString: 'assert.notStrictEqual(filteredArray.toString().search(/for/), -1, "The <code>filteredArray</code> function should utilize a <code>for</code> loop");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
