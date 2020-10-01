---
id: 587d7b8c367417b2b2512b55
title: Reuse Javascript Code Using import
challengeType: 1
forumTopicId: 301208
localeTitle: 通过 import 复用 JavaScript 代码
---

## Description
<section id='description'>
<code>import</code> 可以导入文件或模块的一部分。在之前的课程里，例子从 <code>math_functions.js</code> 文件里导出了 <code>add</code>，下面看一下如何在其它的文件导入它：

```js
import { add } from './math_functions.js';
```

在这里，<code>import</code> 会在 <code>math_functions.js</code> 里找到 <code>add</code>，只导入这个函数，忽略剩余的部分。<code>./</code> 告诉程序在当前文件的相同目录寻找 <code>math_functions.js</code> 文件。用这种方式导入时，相对路径（<code>./</code>）和文件扩展名（<code>.js</code>）都是必需的。

可以在导入语句里导入多个项目，如下：

```js
import { add, subtract } from './math_functions.js';
```

</section>

## Instructions
<section id='instructions'>
添加 <code>import</code> 语句，使当前文件可以使用你在之前课程里导出的 <code>uppercaseString</code> 和 <code>lowercaseString</code> 函数，函数在当前路径下的 <code>string_functions.js</code> 文件里。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该导入 <code>uppercaseString</code>、
    testString: assert(code.match(/import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g));
  - text: 应该导入 <code>lowercaseString</code>、
    testString: assert(code.match(/import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
  
// add code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

</div>
</section>

## Solution
<section id='solution'>

```js
import { uppercaseString, lowercaseString } from './string_functions.js';
// add code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

</section>
