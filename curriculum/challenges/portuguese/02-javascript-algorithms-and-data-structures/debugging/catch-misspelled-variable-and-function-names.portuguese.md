---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
videoUrl: ''
localeTitle: Capturar nomes de variáveis ​​e variáveis ​​com erros ortográficos
---

## Description
<section id="description"> Os métodos <code>console.log()</code> e <code>typeof</code> são as duas principais formas de verificar valores intermediários e tipos de saída do programa. Agora é hora de entrar nos formulários comuns que os bugs tomam. Um problema no nível da sintaxe com o qual os tipificadores rápidos podem se compor é o humilde erro de ortografia. Caracteres transpostos, ausentes ou mal capitalizados em uma variável ou nome de função terão o navegador procurando por um objeto que não existe - e reclamam na forma de um erro de referência. Os nomes de variáveis ​​e funções JavaScript diferenciam maiúsculas de minúsculas. </section>

## Instructions
<section id="instructions"> Corrija os dois erros de ortografia no código para que o cálculo <code>netWorkingCapital</code> funcione. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Verifique a ortografia das duas variáveis ​​usadas no cálculo netWorkingCapital, a saída do console deve mostrar que "O capital de giro líquido é: 2".'
    testString: 'assert(netWorkingCapital === 2, "Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".");'
  - text: Não deve haver instâncias de variáveis ​​mal escritas no código.
    testString: 'assert(!code.match(/recievables/g), "There should be no instances of mis-spelled variables in the code.");'
  - text: A variável de <code>receivables</code> deve ser declarada e usada corretamente no código.
    testString: 'assert(code.match(/receivables/g).length == 2, "The <code>receivables</code> variable should be declared and used properly in the code.");'
  - text: Não deve haver instâncias de variáveis ​​mal escritas no código.
    testString: 'assert(!code.match(/payable;/g), "There should be no instances of mis-spelled variables in the code.");'
  - text: A variável de <code>payables</code> a <code>payables</code> deve ser declarada e usada corretamente no código.
    testString: 'assert(code.match(/payables/g).length == 2, "The <code>payables</code> variable should be declared and used properly in the code.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
