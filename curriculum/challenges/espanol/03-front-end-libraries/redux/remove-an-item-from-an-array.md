---
id: 5a24c314108439a4d403615a
title: Elimina un elemento de un arreglo
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

Es hora de practicar la eliminación de elementos de un arreglo. Aquí también se puede utilizar el operador de propagación. Otros métodos útiles de JavaScript son `slice()` y `concat()`.

# --instructions--

El reductor y el creador de acción fueron modificados para eliminar un elemento de un arreglo en función del índice del elemento. Termina de escribir el reductor para que devuelva un nuevo arreglo de estados con el elemento en el índice específico eliminado.

# --hints--

El almacén Redux debe existir e inicializarse con un estado igual a `[0,1,2,3,4,5]`

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      DeepEqual(initialState, [0, 1, 2, 3, 4, 5])
    );
  })()
);
```

`removeItem` e `immutableReducer` deben ser funciones.

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

Enviar el creador de acción `removeItem` debe eliminar elementos del estado y NO debe mutar el estado.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(removeItem(3));
    const state_1 = store.getState();
    store.dispatch(removeItem(2));
    const state_2 = store.getState();
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    const state_3 = store.getState();
    return (
      isFrozen &&
      DeepEqual(state_1, [0, 1, 2, 4, 5]) &&
      DeepEqual(state_2, [0, 1, 4, 5]) &&
      DeepEqual(state_3, [5])
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```
