---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1
videoUrl: ''
localeTitle: Ignorar maiúsculas e minúsculas durante a correspondência
---

## Description
<section id="description"> Até agora, você observou as expressões regulares para fazer correspondências literais de strings. Mas, às vezes, você pode querer também combinar diferenças entre casos. Caso (ou, às vezes, letra maiúscula) é a diferença entre letras maiúsculas e minúsculas. Exemplos de maiúsculas são <code>&quot;A&quot;</code> , <code>&quot;B&quot;</code> e <code>&quot;C&quot;</code> . Exemplos de letras minúsculas são <code>&quot;a&quot;</code> , <code>&quot;b&quot;</code> e <code>&quot;c&quot;</code> . Você pode combinar os dois casos usando o que é chamado de flag. Existem outras bandeiras, mas aqui você se concentrará na bandeira que ignora maiúsculas e minúsculas - o sinalizador <code>i</code> . Você pode usá-lo anexando-o ao regex. Um exemplo de usar esse sinalizador é <code>/ignorecase/i</code> . Este regex pode coincidir com as strings <code>&quot;ignorecase&quot;</code> , <code>&quot;igNoreCase&quot;</code> e <code>&quot;IgnoreCase&quot;</code> . </section>

## Instructions
<section id="instructions"> Escreva um regex <code>fccRegex</code> para combinar com <code>&quot;freeCodeCamp&quot;</code> , não importa o caso. Seu regex não deve corresponder a nenhuma abreviação ou variação com espaços. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve corresponder ao <code>freeCodeCamp</code>
    testString: 'assert(fccRegex.test("freeCodeCamp"), "Your regex should match <code>freeCodeCamp</code>");'
  - text: Seu regex deve corresponder ao <code>FreeCodeCamp</code>
    testString: 'assert(fccRegex.test("FreeCodeCamp"), "Your regex should match <code>FreeCodeCamp</code>");'
  - text: Seu regex deve corresponder ao <code>FreecodeCamp</code>
    testString: 'assert(fccRegex.test("FreecodeCamp"), "Your regex should match <code>FreecodeCamp</code>");'
  - text: Seu regex deve corresponder ao <code>FreeCodecamp</code>
    testString: 'assert(fccRegex.test("FreeCodecamp"), "Your regex should match <code>FreeCodecamp</code>");'
  - text: Seu regex não deve corresponder ao <code>Free Code Camp</code>
    testString: 'assert(!fccRegex.test("Free Code Camp"), "Your regex should not match <code>Free Code Camp</code>");'
  - text: Seu regex deve corresponder ao <code>FreeCOdeCamp</code>
    testString: 'assert(fccRegex.test("FreeCOdeCamp"), "Your regex should match <code>FreeCOdeCamp</code>");'
  - text: Seu regex não deve corresponder ao <code>FCC</code>
    testString: 'assert(!fccRegex.test("FCC"), "Your regex should not match <code>FCC</code>");'
  - text: Seu regex deve corresponder ao <code>FrEeCoDeCamp</code>
    testString: 'assert(fccRegex.test("FrEeCoDeCamp"), "Your regex should match <code>FrEeCoDeCamp</code>");'
  - text: Seu regex deve corresponder ao <code>FrEeCodECamp</code>
    testString: 'assert(fccRegex.test("FrEeCodECamp"), "Your regex should match <code>FrEeCodECamp</code>");'
  - text: Seu regex deve corresponder a <code>FReeCodeCAmp</code>
    testString: 'assert(fccRegex.test("FReeCodeCAmp"), "Your regex should match <code>FReeCodeCAmp</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
