---
id: a103376db3ba46b2d50db289
title: 短线连接格式
challengeType: 1
forumTopicId: 16078
dashedName: spinal-tap-case
---

# --description--

将字符串转换为短线连接格式。 短线连接格式是小写单词全部小写并以破折号分隔。

# --hints--

`spinalCase("This Is Spinal Tap")` 应返回 `this-is-spinal-tap`。

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` 应返回 `this-is-spinal-tap`。

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` 应返回 `the-andy-griffith-show`。

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` 应返回 `teletubbies-say-eh-oh`。

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` 应返回 `all-the-small-things`。

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
