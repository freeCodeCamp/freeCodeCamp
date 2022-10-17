---
id: 598f48a36c8c40764b4e52b3
title: Objektmodifikationen (Mutationen) verhindern
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

Wie wir in der vorherigen Aufgabe gesehen haben, schützt die `const`-Deklaration allein deine Daten nicht wirklich vor Modifikation. Um sicherzustellen, dass sich deine Daten nicht ändern, bietet JavaScript die Funktion `Object.freeze`, um Datenveränderungen zu verhindern.

Jeder Versuch, das Objekt zu ändern, wird zurückgewiesen und ein Fehler wird ausgegeben, wenn das Skript im strikten Modus läuft.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

Die Zuweisungen `obj.review` und `obj.newProp` führen zu Fehlern, weil unser Editor standardmäßig im strikten Modus läuft und die Konsole den Wert `{ name: "FreeCodeCamp", review: "Awesome" }` ausgibt.

# --instructions--

In dieser Aufgabe wirst du `Object.freeze` verwenden, um zu verhindern, dass sich mathematische Konstanten ändern. Du musst das `MATH_CONSTANTS` Objekt fixieren, damit niemand den Wert von `PI` ändern, Eigenschaften hinzufügen oder löschen kann.

# --hints--

Du solltest das Schlüsselwort `const` nicht ersetzen.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` sollte eine konstante Variable sein (indem du `const` verwendest).

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

Du solltest die ursprüngliche Deklaration von `MATH_CONSTANTS` nicht ändern.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` sollte gleich `3.14` sein.

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
