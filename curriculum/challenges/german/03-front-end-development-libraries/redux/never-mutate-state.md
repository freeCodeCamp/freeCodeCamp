---
id: 5a24c314108439a4d4036158
title: Niemals einen State verändern
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

Diese letzten Aufgaben beschreiben verschiedene Methoden, um das Schlüsselprinzip der Unveränderlichkeit von Zuständen in Redux durchzusetzen. Unveränderlicher Zustand(State) bedeutet, dass du den Zustand nie direkt veränderst, sondern eine neue Kopie des Zustands zurückgibst.

Wenn du einen Schnappschuss des Zustands einer Redux-App im Laufe der Zeit machen würdest, würdest du so etwas sehen wie `state 1`, `state 2`, `state 3`,`state 4`, `...` und so weiter, wobei jeder Zustand dem letzten ähnlich sein kann, aber jeder eine eigene Dateneinheit ist. Diese Unveränderlichkeit ermöglicht Funktionen wie das Zeitreise-Debugging (time-travel debugging), von dem du vielleicht schon gehört hast.

Redux erzwingt nicht aktiv die Unveränderlichkeit des Zustands im Store oder in den Reducern, diese Verantwortung liegt bei den Programmierern. Zum Glück bietet JavaScript (insbesondere ES6) einige nützliche Werkzeuge, mit denen du die Unveränderlichkeit deines Zustands erzwingen kannst, egal ob es sich um `string`, `number`, `array` oder `object` handelt. Beachte, dass Strings und Zahlen einfache Werte und von Natur aus unveränderlich sind. Mit anderen Worten: 3 ist immer 3. Du kannst den Wert der Zahl 3 nicht ändern. Ein `array` oder `object` ist dagegen veränderbar (mutable). In der Praxis wird dein Zustand wahrscheinlich aus einem `array` oder `object` bestehen, da dies nützliche Datenstrukturen sind, um viele Arten von Informationen darzustellen.

# --instructions--

Es gibt einen `store` und einen `reducer` im Code-Editor, um To-Do-Elemente zu verwalten. Vervollständige den `ADD_TO_DO` Fall im Reducer, um ein neues To-Do-Element an den Zustand anzuhängen. Es gibt ein paar Möglichkeiten, dies mit Standard-JavaScript oder ES6 zu erreichen. Schau, ob du einen Weg findest, ein neues Array mit dem Element aus `action.todo` an das Ende anzuhängen.

# --hints--

Der Redux-Store sollte existieren und mit einem Zustand initialisiert werden, der dem Array `todos` im Code-Editor entspricht.

```js
assert(
  (function () {
    const todos = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code'
    ];
    const initialState = store.getState();
    return (
      Array.isArray(initialState) && initialState.join(',') === todos.join(',')
    );
  })()
);
```

`addToDo` und `immutableReducer` sollten beide Funktionen sein.

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

Eine Aktion vom Typ `ADD_TO_DO` im Redux-Store sollte ein `todo`-Element hinzufügen und NICHT den Zustand verändern.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code',
      '__TEST__TO__DO__'
    ];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
