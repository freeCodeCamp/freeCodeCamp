---
id: 5a24c314108439a4d4036157
title: Escribe un contador con Redux
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

¡Ahora ya has aprendido todos los principios básicos de Redux! Has visto cómo crear acciones y creadores de acción, crear un almacén Redux, enviar tus acciones contra el almacén y diseñar actualizaciones de estado con reductores puros. Incluso has visto cómo gestionar estados complejos con la composición de reductores y manejar acciones asíncronas. Estos ejemplos son simplistas, pero estos conceptos son los principios básicos de Redux. Si los entiendes bien, estás listo para empezar a crear tu propia aplicación Redux. Los próximos desafíos cubren algunos de los detalles relacionados con la inmutabilidad de `state`, pero primero, aquí hay un repaso de todo lo que has aprendido hasta ahora.

# --instructions--

En esta lección, implementarás un simple contador con Redux desde cero. El editor de código proporciona lo básico, ¡pero tendrás que completar los detalles! Utiliza los nombres que se proporcionan y define los creadores de acciones `incAction` y `decAction`, el `counterReducer()`, los tipos de acción `INCREMENT` y `DECREMENT`, y finalmente el `store` de Redux. Una vez que hayas terminado deberías poder enviar acciones `INCREMENT` o `DECREMENT` para incrementar o disminuir el estado mantenido en el `store`. ¡Buena suerte construyendo tu primera aplicación Redux!

# --hints--

El creador de acción `incAction` debe devolver un objeto de acción con `type` igual al valor de `INCREMENT`

```js
assert(incAction().type === INCREMENT);
```

El creador de acción `decAction` debe devolver un objeto de acción con `type` igual al valor de `DECREMENT`

```js
assert(decAction().type === DECREMENT);
```

El almacén Redux debe inicializarse con un `state` de 0.

```js
assert(_store.getState() === 0);
```

El envío de `incAction` en el almacén Redux debe incrementar el `state` en 1.

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

El envío de `decAction` en el almacén Redux debe disminuir el `state` en 1.

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

`counterReducer` debe ser una función

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
