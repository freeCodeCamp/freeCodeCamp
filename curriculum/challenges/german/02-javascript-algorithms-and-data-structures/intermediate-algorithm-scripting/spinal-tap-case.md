---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
challengeType: 1
forumTopicId: 16078
dashedName: spinal-tap-case
---

# --description--

Konvertiere einen String in Spinal Case. Spinal Case sind Wörter in Kleinbuchstaben, die durch Bindestriche verbunden sind.

# --hints--

`spinalCase("This Is Spinal Tap")` sollte den String `this-is-spinal-tap` zurückgeben.

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` sollte den String `this-is-spinal-tap` zurückgeben.

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` sollte den String `the-andy-griffith-show` zurückgeben.

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` sollte den String `teletubbies-say-eh-oh` zurückgeben.

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` sollte den String `all-the-small-things` zurückgeben.

```js
assert.strictEqual(spinalCase('AllThe-small Things'), 'all-the-small-things');
```

# --seed--

## --seed-contents--

```js
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
```

# --solutions--

```js
function spinalCase(str) {
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```
