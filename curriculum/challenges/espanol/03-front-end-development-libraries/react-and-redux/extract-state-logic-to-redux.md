---
id: 5a24c314108439a4d4036143
title: Extrae la lógica de estado a Redux
challengeType: 6
forumTopicId: 301429
dashedName: extract-state-logic-to-redux
---

# --description--

Ahora que has terminado el componente React, necesitas mover la lógica que está realizando localmente en su `state` hacia Redux. Este es el primer paso para conectar la aplicación simple de React a Redux. La única funcionalidad que tiene tu aplicación es añadir nuevos mensajes del usuario a una lista desordenada. El ejemplo es simple para demostrar cómo React y Redux trabajan juntos.

# --instructions--

En primer lugar, define un tipo de acción `ADD` y asígnalo a una const `ADD`. A continuación, define un creador de acciones `addMessage()` que crea la acción para añadir un mensaje. Tendrás que pasar un `message` a este creador de acciones e incluir el mensaje en la `action` devuelta.

Luego crea un reductor llamado `messageReducer()` que maneja el estado de los mensajes. El estado inicial debe ser igual a un arreglo vacío. Este reductor debe añadir un mensaje al arreglo de mensajes mantenido en el estado, o devolver el estado actual. Finalmente, crea tu almacén Redux y pásale el reductor.

# --hints--

La const `ADD` debe existir y mantener un valor igual a la cadena `ADD`

```js
assert(ADD === 'ADD');
```

El creador de acción `addMessage` debe devolver un objeto con `type` igual a `ADD` y `message` igual al mensaje que se pasa.

```js
assert(
  (function () {
    const addAction = addMessage('__TEST__MESSAGE__');
    return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__';
  })()
);
```

`messageReducer` debe ser una función.

```js
assert(typeof messageReducer === 'function');
```

El almacén debe existir y tener un estado inicial establecido a un arreglo vacío.

```js
assert(
  (function () {
    const initialState = store.getState();
    return typeof store === 'object' && initialState.length === 0;
  })()
);
```

El envío de `addMessage` contra el almacén debe añadir un nuevo mensaje de forma inmutable al arreglo de mensajes mantenido en el estado.

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

El `messageReducer` debe devolver el estado actual si se llama con cualquier otra acción.

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
