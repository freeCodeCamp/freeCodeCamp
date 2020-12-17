---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 5
videoUrl: ''
---

# --description--

从数组中删除所有有价值的值。 JavaScript中的Falsy值为`false` ， `null` ， `0` ， `""` ， `undefined`和`NaN` 。提示：尝试将每个值转换为布尔值。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`bouncer([7, "ate", "", false, 9])`应该返回`[7, "ate", 9]` 。

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])`应返回`["a", "b", "c"]` 。

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])`应返回`[]` 。

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([1, null, NaN, 2, undefined])`应该返回`[1, 2]` 。

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

# --solutions--

