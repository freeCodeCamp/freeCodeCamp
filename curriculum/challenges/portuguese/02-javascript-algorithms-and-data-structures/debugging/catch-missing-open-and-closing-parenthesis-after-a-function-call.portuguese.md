---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
challengeType: 1
videoUrl: ''
localeTitle: Capturar ausência de abrir e fechar de parênteses após uma chamada de função
---

## Description
<section id="description"> Quando uma função ou método não aceita nenhum argumento, você pode esquecer de incluir os parênteses de abertura e fechamento (vazios) ao chamá-lo. Muitas vezes o resultado de uma chamada de função é salvo numa variável para outro uso em seu código. Esse erro pode ser detectado registrando valores de variáveis (ou seus tipos) na consola e vendo que um está configurado para uma referência de função, em vez do valor esperado que a função retorna. As variáveis no exemplo a seguir são diferentes: <blockquote> function myFunction () { <br> retorno &quot;Você balança!&quot;; <br> } <br> vamos varOne = myFunction; // configurado para igualar uma função <br> deixe varTwo = myFunction (); // configurado para igualar a string &quot;You rock!&quot; </blockquote></section>

## Instructions
<section id="instructions"> Corrija o código para que o <code>result</code> da variável seja definido para o valor retornado da chamada da função <code>getNine</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu código deve corrigir o <code>result</code> da variável, de modo que seja configurado para o número que a função <code>getNine</code> retorna.'
    testString: 'assert(result == 9, "Your code should fix the variable <code>result</code> so it is set to the number that the function <code>getNine</code> returns.");'
  - text: Seu código deve chamar a função <code>getNine</code> .
    testString: 'assert(code.match(/getNine\(\)/g).length == 2, "Your code should call the <code>getNine</code> function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solução requerida
```
</section>
