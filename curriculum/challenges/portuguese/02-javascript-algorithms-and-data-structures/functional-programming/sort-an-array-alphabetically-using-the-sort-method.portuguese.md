---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
videoUrl: ''
localeTitle: Ordenar uma matriz em ordem alfabética usando o método de classificação
---

## Description
<section id="description"> O método de <code>sort</code> classifica os elementos de uma matriz de acordo com a função de retorno de chamada. Por exemplo: <blockquote> function ascendingOrder (arr) { <br> return arr.sort (função (a, b) { <br> return a - b; <br> }); <br> } <br> ascendingOrder ([1, 5, 2, 3, 4]); <br> // Retorna [1, 2, 3, 4, 5] <br><br> função reverseAlpha (arr) { <br> return arr.sort (função (a, b) { <br> return a &lt;b; <br> }); <br> } <br> reverseAlpha ([&#39;l&#39;, &#39;h&#39;, &#39;z&#39;, &#39;b&#39;, &#39;s&#39;]); <br> // Retorna [&#39;z&#39;, &#39;s&#39;, &#39;l&#39;, &#39;h&#39;, &#39;b&#39;] </blockquote> Nota: É recomendável fornecer uma função de retorno de chamada para especificar como classificar os itens da matriz. O método de classificação padrão do JavaScript é pelo valor do ponto Unicode da sequência, que pode retornar resultados inesperados. </section>

## Instructions
<section id="instructions"> Use o método <code>sort</code> na função <code>alphabeticalOrder</code> para classificar os elementos de <code>arr</code> em ordem alfabética. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método de <code>sort</code> .
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;d&quot;, &quot;c&quot;, &quot;a&quot;, &quot;z&quot;, &quot;g&quot;])</code> deve retornar <code>[&quot;a&quot;, &quot;a&quot;, &quot;c&quot;, &quot;d&quot;, &quot;g&quot;, &quot;z&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]), "<code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;x&quot;, &quot;h&quot;, &quot;a&quot;, &quot;m&quot;, &quot;n&quot;, &quot;m&quot;])</code> deve retornar <code>[&quot;a&quot;, &quot;h&quot;, &quot;m&quot;, &quot;m&quot;, &quot;n&quot;, &quot;x&quot;]</code> .'
    testString: 'assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]), "<code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.");'
  - text: '<code>alphabeticalOrder([&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;x&quot;, &quot;t&quot;])</code> deve retornar <code>[&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;t&quot;, &quot;x&quot;]</code> .'
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
