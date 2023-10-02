---
id: a77dbc43c33f39daa4429b4f
title: Boo who
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Controllare se un valore è un classificato come primitivo booleano. Restituisce `true` o `false`.

I primitivi booleani sono `true` e `false`.

# --hints--

`booWho(true)` dovrebbe restituire `true`.

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` dovrebbe restituire `true`.

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` dovrebbe restituire `false`.

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` dovrebbe restituire `false`.

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` dovrebbe restituire `false`.

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` dovrebbe restituire `false`.

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` dovrebbe restituire `false`.

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` dovrebbe restituire `false`.

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` dovrebbe restituire `false`.

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` dovrebbe restituire `false`.

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
