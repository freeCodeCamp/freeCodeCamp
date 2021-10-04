---
id: 5a24c314108439a4d4036153
title: Registrar um listener de store
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

Outro método a que você tem acesso no objeto `store` do Redux é `store.subscribe()`. Isso permite que você inscreva funções de listener à store, que são chamadas sempre que uma ação é enviada à store. Um uso simples para este método é inscrever uma função na sua store que simplesmente registra uma mensagem toda vez que uma ação é recebida e a store é atualizada.

# --instructions--

Escreva uma função de callback que incrementa a variável global `count` toda vez que a store receber uma ação, e passe esta função para o método `store.subscribe()`. Você verá que `store.dispatch()` é chamado três vezes seguidas, a cada vez que passa diretamente em um objeto de ação. Assista a saída do console entre os despachos de ação para ver as atualizações que ocorrem.

# --hints--

Despachar a ação `ADD` na store deve incrementar o estado por `1`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch({ type: 'ADD' });
    const newState = store.getState();
    return newState === initialState + 1;
  })()
);
```

Deve haver uma função de listener inscrita na store usando `store.subscribe`.

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```

O `store.subscribe` deve receber uma função.

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

A função de callback para `store.subscribe` também deve incrementar a variável global `count` à medida que a store é atualizada.

```js
assert(store.getState() === count);
```

# --seed--

## --before-user-code--

```js
count = 0;
```

## --seed-contents--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

# --solutions--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
 let count = 0;
// Change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// Change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```
