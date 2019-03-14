---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: ''
localeTitle: Acceso a datos de matriz con índices
---

## Description
<section id="description"> Podemos acceder a los datos dentro de las matrices utilizando <code>indexes</code> . Los índices de matriz se escriben en la misma notación de corchete que usan las cadenas, excepto que en lugar de especificar un carácter, están especificando una entrada en la matriz. Al igual que las cadenas, las matrices utilizan indización <dfn>basada en cero</dfn> , por lo que el primer elemento de una matriz es el elemento <code>0</code> . <strong>Ejemplo</strong> <blockquote> var array = [50,60,70]; <br> array [0]; // es igual a 50 <br> var data = array [1]; // es igual a 60 </blockquote> <strong>Nota</strong> <br> No debe haber espacios entre el nombre de la matriz y los corchetes, como el <code>array [0]</code> . Aunque JavaScript puede procesarlo correctamente, la utilización de los espacios entre el nombre y los corechetes puede confundir a otros programadores que lean su código. </section>

## Instructions
<section id="instructions"> Cree una variable llamada <code>myData</code> y <code>myArray</code> para que sea igual al primer valor de <code>myArray</code> usando notación de corchetes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>myData</code> debe ser igual al primer valor de <code>myArray</code> .
    testString: 'assert((function(){if(typeof myArray !== "undefined" && typeof myData !== "undefined" && myArray[0] === myData){return true;}else{return false;}})(), "The variable <code>myData</code> should equal the first value of <code>myArray</code>.");'
  - text: Se debe acceder a los datos de la variable <code>myArray</code> usando notación de corchetes.
    testString: 'assert((function(){if(code.match(/\s*=\s*myArray\[0\]/g)){return true;}else{return false;}})(), "The data in variable <code>myArray</code> should be accessed using bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.

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
