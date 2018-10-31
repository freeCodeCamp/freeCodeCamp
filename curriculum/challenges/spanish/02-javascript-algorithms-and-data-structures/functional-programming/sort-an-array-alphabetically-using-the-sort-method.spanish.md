---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
videoUrl: ''
localeTitle: Ordena una matriz alfabéticamente usando el método de clasificación
---

## Description
<section id="description"> El método de <code>sort</code> ordena los elementos de una matriz de acuerdo con la función de devolución de llamada. Por ejemplo: <blockquote> función ascendingOrder (arr) { <br> devolver arr.sort (función (a, b) { <br> devuelve a - b; <br> }); <br> } <br> orden ascendente ([1, 5, 2, 3, 4]); <br> // Devoluciones [1, 2, 3, 4, 5] <br><br> funcion reverseAlpha (arr) { <br> devolver arr.sort (función (a, b) { <br> devuelve a &lt;b; <br> }); <br> } <br> reverseAlpha ([&#39;l&#39;, &#39;h&#39;, &#39;z&#39;, &#39;b&#39;, &#39;s&#39;]); <br> // Devuelve [&#39;z&#39;, &#39;s&#39;, &#39;l&#39;, &#39;h&#39;, &#39;b&#39;] </blockquote> Nota: se recomienda proporcionar una función de devolución de llamada para especificar cómo ordenar los elementos de la matriz. El método de clasificación predeterminado de JavaScript es por valor de punto Unicode de cadena, que puede devolver resultados inesperados. </section>

## Instructions
<section id="instructions"> Utilice el método de <code>sort</code> en la función <code>alphabeticalOrder</code> para ordenar los elementos de <code>arr</code> en orden alfabético. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>sort</code> .
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;d&quot;, &quot;c&quot;, &quot;a&quot;, &quot;z&quot;, &quot;g&quot;])</code> debe devolver <code>[&quot;a&quot;, &quot;a&quot;, &quot;c&quot;, &quot;d&quot;, &quot;g&quot;, &quot;z&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]), "<code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;x&quot;, &quot;h&quot;, &quot;a&quot;, &quot;m&quot;, &quot;n&quot;, &quot;m&quot;])</code> debe devolver <code>[&quot;a&quot;, &quot;h&quot;, &quot;m&quot;, &quot;m&quot;, &quot;n&quot;, &quot;x&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]), "<code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;x&quot;, &quot;t&quot;])</code> debe devolver <code>[&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;t&quot;, &quot;x&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]), "<code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code> should return <code>["a", "a", "a", "a", "t", "x"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line


  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
