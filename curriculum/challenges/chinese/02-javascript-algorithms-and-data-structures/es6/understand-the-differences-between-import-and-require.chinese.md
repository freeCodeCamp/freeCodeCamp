---
id: 587d7b8c367417b2b2512b55
title: Understand the Differences Between import and require
challengeType: 1
videoUrl: ''
localeTitle: 理解import和require之间的差异
---

## Description
<section id="description">过去，函数<code>require()</code>将用于导入外部文件和模块中的函数和代码。虽然方便，但这会带来一个问题：某些文件和模块相当大，您可能只需要来自这些外部资源的某些代码。 ES6为我们提供了一个非常方便的工具，称为<dfn>import</dfn> 。有了它，我们可以选择加载到给定文件中的模块或文件的哪些部分，从而节省时间和内存。请考虑以下示例。想象一下<code>math_array_functions</code>有大约20个函数，但我在当前文件中只需要一个<code>countItems</code> 。旧的<code>require()</code>方法会迫使我引入所有20个函数。使用这种新的<code>import</code>语法，我可以引入所需的功能，如下所示： <blockquote>从“math_array_functions”导入{countItems} </blockquote>上面代码的描述： <blockquote>从“file_path_goes_here”导入{function} <br> //我们也可以用同样的方式导入变量！ </blockquote>有几种方法可以编写<code>import</code>语句，但上面是一个非常常见的用例。 <strong>注意</strong> <br>花括号内的函数周围的空格是最佳实践 - 它使得读取<code>import</code>语句更容易。 <strong>注意</strong> <br>本节中的课程处理非浏览器功能。 <code>import</code>以及我们在其余课程中介绍的语句将无法直接在浏览器上运行。但是，我们可以使用各种工具来创建代码，使其在浏览器中工作。 <strong>注意</strong> <br>在大多数情况下，文件路径在它之前需要<code>./</code> ;否则，node将首先尝试将其作为依赖项加载到<code>node_modules</code>目录中。 </section>

## Instructions
<section id="instructions">添加适当的<code>import</code>语句，允许当前文件使用<code>capitalizeString</code>函数。此函数所在的文件称为<code>&quot;string_functions&quot;</code> ，它与当前文件位于同一目录中。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 有效的<code>import</code>声明
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+\{\s*capitalizeString\s*\}\s+from\s+("|")string_functions\1/g), "valid <code>import</code> statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
capitalizeString("hello!");

```

</div>

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

## Solution
<section id='solution'>

```js
// solution required
```
</section>
