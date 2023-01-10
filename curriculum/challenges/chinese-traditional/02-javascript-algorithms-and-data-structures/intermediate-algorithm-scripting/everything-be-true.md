---
id: a10d2431ad0c6a099a4b8b52
title: 一切都是True
challengeType: 1
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

檢查謂詞（第二個參數）在集合（第一個參數）的所有元素是否爲 <dfn>truthy</dfn>。

換句話說，你將獲得一個對象的數組集合。 如果數組中的每個對象裏，`pre` 對應屬性值均爲 `truthy`，則返回 `true`。 否則，返回 `false` 。

JavaScript 中，如果一個值在 Boolean 的上下文中的執行結果爲 `true`，那麼我們稱這個值是 `truthy` 的。

別忘了，你可以使用點號表示法或方括號表示法（`[]`）來訪問對象的屬性。

# --hints--

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")` 應該返回 `false`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "isBot"), false);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")` 應該返回 `true`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "name"), true);
```

`truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")` 應該返回 `false`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "role"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")` 應該返回 `true`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
  ],
  "number"), true);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught")` 應該返回 `false`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "caught"), false);
```

`truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number")` 應該返回 `false`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "number"), false);
```

`truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username")` 應該返回 `false`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "Quincy", username: "QuincyLarson" },
    { name: "Naomi", username: "nhcarrigan" },
    { name: "Camperbot" }
  ],
  "username"), false);
```

`truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")` 應該返回 `true`。

```js
assert.strictEqual(truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data")` 應該返回 `true`。

```js
assert.strictEqual(truthCheck(
  [
    { id: 1, data: { url: "https://www.freecodecamp.org", name: "freeCodeCamp" } },
    { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } },
    { id: null, data: {} },
  ],
  "data"), true);
```

`truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id")` 應該返回 `false`。

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
