---
id: 5a24c314108439a4d4036153
title: Registra un escucha al almacén
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

Otro método al que tienes acceso en el objeto Redux `store` es `store.subscribe()`. Esto te permite suscribir funciones de escucha al almacén, que se llaman cada vez que se envía una acción contra el almacén. Un uso sencillo de este método es suscribir una función a tu almacén que simplemente registra un mensaje cada vez que se recibe una acción y se actualiza el almacén.

# --instructions--

Escribe una función callback que incremente la variable global `count` cada vez que el almacén recibe una acción, y pasa esta función al método `store.subscribe()`. Verás que `store.dispatch()` es llamado tres veces seguidas, cada vez pasando directamente un objeto de acción. Observa la salida de la consola entre los envíos de acción para ver cómo se producen las actualizaciones.

# --hints--

El envío de acción `ADD` en el almacén debe incrementar el estado en `1`.

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

Debe haber una función de escucha suscrita al almacén usando `store.subscribe`.

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```

El `store.subscribe` debe recibir una función.

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

La función callback a `store.subscribe` también debe incrementar la variable global `count` a medida que se actualiza el almacén.

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
