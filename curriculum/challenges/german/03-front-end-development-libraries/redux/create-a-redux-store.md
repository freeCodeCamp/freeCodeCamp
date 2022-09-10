---
id: 5a24c314108439a4d403614b
title: Einen Redux Store erstellen
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux ist ein Zustandsmanagement-Framework, das mit einer Reihe verschiedener Webtechnologien verwendet werden kann, darunter auch React.

In Redux gibt es ein einziges Zustandsobjekt (state object), das für den gesamten Zustand deiner Anwendung verantwortlich ist. Das heißt, wenn du eine React-App mit zehn Komponenten hast und jede Komponente ihren eigenen lokalen Zustand hat, wird der gesamte Zustand deiner App durch ein einziges Zustandsobjekt definiert, das sich im Redux `store` befindet. Dies ist das erste wichtige Prinzip, das du verstehen musst, wenn du Redux lernst: Der Redux-Store ist die einzige Quelle der Wahrheit, wenn es um den Zustand der Anwendung geht.

Das bedeutet auch, dass jedes Mal, wenn ein Teil deiner App den Zustand aktualisieren will, **das über den Redux-Store geschehen muss**. Der unidirektionale Datenfluss macht es einfacher, das Zustandsmanagement in deiner App zu verfolgen.

# --instructions--

Der Redux `store` ist ein Objekt, das den Zustand (`state`) der Anwendung hält und verwaltet. Es gibt eine Methode namens `createStore()` auf dem Redux-Objekt, mit der du den Redux `store` erstellen kannst. Diese Methode nimmt eine `reducer`-Funktion als erforderliches Argument entgegen. Die `reducer`-Funktion wird in einer späteren Aufgabe behandelt und ist bereits im Code-Editor für dich definiert. Sie nimmt einfach `state` als Argument und gibt `state` zurück.

Deklariere eine `store`-Variable und weise sie der `createStore()`-Methode zu, indem du den `reducer` als Argument übergibst.

**Hinweis:** Der Code im Editor verwendet die ES6-Standardargumentsyntax, um diesen Zustand mit einem Wert von `5` zu initialisieren. Wenn du mit Standardargumenten nicht vertraut bist, kannst auf <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions" target="_blank" rel="noopener noreferrer nofollow">ES6-Abschnitt in den Lehrinhalten </a> zurückgreifen, in dem dieses Thema behandelt wird.

# --hints--

Der Redux Store sollte existieren.

```js
assert(typeof store.getState === 'function');
```

Der Redux-Store sollte einen Wert von 5 für den Zustand haben.

```js
assert(store.getState() === 5);
```

# --seed--

## --seed-contents--

```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
```

# --solutions--

```js
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```
