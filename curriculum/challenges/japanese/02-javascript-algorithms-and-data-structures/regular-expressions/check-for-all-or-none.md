---
id: 587d7dba367417b2b2512ba8
title: 存在するかしないかをチェックする
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

検索したいパターンの中に、存在するかどうかがわからない部分が含まれている場合があります。 しかし、そうした場合でも存在の有無をチェックすることが重要なことがあります。

クエスチョンマーク `?` を使用すると、要素の存在の可能性を指定できます。 これは、直前の要素が 0 個か 1 個かをチェックします。 この記号は、前の要素が省略可能であるとみなすことができます。

たとえば、アメリカ英語とイギリス英語には若干の違いがあり、クエスチョンマークを使用して両方のスペルにマッチすることができます。

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

どちらの `test` メソッドも `true` を返します。

# --instructions--

正規表現の `favRegex` を変更して、アメリカ英語 (`favorite`) とイギリス英語 (`favourite`) の両方の単語にマッチするようにしてください。

# --hints--

正規表現にはオプション記号 `?` を使用してください。

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

正規表現は文字列 `favorite` にマッチする必要があります。

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

正規表現は文字列 `favourite` にマッチする必要があります。

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

正規表現は文字列 `fav` にマッチしないようにする必要があります。

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
