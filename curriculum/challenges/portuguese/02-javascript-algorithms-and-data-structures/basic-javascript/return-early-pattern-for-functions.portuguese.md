---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
challengeType: 1
videoUrl: ''
localeTitle: Retorna o padrão inicial para funções
---

## Description
<section id="description"> Quando uma instrução de <code>return</code> é atingida, a execução da função atual é interrompida e o controle retorna ao local de chamada. <strong>Exemplo</strong> <blockquote> function myFun () { <br> console.log (&quot;Olá&quot;); <br> return &quot;mundo&quot;; <br> console.log (&quot;byebye&quot;) <br> } <br> myFun (); </blockquote> O acima saídas &quot;Olá&quot; para o console, retorna &quot;World&quot;, mas <code>&quot;byebye&quot;</code> nunca é saída, porque a função sai na declaração de <code>return</code> . </section>

## Instructions
<section id="instructions"> Modifique a função <code>abTest</code> modo que, se <code>a</code> ou <code>b</code> forem menores que <code>0</code> a função sairá imediatamente com um valor <code>undefined</code> . <strong>Sugestão</strong> <br> Lembre-se de que <a href="http://www.freecodecamp.org/challenges/understanding-uninitialized-variables" target="_blank"><code>undefined</code> é uma palavra-chave</a> , não uma string. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>abTest(2,2)</code> deve retornar um número'
    testString: 'assert(typeof abTest(2,2) === "number" , "<code>abTest(2,2)</code> should return a number");'
  - text: '<code>abTest(2,2)</code> deve retornar <code>8</code>'
    testString: 'assert(abTest(2,2) === 8 , "<code>abTest(2,2)</code> should return <code>8</code>");'
  - text: '<code>abTest(-2,2)</code> deve retornar <code>undefined</code>'
    testString: 'assert(abTest(-2,2) === undefined , "<code>abTest(-2,2)</code> should return <code>undefined</code>");'
  - text: '<code>abTest(2,-2)</code> deve retornar <code>undefined</code>'
    testString: 'assert(abTest(2,-2) === undefined , "<code>abTest(2,-2)</code> should return <code>undefined</code>");'
  - text: '<code>abTest(2,8)</code> deve retornar <code>18</code>'
    testString: 'assert(abTest(2,8) === 18 , "<code>abTest(2,8)</code> should return <code>18</code>");'
  - text: '<code>abTest(3,3)</code> deve retornar <code>12</code>'
    testString: 'assert(abTest(3,3) === 12 , "<code>abTest(3,3)</code> should return <code>12</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
