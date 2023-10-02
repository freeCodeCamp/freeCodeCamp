---
id: 587d7b8c367417b2b2512b57
title: 用 * 从文件中导入所有内容
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

假设你有一个文件，你希望将其所有内容导入到当前文件中。 可以用 `import * as` 语法来实现。 下面是一个从同目录下的 `math_functions.js` 文件中导入所有内容的例子：

```js
import * as myMathModule from "./math_functions.js";
```

上面的 `import` 语句会创建一个叫作 `myMathModule` 的对象。 这只是一个变量名，可以随便命名。 对象包含 `math_functions.js` 文件里的所有导出，可以像访问对象的属性那样访问里面的函数。 下面是使用导入的 `add` 和 `subtract` 函数的例子：

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

下面的代码需要从同目录下的 `string_functions.js` 文件中导入所有内容。 使用 `import * as` 语法将文件的所有内容导入对象 `stringFunctions`。

# --hints--

正确使用 `import * as` 语法。

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
