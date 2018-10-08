---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
localeTitle: Iterar a través de una matriz con un bucle For
challengeType: 1
---

## Description
<section id='description'> 
Una tarea común en JavaScript es iterar a través del contenido de una matriz. Una forma de hacerlo es con un bucle <code>for</code> . Este código dará salida a cada elemento de la matriz <code>arr</code> a la consola: 
<blockquote>var arr = [10,9,8,7,6];<br>for (var i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp; console.log(arr[i]);<br>}</blockquote> 
Recuerde que las matrices tienen numeración basada en cero, lo que significa que el último índice de la matriz es la longitud - 1. Nuestra <dfn>condición</dfn> para este bucle es <code>i &lt; arr.length</code> , que se detiene cuando <code>i</code> tiene la longitud - 1. 
</section>

## Instructions
<section id='instructions'> 
Declarar e inicializar una variable <code>total</code> a <code>0</code> . Use un bucle <code>for</code> para agregar el valor de cada elemento de la matriz <code>myArr</code> al <code>total</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>total</code> debe ser declarado e inicializado a 0
    testString: 'assert(code.match(/var.*?total\s*=\s*0.*?;/), "<code>total</code> should be declared and initialized to 0");'
  - text: <code>total</code> debe ser igual a 20
    testString: 'assert(total === 20, "<code>total</code> should equal 20");'
  - text: Debe usar un bucle <code>for</code> para iterar a través de <code>myArr</code>
    testString: 'assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/), "You should use a <code>for</code> loop to iterate through <code>myArr</code>");'
  - text: No establezca el <code>total</code> a 20 directamente
    testString: 'assert(!code.match(/total[\s\+\-]*=\s*(\d(?!\s*[;,])|[1-9])/g), "Do not set <code>total</code> to 20 directly");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line


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
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

</section>
