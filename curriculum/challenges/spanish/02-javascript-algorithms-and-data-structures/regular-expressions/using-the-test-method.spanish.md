---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
videoUrl: ''
localeTitle: Usando el Método de Prueba
---

## Description
<section id="description"> Las expresiones regulares se usan en lenguajes de programación para unir partes de cadenas. Creas patrones para ayudarte a hacer ese emparejamiento. Si desea buscar la palabra <code>&quot;the&quot;</code> en la cadena <code>&quot;The dog chased the cat&quot;</code> , puede usar la siguiente expresión regular: <code>/the/</code> . Observe que las comillas no son necesarias dentro de la expresión regular. JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es mediante el método <code>.test()</code> . El método <code>.test()</code> toma la expresión regular, la aplica a una cadena (que se coloca entre paréntesis) y devuelve <code>true</code> o <code>false</code> si su patrón encuentra algo o no. <blockquote> Deje testStr = &quot;freeCodeCamp&quot;; <br> Deje testRegex = / Code /; <br> testRegex.test (testStr); <br> // Devuelve true </blockquote></section>

## Instructions
<section id="instructions"> Aplique el regex <code>myRegex</code> en la cadena <code>myString</code> usando el método <code>.test()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debe usar <code>.test()</code> para probar la expresión regular.
    testString: 'assert(code.match(/myRegex.test\(\s*myString\s*\)/), "You should use <code>.test()</code> to test the regex.");'
  - text: Su resultado debe devolver <code>true</code> .
    testString: 'assert(result === true, "Your result should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
