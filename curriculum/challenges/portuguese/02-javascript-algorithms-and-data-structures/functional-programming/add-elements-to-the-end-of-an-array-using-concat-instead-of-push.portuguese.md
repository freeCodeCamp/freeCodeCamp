---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
videoUrl: ''
localeTitle: Adicionar elementos ao final de um array usando concat Em vez de push
---

## Description
<section id="description"> A programação funcional é toda sobre a criação e uso de funções não mutantes. O último desafio introduziu o método <code>concat</code> como uma maneira de combinar matrizes em um novo sem alterar os arrays originais. Compare <code>concat</code> no método <code>push</code> . <code>Push</code> adiciona um item ao final do mesmo array em que é chamado, o que modifica esse array. Aqui está um exemplo: <blockquote> var arr = [1, 2, 3]; <br> arr.push ([4, 5, 6]); <br> // arr é alterado para [1, 2, 3, [4, 5, 6]] <br> // Não é a maneira funcional de programação </blockquote> <code>Concat</code> oferece uma maneira de adicionar novos itens ao final de um array sem nenhum efeito colateral mutante. </section>

## Instructions
<section id="instructions"> Altere a função <code>nonMutatingPush</code> para que use a <code>concat</code> para adicionar <code>newItem</code> ao final do <code>original</code> vez de <code>push</code> . A função deve retornar uma matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: Seu código não deve usar o método <code>push</code> .
    testString: 'assert(!code.match(/\.push/g), "Your code should not use the <code>push</code> method.");'
  - text: O <code>first</code> array não deve mudar.
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: O <code>second</code> array não deve mudar.
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingPush([1, 2, 3], [4, 5])</code> deve retornar <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingPush([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.push(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.concat(newItem);
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```
</section>
