---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: Correspondência de letras do alfabeto
---

## Description
<section id="description"> Você viu como é possível usar <code>character sets</code> para especificar um grupo de caracteres a serem correspondidos, mas isso é muita digitação quando você precisa corresponder a um grande intervalo de caracteres (por exemplo, todas as letras do alfabeto). Felizmente, há um recurso embutido que torna isso simples e curto. Dentro de um <code>character set</code> , você pode definir um intervalo de caracteres para corresponder usando um caractere de <code>hyphen</code> : <code>-</code> . Por exemplo, para corresponder letras minúsculas de <code>a</code> até <code>e</code> você usaria <code>[ae]</code> . <blockquote> deixe catStr = &quot;cat&quot;; <br> deixe batStr = &quot;bat&quot;; <br> let matStr = &quot;mat&quot;; <br> deixe bgRegex = / [ae] em /; <br> catStr.match (bgRegex); // Retorna [&quot;gato&quot;] <br> batStr.match (bgRegex); // Retorna [&quot;bat&quot;] <br> matStr.match (bgRegex); // Retorna nulo </blockquote></section>

## Instructions
<section id="instructions"> Corresponder todas as letras da string <code>quoteSample</code> . <strong>Nota</strong> <br> Certifique-se de combinar as letras <strong>maiúsculas</strong> e minúsculas <strong><strong>.</strong></strong> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>alphabetRegex</code> deve corresponder a 35 itens.
    testString: 'assert(result.length == 35, "Your regex <code>alphabetRegex</code> should match 35 items.");'
  - text: Seu regex <code>alphabetRegex</code> deve usar o sinalizador global.
    testString: 'assert(alphabetRegex.flags.match(/g/).length == 1, "Your regex <code>alphabetRegex</code> should use the global flag.");'
  - text: Seu regex <code>alphabetRegex</code> deve usar o sinalizador insensível a maiúsculas e minúsculas.
    testString: 'assert(alphabetRegex.flags.match(/i/).length == 1, "Your regex <code>alphabetRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
