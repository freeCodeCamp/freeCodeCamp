---
id: a10d2431ad0c6a099a4b8b52
title: すべてが True かどうか
challengeType: 1
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

コレクションのすべての要素 (最初の引数) について述語 (2 番目の引数) が <dfn>truthy</dfn> (真値) かどうかを確認します。

言い換えれば、まず、オブジェクトの配列のコレクションが与えられます。 述語 `pre` はオブジェクトのプロパティになり、値が `truthy` の場合は `true` を返す必要があり、 それ以外の場合は `false` を返す必要があります。

JavaScript では、`truthy` な値 (真値) とは、ブール値のコンテキストで評価されたときに `true` に変換される値のことです。

オブジェクトのプロパティにアクセスするには、ドット表記または `[]` 表記のいずれかを使用できます。

# --hints--

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")` は `false` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "isBot"), false);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")` は `true` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "name"), true);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")` は `false` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "role"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")` は `true` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
  ],
  "number"), true);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught")` は `false` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "caught"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number")` は `false` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "number"), false);
```

`truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username")` は `false` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", username: "QuincyLarson" },
    { name: "Naomi", username: "nhcarrigan" },
    { name: "Camperbot" }
  ],
  "username"), false);
```

`truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")` は `true` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data")` は `true` を返す必要があります。

```js
assert.strictEqual(truthCheck(
  [
    { id: 1, data: { url: "https://www.freecodecamp.org", name: "freeCodeCamp" } },
    { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } },
    { id: null, data: {} },
  ],
  "data"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id")` は `false` を返す必要があります。

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
