---
id: a77dbc43c33f39daa4429b4f
title: Бу, ти хто?
challengeType: 1
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Перевірте, чи значення належить до булевого примітивного. Поверніть `true` або `false`.

Булеві примітивні значення: `true` (правда) та `false` (брехня).

# --hints--

`booWho(true)` має повертати `true`.

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` має повертати `true`.

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` має повертати `false`.

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` має повертати `false`.

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` має повертати `false`.

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` має повертати `false`.

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` має повертати `false`.

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` має повертати `false`.

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` має повертати `false`.

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` має повертати `false`.

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
