---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
challengeType: 1
forumTopicId: 16078
dashedName: spinal-tap-case
---

# --description--

Converti una stringa in spinal case. Spinal case è composto di tutte-parole-minuscole-unite-da-trattini.

# --hints--

`spinalCase("This Is Spinal Tap")` dovrebbe restituire la stringa `this-is-spinal-tap`.

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` dovrebbe restituire la stringa `this-is-spinal-tap`.

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` dovrebbe restituire la stringa `the-andy-griffith-show`.

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` dovrebbe restituire la stringa `teletubbies-say-eh-oh`.

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` dovrebbe restituire la stringa `all-the-small-things`.

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
