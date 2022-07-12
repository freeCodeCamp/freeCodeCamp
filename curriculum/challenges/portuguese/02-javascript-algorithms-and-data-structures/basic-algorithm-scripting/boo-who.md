---
id: a77dbc43c33f39daa4429b4f
title: Identificar verdadeiro ou falso
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Verifique se um valor é classificado como booleano primitivo. Retorna `true` ou `false`.

Os booleanos primitivos são `true` e `false`.

# --hints--

`booWho(true)` deve retornar `true`.

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` deve retornar `true`.

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1,2,3])` deve retornar `false`.

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` deve retornar `false`.

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({"a": 1})` deve retornar `false`.

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` deve retornar `false`.

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` deve retornar `false`.

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` deve retornar `false`.

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` deve retornar `false`.

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` deve retornar `false`.

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
