---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
videoUrl: ''
localeTitle: Corresponder Personagens Não-Brancos
---

## Description
<section id="description"> Você aprendeu sobre a pesquisa de espaço em branco usando <code>\s</code> , com um <code>s</code> minúsculo. Você também pode pesquisar tudo, exceto o espaço em branco. Procure por espaços não brancos usando <code>\S</code> , que é um <code>s</code> maiúsculo. Esse padrão não corresponderá a espaço em branco, retorno de carro, guia, feed de formulário e novos caracteres de linha. Você pode pensar que é semelhante à classe de caracteres <code>[^ \r\t\f\n\v]</code> . <blockquote> let whiteSpace = &quot;Espaço em branco. Espaço em branco em todo lugar!&quot; <br> deixe nonSpaceRegex = / \ S / g; <br> whiteSpace.match (nonSpaceRegex) .length; // retorna 32 </blockquote></section>

## Instructions
<section id="instructions"> Altere o <code>countNonWhiteSpace</code> da regex para procurar vários caracteres que não sejam espaços em branco em uma string. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar o sinalizador global.
    testString: 'assert(countNonWhiteSpace.global, "Your regex should use the global flag.");'
  - text: Seu regex deve usar o caractere abreviado
    testString: 'assert(/\\S/.test(countNonWhiteSpace.source), "Your regex should use the shorthand character <code>\S/code> to match all non-whitespace characters.");'
  - text: Seu regex deve encontrar 35 não-espaços em <code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: 'assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35, "Your regex should find 35 non-spaces in <code>"Men are from Mars and women are from Venus."</code>");'
  - text: 'Seu regex deve encontrar 23 espaços diferentes em <code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23, "Your regex should find 23 non-spaces in <code>"Space: the final frontier."</code>");'
  - text: Seu regex deve encontrar 21 não espaços em <code>&quot;MindYourPersonalSpace&quot;</code>
    testString: 'assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21, "Your regex should find 21 non-spaces in <code>"MindYourPersonalSpace"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
