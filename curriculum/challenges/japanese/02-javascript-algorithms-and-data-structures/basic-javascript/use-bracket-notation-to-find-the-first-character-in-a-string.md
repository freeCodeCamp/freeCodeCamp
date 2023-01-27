---
id: bd7123c9c549eddfaeb5bdef
title: ブラケット記法を使用して文字列の最初の文字を取得する
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>ブラケット記法</dfn>を使用すると、文字列内の特定のインデックスにある文字を取得できます。

JavaScript をはじめとする現代のほとんどのプログラミング言語では、人間のように 1 から数え始めることをせず、 0 から数え始めます。 これを<dfn>ゼロベースの</dfn>インデックスといいます。

たとえば、`Charles` という単語のインデックス 0 の文字は `C` です。 したがって、`const firstName = "Charles"` とした場合は、`firstName[0]` とすることでこの文字列の 1 文字目の値を取得できます。

例:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` の値は文字列 `C` となります。

# --instructions--

ブラケット記法を使用して、`lastName` 変数の 1 文字目を取得し、それを `firstLetterOfLastName` に代入してください。

**ヒント:** 解答できない場合は上記の例を参考にしてください。

# --hints--

`firstLetterOfLastName` 変数の値は `L` となる必要があります。

```js
assert(firstLetterOfLastName === 'L');
```

ブラケット記法を使用してください。

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
