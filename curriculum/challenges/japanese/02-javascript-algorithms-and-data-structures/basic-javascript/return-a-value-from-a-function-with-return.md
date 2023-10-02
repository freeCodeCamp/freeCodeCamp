---
id: 56533eb9ac21ba0edf2244c2
title: return で関数から値を返す
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

関数に値を渡すには<dfn>引数</dfn>を使用します。 関数から値を返すには `return` ステートメントを使用します。

**例**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` の値は `8` になります。

`plusThree` は、`num` を<dfn>引数</dfn>として受け取り、`num + 3` に等しい値を返します。

# --instructions--

引数を 1 つ受け取り、引数に `5` を掛けた新しい値を返す関数 `timesFive` を作成してください。

# --hints--

`timesFive` は関数である必要があります。

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` は `25` を返す必要があります。

```js
assert(timesFive(5) === 25);
```

`timesFive(2)` は `10` を返す必要があります。

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` は `0` を返す必要があります。

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
