---
id: a77dbc43c33f39daa4429b4f
title: Boo wer?
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Überprüfe, ob ein Wert als primitiver Boolean deklariert ist. Gib `true` (wahr) oder `false` (falsch) zurück.

Primitive boolesche Werte umfassen `true` und `false`.

# --hints--

`booWho(true)` soll `true` zurückgeben.

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` soll `true` zurückgeben.

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` soll `false` zurückgeben.

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` soll `false` zurückgeben.

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` soll `false` zurückgeben.

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` soll `false` zurückgeben.

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` soll `false` zurückgeben.

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` soll `false` zurückgeben.

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` soll `false` zurückgeben.

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` soll `false` zurückgeben.

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
