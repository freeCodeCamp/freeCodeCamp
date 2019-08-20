---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
videoUrl: ''
localeTitle: Utilice la asignación de destrucción para pasar un objeto como parámetros de una función
---

## Description
<section id="description"> En algunos casos, puede destruir el objeto en un argumento de función. Considere el siguiente código: <blockquote> const profileUpdate = (profileData) =&gt; { <br> const {nombre, edad, nacionalidad, ubicación} = profileData; <br> // haz algo con estas variables <br> } </blockquote> Esto destruye efectivamente el objeto enviado a la función. Esto también se puede hacer en el lugar: <blockquote> const profileUpdate = ({nombre, edad, nacionalidad, ubicación}) =&gt; { <br> / * hacer algo con estos campos * / <br> } </blockquote> Esto elimina algunas líneas adicionales y hace que nuestro código se vea limpio. Esto tiene la ventaja adicional de no tener que manipular un objeto completo en una función — solo los campos que son necesarios se copian dentro de la función. </section>

## Instructions
<section id="instructions"> Use la asignación de desestructuración dentro del argumento de la función <code>half</code> para enviar solo <code>max</code> y <code>min</code> dentro de la función. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>stats</code> deben ser un <code>object</code> .
    testString: 'assert(typeof stats === "object", "<code>stats</code> should be an <code>object</code>.");'
  - text: <code>half(stats)</code> debe ser <code>28.015</code>
    testString: 'assert(half(stats) === 28.015, "<code>half(stats)</code> should be <code>28.015</code>");'
  - text: Se utilizó la destrucción.
    testString: 'getUserInput => assert(getUserInput("index").match(/\(\s*\{\s*\w+\s*,\s*\w+\s*\}\s*\)/g), "Destructuring was used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half(stats) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
