---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
videoUrl: ''
localeTitle: Use Spread and Notes para la integración de ES5 Set ()
---

## Description
<section id="description"> ¿Recuerdas el operador de propagación ES6 <code>...</code> ? <code>...</code> puede tomar objetos iterables en ES6 y convertirlos en matrices. Vamos a crear un Set, y echa un vistazo a la función de propagación. <blockquote> var set = new Set ([1,2,3]); <br> var setToArr = [... set] <br> console.log (setToArr) // devuelve [1, 2, 3] </blockquote></section>

## Instructions
<section id="instructions"> En este ejercicio pasaremos un objeto establecido a la función <code>checkSet</code> . Debe devolver una matriz que contenga los valores del conjunto. Ahora que aprendió a usar el objeto <code>Set()</code> ES6, ¡buen trabajo! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ¡Tu Set fue devuelto correctamente!
    testString: 'assert((function(){var test = checkSet(new Set([1,2,3,4,5,6,7])); test === [ 1, 2, 3, 4, 5, 6, 7 ]})(), "Your Set was returned correctly!");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(set){
   // change code below this line

   // change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
