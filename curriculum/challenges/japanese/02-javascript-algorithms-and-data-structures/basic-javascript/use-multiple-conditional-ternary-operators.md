---
id: 587d7b7e367417b2b2512b21
title: 複数条件 (三項) 演算子を使用する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

以前のチェレンジでは単一条件演算子を使用しました。 それらをまとめて、複数の条件をチェックすることもできます。

次の関数は `if` ステートメント、`else if` ステートメント、`else` ステートメントを使用して、複数の条件をチェックしています。

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

上記の関数は複数条件演算子を使用して書き換えることができます。

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

上記のように、各条件が別々の行となるように複数条件演算子を記述することをお勧めします。 適切なインデントを付けずに複数条件演算子を使用すると、コードが読みにくくなる可能性があります。 例:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

`checkSign` 関数内で複数条件演算子を使用して、数値が正か負かゼロかをチェックしてください (`findGreaterOrEqual` で推奨した記法に従ってください)。 この関数は、`positive`、`negative`、または `zero` を返す必要があります。

# --hints--

`checkSign` で複数条件演算子を使用する必要があります

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` は文字列 `positive` を返す必要があります。 大文字の記述が重要であることに注意してください。

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` は文字列 `negative` を返す必要があります。 大文字の記述が重要であることに注意してください。

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` は文字列 `zero` を返す必要があります。 大文字の記述が重要であることに注意してください。

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
