---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: ''
localeTitle: Atribuição com um valor retornado
---

## Description
<section id="description"> Se você se lembrar de nossa discussão sobre <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">Armazenando Valores com o Operador de Atribuição</a> , tudo à direita do sinal de igual será resolvido antes de o valor ser atribuído. Isso significa que podemos pegar o valor de retorno de uma função e atribuí-la a uma variável. Suponha que tenhamos pré-definido uma <code>sum</code> funções que adiciona dois números juntos, então: <code>ourSum = sum(5, 12);</code> chamará a função <code>sum</code> , que retorna um valor de <code>17</code> e atribui à variável <code>ourSum</code> . </section>

## Instructions
<section id="instructions"> Chame a função <code>processArg</code> com um argumento de <code>7</code> e atribua seu valor de retorno à variável <code>processed</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code> deve ter um valor de <code>2</code>
    testString: 'assert(processed === 2, "<code>processed</code> should have a value of <code>2</code>");'
  - text: Você deve atribuir <code>processArg</code> a <code>processed</code>
    testString: 'assert(/processed\s*=\s*processArg\(\s*7\s*\)\s*;/.test(code), "You should assign <code>processArg</code> to <code>processed</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

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
