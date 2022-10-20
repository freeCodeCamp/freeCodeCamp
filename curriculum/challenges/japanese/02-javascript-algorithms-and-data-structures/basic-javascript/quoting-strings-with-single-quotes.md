---
id: 56533eb9ac21ba0edf2244b4
title: 文字列を 1 種類の引用符で囲む
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

JavaScript で<dfn>文字列</dfn>の値を記述するときは、開始と終了の引用符が同じ種類であればシングルクォートとダブルクォートのどちらも使用できます。 他のいくつかのプログラミング言語とは違い、JavaScript ではシングルクォートとダブルクォートは同様に機能します。

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

1 つの文字列の中で両方の種類の引用符を使用したい場合、一方の引用符を他方の引用符の中で使用する必要があります。 たとえば、引用符で囲まれた会話を文字列に保存したい場合があります。 また、引用符で囲まれたさまざまな属性を持つ `<a>` タグをまとめて文字列の中に保存したいという場合もあります。

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

ただし、最も外側の引用符を文字列の中で使用する必要がある場合には、問題となります。 前述のように、文字列の開始と終了には同じ種類の引用符を使用します。 しかし、その同じ引用符が中間のどこかに存在する場合は、文字列が意図したよりも早く終了してしまいエラーとなります。

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

この例の `badStr` はエラーを返します。

上記の <dfn>goodStr</dfn> では、バックスラッシュ (日本語では円記号) `\` をエスケープ文字として使用することで、両方の引用符を問題なく使用することができます。

**注:** バックスラッシュ `\` を斜線 `/` と混同しないでください。 これらの動作は同じではありません。

# --instructions--

用意された文字列を、開始と終了をシングルクォートで囲んだ、エスケープ文字を含まない文字列に変更してください。

現在、文字列の中の `<a>` タグでは至る所でダブルクォートが使用されています。 外側の引用符をシングルクォートに変更して、エスケープ文字を削除できるようにする必要があります。

# --hints--

すべてのバックスラッシュ (`\`) を削除する必要があります。

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

2 つのシングルクォート `'` と 4 つのダブルクォート `"` を使用する必要があります。

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
