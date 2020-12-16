---
id: a3566b1109230028080c9345
title: 范围内的数字求和
challengeType: 5
forumTopicId: 16083
---

# --description--

给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。

例如，`sumAll([4,1])` 应该返回 `10`，因为从 1 到 4 （包含 1、4）的所有数字的和是 `10`。

如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`sumAll([1, 4])`应该返回一个数字。

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])`应该返回 10。

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])`应该返回 10。

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])`应该返回 45。

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])`应该返回 45。

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --solutions--

