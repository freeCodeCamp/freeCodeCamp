---
id: 587d7b7c367417b2b2512b1b
title: Verwende das Schlüsselwort delete, um Objekteigenschaften zu löschen
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

Jetzt weißt du, was Objekte sind und kennst deren Basisfunktionen und Vorteile. Kurz gefasst handelt es sich um Key-Value-Stores, die eine flexible, intuitive Möglichkeit bieten, Daten zu strukturieren, ***und*** sie bieten eine sehr schnelle Zugriffszeit. Im weiteren Verlauf dieser Aufgaben, werden wir verschiedene gängige Operationen erklären, die du mit Objekten durchführen kannst, damit du dich damit vertraut machen kannst diese nützlichen Datenstrukturen in deinen Programmen anzuwenden.

In vorherigen Aufgaben haben wir die Schlüssel-Wert-Paare eines Objekts sowohl ergänzt, wie auch modifiziert. Hier werden wir sehen, wie wir ein Schlüssel-Wert-Paar von einem Objekt *entfernen*.

Lass uns noch einmal unser Objektbeispiel `foods` ein letztes Mal anschauen. Wenn wir den Wert `apples` entfernen wollen, können wir es entfernen indem wir das Schlüsselwort `delete` wie hier verwenden:

```js
delete foods.apples;
```

# --instructions--

Benutze das Schlüsselwort delete um die Werte `oranges`, `plums` und `strawberries` vom Objekt `foods` zu entfernen.

# --hints--

Das Objekt `foods` soll nur drei Schlüsselwörter haben: `apples`, `grapes`und `bananas`.

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

Die Werte `oranges`, `plums` und `strawberries` sollen mittels `delete` entfernt werden.

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
