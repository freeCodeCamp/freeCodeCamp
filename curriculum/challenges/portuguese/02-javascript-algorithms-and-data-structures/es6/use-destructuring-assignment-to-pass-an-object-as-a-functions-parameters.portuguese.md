---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
videoUrl: ''
localeTitle: Use Destignucturing Assignment para passar um objeto como um parâmetro de função
---

## Description
<section id="description"> Em alguns casos, você pode desestruturar o objeto em um argumento de função em si. Considere o código abaixo: <blockquote> const profileUpdate = (profileData) =&gt; { <br> const {nome, idade, nacionalidade, localização} = profileData; <br> // faz algo com essas variáveis <br> } </blockquote> Isso efetivamente destrói o objeto enviado para a função. Isso também pode ser feito no local: <blockquote> const profileUpdate = ({nome, idade, nacionalidade, localização}) =&gt; { <br> / * faz algo com esses campos * / <br> } </blockquote> Isso remove algumas linhas extras e faz nosso código parecer limpo. Isso tem o benefício adicional de não ter que manipular um objeto inteiro em uma função; somente os campos necessários são copiados dentro da função. </section>

## Instructions
<section id="instructions"> Use a atribuição de desestruturação dentro do argumento para a <code>half</code> da função para enviar apenas <code>max</code> e <code>min</code> dentro da função. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>stats</code> deve ser um <code>object</code> .
    testString: 'assert(typeof stats === "object", "<code>stats</code> should be an <code>object</code>.");'
  - text: <code>half(stats)</code> deve ser <code>28.015</code>
    testString: 'assert(half(stats) === 28.015, "<code>half(stats)</code> should be <code>28.015</code>");'
  - text: Destruturação foi usada.
    testString: 'getUserInput => assert(getUserInput("index").match(/\(\s*\{\s*\w+\s*,\s*\w+\s*\}\s*\)/g), "Destructuring was used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half(stats) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
