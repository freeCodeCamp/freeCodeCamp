---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
videoUrl: ''
localeTitle: Use Spread e Notes para Integração do Conjunto ES5 ()
---

## Description
<section id="description"> Você se lembra do operador do spread ES6 <code>...</code> ? <code>...</code> pode levar objetos iteráveis ​​no ES6 e transformá-los em matrizes. Vamos criar um conjunto e verificar a função de propagação. <blockquote> var set = new Set ([1,2,3]); <br> var setToArr = [... set] <br> console.log (setToArr) // retorna [1, 2, 3] </blockquote></section>

## Instructions
<section id="instructions"> Neste exercício, passaremos um objeto set para a função <code>checkSet</code> . Deve retornar uma matriz contendo os valores do conjunto. Agora você aprendeu com sucesso como usar o objeto ES6 <code>Set()</code> , bom trabalho! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu conjunto foi devolvido corretamente!
    testString: 'assert((function(){var test = checkSet(new Set([1,2,3,4,5,6,7])); test === [ 1, 2, 3, 4, 5, 6, 7 ]})(), "Your Set was returned correctly!");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(set){
   // change code below this line

   // change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
