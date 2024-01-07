---
id: 5a24c314108439a4d4036152
title: Usa const para los tipos de acción
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

Una práctica común cuando se trabaja con Redux es asignar tipos de acción como constantes de sólo lectura, y luego hacer referencia a estas constantes dondequiera que se utilicen. Puedes refactorizar el código con el que estás trabajando para escribir los tipos de acción como declaraciones `const`.

# --instructions--

Declara `LOGIN` y `LOGOUT` como valores `const` y asígnalos a las cadenas `'LOGIN'` y `'LOGOUT'`, respectivamente. Luego, edita el `authReducer()` y los creadores de acción para que hagan referencia a estas constantes en lugar de valores de cadena.

**Nota:** Generalmente es una convención escribir las constantes en mayúsculas, y esto es una práctica estándar en Redux también.

# --hints--

La llamada a la función `loginUser` debe devolver un objeto con la propiedad `type` establecida a la cadena `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

La llamada a la función `logoutUser` debe devolver un objeto con la propiedad `type` establecida a la cadena `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

El almacén debe ser inicializado con un objeto con la propiedad `login` establecida a `false`.

```js
assert(store.getState().authenticated === false);
```

El envío de `loginUser` debe actualizar la propiedad `login` en el estado del almacén a `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginUser());
    const afterLogin = store.getState();
    return (
      initialState.authenticated === false && afterLogin.authenticated === true
    );
  })()
);
```

El envío de `logoutUser` debe actualizar la propiedad `login` en el estado del almacén a `false`.

```js
assert(
  (function () {
    store.dispatch(loginUser());
    const loggedIn = store.getState();
    store.dispatch(logoutUser());
    const afterLogout = store.getState();
    return (
      loggedIn.authenticated === true && afterLogout.authenticated === false
    );
  })()
);
```

La función `authReducer` debe manejar múltiples tipos de acción con una sentencia switch.

```js
(getUserInput) =>
  assert(
    (function () {
      return (
        typeof authReducer === 'function' &&
        getUserInput('index').toString().includes('switch') &&
        getUserInput('index').toString().includes('case') &&
        getUserInput('index').toString().includes('default')
      );
    })()
  );
```

`LOGIN` y `LOGOUT` deben declararse como valores `const` y se les debe asignar cadenas de `LOGIN` y `LOGOUT`.

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(LOGIN === 'LOGIN' && LOGOUT === 'LOGOUT')
assert(noWhiteSpace.includes('const'))
```

Los creadores de la acción y el reductor deben hacer referencia a las constantes `LOGIN` y `LOGOUT`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(
        getUserInput('index').toString()
      );
      return (
        noWhiteSpace.includes('caseLOGIN:') &&
        noWhiteSpace.includes('caseLOGOUT:') &&
        noWhiteSpace.includes('type:LOGIN') &&
        noWhiteSpace.includes('type:LOGOUT')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js


const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

# --solutions--

```js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

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

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```
