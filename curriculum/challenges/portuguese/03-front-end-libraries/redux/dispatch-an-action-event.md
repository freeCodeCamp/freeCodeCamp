---
id: 5a24c314108439a4d403614f
title: Despachar um Evento de Ação
challengeType: 6
forumTopicId: 301442
dashedName: dispatch-an-action-event
---

# --description--

O método `dispatch` é o que você usa para enviar ações para o store do Redux. Chamando `store.dispatch()` e passando o valor retornado de um criador de ação envia uma ação de volta para store.

Lembre que os criadores de ações retornam um objeto com uma propriedade type que especifica a ação que ocorreu. Em seguida, o método despacha um objeto de ação para store do Redux. Com base no exemplo do desafio anterior, as linhas a seguir são equivalentes, e ambas enviam a ação do tipo `LOGIN`:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

O store do Redux no editor de código tem um estado inicializado que contém um objeto que contém a propriedade `login` atualmente definida como `false`. Também há um criador de ação chamado `loginAction()` que retorna uma ação do tipo `LOGIN`. Despache a ação `LOGIN` para o store do Redux chamando o método `dispatch`, e passe na ação criada por `loginAction()`.

# --hints--

Chamando a função `loginAction` deve retornar um objeto com a propriedade `type` definida para a string `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

Store deve ser inicializado com um objeto com a propriedade `login` definido como `false`.

```js
assert(store.getState().login === false);
```

O método `store.dispatch()` deve ser usado para despachar uma ação do tipo `LOGIN`.

```js
(getUserInput) =>
  assert(
    (function () {
      let noWhiteSpace = getUserInput('index').replace(/\s/g, '');
      return (
        noWhiteSpace.includes('store.dispatch(loginAction())') ||
        noWhiteSpace.includes("store.dispatch({type: 'LOGIN'})") === true
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
```

# --solutions--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
```
