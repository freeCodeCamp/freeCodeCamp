---
id: 5c3dda8b4d8df89bea71600f
title: 混在する文字のグループをチェックする
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

正規表現を使用して文字のグループをチェックするために、括弧 `()` を使用することがあります。

文字列の中から `Penguin` または `Pumpkin` のどちらかを見つけたい場合は、`/P(engu|umpk)in/g` という正規表現を使用できます。

次に、`test()` メソッドを使用して、必要な文字列グループがテスト文字列内にあるかどうかを確認してみます。

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

この `test` メソッドは `true` を返します。

# --instructions--

正規表現を修正して、`Franklin Roosevelt` または `Eleanor Roosevelt` の名前を、大文字小文字を区別してチェックしてください。ミドルネームについては容認してください。

次にコードを修正して、作成した正規表現を `myString` に対してチェックし、正規表現がマッチするかどうかに応じて `true` または `false` を返すようにしてください。

# --hints--

正規表現 `myRegex` は文字列 `Franklin D. Roosevelt` に対して `true` を返す必要があります。

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

正規表現 `myRegex` は文字列 `Eleanor Roosevelt` に対して `true` を返す必要があります。

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

正規表現 `myRegex` は文字列 `Franklin Rosevelt` に対して `false` を返す必要があります。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

正規表現 `myRegex` は文字列 `Frank Roosevelt` に対して `false` を返す必要があります。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

正規表現 `myRegex` は文字列 `FranklinRoosevelt` に対して `false` を返す必要があります。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

正規表現 `myRegex` は文字列 `EleanorRoosevelt` に対して `false` を返す必要があります。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

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
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
