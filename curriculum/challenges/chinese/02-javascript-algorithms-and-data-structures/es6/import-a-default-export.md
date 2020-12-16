---
id: 587d7b8d367417b2b2512b59
title: 导入一个默认的导出
challengeType: 1
forumTopicId: 301205
---

# --description--

在上一个挑战里，学习了`export default`的用法。还需要一种`import`的语法来导入默认的导出。

在下面的例子里有一个`add`函数, 它在`"math_functions"`文件里默认被导出。来看看来如何导入它：

```js
import add from "./math_functions.js";
```

这个语法只有一处不同的地方 —— 被导入的`add`值，并没有被花括号`{}`所包围。与导出值的方法不同，导入默认导出的写法仅仅只是简单的将变量名写在`import`之后。

# --instructions--

在下面的代码中，请导入在同目录下的`"math_functions"`文件中默认导出的`subtract`值。

# --hints--

正确导入`export default`方法导出的值。

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --solutions--

