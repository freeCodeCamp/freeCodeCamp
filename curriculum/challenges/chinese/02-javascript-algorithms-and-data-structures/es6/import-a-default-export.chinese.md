---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1

videoUrl: ''
localeTitle: Import a Default Export
---

## Description
<section id='description'>
在上一个挑战里，你学会了<code>export default</code>的用法。还有一个重要的点，你可能需要另外一种<code>import</code>的语法来导入默认导出。
在下面的例子里有一个<code>add</code>函数, 它在<code>"math_functions"</code>文件里默认被导出。让我们看看来如何导入它：
<blockquote>import add from "math_functions";<br>add(5,4); //将会返回 9</blockquote>
这个语法只有一处不同的地方 —— 被导入的<code>add</code>值，并没有被花括号<code>{}</code>所包围。与导出值的方法不同，导入默认导出的写法仅仅只是简单的讲变量名写在<code>import</code>之后。
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
    testString: getUserInput => assert(getUserInput('index').match(/import\s+subtract\s+from\s+"math_functions"/g), '正确导入<code>export default</code>方法导出的值。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>











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

              