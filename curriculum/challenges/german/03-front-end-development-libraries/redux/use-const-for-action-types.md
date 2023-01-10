---
id: 5a24c314108439a4d4036152
title: Verwende const für Aktionstypen
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

Eine gängige Praxis bei der Arbeit mit Redux ist es, Aktionstypen als schreibgeschützte Konstanten zuzuweisen und diese Konstanten dann überall dort zu referenzieren, wo sie verwendet werden. Du kannst den Code, mit dem du arbeitest, so umgestalten, dass du die Aktionstypen als `const`-Deklarationen schreibst.

# --instructions--

Deklariere `LOGIN` und `LOGOUT` als `const`-Werte und weise sie den Strings `'LOGIN'` bzw. `'LOGOUT'` zu. Dann bearbeite die `authReducer()` und die Action Creators so, dass sie diese Konstanten anstelle von String-Werten referenzieren.

**Hinweis:** Es ist allgemein üblich, Konstanten in Großbuchstaben zu schreiben, und das ist auch in Redux Standard.

# --hints--

Der Aufruf der Funktion `loginUser` sollte ein Objekt zurückgeben, dessen `type`-Eigenschaft auf den den String `LOGIN` gesetzt ist.

```js
assert(loginUser().type === 'LOGIN');
```

Der Aufruf der Funktion `logoutUser` sollte ein Objekt zurückgeben, dessen `type`-Eigenschaft auf den String `LOGOUT` gesetzt ist.

```js
assert(logoutUser().type === 'LOGOUT');
```

Der Store sollte mit einem Objekt initialisiert werden, dessen `login`-Eigenschaft auf `false` gesetzt ist.

```js
assert(store.getState().authenticated === false);
```

Das Senden von `loginUser` sollte die Eigenschaft `login` im Store-Zustand auf `true` aktualisieren.

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

Das Senden von `logoutUser` sollte die Eigenschaft `login` im Store-Zustand auf `false` aktualisieren.

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

Die `authReducer`-Funktion sollte mehrere Aktionstypen mit einer Switch-Anweisung behandeln.

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

`LOGIN` und `LOGOUT` sollten als `const`-Werte deklariert werden und mit den Strings `LOGIN` und `LOGOUT` belegt werden.

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(LOGIN === 'LOGIN' && LOGOUT === 'LOGOUT')
assert(noWhiteSpace.includes('const'))
```

Die Action Creators und der Reducer sollten die Konstanten `LOGIN` und `LOGOUT` referenzieren.

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
