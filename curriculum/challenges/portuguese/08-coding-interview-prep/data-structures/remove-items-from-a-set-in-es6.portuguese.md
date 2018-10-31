---
id: 587d8254367417b2b2512c71
title: Remove items from a set in ES6
challengeType: 1
videoUrl: ''
localeTitle: Remover itens de um conjunto no ES6
---

## Description
<section id="description"> Vamos praticar itens de remoção de um conjunto ES6 usando o método <code>delete</code> . Primeiro, crie um conjunto ES6 <code>var set = new Set([1,2,3]);</code> Agora, remova um item do seu conjunto com o método de <code>delete</code> . <blockquote> set.delete (1); <br> console.log ([... set]) // deve retornar [2, 3] <blockquote></blockquote></blockquote></section>

## Instructions
<section id="instructions"> Agora, crie um conjunto com os números inteiros 1, 2, 3, 4 e 5. Remova os valores 2 e 5 e, em seguida, retorne o conjunto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu conjunto deve conter os valores 1, 3 e 4'
    testString: 'assert(function(){var test = checkSet(); return test.has(1) && test.has(3) && test.has(4) && test.size === 3}, "Your Set should contain the values 1, 3, & 4");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(){
   var set = //Create a set with values 1, 2, 3, 4, & 5
   //Remove the value 2
   //Remove the value 5
   //Return the set
   return set;
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
