---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
challengeType: 1
videoUrl: ''
localeTitle: Use a exportação para reutilizar um bloco de código
---

## Description
<section id="description"> No desafio anterior, você aprendeu sobre a <code>import</code> e como ela pode ser aproveitada para importar pequenas quantidades de código de arquivos grandes. Para que isso funcione, no entanto, devemos utilizar uma das instruções que acompanham a <code>import</code> , conhecida como <dfn>exportação</dfn> . Quando queremos que algum código - uma função ou uma variável - seja utilizável em outro arquivo, devemos exportá-lo para importá-lo em outro arquivo. Como a <code>import</code> , a <code>export</code> é um recurso sem navegador. O que se segue é o que nos referimos como uma <dfn>exportação nomeada</dfn> . Com isso, podemos importar qualquer código que exportarmos para outro arquivo com a sintaxe de <code>import</code> você aprendeu na última lição. Aqui está um exemplo: <blockquote> const capitalizeString = (string) =&gt; { <br> return string.charAt (0) .toUpperCase () + string.slice (1); <br> } <br> export {capitalizeString} // Como exportar funções. <br> export const foo = &quot;bar&quot;; // Como exportar variáveis. </blockquote> Como alternativa, se você quiser compactar todas as suas declarações de <code>export</code> em uma linha, poderá adotar essa abordagem: <blockquote> const capitalizeString = (string) =&gt; { <br> return string.charAt (0) .toUpperCase () + string.slice (1); <br> } <br> const foo = &quot;bar&quot;; <br> export {capitalizeString, foo} </blockquote> Qualquer abordagem é perfeitamente aceitável. </section>

## Instructions
<section id="instructions"> Abaixo estão duas variáveis ​​que eu quero disponibilizar para outros arquivos para usar. Utilizando a primeira maneira que demonstrei <code>export</code> , exporte as duas variáveis. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foo</code> é exportado.
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+foo\s*=\s*"bar"/g), "<code>foo</code> is exported.");'
  - text: <code>bar</code> é exportada.
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+bar\s*=\s*"foo"/g), "<code>bar</code> is exported.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
const foo = "bar";
const bar = "foo";

```

</div>

### Before Test
<div id='js-setup'>

```js
window.exports = function(){};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
