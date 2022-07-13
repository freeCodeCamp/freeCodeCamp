---
id: 56533eb9ac21ba0edf2244c4
title: 関数を早めに return させる
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

`return` ステートメントに達すると、現在の関数の実行が停止し、元の呼び出し場所に制御が戻ります。

**例**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

上記は文字列 `Hello` をコンソールに表示し、文字列 `World` を返します。 `return` ステートメントで関数が終了するため、文字列 `byebye` がコンソールに表示されることはありません。

# --instructions--

関数 `abTest` を変更して、`a` または `b` が `0` より小さい場合に関数が `undefined` の値を返して直ちに終了するようにしてください。

**ヒント**  
<a href="https://www.freecodecamp.org/japanese/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> はキーワード</a>であって、文字列ではないことに注意してください。

# --hints--

`abTest(2, 2)` は数値を返す必要があります。

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` は `8` を返す必要があります。

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` は `undefined` を返す必要があります。

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` は `undefined` を返す必要があります。

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` は `18` を返す必要があります。

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` は `12` を返す必要があります。

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` は `0` を返す必要があります。

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
