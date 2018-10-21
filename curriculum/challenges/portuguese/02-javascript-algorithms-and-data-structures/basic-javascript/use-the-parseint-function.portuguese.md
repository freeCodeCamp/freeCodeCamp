---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
videoUrl: ''
localeTitle: Use a função parseInt
---

## Descrição
<section id="description"> A função <code>parseInt()</code> analisa uma string e retorna um inteiro. Aqui está um exemplo: <code>var a = parseInt(&quot;007&quot;);</code> A função acima converte a string &quot;007&quot; em um inteiro 7. Se o primeiro caractere da string não puder ser convertido em um número, ele retornará <code>NaN</code> . </section>

## Instruções
<section id="instructions"> Use <code>parseInt()</code> na função <code>convertToInteger</code> para converter a string de entrada <code>str</code> em um inteiro e retorná-lo. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> deve usar a função <code>parseInt()</code>
    testString: 'assert(/parseInt/g.test(code), "<code>convertToInteger</code> should use the <code>parseInt()</code> function");'
  - text: <code>convertToInteger(&quot;56&quot;)</code> deve retornar um número
    testString: 'assert(typeof(convertToInteger("56")) === "number", "<code>convertToInteger("56")</code> should return a number");'
  - text: <code>convertToInteger(&quot;56&quot;)</code> deve retornar 56
    testString: 'assert(convertToInteger("56") === 56, "<code>convertToInteger("56")</code> should return 56");'
  - text: <code>convertToInteger(&quot;77&quot;)</code> deve retornar 77
    testString: 'assert(convertToInteger("77") === 77, "<code>convertToInteger("77")</code> should return 77");'
  - text: <code>convertToInteger(&quot;JamesBond&quot;)</code> deve retornar NaN
    testString: 'assert.isNaN(convertToInteger("JamesBond"), "<code>convertToInteger("JamesBond")</code> should return NaN");'

```

</section>

## Semente do Desafio
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToInteger(str) {

}

convertToInteger("56");

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>
