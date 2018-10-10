---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: ''
localeTitle: Entendendo o valor indefinido retornado de uma função
---

## Description
<section id="description"> Uma função pode incluir a declaração de <code>return</code> , mas não precisa. No caso de a função não ter uma instrução de <code>return</code> , quando você a chama, a função processa o código interno, mas o valor retornado é <code>undefined</code> . <strong>Exemplo</strong> <blockquote> var sum = 0; <br> function addSum (num) { <br> soma = soma + num; <br> } <br> var returnedValue = addSum (3); // sum será modificado, mas o valor retornado é indefinido </blockquote> <code>addSum</code> é uma função sem uma declaração de <code>return</code> . A função irá alterar a variável global <code>sum</code> mas o valor retornado da função é <code>undefined</code> </section>

## Instructions
<section id="instructions"> Crie uma função <code>addFive</code> sem nenhum argumento. Essa função adiciona 5 à variável <code>sum</code> , mas seu valor retornado é <code>undefined</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addFive</code> deve ser uma função
    testString: 'assert(typeof addFive === "function", "<code>addFive</code> should be a function");'
  - text: <code>sum</code> deve ser igual a 8
    testString: 'assert(sum === 8, "<code>sum</code> should be equal to 8");'
  - text: Valor retornado de <code>addFive</code> deve ser <code>undefined</code>
    testString: 'assert(addFive() === undefined, "Returned value from <code>addFive</code> should be <code>undefined</code>");'
  - text: 'Dentro de suas funções, adicione 5 à variável <code>sum</code>'
    testString: 'assert(code.match(/(sum\s*\=\s*sum\s*\+\s*5)|(sum\s*\+\=\s*5)/g).length === 1, "Inside of your functions, add 5 to the <code>sum</code> variable");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line



// Only change code above this line
var returnedValue = addFive();

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
