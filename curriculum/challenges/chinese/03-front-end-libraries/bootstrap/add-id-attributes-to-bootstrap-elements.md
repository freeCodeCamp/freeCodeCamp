---
id: bad87fee1348bd9aec908853
challengeType: 0
forumTopicId: 16639
title: 给 Bootstrap 元素添加id属性
---

## Description
<section id='description'>
回忆一下，除了可以给元素添加 class 属性，我们还可以给元素设置 <code>id</code> 属性。
每个指定元素的 id 都是唯一的，并且在每个页面中都只能使用一次。
让我们为每个 class 为 <code>well</code> 的 <code>div</code> 元素添加一个唯一的 id。
记住，你可以这样给一个元素设置 ID。
<code>&#60;div class="well" id="center-well"&#62;</code>
把左边 well 的 ID 设置为 <code>left-well</code>。右边的 well 的 ID 设置为 <code>right-well</code>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 把左边的 <code>well</code> 的 ID 设置为 <code>left-well</code>。
    testString: assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0);
  - text: 把右边的 <code>well</code> 的 ID 设置为 <code>right-well</code>。
    testString: assert($(".col-xs-6").children("#right-well") && $(".col-xs-6").children("#right-well").length > 0);

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
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
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

</section>
