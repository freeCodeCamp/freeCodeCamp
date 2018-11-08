---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
videoUrl: ''
localeTitle: Crear y agregar a conjuntos en ES6
---

## Description
<section id="description"> Ahora que has trabajado con ES5, vas a realizar algo similar en ES6. Esto será considerablemente más fácil. ES6 contiene una estructura de datos incorporada <code>Set</code> muchas de las operaciones que ha escrito a mano se incluyen ahora para usted. Veamos: Para crear un nuevo conjunto vacío: <code>var set = new Set();</code> Puede crear un conjunto con un valor: <code>var set = new Set(1);</code> Puede crear un conjunto con una matriz: <code>var set = new Set([1, 2, 3]);</code> Una vez que haya creado un conjunto, puede agregar los valores que desee utilizando el método de <code>add</code> : <blockquote> var set = new Set ([1, 2, 3]); <br> set.add ([4, 5, 6]); </blockquote> Como recordatorio, un conjunto es una estructura de datos que no puede contener valores duplicados: <blockquote> var set = new Set ([1, 2, 3, 1, 2, 3]); <br> // set contiene solo [1, 2, 3] </blockquote></section>

## Instructions
<section id="instructions"> Para este ejercicio, devuelve un conjunto con los siguientes valores: <code>1, 2, 3, &#39;Taco&#39;, &#39;Cat&#39;, &#39;Awesome&#39;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su <code>Set</code> solo debe contener los valores <code>1, 2, 3, Taco, Cat, Awesome</code> .'
    testString: 'assert((function(){var test = checkSet(); return (test.size == 6) && test.has(1) && test.has(2) && test.has(3) && test.has("Taco") && test.has("Cat") && test.has("Awesome");})(), "Your <code>Set</code> should only contain the values <code>1, 2, 3, Taco, Cat, Awesome</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line

  // change code above this line
  console.log(set);
  return set;
}

checkSet();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
