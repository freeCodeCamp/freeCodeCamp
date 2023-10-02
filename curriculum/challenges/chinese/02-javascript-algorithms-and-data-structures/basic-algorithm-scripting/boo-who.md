---
id: a77dbc43c33f39daa4429b4f
title: 基本类型布尔值的检查
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

检查一个值是否是基本类型中的布尔值（boolean）类型。 函数应返回 `true` 或者 `false`。

基本类型中的布尔值为 `true` 或者 `false`。

# --hints--

`booWho(true)` 应返回 `true`。

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` 应该返回 `true`。

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` 应该返回 `false`。

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` 应该返回 `false`。

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` 应该返回 `false`。

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` 应该返回 `false`。

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` 应该返回 `false`。

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` 应该返回 `false`。

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` 应该返回 `false`。

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` 应该返回 `false`。

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
