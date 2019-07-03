---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1

videoUrl: ''
localeTitle: Create an Export Fallback with export default
---

## Description
<section id='description'>
在<code>export</code>的课程中，你学习了<dfn>命名导出</dfn>的语法。这让你可以在其他文件中引用一些函数或者变量。
你还需要知道另外一种被称为<dfn>默认导出</dfn>的<code>export</code>的语法。在文件中只有一个值需要导出的时候，你通常会使用这种语法。它也常常用于给文件或者模块创建返回值。
下面是一个简单的<code>export default</code>例子：
<blockquote>export default function add(x,y) {<br>&nbsp;&nbsp;return x + y;<br>}</blockquote>
注意：当使用<code>export default</code>去声明一个文件或者模块的返回值，你在每个文件或者模块中应当只默认导出一个值。特别地，你能将<code>export deafult</code>与<code>var</code>，<code>let</code>与<code>const</code>一起使用。
</section>

## Instructions
<section id='instructions'>
下面的函数应该在这个模块中返回一个值。请添加需要的代码：
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确的使用<code>export</code>进行返回。
    testString: getUserInput => assert(getUserInput('index').match(/export\s+default\s+function\s+subtract\(x,y\)\s+{return\s+x\s-\s+y;}/g), '正确的使用<code>export</code>进行返回。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>











### Before Test
<div id='js-setup'>

```js
window.exports = function(){};
```

</div>




</section>

              