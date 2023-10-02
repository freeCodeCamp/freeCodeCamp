---
id: 587d7db3367417b2b2512b8f
title: リテラル文字列にマッチさせる
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

前回のチャレンジでは、正規表現 `/Hello/` を使用して `Hello` という単語を検索しました。 その正規表現は文字列 `Hello` のリテラルマッチ (記述した文字のとおりのマッチ) を検索しました。 ここでは、文字列 `Kevin` のリテラルマッチを検索する別の例を紹介します。

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

この `test` 呼び出しは `true` を返します。

`Kevin` の他の形式にはマッチしません。 たとえば、正規表現 `/Kevin/` は `kevin` または `KEVIN` にはマッチしません。

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

この `test` 呼び出しは `false` を返します。

以降のチャレンジでは、これらの他の形式にもマッチする方法を紹介します。

# --instructions--

正規表現 `waldoRegex` を完成させて、文字列 `waldoIsHiding` にある `"Waldo"` をリテラルマッチで検索してください。

# --hints--

正規表現 `waldoRegex` で文字列 `Waldo` を見つける必要があります。

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

正規表現 `waldoRegex` では他に何も検索しないでください。

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

正規表現でリテラル文字列のマッチを実行する必要があります。

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
