---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
videoUrl: ''
localeTitle: Encontre mais do que o primeiro jogo
---

## Description
<section id="description"> Até agora, você só conseguiu extrair ou pesquisar um padrão uma vez. <blockquote> deixe testStr = &quot;Repetir, Repetir, Repetir&quot;; <br> vamos ourRegex = / Repeat /; <br> testStr.match (ourRegex); <br> // Retorna [&quot;Repetir&quot;] </blockquote> Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o sinalizador <code>g</code> . <blockquote> vamos repeatRegex = / Repeat / g; <br> testStr.match (repeatRegex); <br> // Retorna [&quot;Repetir&quot;, &quot;Repetir&quot;, &quot;Repetir&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Usando o regex <code>starRegex</code> , encontre e extraia ambas as palavras <code>&quot;Twinkle&quot;</code> da string <code>twinkleStar</code> . <strong>Nota</strong> <br> Você pode ter vários sinalizadores no seu regex como <code>/search/gi</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>starRegex</code> deve usar a bandeira global <code>g</code>
    testString: 'assert(starRegex.flags.match(/g/).length == 1, "Your regex <code>starRegex</code> should use the global flag <code>g</code>");'
  - text: Seu regex <code>starRegex</code> deve usar a flag insensível a maiúsculas e minúsculas <code>i</code>
    testString: 'assert(starRegex.flags.match(/i/).length == 1, "Your regex <code>starRegex</code> should use the case insensitive flag <code>i</code>");'
  - text: Sua correspondência deve corresponder a ambas as ocorrências da palavra <code>&quot;Twinkle&quot;</code>
    testString: 'assert(result.sort().join() == twinkleStar.match(/twinkle/gi).sort().join(), "Your match should match both occurrences of the word <code>"Twinkle"</code>");'
  - text: Seu <code>result</code> partida deve ter dois elementos.
    testString: 'assert(result.length == 2, "Your match <code>result</code> should have two elements in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
