---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
videoUrl: ''
localeTitle: 使用*从文件导入所有内容
---

## Description
<section id="description">假设您有一个文件要将其所有内容导入当前文件。这可以使用<dfn>import *</dfn>语法完成。这是一个示例，其中名为<code>&quot;math_functions&quot;</code>的文件的内容被导入到同一目录中的文件中： <blockquote>从“math_functions”导入*作为myMathModule; <br> myMathModule.add（2,3）; <br> myMathModule.subtract（5,3）; </blockquote>并打破代码： <blockquote>从“file_path_goes_here”导入* as object_with_name_of_your_choice <br> object_with_name_of_your_choice.imported_function </blockquote>您可以使用<code>import * as</code>后面的任何名称<code>import * as</code>语句的一部分。为了使用此方法，它需要一个接收导入值的对象。从这里，您将使用点表示法来调用导入的值。 </section>

## Instructions
<section id="instructions">下面的代码需要在导入的同一目录中找到的文件<code>&quot;capitalize_strings&quot;</code>的内容。使用提供的对象将相应的<code>import *</code>语句添加到文件的顶部。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确使用<code>import * as</code>语法。
    testString: 'assert(code.match(/import\s+\*\s+as\s+[a-zA-Z0-9_$]+\s+from\s*"\s*capitalize_strings\s*"\s*;/gi), "Properly uses <code>import * as</code> syntax.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";

```

</div>

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

## Solution
<section id='solution'>

```js
// solution required
```
</section>
