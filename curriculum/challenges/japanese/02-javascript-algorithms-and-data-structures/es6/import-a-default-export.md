---
id: 587d7b8d367417b2b2512b59
title: デフォルトのエクスポートをインポートする
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

前回のチャレンジでは `export default` とその用法について学びました。 デフォルトのエクスポートをインポートするには、別の `import` 構文を使用する必要があります。 次の例では、`add` は `math_functions.js` ファイルのデフォルトのエクスポートです。 インポートする方法は次のとおりです。

```js
import add from "./math_functions.js";
```

構文は 1 か所重要な部分が異なっています。 インポートする値 `add` が波括弧 (`{}`) で囲まれていません。 ここでの `add` は、`math_functions.js` ファイルのデフォルトのエクスポートが何であっても、単なる変数名になります。 デフォルトをインポートするときは、ここで任意の名前を使用できます。

# --instructions--

次のコードで、このファイルと同じディレクトリにある `math_functions.js` ファイルからデフォルトのエクスポートをインポートしてください。 インポートしたものに `subtract` という名前を付けてください。

# --hints--

`math_functions.js` から `subtract` を適切にインポートする必要があります。

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

subtract(7,4);
```

# --solutions--

```js
import subtract from "./math_functions.js";

subtract(7,4);
```
