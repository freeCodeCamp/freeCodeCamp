---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
videoUrl: ''
localeTitle: Definir parâmetros padrão para suas funções
---

## Description
<section id="description"> Para nos ajudar a criar funções mais flexíveis, o ES6 introduz <dfn>parâmetros padrão</dfn> para funções. Confira este código: <blockquote> saudação de função (name = &quot;Anonymous&quot;) { <br> return &quot;Olá&quot; + nome; <br> } <br> console.log (saudação (&quot;John&quot;)); // Olá john <br> console.log (saudação ()); // Hello Anonymous </blockquote> O parâmetro padrão entra em ação quando o argumento não é especificado (é indefinido). Como você pode ver no exemplo acima, o <code>name</code> do parâmetro receberá seu valor padrão <code>&quot;Anonymous&quot;</code> quando você não fornecer um valor para o parâmetro. Você pode adicionar valores padrão para quantos parâmetros desejar. </section>

## Instructions
<section id="instructions"> Modifique o <code>increment</code> função adicionando parâmetros padrão para que ele adicione 1 a um <code>number</code> se o <code>value</code> não for especificado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O resultado do <code>increment(5, 2)</code> deve ser <code>7</code> .'
    testString: 'assert(increment(5, 2) === 7, "The result of <code>increment(5, 2)</code> should be <code>7</code>.");'
  - text: O resultado do <code>increment(5)</code> deve ser <code>6</code> .
    testString: 'assert(increment(5) === 6, "The result of <code>increment(5)</code> should be <code>6</code>.");'
  - text: o parâmetro padrão <code>1</code> foi usado para o <code>value</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/value\s*=\s*1/g), "default parameter <code>1</code> was used for <code>value</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
