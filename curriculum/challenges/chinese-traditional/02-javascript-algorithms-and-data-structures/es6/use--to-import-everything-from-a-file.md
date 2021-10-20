---
id: 587d7b8c367417b2b2512b57
title: 用 * 從文件中導入所有內容
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

假設你有一個文件，你希望將其所有內容導入到當前文件中。 可以用 `import * as` 語法來實現。 下面是一個從同目錄下的 `math_functions.js` 文件中導入所有內容的例子：

```js
import * as myMathModule from "./math_functions.js";
```

上面的 `import` 語句會創建一個叫作 `myMathModule` 的對象。 這只是一個變量名，可以隨便命名。 對象包含 `math_functions.js` 文件裏的所有導出，可以像訪問對象的屬性那樣訪問裏面的函數。 下面是使用導入的 `add` 和 `subtract` 函數的例子：

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

下面的代碼需要從同目錄下的 `string_functions.js` 文件中導入所有內容。 使用 `import * as` 語法將文件的所有內容導入對象 `stringFunctions`。

# --hints--

正確使用 `import * as` 語法。

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
