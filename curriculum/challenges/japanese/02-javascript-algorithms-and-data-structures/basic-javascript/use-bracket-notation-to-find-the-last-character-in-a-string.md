---
id: bd7123c9c451eddfaeb5bdef
title: ブラケット記法を使用して文字列の最後の文字を取得する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

文字列の最後の文字を取得するには、文字列の長さから 1 を引きます。

たとえば、`const firstName = "Ada"` の場合は、`firstName[firstName.length - 1]` とすることでこの文字列の最後の文字の値を取得できます。

例:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` の値は文字列 `a` となります。

# --instructions--

<dfn>ブラケット記法</dfn>を使用して、`lastName` 変数 の最後の文字を取得してください。

**ヒント:** 解答できない場合は上記の例を参考にしてください。

# --hints--

`lastLetterOfLastName` は文字 `e` となる必要があります。

```js
assert(lastLetterOfLastName === 'e');
```

`.length` を使用して、最後の文字を取得する必要があります。

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```
