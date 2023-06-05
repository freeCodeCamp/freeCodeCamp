---
id: 5a24c314108439a4d4036157
title: Scrivere un contatore con Redux
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

Ora hai imparato tutti i principi fondamentali di Redux! Hai visto come creare azioni e creatori di azioni, creare uno store di Redux, inviare le tue azioni allo store e progettare gli aggiornamenti di stato con i reducer puri. Hai visto anche come gestire uno stato complesso con la composizione di reducer e la gestione di azioni asincrone. Questi esempi sono semplicistici, ma questi concetti sono i principi fondamentali di Redux. Se li capisci bene, sei pronto a iniziare a costruire la tua app con Redux. Le prossime sfide copriranno alcuni dettagli relativi all'immutabilità dello `state`, ma prima, ecco un ripasso di tutto quello che hai imparato finora.

# --instructions--

In questa lezione, realizzerai da zero un semplice contatore con Redux. Le basi sono fornite nell'editor di codice, ma dovrai riempire i dettagli! Utilizza i nomi forniti e definisci i creatori di azione `incAction` e `decAction`, il reducer `counterReducer()`, i tipi di azione `INCREMENT` e `DECREMENT`, e infine lo `store` di Redux. Una volta terminato, dovresti essere in grado di inviare le azioni `INCREMENT` o `DECREMENT` per aumentare o diminuire lo stato mantenuto nello `store`. Buona fortuna per la costruzione della tua prima app Redux!

# --hints--

Il creatore di azioni `incAction` dovrebbe restituire un oggetto azione con `type` uguale al valore di `INCREMENT`

```js
assert(incAction().type === INCREMENT);
```

Il creatore di azione `decAction` dovrebbe restituire un oggetto azione con `type` uguale al valore di `DECREMENT`

```js
assert(decAction().type === DECREMENT);
```

Running `store.getState()` should return a number

```js
assert(typeof store.getState() === 'number');
```

The Redux store should initialize with a `state` of 0.

```js
assert(_store.getState() === 0);
```

Dispatching `incAction` on the Redux store should increment the `state` by 1.

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(incAction());
    const incState = _store.getState();
    return initialState + 1 === incState;
  })()
);
```

Dispatching `decAction` on the Redux store should decrement the `state` by 1.

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(decAction());
    const decState = _store.getState();
    return initialState - 1 === decState;
  })()
);
```

`counterReducer` should be a function

```js
assert(typeof counterReducer === 'function');
```

# --seed--

## --seed-contents--

```js
const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
```

## --after-user-code--

```js
const _store = Redux.createStore(counterReducer)
```

# --solutions--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```
