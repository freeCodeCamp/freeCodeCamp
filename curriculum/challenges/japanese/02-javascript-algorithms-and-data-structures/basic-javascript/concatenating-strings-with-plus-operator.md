---
id: 56533eb9ac21ba0edf2244b7
title: 文字列をプラス演算子で連結する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

JavaScript では、`+` 演算子を `String` の値に対して使用する場合、その演算子のことを<dfn>連結</dfn>演算子と呼びます。 他の文字列を一緒に<dfn>連結する</dfn>ことで新しい文字列を作ることができます。

**例**

```js
'My name is Alan,' + ' I concatenate.'
```

**注:** 空白が必要な場合は注意してください。 連結では、文字列の間に空白が追加されないため、必要な場合は自分で付け加える必要があります。

例:

```js
const ourStr = "I come first. " + "I come second.";
```

コンソールに、文字列 `I come first. I come second.` が表示されます。
# --instructions--

`+` 演算子を使用して、文字列 `This is the start.` と `This is the end.` から `myStr` を作成してください。 2 つの文字列の間に空白を必ず含めるようにしてください。

# --hints--

`myStr` は、2 つの文字列の間に空白文字を含む必要があります。

```js
assert(/start\. This/.test(myStr));
```

`myStr` は、文字列の値 `This is the start. This is the end.` を持つ必要があります。

```js
assert(myStr === 'This is the start. This is the end.');
```

`+` 演算子を使用して `myStr` を作成する必要があります。

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`const` キーワードを使用して `myStr` を作成する必要があります。

```js
assert(/const\s+myStr/.test(code));
```

結果を `myStr` 変数に代入する必要があります。

```js
assert(/myStr\s*=/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```
