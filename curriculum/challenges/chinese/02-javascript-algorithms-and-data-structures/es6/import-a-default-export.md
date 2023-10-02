---
id: 587d7b8d367417b2b2512b59
title: 导入一个默认的导出
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

在上一个挑战里，学习了 `export default` 的用法。 还需要一种 `import` 的语法来导入默认的导出。 在下面的例子里，`add` 是 `math_functions.js` 文件的默认导出。 以下是如何导入它：

```js
import add from "./math_functions.js";
```

这个语法有一处特别的地方， 被导入的 `add` 值没有被花括号（`{}`）所包围。 `add` 只是一个变量的名字，对应 `math_functions.js` 文件的任何默认导出值。 在导入默认导出时，可以使用任何名字。

# --instructions--

在下面的代码中，导入同一目录中 `math_functions.js` 文件的默认导出。 导入变量的名字为 `subtract`。

# --hints--

应从 `math_functions.js` 中正确导入 `subtract`。

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
