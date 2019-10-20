---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: 'Combine tudo, mas letras e números'
---

## Description
<section id="description"> Você aprendeu que pode usar um atalho para corresponder a alfanuméricos <code>[A-Za-z0-9_]</code> usando <code>\w</code> . Um padrão natural que você pode querer pesquisar é o oposto de alfanuméricos. Você pode procurar o oposto do <code>\w</code> com <code>\W</code> Note que o padrão oposto usa uma letra maiúscula. Este atalho é o mesmo que <code>[^A-Za-z0-9_]</code> . <blockquote> deixe shortHand = / \ W /; <br> deixar números = &quot;42%&quot;; <br> vamos sentenciar = &quot;Codificação!&quot;; <br> numbers.match (shortHand); // Retorna [&quot;%&quot;] <br> sentence.match (shortHand); // Retorna [&quot;!&quot;] <br></blockquote></section>

## Instructions
<section id="instructions"> Use a classe de caractere abreviada <code>\W</code> para contar o número de caracteres não alfanuméricos em várias aspas e cadeias de caracteres. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar o sinalizador global.
    testString: 'assert(nonAlphabetRegex.global, "Your regex should use the global flag.");'
  - text: Seu regex deve encontrar 6 caracteres não-alfanuméricos em <code>&quot;The five boxing wizards jump quickly.&quot;</code> .
    testString: 'assert("The five boxing wizards jump quickly.".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>.");'
  - text: Seu regex deve usar o caractere abreviado.
    testString: 'assert(/\\W/.test(nonAlphabetRegex.source), "Your regex should use the shorthand character to match characters which are non-alphanumeric.");'
  - text: Seu regex deve encontrar 8 caracteres não-alfanuméricos em <code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(nonAlphabetRegex).length == 8, "Your regex should find 8 non-alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: Seu regex deve encontrar 6 caracteres não-alfanuméricos em <code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: Seu regex deve encontrar 12 caracteres não-alfanuméricos em <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(nonAlphabetRegex).length == 12, "Your regex should find 12 non-alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
