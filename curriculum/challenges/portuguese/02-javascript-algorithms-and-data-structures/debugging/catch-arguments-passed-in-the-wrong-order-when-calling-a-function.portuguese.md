---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
videoUrl: ''
localeTitle: Capturar argumentos passados na ordem errada ao chamar uma função
---

## Description
<section id="description"> Continuando a discussão sobre as funções de chamada, o próximo bug a ser observado é quando os argumentos de uma função são fornecidos na ordem incorreta. Se os argumentos forem tipos diferentes, como uma função esperando uma matriz e um inteiro, isso provavelmente causará um erro na altura da execução. Se os argumentos forem do mesmo tipo (todos os inteiros, por exemplo), a lógica do código não fará sentido. Certifique-se de fornecer todos os argumentos necessários, na ordem correta, para evitar esses problemas. </section>

## Instructions
<section id="instructions"> A função <code>raiseToPower</code> gera uma base para um expoente. Infelizmente, ele não é chamado corretamente - corrija o código para que o valor da <code>power</code> seja o esperado 8. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu código deve fixar a variável <code>power</code> de modo que seja igual a 2 elevado à potência 3, e não 3 elevado à potência 2.'
    testString: 'assert(power == 8, "Your code should fix the variable <code>power</code> so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.");'
  - text: Seu código deve usar a ordem correta dos argumentos para a chamada da função <code>raiseToPower</code>.
    testString: 'assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g), "Your code should use the correct order of the arguments for the <code>raiseToPower</code> function call.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solução requerida
```
</section>
