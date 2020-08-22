---
id: bad87fee1348bd9acdd08826
title: Learn How Script Tags and Document Ready Work
challengeType: 6
videoUrl: ''
localeTitle: 了解脚本标签和文档准备工作的方式
---

## Description
<section id="description">现在我们已经准备好学习jQuery，这是有史以来最流行的JavaScript工具。在我们开始使用jQuery之前，我们需要在HTML中添加一些内容。首先，在页面顶部添加一个<code>script</code>元素。请务必在以下行中关闭它。您的浏览器将在<code>script</code>元素中运行任何JavaScript，包括jQuery。在您的<code>script</code>元素中，添加以下代码： <code>$(document).ready(function() {</code>到您的<code>script</code> 。然后在以下行（仍然在您的<code>script</code>元素中）关闭它： <code>});</code>我们稍后会详细了解这些<code>functions</code> 。重要的是要知道，在浏览器加载页面后，您放入此<code>function</code>代码将立即运行。这很重要，因为没有您的<code>document ready function</code> ，您的代码可能会在HTML呈现之前运行，这会导致错误。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>script</code>元素，确保它有效并具有结束标记。
    testString: 'assert(code.match(/<\/script\s*>/g) && code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g) && code.match(/<\/script\s*>/g).length === code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g).length);'
  - text: '您应该将<code>$(document).ready (function() {</code>到<code>script</code>元素的开头。'
    testString: 'assert(code.match(/\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g));'
  - text: '关闭<code>$(document).ready (function() {</code> function with <code>});</code>'
    testString: 'assert(code.match(/\n*?\s*?\}\s*?\);/g));'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
