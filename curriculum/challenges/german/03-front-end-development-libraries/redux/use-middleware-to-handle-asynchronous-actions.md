---
id: 5a24c314108439a4d4036156
title: Verwende Middleware, um asynchrone Aktionen abzuwickeln
challengeType: 6
forumTopicId: 301451
dashedName: use-middleware-to-handle-asynchronous-actions
---

# --description--

Bisher haben wir es vermieden, asynchrone Aktionen zu diskutieren, aber sie sind ein unvermeidbarer Teil der Webentwicklung. Irgendwann wirst du in deiner Redux-App asynchrone Endpunkte aufrufen müssen. Wie gehst du mit solchen Anfragen um? Redux bietet eine Middleware, die speziell für diesen Zweck entwickelt wurde, die Redux Thunk Middleware. Hier ist eine kurze Beschreibung, wie du diese mit Redux nutzen kannst.

Um Redux Thunk Middleware einzubinden, übergibst du sie als Argument an `Redux.applyMiddleware()`. Diese Anweisung wird dann als zweiter optionaler Parameter an die `createStore()`-Funktion übergeben. Sieh dir den Code unten im Editor an, um das zu sehen. Um dann eine asynchrone Aktion zu erstellen, gibst du eine Funktion im Action Creator zurück, die `dispatch` als Argument erhält. Innerhalb dieser Funktion kannst du Aktionen ausführen und asynchrone Anfragen stellen.

In diesem Beispiel wird eine asynchrone Anfrage mit einem `setTimeout()`-Aufruf simuliert. Es ist üblich, eine Aktion auszulösen, bevor ein asynchrones Verhalten ausgelöst wird, damit dein Anwendungszustand weiß, dass Daten angefordert werden (dieser Zustand könnte z. B. ein Ladesymbol anzeigen). Sobald du die Daten erhalten hast, schickst du eine weitere Aktion ab, die die Daten als Nutzlast zusammen mit der Information, dass die Aktion abgeschlossen ist, enthält.

Denke daran, dass du `dispatch` als Parameter an diesen speziellen Action Creator übergibst. Du kannst dies nutzen, um Aktionen zu versenden. Übergib die Aktion einfach direkt an den Dispatcher und die Middleware erledigt den Rest.

# --instructions--

Schreibe beide Dispatches in den `handleAsync()` Action Creator. Schicke `requestingData()` vor dem `setTimeout()` (dem simulierten API-Aufruf). Nachdem du die (simulierten) Daten erhalten hast, schickst du die `receivedData()`-Aktion ab und übergibst diese Daten. Jetzt weißt du, wie du asynchrone Aktionen in Redux handhaben kannst. Alles andere verhält sich weiterhin wie bisher.

# --hints--

Der `requestingData` Action Creator sollte ein Objekt vom Typ gleich dem Wert von `REQUESTING_DATA` zurückgeben.

```js
assert(requestingData().type === REQUESTING_DATA);
```

Der `receivedData` Action Creator sollte ein Objekt vom Typ gleich dem Wert von `RECEIVED_DATA` zurückgeben.

```js
assert(receivedData('data').type === RECEIVED_DATA);
```

`asyncDataReducer` sollte eine Funktion sein.

```js
assert(typeof asyncDataReducer === 'function');
```

Das Ausführen der Aktion `requestingData` sollte die Eigenschaft `state` von fetching auf `true` aktualisieren.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(requestingData());
    const reqState = store.getState();
    return initialState.fetching === false && reqState.fetching === true;
  })()
);
```

Der `handleAsync`-Versand sollte die Datenanforderungsaktion senden und dann nach einer Verzögerung die Datenempfangsaktion senden.

```js
assert(
  (function () {
    const noWhiteSpace = __helpers.removeWhiteSpace(handleAsync.toString());
    return (
      noWhiteSpace.includes('dispatch(requestingData())') === true &&
      noWhiteSpace.includes('dispatch(receivedData(data))') === true
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

# --solutions--

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```
