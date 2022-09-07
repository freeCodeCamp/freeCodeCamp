---
id: 5a24c314108439a4d4036154
title: Kombiniere mehrere Reducer
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

Wenn der Zustand deiner App immer komplexer wird, kann es verlockend sein, den Zustand in mehrere Teile aufzuteilen. Erinnere dich stattdessen an das erste Prinzip von Redux: Der gesamte Zustand der App wird in einem einzigen Zustandsobjekt im Store gespeichert. Deshalb bietet Redux die Komposition von Reducern als Lösung für ein komplexes Zustandsmodell. Du definierst mehrere Reducer, um verschiedene Teile des Zustands deiner Anwendung zu verarbeiten, und fügst diese Reducer dann zu einem Root-Reducer zusammen. Der Root-Reducer wird dann an die Redux-Methode `createStore()` übergeben.

Damit wir mehrere Reducer miteinander kombinieren können, bietet Redux die Methode `combineReducers()`. Diese Methode akzeptiert ein Objekt als Argument, in dem du Eigenschaften definierst, die Schlüssel mit bestimmten Reducer-Funktionen verknüpfen. Der Name, den du den Schlüsseln gibst, wird von Redux als Name für den zugehörigen Zustand verwendet.

Normalerweise ist es eine gute Praxis, für jeden Teil des Anwendungszustands einen Reducer zu erstellen, wenn sie sich unterscheiden oder in irgendeiner Weise einzigartig sind. In einer App für Notizen mit Benutzerauthentifizierung könnte zum Beispiel ein Reducer die Authentifizierung übernehmen, während ein anderer den Text und die Notizen bearbeitet, die der Benutzer eingibt. Für eine solche Anwendung könnten wir die Methode `combineReducers()` wie folgt schreiben:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

Jetzt enthält der Schlüssel `notes` alle Zustände, die mit unseren Notizen verbunden sind und von unserem `notesReducer` bearbeitet werden. Auf diese Weise können mehrere Reducer zusammengesetzt werden, um einen komplexeren Anwendungszustand zu verwalten. In diesem Beispiel wäre der Zustand im Redux-Store dann ein einzelnes Objekt, das die Eigenschaften `auth` und `notes` enthält.

# --instructions--

Es gibt `counterReducer()` und `authReducer()`-Funktionen, die im Code-Editor zusammen mit einem Redux-Store bereitgestellt werden. Stelle die `rootReducer()`-Funktion mit der Methode `Redux.combineReducers()` fertig. Weise `counterReducer` einem Schlüssel namens `count` und `authReducer` einem Schlüssel namens `auth` zu.

# --hints--

`counterReducer` sollte den `state` inkrementieren und dekrementieren.

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

`authReducer` sollte den `state` von `authenticated` zwischen `true` und `false` umschalten.

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

Der Store `state` sollte zwei Schlüssel haben: `count`, der eine Zahl enthält, und `auth`, der ein Objekt enthält. Das `auth`-Objekt sollte eine Eigenschaft `authenticated` besitzen, die einen booleschen Wert enthält.

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

Der `rootReducer` sollte eine Funktion sein, die den `counterReducer` und den `authReducer` kombiniert.

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
