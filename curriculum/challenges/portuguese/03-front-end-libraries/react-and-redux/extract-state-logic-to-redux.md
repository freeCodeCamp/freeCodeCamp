---
id: 5a24c314108439a4d4036143
title: Extrair a lógica de state do Redux
challengeType: 6
forumTopicId: 301429
dashedName: extract-state-logic-to-redux
---

# --description--

Agora que você terminou o componente React, você precisa mover a lógica que está sendo executada localmente em seu `state` para o Redux. Este é o primeiro passo para conectar um aplicativo React simples ao Redux. A única funcionalidade que o seu app possui é adicionar novas mensagens do usuário em uma lista não ordenada. O exemplo é simples para demonstrar como o React e Redux trabalham juntos.

# --instructions--

Primeiro, defina um tipo de ação `ADD` e atribua ela a constante `ADD`. Em seguida, defina o criador de ação `addMessage()` o qual cria uma ação para adicionar uma mensagem. Você precisará passar `message` para esse criador de ação e incluir a mensagem na `action` retornada.

Em seguida, crie um reducer chamado `messageReducer()` que lida com o state para as mensagens. O state inicial deve ser igual a um array vazio. Este reducer deve adicionar uma mensagem ao array de mensagens mantidos no state, ou retornar o state atual. Finalmente, crie seu store Redux e passe o reducer.

# --hints--

A const `ADD` deve existir e manter um valor igual a string `ADD`

```js
assert(ADD === 'ADD');
```

O criador de ação `addMessage` deve retornar um objeto com `type` igual a `ADD` e `message` igual à mensagem que foi passada.

```js
assert(
  (function () {
    const addAction = addMessage('__TEST__MESSAGE__');
    return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__';
  })()
);
```

`messageReducer` deve ser uma função.

```js
assert(typeof messageReducer === 'function');
```

O store deve existir e ter um estado inicial definido como um array vazio.

```js
assert(
  (function () {
    const initialState = store.getState();
    return typeof store === 'object' && initialState.length === 0;
  })()
);
```

Despachar `addMessage` para o store deve imutavelmente adicionar uma nova mensagem ao array de mensagens mantido no state.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addMessage('__A__TEST__MESSAGE'));
    const addState = store.getState();
    return isFrozen && addState[0] === '__A__TEST__MESSAGE';
  })()
);
```

O `messageReducer` deve retornar o state atual se chamado com qualquer outra ação.

```js
assert(
  (function () {
    const addState = store.getState();
    store.dispatch({ type: 'FAKE_ACTION' });
    const testState = store.getState();
    return addState === testState;
  })()
);
```

# --seed--

## --seed-contents--

```jsx
// Define ADD, addMessage(), messageReducer(), and store here:
```

# --solutions--

```jsx
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```
