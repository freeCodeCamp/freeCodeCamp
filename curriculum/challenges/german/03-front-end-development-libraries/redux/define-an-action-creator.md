---
id: 5a24c314108439a4d403614e
title: Definiere einen Action Creator
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

Nachdem du eine Aktion erstellt hast, wird sie im nächsten Schritt an den Redux-Store gesendet, damit sie ihren Zustand aktualisieren kann. In Redux definierst du Action Creators, um dies zu erreichen. Ein Action Creator ist einfach eine JavaScript-Funktion, die eine Aktion zurückgibt. Mit anderen Worten: Action Creators erstellen Objekte, die Aktionsereignisse darstellen.

# --instructions--

Definiere eine Funktion namens `actionCreator()`, die beim Aufruf das `action`-Objekt zurückgibt.

# --hints--

Die Funktion `actionCreator` sollte existieren.

```js
assert(typeof actionCreator === 'function');
```

Das Ausführen der Funktion `actionCreator` sollte das `action`-Objekt zurückgeben.

```js
assert(typeof action === 'object');
```

Die zurückgegebene `action` sollte eine Schlüsseleigenschaft `type` mit dem Wert `LOGIN` besitzen.

```js
assert(action.type === 'LOGIN');
```

# --seed--

## --seed-contents--

```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
const actionCreator = () => {
  return action;
};
```
