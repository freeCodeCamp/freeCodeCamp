---
id: 5a24c314108439a4d4036153
title: Einen Store Listener registrieren
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

Eine weitere Methode, auf die du beim Redux `store`-Objekt Zugriff hast, ist `store.subscribe()`. Damit kannst du Listener-Funktionen für den Store abonnieren, die immer dann aufgerufen werden, wenn eine Aktion für den Store ausgelöst wird. Eine einfache Anwendung für diese Methode ist es, eine Funktion für deinen Store zu abonnieren, die einfach jedes Mal eine Nachricht protokolliert, wenn eine Aktion empfangen und der Store aktualisiert wird.

# --instructions--

Schreibe eine Callback-Funktion, die die globale Variable `count` jedes Mal erhöht, wenn der Store eine Aktion erhält, und übergebe diese Funktion an die Methode `store.subscribe()`. Du wirst sehen, dass `store.dispatch()` dreimal hintereinander aufgerufen wird, wobei jedes Mal direkt ein Aktionsobjekt übergeben wird. Schau dir die Konsolenausgabe zwischen den gesendeten Aktionen an, um zu sehen, welche Aktualisierungen vorgenommen wurden.

# --hints--

Wenn du die `ADD`-Aktion im Store ausführst, wird der Zustand um `1` erhöht.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch({ type: 'ADD' });
    const newState = store.getState();
    return newState === initialState + 1;
  })()
);
```

Es sollte eine Listener-Funktion vorhanden sein, die den Store mit `store.subscribe` abonniert.

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```

`store.subscribe` sollte eine Funktion erhalten.

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

Der Callback zu `store.subscribe` sollte auch die globale `count`-Variable erhöhen, wenn der Store aktualisiert wird.

```js
assert(store.getState() === count);
```

# --seed--

## --before-user-code--

```js
count = 0;
```

## --seed-contents--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

# --solutions--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
 let count = 0;
// Change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// Change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```
