---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
videoUrl: ''
localeTitle: Corresponder caracteres que ocorrem zero ou mais vezes
---

## Description
<section id="description"> O último desafio usou o sinal de mais <code>+</code> para procurar caracteres que ocorrem uma ou mais vezes. Há também uma opção que corresponde a caracteres que ocorrem zero ou mais vezes. O personagem para fazer isso é o <code>asterisk</code> ou <code>star</code> : <code>*</code> . <blockquote> deixe soccerWord = &quot;gooooooooal!&quot;; <br> deixe gPhrase = &quot;pressentimento&quot;; <br> deixe ophrase = &quot;sobre a lua&quot;; <br> deixe irRegex = / go * /; <br> soccerWord.match (goRegex); // Retorna [&quot;goooooooo&quot;] <br> gPhrase.match (goRegex); // Retorna [&quot;g&quot;] <br> oPhrase.match (goRegex); // Retorna nulo </blockquote></section>

## Instructions
<section id="instructions"> Crie um regex <code>chewieRegex</code> que use o caractere <code>*</code> para corresponder a todos os caracteres <code>&quot;a&quot;</code> superiores e inferiores em <code>chewieQuote</code> . Seu regex não precisa de sinalizadores e não deve corresponder a nenhuma das outras citações. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>chewieRegex</code> deve usar o <code>*</code> caracteres para corresponder zero ou mais <code>a</code> caracteres.
    testString: 'assert(/\*/.test(chewieRegex.source), "Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.");'
  - text: ''
    testString: 'assert(result[0].length === 16, "Your regex <code>chewieRegex</code> should match 16 characters.");'
  - text: Seu regex deve corresponder <code>&quot;Aaaaaaaaaaaaaaaa&quot;</code> .
    testString: 'assert(result[0] === "Aaaaaaaaaaaaaaaa", "Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code>.");'
  - text: 'Seu regex não deve corresponder a nenhum personagem em <code>&quot;He made a fair move. Screaming about it can&#39;t help you.&quot;</code>'
    testString: 'assert(!"He made a fair move. Screaming about it can\"t help you.".match(chewieRegex), "Your regex should not match any characters in <code>"He made a fair move. Screaming about it can&#39t help you."</code>");'
  - text: 'Seu regex não deve corresponder a nenhum caractere em <code>&quot;Let him have it. It&#39;s not wise to upset a Wookiee.&quot;</code>'
    testString: 'assert(!"Let him have it. It\"s not wise to upset a Wookiee.".match(chewieRegex), "Your regex should not match any characters in <code>"Let him have it. It&#39s not wise to upset a Wookiee."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /change/; // Change this line
let result = chewieQuote.match(chewieRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
