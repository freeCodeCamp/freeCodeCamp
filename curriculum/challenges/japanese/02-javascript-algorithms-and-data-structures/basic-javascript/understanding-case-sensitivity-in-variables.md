---
id: 56533eb9ac21ba0edf2244ab
title: 変数の大文字と小文字の区別を理解する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

JavaScript では、すべての変数名および関数名は大文字と小文字を区別します。 これは大文字の使い方が重要であることを意味します。

`MYVAR` は `MyVar` や `myvar` と同じではありません。 同じ名前で大文字・小文字が異なる、複数の別々の変数を持つことができます。 明確さを維持するためには、この言語機能を*使用しない*ことを強く推奨します。

**ベストプラクティス**

JavaScript では <dfn>camelCase (キャメルケース)</dfn> で変数名を書きましょう。 <dfn>キャメルケース</dfn>は、複数の単語からなる変数名であり、最初の単語の最初の文字は小文字で、後続の単語の最初の文字は大文字にします。

**例:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

変数名として<dfn>キャメルケース</dfn>を使用するよう、既存の宣言と割り当てを変更してください。

新しい変数を作成しないでください。

# --hints--

`studlyCapVar` が定義され、値 `10` を持つ必要があります。

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` が定義され、文字列 `A String` を持つ必要があります。

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` が定義され、値 `9000` を持つ必要があります。

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` は宣言部分と割り当て部分の両方でキャメルケースを使用する必要があります。

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` は宣言部分と割り当て部分の両方でキャメルケースを使用する必要があります。

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` は宣言部分と割り当て部分の両方でキャメルケースを使用する必要があります。

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
