---
id: bad87fee1348bd9acdd08826
title: 了解 script 和 document.ready 是如何工作的
challengeType: 6
forumTopicId: 18224
---

# --description--

现在我们已经准备好学习有史以来最受欢迎的 JavaScript 框架——jQuery 了。

在使用 jQuery 之前，我们需要在 HTML 页面中添加一些东西。

首先，在页面顶部添加`script`标签，记得在后面为`script`标签添加结束标签。

浏览器在`script`标签中运行所有的 JavaScript 脚本包括 jQuery。

在`script`标签中添加代码`$(document).ready(function() {`。然后在后面（仍在该`script`标签内）用`});`闭合它。

稍后我们将详细介绍`functions`，现在需要知道的是，只要浏览器加载页面，`function`中放入的代码就会运行。

有一点很重要，如果没有`document ready function`，你的代码将在 HTML 页面呈现之前运行，这将导致错误。

# --hints--

创建一个`script`标签，确保其有效并具有闭合标签。

```js
assert(
  code.match(/<\/script\s*>/g) &&
    code.match(
      /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
    ) &&
    code.match(/<\/script\s*>/g).length ===
      code.match(
        /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
      ).length
);
```

在`script`的开头添加`$(document).ready(function() {`。

```js
assert(
  code.match(
    /\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g
  )
);
```

用`}&#41;;`闭合`$(document).ready(function() {`函数。

```js
assert(code.match(/\n*?\s*?\}\s*?\);/g));
```

# --solutions--

