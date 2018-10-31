---
id: 587d8250367417b2b2512c5e
title: Learn how a Stack Works
challengeType: 1
videoUrl: ''
localeTitle: Aprenda como funciona uma pilha
---

## Description
<section id="description"> Você provavelmente está familiarizado com a pilha de livros em sua mesa. Você provavelmente usou o recurso de desfazer de um editor de texto. Você provavelmente também está acostumado a apertar o botão Voltar do seu telefone para voltar para a visualização anterior no seu aplicativo. Você sabe o que todos eles têm em comum? Todos eles armazenam os dados de uma maneira que você possa percorrer para trás. O livro mais alto na pilha foi o que foi colocado lá por último. Se você remover o livro do topo de sua pilha, exporia o livro que foi colocado antes do último livro e assim por diante. Se você pensar sobre isso, em todos os exemplos acima, você está recebendo o tipo de serviço <dfn>Last-In-First-Out</dfn> . Vamos tentar imitar isso com o nosso código. Esse esquema de armazenamento de dados é chamado de <dfn>pilha</dfn> . Em particular, nós teríamos que implementar o método <code>push()</code> que empurra objetos JavaScript no topo da pilha; e o método <code>pop()</code> , que remove o objeto JavaScript que está no topo da pilha no momento atual. </section>

## Instructions
<section id="instructions"> Aqui temos uma pilha de trabalhos de casa representados como um array: <code>&quot;BIO12&quot;</code> está na base, e <code>&quot;PSY44&quot;</code> está no topo da pilha. Modifique a matriz dada e trate-a como uma <code>stack</code> usando os métodos JavaScript mencionados acima. Remova o elemento superior <code>&quot;PSY44&quot;</code> da pilha. Em seguida, adicione <code>&quot;CS50&quot;</code> para ser o novo elemento superior da pilha. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>homeworkStack</code> deve conter apenas 4 elementos.
    testString: 'assert(homeworkStack.length === 4, "<code>homeworkStack</code> should only contain 4 elements.");'
  - text: O último elemento no <code>homeworkStack</code> <code>&quot;CS50&quot;</code> deve ser <code>&quot;CS50&quot;</code> .
    testString: 'assert(homeworkStack[3] === "CS50", "The last element in <code>homeworkStack</code> should be <code>"CS50"</code>.");'
  - text: <code>homeworkStack</code> <code>&quot;PSY44&quot;</code> não deve conter <code>&quot;PSY44&quot;</code> .
    testString: 'assert(homeworkStack.indexOf("PSY44") === -1, "<code>homeworkStack</code> should not contain <code>"PSY44"</code>.");'
  - text: A declaração inicial <code>homeworkStack</code> não deve ser alterada.
    testString: 'assert(code.match(/=/g).length === 1 && /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(code), "The initial declaration of the <code>homeworkStack</code> should not be changed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
