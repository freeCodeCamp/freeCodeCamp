---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
videoUrl: ''
localeTitle: Corresponder espaço em branco
---

## Description
<section id="description"> Os desafios até agora cobriram letras correspondentes do alfabeto e números. Você também pode combinar o espaço em branco ou os espaços entre as letras. Você pode procurar espaços em branco usando <code>\s</code> , que é um <code>s</code> minúsculo. Esse padrão não apenas corresponde ao espaço em branco, mas também ao retorno de carro, à guia, ao feed de formulário e aos novos caracteres de linha. Você pode pensar nisso como semelhante à classe de caracteres <code>[ \r\t\f\n\v]</code> . <blockquote> let whiteSpace = &quot;Espaço em branco. Espaço em branco em todo lugar!&quot; <br> deixe spaceRegex = / \ s / g; <br> whiteSpace.match (spaceRegex); <br> // Retorna [&quot;&quot;, &quot;&quot;] <br></blockquote></section>

## Instructions
<section id="instructions"> Altere o regex <code>countWhiteSpace</code> para procurar vários caracteres de espaço em branco em uma string. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar o sinalizador global.
    testString: 'assert(countWhiteSpace.global, "Your regex should use the global flag.");'
  - text: Seu regex deve usar o caractere abreviado
    testString: 'assert(/\\s/.test(countWhiteSpace.source), "Your regex should use the shorthand character <code>\s</code> to match all whitespace characters.");'
  - text: Seu regex deve encontrar oito espaços em <code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: 'assert("Men are from Mars and women are from Venus.".match(countWhiteSpace).length == 8, "Your regex should find eight spaces in <code>"Men are from Mars and women are from Venus."</code>");'
  - text: 'Seu regex deve encontrar três espaços em <code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countWhiteSpace).length == 3, "Your regex should find three spaces in <code>"Space: the final frontier."</code>");'
  - text: Seu regex não deve encontrar espaços em <code>&quot;MindYourPersonalSpace&quot;</code>
    testString: 'assert("MindYourPersonalSpace".match(countWhiteSpace) == null, "Your regex should find no spaces in <code>"MindYourPersonalSpace"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
