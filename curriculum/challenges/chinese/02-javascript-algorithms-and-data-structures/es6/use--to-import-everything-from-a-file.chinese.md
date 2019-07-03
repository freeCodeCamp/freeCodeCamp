---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1

videoUrl: ''
localeTitle: Use * to Import Everything from a File
---

## Description
<section id='description'>
我们还可以用<code>import</code>语法从文件中导入所有的内容。
下面是一个从同目录下的<code>"math_functions"</code>文件中导入所有内容的例子：
<blockquote>import * as myMathModule from "math_functions";<br>myMathModule.add(2,3);<br>myMathModule.subtract(5,3);</blockquote>
让我们来分析一下这段代码：
<blockquote>import * as object_with_name_of_your_choice from "file_path_goes_here"<br>object_with_name_of_your_choice.imported_function</blockquote>
你可以在<code>import * as</code>之后添加任意的名称。这个方法接收到的值是一个对象，你可以使用点表示法来获取对象里具体的值。
</section>

## Instructions
<section id='instructions'>
下面的代码需要从同目录下的<code>"capitalize_strings"</code>文件中导入所有内容。使用提供的对象，在当前文件的顶部添加正确的<code>import *</code>语句
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确使用<code>import * as</code>语法。
    testString: assert(code.match(/import\s+\*\s+as\s+[a-zA-Z0-9_$]+\s+from\s*"\s*capitalize_strings\s*"\s*;/gi), '正确使用<code>import * as</code>语法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>











### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'capitalize_strings') {
return {
capitalize: str => str.toUpperCase(),
lowercase: str => str.toLowerCase()
}}};
```

</div>




</section>

              