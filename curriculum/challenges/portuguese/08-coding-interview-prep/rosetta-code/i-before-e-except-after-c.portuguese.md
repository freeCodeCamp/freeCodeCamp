---
title: I before E except after C
id: 5a23c84252665b21eecc7eb0
challengeType: 5
videoUrl: ''
localeTitle: Eu antes E exceto depois de C
---

## Description
<section id="description"> A frase <a href="https://en.wikipedia.org/wiki/I before E except after C">&quot;Eu antes de E, exceto depois de C&quot;</a> é um mnemônico amplamente conhecido que deveria ajudar quando soletrar palavras inglesas. Usando as palavras fornecidas, verifique se as duas subcláusulas da frase são plausíveis individualmente: <ol><li style="margin-bottom: 5px;"> <i>&quot;Eu antes de E quando não precedido por C&quot;.</i> </li><li> <i>&quot;E antes de eu quando precedido por C&quot;.</i> </li></ol> Se ambas as sub-frases forem plausíveis, então a frase original pode ser considerada plausível. Escreva uma função que aceite uma palavra e verifique se a palavra segue esta regra. A função deve retornar true se seguir a regra, caso contrário, false. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>IBeforeExceptC</code> deve ser uma função.
    testString: 'assert(typeof IBeforeExceptC=="function","<code>IBeforeExceptC</code> should be a function.");'
  - text: <code>IBeforeExceptC(&quot;receive&quot;)</code> deve retornar um booleano.
    testString: 'assert(typeof IBeforeExceptC("receive")=="boolean","<code>IBeforeExceptC("receive")</code> should return a boolean.");'
  - text: <code>IBeforeExceptC(&quot;receive&quot;)</code> deve retornar <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("receive"),true,"<code>IBeforeExceptC("receive")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;science&quot;)</code> deve retornar <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("science"),false,"<code>IBeforeExceptC("science")</code> should return <code>false</code>.");'
  - text: <code>IBeforeExceptC(&quot;imperceivable&quot;)</code> deve retornar <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("imperceivable"),true,"<code>IBeforeExceptC("imperceivable")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;inconceivable&quot;)</code> deve retornar <code>true</code> .
    testString: 'assert.equal(IBeforeExceptC("inconceivable"),true,"<code>IBeforeExceptC("inconceivable")</code> should return <code>true</code>.");'
  - text: <code>IBeforeExceptC(&quot;insufficient&quot;)</code> deve retornar <code>false</code> .
    testString: 'assert.equal(IBeforeExceptC("insufficient"),false,"<code>IBeforeExceptC("insufficient")</code> should return <code>false</code>.");'
  - text: <code>IBeforeExceptC(&quot;omniscient&quot;)</code> deve retornar <code>false</code> .
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
