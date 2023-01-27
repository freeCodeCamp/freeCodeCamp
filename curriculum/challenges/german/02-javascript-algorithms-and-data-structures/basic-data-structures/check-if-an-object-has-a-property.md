---
id: 587d7b7d367417b2b2512b1c
title: Prüfe ob ein Objekt eine Eigenschaft besitzt
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

Jetzt können wir Schlüssel aus Objekten hinzufügen, verändern und entfernen. Aber was wäre, wenn wir nur wissen wollten, ob ein Objekt eine bestimmte Eigenschaft besitzt? JavaScript bietet uns zwei unterschiedliche Möglichkeiten an, dies zu tun. Eine benutzt die Methode `hasOwnProperty()` und die andere benutzt das Schlüsselwort `in`. Wenn wir ein Objekt `users` mit einer Eigenschaft von `Alan` haben, könnten wir sein Vorhandensein mit einem der folgenden Möglichkeiten überprüfen:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

Beide würden `true` zurückgeben.

# --instructions--

Schreibe die Funktion so zu Ende, dass sie `true` zurückgibt, wenn das übergebende Objekte alle vier Namen, `Alan`, `Jeff`, `Sarah` und `Ryan` enthält und ansonsten gibt sie `false` aus.

# --hints--

Das Objekt `users` sollte nicht direkt aufgerufen werden

```js 

assert(code.match(/users/gm).length <= 2)

```

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

Die Funktion `isEveryoneHere` sollte `true` zurückgeben, wenn `Alan`, `Jeff`, `Sarah`, und `Ryan` Eigenschaften sind, die an das Objekt übergeben wurden.

```js
assert(isEveryoneHere(users) === true);
```

Die Funktion `isEveryoneHere` sollte `false` zurückgeben, wenn `Alan` keine Eigenschaft ist, die an das Objekt weitergegeben wurde.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

Die Funktion `isEveryoneHere` sollte `false` zurückgeben, wenn `Jeff` keine Eigenschaft davon ist, die an das Objekt übergeben wurde.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

Die Funktion `isEveryoneHere` sollte `false` zurückgeben, wenn `Sarah` keine Eigenschaft davon ist, die an das Objekt übergeben wurde.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

Die Funktion `isEveryoneHere` sollte `false` zurückgeben, wenn `Ryan` keine Eigenschaft ist, die an das Objekt übergeben wurde.

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(user => userObj.hasOwnProperty(user));
}

console.log(isEveryoneHere(users));
```
