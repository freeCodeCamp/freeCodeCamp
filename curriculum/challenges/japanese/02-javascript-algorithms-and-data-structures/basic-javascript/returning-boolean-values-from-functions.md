---
id: 5679ceb97cbaa8c51670a16b
title: 関数からブール値を返す
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

<a href="/japanese/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank" rel="noopener noreferrer nofollow">「等価演算子による比較」</a>で説明した通り、比較演算子はすべて、ブール値の `true` または `false` を返します。

次のように `if/else` ステートメントを使用して比較を行うこともできます。

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

しかし、もっと良い方法があります。 `===` は `true` または `false` を返すので、比較の結果をそのまま返すことができます。

```js
function isEqual(a, b) {
  return a === b;
}
```

# --instructions--

関数 `isLess` を修正して、`if/else` ステートメントを削除してください。

# --hints--

`isLess(10, 15)` は `true` を返す必要があります。

```js
assert(isLess(10, 15) === true);
```

`isLess(15, 10)` は `false` を返す必要があります。

```js
assert(isLess(15, 10) === false);
```

`if` ステートメントまたは `else` ステートメントを使用しないでください。

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
