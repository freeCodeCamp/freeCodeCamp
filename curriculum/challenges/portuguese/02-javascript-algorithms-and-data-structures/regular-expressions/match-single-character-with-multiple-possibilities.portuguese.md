---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
videoUrl: ''
localeTitle: Corresponder personagem único com várias possibilidades
---

## Description
<section id="description"> Você aprendeu como combinar padrões literais ( <code>/literal/</code> ) e caractere curinga ( <code>/./</code> ). Esses são os extremos de expressões regulares, onde se encontram correspondências exatas e o outro combina tudo. Existem opções que são um equilíbrio entre os dois extremos. Você pode procurar por um padrão literal com alguma flexibilidade com <code>character classes</code> . As classes de caracteres permitem que você defina um grupo de caracteres que deseja corresponder colocando-os dentro de colchetes ( <code>[</code> e <code>]</code> ). Por exemplo, você quer combinar <code>&quot;bag&quot;</code> , <code>&quot;big&quot;</code> e <code>&quot;bug&quot;</code> mas não <code>&quot;bog&quot;</code> . Você pode criar o regex <code>/b[aiu]g/</code> para fazer isso. O <code>[aiu]</code> é a classe de caracteres que corresponde apenas aos caracteres <code>&quot;a&quot;</code> , <code>&quot;i&quot;</code> ou <code>&quot;u&quot;</code> . <blockquote> deixe bigStr = &quot;grande&quot;; <br> vamos bagStr = &quot;bag&quot;; <br> deixe bugStr = &quot;bug&quot;; <br> deixe bogStr = &quot;bog&quot;; <br> deixe bgRegex = / b [aiu] g /; <br> bigStr.match (bgRegex); // Retorna [&quot;grande&quot;] <br> bagStr.match (bgRegex); // Retorna [&quot;bag&quot;] <br> bugStr.match (bgRegex); // Retorna [&quot;bug&quot;] <br> bogStr.match (bgRegex); // Retorna nulo </blockquote></section>

## Instructions
<section id="instructions"> Use uma classe de caractere com vogais ( <code>a</code> , <code>e</code> , <code>i</code> , <code>o</code> , <code>u</code> ) em seu regex <code>vowelRegex</code> para encontrar todas as vogais na string <code>quoteSample</code> . <strong>Nota</strong> <br> Certifique-se de combinar as vogais maiúsculas e minúsculas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve encontrar todas as 25 vogais.
    testString: 'assert(result.length == 25, "You should find all 25 vowels.");'
  - text: Seu regex <code>vowelRegex</code> deve usar uma classe de caracteres.
    testString: 'assert(/\[.*\]/.test(vowelRegex.source), "Your regex <code>vowelRegex</code> should use a character class.");'
  - text: Seu regex <code>vowelRegex</code> deve usar o sinalizador global.
    testString: 'assert(vowelRegex.flags.match(/g/).length == 1, "Your regex <code>vowelRegex</code> should use the global flag.");'
  - text: Seu regex <code>vowelRegex</code> deve usar o sinalizador insensível a maiúsculas e minúsculas.
    testString: 'assert(vowelRegex.flags.match(/i/).length == 1, "Your regex <code>vowelRegex</code> should use the case insensitive flag.");'
  - text: Seu regex não deve corresponder a nenhuma consoante.
    testString: 'assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()), "Your regex should not match any consonants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
