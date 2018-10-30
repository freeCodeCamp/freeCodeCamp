---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
videoUrl: ''
localeTitle: 使用导出默认值创建导出回退
---

## Description
<section id="description">在<code>export</code>课程中，您了解了称为<dfn>命名导出</dfn>的语法。这使您可以使多个函数和变量可用于其他文件。您需要知道另一种<code>export</code>语法，称为<dfn>导出默认值</dfn> 。通常，如果只从文件导出一个值，您将使用此语法。它还用于为文件或模块创建回退值。以下是<code>export default</code>的快速示例： <blockquote> export default function add(x，y){ <br> &nbsp;&nbsp;return x + y; <br> } </blockquote>注意：由于<code>export default</code>用于声明模块或文件的回退值，因此每个模块或文件中只能有一个值作为默认导出。此外，您不能将<code>export default</code>用于<code>var</code> ， <code>let</code>或<code>const</code> </section>

## Instructions
<section id="instructions">以下函数应该是模块的回退值。请添加必要的代码。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 适当使用<code>export</code>回落。
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+default\s+function\s+subtract\(x,y\)\s+{return\s+x\s-\s+y;}/g), "Proper used of <code>export</code> fallback.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
function subtract(x,y) {return x - y;}

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
