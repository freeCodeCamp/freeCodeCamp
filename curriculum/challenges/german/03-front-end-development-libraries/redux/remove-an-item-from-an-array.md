---
id: 5a24c314108439a4d403615a
title: Ein Element aus einem Array entfernen
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

Es ist Zeit, das Entfernen von Elementen aus einem Array zu üben. Auch hier kann der Spread-Operator verwendet werden. Andere nützliche JavaScript-Methoden sind `slice()` und `concat()`.

# --instructions--

Der Reducer und der Action Creator wurden geändert, um ein Element aus einem Array zu entfernen, das auf dem Index des Elements basiert. Beende das Schreiben des Reducers, so dass ein neues Zustandsarray zurückgegeben wird, aus dem das Element mit dem bestimmten Index entfernt wurde.

# --hints--

Der Redux-Store sollte existieren und mit einem Zustand gleich `[0,1,2,3,4,5]` initialisiert werden.

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      DeepEqual(initialState, [0, 1, 2, 3, 4, 5])
    );
  })()
);
```

`removeItem` und `immutableReducer` sollten beide Funktionen sein.

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

Das Senden des `removeItem` Action Creators sollte Elemente aus dem Zustand entfernen und den Zustand NICHT verändern.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(removeItem(3));
    const state_1 = store.getState();
    store.dispatch(removeItem(2));
    const state_2 = store.getState();
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    const state_3 = store.getState();
    return (
      isFrozen &&
      DeepEqual(state_1, [0, 1, 2, 4, 5]) &&
      DeepEqual(state_2, [0, 1, 4, 5]) &&
      DeepEqual(state_3, [5])
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```
