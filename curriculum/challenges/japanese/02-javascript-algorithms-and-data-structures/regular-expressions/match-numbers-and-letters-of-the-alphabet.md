---
id: 587d7db5367417b2b2512b97
title: 数字とアルファベットの文字にマッチさせる
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

ハイフン (`-`) を使用した文字の範囲のマッチは英文字に限定されません。 数字の範囲のマッチでも有効です。

たとえば、`/[0-5]/` は `0` ～ `5` の間の任意の数字 (`0` と `5` を含む) にマッチします。

また、英文字と数字の範囲を単一の文字セットに組み合わせることも可能です。

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

`h` ～ `s` の文字範囲と `2` ～ `6` の数字範囲にマッチする単一の正規表現を作成してください。 正規表現に適切なフラグを含めることを忘れないでください。

# --hints--

正規表現 `myRegex` は 17 個のアイテムにマッチする必要があります。

```js
assert(result.length == 17);
```

正規表現 `myRegex` でグローバルフラグを使用する必要があります。

```js
assert(myRegex.flags.match(/g/).length == 1);
```

正規表現 `myRegex` で大文字小文字を区別しないフラグを使用する必要があります。

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
