---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
videoUrl: ''
localeTitle: Corresponder todos os números
---

## Description
<section id="description"> Você aprendeu atalhos para padrões de string comuns, como alfanuméricos. Outro padrão comum é procurar apenas dígitos ou números. O atalho para procurar caracteres de dígitos é <code>\d</code> , com um <code>d</code> minúsculo. Isso é igual à classe de caracteres <code>[0-9]</code> , que procura um único caractere de qualquer número entre zero e nove. </section>

## Instructions
<section id="instructions"> Use a classe de caractere abreviada <code>\d</code> para contar quantos dígitos estão em títulos de filmes. Números escritos (&quot;seis&quot; em vez de 6) não contam. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar o caractere de atalho para corresponder aos caracteres do dígito
    testString: 'assert(/\\d/.test(numRegex.source), "Your regex should use the shortcut character to match digit characters");'
  - text: Seu regex deve usar o sinalizador global.
    testString: 'assert(numRegex.global, "Your regex should use the global flag.");'
  - text: Seu regex deve encontrar um dígito em <code>&quot;9&quot;</code> .
    testString: 'assert("9".match(numRegex).length == 1, "Your regex should find 1 digit in <code>"9"</code>.");'
  - text: Seu regex deve encontrar dois dígitos em <code>&quot;Catch 22&quot;</code> .
    testString: 'assert("Catch 22".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"Catch 22"</code>.");'
  - text: Seu regex deve encontrar 3 dígitos em <code>&quot;101 Dalmatians&quot;</code> .
    testString: 'assert("101 Dalmatians".match(numRegex).length == 3, "Your regex should find 3 digits in <code>"101 Dalmatians"</code>.");'
  - text: 'Seu regex não deve encontrar dígitos em <code>&quot;One, Two, Three&quot;</code> .'
    testString: 'assert("One, Two, Three".match(numRegex) == null, "Your regex should find no digits in <code>"One, Two, Three"</code>.");'
  - text: Seu regex deve encontrar 2 dígitos em <code>&quot;21 Jump Street&quot;</code> .
    testString: 'assert("21 Jump Street".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"21 Jump Street"</code>.");'
  - text: 'Seu regex deve encontrar 4 dígitos em <code>&quot;2001: A Space Odyssey&quot;</code> .'
    testString: 'assert("2001: A Space Odyssey".match(numRegex).length == 4, "Your regex should find 4 digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let numRegex = /change/; // Change this line
let result = numString.match(numRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
