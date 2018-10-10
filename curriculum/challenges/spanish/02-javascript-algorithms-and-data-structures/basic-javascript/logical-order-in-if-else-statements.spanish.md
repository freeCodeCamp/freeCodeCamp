---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: Orden lógico en si otras declaraciones
---

## Description
<section id="description"> El orden es importante en <code>if</code> , <code>else if</code> declaraciones. La función se ejecuta de arriba a abajo, por lo que deberá tener cuidado con la afirmación que aparece primero. Tomemos estas dos funciones como ejemplo. Aquí está el primero: <blockquote> función foo (x) { <br> si (x &lt;1) { <br> devuelve &quot;Menos de uno&quot;; <br> } else if (x &lt;2) { <br> devuelve &quot;Menos de dos&quot;; <br> } else { <br> devuelve &quot;Mayor o igual a dos&quot;; <br> } <br> } </blockquote> Y el segundo simplemente cambia el orden de las declaraciones: <blockquote> barra de funciones (x) { <br> si (x &lt;2) { <br> devuelve &quot;Menos de dos&quot;; <br> } else if (x &lt;1) { <br> devuelve &quot;Menos de uno&quot;; <br> } else { <br> devuelve &quot;Mayor o igual a dos&quot;; <br> } <br> } </blockquote> Si bien estas dos funciones parecen casi idénticas, si pasamos un número a ambas obtenemos diferentes salidas. <blockquote> foo (0) // &quot;Menos de uno&quot; <br> barra (0) // &quot;Menos de dos&quot; </blockquote></section>

## Instructions
<section id="instructions"> Cambie el orden de la lógica en la función para que devuelva las declaraciones correctas en todos los casos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>orderMyLogic(4)</code> debe devolver &quot;Menos de 5&quot;
    testString: 'assert(orderMyLogic(4) === "Less than 5", "<code>orderMyLogic(4)</code> should return "Less than 5"");'
  - text: <code>orderMyLogic(6)</code> debe devolver &quot;Menos de 10&quot;
    testString: 'assert(orderMyLogic(6) === "Less than 10", "<code>orderMyLogic(6)</code> should return "Less than 10"");'
  - text: <code>orderMyLogic(11)</code> debe devolver &quot;Mayor o igual a 10&quot;
    testString: 'assert(orderMyLogic(11) === "Greater than or equal to 10", "<code>orderMyLogic(11)</code> should return "Greater than or equal to 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
