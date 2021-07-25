---
id: 5a24c314108439a4d4036151
title: Usa una sentencia Switch para manejar múltiples acciones
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

Puedes decirle al almacén Redux cómo manejar múltiples tipos de acción. Digamos que estás gestionando la autenticación de usuarios en tu almacén Redux. Quieres tener una representación de estado para cuando los usuarios están conectados y cuando están desconectados. Esto se representa con un único objeto de estado con la propiedad `authenticated`. También se necesitan creadores de acción que creen acciones correspondientes al inicio y cierre de sesión de los usuarios, junto con los propios objetos de acción.

# --instructions--

El editor de código tiene un almacén, acciones y creadores de acción configurados para ti. Rellena la función `reducer` para manejar múltiples acciones de autenticación. Usa una sentencia `switch` de JavaScript en el `reducer` para responder a diferentes eventos de acción. Este es un patrón estándar en la escritura de reductores Redux. La sentencia switch debe cambiar sobre `action.type` y devolver el estado de autenticación apropiado.

**Nota:** En este punto, no te preocupes por la inmutabilidad del estado, ya que es pequeña y simple en este ejemplo. Para cada acción, puedes devolver un nuevo objeto, por ejemplo, `{authenticated: true}`. Además, no olvides escribir un caso `default` en tu sentencia switch que devuelva el `state` actual. Esto es importante porque una vez que tu aplicación tiene múltiples reductores, todos ellos se ejecutan cada vez que se realiza un envío de acción, incluso cuando la acción no está relacionada con ese reductor. En tal caso, querrás asegurarte de que devuelves el `state` actual.

# --hints--

La llamada a la función `loginUser` debe devolver un objeto con la propiedad type establecida a la cadena `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

La llamada a la función `logoutUser` debe devolver un objeto con la propiedad type establecida a la cadena `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

El almacén debe ser inicializado con un objeto con una propiedad `authenticated` establecida a `false`.

```js
assert(store.getState().authenticated === false);
```

El envío de `loginUser` debe actualizar la propiedad `authenticated` en el estado del almacén a `true`.

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

El envío de `logoutUser` debe actualizar la propiedad `authenticated` en el estado del almacén a `false`.

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

La función `authReducer` debe manejar múltiples tipos de acción con una sentencia `switch`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').toString().includes('switch') &&
      getUserInput('index').toString().includes('case') &&
      getUserInput('index').toString().includes('default')
  );
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
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
