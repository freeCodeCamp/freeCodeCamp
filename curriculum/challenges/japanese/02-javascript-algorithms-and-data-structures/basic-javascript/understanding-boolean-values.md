---
id: bd7123c9c441eddfaeb5bdef
title: ブール値を理解する
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

別のデータ型として<dfn>ブール値 (Boolean)</dfn> 型があります。 ブール値型は `true` または `false` のいずれか 1 つの値しか取りません。 基本的にはちょっとしたオン/オフスイッチとみなすことができ、`true` をオンに、`false` をオフに対応させることができます。 これら 2 つの状態は相互排他的です。

**注:** ブール値は引用符を付けて記述されることはありません。 文字列の `"true"` と `"false"` は ブール値ではなく、JavaScript では特別な意味を持ちません。

# --instructions--

Modify the `welcomeToBooleans` function so that it returns `true` instead of `false`.

# --hints--

`welcomeToBooleans()` 関数はブール値 (`true` または `false`) を返す必要があります。

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` は `true` を返す必要があります。

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
