---
id: 5a24c314108439a4d403614c
title: Obter o estado na store do Redux
challengeType: 6
forumTopicId: 301443
dashedName: get-state-from-the-redux-store
---

# --description--

O objeto store do Redux fornece vários métodos que permitem que você interaja com ele. Por exemplo, você pode recuperar o `state` atual mantido no objeto store do Redux com o método `getState()`.

# --instructions--

O código do desafio anterior é reescrito de forma mais concisa no editor de código. Use `store.getState()` para recuperar o `state` do `store`, e o atribuir a nova variável `currentState`.

# --hints--

A store do Redux deve ter um valor de 5 para o state inicial.

```js
assert(store.getState() === 5);
```

Uma variável `currentState` deve existir e deve ser atribuída ao state atual na store do Redux.

```js
(getUserInput) =>
  assert(
    currentState === 5 && getUserInput('index').includes('store.getState()')
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
```

# --solutions--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```
