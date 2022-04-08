---
id: a77dbc43c33f39daa4429b4f
title: Boo who
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Check if a value is classified as a boolean primitive. Return `true` or `false`.

Boolean primitives are `true` and `false`.

# --hints--

`booWho(true)` should return `true`.

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` should return `true`.

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` should return `false`.

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` should return `false`.

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` should return `false`.

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` should return `false`.

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` should return `false`.

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` should return `false`.

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` should return `false`.

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` should return `false`.

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
