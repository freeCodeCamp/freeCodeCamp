---
id: bad87fee1348bd9aed908826
title: Change the CSS of an Element Using jQuery
challengeType: 0

videoUrl: ''
localeTitle: Change the CSS of an Element Using jQuery
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
  - text: <code>target1</code>标签应该有红色文本。
    testString: assert($("#target1").css("color") === 'rgb(255, 0, 0)', '<code>target1</code>标签应该有红色文本。');
  - text: 仅用 jQuery 给标签添加类。
    testString: assert(!code.match(/class.*animated/g), '仅用 jQuery 给标签添加类。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<script>,  $(document).ready(function() {,    $("button").addClass("animated bounce");,    $(".well").addClass("animated shake");,    $("#target3").addClass("animated fadeOut");,    $("button").removeClass("btn-default");,,  });,</script>,,<!-- 请修改本行以上的代码 -->,,<div class="container-fluid">,  <h3 class="text-primary text-center">jQuery Playground</h3>,  <div class="row">,    <div class="col-xs-6">,      <h4>#left-well</h4>,      <div class="well" id="left-well">,        <button class="btn btn-default target" id="target1">#target1</button>,        <button class="btn btn-default target" id="target2">#target2</button>,        <button class="btn btn-default target" id="target3">#target3</button>,      </div>,    </div>,    <div class="col-xs-6">,      <h4>#right-well</h4>,      <div class="well" id="right-well">,        <button class="btn btn-default target" id="target4">#target4</button>,        <button class="btn btn-default target" id="target5">#target5</button>,        <button class="btn btn-default target" id="target6">#target6</button>,      </div>,    </div>,  </div>,</div>
```





</div>





</section>

              