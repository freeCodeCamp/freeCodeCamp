---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1
videoUrl: ''
localeTitle: Anidando para bucles
---

## Description
<section id="description"> Si tiene una matriz multidimensional, puede usar la misma lógica que el punto de ruta anterior para recorrer tanto la matriz como cualquier subarreglo. Aquí hay un ejemplo: <blockquote> var arr = [ <br> [1,2], [3,4], [5,6] <br> ]; <br> para (var i = 0; i &lt;arr.length; i ++) { <br> para (var j = 0; j &lt;arr [i] .length; j ++) { <br> console.log (arr [i] [j]); <br> } <br> } </blockquote> Esto genera cada subelemento en <code>arr</code> uno a la vez. Tenga en cuenta que para el bucle interno, estamos comprobando la <code>.length</code> de <code>arr[i]</code> , ya que <code>arr[i]</code> es en sí misma una matriz. </section>

## Instructions
<section id="instructions"> Modifique la función <code>multiplyAll</code> para que multiplique la variable del <code>product</code> por cada número en los subarreglos de <code>arr</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>multiplyAll([[1],[2],[3]])</code> debe devolver <code>6</code>'
    testString: 'assert(multiplyAll([[1],[2],[3]]) === 6, "<code>multiplyAll([[1],[2],[3]])</code> should return <code>6</code>");'
  - text: '<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> debe devolver <code>5040</code>'
    testString: 'assert(multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040, "<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> should return <code>5040</code>");'
  - text: '<code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> debe devolver <code>54</code>'
    testString: 'assert(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) === 54, "<code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> should return <code>54</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
