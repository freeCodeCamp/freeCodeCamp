---
id: 587d7dba367417b2b2512ba9
title: 肯定先読みと否定先読み
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>先読み</dfn>とは、文字列の先頭から調べるように JavaScript に指示するパターンです。 これは、同じ文字列で複数のパターンを検索する場合に便利です。

先読みには<dfn>肯定先読み</dfn>と<dfn>否定先読み</dfn>の 2 種類があります。

肯定先読みは、検索パターン内に要素が存在することを確認しますが、実際にはマッチさせません。 肯定先読みは、`(?=...)` として使用します。ここで `...` は、必要ですがマッチさせない部分です。

一方、否定先読みは、検索パターン内に要素が存在しないことを確認します。 否定先読みは、`(?!...)` として使用します。ここで `...` は、そこで必要としていないパターンです。 否定先読みの部分が存在しない場合は、パターンの残りの部分が返されます。

先読みは少しわかりにくいですが、いくつか役に立つ例もあります。

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

これらの `match` 呼び出しはどちらも `["q"]` を返します。

より実用的な用法として、先読みを使用して 1 つの文字列の中で 2 つ以上のパターンをチェックすることができます。 次に示すのは、3 文字から 6 文字までの文字と、少なくとも 1 つの数字を探す、ごく単純なパスワードチェッカーの例です。

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

`pwRegex` で先読みを使用して、5 文字を超える長さがあり、2 つの連続した数字を含むパスワードにマッチさせてください。

# --hints--

正規表現で肯定先読み``を 2 つ使用する必要があります。

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

正規表現は文字列 `astronaut` にマッチしない必要があります。

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

正規表現は文字列 `banan1` にマッチしない必要があります。

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

正規表現は文字列 `bana12` にマッチする必要があります。

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

正規表現は文字列 `abc123` にマッチする必要があります。

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

正規表現は文字列 `12345` にマッチしない必要があります。

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

正規表現は文字列 `8pass99` にマッチする必要があります。

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

正規表現は文字列 `1a2bcde` にマッチしない必要があります。

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

正規表現は文字列 `astr1on11aut` にマッチする必要があります。

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
