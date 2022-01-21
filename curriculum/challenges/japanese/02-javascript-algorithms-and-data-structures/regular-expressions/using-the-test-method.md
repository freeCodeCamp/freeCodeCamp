---
id: 587d7db3367417b2b2512b8e
title: test メソッドを使用する
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

正規表現は、プログラミング言語で文字列の一部分にマッチさせる場合に使用します。 その際、マッチングに役立つパターンを作成します。

文字列 `The dog chased the cat` で単語 `the` を見つけたい場合は、正規表現 `/the/` を使用できます。 正規表現の中では引用符は必須ではありません。

JavaScript では、正規表現を複数の方法で使用することができます。 正規表現をテストする方法の 1 つとして、`.test()` メソッドの使用があります。 `.test()` は正規表現を受け取り、それを (丸括弧内に配置された) 文字列に適用して、パターンが何かにマッチした場合は `true` を返し、何も見つからなかった場合は `false` を返します。

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

この `test` メソッドは `true` を返します。

# --instructions--

`.test()` メソッドを使用して、文字列 `myString` に正規表現 `myRegex` を適用してください。

# --hints--

`.test()` を使用して正規表現をテストする必要があります。

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

結果は `true` を返す必要があります。

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
