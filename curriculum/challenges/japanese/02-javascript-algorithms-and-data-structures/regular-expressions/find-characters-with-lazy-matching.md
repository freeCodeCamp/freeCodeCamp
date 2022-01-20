---
id: 587d7db6367417b2b2512b9b
title: 怠惰なマッチングで文字を検索する
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

正規表現では、<dfn>貪欲な</dfn>マッチは、正規表現パターンに合致した文字列の中で可能な限り最も長い部分を見つけ、それをマッチとして返します。 別の方法として<dfn>怠惰な</dfn>マッチと呼ばれるものがあり、これは正規表現パターンを満たす文字列の中で可能な限り最も短い部分を見つけます。

たとえば正規表現 `/t[a-z]*i/` を文字列 `"titanic"` に適用してみましょう。 この正規表現は基本的には、`t` で始まり、`i` で終わり、その間にいくつかの文字があるパターンです。

正規表現はデフォルトでは貪欲モードなので、マッチは `["titani"]` を返します。 つまり、パターンに合致する最も長い部分文字列を見つけます。

一方で、`?` 文字を使用して怠惰なマッチングに変更することができます。 修正後の正規表現 `/t[a-z]*?i/` に対して `"titanic"` を適用すると、マッチとして `["ti"]` を返します。

**注:** HTML を正規表現で解析することは避けるべきですが、正規表現を使用した HTML 文字列のパターンマッチングはまったく問題ありません。

# --instructions--

正規表現 `/<.*>/` を修正して、テキスト `"<h1>Winter is coming</h1>"` ではなく、HTML タグ `<h1>` を返すようにしてください。 正規表現のワイルドカード `.` は任意の文字にマッチすることを覚えておいてください。

# --hints--

`result` 変数は `<h1>` を含む配列になる必要があります。

```js
assert(result[0] == '<h1>');
```

`myRegex` で怠惰なマッチングを使用する必要があります。

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` に文字列 `h1` を含めないでください。

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
