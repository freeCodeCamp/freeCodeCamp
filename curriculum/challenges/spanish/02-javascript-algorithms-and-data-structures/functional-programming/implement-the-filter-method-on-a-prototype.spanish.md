---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
videoUrl: ''
localeTitle: Implementar el método de filtro en un prototipo
---

## Description
<section id="description"> Nos enseñaría mucho sobre el método de <code>filter</code> si intentáramos implementar una versión que se comporte exactamente como <code>Array.prototype.filter()</code> . Puede usar un bucle <code>for</code> o <code>Array.prototype.forEach()</code> . Nota: una función pura puede alterar las variables locales definidas dentro de su alcance, aunque es preferible evitar eso también. </section>

## Instructions
<section id="instructions"> Escriba su propio <code>Array.prototype.myFilter()</code> , que debe comportarse exactamente como <code>Array.prototype.filter()</code> . Puede usar un bucle <code>for</code> o el método <code>Array.prototype.forEach()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>new_s</code> debe ser igual a <code>[23, 65, 5]</code> .'
    testString: 'assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]), "<code>new_s</code> should equal <code>[23, 65, 5]</code>.");'
  - text: Su código no debe utilizar el método de <code>filter</code> .
    testString: 'assert(!code.match(/\.filter/g), "Your code should not use the <code>filter</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
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
