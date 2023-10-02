---
id: 5a24c314108439a4d403615b
title: Copia un objeto con Object.assign
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

Los últimos desafíos trabajaron con arreglos, pero hay maneras de ayudar a reforzar la inmutabilidad del estado cuando el estado es también un `object`. Una herramienta útil para el manejo de objetos es la utilidad `Object.assign()`. `Object.assign()` toma un objeto de destino y objetos de origen y asigna propiedades de los objetos de origen al objeto de destino. Las propiedades que coinciden se sobrescriben con las propiedades de los objetos de origen. Este comportamiento se utiliza comúnmente para hacer copias superficiales de objetos pasando un objeto vacío como primer argumento seguido por el/los objeto(s) que se desea(n) copiar. A continuación un ejemplo:

```js
const newObject = Object.assign({}, obj1, obj2);
```

Esto crea `newObject` como un nuevo `object`, que contiene las propiedades que existen actualmente en `obj1` y `obj2`.

# --instructions--

El estado y las acciones de Redux fueron modificados para manejar un `object` para el `state`. Edita el código para devolver un nuevo objeto `state` para las acciones de tipo `ONLINE`, que establece la propiedad `status` a la cadena `online`. Intenta utilizar `Object.assign()` para completar el desafío.

# --hints--

El almacén Redux debe existir e inicializarse con un estado equivalente al objeto `defaultState` declarado en la línea 1.

```js
assert(
  (function () {
    const expectedState = {
      user: 'CamperBot',
      status: 'offline',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    const initialState = store.getState();
    return DeepEqual(expectedState, initialState);
  })()
);
```

`wakeUp` e `immutableReducer` deben ser funciones.

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

El envío de una acción de tipo `ONLINE` debe actualizar la propiedad `status` del estado a `online` y NO debe mutar el estado.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch({ type: 'ONLINE' });
    const finalState = store.getState();
    const expectedState = {
      user: 'CamperBot',
      status: 'online',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

`Object.assign` debe utilizarse para devolver el nuevo estado.

```js
(getUserInput) => assert(getUserInput('index').includes('Object.assign'));
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
