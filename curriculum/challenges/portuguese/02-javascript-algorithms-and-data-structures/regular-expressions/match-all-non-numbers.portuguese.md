---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
videoUrl: ''
localeTitle: Corresponder a todos os não-números
---

## Description
<section id="description"> O último desafio mostrou como procurar dígitos usando o atalho <code>\d</code> com letra minúscula <code>d</code> . Você também pode pesquisar por não-dígitos usando um atalho semelhante que use um <code>D</code> maiúsculo. O atalho para procurar caracteres não dígitos é <code>\D</code> Isso é igual à classe de caracteres <code>[^0-9]</code> , que procura um único caractere que não seja um número entre zero e nove. </section>

## Instructions
<section id="instructions"> Use a classe de caractere abreviada para não dígitos <code>\D</code> para contar quantos não-dígitos estão em títulos de filme. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar o caractere de atalho para corresponder a caracteres não dígitos
    testString: 'assert(/\\D/.test(noNumRegex.source), "Your regex should use the shortcut character to match non-digit characters");'
  - text: Seu regex deve usar o sinalizador global.
    testString: 'assert(noNumRegex.global, "Your regex should use the global flag.");'
  - text: Seu regex não deve encontrar nenhum dígito em <code>&quot;9&quot;</code> .
    testString: 'assert("9".match(noNumRegex) == null, "Your regex should find no non-digits in <code>"9"</code>.");'
  - text: Seu regex deve encontrar 6 não dígitos em <code>&quot;Catch 22&quot;</code> .
    testString: 'assert("Catch 22".match(noNumRegex).length == 6, "Your regex should find 6 non-digits in <code>"Catch 22"</code>.");'
  - text: Seu regex deve encontrar 11 não-dígitos em <code>&quot;101 Dalmatians&quot;</code> .
    testString: 'assert("101 Dalmatians".match(noNumRegex).length == 11, "Your regex should find 11 non-digits in <code>"101 Dalmatians"</code>.");'
  - text: 'Seu regex deve encontrar 15 não dígitos em <code>&quot;One, Two, Three&quot;</code> .'
    testString: 'assert("One, Two, Three".match(noNumRegex).length == 15, "Your regex should find 15 non-digits in <code>"One, Two, Three"</code>.");'
  - text: Seu regex deve encontrar 12 não dígitos em <code>&quot;21 Jump Street&quot;</code> .
    testString: 'assert("21 Jump Street".match(noNumRegex).length == 12, "Your regex should find 12 non-digits in <code>"21 Jump Street"</code>.");'
  - text: 'Seu regex deve encontrar 17 não-dígitos em <code>&quot;2001: A Space Odyssey&quot;</code> .'
    testString: 'assert("2001: A Space Odyssey".match(noNumRegex).length == 17, "Your regex should find 17 non-digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let noNumRegex = /change/; // Change this line
let result = numString.match(noNumRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
