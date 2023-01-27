---
id: 5a24c314108439a4d4036157
title: Schreibe einen Zähler mit Redux
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

Jetzt hast du alle Grundprinzipien von Redux kennengelernt! Du hast gesehen, wie du Actions und Action Creators erstellst, einen Redux-Store anlegst, deine Actions mit dem Store verteilst und Zustandsaktualisierungen mit reinen Reducern entwirfst. Du hast sogar gesehen, wie du komplexe Zustände mit der Komposition von Reducern verwalten und asynchrone Aktionen durchführen kannst. Diese Beispiele sind vereinfacht, aber diese Konzepte sind die Kernprinzipien von Redux. Wenn du sie verstanden hast, bist du bereit, deine eigene Redux-App zu entwickeln. In den nächsten Aufgaben geht es um einige Details zur Unveränderlichkeit von `state`, aber zuerst gibt es einen Überblick über alles, was du bis jetzt gelernt hast.

# --instructions--

In dieser Lektion wirst du einen einfachen Zähler mit Redux von Grund auf implementieren. Die Grundlagen werden im Code-Editor bereitgestellt, aber du musst die Details ergänzen! Verwende die bereitgestellten Namen und definiere die Action Creator `incAction` und `decAction`, die `counterReducer()`, `INCREMENT` und `DECREMENT` Aktionstypen und schließlich den Redux `store`. Sobald du fertig bist, solltest du `INCREMENT` oder `DECREMENT` Aktionen ausführen können, um den Zustand im `store` zu erhöhen oder zu verringern. Viel Erfolg beim Erstellen deiner ersten Redux-App!

# --hints--

Der Action Creator `incAction` sollte ein Action-Objekt mit `type` gleich dem Wert von `INCREMENT` zurückgeben.

```js
assert(incAction().type === INCREMENT);
```

Der Action Creator `decAction` sollte ein Action-Objekt mit `type` gleich dem Wert von `DECREMENT` zurückgeben

```js
assert(decAction().type === DECREMENT);
```

Der Redux-Store sollte mit einem `state` von 0 initialisiert werden.

```js
assert(_store.getState() === 0);
```

Das Senden von `incAction` an den Redux-Store sollte den `state` um 1 erhöhen.

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

Das Senden von `decAction` an den Redux-Store sollte den `state` um 1 verringern.

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

`counterReducer` sollte eine Funktion sein

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
