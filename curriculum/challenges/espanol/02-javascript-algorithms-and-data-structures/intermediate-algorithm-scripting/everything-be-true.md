---
id: a10d2431ad0c6a099a4b8b52
title: Todo sea verdad
challengeType: 1
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

Comprueba si el predicado (segundo argumento) es <dfn>truthy</dfn> en todos los elementos de una colección (primer argumento).

En otras palabras, se te da una colección de arreglos de objetos. El predicado `pre` será una propiedad del objeto y debe devolver `true` si su valor es `truthy`. De lo contrario, devuelve `false`.

En JavaScript, los valores `truthy` son valores que se traducen en `true` cuando se evalúan en un contexto booleano.

Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes `[]`.

# --hints--

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")` debe devolver `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "isBot"), false);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")` debe devolver `true`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "name"), true);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")` debe devolver `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "role"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")` debe devolver `true`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
  ],
  "number"), true);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught")` debe devolver `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "caught"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number")` debe devolver `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "number"), false);
```

`truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username")` debe devolver `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", username: "QuincyLarson" },
    { name: "Naomi", username: "nhcarrigan" },
    { name: "Camperbot" }
  ],
  "username"), false);
```

`truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")` debe devolver `true`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data")` debe devolver `true`.

```js
assert.strictEqual(truthCheck(
  [
    { id: 1, data: { url: "https://www.freecodecamp.org", name: "freeCodeCamp" } },
    { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } },
    { id: null, data: {} },
  ],
  "data"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id")` debe devolver `false`.

```js
assert.strictEqual(truthCheck(
  [
    { id: 1, data: { url: "https://www.freecodecamp.org", name: "freeCodeCamp" } },
    { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } },
    { id: null, data: {} },
  ],
  "id"), false);
```

# --seed--

## --seed-contents--

```js
function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
```

# --solutions--

```js
function truthCheck(collection, pre) {
  return collection.every(function(e) { return e[pre]; });
}
```
