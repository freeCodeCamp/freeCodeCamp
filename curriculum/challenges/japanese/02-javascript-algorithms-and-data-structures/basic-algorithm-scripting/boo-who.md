---
id: a77dbc43c33f39daa4429b4f
title: ブール型の確認
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

値がブールプリミティブとして分類されるかどうかを確認してください。 `true` または `false` を返してください。

ブールプリミティブは `true` および `false` です。

# --hints--

`booWho(true)` は `true` を返す必要があります。

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` は `true` を返す必要があります。

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` は `false` を返す必要があります。

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` は `false` を返す必要があります。

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` は `false` を返す必要があります 。

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` は `false` を返す必要があります。

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` は `false` を返す必要があります。

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` は `false` を返す必要があります。

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` は `false` を返す必要があります。

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` は `false` を返す必要があります。

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
