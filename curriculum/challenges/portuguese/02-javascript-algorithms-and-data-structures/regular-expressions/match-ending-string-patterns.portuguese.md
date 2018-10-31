---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
videoUrl: ''
localeTitle: Padrões de Sequência de Correspondência Final
---

## Description
<section id="description"> No último desafio, você aprendeu a usar o caractere de <code>caret</code> para procurar padrões no início das seqüências de caracteres. Há também uma maneira de procurar padrões no final das strings. Você pode pesquisar o final das strings usando o caractere de <code>dollar sign</code> <code>$</code> no final da regex. <blockquote> deixe theEnding = &quot;Esta é uma história sem fim&quot;; <br> deixe storyRegex = / story $ /; <br> storyRegex.test (theEnding); <br> // Retorna true <br> deixe noEnding = &quot;Às vezes uma história terá que terminar&quot;; <br> storyRegex.test (noEnding); <br> // Retorna falso <br></blockquote></section>

## Instructions
<section id="instructions"> Use o caractere de âncora ( <code>$</code> ) para combinar com a string <code>&quot;caboose&quot;</code> no final do <code>caboose</code> string. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve procurar por <code>&quot;caboose&quot;</code> com o cifrão <code>$</code> anchor no seu regex.
    testString: 'assert(lastRegex.source == "caboose$", "You should search for <code>"caboose"</code> with the dollar sign <code>$</code> anchor in your regex.");'
  - text: Seu regex não deve usar sinalizadores.
    testString: 'assert(lastRegex.flags == "", "Your regex should not use any flags.");'
  - text: Você deve combinar <code>&quot;caboose&quot;</code> no final da corda <code>&quot;The last car on a train is the caboose&quot;</code>
    testString: 'assert(lastRegex.test("The last car on a train is the caboose"), "You should match <code>"caboose"</code> at the end of the string <code>"The last car on a train is the caboose"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
