---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
forumTopicId: 301205
localeTitle: 导入一个默认的导出
---

## Description
<section id='description'>
在上一个挑战里，学习了<code>export default</code>的用法。还需要一种<code>import</code>的语法来导入默认的导出。
在下面的例子里有一个<code>add</code>函数, 它在<code>"math_functions"</code>文件里默认被导出。来看看来如何导入它：

```js
import add from "./math_functions.js";
```

这个语法只有一处不同的地方 —— 被导入的<code>add</code>值，并没有被花括号<code>{}</code>所包围。与导出值的方法不同，导入默认导出的写法仅仅只是简单的将变量名写在<code>import</code>之后。
</section>

## Instructions
<section id='instructions'>
在下面的代码中，请导入在同目录下的<code>"math_functions"</code>文件中默认导出的<code>subtract</code>值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确导入<code>export default</code>方法导出的值。
    testString: assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
  
// add code above this line

subtract(7,4);
```

</div>
</section>

## Solution
<section id='solution'>

```js
import subtract from "./math_functions.js";
// add code above this line

subtract(7,4);
```

</section>
