---
id: 5a24c314108439a4d4036154
title: Combina múltiples reductores
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

Cuando el estado de tu aplicación empieza a ser más complejo, puede ser tentador dividir el estado en varias piezas. En su lugar, recuerda el primer principio de Redux: todo el estado de la aplicación se mantiene en un único objeto de estado en el almacén. Por lo tanto, Redux proporciona la composición de reductores como una solución para un modelo de estado complejo. Se definen varios reductores para manejar diferentes partes del estado de tu aplicación, y luego se componen estos reductores juntos en un reductor raíz. El reductor raíz se pasa al método Redux `createStore()`.

Para permitirnos combinar múltiples reductores juntos, Redux proporciona el método `combineReducers()`. Este método acepta un objeto como argumento en el que se definen las propiedades que asocian las claves a funciones reductoras específicas. El nombre que le des a las claves será utilizado por Redux como el nombre de la pieza de estado asociada.

Por lo general, es una buena práctica crear un reductor para cada pieza de estado de la aplicación cuando son distintas o únicas de alguna manera. Por ejemplo, en una aplicación para tomar notas con autenticación de usuario, un reductor podría encargarse de la autenticación, mientras que otro se encarga del texto y las notas que el usuario envía. Para tal aplicación, podríamos escribir el método `combineReducers()` así:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

Ahora, la clave `notes` contendrá todo el estado asociado a nuestras notas y manejado por nuestro `notesReducer`. Así es como se pueden componer múltiples reductores para gestionar un estado de aplicación más complejo. En este ejemplo, el estado mantenido en el almacén Redux sería entonces un único objeto que contiene las propiedades `auth` y `notes`.

# --instructions--

Están las funciones `counterReducer()` y `authReducer()` proporcionadas en el editor de código, junto con un almacén Redux. Termina de escribir la función `rootReducer()` utilizando el método `Redux.combineReducers()`. Asigna `counterReducer` a una clave llamada `count` y `authReducer` a una clave llamada `auth`.

# --hints--

El `counterReducer` debe incrementar y disminuir el `state`.

```js
assert(
  (function () {
    const initialState = store.getState().count;
    store.dispatch({ type: INCREMENT });
    store.dispatch({ type: INCREMENT });
    const firstState = store.getState().count;
    store.dispatch({ type: DECREMENT });
    const secondState = store.getState().count;
    return firstState === initialState + 2 && secondState === firstState - 1;
  })()
);
```

El `authReducer` debe alternar el `state` de `authenticated` entre `true` y `false`.

```js
assert(
  (function () {
    store.dispatch({ type: LOGIN });
    const loggedIn = store.getState().auth.authenticated;
    store.dispatch({ type: LOGOUT });
    const loggedOut = store.getState().auth.authenticated;
    return loggedIn === true && loggedOut === false;
  })()
);
```

El almacén `state` debe tener dos claves: `count`, que contiene un número, y `auth`, que contiene un objeto. El objeto `auth` debe tener una propiedad de `authenticated`, que contiene un booleano.

```js
assert(
  (function () {
    const state = store.getState();
    return (
      typeof state.auth === 'object' &&
      typeof state.auth.authenticated === 'boolean' &&
      typeof state.count === 'number'
    );
  })()
);
```

El `rootReducer` debe ser una función que combine el `counterReducer` y el `authReducer`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        typeof rootReducer === 'function' &&
        noWhiteSpace.includes('Redux.combineReducers')
      );
    })()
  );
```

# --seed--

## --seed-contents--

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

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // Define the root reducer here

const store = Redux.createStore(rootReducer);
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

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```
