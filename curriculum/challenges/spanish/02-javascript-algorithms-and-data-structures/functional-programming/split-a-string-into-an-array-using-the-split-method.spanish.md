---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
videoUrl: ''
localeTitle: Dividir una cadena en una matriz usando el método de división
---

## Description
<section id="description"> El método de <code>split</code> divide una cadena en una matriz de cadenas. Toma un argumento para el delimitador, que puede ser un carácter que se usa para separar la cadena o una expresión regular. Por ejemplo, si el delimitador es un espacio, obtiene una matriz de palabras, y si el delimitador es una cadena vacía, obtiene una matriz de cada carácter en la cadena. Aquí hay dos ejemplos que dividen una cadena por espacios, luego otro por dígitos usando una expresión regular: <blockquote> var str = &quot;Hola Mundo&quot;; <br> var bySpace = str.split (&quot;&quot;); <br> // Establece bySpace en [&quot;Hola&quot;, &quot;Mundo&quot;] <br><br> var otherString = &quot;How9are7you2today&quot;; <br> var byDigits = otherString.split (/ \ d /); <br> // Establece byDigits en [&quot;How&quot;, &quot;are&quot;, &quot;you&quot;, &quot;today&quot;] </blockquote> Dado que las cadenas son inmutables, el método de <code>split</code> facilita el trabajo con ellas. </section>

## Instructions
<section id="instructions"> Utilice la <code>split</code> método dentro de la <code>splitify</code> función de dividir <code>str</code> en una matriz de palabras. La función debe devolver la matriz. Tenga en cuenta que las palabras no siempre están separadas por espacios y que la matriz no debe contener puntuación. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>split</code> .
    testString: 'assert(code.match(/\.split/g), "Your code should use the <code>split</code> method.");'
  - text: '<code>splitify(&quot;Hello World,I-am code&quot;)</code> debe devolver <code>[&quot;Hello&quot;, &quot;World&quot;, &quot;I&quot;, &quot;am&quot;, &quot;code&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]), "<code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.");'
  - text: '<code>splitify(&quot;Earth-is-our home&quot;)</code> debe devolver <code>[&quot;Earth&quot;, &quot;is&quot;, &quot;our&quot;, &quot;home&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]), "<code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.");'
  - text: '<code>splitify(&quot;This.is.a-sentence&quot;)</code> debe devolver <code>[&quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;sentence&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]), "<code>splitify("This.is.a-sentence")</code> should return <code>["This", "is", "a", "sentence"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function splitify(str) {
  // Add your code below this line


  // Add your code above this line
}
splitify("Hello World,I-am code");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
