---
id: 56533eb9ac21ba0edf2244c0
title: 関数のグローバルスコープとローカルスコープ
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

<dfn>ローカル</dfn>変数と<dfn>グローバル</dfn>変数で同じ名前を使用することが可能です。 その場合は、ローカル変数がグローバル変数よりも優先されます。

次の例を見てみましょう。

```js
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
```

ローカルの変数が存在するため、関数 `myFun` は文字列 `Head` を返します。

# --instructions--

`myOutfit` 関数にローカル変数を追加し、 `outerWear` の値を文字列 `sweater`で上書きしてください。

# --hints--

グローバルの `outerWear` の値を変更してはいけません。

```js
assert(outerWear === 'T-Shirt');
```

`myOutfit` は文字列 `sweater` を返す必要があります。

```js
assert(myOutfit() === 'sweater');
```

return ステートメントを変更してはいけません。

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
```
