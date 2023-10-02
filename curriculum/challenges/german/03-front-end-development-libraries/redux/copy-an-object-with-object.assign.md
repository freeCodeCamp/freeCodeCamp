---
id: 5a24c314108439a4d403615b
title: Ein Objekt mit Object.assign kopieren
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

Die letzten Aufgaben haben mit Arrays gearbeitet, aber es gibt auch Möglichkeiten, die Unveränderlichkeit des Zustands zu erzwingen, wenn der Zustand ein `object` ist. Ein nützliches Werkzeug für den Umgang mit Objekten ist das `Object.assign()` Dienstprogramm. `Object.assign()` nimmt ein Zielobjekt und Quellobjekte und ordnet die Eigenschaften der Quellobjekte dem Zielobjekt zu. Alle übereinstimmenden Eigenschaften werden durch Eigenschaften in den Quellobjekten überschrieben. Dieses Verhalten wird häufig verwendet, um einfache Kopien von Objekten zu erstellen, indem du ein leeres Objekt als erstes Argument übergibst, gefolgt von dem oder den Objekten, die du kopieren willst. Hier ist ein Beispiel:

```js
const newObject = Object.assign({}, obj1, obj2);
```

Dadurch wird `newObject` als neues `object` erstellt, das die Eigenschaften enthält, die derzeit in `obj1` und `obj2` existieren.

# --instructions--

Der Redux-Zustand und die Actions wurden geändert, um ein `object` für den `state` zu verwenden. Bearbeite den Code, um ein neues `state`-Objekt für Actions mit dem Typ `ONLINE` zurückzugeben, das die `status`-Eigenschaft auf den String `online` setzt. Versuche, `Object.assign()` zu verwenden, um diese Aufgabe zu lösen.

# --hints--

Der Redux-Store sollte existieren und mit einem Zustand initialisiert werden, der dem `defaultState`-Objekt entspricht, das in Zeile 1 deklariert wurde.

```js
assert(
  (function () {
    const expectedState = {
      user: 'CamperBot',
      status: 'offline',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    const initialState = store.getState();
    return DeepEqual(expectedState, initialState);
  })()
);
```

`wakeUp` und `immutableReducer` sollten beide Funktionen sein.

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

Das Senden einer Aktion vom Typ `ONLINE` sollte die Eigenschaft `status` im Zustand auf `online` aktualisieren und sollte den Zustand NICHT verändern.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch({ type: 'ONLINE' });
    const finalState = store.getState();
    const expectedState = {
      user: 'CamperBot',
      status: 'online',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

`Object.assign` sollte verwendet werden, um einen neuen Zustand zurückzugeben.

```js
(getUserInput) => assert(getUserInput('index').includes('Object.assign'));
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
