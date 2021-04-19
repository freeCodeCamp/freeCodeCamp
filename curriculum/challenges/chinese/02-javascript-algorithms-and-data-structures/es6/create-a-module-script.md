---
id: 5cddbfd622f1a59093ec611d
title: 创建一个模块脚本
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

起初，JavaScript 几乎只在 HTML web 扮演一个很小的角色。 今天，一切不同了，很多网站几乎全是用 JavaScript 所写。 为了让 JavaScript 更模块化、更整洁以及更易于维护，ES6 引入了在多个 JavaScript 文件之间共享代码的机制。 它可以导出文件的一部分供其它文件使用，然后在需要它的地方按需导入。 为了使用这一功能， 需要在 HTML 文档里创建一个 `type` 为 `module` 的脚本。 例子如下：

```html
<script type="module" src="filename.js"></script>
```

使用了 `module` 类型的脚本可以使用 `import` 和 `export` 特性（接下来的挑战会介绍）。

# --instructions--

给 HTML 文档添加 `module` 类型的脚本，指定源文件为 `index.js`。

# --hints--

应该创建一个 `script` 标签。

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

`script` 标签应该有一个值为 `module` 的 `type` 属性。

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

`script` 标签的 `src` 属性应该为 `index.js`。

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
