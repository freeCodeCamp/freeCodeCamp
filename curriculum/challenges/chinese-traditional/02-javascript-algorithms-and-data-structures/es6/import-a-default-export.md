---
id: 587d7b8d367417b2b2512b59
title: 導入一個默認的導出
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

在上一個挑戰裏，學習了 `export default` 的用法。 還需要一種 `import` 的語法來導入默認的導出。 在下面的例子裏，`add` 是 `math_functions.js` 文件的默認導出。 以下是如何導入它：

```js
import add from "./math_functions.js";
```

這個語法有一處特別的地方， 被導入的 `add` 值沒有被花括號（`{}`）所包圍。 `add` 只是一個變量的名字，對應 `math_functions.js` 文件的任何默認導出值。 在導入默認導出時，可以使用任何名字。

# --instructions--

在下面的代碼中，導入同一目錄中 `math_functions.js` 文件的默認導出。 導入變量的名字爲 `subtract`。

# --hints--

應從 `math_functions.js` 中正確導入 `subtract`。

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
