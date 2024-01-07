---
id: 587d7db7367417b2b2512b9e
title: 末尾の文字列パターンにマッチさせる
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

前回のチャレンジでは、キャレット文字を使用して文字列の先頭にあるパターンを検索することを学びました。 文字列の末尾でパターンを検索する方法もあります。

正規表現の末尾でドル記号 `$` を使用すると、文字列の末尾を検索できます。

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

最初の `test` 呼び出しは `true` を返し、2 番目の呼び出しは `false` を返します。

# --instructions--

アンカー文字 (`$`) を使用して、文字列 `caboose` の末尾にある文字列 `caboose` にマッチさせてください。

# --hints--

正規表現で末尾にドル記号 `$` を使用して `caboose` を検索する必要があります。

```js
assert(lastRegex.source == 'caboose$');
```

正規表現でフラグを使用しないでください。

```js
assert(lastRegex.flags == '');
```

文字列 `The last car on a train is the caboose` の末尾にある `caboose` にマッチさせる必要があります。

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
