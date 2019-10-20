---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
videoUrl: ''
localeTitle: Combinar Padrões de Cordas Iniciais
---

## Description
<section id="description"> Desafios anteriores mostraram que expressões regulares podem ser usadas para procurar um número de correspondências. Eles também são usados ​​para procurar padrões em posições específicas em strings. Em um desafio anterior, você usou o caractere <code>caret</code> ( <code>^</code> ) dentro de um <code>character set</code> para criar um <code>negated character set</code> no formato <code>[^thingsThatWillNotBeMatched]</code> . Fora de um <code>character set</code> , o <code>caret</code> é usado para procurar padrões no início das seqüências de caracteres. <blockquote> deixe firstString = &quot;Ricky é o primeiro e pode ser encontrado&quot;; <br> deixe firstRegex = / ^ Ricky /; <br> firstRegex.test (firstString); <br> // Retorna true <br> vamos notFirst = &quot;Você não pode encontrar Ricky agora.&quot;; <br> firstRegex.test (notFirst); <br> // Retorna falso </blockquote></section>

## Instructions
<section id="instructions"> Use o caractere de <code>caret</code> em um regex para localizar <code>&quot;Cal&quot;</code> apenas no início da string <code>rickyAndCal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve procurar por <code>&quot;Cal&quot;</code> com uma letra maiúscula.
    testString: 'assert(calRegex.source == "^Cal", "Your regex should search for <code>"Cal"</code> with a capital letter.");'
  - text: Seu regex não deve usar sinalizadores.
    testString: 'assert(calRegex.flags == "", "Your regex should not use any flags.");'
  - text: Seu regex deve corresponder a <code>&quot;Cal&quot;</code> no início da string.
    testString: 'assert(calRegex.test("Cal and Ricky both like racing."), "Your regex should match <code>"Cal"</code> at the beginning of the string.");'
  - text: Seu regex não deve corresponder a <code>&quot;Cal&quot;</code> no meio de uma string.
    testString: 'assert(!calRegex.test("Ricky and Cal both like racing."), "Your regex should not match <code>"Cal"</code> in the middle of a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
