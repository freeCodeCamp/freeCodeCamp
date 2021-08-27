---
id: 587d8250367417b2b2512c5e
title: Aprender como funciona uma pilha
challengeType: 1
forumTopicId: 301705
dashedName: learn-how-a-stack-works
---

# --description--

Você provavelmente está familiarizado com uma pilha de livros sobre sua mesa. Você provavelmente usou o recurso de desfazer de um editor de texto. Você também já deve estar acostumado a apertar o botão voltar no seu telefone para voltar ao modo de exibição anterior no seu aplicativo.

Sabem o que eles têm em comum? Todos eles armazenam os dados de uma maneira para que você possa percorrer os dados no sentido inverso.

O livro de cima da pilha foi o que foi colocado lá por último. Se você remover esse livro da parte superior da pilha, você deixaria exposto o livro que foi colocado lá antes do último livro e assim por diante.

Se você pensar nisso, em todos os exemplos acima, você está obtendo o tipo de serviço <dfn>Last-In-First-Out</dfn> (o último a entrar é o primeiro a sair). Vamos tentar replicar isso com o nosso código.

Este esquema de armazenamento de dados é chamado de <dfn>Pilha</dfn> (ou stack, em inglês). Em particular, teremos que implementar o método `push()`, que coloca objetos do JavaScript no topo da pilha, e o método `pop()`, que remove os objeto do JavaScript no topo da pilha neste momento.

# --instructions--

Aqui temos uma pilha de tarefas representadas como um array: `"BIO12"` está na base, e `"PSY44"` está no topo da pilha.

Modifique o array fornecido e trate-o como uma `stack` usando os métodos do JavaScript mencionados acima. Remover o elemento superior `"PSY44"` da pilha. Em seguida, adicione `"CS50"` para que ele seja o novo elemento superior da pilha.

# --hints--

`homeworkStack` deve conter apenas 4 elementos.

```js
assert(homeworkStack.length === 4);
```

O último elemento em `homeworkStack` deve ser `"CS50"`.

```js
assert(homeworkStack[3] === 'CS50');
```

`homeworkStack` não deve conter `"PSY44"`.

```js
assert(homeworkStack.indexOf('PSY44') === -1);
```

A declaração inicial de `homeworkStack` não deve ser alterada.

```js
assert(
  code.match(/=/g).length === 1 &&
    /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(
      code
    )
);
```

# --seed--

## --seed-contents--

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line
```

# --solutions--

```js
// solution required
```
