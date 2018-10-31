---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
challengeType: 1
videoUrl: ''
localeTitle: 使用export重用代码块
---

## Description
<section id="description">在之前的挑战中，您了解了<code>import</code>以及如何利用它从大型文件导入少量代码。但是，为了使其工作，我们必须使用<code>import</code>一个语句，称为<dfn>导出</dfn> 。当我们想要一些代码 - 一个函数或一个变量 - 可以在另一个文件中使用时，我们必须将其导出才能将其导入另一个文件。与<code>import</code>一样， <code>export</code>是非浏览器功能。以下是我们称为<dfn>命名导出的内容</dfn> 。有了这个，我们可以使用您在上一课中学到的<code>import</code>语法将我们导出的任何代码导入到另一个文件中。这是一个例子： <blockquote> const capitalizeString =（string）=&gt; { <br> return string.charAt（0）.toUpperCase（）+ string.slice（1）; <br> } <br> export {capitalizeString} //如何导出函数。 <br> export const foo =“bar”; //如何导出变量</blockquote>或者，如果您想将所有<code>export</code>语句压缩成一行，则可以采用以下方法： <blockquote> const capitalizeString =（string）=&gt; { <br> return string.charAt（0）.toUpperCase（）+ string.slice（1）; <br> } <br> const foo =“bar”; <br> export {capitalizeString，foo} </blockquote>两种方法都是完全可以接受的。 </section>

## Instructions
<section id="instructions">下面是我想让其他文件使用的两个变量。利用我演示<code>export</code>的第一种方式，导出两个变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foo</code>被导出了。
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+foo\s*=\s*"bar"/g), "<code>foo</code> is exported.");'
  - text: <code>bar</code>出口。
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+bar\s*=\s*"foo"/g), "<code>bar</code> is exported.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
const foo = "bar";
const bar = "foo";

```

</div>

### Before Test
<div id='js-setup'>

```js
window.exports = function(){};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
