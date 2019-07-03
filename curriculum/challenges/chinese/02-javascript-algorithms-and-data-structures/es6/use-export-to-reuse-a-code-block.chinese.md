---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
challengeType: 1

videoUrl: ''
localeTitle: Use export to Reuse a Code Block
---

## Description
<section id='description'>
在上一个挑战中，你学习了关于<code>import</code>语句是如何从大文件中引入其中的部分代码的。但是，为了让其正常的工作，我们还必须了解一个与之相关的语句，叫做<code>export</code>。当我们想要一些代码——函数或者变量——在其他文件中使用，我们必须将它们导出来供其他文件导入。和<code>import</code>一样，<code>export</code>也是一个非浏览器的功能。
下面的例子阐述了如何进行一个命名导出。通过这样，我们可以使用上节课学习的<code>import</code>语法，将导出的代码导入到其他的文件中去。请看下面的例子：
<blockquote>const capitalizeString = (string) => {<br>&nbsp;&nbsp;return string.charAt(0).toUpperCase() + string.slice(1);<br>}<br>export { capitalizeString } //如何导出函数。<br>export const foo = "bar"; //如何导出变量。</blockquote>
另外，如果你想要将你所有的<code>export</code>语句打包成一行，你可以像下面这个例子一样实现：
<blockquote>const capitalizeString = (string) => {<br>&nbsp;&nbsp;return string.charAt(0).toUpperCase() + string.slice(1);<br>}<br>const foo = "bar";<br>export { capitalizeString, foo }</blockquote>
两种方式都是非常棒的实践。
</section>

## Instructions
<section id='instructions'>
下面有两个变量需要在别的文件中可以使用。利用刚才展示的第一种方式，导出两个变量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 导出了<code>foo</code>变量。
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+foo\s*=\s*"bar"/g), '导出了<code>foo</code>变量。');
  - text: 导出了<code>bar</code>变量。
    testString: getUserInput => assert(getUserInput('index').match(/export\s+const\s+bar\s*=\s*"foo"/g), '导出了<code>bar</code>变量。');

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

              