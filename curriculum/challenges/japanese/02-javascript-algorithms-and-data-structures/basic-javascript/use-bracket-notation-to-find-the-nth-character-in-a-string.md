---
id: bd7123c9c450eddfaeb5bdef
title: ブラケット記法を使用して文字列の N 番目の文字を取得する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

<dfn>ブラケット記法</dfn>を使用して、文字列内の他の位置の文字を取得することもできます。

コンピューターでは `0` から数え始めることに注意してください。つまり、最初の文字は実際にはゼロ番目の文字になります。

例:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` の値は文字列 `d` となります。

# --instructions--

ブラケット記法を使用して、`lastName` 変数の 3 番目の文字と等しくなるように、`thirdLetterOfLastName` を設定してみましょう。

**ヒント:** 解答できない場合は上記の例を参考にしてください。

# --hints--

`thirdLetterOfLastName` 変数の値は `v` となる必要があります。

```js
assert(thirdLetterOfLastName === 'v');
```

ブラケット記法を使用してください。

```js
assert(code.match(/thirdLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```
