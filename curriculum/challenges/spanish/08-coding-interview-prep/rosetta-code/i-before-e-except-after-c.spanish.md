---
title: I before E except after C
id: 5a23c84252665b21eecc7eb0
challengeType: 5
videoUrl: ''
localeTitle: Yo antes de E excepto después de C
---

## Description
<section id="description"> La frase <a href="https://en.wikipedia.org/wiki/I before E except after C">&quot;I antes de E, excepto después de C&quot;</a> es una mnemotécnica muy conocida que se supone que ayuda cuando se deletrean palabras en inglés. Usando las palabras provistas, verifique si las dos sub-cláusulas de la frase son plausibles individualmente: <ol><li style="margin-bottom: 5px;"> <i>&quot;I antes de E cuando no está precedido por C&quot;.</i> </li><li> <i>&quot;E antes que yo cuando está precedido por C&quot;.</i> </li></ol> Si ambas subfrases son plausibles, entonces se puede decir que la frase original es plausible. Escriba una función que acepte una palabra y verifique si la palabra sigue esta regla. La función debería devolver verdadero si sigue la regla de lo contrario falso. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>IBeforeExceptC</code> debería ser una función.
    testString: 'assert(typeof IBeforeExceptC=="function","<code>IBeforeExceptC</code> should be a function.");'
  - text: <code>IBeforeExceptC(&quot;receive&quot;)</code> debe devolver un valor booleano.
    testString: 'assert(typeof IBeforeExceptC("receive")=="boolean","<code>IBeforeExceptC("receive")</code> should return a boolean.");'
  - text: <code>IBeforeExceptC(&quot;receive&quot;)</code> debe devolver <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("receive"),true,"<code>IBeforeExceptC("receive")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;science&quot;)</code> debe devolver <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("science"),false,"<code>IBeforeExceptC("science")</code> should return <code>false</code>.");'
  - text: <code>IBeforeExceptC(&quot;imperceivable&quot;)</code> debe devolver <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("imperceivable"),true,"<code>IBeforeExceptC("imperceivable")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;inconceivable&quot;)</code> debe devolver <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("inconceivable"),true,"<code>IBeforeExceptC("inconceivable")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;insufficient&quot;)</code> debe devolver <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("insufficient"),false,"<code>IBeforeExceptC("insufficient")</code> should return <code>false</code>.");'
  - text: <code>IBeforeExceptC(&quot;omniscient&quot;)</code> debe devolver <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("omniscient"),false,"<code>IBeforeExceptC("omniscient")</code> should return <code>false</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function IBeforeExceptC (word) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
