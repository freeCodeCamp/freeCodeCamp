---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
localeTitle: Implementar mapa en un prototipo
challengeType: 1
---

## Description
<section id='description'> 
Como ha visto al aplicar <code>Array.prototype.map()</code> , o simplemente <code>map()</code> anteriormente, el método de <code>map</code> devuelve una matriz de la misma longitud que la que se solicitó. Tampoco altera la matriz original, siempre que su función de devolución de llamada no lo haga. 
En otras palabras, el <code>map</code> es una función pura, y su salida depende únicamente de sus entradas. Además, toma otra función como argumento. 
Nos enseñaría mucho sobre el <code>map</code> para intentar implementar una versión que se comporte exactamente como <code>Array.prototype.map()</code> con un bucle <code>for</code> o <code>Array.prototype.forEach()</code> . 
Nota: Una función pura puede alterar las variables locales definidas dentro de su alcance, aunque es preferible evitar eso también. 
</section>

## Instructions
<section id='instructions'> 
Escriba su propio <code>Array.prototype.myMap()</code> , que debería comportarse exactamente como <code>Array.prototype.map()</code> . Puedes usar un bucle <code>for</code> o el método <code>forEach</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>new_s</code> debe ser igual a <code>[46, 130, 196, 10]</code> .&#39;
    testString: 'assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]), "<code>new_s</code> should equal <code>[46, 130, 196, 10]</code>.");'
  - text: Su código no debe utilizar el método de <code>map</code> .
    testString: 'assert(!code.match(/\.map/g), "Your code should not use the <code>map</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
