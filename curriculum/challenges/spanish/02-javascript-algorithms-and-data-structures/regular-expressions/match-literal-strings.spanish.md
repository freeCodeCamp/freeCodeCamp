---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
videoUrl: ''
localeTitle: Unir cuerdas literales
---

## Description
<section id="description"> En el último desafío, buscó la palabra <code>&quot;Hello&quot;</code> usando la expresión regular <code>/Hello/</code> . Esa expresión regular buscó una coincidencia literal de la cadena <code>&quot;Hello&quot;</code> . Aquí hay otro ejemplo que busca una coincidencia literal de la cadena <code>&quot;Kevin&quot;</code> : <blockquote> let testStr = &quot;Hola, mi nombre es Kevin.&quot;; <br> vamos a testRegex = / Kevin /; <br> testRegex.test (testStr); <br> // Devuelve true </blockquote> Cualquier otra forma de <code>&quot;Kevin&quot;</code> no coincidirá. Por ejemplo, la expresión regular <code>/Kevin/</code> no coincidirá con <code>&quot;kevin&quot;</code> o <code>&quot;KEVIN&quot;</code> . <blockquote> dejar wrongRegex = / kevin /; <br> wrongRegex.test (testStr); <br> // Devuelve falso </blockquote> Un desafío futuro mostrará cómo emparejar esas otras formas también. </section>

## Instructions
<section id="instructions"> Complete la expresión regular <code>waldoRegex</code> para encontrar <code>&quot;Waldo&quot;</code> en la cadena <code>waldoIsHiding</code> con una coincidencia literal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu regex <code>waldoRegex</code> debería encontrar <code>&quot;Waldo&quot;</code>
    testString: 'assert(waldoRegex.test(waldoIsHiding), "Your regex <code>waldoRegex</code> should find <code>"Waldo"</code>");'
  - text: Su regex <code>waldoRegex</code> no debe buscar nada más.
    testString: 'assert(!waldoRegex.test("Somewhere is hiding in this text."), "Your regex <code>waldoRegex</code> should not search for anything else.");'
  - text: Debe realizar una coincidencia de cadena literal con su expresión regular.
    testString: 'assert(!/\/.*\/i/.test(code), "You should perform a literal string match with your regex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
