---
id: 587d8251367417b2b2512c61
title: Trabalhar com nós em uma lista encadeada
challengeType: 1
forumTopicId: 301721
dashedName: work-with-nodes-in-a-linked-list
---

# --description--

Outra estrutura de dados comum que você vai encontrar frequentemente em ciência da computação é a <dfn>lista encadeada</dfn>. Uma lista encadeada é uma coleção linear de elementos de dados, chamados "nós". Cada um destes nós aponta para o próximo. Cada <dfn>nó</dfn> em uma lista encadeada contém duas informações importantes: o `element` em si e uma referência ao próximo `node` (nó).

Imagine que está em uma fila de dançarinos de conga. Suas mãos estão sobre a próxima pessoa na fila e a pessoa que está atrás de você tem as mãos sobre você. Você pode ver a pessoa diretamente à sua frente, mas ela está bloqueando a vista das outras pessoas na frente dela. Um nó é como uma pessoa em uma fila de dançarinos de conga: eles sabem quem eles são e só podem ver a próxima pessoa na fila, mas não conhecem as outras pessoas à frente ou atrás delas.

# --instructions--

No nosso editor de código, criamos dois nós, `Kitten` e `Puppy`, e conectamos manualmente o nó `Kitten` com o nó `Puppy`.

Crie um nó de `Cat` e um nó `Dog` e adicione-os manualmente à lista.

# --hints--

O nó `Puppy` deve ter uma referência a um nó `Cat`.

```js
assert(Puppy.next.element === 'Cat');
```

O nó `Cat` deve ter uma referência a um nó `Dog`.

```js
assert(Cat.next.element === 'Dog');
```

# --seed--

## --seed-contents--

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line
```

# --solutions--

```js
// solution required
```
