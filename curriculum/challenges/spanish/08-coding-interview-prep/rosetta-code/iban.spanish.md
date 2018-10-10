---
title: IBAN
id: 5a23c84252665b21eecc7eaf
challengeType: 5
videoUrl: ''
localeTitle: IBAN
---

## Description
<section id="description"> El <a href="https://en.wikipedia.org/wiki/International_Bank_Account_Number">Número de cuenta bancaria internacional (IBAN)</a> es un medio acordado internacionalmente para identificar cuentas bancarias a través de las fronteras nacionales con un riesgo reducido de propagar <a href="https://en.wikipedia.org/wiki/Transcription_error">errores de transcripción</a> . El IBAN consta de hasta 34 caracteres alfanuméricos: <ul><li> Primero, el código de país de dos letras ISO 3166-1 alfa-2. </li><li> luego dos dígitos de control, y </li><li> finalmente, un número de cuenta bancaria básica (BBAN) específico del país. </li></ul> Los dígitos de verificación permiten una verificación de validez del número de cuenta bancaria para confirmar su integridad incluso antes de enviar una transacción. Escribe una función que tome la cadena IBAN como parámetro. Si es válido devuelve verdadero. De lo contrario, devuelve falso. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isValid</code> debería ser una función.
    testString: 'assert(typeof isValid=="function","<code>isValid</code> should be a function.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code> debe devolver un valor booleano.'
    testString: 'assert(typeof isValid(tests[0])=="boolean","<code>isValid(""+tests[0]+"")</code> should return a boolean.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code> debe devolver <code>true</code> .'
    testString: 'assert.equal(isValid(tests[0]),true,"<code>isValid(""+tests[0]+"")</code> should return <code>true</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[1]+&quot;&quot;)</code> debe devolver <code>false</code> .'
    testString: 'assert.equal(isValid(tests[1]),false,"<code>isValid(""+tests[1]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[2]+&quot;&quot;)</code> debe devolver <code>false</code> .'
    testString: 'assert.equal(isValid(tests[2]),false,"<code>isValid(""+tests[2]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[3]+&quot;&quot;)</code> debe devolver <code>false</code> .'
    testString: 'assert.equal(isValid(tests[3]),false,"<code>isValid(""+tests[3]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[4]+&quot;&quot;)</code> debe devolver <code>true</code> .'
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
