---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
challengeType: 1
videoUrl: ''
localeTitle: Entendendo a sensibilidade do caso em variáveis
---

## Description
<section id="description"> Em JavaScript, todas as variáveis ​​e nomes de função diferenciam maiúsculas de minúsculas. Isso significa que a capitalização é importante. <code>MYVAR</code> não é o mesmo que <code>MyVar</code> nem <code>myvar</code> . É possível ter várias variáveis ​​distintas com o mesmo nome, mas diferentes invólucros. É altamente recomendável que, por motivos de clareza, você <em>não</em> use esse recurso de idioma. <h4> Melhor pratica </h4> Escreva nomes de variáveis ​​em JavaScript no <dfn>camelCase</dfn> . No <dfn>camelCase</dfn> , os nomes de variáveis ​​com várias palavras têm a primeira palavra em minúsculas e a primeira letra de cada palavra subsequente é maiúscula. <strong>Exemplos:</strong> <blockquote> var someVariable; <br> var anotherVariableName; <br> var thisVariableNameIsSoLong; </blockquote></section>

## Instructions
<section id="instructions"> Modifique as declarações e atribuições existentes para que seus nomes usem o <dfn>camelCase</dfn> . <br> Não crie novas variáveis. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studlyCapVar</code> é definido e tem um valor de <code>10</code>
    testString: 'assert(typeof studlyCapVar !== "undefined" && studlyCapVar === 10, "<code>studlyCapVar</code> is defined and has a value of <code>10</code>");'
  - text: <code>properCamelCase</code> é definido e tem um valor de <code>&quot;A String&quot;</code>
    testString: 'assert(typeof properCamelCase !== "undefined" && properCamelCase === "A String", "<code>properCamelCase</code> is defined and has a value of <code>"A String"</code>");'
  - text: <code>titleCaseOver</code> é definido e tem um valor de <code>9000</code>
    testString: 'assert(typeof titleCaseOver !== "undefined" && titleCaseOver === 9000, "<code>titleCaseOver</code> is defined and has a value of <code>9000</code>");'
  - text: <code>studlyCapVar</code> deve usar o camelCase nas seções de declaração e atribuição.
    testString: 'assert(code.match(/studlyCapVar/g).length === 2, "<code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>properCamelCase</code> deve usar o camelCase nas seções de declaração e atribuição.
    testString: 'assert(code.match(/properCamelCase/g).length === 2, "<code>properCamelCase</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>titleCaseOver</code> deve usar o camelCase nas seções de declaração e atribuição.
    testString: 'assert(code.match(/titleCaseOver/g).length === 2, "<code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
