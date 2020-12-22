---
id: a103376db3ba46b2d50db289
title: 短线连接格式
challengeType: 5
forumTopicId: 16078
---

# --description--

在这道题目中，我们需要写一个函数，把一个字符串转换为“短线连接格式”。短线连接格式的意思是，所有字母都是小写，且用`-`连接。比如，对于`Hello World`，应该转换为`hello-world`；对于`I love_Javascript-VeryMuch`，应该转换为`i-love-javascript-very-much`。

如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`spinalCase('This Is Spinal Tap')`应该返回`'this-is-spinal-tap'`。

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase('thisIsSpinalTap')`应该返回`'this-is-spinal-tap'`。

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase('The_Andy_Griffith_Show')`应该返回`'the-andy-griffith-show'`。

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase('Teletubbies say Eh-oh')`应该返回`'teletubbies-say-eh-oh'`。

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase('AllThe-small Things')`应该返回`'all-the-small-things'`。

```js
assert.strictEqual(spinalCase('AllThe-small Things'), 'all-the-small-things');
```

# --solutions--

