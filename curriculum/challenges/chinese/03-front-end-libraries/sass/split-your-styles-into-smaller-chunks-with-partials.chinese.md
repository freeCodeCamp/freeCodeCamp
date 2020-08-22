---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
videoUrl: ''
localeTitle: 使用Partials将您的样式拆分为较小的块
---

## Description
<section id="description"> <code>Partials</code>在萨斯是持有的CSS代码段单独的文件。这些是在其他Sass文件中导入和使用的。这是将类似代码分组到模块中以保持组织有效的好方法。 <code>partials</code>名称以下划线（ <code>_</code> ）字符开头，告诉Sass它是CSS的一小部分，而不是将其转换为CSS文件。此外，Sass文件以<code>.scss</code>文件扩展名结尾。要将<code>partial</code>的代码放入另一个Sass文件中，请使用<code>@import</code>指令。例如，如果所有<code>mixins</code>都保存在名为“_mixins.scss”的<code>partial</code> ，并且在“main.scss”文件中需要它们，则这是在主文件中使用它们的方法： <blockquote> //在main.scss文件中<br><br> @import&#39;commpins&#39; </blockquote>请注意， <code>import</code>语句中不需要下划线 -  Sass理解它是<code>partial</code> 。将<code>partial</code>导入文件后，可以使用所有变量， <code>mixins</code>和其他代码。 </section>

## Instructions
<section id="instructions">编写<code>@import</code>语句，将名为<code>_variables.scss</code>的<code>partial</code>导入main.scss文件。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>@import</code>指令，并且不应在文件名中包含下划线。
    testString: assert(code.match(/@import\s+?('|")variables\1/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
// The main.scss file

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
