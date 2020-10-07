---
id: bad87fee1348bd9acdd08826
challengeType: 6
forumTopicId: 18224
title: 了解 script 和 document.ready 是如何工作的
---

## Description
<section id='description'>
现在我们已经准备好学习有史以来最受欢迎的 JavaScript 框架——jQuery 了。
在使用 jQuery 之前，我们需要在 HTML 页面中添加一些东西。
首先，在页面顶部添加<code>script</code>标签，记得在后面为<code>script</code>标签添加结束标签。
浏览器在<code>script</code>标签中运行所有的 JavaScript 脚本包括 jQuery。
在<code>script</code>标签中添加代码<code>$(document).ready(function() {</code>。然后在后面（仍在该<code>script</code>标签内）用<code>});</code>闭合它。
稍后我们将详细介绍<code>functions</code>，现在需要知道的是，只要浏览器加载页面，<code>function</code>中放入的代码就会运行。
有一点很重要，如果没有<code>document ready function</code>，你的代码将在 HTML 页面呈现之前运行，这将导致错误。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>script</code>标签，确保其有效并具有闭合标签。
    testString: 'assert(code.match(/<\/script\s*>/g) && code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g) && code.match(/<\/script\s*>/g).length === code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g).length);'
  - text: 在<code>script</code>的开头添加<code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code>。
    testString: 'assert(code.match(/\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g));'
  - text: 用<code>}&#41;;</code>闭合<code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code>函数。
    testString: 'assert(code.match(/\n*?\s*?\}\s*?\);/g));'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!-- 请把你的代码写在这行以上 -->

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

```html
<script>
  $(document).ready(function() {
  });
</script>
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

</section>
