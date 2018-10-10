---
title: GeneratorExponential
id: 5a23c84252665b21eecc7e7b
challengeType: 5
videoUrl: ''
localeTitle: GeneratorExponential
---

## Description
<section id="description"> Um gerador é uma entidade executável (como uma função ou procedimento) que contém um código que produz uma sequência de valores, um de cada vez, de modo que cada vez que você chama o gerador, o próximo valor na sequência é fornecido. Geralmente, os geradores são construídos em cima de corrotinas ou objetos, de modo que o estado interno do objeto é tratado &quot;naturalmente&quot;. Os geradores são frequentemente usados ​​em situações em que uma sequência é potencialmente infinita e onde é possível construir o próximo valor da sequência com apenas um estado mínimo. Escreva uma função que use geradores para gerar quadrados e cubos. Crie um novo gerador que filtre todos os cubos do gerador de quadrados. A função deve retornar o valor \ (n ^ {th} \) do gerador filtrado. Por exemplo, para \ (n = 7 \), a função deve retornar 81 como a seqüência seria 4,9,16,25,36,49,81. Aqui 64 é filtrado, pois é um cubo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>exponentialGenerator</code> deve ser uma função.
    testString: 'assert(typeof exponentialGenerator=="function","<code>exponentialGenerator</code> should be a function.");'
  - text: <code>exponentialGenerator()</code> deve retornar um número.
    testString: 'assert(typeof exponentialGenerator(10)=="number","<code>exponentialGenerator()</code> should return a number.");'
  - text: <code>exponentialGenerator(10)</code> deve retornar <code>144</code> .
    testString: 'assert.equal(exponentialGenerator(10),144,"<code>exponentialGenerator(10)</code> should return <code>144</code>.");'
  - text: <code>exponentialGenerator(12)</code> deve retornar <code>196</code> .
    testString: 'assert.equal(exponentialGenerator(12),196,"<code>exponentialGenerator(12)</code> should return <code>196</code>.");'
  - text: <code>exponentialGenerator(14)</code> deve retornar <code>256</code> .
    testString: 'assert.equal(exponentialGenerator(14),256,"<code>exponentialGenerator(14)</code> should return <code>256</code>.");'
  - text: <code>exponentialGenerator(20)</code> deve retornar <code>484</code> .
    testString: 'assert.equal(exponentialGenerator(20),484,"<code>exponentialGenerator(20)</code> should return <code>484</code>.");'
  - text: <code>exponentialGenerator(25)</code> deve retornar <code>784</code> .
    testString: 'assert.equal(exponentialGenerator(25),784,"<code>exponentialGenerator(25)</code> should return <code>784</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function exponentialGenerator (n) {
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
