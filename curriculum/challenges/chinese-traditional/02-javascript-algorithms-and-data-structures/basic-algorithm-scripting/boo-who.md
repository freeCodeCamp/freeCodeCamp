---
id: a77dbc43c33f39daa4429b4f
title: 基本類型布爾值的檢查
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

檢查一個值是否是基本類型中的布爾值（boolean）類型。 函數應返回 `true` 或者 `false`。

基本類型中的布爾值爲 `true` 或者 `false`。

# --hints--

`booWho(true)` 應返回 `true`。

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` 應該返回 `true`。

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` 應該返回 `false`。

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` 應該返回 `false`。

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` 應該返回 `false`。

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` 應該返回 `false`。

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` 應該返回 `false`。

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` 應該返回 `false`。

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` 應該返回 `false`。

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` 應該返回 `false`。

```js
assert.strictEqual(booWho('false'), false);
```

# --seed--

## --seed-contents--

```js
function booWho(bool) {
  return bool;
}

booWho(null);
```

# --solutions--

```js
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
```
