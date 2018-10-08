---
id: 587d8254367417b2b2512c71
title: Remove items from a set in ES6
localeTitle: Eliminar elementos de un conjunto en ES6
challengeType: 1
---

## Description
<section id='description'> 
Practiquemos la eliminación de elementos de un Conjunto ES6 utilizando el método de <code>delete</code> . 
Primero, cree un conjunto ES6 
<code>var set = new Set([1,2,3]);</code> 
Ahora elimine un elemento de su Set con el método de <code>delete</code> . 
<blockquote>set.delete(1);<br>console.log([...set]) // should return [ 2, 3 ]<blockquote> 
</section>

## Instructions
<section id='instructions'> 
Ahora, cree un conjunto con los enteros 1, 2, 3, 4 y 5. 
Elimine los valores 2 y 5, y luego devuelva el conjunto. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Tu Set debe contener los valores 1, 3 y 4'
    testString: 'assert(function(){var test = checkSet(); return test.has(1) && test.has(3) && test.has(4) && test.size === 3}, "Your Set should contain the values 1, 3, & 4");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(){
   var set = //Create a set with values 1, 2, 3, 4, & 5
   //Remove the value 2
   //Remove the value 5
   //Return the set
   return set;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```

</section>
