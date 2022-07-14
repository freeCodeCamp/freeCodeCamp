---
id: adf08ec01beb4f99fc7a68f2
title: 偽値用心棒
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

すべての偽値を配列から取り除いてください。

JavaScriptにおける偽値とは、`false`、`null`、`0`、`""`、`undefined`、そして `NaN` です。

ヒント: それぞれの値をブール値に変換してみてください。

# --hints--

`bouncer([7, "ate", "", false, 9])` は `[7, "ate", 9]` を返す必要があります。

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` は `["a", "b", "c"]` を返す必要があります。

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` は `[]` を返す必要があります。

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` は `[1, 2]` を返す必要があります。

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
