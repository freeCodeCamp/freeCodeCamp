---
id: bd7123c9c452eddfaeb5bdef
title: ブラケット記法を使用して文字列の最後から N 番目の文字を取得する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

文字列の最後の文字を取得する場合に使用したものと同じ手法で、最後から N 番目の文字を取得することができます。

たとえば、`const firstName = "Augusta"` という文字列の最後から 3 番目の文字の値を取得するには、`firstName[firstName.length - 3]` と記述します。

例:

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` の値は文字列 `s` となります。

# --instructions--

<dfn>ブラケット記法</dfn>を使用して、`lastName` 文字列の最後から 2 番目の文字を取得してください。

**ヒント:** 解答できない場合は上記の例を参考にしてください。

# --hints--

`secondToLastLetterOfLastName` は文字 `c` となる必要があります。

```js
assert(secondToLastLetterOfLastName === 'c');
```

`.length` を使用して、最後から 2 番目の文字を取得する必要があります。

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
