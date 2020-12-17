---
id: ab306dbdcc907c7ddfc30830
title: 扁平化
challengeType: 5
forumTopicId: 16079
---

# --description--

在这道题目中，我们需要写一个数组扁平化的函数。

如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`steamrollArray([[['a']], [['b']]])`应该返回`['a', 'b']`。

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])`应该返回`[1, 2, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])`应该返回`[1, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])`应该返回`[1, {}, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

# --solutions--

