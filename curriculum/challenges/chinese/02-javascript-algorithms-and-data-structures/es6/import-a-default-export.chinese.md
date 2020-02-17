---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
videoUrl: ''
localeTitle: 导入默认导出
---

## Description
<section id="description">在上一次挑战中，您了解了<code>export default</code>及其用途。请务必注意，要导入默认导出，您需要使用不同的<code>import</code>语法。在下面的示例中，我们有一个函数<code>add</code> ，它是文件的默认导出<code>&quot;math_functions&quot;</code> 。以下是如何导入它： <blockquote>从“math_functions”导入添加; <br>添加（5,4）; //将返回9 </blockquote>语法在一个关键位置有所不同 - 导入的值<code>add</code>不会被花括号<code>{}</code>包围。与导出值不同，导入默认导出的主要方法是在<code>import</code>后简单地写入值的名称。 </section>

## Instructions
<section id="instructions">在下面的代码中，请从文件<code>&quot;math_functions&quot;</code>导入默认导出， <code>subtract</code> ，该文件位于与此文件相同的目录中。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确导入<code>export default</code>方法。
    testString: assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
subtract(7,4);

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'math_functions') {
return function(a, b) {
return a - b;
}}};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
