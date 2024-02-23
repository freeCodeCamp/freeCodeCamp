---
id: 587d7db4367417b2b2512b90
title: 異なる候補の文字列にマッチさせる
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

`/coding/` のような正規表現を使用すると、別の文字列にあるパターン `coding` を検索できます。

これは単一の文字列を検索するのにとても便利ですが、1 つのパターンのみに限定されています。 `alternation` または `OR` 演算子と呼ばれる `|` を使用すると、複数のパターンを検索できます。

この演算子はその前後のパターンにマッチします。 たとえば、文字列 `yes` または `no` にマッチさせたい場合、必要な正規表現は `/yes|no/` となります。

また、3 つ以上のパターンを検索することもできます。 それには `OR` 演算子を増やして `/yes|no|maybe/` のように分割し、より多くのパターンを追加します。

# --instructions--

正規表現 `petRegex` を完成させて、ペット `dog`、`cat`、`bird`、または `fish` にマッチさせてください。

# --hints--

正規表現 `petRegex` は文字列 `John has a pet dog.` に対して `true` を返す必要があります。

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

正規表現 `petRegex` は文字列 `Emma has a pet rock.` に対して `false` を返す必要があります。

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

正規表現 `petRegex` は文字列 `Emma has a pet bird.` に対して `true` を返す必要があります。

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

正規表現 `petRegex` は文字列 `Liz has a pet cat.` に対して `true` を返す必要があります。

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

正規表現 `petRegex` は文字列 `Kara has a pet dolphin.` に対して `false` を返す必要があります。

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

正規表現 `petRegex` は文字列 `Alice has a pet fish.` に対して `true` を返す必要があります。

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

正規表現 `petRegex` は文字列 `Jimmy has a pet computer.` に対して `false` を返す必要があります。

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
