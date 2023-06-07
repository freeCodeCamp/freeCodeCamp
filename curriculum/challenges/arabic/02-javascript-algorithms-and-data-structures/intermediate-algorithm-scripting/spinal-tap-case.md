---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
challengeType: 1
forumTopicId: 16078
dashedName: spinal-tap-case
---

# --description--

قم بتحويل سلسلة إلى حالة spinal. الحالة spinal هي "all-lowercase-words-joined-by-dashes" كلمات بحروف صغيرة تفصل بشرطة.

# --hints--

`spinalCase("This Is Spinal Tap")` يجب أن يعيد السلسلة `this-is-spinal-tap`.

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` يجب أن يعيد السلسلة `this-is-spinal-tap`.

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` يجب أن يعيد السلسلة `the-andy-griffith-show`.

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` يجب أن يعيد السلسلة `teletubbies-say-eh-oh`.

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` يجب أن يعيد السلسلة `all-the-small-things`.

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
