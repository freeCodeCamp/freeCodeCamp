---
id: 5a24c314108439a4d4036151
title: Verwende eine Switch-Anweisung, um mehrere Aktionen zu verarbeiten
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

Du kannst dem Redux-Store mitteilen, wie er mit mehreren Aktionstypen umgehen soll. Angenommen, du verwaltest die Benutzerauthentifizierung in deinem Redux-Store. Du möchtest eine Zustandsrepräsentation dafür haben, wann Nutzer ein- und wann sie abgemeldet sind. Du stellst dies durch ein einzelnes Zustandsobjekt mit der Eigenschaft `authenticated` dar. Du brauchst auch Action Creators, die Aktionen für die Benutzeranmeldung und -abmeldung erstellen, sowie die Aktionsobjekte selbst.

# --instructions--

Der Code-Editor hat einen Store, Aktionen und Action Creators für dich eingerichtet. Fülle die `reducer`-Funktion aus, um mehrere Authentifizierungsaktionen zu behandeln. Verwende eine JavaScript `switch`-Anweisung im `reducer`, um auf verschiedene Aktionsereignisse zu reagieren. Dies ist ein Standardmuster beim Schreiben von Redux-Reducern. Die switch-Anweisung sollte `action.type` umschalten und den entsprechenden Authentifizierungszustand zurückgeben.

**Hinweis:** Mach dir an dieser Stelle keine Gedanken über die Unveränderlichkeit des Zustands, da er diesem Beispiel klein und einfach ist. Für jede Aktion kannst du ein neues Objekt zurückgeben - zum Beispiel `{authenticated: true}`. Vergiss auch nicht, einen `default`-Fall in deine switch-Anweisung zu schreiben, der den aktuellen `state` zurückgibt. Das ist wichtig, denn wenn deine App mehrere Reducer hat, werden sie alle ausgeführt, sobald eine Aktion ausgelöst wird, auch wenn die Aktion nicht mit diesem Reducer verbunden ist. In einem solchen Fall solltest du sicherstellen, dass du den aktuellen `state` zurückgibst.

# --hints--

Der Aufruf der Funktion `loginUser` sollte ein Objekt zurückgeben, dessen type-Eigenschaft auf den String `LOGIN` gesetzt ist.

```js
assert(loginUser().type === 'LOGIN');
```

Der Aufruf der Funktion `logoutUser` sollte ein Objekt zurückgeben, dessen Typ-Eigenschaft auf den String `LOGOUT` gesetzt ist.

```js
assert(logoutUser().type === 'LOGOUT');
```

Der Store sollte mit einem Objekt initialisiert werden, dessen `authenticated` Eigenschaft auf `false` gesetzt ist.

```js
assert(store.getState().authenticated === false);
```

Das Versenden von `loginUser` sollte die Eigenschaft `authenticated` im Store-Zustand auf `true` aktualisieren.

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

Der Versand von `logoutUser` sollte die Eigenschaft `authenticated` im Store-Zustand auf `false` aktualisieren.

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

Die `authReducer`-Funktion sollte mehrere Aktionstypen mit einer `switch`-Anweisung behandeln.

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
