---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Trabalhar com nós em uma lista vinculada
---

## Description
<section id="description"> Outra estrutura de dados comum que você encontrará na ciência da computação é a <dfn>lista encadeada</dfn> . Uma lista encadeada é uma coleção linear de elementos de dados, chamados &#39;nós&#39;, cada um dos quais aponta para o próximo. Cada <dfn>nó</dfn> de uma lista vinculada contém duas informações importantes: o próprio <code>element</code> e uma referência ao próximo <code>node</code> . Imagine que você está em uma fila de conga. Você tem as mãos na próxima pessoa na linha, e a pessoa atrás de você tem as mãos em você. Você pode ver a pessoa à sua frente, mas eles estão bloqueando a visão das outras pessoas à frente na fila. Um nó é como uma pessoa em uma fila de conga: eles sabem quem são e só podem ver a próxima pessoa na fila, mas não estão cientes das outras pessoas à frente ou atrás delas. </section>

## Instructions
<section id="instructions"> Em nosso editor de código, criamos dois nós, <code>Kitten</code> e <code>Puppy</code> , e conectamos manualmente o nó <code>Kitten</code> ao nó <code>Puppy</code> . Crie um nó <code>Cat</code> and <code>Dog</code> e adicione-os manualmente à linha. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu nó <code>Puppy</code> deve ter uma referência a um nó <code>Cat</code> .
    testString: 'assert(Puppy.next.element === "Cat", "Your <code>Puppy</code> node should have a reference to a <code>Cat</code> node.");'
  - text: Seu nó <code>Cat</code> deve ter uma referência a um nó <code>Dog</code> .
    testString: 'assert(Cat.next.element === "Dog", "Your <code>Cat</code> node should have a reference to a <code>Dog</code> node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(element){
    this.element = element;
    this.next = null;
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

Kitten.next = Puppy;
// only add code below this line

// test your code
console.log(Kitten.next);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
