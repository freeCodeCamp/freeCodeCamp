---
id: 587d7b8c367417b2b2512b55
title: インポートを使用して JavaScript コードを再利用する
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` を使用すると、ファイルまたはモジュールのどの部分を読み込むかを選択できます。 前のレッスンの例では、`math_functions.js` ファイルから `add` をエクスポートしました。 次の方法で、別のファイルでインポートして使用することができます。

```js
import { add } from './math_functions.js';
```

ここでは、`import` は `math_functions.js` 内の `add` を見つけ、その関数だけをインポートして利用できるようにし、残りは無視します。 `./` は、現在のファイルと同じフォルダ内の `math_functions.js` ファイルを探すようにインポートに指示します。 この方法でインポートする場合は、相対ファイルパス (`./`) とファイル拡張子 (`.js`) が必要です。

ファイルから複数のアイテムをインポートするには、次のように `import` ステートメントにアイテムを追加します。

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

以前のレッスンでエクスポートした `uppercaseString` および `lowercaseString` 関数を現在のファイルで使用できるようにする、適切な `import` ステートメントを追加してください。 これらの関数は、現在のファイルと同じディレクトリにある `string_functions.js`というファイルに含まれています。

# --hints--

`uppercaseString` を正しくインポートする必要があります。

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

`lowercaseString` を正しくインポートする必要があります。

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
