---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
videoUrl: ''
localeTitle: Impedir a mutação de objetos
---

## Description
<section id="description"> Como visto no desafio anterior, a declaração <code>const</code> sozinha não protege seus dados da mutação. Para garantir que seus dados não sejam alterados, o JavaScript fornece uma função <code>Object.freeze</code> para impedir a mutação de dados. Quando o objeto estiver congelado, você não poderá mais adicionar, atualizar ou excluir propriedades dele. Qualquer tentativa de alterar o objeto será rejeitada sem erro. <blockquote> deixe obj = { <br> nome: &quot;FreeCodeCamp&quot;, <br> revisão: &quot;Awesome&quot; <br> }; <br> Object.freeze (obj); <br> obj.review = &quot;mau&quot;; // será ignorado. Mutação não permitida <br> obj.newProp = &quot;Teste&quot;; // será ignorado. Mutação não permitida <br> console.log (obj); <br> // {name: &quot;FreeCodeCamp&quot;, resenha: &quot;Awesome&quot;} </blockquote></section>

## Instructions
<section id="instructions"> Neste desafio, você usará <code>Object.freeze</code> para impedir que constantes matemáticas sejam alteradas. Você precisa congelar o objeto <code>MATH_CONSTANTS</code> para que ninguém seja capaz de alterar o valor de <code>PI</code> , adicionar ou excluir propriedades. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Não substitua a palavra-chave <code>const</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: <code>MATH_CONSTANTS</code> deve ser uma variável constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS/g), "<code>MATH_CONSTANTS</code> should be a constant variable (by using <code>const</code>).");'
  - text: Não altere <code>MATH_CONSTANTS</code> original.
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g), "Do not change original <code>MATH_CONSTANTS</code>.");'
  - text: <code>PI</code> é igual a <code>3.14</code> .
    testString: 'assert(PI === 3.14, "<code>PI</code> equals <code>3.14</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
