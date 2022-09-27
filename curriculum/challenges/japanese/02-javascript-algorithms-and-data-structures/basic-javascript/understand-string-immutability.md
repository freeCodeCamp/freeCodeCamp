---
id: 56533eb9ac21ba0edf2244ba
title: 文字列の不変性を理解する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

JavaScript では、`String` の値は<dfn>イミュータブル</dfn>です。つまり、作成後に変更することはできません。

たとえば次のコードは、文字列 `Bob` 内の文字 `B` を文字 `J` に変更できないため、エラーが発生します。

```js
let myStr = "Bob";
myStr[0] = "J";
```

ただし、これは `myStr` に再代入できないという意味では*ありません*。 `myStr` を変更する唯一の方法は、次のように新しい値を代入することです。

```js
let myStr = "Bob";
myStr = "Job";
```

# --instructions--

上の例で説明したアプローチに従って、文字列 `Hello World` を値として含むよう、`myStr` への代入を修正してください。

# --hints--

`myStr` の値は文字列 `Hello World` になる必要があります。

```js
assert(myStr === 'Hello World');
```

指定のコメントより上にあるコードを変更しないでください。

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
let myStr = "Jello World";
myStr = "Hello World";
```
