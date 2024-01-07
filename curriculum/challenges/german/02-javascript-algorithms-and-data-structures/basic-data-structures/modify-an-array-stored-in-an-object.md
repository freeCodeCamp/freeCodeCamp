---
id: 587d7b7d367417b2b2512b1f
title: Ändere ein Array, das in einem Objekt gespeichert ist
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

Jetzt hast du alle grundlegenden Operationen für JavaScript-Objekte kennengelernt. Du kannst Schlüssel-Wert-Paare hinzufügen, ändern und entfernen, prüfen, ob Schlüssel vorhanden sind, und über alle Schlüssel eines Objekts iterieren. Beim weiteren Erlernen von JavaScript, wirst du noch vielseitigere Anwendungen von Objekten kennenlernen. Zusätzlich werden in den Lektionen zu Datenstrukturen im Abschnitt Vorbereitung auf das Coding-Interview des Lehrplans auch die ES6-Objekte <dfn>Map</dfn> und <dfn>Set</dfn> behandelt, die normalen Objekten ähneln, jedoch einige zusätzliche Funktionen bieten. Da du nun die Grundlagen von Arrays und Objekten kennengelernt hast, bist du bestens vorbereitet, um komplexere Probleme mit JavaScript anzugehen!

# --instructions--

Schau dir das Objekt an, das wir im Code-Editor bereigestellt haben. Das `user` Objekt enthält drei Schlüssel. Der `data` Schlüssel enthält fünf Schlüssel, von denen einer ein Array von `friends` enthält. Daran kannst du erkennen, wie flexibel Objekte als Datenstrukturen sind. Wir haben begonnen, eine Funktion `addFriend` zu schreiben. Schließe sie so ab, dass sie ein `user` Objekt nimmt und den Namen des `friend` Arguments zu dem in `user.data.friends` gespeicherten Array hinzufügt und dieses Array zurückgibt.

# --hints--

Das `user` Objekt sollte `name`, `age` und `data` Schlüssel haben.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

Die Funktion `addFriend` sollte ein `user`-Objekt und einen `friend` String als Argumente akzeptieren und den Freund zum Array der `friends` zum `user` Objekt hinzufügen.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` sollte `["Sam", "Kira", "Tomo", "Pete"]` zurückgeben.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
