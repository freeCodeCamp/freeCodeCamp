---
id: 587d7b8c367417b2b2512b55
title: 通過 import 複用 JavaScript 代碼
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` 可以導入文件或模塊的一部分。 在之前的課程裏，例子從 `math_functions.js` 文件裏導出了 `add`。 下面看一下如何在其它文件導入它：

```js
import { add } from './math_functions.js';
```

在這裏，`import` 會在 `math_functions.js` 裏找到 `add`，只導入這個函數，忽略剩餘的部分。 `./` 告訴程序在當前文件的相同目錄尋找 `math_functions.js` 文件。 用這種方式導入時，相對路徑（`./`）和文件擴展名（`.js`）都是必需的。

通過在 `import` 語句裏添加項目，可以從文件裏導入多個項目，如下：

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

添加 `import` 語句，使當前文件可以使用你在之前課程裏導出的 `uppercaseString` 和 `lowercaseString` 函數。 函數在當前路徑下的 `string_functions.js` 文件裏。

# --hints--

應該導入 `uppercaseString`。

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

應該導入 `lowercaseString`。

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
