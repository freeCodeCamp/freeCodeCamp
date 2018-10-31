---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: Corresponder todas as letras e números
---

## Description
<section id="description"> Usando classes de caracteres, você conseguiu pesquisar todas as letras do alfabeto com <code>[az]</code> . Esse tipo de classe de caracteres é comum o suficiente para que haja um atalho para ele, embora inclua alguns caracteres extras também. A classe de caractere mais próxima em JavaScript para corresponder ao alfabeto é <code>\w</code> . Este atalho é igual a <code>[A-Za-z0-9_]</code> . Essa classe de caracteres corresponde a letras maiúsculas e minúsculas mais números. Note que esta classe de caracteres também inclui o caractere de sublinhado ( <code>_</code> ). <blockquote> let longHand = / [A-Za-z0-9 _] + /; <br> deixe shortHand = / \ w + /; <br> deixe números = &quot;42&quot;; <br> deixe varNames = &quot;important_var&quot;; <br> longHand.test (números); // Retorna true <br> shortHand.test (números); // Retorna true <br> longHand.test (varNames); // Retorna true <br> shortHand.test (varNames); // Retorna true </blockquote> Essas classes de caracteres de atalho também são conhecidas como <code>shorthand character classes</code> . </section>

## Instructions
<section id="instructions"> Use a classe de caractere abreviada <code>\w</code> para contar o número de caracteres alfanuméricos em várias aspas e cadeias de caracteres. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar o sinalizador global.
    testString: 'assert(alphabetRegexV2.global, "Your regex should use the global flag.");'
  - text: Seu regex deve usar o caractere abreviado
    testString: 'assert(/\\w/.test(alphabetRegexV2.source), "Your regex should use the shorthand character <code>\w</code> to match all characters which are alphanumeric.");'
  - text: Seu regex deve encontrar 31 caracteres alfanuméricos em <code>&quot;The five boxing wizards jump quickly.&quot;</code>
    testString: 'assert("The five boxing wizards jump quickly.".match(alphabetRegexV2).length === 31, "Your regex should find 31 alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>");'
  - text: Seu regex deve encontrar 32 caracteres alfanuméricos em <code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(alphabetRegexV2).length === 32, "Your regex should find 32 alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: Seu regex deve encontrar 30 caracteres alfanuméricos em <code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(alphabetRegexV2).length === 30, "Your regex should find 30 alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: Seu regex deve encontrar 36 caracteres alfanuméricos em <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(alphabetRegexV2).length === 36, "Your regex should find 36 alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
