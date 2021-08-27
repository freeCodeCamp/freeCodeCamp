---
id: 5a24c314108439a4d403614e
title: Definir um criador de action
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

Após criar uma ação, o próximo passo é enviar a ação para o armazenamento do Redux para que ele possa atualizar seu estado. No Redux, você define os criadores de ação para realizar isso. Um criador de ação é simplesmente uma função JavaScript que retorna uma ação. Em outras palavras, criadores de ações criam objetos que representam eventos de ação.

# --instructions--

Defina uma função chamada `actionCreator()` que retorna o objeto `action` quando chamado.

# --hints--

A função `actionCreator` deve existir.

```js
assert(typeof actionCreator === 'function');
```

Executando a função `actionCreator` deve retornar o objeto `action`.

```js
assert(typeof action === 'object');
```

O objeto `action` deve ter a propriedade chave `type` com o valor `LOGIN`.

```js
assert(action.type === 'LOGIN');
```

# --seed--

## --seed-contents--

```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
const actionCreator = () => {
  return action;
};
```
