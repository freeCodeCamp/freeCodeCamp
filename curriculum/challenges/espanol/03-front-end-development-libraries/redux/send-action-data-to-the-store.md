---
id: 5a24c314108439a4d4036155
title: Envía datos de acción al almacén
challengeType: 6
forumTopicId: 301448
dashedName: send-action-data-to-the-store
---

# --description--

A estas alturas ya has aprendido a enviar acciones al almacén de Redux, pero hasta ahora estas acciones no contenían más información que un `type`. También puedes enviar datos específicos junto con sus acciones. De hecho, esto es muy común porque las acciones suelen originarse a partir de alguna interacción del usuario y suelen llevar consigo algunos datos. El almacén Redux a menudo necesita conocer estos datos.

# --instructions--

Hay un `notesReducer()` básico y un creador de acción `addNoteText()` definido en el editor de código. Termina el cuerpo de la función `addNoteText()` para que devuelva un objeto `action`. El objeto debe incluir una propiedad `type` con un valor de `ADD_NOTE`, y también una propiedad `text` establecida a los datos de `note` que se pasa al creador de acción. Cuando llames al creador de acción, pasarás información específica de la nota a la que puedes acceder para el objeto.

A continuación, termina de escribir la sentencia `switch` en el `notesReducer()`. Necesitas añadir un caso que maneje las acciones `addNoteText()`. Este caso debe activarse siempre que haya una acción de tipo `ADD_NOTE` y debe devolver la propiedad `text` de la `action` entrante como el nuevo `state`.

La acción es enviada en la parte inferior del código. Una vez que hayas terminado, ejecuta el código y observa la consola. Eso es todo lo que se necesita para enviar datos específicos de la acción al almacén y utilizarlos cuando se actualiza el `state` del almacén.

# --hints--

El creador de acción `addNoteText` debe devolver un objeto con las claves `type` y `text`.

```js
assert(
  (function () {
    const addNoteFn = addNoteText('__TEST__NOTE');
    return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE';
  })()
);
```

Enviar una acción de tipo `ADD_NOTE` con el creador de acción `addNoteText` debe actualizar el `state` a la cadena pasada al creador de acción.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(addNoteText('__TEST__NOTE'));
    const newState = store.getState();
    return initialState !== newState && newState === '__TEST__NOTE';
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

# --solutions--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```
