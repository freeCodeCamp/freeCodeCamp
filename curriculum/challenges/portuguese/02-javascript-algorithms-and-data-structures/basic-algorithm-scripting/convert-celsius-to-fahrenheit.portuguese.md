---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
isRequired: true
videoUrl: ''
localeTitle: Converter Celsius para Fahrenheit
---

## Description
<section id="description"> O algoritmo para converter de Celsius para Fahrenheit é a temperatura em Celsius vezes <code>9/5</code> , mais <code>32</code> . Você recebe uma variável <code>celsius</code> representando uma temperatura em Celsius. Use a variável <code>fahrenheit</code> já definida e atribua a temperatura Fahrenheit equivalente à temperatura Celsius especificada. Use o algoritmo mencionado acima para ajudar a converter a temperatura Celsius em Fahrenheit. Não se preocupe muito com as declarações de função e retorno, pois elas serão abordadas em desafios futuros. Por enquanto, use apenas operadores que você já aprendeu. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToF(0)</code> deve retornar um número
    testString: 'assert(typeof convertToF(0) === "number", "<code>convertToF(0)</code> should return a number");'
  - text: <code>convertToF(-30)</code> deve retornar um valor de <code>-22</code>
    testString: 'assert(convertToF(-30) === -22, "<code>convertToF(-30)</code> should return a value of <code>-22</code>");'
  - text: <code>convertToF(-10)</code> deve retornar um valor de <code>14</code>
    testString: 'assert(convertToF(-10) === 14, "<code>convertToF(-10)</code> should return a value of <code>14</code>");'
  - text: <code>convertToF(0)</code> deve retornar um valor de <code>32</code>
    testString: 'assert(convertToF(0) === 32, "<code>convertToF(0)</code> should return a value of <code>32</code>");'
  - text: <code>convertToF(20)</code> deve retornar um valor de <code>68</code>
    testString: 'assert(convertToF(20) === 68, "<code>convertToF(20)</code> should return a value of <code>68</code>");'
  - text: <code>convertToF(30)</code> deve retornar um valor de <code>86</code>
    testString: 'assert(convertToF(30) === 86, "<code>convertToF(30)</code> should return a value of <code>86</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);

```

</div>



</section>

## Solution
<section id='solution'>

```js
function convertToF(celsius) {
  return (celsius * (9 / 5)) + 32;
}

convertToF(30);
```
</section>
