---
id: a77dbc43c33f39daa4429b4f
title: Хто такий Boo
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Перевірте, чи значення відноситься булевого тиру (логічне значення). Функція має повертати `true` or `false`.

Булеві примітиви - це коди `true` правда та `false` неправда.

# --hints--

`booWho(true)` повинен повертати `true`.

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` повинен повертати `true`.

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` повинен повертати `false`.

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` повинен повертати `false`.

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` повинен повертати `false`.

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` повинен повертати `false`.

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` повинен повертати `false`.

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` повинен повертати `false`.

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` повинен повертати `false`.

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` повинен повертати `false`.

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
