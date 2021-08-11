---
id: 5a24c314108439a4d403614d
title: Definir uma ação do Redux
challengeType: 6
forumTopicId: 301440
dashedName: define-a-redux-action
---

# --description--

Como o Redux é um framework de gestão de estado, atualizar o state é uma das suas principais tarefas. No Redux, todas as atualizações de estado são acionadas despachando ações. Uma ação é simplesmente um objeto JavaScript que contém informações sobre um evento de ação que ocorreu. A store do Redux recebe estes objetos de ação, então atualiza seu estado de acordo. Às vezes, uma ação do Redux também contém alguns dados. Por exemplo, a ação carrega um nome de usuário após o login do usuário. Enquanto os dados são opcionais, ações devem carregar uma propriedade `type` que especifica o 'tipo' da ação que ocorreu.

Pense em ações Redux como mensageiros que fornecem informações sobre eventos acontecendo em seu aplicativo para a store do Redux. A store então conduz a tarefa de atualizar o state baseado na ação que ocorreu.

# --instructions--

Escrever uma ação Redux é tão simples quanto declarar um objeto com uma propriedade type. Declare um objeto `action` e o dê uma propriedade `type` definido para a string `'LOGIN'`.

# --hints--

Um objeto de `action` deve existir.

```js
assert(
  (function () {
    return typeof action === 'object';
  })()
);
```

O objeto `action` deve ter a propriedade chave `type` com o valor de `LOGIN`.

```js
assert(
  (function () {
    return action.type === 'LOGIN';
  })()
);
```

# --seed--

## --seed-contents--

```js
// Define an action here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```
