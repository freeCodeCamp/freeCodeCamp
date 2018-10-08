---
id: 587d7db4367417b2b2512b92
title: Extract Matches
localeTitle: Extraer fósforos
challengeType: 1
---

## Description
<section id='description'> 
Hasta ahora, solo ha estado comprobando si existe un patrón o no dentro de una cadena. También puede extraer las coincidencias reales que encontró con el método <code>.match()</code> . 
Para usar el método <code>.match()</code> , aplique el método en una cadena y pase la expresión regular dentro de los paréntesis. Aquí hay un ejemplo: 
<blockquote>"Hello, World!".match(/Hello/);<br>// Returns ["Hello"]<br>let ourStr = "Regular expressions";<br>let ourRegex = /expressions/;<br>ourStr.match(ourRegex);<br>// Returns ["expressions"]</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Aplique el método <code>.match()</code> para extraer la <code>coding</code> palabras. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>result</code> debe tener la palabra <code>coding</code>
    testString: 'assert(result.join() === "coding", "The <code>result</code> should have the word <code>coding</code>");'
  - text: Tu regex <code>codingRegex</code> debería buscar la <code>coding</code>
    testString: 'assert(codingRegex.source === "coding", "Your regex <code>codingRegex</code> should search for <code>coding</code>");'
  - text: Deberías usar el método <code>.match()</code> .
    testString: 'assert(code.match(/\.match\(.*\)/), "You should use the <code>.match()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
