---
id: 587d7b7d367417b2b2512b1e
title: Erstelle einen Array aller Objekt-Schlüssel mit Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

Wir können auch mit der `Object.keys()` Methode einen Array erzeugen, der alle Schlüssel in einem Objekt enthält. Diese Methode nimmt ein Objekt als Argument und gibt ein Array von Strings zurück, die jede Eigenschaft des Objekts darstellen. Auch hier gibt es keine bestimmte Reihenfolge der Einträge im Array.

# --instructions--

Schreibe die Funktion `getArrayOfUsers` fertig, so dass sie ein Array mit allen Eigenschaften des Objekts zurückgibt, das sie als Argument erhält.

# --hints--

Das Objekt `users` sollte nur die Schlüssel `Alan`, `Jeff`, `Sarah`, und `Ryan` enthalten

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

Die Funktion `getArrayOfUsers` sollte einen Array, welcher alle Schlüssel des Objekts `users` enthält, zurückgeben

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```
