---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
localeTitle: Dividir una cadena en una matriz usando el método de división
challengeType: 1
---

## Description
<section id='description'> 
El método de <code>split</code> divide una cadena en una matriz de cadenas. Toma un argumento para el delimitador, que puede ser un carácter que se usa para separar la cadena o una expresión regular. Por ejemplo, si el delimitador es un espacio, obtiene una matriz de palabras, y si el delimitador es una cadena vacía, obtiene una matriz de cada carácter en la cadena. 
Aquí hay dos ejemplos que dividen una cadena por espacios, luego otro por dígitos usando una expresión regular: 
<blockquote>var str = "Hello World";<br>var bySpace = str.split(" ");<br>// Sets bySpace to ["Hello", "World"]<br><br>var otherString = "How9are7you2today";<br>var byDigits = otherString.split(/\d/);<br>// Sets byDigits to ["How", "are", "you", "today"]</blockquote> 
Dado que las cadenas son inmutables, el método de <code>split</code> facilita el trabajo con ellas. 
</section>

## Instructions
<section id='instructions'> 
Utilice la <code>split</code> método dentro de la <code>splitify</code> función de dividir <code>str</code> en una matriz de palabras. La función debe devolver la matriz. Tenga en cuenta que las palabras no siempre están separadas por espacios y que la matriz no debe contener puntuación. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>split</code> .
    testString: 'assert(code.match(/\.split/g), "Your code should use the <code>split</code> method.");'
  - text: &#39; <code>splitify(&quot;Hello World,I-am code&quot;)</code> debe devolver <code>[&quot;Hello&quot;, &quot;World&quot;, &quot;I&quot;, &quot;am&quot;, &quot;code&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]), "<code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.");'
  - text: &#39; <code>splitify(&quot;Earth-is-our home&quot;)</code> debería devolver <code>[&quot;Earth&quot;, &quot;is&quot;, &quot;our&quot;, &quot;home&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]), "<code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.");'
  - text: &#39; <code>splitify(&quot;This.is.a-sentence&quot;)</code> debe devolver <code>[&quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;sentence&quot;]</code> .&#39;
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
