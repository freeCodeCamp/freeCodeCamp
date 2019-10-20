---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: ''
localeTitle: Use a função parseInt com uma base
---

## Description
<section id="description"> A função <code>parseInt()</code> analisa uma string e retorna um inteiro. É preciso um segundo argumento para o radix, que especifica a base do número na string. O radix pode ser um inteiro entre 2 e 36. A chamada de função se parece com: <code>parseInt(string, radix);</code> E aqui está um exemplo: <code>var a = parseInt(&quot;11&quot;, 2);</code> A variável radix diz que &quot;11&quot; está no sistema binário, ou base 2. Este exemplo converte a string &quot;11&quot; em um inteiro 3. </section>

## Instructions
<section id="instructions"> Use <code>parseInt()</code> na função <code>convertToInteger</code> para converter um número binário em um inteiro e <code>convertToInteger</code> -lo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> deve usar a função <code>parseInt()</code>
    testString: 'assert(/parseInt/g.test(code), "<code>convertToInteger</code> should use the <code>parseInt()</code> function");'
  - text: <code>convertToInteger(&quot;10011&quot;)</code> deve retornar um número
    testString: 'assert(typeof(convertToInteger("10011")) === "number", "<code>convertToInteger("10011")</code> should return a number");'
  - text: <code>convertToInteger(&quot;10011&quot;)</code> deve retornar 19
    testString: 'assert(convertToInteger("10011") === 19, "<code>convertToInteger("10011")</code> should return 19");'
  - text: <code>convertToInteger(&quot;111001&quot;)</code> deve retornar 57
    testString: 'assert(convertToInteger("111001") === 57, "<code>convertToInteger("111001")</code> should return 57");'
  - text: <code>convertToInteger(&quot;JamesBond&quot;)</code> deve retornar NaN
    testString: 'assert.isNaN(convertToInteger("JamesBond"), "<code>convertToInteger("JamesBond")</code> should return NaN");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToInteger(str) {

}

convertToInteger("10011");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
