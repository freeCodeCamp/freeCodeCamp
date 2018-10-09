---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
localeTitle: Modificar datos de matriz con índices
challengeType: 1
---

## Description
<section id='description'>
A diferencia de las cadenas, las entradas de matrices son <dfn>mutables</dfn> y se pueden cambiar libremente.
<strong>Ejemplo</strong>
<blockquote>var ourArray = [50,40,30];<br>ourArray[0] = 15; // equals [15,40,30]</blockquote>
<strong>Nota</strong> <br> No debe haber espacios entre el nombre de la matriz y los corchetes, como la <code>array [0]</code> . Aunque JavaScript puede procesar esto correctamente, esto puede confundir a otros programadores que leen su código.
</section>

## Instructions
<section id='instructions'>
Modifique los datos almacenados en el índice <code>0</code> de <code>myArray</code> a un valor de <code>45</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>myArray</code> ahora debería ser [45,64,99].'
    testString: 'assert((function(){if(typeof myArray != "undefined" && myArray[0] == 45 && myArray[1] == 64 && myArray[2] == 99){return true;}else{return false;}})(), "<code>myArray</code> should now be [45,64,99].");'
  - text: Debe utilizar el índice correcto para modificar el valor en <code>myArray</code> .
    testString: 'assert((function(){if(code.match(/myArray\[0\]\s*=\s*/g)){return true;}else{return false;}})(), "You should be using correct index to modify the value in <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

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
var myArray = [18,64,99];
myArray[0] = 45;
```

</section>
