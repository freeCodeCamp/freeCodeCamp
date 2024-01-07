---
id: bd7123c9c444eddfaeb5bdef
title: 文字列変数を宣言する
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

前回は次のコードを使用して変数を宣言しました。

```js
var myName;
```

しかし、次のように文字列変数を宣言することもできます。

```js
var myName = "your name";
```

こうした `"your name"` のような文字列のことを<dfn>文字列</dfn><dfn>リテラル</dfn>と呼びます。 文字列リテラル (単に文字列とも呼びます) は、シングルクォートまたはダブルクォートで囲まれた 0 文字以上の一連の文字です。

# --instructions--

2 つの新しい文字列変数 `myFirstName` と `myLastName` を作成し、それらにあなたの名前と苗字をそれぞれ代入してください。

# --hints--

`myFirstName` は少なくとも 1 つの文字を含む文字列である必要があります。

```js
assert(
  (function () {
    if (
      typeof myFirstName !== 'undefined' &&
      typeof myFirstName === 'string' &&
      myFirstName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

`myLastName` はは少なくとも 1 つの文字を含む文字列である必要があります。

```js
assert(
  (function () {
    if (
      typeof myLastName !== 'undefined' &&
      typeof myLastName === 'string' &&
      myLastName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```
