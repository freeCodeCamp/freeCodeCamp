---
id: bad87fee1348bd9aec908854
challengeType: 0
forumTopicId: 18223
title: 给 Bootstrap Wells 贴标签
---

## Description
<section id='description'>
为了让我们页面逻辑更清晰，让我们为 wells 都标上它们的 id 吧。
在 left-well 的上一层，class 属性为 <code>col-xs-6</code> 的 <code>div</code> 元素里面，增加一个文本为 <code>#left-well</code> 的 <code>h4</code> 元素。
在 right-well 的上一层，class 属性为 <code>col-xs-6</code> 的 <code>div</code> 元素里面，增加一个文本为 <code>#right-well</code> 的 <code>h4</code> 元素。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "为每个 <code>&#60;div class='col-xs-6'&#62;</code> 元素添加一个 <code>h4</code> 元素。"
    testString: assert($(".col-xs-6").children("h4") && $(".col-xs-6").children("h4").length > 1);
  - text: 其中一个 <code>h4</code> 元素应该含有文本内容 <code>#left-well</code>。
    testString: assert(new RegExp("#left-well","gi").test($("h4").text()));
  - text: 其中一个 <code>h4</code> 元素应该含有文本内容 <code>#right-well</code>。
    testString: assert(new RegExp("#right-well","gi").test($("h4").text()));
  - text: 确保每个 <code>h4</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/h4>/g) && code.match(/<h4/g) && code.match(/<\/h4>/g).length === code.match(/<h4/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
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
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

</section>
