---
id: 587d7b8c367417b2b2512b55
title: Understand the Differences Between import and require
challengeType: 1

videoUrl: ''
localeTitle: Understand the Differences Between import and require
---

## Description
<section id='description'>
在过去，我们会使用<code>require()</code>函数来从外部文件或模块中引入函数或者代码。这时候会遇到一个问题：有些文件或者模块会特别大，但你却往往只需要引入其中的一些核心代码。
ES6 给我们提供了<code>import</code>这个便利的工具。通过它，我们能够从外部的文件或者模块中选择我们需要的部分进行引入，从而节约载入的时间和内存空间。
请看下面的例子：想象<code>math_array_functions</code>拥有大概20个函数，但是我只需要<code>countItems</code>这一个函数在我当前的文件里。使用老的<code>require()</code>方式会强制我引入所有20个函数。而使用新的<code>import</code>语法，我可以只引入需要的那个函数：
<blockquote>import { countItems } from "math_array_functions"</blockquote>
下面是对于上面代码的语义描述：
<blockquote>import { function } from "file_path_goes_here"<br>// 我们还可以用同样的方式来引入变量！</blockquote>
对<code>import</code>的使用，有许多的写法，但是上面的例子是最常用的写法。
<strong>注意</strong><br>在大括号里的函数名的两侧加上空格是一个最佳实践——这可以帮助我们轻松的阅读<code>import</code>语句。
<strong>注意</strong><br>本节课中进行的是一个非浏览器操作。<code>import</code>以及与其相关的在后面课程中的语句，是无法直接在浏览器上运行的。但是，我们可以通过一些工具来使它可以在浏览器中运行。
<strong>注意</strong><br>在许多的例子中，在文件的路径前会加上<code>./</code>；否则， node.js 会先尝试去<code>node_modules</code>目录中寻找依赖项。
</section>

## Instructions
<section id='instructions'>
添加正确的<code>import</code>语句，允许当前文件使用<code>capitalizeString</code>函数。这个函数是在与当前文件同一目录下的<code>"string_functions"</code>文件中声明的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 有效的<code>import</code>语句。
    testString: getUserInput => assert(getUserInput('index').match(/import\s+\{\s*capitalizeString\s*\}\s+from\s+("|')string_functions\1/g), '有效的<code>import</code>语句。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>











### Before Test
<div id='js-setup'>

```js
window.require = function (str) {
if (str === 'string_functions') {
return {
capitalizeString: str => str.toUpperCase()
}}};
```

</div>




</section>

              