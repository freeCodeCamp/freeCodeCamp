---
id: 587d7b8c367417b2b2512b55
title: 通过 import 复用 JavaScript 代码
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` 可以导入文件或模块的一部分。 在之前的课程里，例子从 `math_functions.js` 文件里导出了 `add`。 下面看一下如何在其它文件导入它：

```js
import { add } from './math_functions.js';
```

在这里，`import` 会在 `math_functions.js` 里找到 `add`，只导入这个函数，忽略剩余的部分。 `./` 告诉程序在当前文件的相同目录寻找 `math_functions.js` 文件。 用这种方式导入时，相对路径（`./`）和文件扩展名（`.js`）都是必需的。

通过在 `import` 语句里添加项目，可以从文件里导入多个项目，如下：

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

添加 `import` 语句，使当前文件可以使用你在之前课程里导出的 `uppercaseString` 和 `lowercaseString` 函数。 函数在当前路径下的 `string_functions.js` 文件里。

# --hints--

应该导入 `uppercaseString`。

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

应该导入 `lowercaseString`。

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
