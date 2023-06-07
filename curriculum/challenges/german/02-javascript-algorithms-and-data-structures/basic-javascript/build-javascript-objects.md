---
id: 56bbb991ad1ed5201cd392d0
title: JavaScript-Objekte erstellen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

Vielleicht hast du den Begriff `object` schon einmal gehört.

Objekte sind vergleichbar mit `arrays`, mit dem Unterschied, dass du nicht über Indizes auf die Daten zugreifst und sie veränderst, sondern über so genannte `properties` (Eigenschaften).

Objekte sind nützlich, um Daten strukturiert zu speichern, und können Objekte der realen Welt darstellen, wie zum Beispiel eine Katze.

Hier ist ein Beispiel für ein Katzenobjekt:

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

In diesem Beispiel werden alle Eigenschaften (Properties) als Strings gespeichert, z. B. `name`, `legs`, und `tails`. Du kannst aber auch Zahlen als Eigenschaften verwenden. Du kannst die Anführungszeichen auch weglassen, wenn es sich um einen String mit nur einem Wort handelt, wie im Folgenden beschrieben:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Wenn dein Objekt jedoch Eigenschaften hat, die keine Strings sind, wird JavaScript sie automatisch als Strings typisieren.

# --instructions--

Erstelle ein Objekt, das einen Hund namens `myDog` darstellt und die Eigenschaften `name` (ein String), `legs`, `tails` und `friends` enthält.

Du kannst diese Objekteigenschaften auf jeden beliebigen Wert setzen, solange `name` ein String ist, `legs` und `tails` Zahlen sind und `friends` ein Array ist.

# --hints--

`myDog` sollte die Eigenschaft `name` enthalten und es sollte ein `string` sein.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` sollte die Eigenschaft `legs` enthalten und sie sollte eine `number` sein.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` sollte die Eigenschaft `tails` enthalten und sie sollte eine `number` sein.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` sollte die Eigenschaft `friends` enthalten und es sollte ein `array` sein.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` sollte nur alle angegebenen Eigenschaften enthalten.

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
