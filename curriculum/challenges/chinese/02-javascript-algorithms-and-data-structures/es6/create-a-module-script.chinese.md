---
id: 5cddbfd622f1a59093ec611d
title: Create a Module Script
challengeType: 6
forumTopicId: 301198
localeTitle: 创建一个模块脚本
---

## Description
<section id='description'>
起初，JavaScript 几乎只在 HTML web 扮演一个很小的角色。今天，一切不同了，很多网站几乎全是用 JavaScript 所写。为了让 JavaScript 更模块化、更整洁以及更易于维护，ES6 引入了在多个 JavaScript 文件之间共享代码的机制。它可以导出文件的一部分供其它文件使用，然后在需要它的地方按需导入。为了使用这一功能， 需要在 HTML 文档里创建一个类型为 <code>module</code> 的脚本。例子如下：

```html
<script type="module" src="filename.js"></script>
```

使用了 <code>module</code> 类型的脚本后可以再接下来的挑战里使用 <code>import</code> 和 <code>export</code> 特性。
</section>

## Instructions
<section id='instructions'>
给 HTML 文档添加 <code>module</code> 类型的脚本，指定源文件为 <code>index.js</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该创建一个 <code>script</code> 标签。
    testString: assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
  - text: <code>script</code> 标签的类型应该为 <code>module</code>。
    testString: assert(code.match(/<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g));
  - text: <code>script</code> 标签的 <code>src</code> 属性应该为 <code>index.js</code>。
    testString: assert(code.match(/<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<html>
  <body>
    <!-- add your code below -->

    <!-- add your code above -->
  </body>
</html>
```

</div>
</section>

## Solution
<section id='solution'>

```html
<html>
  <body>
    <!-- add your code below -->
    <script type="module" src="index.js"></script>
    <!-- add your code above -->
  </body>
</html>
```

</section>
