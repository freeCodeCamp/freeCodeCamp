---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
localeTitle: Use el método para verificar que cualquier elemento de una matriz cumpla con los criterios
challengeType: 1
---

## Description
<section id='description'> 
El <code>some</code> método funciona con matrices para comprobar si <em>cualquier</em> elemento pasa una prueba particular. Devuelve un valor booleano: <code>true</code> si alguno de los valores cumple los criterios, <code>false</code> si no. 
Por ejemplo, el siguiente código verificará si algún elemento de la matriz de <code>numbers</code> es menor que 10: 
<blockquote>var numbers = [10, 50, 8, 220, 110, 11];<br>numbers.some(function(currentValue) {<br>&nbsp;&nbsp;return currentValue < 10;<br>});<br>// Returns true</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Use <code>some</code> método dentro de la función <code>checkPositive</code> para verificar si algún elemento en <code>arr</code> es positivo. La función debe devolver un valor booleano. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar <code>some</code> método.
    testString: 'assert(code.match(/\.some/g), "Your code should use the <code>some</code> method.");'
  - text: &#39; <code>checkPositive([1, 2, 3, -4, 5])</code> debe devolver <code>true</code> .&#39;
    testString: 'assert(checkPositive([1, 2, 3, -4, 5]), "<code>checkPositive([1, 2, 3, -4, 5])</code> should return <code>true</code>.");'
  - text: &#39; <code>checkPositive([1, 2, 3, 4, 5])</code> debe devolver <code>true</code> .&#39;
    testString: 'assert(checkPositive([1, 2, 3, 4, 5]), "<code>checkPositive([1, 2, 3, 4, 5])</code> should return <code>true</code>.");'
  - text: &#39; <code>checkPositive([-1, -2, -3, -4, -5])</code> debe devolver <code>false</code> .&#39;
    testString: 'assert(!checkPositive([-1, -2, -3, -4, -5]), "<code>checkPositive([-1, -2, -3, -4, -5])</code> should return <code>false</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkPositive(arr) {
  // Add your code below this line


  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
