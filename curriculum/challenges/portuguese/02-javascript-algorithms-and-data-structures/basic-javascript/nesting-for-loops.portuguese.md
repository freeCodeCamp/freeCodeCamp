---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1
videoUrl: ''
localeTitle: Aninhando For Loops
---

## Description
<section id="description"> Se você tiver um array multidimensional, você pode usar a mesma lógica do waypoint anterior para percorrer tanto o array quanto qualquer sub-array. Aqui está um exemplo: <blockquote> var arr = [ <br> [1,2], [3,4], [5,6] <br> ]; <br> para (var i = 0; i &lt;arr.length; i ++) { <br> para (var j = 0; j &lt;arr [i]. comprimento; j ++) { <br> console.log (arr [i] [j]); <br> } <br> } </blockquote> Isto produz cada sub-elemento em <code>arr</code> um de cada vez. Note que para o loop interno, estamos verificando o <code>.length</code> de <code>arr[i]</code> , já que <code>arr[i]</code> é ele próprio um array. </section>

## Instructions
<section id="instructions"> Modifique a função <code>multiplyAll</code> para que multiplique a variável do <code>product</code> por cada número nos sub-arrays do <code>arr</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>multiplyAll([[1],[2],[3]])</code> deve retornar <code>6</code>'
    testString: 'assert(multiplyAll([[1],[2],[3]]) === 6, "<code>multiplyAll([[1],[2],[3]])</code> should return <code>6</code>");'
  - text: '<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> deve retornar <code>5040</code>'
    testString: 'assert(multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040, "<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> should return <code>5040</code>");'
  - text: '<code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> deve retornar <code>54</code>'
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
