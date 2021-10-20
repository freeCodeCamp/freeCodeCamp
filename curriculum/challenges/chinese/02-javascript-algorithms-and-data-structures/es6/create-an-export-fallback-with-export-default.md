---
id: 587d7b8c367417b2b2512b58
title: 用 export default 创建一个默认导出
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

在 `export` 的课程中，你学习了<dfn>命名导出</dfn>语法， 这可以在其他文件中引用一些函数或者变量。

还需要了解另外一种被称为<dfn>默认导出</dfn>的 `export` 的语法。 在文件中只有一个值需要导出的时候，通常会使用这种语法。 它也常常用于给文件或者模块创建返回值。

下面是使用 `export default` 的例子：

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

第一个是命名函数，第二个是匿名函数。

`export default` 用于为模块或文件声明一个返回值，在每个文件或者模块中应当只默认导出一个值。 此外，你不能将 `export default` 与 `var`、`let` 或 `const` 同时使用。

# --instructions--

下面的函数应该在这个模块中返回一个值。 请添加需要的代码。

# --hints--

正确地使用 `export` 返回值。

```js
assert(
  code.match(
    /export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g
  )
);
```

# --seed--

## --seed-contents--

```js
function subtract(x, y) {
  return x - y;
}
```

# --solutions--

```js
export default function subtract(x, y) {
  return x - y;
}
```
