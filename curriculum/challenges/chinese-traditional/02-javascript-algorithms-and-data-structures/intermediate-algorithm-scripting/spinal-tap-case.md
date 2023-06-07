---
id: a103376db3ba46b2d50db289
title: 短線連接格式
challengeType: 1
forumTopicId: 16078
dashedName: spinal-tap-case
---

# --description--

將字符串轉換爲短線連接格式。 短線連接格式是小寫單詞全部小寫並以破折號分隔。

# --hints--

`spinalCase("This Is Spinal Tap")` 應返回 `this-is-spinal-tap`。

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` 應返回 `this-is-spinal-tap`。

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` 應返回 `the-andy-griffith-show`。

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` 應返回 `teletubbies-say-eh-oh`。

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` 應返回 `all-the-small-things`。

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
