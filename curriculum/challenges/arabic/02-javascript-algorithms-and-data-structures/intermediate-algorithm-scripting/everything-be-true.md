---
id: a10d2431ad0c6a099a4b8b52
title: كل شيء كن صحيح (Everything Be True)
challengeType: 1
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

تحقق مما إذا كان المعطى (argument) الثاني <dfn>صحيح (truthy)</dfn> على جميع عناصر المجموعة (المعطى الأول).

بمعنى آخر، يتم إعطاؤك قائمة (array) لمجموعة من الكائنات (objects). سيكون المسند `pre` خاصية للـ object وتحتاج إلى إرجاع `true` إذا كانت قيمته `truthy`. خلاف ذلك، قم بإرجاع `false`.

في Javascript، القيم `truthy` هي القيم التي تترجم إلى `true` عند تقييمها في سياق منطقي (Boolean).

تذكر، يمكنك الوصول إلى خصائص الـ object إما من خلال علامة النقطة أو علامة القوسين `[]`.

# --hints--

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")` يجب أن يرجع `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "isBot"), false);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")` يجب أن يرجع `true`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "name"), true);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")` يجب أن يرجع `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "role"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")` يجب أن يرجع `true`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
  ],
  "number"), true);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught")` يجب أن يرجع `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "caught"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number")` يجب أن يرجع `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "number"), false);
```

`truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username")` يجب أن يرجع `false`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", username: "QuincyLarson" },
    { name: "Naomi", username: "nhcarrigan" },
    { name: "Camperbot" }
  ],
  "username"), false);
```

`truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")` يجب أن يرجع `true`.

```js
assert.strictEqual(truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data")` يجب أن يرجع `true`.

```js
assert.strictEqual(truthCheck(
  [
    { id: 1, data: { url: "https://www.freecodecamp.org", name: "freeCodeCamp" } },
    { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } },
    { id: null, data: {} },
  ],
  "data"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id")` يجب أن يرجع `false`.

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
