---
title: IBAN
id: 5a23c84252665b21eecc7eaf
challengeType: 5
videoUrl: ''
localeTitle: IBAN
---

## Description
<section id="description"> O <a href="https://en.wikipedia.org/wiki/International_Bank_Account_Number">Número Internacional de Conta Bancária (IBAN)</a> é um meio internacionalmente acordado de identificar contas bancárias através das fronteiras nacionais com um risco reduzido de propagação de <a href="https://en.wikipedia.org/wiki/Transcription_error">erros de transcrição</a> . O IBAN é composto por até 34 caracteres alfanuméricos: <ul><li> primeiro o código de duas letras ISO 3166-1 alpha-2 </li><li> depois dois dígitos de verificação e </li><li> finalmente, um Número Básico de Conta Bancária (BBAN) específico do país. </li></ul> Os dígitos de verificação permitem uma verificação de integridade do número da conta bancária para confirmar sua integridade antes mesmo de enviar uma transação. Escreva uma função que tome a string IBAN como parâmetro. Se for válido, retorne verdadeiro. Caso contrário, retorne falso. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isValid</code> deve ser uma função.
    testString: 'assert(typeof isValid=="function","<code>isValid</code> should be a function.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code> deve retornar um booleano.'
    testString: 'assert(typeof isValid(tests[0])=="boolean","<code>isValid(""+tests[0]+"")</code> should return a boolean.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code> deve retornar <code>true</code> .'
    testString: 'assert.equal(isValid(tests[0]),true,"<code>isValid(""+tests[0]+"")</code> should return <code>true</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[1]+&quot;&quot;)</code> deve retornar <code>false</code> .'
    testString: 'assert.equal(isValid(tests[1]),false,"<code>isValid(""+tests[1]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[2]+&quot;&quot;)</code> deve retornar <code>false</code> .'
    testString: 'assert.equal(isValid(tests[2]),false,"<code>isValid(""+tests[2]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[3]+&quot;&quot;)</code> deve retornar <code>false</code> .'
    testString: 'assert.equal(isValid(tests[3]),false,"<code>isValid(""+tests[3]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[4]+&quot;&quot;)</code> deve retornar <code>true</code> .'
    testString: 'assert.equal(isValid(tests[4]),true,"<code>isValid(""+tests[4]+"")</code> should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isValid (iban) {
  // Good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
