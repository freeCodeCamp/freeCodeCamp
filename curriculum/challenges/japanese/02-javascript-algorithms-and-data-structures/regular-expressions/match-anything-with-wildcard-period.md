---
id: 587d7db5367417b2b2512b94
title: ワイルドカードのピリオドを使用してあらゆるものにマッチさせる
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

パターンにある正確な文字がわからない (またはわかる必要がない) こともあります。 マッチするすべての単語を考えようとして、スペルミスをすると長い時間がかかってしまいます。 幸い、ワイルドカード文字 `.` を使用して時間を省くことができます。

ワイルドカード文字 `.` は任意の 1 文字にマッチします。 このワイルドカードは `dot` (ドット)、`period` (ピリオド) とも呼ばれます。 ワイルドカード文字も正規表現で他の文字とまったく同じように使用できます。 たとえば、`hug`、`huh`、`hut`、`hum` にマッチさせたい場合は、正規表現 `/hu./` を使用して 4 つの単語すべてにマッチさせることができます。

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

これらの `test` 呼び出しはどちらも `true` を返します。

# --instructions--

正規表現 `unRegex` を完成させて、文字列 `run`、`sun`、`fun`、`pun`、`nun`、`bun` にマッチさせてください。 正規表現ではワイルドカード文字を使用してください。

# --hints--

`.test()` メソッドを使用する必要があります。

```js
assert(code.match(/\.test\(.*\)/));
```

正規表現 `unRegex`でワイルドカード文字を使用する必要があります。

```js
assert(/\./.test(unRegex.source));
```

正規表現 `unRegex` は、文字列 `Let us go on a run.` の `run` にマッチする必要があります。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

正規表現 `unRegex` は、文字列 `The sun is out today.` の `sun` にマッチする必要があります。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

正規表現 `unRegex` は、文字列 `Coding is a lot of fun.` の `fun` にマッチする必要があります。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

正規表現 `unRegex` は、文字列 `Seven days without a pun makes one weak.` の `pun` にマッチする必要があります。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

正規表現 `unRegex` は、文字列 `One takes a vow to be a nun.` の `nun` にマッチする必要があります。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

正規表現 `unRegex` は、文字列 `She got fired from the hot dog stand for putting her hair in a bun.` の `bun` にマッチする必要があります。

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

正規表現 `unRegex` は、文字列 `There is a bug in my code.` にマッチしない必要があります。

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

正規表現 `unRegex` は、文字列 `Catch me if you can.` にマッチしない必要があります。

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
