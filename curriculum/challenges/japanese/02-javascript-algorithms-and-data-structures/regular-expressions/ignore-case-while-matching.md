---
id: 587d7db4367417b2b2512b91
title: マッチングでケースを無視する (大文字と小文字を区別しない)
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

ここまで、文字列のリテラルな (文字のとおりの) マッチを行う正規表現を見てきました。 しかし、場合によっては大文字と小文字の違いにかかわらずマッチさせたいことがあります。

英語で大文字と小文字の違いのことをケース (またはレターケース) と呼びます。 大文字の例としては、`A`、`B`、`C` があります。 小文字の例としては、`a`、`b`、`c` があります。

フラグと呼ばれるものを使用して、両方のケースにマッチさせることができます。 フラグは他にもありますが、ここでの主役はケースを無視するフラグである `i` フラグです。 これを正規表現の末尾に付けて使用できます。 このフラグを使用する例として、`/ignorecase/i` があります。 この正規表現は文字列 `ignorecase`、`igNoreCase`、および `IgnoreCase` にマッチします。

# --instructions--

ケースに関係なく `freeCodeCamp` にマッチする正規表現 `fccRegex` を記述してください。 正規表現は省略形やスペース付きのバリエーションにマッチさせないでください。

# --hints--

正規表現は文字列 `freeCodeCamp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

正規表現は文字列 `FreeCodeCamp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

正規表現は文字列 `FreecodeCamp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

正規表現は文字列 `FreeCodecamp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

正規表現は文字列 `Free Code Camp` にマッチしない必要があります。

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

正規表現は文字列 `FreeCOdeCamp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

正規表現は文字列 `FCC` にマッチしない必要があります。

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

正規表現は文字列 `FrEeCoDeCamp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

正規表現は文字列 `FrEeCodECamp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

正規表現は文字列 `FReeCodeCAmp` にマッチする必要があります。

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```
